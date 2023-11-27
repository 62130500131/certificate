import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MappingMaterialSearchParam, MappingMaterialViewModel } from '../../models/mapping-material.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MappingMaterialService } from '../../services/map-material.service';
import { catchError, finalize, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { DxDataGridComponent } from 'devextreme-angular';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import * as saveAs from 'file-saver';
import Swal from 'sweetalert2';
import { CertificateService } from 'src/app/modules/certificate/services/certificate.service';

@Component({
  selector: 'mapping-material',
  templateUrl: './mapping-material.component.html',
  styleUrls: ['./mapping-material.component.css']
})
export class MappingMaterialComponent implements OnInit {

  public param: MappingMaterialSearchParam = new MappingMaterialSearchParam();
  @ViewChild('grid') grid!: DxDataGridComponent;
  public modalRef!: BsModalRef;

  public clickImport: boolean = false;
  public canClick: boolean = false;
  public fileToUpload!: File;
  public dataForUpload!: Array<any>;

  public materialCode?: string;
  public materialDesc?: string;

  public addMaterial: any[] = [];
  public materialDataSource: any[] = []
  @ViewChild('addMappingMaterial') public addMappingMaterial!: TemplateRef<any>;
  @ViewChild('importMappingMaterial') public importMappingMaterial!: TemplateRef<any>;
  @ViewChild('editMappingMaterial') public editMappingMaterial!: TemplateRef<any>;

  public mill: string[] = [
    'GJ',
    'SYS',
    'SSI',
    'GJS',
  ];

  public dataSource: MappingMaterialViewModel[] = [
    {
      index: 1,
      materialCode: "2CTFB",
      materialDesc: "เหล็กแผ่นดำ ตัดซอยตามขนาด",
      modifiedBy: "CONNEX",
      modifiedTime: new Date,
    },
    {
      index: 2,
      materialCode: "2CTFB020-0060-1180",
      materialDesc: "เหล็กแผ่นดำ 2.00 x 60 x 1180mm SS400",
      modifiedBy: "CONNEX",
      modifiedTime: new Date,
    },
    {
      index: 3,
      materialCode: "2CTFB020-0789-2144",
      materialDesc: "เหล็กแผ่นดำ 2.00 x 789 x 2144mm SS400",
      modifiedBy: "CONNEX",
      modifiedTime: new Date,
    }

  ];

  constructor(private modalService: BsModalService,
    private service: MappingMaterialService,
    private certificateService: CertificateService) {

  }

  ngOnInit(): void {
    this.certificateService.getMaterialDataSource().subscribe(res => {
      this.materialDataSource = res
    })
  }



  public onClickSearch(): void {

  }

  public onClickClear(): void {
    this.param = new MappingMaterialSearchParam();
  }

  // Add
  public onClickAdd(): void {
    this.addMaterial = [];
    if (this.addMaterial.length == 0) {
      this.onClickAddItem();
    }
    this.modalRef = this.modalService.show(this.addMappingMaterial, {
      class: 'modal-xl'
    });
  }

  public onClickExitAddModal(): void {
    this.modalRef.hide();
  }

  public onClickAddItem(): void {
    this.addMaterial.push({ materialCode: '', materialDesc: '' });
  }

  public onClickDeleteItem(index: number): void {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success"
        });
        this.addMaterial.splice(index, 1);
      }
    });
  }

  public onClickConfirmAddMappingMaterial(): void {

  }

  public onClickExitAddMappingMaterial(): void {
    this.modalRef.hide();
  }

  // Import
  public onClickImport() {
    this.fileToUpload = '' as any;
    this.clickImport = false;
    this.canClick = false;
    this.dataForUpload = [];
    this.modalRef = this.modalService.show(this.importMappingMaterial, {
      class: 'modal-xl'
    });
  }

  public handleFileInput($event: any): void {
    this.fileToUpload = $event?.target?.files[0];
  }

  public uploadFile(): void {
    this.canClick = false;
    this.service.importMapMaterial(this.fileToUpload.name)
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



  public onClickExitImportModal(): void {
    this.modalRef.hide();
  }

  public onClickDownloadTemplate(): void {

  }

  public onClickConfirmImportMappingMaterial(): void {
    this.service.confirmImportMapMaterial()
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

  public onClickExitImportMappingMaterial(): void {
    this.modalRef.hide();
  }

  //export

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
          saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'MappingMaterial.xlsx');
        });
    }).then(() => this.grid?.instance.columnOption('result', 'visible', false));

  }

  //Edit
  public onClickEditMappingMaterial(template: TemplateRef<any>, cell: any): void {
    this.materialCode = cell.data.materialCode;
    this.materialDesc = cell.data.materialDesc;

    this.modalRef = this.modalService.show(this.editMappingMaterial, {
      class: 'modal-xl'
    });
  }

  public onClickSaveEditMappingMaterial(): void {

  }

  public onClickCancelEditMappingMaterial(): void {
    this.modalRef.hide();
  }

  //Delete
  public onClickDeleteMappingMaterial(): void {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success"
        });
      }
    });
  }


}
