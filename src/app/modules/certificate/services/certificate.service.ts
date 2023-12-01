import { Injectable } from "@angular/core";
import { Observable, delay, map, of } from "rxjs";
import { CertificateEntryListViewModel, CertificateListDetailViewModel, CertificateListViewModel, ReadResult } from "../models/certificate-list.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CertificateService {

    private dataCertificateList:CertificateListViewModel[] = [
        {
            certNo: "42523050482",
            mill: "SYS",
            totalMaterial: 80,
            certDate: new Date(),
            uploadDate: new Date(),
            modifiedBy: "Connex",
            modifiedTime: new Date(),
            guid: "",
            dataSource: [
              {
                millDesc: 'H 148x100x6x12.00M',
                material: '2CTFB',
                materialDesc: 'เหล็กแผ่นดำ ตัดซอยตามขนาด',
                grade: 'SS400',
                heatNo: 'DB10177',
                quantity: 20,
                unit: 'PC'
              },
              {
                millDesc: 'H 200x60x11.80M',
                material: '2CTFB020-0060-1180',
                materialDesc: 'เหล็กแผ่นดำ 2.00 x 60 x 1180 mm SS400',
                grade: 'SS400',
                heatNo: 'DB10177',
                quantity: 20,
                unit: 'PC'
              },
              {
                millDesc: 'H 200x60x11.80M',
                material: '2CTFB020-0818-2128',
                materialDesc: 'เหล็กแผ่นดำ 2.00 x 818 x 2128 mm SS400',
                grade: 'SS400',
                heatNo: 'DB10177',
                quantity: 20,
                unit: 'PC'
              },
              {
                millDesc: 'H 200x60x11.80M',
                material: '2CTFB020-0820-1762',
                materialDesc: 'เหล็กแผ่นดำ 2.00 x 820 x 1762 mm SS400',
                grade: 'SS400',
                heatNo: 'DB10177',
                quantity: 20,
                unit: 'PC'
              }
            ]
          },
          {
            certNo: "42523050483",
            mill: "SSI",
            totalMaterial: 10,
            certDate: new Date(),
            uploadDate: new Date(),
            modifiedBy: "Connex",
            modifiedTime: new Date(),
            guid: "",
            dataSource: [
              {
                millDesc: 'H 148x100x6x12.00M',
                material: '2CTFB',
                materialDesc: 'เหล็กแผ่นดำ ตัดซอยตามขนาด',
                grade: 'SS400',
                heatNo: 'DB10177',
                quantity: 8,
                unit: 'PC'
              },
              {
                millDesc: 'H 200x60x11.80M',
                material: '2CTFB020-0060-1180',
                materialDesc: 'เหล็กแผ่นดำ 2.00 x 60 x 1180 mm SS400',
                grade: 'SS400',
                heatNo: 'DB10178',
                quantity: 2,
                unit: 'PC'
              }
            ]
          },
          {
            certNo: "42523050484",
            mill: "GJS",
            totalMaterial: 20,
            certDate: new Date(),
            uploadDate: new Date(),
            modifiedBy: "Connex",
            modifiedTime: new Date(),
            guid: "",
            dataSource: [
              {
                millDesc: 'H 148x100x6x12.00M',
                material: '2CTFB',
                materialDesc: 'เหล็กแผ่นดำ ตัดซอยตามขนาด',
                grade: 'SS400',
                heatNo: 'DB10177',
                quantity: 8,
                unit: 'PC'
              },
              {
                millDesc: 'H 200x60x11.80M',
                material: '2CTFB020-0060-1180',
                materialDesc: 'เหล็กแผ่นดำ 2.00 x 60 x 1180 mm SS400',
                grade: 'SS400',
                heatNo: 'DB10178',
                quantity: 12,
                unit: 'PC'
              }
            ]
          },
          {
            certNo: "42523050496",
            mill: "GJ",
            totalMaterial: 2,
            certDate: new Date(),
            uploadDate: new Date(),
            modifiedBy: "Connex",
            modifiedTime: new Date(),
            guid: "",
            dataSource: [
              {
                millDesc: 'H 200x60x11.80M',
                material: '2CTFB020-0060-1180',
                materialDesc: 'เหล็กแผ่นดำ 2.00 x 60 x 1180 mm SS400',
                grade: 'SS400',
                heatNo: 'DB10178',
                quantity: 2,
                unit: 'PC'
              }
            ]
          }
    ]
    private data: CertificateEntryListViewModel[] = [{
        millDesc: 'H 300x100x6x12.00M',
        tmtMaterial: '',
        grade: 'SS400',
        heatNo: 'KB5651',
        quantity: 55.00,
        unit: 'PC',
        yield: '325.60',
        tensile: '462.03',
        remark: '',
    },
    {
        millDesc: 'H 300x100x6x12.00M',
        tmtMaterial: '',
        grade: 'SS400',
        heatNo: 'KB5652',
        quantity: 30.00,
        unit: 'PC',
        yield: '332.92',
        tensile: '459.99',
        remark: '',
    }]

    private materialDataSource = [
        {
            text: '2CTFB : เหล็กแผ่นดำ ตัดซอยตามขนาด',
            value: '2CTFB'
        },
        {
            text: '1AK100-000: เหล็กฉาก SS400 ความยาวใด ๆ',
            value: '1AK100-000'
        },
        {
            text: '1AK109-100-00963S : เหล็กแผ่นดำ ตัดซอยตามขนาด',
            value: '1AK109-100-00963S'
        },
        {
            text: '2CTFB : เหล็กฉากSS400 100 x 100 x 7.00mm x 9.0M',
            value: '2CTFB'
        },
        {
            text: '2RM055-1219-1385 : วัตถุดิบเหล็กแผ่น 5.50mm x 4 x 1385mm',
            value: '2RM055-1219-1385'
        },
    ]

    private certificateFileResults: ReadResult[] = [

    ]
    constructor(private http: HttpClient) {

    }

    public initial(): Observable<CertificateEntryListViewModel[]> {
        return of(this.data).pipe(
            delay(500)
        )
    }

    public initialCertificateList(): Observable<CertificateListViewModel[]> {
        return of(this.dataCertificateList).pipe(
            delay(500)
        )
    }

    public getMaterialDataSource() {
        return of(this.materialDataSource).pipe(
            delay(0)
        )
    }

    public saveCertificate(param: CertificateEntryListViewModel[]): Observable<void> {
        this.data = param
        return of()
    }

    public saveCertificateWithPdf(param: ReadResult, isEdit:boolean): Observable<void>{

      
      if(!isEdit){

        var result = new CertificateListViewModel();
        result.certDate = param.certificateDate;
        result.certNo = param.certificateNo;
        result.dataSource = param.results.map(x => {
            let con =  new CertificateListDetailViewModel();
            con.grade = x.grade;
            con.heatNo = x.heatNo;
            con.material = x.tmtMaterial.split(":")[0];
            con.materialDesc = x.tmtMaterial.split(":")[1];
            con.millDesc = param.certificateType;
            con.quantity = Number(x.mass);
            con.unit = x.unit;
            return con
        })
        result.mill = param.certificateType;
        result.modifiedBy = "Connex";
        result.modifiedTime = new Date();
        result.guid = param.guid;
        let sum = result.dataSource.map(x => x.quantity)
                                   .reduce((a:number, c:number) => a + c, 0)
        result.totalMaterial = sum;
        result.uploadDate = new Date();

        this.certificateFileResults.push(param);
        this.dataCertificateList.push(result)
        
      }
        
        return of()
    }

    public uploadCertificate(param: File, mill:string): Observable<string> {

        const formData: FormData = new FormData();
        formData.append('formFile', param, param.name);
        return this.http.post<ReadResult>('https://localhost:7130/api/Pdf/Import/'+mill, formData).pipe(
            map((res: ReadResult) => {
                this.certificateFileResults.push(res);
                return res.guid;
            })
        );
    }

    public getCertificateInfo(guid:string) :Observable<ReadResult>{
        const result = this.certificateFileResults.find(x => {
            return x.guid == guid; 
        }) ?? new ReadResult();

        return of(result);
    }

}