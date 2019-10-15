import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

// import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class MetroService {
    private serverUrl = "https://api.wmata.com/";

    constructor(private http: HttpClient) { }

    getData(train: string): Observable<any>  {
        let headers = this.createRequestHeader();
        return this.http.get(`${this.serverUrl}StationPrediction.svc/json/GetPrediction/${train}`, { headers: headers })
                        .pipe(
                            map(resp => {
                                return resp;
                            })
                        );
    }

    getTrainStationInfo() {
        let headers = this.createRequestHeader();
        return this.http.get(`${this.serverUrl}Rail.svc/json/jStations`, { headers: headers })
                        .pipe(
                            map(resp => {
                                return resp;
                            })
                        );
    }

    getTrainIncidents(): Observable<any> {
        let headers = this.createRequestHeader();
        return this.http.get(`${this.serverUrl}Incidents.svc/json/Incidents`, { headers: headers })
                        .pipe(
                            map(resp => {
                                return resp;
                            })
                        );
    }

    private createRequestHeader() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            "api_key": "69bc39d1fb1e4fbc85f8cd3c0563fea9",
            "Content-Type": "application/json",
         });

        return headers;
    }
}
