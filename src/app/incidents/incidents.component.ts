import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { MetroService } from "../metroService/metro.service";

@Component({
    selector: "Incidents",
    moduleId: module.id,
    styleUrls: ["./incidents.component.css"],
    templateUrl: "./incidents.component.html"
})
export class IncidentsComponent implements OnInit {

    public incidentsData: Array<any>;
    public incidentsExists: boolean;

    public items: any[] = [{imageUrl: "https://via.placeholder.com/300"}];

    constructor(private MetroService: MetroService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.extractIncidentData();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    extractIncidentData() {
        this.MetroService.getTrainIncidents()
            .subscribe((res) => {
                this.onGetDataSuccess(res);
            }, (error) => {
                console.log(error);
            });
    }

    private onGetDataSuccess(res) {
        this.incidentsExists = false;
        if(res.Incidents.length > 0) {
            this.incidentsExists = true;
        }
        this.incidentsData = res.Incidents;
    }

    refreshIncidentsList(args) {
        var pullRefresh = args.object;
        this.extractIncidentData();
        setTimeout(function () {
            pullRefresh.refreshing = false;
        }, 1000);
    }
}
