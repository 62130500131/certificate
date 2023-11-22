export class CustomerHistoryViewModel {
    doNo: string;
    date: Date;
    itemNo: number;
    materialDesc: string;
    qty: number;

    constructor() {
        this.doNo = '';
        this.date = new Date();
        this.itemNo = 0;
        this.materialDesc = '';
        this.qty = 0;
    }
}

export class CustomerHistorySearchParam {
    materialDesc: string;
    dateDo: number;
    dateFrom: string;
    dateTo: string;
    constructor() {
        this.materialDesc = '';
        this.dateDo = 90;
        this.dateFrom = '';
        this.dateTo = '';
    }
}