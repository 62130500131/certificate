import { Injectable } from "@angular/core";
import { DoShipmentDetail, DoShipmentEntryViewModel, SelectQuantity, ShipmentInfoViewModel } from "../models/do.model";
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
            outTime: new Date()
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
                    heatNo: 'DB1077',
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
                    heatNo: 'DB1078',
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
                    heatNo: 'DB1079',
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
                    heatNo: 'DB1077',
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
    private modal2 = [
        {
            isSelected: false,
            itemIndex: 1,
            material: '2CTFB',
            materialDesc: 'เหล็กดำ ตัดซอยตามขนาด',
            heatNo: 'DB1003',
            grade: 'SS400',
            yield: '290',
            tensile: '50',
            mill: 'SYS',
            remain: 20,
            quantity: 20,
            thickness: 0.1,
            width: 1.0,
            weight: 2000,
            unit: 'PC'
        },
        {
            isSelected: false,
            itemIndex: 2,
            material: '2CTFB',
            materialDesc: 'เหล็กดำ ตัดซอยตามขนาด',
            heatNo: 'DB1002',
            grade: 'SS400',
            yield: '290',
            tensile: '50',
            mill: 'SYS',
            remain: 20,
            quantity: 20,
            thickness: 0.1,
            width: 1.0,
            weight: 2000,
            unit: 'PC'
        },
        {
            isSelected: false,
            itemIndex: 3,
            material: '2CTFB',
            materialDesc: 'เหล็กดำ ตัดซอยตามขนาด',
            heatNo: 'DB1078',
            grade: 'SS400',
            yield: '290',
            tensile: '50',
            mill: 'SYS',
            remain: 20,
            quantity: 20,
            thickness: 0.1,
            width: 1.0,
            weight: 2000,
            unit: 'PC'
        }]
    private modal: SelectQuantity[] = [
        new SelectQuantity(),
        new SelectQuantity(),
        new SelectQuantity(),
        new SelectQuantity(),
        new SelectQuantity(),
        new SelectQuantity(),
        new SelectQuantity(),
        new SelectQuantity(),
    ]

    // constructor(private http: HttpClient, @Inject('BASE_API') private baseAPI: string) {
    private randomNumber(param: number): number {
        return Math.floor(Math.random() * param);
    }

    public initial(): Observable<DoShipmentEntryViewModel[]> {
        return of(this.data).pipe(
            delay(0)
        )
    }

    public getCertificationList(param: DoShipmentDetail, reSelect: boolean): Observable<SelectQuantity[]> {

        let index = 1;
        this.modal.forEach(x => {
            x.itemIndex = index++;
            if (reSelect) x.isSelected = false;
            x.material = param.materialCode;
            x.materialDesc = param.materialDesc;
            x.quantity = param.quantity / 2;
            x.heatNo = param.heatNo;
            x.weight = param.weight / 2;
            x.unit = param.unit;
            x.thickness = 1;
            x.width = 3;
            x.grade = param.grade;
            x.yield = 263;
            x.tensile = 250;
            x.mill = index % 2 == 0 ? "SSI" : "SYS"
            x.remain = x.quantity
        })
        return of(this.modal).pipe(
            delay(0)
        )
    }

    public getShipmentInfo(param: string): Observable<ShipmentInfoViewModel> {
        const result = this.shipmentInfo.find(x => {
            return x.shipmentNo == param
        }) ?? new ShipmentInfoViewModel()

        return of(result)
    }

}