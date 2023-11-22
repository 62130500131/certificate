import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MappingMaterialImportViewModel, MappingMaterialViewModel } from "../models/mapping-material.model";

@Injectable({
    providedIn: 'root'
})
export class MappingMaterialService {

    private import1:MappingMaterialImportViewModel[]= [
        {
            issue: ['Please Enter Mill Description', 'Material 2CTFB is Duplicated'],
            materialCode: '2CTFB',
            materialDesc: 'เหล็กแผ่นดำ ตัดซอยตามขนาด',
            mill: 'SSI',
            millDesc: '' 
        },
        {
            issue: ['Please Enter Mill Description', 'Material 2CTFB is Duplicated'],
            materialCode: '2CTFB',
            materialDesc: 'เหล็กแผ่นดำ ตัดซอยตามขนาด',
            mill: 'SSI',
            millDesc: '' 
        },
        {
            issue: ['Please Enter Mill'],
            materialCode: '2CTFB020-0060-1180',
            materialDesc: 'เหล็กแผ่นดำ 2.00 x 60 x 1180mm SS400',
            mill: '',
            millDesc: 'เหล็กแผ่นดำ' 
        },
        {
            issue: ['Please Enter Material Code'],
            materialCode: '',
            materialDesc: '',
            mill: 'SSI',
            millDesc: 'เหล็กแผ่นดำ' 
        }
    ];
    private import2:MappingMaterialImportViewModel[]= [
        {
            issue: [],
            materialCode: '2CTFB',
            materialDesc: 'เหล็กแผ่นดำ ตัดซอยตามขนาด',
            mill: 'SSI',
            millDesc: 'เหล็กแผ่นดำ ตัดซอยตามขนาด' 
        },
        {
            issue: [],
            materialCode: '2CTFB020-0060-1180',
            materialDesc: 'เหล็กแผ่นดำ 2.00 x 60 x 1180mm SS400',
            mill: 'SYS',
            millDesc: 'เหล็กแผ่นดำ 2.00 x 60 x 1180mm SS400' 
        },
        {
            issue: [],
            materialCode: '2CTFB020-0789-2144',
            materialDesc: 'เหล็กแผ่นดำ 2.00 x 789 x 2144mm SS400',
            mill: 'SSI',
            millDesc: 'เหล็กแผ่นดำ 2.00 x 789 x 2144mm SS400' 
        }
    ];

    private confirmImport:MappingMaterialViewModel[] = [
        {
            materialCode: '2CTFB',
            materialDesc: 'เหล็กแผ่นดำ ตัดซอยตามขนาด',
            modifiedBy: 'Connex',
            modifiedTime: new Date()
        },
        {
            materialCode: '2CTFB020-0060-1180',
            materialDesc: 'เหล็กแผ่นดำ 2.00 x 60 x 1180mm SS400',
            modifiedBy: 'Connex',
            modifiedTime: new Date()
        },
        {
            materialCode: '2CTFB020-0789-2144',
            materialDesc: 'เหล็กแผ่นดำ 2.00 x 789 x 2144mm SS400',
            modifiedBy: 'Connex',
            modifiedTime: new Date()
        }
    ];
    public importMapMaterial(fileName:string): Observable<any[]> {
        if(fileName === 'Import1.xlsx'){
            return of(this.import1)
        }
        else{
            return of(this.import2)
        }
    }

    public confirmImportMapMaterial(): Observable<any[]> {
        return of(this.confirmImport) 
    }

}