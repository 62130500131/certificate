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