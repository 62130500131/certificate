export class SyncDataViewModel {
    syncName: string;
    lastSyncBy: string;
    lastSyncTime: string;
    status: string;
    lastUpdate: Date;
    constructor() {
        this.syncName = '';
        this.lastSyncBy = '';
        this.lastSyncTime = '';
        this.status = "Complete";
        this.lastUpdate = new Date();
    }
}

export class SyncLogsViewModel {
    syncTime: string;
    actionBy: string;
    status: string;
    constructor() {
        this.syncTime = '';
        this.actionBy = '';
        this.status = '';
    }
}
export class SyncLogsParam {
    date: number;
    dateFrom: string;
    dateTo: string;
    statusFailed: string;
    statusSuccess: string;
    constructor() {
        this.date = 0;
        this.dateFrom = '';
        this.dateTo = '';
        this.statusFailed = 'statusFailed';
        this.statusSuccess = 'statusSuccess';
    }
}