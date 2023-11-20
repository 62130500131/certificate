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
    itemIndex: string;
    material: string;
    heatNo: string;
    quantity: number;
    status: string;

    constructor() {
        this.itemIndex = '';
        this.material = '';
        this.heatNo = '';
        this.quantity = 0;
        this.status = 'Select';
    }
}

