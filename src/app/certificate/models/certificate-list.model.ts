export class SearchParamCertificateList {
    certNo: string;
    material: string;
    grade: string;
    mill: string;
    heatNo: string;
    certDate: number;
    uploadDate: number;
    certFrom: string;
    certTo: string;
    uploadFrom: string;
    uploadTo: string;

    public constructor() {
        this.certNo = '';
        this.material = '';
        this.grade = '';
        this.mill = '';
        this.heatNo = '';
        this.certDate = 90;
        this.uploadDate = 90;
        this.certFrom = '';
        this.certTo = '';
        this.uploadFrom = '';
        this.uploadTo = '';
    }
}

export class CertificateListViewModel {
    certNo: string;
    mill: string;
    totalMaterial: number;
    certDate: any;
    uploadDate: any;
    modifiedBy: string;
    modifiedTime: any;
    dataSource: CertificateListDetailViewModel[];

    public constructor() {
        this.certNo = ''
        this.mill = ''
        this.totalMaterial = 0
        this.certDate = ''
        this.uploadDate = ''
        this.modifiedBy = ''
        this.modifiedTime = ''
        this.dataSource = [];
    }
}

export class CertificateListDetailViewModel {
    material: string;
    materialDesc: string;
    grade: string;
    heatNo: string;
    quantity: number;
    unit: string;

    public constructor() {
        this.material = '';
        this.materialDesc = '';
        this.grade = '';
        this.heatNo = '';
        this.quantity = 0;
        this.unit = '';
    }
}

export class CertificateEntryListViewModel {
    millDesc: string;
    tmtMaterial: string;
    tmtDesc: string;
    grade: string;
    heatNo: string;
    quantity: number;
    unit: string;
    remark: string;

    public constructor() {
        this.millDesc = '';
        this.tmtMaterial = '';
        this.tmtDesc = '';
        this.grade = '';
        this.heatNo = '';
        this.quantity = 0;
        this.unit = '';
        this.remark = '';
    }
}