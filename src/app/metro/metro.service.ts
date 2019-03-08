import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

// import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class MetroService {
    private serverUrl = "https://api.wmata.com/StationPrediction.svc/json/GetPrediction/E03";

    constructor(private http: HttpClient) { }

    getData() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers });
    }

    private createRequestHeader() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            "api_key": "e13626d03d8e4c03ac07f95541b3091b",
            "Content-Type": "application/json",
         });

        return headers;
    }
}
