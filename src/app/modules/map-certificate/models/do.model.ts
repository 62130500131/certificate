import { Signal, signal } from "@angular/core";

export class doViewModel {
    shipmentCode: number | null;
    deliveryDate: Date | null;
    customerCode: number | null;
    customerName: string;

    constructor() {
        this.shipmentCode = null;
        this.deliveryDate = null;
        this.customerCode = null;
        this.customerName = "";
    }
}
export class DoShipmentEntryViewModel {
    doNo: string;
    dataSource: DoShipmentDetail[];

    constructor() {
        this.doNo = '';
        this.dataSource = []
    }
}

export class DoShipmentDetail {
    itemIndex: number;
    materialCode: string;
    materialDesc: string;
    sprayType: string;
    heatNo: string;
    quantity: number;
    status: string;
    grade: string;
    weight: number;
    unit: string;

    constructor() {
        this.itemIndex = 0;
        this.materialCode = '';
        this.materialDesc = '';
        this.sprayType = ''
        this.heatNo = '';
        this.quantity = 0;
        this.status = 'Select';
        this.grade = '';
        this.weight = 0;
        this.unit = ''
    }
}
export class SelectQuantity {
    certNo: string
    isSelected: boolean;
    itemIndex: number;
    material: string;
    materialDesc: string;
    heatNo: string;
    grade: string;
    yield: number;
    tensile: number;
    mill: string;
    remain: number;
    quantity: number;
    thickness: number;
    width: number;
    weight: number;
    unit: string;

    constructor() {
        this.certNo = '';
        this.isSelected = false
        this.itemIndex = 0;
        this.material = '';
        this.materialDesc = '';
        this.heatNo = '';
        this.grade = '';
        this.yield = 0;
        this.tensile = 0;
        this.mill = '';
        this.remain = 0;
        this.quantity = 0;
        this.thickness = 0;
        this.width = 0;
        this.weight = 0;
        this.unit = ''
    }
}

export class MappingCertificateSearchParam {
    customer: string;
    shipment: string;
    deliveryDate: number;
    deliveryFrom: Date | null;
    deliveryTo: Date | null;

    constructor() {
        this.customer = '';
        this.shipment = '';
        this.deliveryDate = 90
        this.deliveryFrom = null
        this.deliveryTo = null
    }
}

export class ShipmentInfoViewModel {
    shipmentNo: string;
    customerCode: string;
    customerName: string;
    shiptoCode: string;
    shiptoName: string;
    district: string;
    province: string;
    carRegistration: string;
    outTime: Date;

    constructor() {
        this.shipmentNo = '';
        this.customerCode = '';
        this.customerName = '';
        this.shiptoCode = '';
        this.shiptoName = '';
        this.district = '';
        this.province = '';
        this.carRegistration = '';
        this.outTime = new Date();
    }

}

