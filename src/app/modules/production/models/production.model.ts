export class ProductionStatusSearchParam {

    materialCode: string;
    productionDate: number;
    productionFrom: string;
    productionTo: string;

    constructor() {
        this.materialCode = '';
        this.productionDate = 90;
        this.productionFrom = '';
        this.productionTo = '';
    }

}

export class ProductionStatusMonitorViewModel {

    productionOrder: string;
    itemNo: number;
    materialCode: string;
    materialDesc: string;
    qty: number;
    soldTo: string;
    soldToName: string;
    grDate: string;
    status: string;

    constructor() {
        this.productionOrder = '';
        this.itemNo = 0;
        this.materialCode = '';
        this.materialDesc = '';
        this.qty = 0;
        this.soldTo = '';
        this.soldToName = '';
        this.grDate = '';
        this.status = '';
    }
}

export class ProductionStatusCompleteViewModel {

    productionOrder: string;
    itemNo: number;
    materialCode: string;
    materialDesc: string;
    qty: number;
    soldTo: string;
    soldToName: string;
    grDate: string;
    status: string;

    constructor() {
        this.productionOrder = '';
        this.itemNo = 0;
        this.materialCode = '';
        this.materialDesc = '';
        this.qty = 0;
        this.soldTo = '';
        this.soldToName = '';
        this.grDate = '';
        this.status = '';
    }
}