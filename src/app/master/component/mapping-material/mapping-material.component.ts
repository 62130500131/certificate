import { Component } from '@angular/core';
import { mappingMaterial } from '../../models/mapping-material.model';

@Component({
  selector: 'mapping-material',
  templateUrl: './mapping-material.component.html',
  styleUrls: ['./mapping-material.component.css']
})
export class MappingMaterialComponent {

  public data: mappingMaterial[] = [
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

  public onClickSearch(): void {
    
  }

  public onClickClear(): void {
    
  }

  // Add
  public onClickAdd(): void {
    
  }

  public onClickExitAddModal(): void {
    
  }

  public onClickConfirmAddMappingMaterial(): void {
    
  }

  public onClickExitAddMappingMaterial(): void {
    
  }

  // Import
  public onClickImport(): void {
    
  }

  public onClickExitImportModal(): void {
    
  }
  
  public downloadTemplate(): void {
    
  }

  public onClickConfirmImportMappingMaterial(): void {
    
  }

  public onClickExitImportMappingMaterial(): void {
    
  }

  public onClickExport(): void {
    
  }

  //Edit
  public onClickEditMappingMaterial(): void {
    
  }

  public onClickSaveEditMappingMaterial(): void {
    
  }

  public onClickCancelEditMappingMaterial(): void {
    
  }

  //Delete
  public onClickDeleteMappingMaterial(): void {
    
  }

  
}
