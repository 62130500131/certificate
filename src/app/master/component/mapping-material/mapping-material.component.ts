import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { mappingMaterialViewModel } from '../../models/mapping-material.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'mapping-material',
  templateUrl: './mapping-material.component.html',
  styleUrls: ['./mapping-material.component.css']
})
export class MappingMaterialComponent implements OnInit {

  public modalRef!: BsModalRef;

  public clickImport!: true;
  public fileToUpload!: File;
  public dataForUpload!: Array<any>;

  @ViewChild('addMappingMaterial') public addMappingMaterial!: TemplateRef<any>;
  @ViewChild('importMappingMaterial') public importMappingMaterial!: TemplateRef<any>;
  @ViewChild('editMappingMaterial') public editMappingMaterial!: TemplateRef<any>;
  
  public dataSource: mappingMaterialViewModel[] = [
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

  constructor(private modalService: BsModalService) {

  }

  ngOnInit(): void {

  }



  public onClickSearch(): void {

  }

  public onClickClear(): void {

  }

  // Add
  public onClickAdd(): void {
    this.modalRef = this.modalService.show(this.addMappingMaterial, {
      class: 'modal-xl'
    });
  }

  public onClickExitAddModal(): void {
    this.modalRef.hide();
  }

  public onClickConfirmAddMappingMaterial(): void {
    
  }

  public onClickExitAddMappingMaterial(): void {
    this.modalRef.hide();
  }

  // Import
  public onClickImport(): void {
    this.modalRef = this.modalService.show(this.importMappingMaterial, {
      class: 'modal-xl'
    });
  }

  public handleFileInput($event: any): void {
    this.fileToUpload = $event?.target?.files[0];
  }

  public uploadFile() : void {

  }

  public onClearFile(fileInput: any) : void {
    
  }


  public onClickExitImportModal(): void {
    this.modalRef.hide();
  }

  public onClickDownloadTemplate(): void {

  }

  public onClickConfirmImportMappingMaterial(): void {

  }

  public onClickExitImportMappingMaterial(): void {
    this.modalRef.hide();
  }

  //export

  public onClickExport(): void {

  }

  public materialCode?: string;
  public materialDesc?: string;

  //Edit
  public onClickEditMappingMaterial(template: TemplateRef<any>,cell: any): void {
    this.materialCode = cell.data.materialCode;
    this.materialDesc = cell.data.materialDesc;
    
    this.modalRef = this.modalService.show(this.editMappingMaterial, {
      class: 'modal-xl'
    });
  }

  public onClickExitEditMappingMaterial(): void {
    this.modalRef.hide();
  }

  public onClickSaveEditMappingMaterial(): void {

  }

  public onClickCancelEditMappingMaterial(): void {

  }

  //Delete
  public onClickDeleteMappingMaterial(): void {

  }


}
