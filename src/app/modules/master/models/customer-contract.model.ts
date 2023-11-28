export class CustomerContractViewModel {
    customerCode: string;
    customerName: string;
    province: string;
    district: string;
    line: string;
    modifiedBy: string;
    modifiedTime: string;
    contactName: string;
    contactTel:string

    constructor() {
        this.customerCode = '';
        this.customerName = '';
        this.province = '';
        this.district = '';
        this.line = '';
        this.modifiedBy = '';
        this.modifiedTime = '';
        this.contactName = '';
        this.contactTel = '';
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

export class AddCustomerContractParam {
    customerCode: string;
    province: string;
    district: string;
    customerName: string;
    line: string;
    contactName: string;
    contactTel:string;
    constructor() {
        this.customerCode = '';
        this.province = '';
        this.district = '';
        this.customerName = '';
        this.line = '';
        this.contactName = '';
        this.contactTel = '';
    }
}