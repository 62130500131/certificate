import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MillViewModel } from "../models/mill.model";

@Injectable({
    providedIn: 'root'
})
export class MillService {

    private millDataSource: MillViewModel[] = [
        {
            millCode: "GJ",
            millDesc: "G Steel Public Company Limited",
            modifiedBy: "Connex",
            modifiedTime: new Date()
        },
        {
            millCode: "GJS",
            millDesc: "G Steel",
            modifiedBy: "Connex",
            modifiedTime: new Date()
        },
        {
            millCode: "SYS",
            millDesc: "SIAM YAMATO STEEL CO., LTD.",
            modifiedBy: "Connex",
            modifiedTime: new Date()
        },
        {
            millCode: "SSI",
            millDesc: "G Steel",
            modifiedBy: "Connex",
            modifiedTime: new Date()
        }
    ]
    public initial(): Observable<any[]> {
        return of(this.millDataSource)
    }

}