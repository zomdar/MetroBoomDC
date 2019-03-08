import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";

import { MetroService } from "../metro/metro.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public metroInfo;

    constructor(private MetroService: MetroService) { }

    ngOnInit() {
        this.extractData();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
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
        this.metroInfo = res.Trains;
    }

    // >> button-tap-event-code
    onTap(args: EventData) {
        this.extractData();
    }
}
