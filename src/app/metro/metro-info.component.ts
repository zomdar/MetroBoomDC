import { Component, OnInit } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable";

import { MetroService } from "./metro.service";

@Component({
    selector: "ns-metro-info",
    moduleId: module.id,
    templateUrl: "./metro-info.component.html"
})
export class MetroInfoComponent implements OnInit {

    public metroInfo;

    constructor(private MetroService: MetroService) { }

    ngOnInit() {
        this.extractData();
    }

    extractData() {
        this.MetroService.getData()
            .subscribe((result) => {
                this.onGetDataSuccess(result);
            }, (error) => {
                console.log(error);
            });
    }

    private onGetDataSuccess(res) {
        this.metroInfo = res;
    }

    // >> button-tap-event-code
    onTap(args: EventData) {
        this.extractData();
    }
}
