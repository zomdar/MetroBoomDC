import { Component, OnInit } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { registerElement } from 'nativescript-angular/element-registry';
registerElement('ImageZoom', () => require('nativescript-image-zoom').ImageZoom);

import { MetroService } from "./metro.service";

@Component({
    selector: "metro",
    moduleId: module.id,
    styleUrls: ["./metro.component.css"],
    templateUrl: "./metro.component.html"
})
export class MetroComponent implements OnInit {

    public metroInfo;

    constructor(private MetroService: MetroService) { }

    ngOnInit() {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

}
