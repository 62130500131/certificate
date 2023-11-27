export class QaStatusSearchParam {

    materialCode: string;
    productionDate: number;
    productionFrom: string;
    productionTo: string;
    selectWaitSample: string;
    selectWaitFilm: string;
    selectSampleReady: string;
    selectFilmReady: string;



    constructor() {
        this.materialCode = '';
        this.productionDate = 90;
        this.productionFrom = '';
        this.productionTo = '';
        this.selectWaitSample = 'waitSample';
        this.selectWaitFilm = 'waitFilm';
        this.selectSampleReady = 'sampleReady';
        this.selectFilmReady = 'filmReady';

    }
}
export class QaStatusCompleteSearchParam {

    materialCode: string;
    productionDate: number;
    productionFrom: string;
    productionTo: string;
    selectCancel: string;
    selectComplete: string;

    constructor() {
        this.materialCode = '';
        this.productionDate = 90;
        this.productionFrom = '';
        this.productionTo = '';
        this.selectCancel = 'complete';
        this.selectComplete = 'cancel';
    }
}

export class QaStatusMonitorViewModel {

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
        this.unit = 'KG'
    }
}

export class QaStatusCompleteViewModel {

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

export class CertificateData {

    materialDecs: string;
    c: number;
    si: number;
    mn: number;
    p: number;
    s: number;
    ys: number;
    ts: number;
    elongation: number;
    hardness: string;
    bendTest: string;
    compression: string;
    impactEnergy: number;

    constructor() {
        this.materialDecs = '';
        this.c = 0;
        this.si = 0;
        this.mn = 0;
        this.p = 0;
        this.s = 0;
        this.ys = 0;
        this.ts = 0;
        this.elongation = 0;
        this.hardness = '';
        this.bendTest = '';
        this.compression = '';
        this.impactEnergy = 0;
    }
}