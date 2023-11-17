export class searchParamCertificateList {
    certNo: string;
    material: string;
    grade: string;
    mill: string;
    heatNo: string;
    certDate: string;
    uploadDate: string;

    public constructor() {
        this.certNo = '';
        this.material = '';
        this.grade = '';
        this.mill = '';
        this.heatNo = '';
        this.certDate = '';
        this.uploadDate = '';
    }
}

export class certificateListViewModel {
    certNo: string;
    mill: string;
    totalMaterial: number;
    certDate: any;
    uploadDate: any;
    modifiedBy: string;
    modifiedTime: any;
    dataSource: any;

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