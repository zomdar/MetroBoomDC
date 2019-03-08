import { Component, OnInit } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { MetroService } from "./metro.service";

@Component({
    selector: "metro",
    moduleId: module.id,
    templateUrl: "./metro.component.html"
})
export class MetroComponent implements OnInit {

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

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
