import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { CertificateEntryListViewModel } from "../models/certificate-list.model";

@Injectable({
    providedIn: 'root'
})
export class CertificateService {

    private data: CertificateEntryListViewModel[] = [{
        millDesc: 'H 148x100x6x12.00M',
        tmtMaterial: '',
        grade: 'SS400',
        heatNo: 'DB1077',
        quantity: 20,
        unit: 'KG',
        yield: '250',
        tensile: '56',
        remark: '',
    },
    {
        millDesc: 'H 148x100x6x12.00M',
        tmtMaterial: '',
        grade: 'SS400',
        heatNo: 'DB1077',
        quantity: 20,
        yield: '250',
        unit: 'KG',
        tensile: '56',
        remark: '',
    },
    {
        millDesc: 'H 148x100x6x12.00M',
        tmtMaterial: '',
        grade: 'SS400',
        heatNo: 'DB1077',
        quantity: 20,
        unit: 'KG',
        yield: '250',
        tensile: '56',
        remark: '',
    }, {
        millDesc: 'H 148x100x6x12.00M',
        tmtMaterial: '',
        grade: 'SS400',
        heatNo: 'DB1077',
        quantity: 20,
        yield: '250',
        unit: 'KG',
        tensile: '56',
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
    // constructor(private http: HttpClient, @Inject('BASE_API') private baseAPI: string) {
    private randomNumber(param: number): number {
        return Math.floor(Math.random() * param);
    }

    public initial(): Observable<CertificateEntryListViewModel[]> {
        return of(this.data).pipe(
            delay(0)
        )
    }

    public getMaterialDataSource(){
        return of(this.materialDataSource).pipe(
            delay(0)
        )
    }

    public saveCertificate(param: CertificateEntryListViewModel[]): Observable<void>{
        this.data = param
        return of()
    }

}