export class CustomerHistoryViewModel {
    doNo: string;
    date: string;
    itemNo: number;
    materialDesc: string;
    qty: number;

    constructor() {
        this.doNo = '';
        this.date = (new Date()).toString();
        this.itemNo = 0;
        this.materialDesc = '';
        this.qty = 0;
    }

}

export class CustomerHistorySearchParam {
    materialDesc: string;
    date: number;
    dateFrom: string;
    dateTo: string;

    constructor() {
        this.materialDesc = '';
        this.date = 90;
        this.dateFrom = '';
        this.dateTo = '';
    }
}