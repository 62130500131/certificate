import { Signal, signal } from "@angular/core";

export class doViewModel {
    shipmentCode?: number;
    customerCode?: number;
    customerName?: string;
    heatNo?: string;
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
    isSelected: boolean;
    itemIndex: number;
    material: string;
    materialDesc: string;
    heatNo: string;
    grade: string;
    yield: string;
    tensile: string;
    mill: string;
    remain: number;
    quantity: number;
    thickness: number;
    width: number;

    constructor() {
        this.isSelected = false
        this.itemIndex = 0;
        this.material = '';
        this.materialDesc = '';
        this.heatNo = '';
        this.grade = '';
        this.yield = '';
        this.tensile = '';
        this.mill = '';
        this.remain = 0;
        this.quantity = 0;
        this.thickness = 0;
        this.width = 0;
    }
}

export class MappingCertificateSearchParam {
    customer: string;
    shipment: string;

    constructor() {
        this.customer = '';
        this.shipment = '';
    }
}

