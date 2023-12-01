import { Injectable } from "@angular/core";
import { DoShipmentDetail, DoShipmentEntryViewModel, MapCertificateParam, SaveMapCertificateParam, SelectQuantity, SentLinkMapCertificateParam, ShipmentInfoViewModel } from "../models/do.model";
import { Observable, delay, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MapCertificateService {
    private shipmentInfo: ShipmentInfoViewModel[] = [
        {
            shipmentNo: '2311092790',
            customerCode: '10000217',
            customerName: 'บริษัท ธุรกิจเหล็กดี จำกัด',
            shiptoCode: '10000217',
            shiptoName: 'บริษัท ธุรกิจเหล็กดี จำกัด',
            district: 'เขตยานนาวา',
            province: 'กรุงเทพมหานคร',
            carRegistration: 'ก250356',
            outTime: new Date(),
            sentBy: null,
            sentTime: null,
            modifiedBy: null,
            modifiedTime: null,
            status: 'Not Sent',
            customerContact: null,
            line: null,
            contactTel: null
        },
        {
            shipmentNo: '2311092791',
            customerCode: '10000217',
            customerName: 'บริษัท ธุรกิจเหล็กดี จำกัด',
            shiptoCode: '40000002',
            shiptoName: 'บริษัท ธุรกิจเหล็กดี จำกัด',
            district: 'เขตยานนาวา',
            province: 'กรุงเทพมหานคร',
            carRegistration: 'ก250356',
            outTime: new Date(),
            sentBy: null,
            sentTime: null,
            modifiedBy: null,
            modifiedTime: null,
            status: 'Not Sent',
            customerContact: null,
            line: null,
            contactTel: null
        },
        {
            shipmentNo: '2311092792',
            customerCode: '10000217',
            customerName: 'บริษัท ธุรกิจเหล็กดี จำกัด',
            shiptoCode: '10000217',
            shiptoName: 'บริษัท ธุรกิจเหล็กดี จำกัด',
            district: 'เขตยานนาวา',
            province: 'กรุงเทพมหานคร',
            carRegistration: 'ก250356',
            outTime: new Date(),
            sentBy: null,
            sentTime: null,
            modifiedBy: null,
            modifiedTime: null,
            status: 'Not Sent',
            customerContact: null,
            line: null,
            contactTel: null
        }
    ];
    private data: DoShipmentEntryViewModel[] = [
        {
            doNo: '210000001',
            dataSource: [
                {
                    itemIndex: 1,
                    materialCode: '2CTFB',
                    materialDesc: 'เหล็กแผ่นดำ ตัดซอยตามขนาด',
                    sprayType: 'พ่น TMT',
                    heatNo: 'KB5651',
                    grade: 'SS400',
                    quantity: 40,
                    status: 'Select',
                    weight: 2000,
                    unit: 'PC'
                },
                {
                    itemIndex: 2,
                    materialCode: '1AK106-025-00062',
                    materialDesc: 'เหล็กฉากSS400 25 x 25 x 3.00mm x 6.0M',
                    sprayType: 'พ่น Heat',
                    heatNo: 'KB5651',
                    grade: 'SS400',
                    quantity: 20,
                    status: 'Select',
                    weight: 1020,
                    unit: 'PC'
                },
                {
                    itemIndex: 3,
                    materialCode: '1BP0200-045-1430',
                    materialDesc: 'ท่อดำ 8" x 4.50mm x 6.0M',
                    sprayType: 'พ่นรูปแบบที่ 3',
                    heatNo: 'KB5652',
                    grade: 'SS400',
                    quantity: 40,
                    status: 'Select',
                    weight: 3500,
                    unit: 'PC'
                },
                {
                    itemIndex: 4,
                    materialCode: '3UC00753223-0141',
                    materialDesc: 'เหล็กตามแบบ 75x32x32x2.30mmx6.0M',
                    sprayType: 'พ่นรูปแบบที่ 1',
                    heatNo: 'KB5651',
                    grade: 'SS400',
                    quantity: 30,
                    status: 'Select',
                    weight: 2900,
                    unit: 'PC'
                }
            ]
        },
        {
            doNo: '210000002',
            dataSource: [
                {
                    itemIndex: 1,
                    materialCode: '1AK106-030-00081',
                    materialDesc: 'เหล็กฉากSS400 30 x 30 x 3.00mm x 6.0M',
                    sprayType: 'พ่นรูปแบบที่ 2',
                    heatNo: 'DB1077',
                    grade: 'SS400',
                    quantity: 22,
                    status: 'Edit',
                    weight: 2000,
                    unit: 'PC'
                }
            ]
        },
        {
            doNo: '210000003',
            dataSource: [
                {
                    itemIndex: 1,
                    materialCode: '2CTFB',
                    materialDesc: 'เหล็กแผ่นดำ ตัดซอยตามขนาด',
                    sprayType: 'พ่นรูปแบบที่ 1',
                    heatNo: 'DB1079',
                    grade: 'SS400',
                    quantity: 20,
                    status: 'Edit',
                    weight: 2010,
                    unit: 'PC'
                }
            ]
        },

    ]
    private model: SelectQuantity[] = [
        new SelectQuantity(),
        new SelectQuantity()
    ]

    // constructor(private http: HttpClient, @Inject('BASE_API') private baseAPI: string) {
    private randomNumber(param: number): number {
        return Math.floor(Math.random() * param);
    }

    public initial(): Observable<DoShipmentEntryViewModel[]> {
        return of(this.data).pipe(
            delay(500)
        )
    }

    public getCertificationList(param: DoShipmentDetail, reSelect: boolean): Observable<SelectQuantity[]> {

        let index = 1;
        let cert = 42523050482;
        let heat = 5651;
        let isKB = param.heatNo.includes('KB')
        this.model.forEach(x => {
            x.itemIndex = index++;
            if (reSelect) x.isSelected = false;
            x.material = param.materialCode;
            x.materialDesc = param.materialDesc;
            x.quantity = param.quantity;
            x.heatNo = isKB ? 'KB'+(heat++) : param.heatNo;
            x.weight = param.weight;
            x.unit = param.unit;
            x.thickness = 1;
            x.width = 3;
            x.grade = param.grade;
            x.yield = 263;
            x.tensile = 250;
            x.mill = index % 2 == 0 ? "SSI" : "SYS"
            x.remain = x.quantity
            x.certNo = (cert++).toString()

        })
        return of(this.model).pipe(
            delay(0)
        )
    }

    public getShipmentInfo(param: MapCertificateParam): Observable<ShipmentInfoViewModel> {
        const result = this.shipmentInfo.find(x => {
            return x.shipmentNo == param.shipmentNo && x.shiptoCode == param.shiptoCode 
        }) ?? new ShipmentInfoViewModel()

        return of(result)
    }

    public saveMapCertificate(param: SaveMapCertificateParam):Observable<void>{
        const shipment = this.shipmentInfo.find(x => {
            return x.shipmentNo == param.shipmentNo && x.shiptoCode  == param.shiptoCode
        })

        if(!!shipment){
            shipment.modifiedBy = 'Connex';
            shipment.modifiedTime = new Date();
        }
        return of().pipe(
            delay(500)
        )
    }

    public sentLinkCertificate(param: SentLinkMapCertificateParam):Observable<void>{
        const shipment = this.shipmentInfo.find(x => {
            return x.shipmentNo == param.shipmentNo && x.shiptoCode  == param.shiptoCode
        })

        if(!!shipment){
            shipment.status = 'Sent';
            shipment.modifiedBy = 'Connex';
            shipment.modifiedTime = new Date();
            shipment.sentBy = 'Connex';
            shipment.sentTime = new Date();
        }

        return of()
    }

    public initialList():Observable<ShipmentInfoViewModel[]>{
        return of(this.shipmentInfo).pipe(
            delay(500)
        )
    }
}