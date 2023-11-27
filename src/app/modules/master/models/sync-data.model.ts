export class SyncDataViewModel {
    syncName: string;
    lastSyncBy: string;
    lastSyncTime: string;
    constructor() {
        this.syncName = '';
        this.lastSyncBy = '';
        this.lastSyncTime = '';
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