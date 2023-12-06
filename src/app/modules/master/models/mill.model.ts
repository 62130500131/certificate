export class MillViewModel {
    millCode: string;
    millDesc: string;
    modifiedBy: string;
    modifiedTime: Date;
    constructor() {
        this.millCode = ""
        this.millDesc = ""
        this.modifiedBy = ""
        this.modifiedTime = new Date()
    }
}