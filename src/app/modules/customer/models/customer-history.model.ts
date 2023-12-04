export class CustomerHistoryViewModel {
    doNo: string;
    date: Date;
    itemNo: number;
    materialDesc: string;
    qty: number;
    poNo: string;
    soNo: string;

    constructor() {
        this.doNo = '';
        this.date = new Date();
        this.itemNo = 0;
        this.materialDesc = '';
        this.qty = 0;
        this.poNo = '';
        this.soNo = '';
    }
}

export class CustomerHistorySearchParam {
    materialDesc: string;
    poNo: string;
    dateDo: number;
    dateFrom: string;
    dateTo: string;


    constructor() {
        this.materialDesc = '';
        this.poNo = '';
        this.dateDo = 90;
        this.dateFrom = '';
        this.dateTo = '';

    }
}

export class CustomerDOItemViewModel {
    itemNo: string;
    materialDesc: string;
    qty: number;
    unit: string;
    constructor() {
        this.itemNo = '';
        this.materialDesc = '';
        this.qty = 0;
        this.unit = '';
    }
}
export class CustomerDOViewModel {
    doNo: string;
    doDate: string;
    dataSource: CustomerDOItemViewModel[];
    constructor() {
        this.doNo = '';
        this.doDate = '';
        this.dataSource = [];
    }
}

export class CustomerPOViewModel {
    poNo: string;
    soNo: string;
    shipToName: string;
    address: string;
    dataSource: CustomerDOViewModel[];
    constructor() {
        this.poNo = '';
        this.soNo = '';
        this.shipToName = '';
        this.address = '';
        this.dataSource = [];
    }
}