import { FileExtensionModel } from "../../shared/models/file.model";

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
    millDesc: string;

    public constructor() {
        this.material = '';
        this.materialDesc = '';
        this.grade = '';
        this.heatNo = '';
        this.quantity = 0;
        this.unit = '';
        this.millDesc = '';
    }
}

export class CertificateEntryListViewModel {
    millDesc: string;
    tmtMaterial: string;
    grade: string;
    heatNo: string;
    quantity: number;
    yield: string;
    tensile: string;
    unit: string;
    remark: string;

    public constructor() {
        this.millDesc = '';
        this.tmtMaterial = '';
        this.grade = '';
        this.heatNo = '';
        this.quantity = 0.00;
        this.unit = '';
        this.remark = '';
        this.yield = '';
        this.tensile = '';
    }
}

export class ReadResult {
    guid :string;
    certificateNo: string;
    certificateDate: string | null;
    results: MillResult[];
    certificateType: string;
    
    file: FileExtensionModel | null;
    constructor(){
        this.guid = '';
        this.certificateNo = '';
        this.certificateDate = null;
        this.results = [];
        this.certificateType = "";
        this.file = null;
    }
}

export interface MillResult {
    productNo: string;
    extraSize: string;
    grade: string;
    mass: string;
    heatNo: string;
    yield: string;
    tensile: string;
    unit: string;
    elong: string;
    remark :string;
    c:string;
    si:string;
    mn:string;
    p:string;
    s:string;
    tmtMaterial: string;
}
