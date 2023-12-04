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
    poNo : string;
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