import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AddCustomerContractParam, CustomerContractParam, CustomerContractUploadViewModel, CustomerContractViewModel } from '../../models/customer-contract.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CustomerContractService } from '../../services/customer-contract.service';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { catchError, finalize, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import * as saveAs from 'file-saver';
import { Workbook } from 'exceljs';
import { exportDataGrid } from "devextreme/excel_exporter";
import { SelectBox } from 'src/app/modules/shared/models/selectBox.model';
import { DataStoreService } from 'src/app/modules/shared/services/DataStore.service';
@Component({
  selector: 'app-customer-contract',
  templateUrl: './customer-contract.component.html',
  styleUrls: ['./customer-contract.component.css']
})
export class CustomerContractComponent implements OnInit {

  @ViewChild('importTemplate') importTemplate!: TemplateRef<any>;
  @ViewChild('grid') grid!: DxDataGridComponent;
  @ViewChild('addContact') addContact!: TemplateRef<any>;
  @ViewChild('editContact') editContact!: TemplateRef<any>;
  public param: CustomerContractParam = new CustomerContractParam();
  public addParam: AddCustomerContractParam = new AddCustomerContractParam();
  public fileToUpload: any;
  public modalRef!: BsModalRef;
  public clickImport: boolean = false;
  public canClick: boolean = false;
  public isEdit: boolean = false;
  public dataForUpload: CustomerContractUploadViewModel[] = [];
  public dataSource: CustomerContractViewModel[] = [];

  public customerData: SelectBox[] = [];
  public provinceData: SelectBox[] = [];
  public districtData: SelectBox[] = [];

  constructor(private modalService: BsModalService,
    private service: CustomerContractService,
    private sharedService: DataStoreService) { }

  ngOnInit() {
    this.service.initial().subscribe(res => {
      this.dataSource = res;
    })
    this.sharedService.getProvinceDataSource().subscribe(res => {
      this.provinceData = res;
    })
    this.sharedService.getDistrictDataSource().subscribe(res => {
      this.districtData = res;
    })
    this.sharedService.getCustomerDataSource().subscribe(res => {
      this.customerData = res;
    })
  }

  public onClickSearch(): void {

  }

  public onClickClear(): void {
    this.param = new CustomerContractParam();
  }

  public onClickExport() {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Main sheet');
    const component = this.grid?.instance;
    this.grid?.instance.columnOption('result', 'visible', true);
    exportDataGrid({
      component: component,
      worksheet: worksheet,
      customizeCell: (options) => {
        options.excelCell.font = { name: 'Arial', size: 12 };
        options.excelCell.alignment = { horizontal: 'left' };
      }
    }).then(() => {
      workbook.xlsx.writeBuffer()
        .then(function (buffer: BlobPart) {
          saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'CustomerContact.xlsx');
        });
    }).then(() => this.grid?.instance.columnOption('result', 'visible', false));

  }

  public onClickImport() {
    this.fileToUpload = '' as any;
    this.clickImport = false;
    this.canClick = false;
    this.dataForUpload = [];
    this.modalRef = this.modalService.show(this.importTemplate, {
      class: 'modal-xl'
    });
  }

  public handleFileInput($event: any): void {
    this.fileToUpload = $event?.target?.files[0];
  }

  public onClickExitImportModal(): void {
    this.modalRef.hide();
  }

  public uploadFile(): void {
    this.canClick = false;
    this.service.importCustomerContract(this.fileToUpload.name)
      .pipe(
        catchError((httpErrorResponse: HttpErrorResponse) => {
          const error = httpErrorResponse.error as HttpErrorResponse;
          // errorPanelModal?.setError(error.messages);
          return throwError(httpErrorResponse);
        }),
        finalize(() => {
          this.clickImport = true;
        })
      )
      .subscribe(res => {
        this.dataForUpload = res;
        this.canClick = this.dataForUpload.map(item => item.issue).every(item => item.length == 0);
      })

  }

  public onClearFile(fileInput: any): void {
    this.clickImport = false;
    this.canClick = false;
    fileInput.value = '';
    this.fileToUpload = fileInput.value;
    this.dataForUpload = [];
  }

  public onClickDownloadTemplate(): void {
    const temp = this.dataSource;
    this.dataSource = []
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Main sheet');
    const component = this.grid?.instance;
    this.grid?.instance.columnOption('result', 'visible', true);
    exportDataGrid({
      component: component,
      worksheet: worksheet,
      customizeCell: (options) => {
        options.excelCell.font = { name: 'Arial', size: 12 };
        options.excelCell.alignment = { horizontal: 'left' };
      }
    }).then(() => {
      workbook.xlsx.writeBuffer()
        .then(function (buffer: BlobPart) {
          saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'CustomerContact.xlsx');
        });
    }).then(() => {
      this.grid?.instance.columnOption('result', 'visible', false)
      this.dataSource = temp;
    }
    );
  }

  public onClickConfirmImport(): void {
    this.service.confirmImportCustomerContract()
      .pipe(
        catchError((httpErrorResponse: HttpErrorResponse) => {
          const error = httpErrorResponse.error as HttpErrorResponse;
          // errorPanelModal?.setError(error.messages);
          return throwError(httpErrorResponse);
        }),
        finalize(() => {
          this.grid.instance.refresh();
        })
      )
      .subscribe(res => {
        this.dataSource = res
        this.modalRef.hide();
      })

  }

  public onClickAdd(): void {
    this.isEdit = false;
    this.modalRef = this.modalService.show(this.addContact, {
      class: 'modal-xl'
    });
  }

  public onClickConfirm(): void {
    this.service.editCustomerContact(this.addParam).subscribe();
    this.service.initial().subscribe(res => {
      this.dataSource = res
    })
    this.modalRef.hide();
  }



  public onClickEditContact(cell: any): void {
    this.isEdit = true;
    console.log(cell)
    this.addParam.customerCode = cell.data.customerCode ?? null
    this.addParam.customerName = cell.data.customerName ?? null
    this.addParam.district = cell.data.district ?? null
    this.addParam.province = cell.data.province ?? null
    this.addParam.contactName = cell.data.contactName ?? null
    this.addParam.line = cell.data.line ?? null
    this.addParam.contactTel = cell.data.contactTel ?? null
    this.modalRef = this.modalService.show(this.editContact, {
      class: 'modal-xl'
    });
  }

  public onCustomerChange($event: any): void {
    this.addParam.customerCode = $event.value;
    const customer = this.dataSource.find(x => {
      return x.customerCode == this.addParam.customerCode
    })
    this.addParam.district = customer?.district ?? '';
    this.addParam.province = customer?.province ?? '';

  }

  public onDistrictChange($event: any): void {
    this.addParam.district = $event.value;
    const customer = this.dataSource.find(x => {
      return x.district == this.addParam.district
    })

    this.addParam.province = customer?.province ?? '';
  }

  public onProvinceChange($event: any): void {
    this.addParam.province = $event.value;
  }

}
