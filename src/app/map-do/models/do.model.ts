export class DoViewModel {
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
    material: string;
    heatNo: string;
    quantity: number;
    status: string;

    constructor() {
        this.itemIndex = 0;
        this.material = '';
        this.heatNo = '';
        this.quantity = 0;
        this.status = 'Select';
    }
}
export class SelectQuantity {
    isSelected: boolean;
    itemIndex: number;
    material: string;
    materialDesc: string;
    heatNo: string;
    mill: string;
    remain: number;
    quantity: number;

    constructor() {
        this.isSelected = false;
        this.itemIndex = 0;
        this.material = '';
        this.materialDesc = '';
        this.heatNo = '';
        this.mill = '';
        this.remain = 0;
        this.quantity = 0;
    }
}

