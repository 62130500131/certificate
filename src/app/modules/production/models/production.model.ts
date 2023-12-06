export class ProductionStatusSearchParam {

    materialCode: string;
    productionDate: number;
    productionFrom: string;
    productionTo: string;
    selectWaitSample: string;
    selectWaitFilm: string;
    selectSampleReady: string;
    selectFilmReady: string;
    selectCancel: string;
    selectComplete: string;
    soldTo: string;
    productionOrder: string;

    constructor() {
        this.materialCode = '';
        this.productionDate = 30;
        this.productionFrom = '';
        this.productionTo = '';
        this.selectWaitSample = 'waitSample';
        this.selectWaitFilm = 'waitFilm';
        this.selectSampleReady = 'sampleReady';
        this.selectFilmReady = 'filmReady';
        this.selectCancel = 'cancel';
        this.selectComplete = 'complete';
        this.soldTo = '';
        this.productionOrder = '';
    }

}
export class ProductionStatusViewModel {

    productionOrder: string;
    itemNo: number;
    materialCode: string;
    materialDesc: string;
    qty: number;
    soldTo: string;
    soldToName: string;
    grDate: string;
    status: string;
    unit: string;

    constructor() {
        this.productionOrder = '';
        this.itemNo = 0;
        this.materialCode = '';
        this.materialDesc = '';
        this.qty = 0;
        this.soldTo = '';
        this.soldToName = '';
        this.grDate = '';
        this.status = '';
        this.unit = '';
    }
}

export class InformationViewModel {
    status: string;
    explanation: string;
    constructor() {
        this.status = '';
        this.explanation = '';
    }
}