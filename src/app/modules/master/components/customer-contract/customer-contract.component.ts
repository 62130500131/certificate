import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CustomerContractParam, CustomerContractUploadViewModel, CustomerContractViewModel } from '../../models/customer-contract.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CustomerContractService } from '../../services/customer-contract.service';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { catchError, finalize, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import * as saveAs from 'file-saver';
import { Workbook } from 'exceljs';
import { exportDataGrid } from "devextreme/excel_exporter";
@Component({
  selector: 'app-customer-contract',
  templateUrl: './customer-contract.component.html',
  styleUrls: ['./customer-contract.component.css']
})
export class CustomerContractComponent implements OnInit {

  @ViewChild('importTemplate') importTemplate!: TemplateRef<any>;
  @ViewChild('grid') grid!: DxDataGridComponent;
  public param: CustomerContractParam = new CustomerContractParam();
  public fileToUpload: any;
  public modalRef!: BsModalRef;
  public clickImport: boolean = false;
  public canClick: boolean = false;
  public dataForUpload: CustomerContractUploadViewModel[] = [];
  public dataSource: CustomerContractViewModel[] = [
    {
      customerCode: '10000001',
      customerName: 'บริษัท ซี เอ็ม ซี สตีลเทรดดิ้ง จำกัด มหาชน',
      province: 'กรุงเทพมหานคร',
      district: 'เขตบางคอแหลม',
      line: '',
      modifiedBy: 'Connex',
      modifiedTime: (new Date()).toString()
    },
    {
      customerCode: '10000002',
      customerName: 'บริษัท เอ.เอ็น.สตีล จำกัด',
      province: 'จังหวัดบุรีรัมย์',
      district: 'อำเภอกระสัง',
      line: '',
      modifiedBy: 'Connex',
      modifiedTime: (new Date()).toString()
    },
    {
      customerCode: '10000003',
      customerName: 'บริษัท ป้อเจริญค้าวัสดุ จำกัด',
      province: 'จังหวัดราชบุรี',
      district: 'อำเภอโพธาราม',
      line: '',
      modifiedBy: 'Connex',
      modifiedTime: (new Date()).toString()
    },
    {
      customerCode: '10000004',
      customerName: 'บริษัท ไททัน สตีล จำกัด',
      province: 'จังหวัดนครปฐม',
      district: '',
      line: '',
      modifiedBy: 'Connex',
      modifiedTime: (new Date()).toString()
    },
    {
      customerCode: '10000005',
      customerName: 'บริษัท ซี.เค.เอส. โลหะกิจ จำกัด',
      province: 'กรุงเทพมหานคร',
      district: 'เขตบางคอแหลม',
      line: '',
      modifiedBy: 'Connex',
      modifiedTime: (new Date()).toString()
    },
    {
      customerCode: '10000006',
      customerName: 'บริษัท สินกิจไพบูลย์โลหะการ จำกัด',
      province: 'กรุงเทพมหานคร',
      district: 'เขตสาทร',
      line: '',
      modifiedBy: 'Connex',
      modifiedTime: (new Date()).toString()
    }
  ];
  constructor(private modalService: BsModalService,
    private service: CustomerContractService) { }

  ngOnInit() {
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

}
