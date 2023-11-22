export class MappingMaterialViewModel {
    index?: number;
    materialCode?: string;
    materialDesc?: string;
    modifiedBy?: string;
    modifiedTime?: Date;

    constructor() {
        this.index = 0;
        this.materialCode = '';
        this.materialDesc = '';
        this.modifiedBy = '';
        this.modifiedTime = new Date()
    }
}

export class MappingMaterialImportViewModel {
    issue: string[];
    materialCode: string;
    materialDesc: string;
    mill: string;
    millDesc: string;

    constructor() {
        this.issue = [];
        this.materialCode = '';
        this.materialDesc = '';
        this.mill = '',
            this.millDesc = '';
    }
}