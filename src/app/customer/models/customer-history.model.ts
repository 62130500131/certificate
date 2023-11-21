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
    dateFrom: number;
    dateTo: number;
    
    constructor() {
        this.materialDesc = '' ;
        this.dateFrom = 90;
        this.dateTo = 90;
    }
}