import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { MetroService } from "../metroService/metro.service";

// pull to refresh components
import { registerElement } from "nativescript-angular/element-registry";

@Component({
    selector: "Incidents",
    moduleId: module.id,
    templateUrl: "./incidents.component.html"
})
export class IncidentsComponent implements OnInit {

    public incidentsData;

    constructor(private MetroService: MetroService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
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
        // this.metroExists = false;
        // if(res.Trains.length > 0) {
        //     this.metroExists = true;
        // }
        // this.metroInfo = res.Trains;

        // var groupByName = {};
        // res.Trains.forEach(function (a) {
        //     groupByName [a.Line] = groupByName [a.Line] || [];
        //     groupByName [a.Line].push({ DestinationName: a.DestinationName, Min: a.Min });
        // });
        // this.groupByNameMetroInfo = groupByName;
        console.log(res);
    }

    refreshList(args) {
        var pullRefresh = args.object;
        // this.extractData(this.metroStationCode);
        // setTimeout(function () {
        //     pullRefresh.refreshing = false;
        // }, 1000);
    }
}
