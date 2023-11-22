export class CustomerContractViewModel {
    customerCode: string;
    customerName: string;
    province: string;
    district: string;
    line: string;
    modifiedBy: string;
    modifiedTime: string;

    constructor() {
        this.customerCode = '';
        this.customerName = '';
        this.province = '';
        this.district = '';
        this.line = '';
        this.modifiedBy = '';
        this.modifiedTime = '';
    }
}

