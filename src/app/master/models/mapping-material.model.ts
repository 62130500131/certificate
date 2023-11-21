export class MappingMaterialViewModel {
    index: number;
    materialCode: string;
    materialDesc: string;
    modifiedBy: string;
    modifiedTime: string;

    constructor() {
        this.index = 0;
        this.materialCode = '';
        this.materialDesc = '';
        this.modifiedBy = '';
        this.modifiedTime = (new Date()).toString();
    }
}

export class MappingMaterialSearchParam {

    material: string;

    constructor() {
        this.material = '';
    }
}

