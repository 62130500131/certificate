export class CustomerContractViewModel {
    customerCode: string;
    customerName: string;
    province: string;
    district: string;
    line: string;
    modifiedBy: string;
    modifiedTime: string;
    contactName: string;

    constructor() {
        this.customerCode = '';
        this.customerName = '';
        this.province = '';
        this.district = '';
        this.line = '';
        this.modifiedBy = '';
        this.modifiedTime = '';
        this.contactName = '';
    }
}

export class CustomerContractUploadViewModel {
    issue: string[];
    customerCode: string;
    customerName: string;
    province: string;
    district: string;
    line: string;

    constructor() {
        this.issue = [];
        this.customerCode = '';
        this.customerName = '';
        this.province = '';
        this.district = '';
        this.line = '';
    }
}

export class CustomerContractParam {
    customerCode: string;
    province: string;
    district: string;
    constructor() {
        this.customerCode = '';
        this.province = '';
        this.district = '';
    }
}