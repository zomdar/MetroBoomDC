import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel } from "nativescript-ui-autocomplete";

import { ActivatedRoute } from '@angular/router';
import { TextField } from "tns-core-modules/ui/text-field";

import { MetroService } from "../metro/metro.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    styleUrls: ["./home.component.css"],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public metroInfo;
    public groupByNameMetroInfo;
    public metroStationR;
    public searchTxt: string = "";
    public processing = false;
    public metroExists: boolean;

    private autocompleteMetroStations: ObservableArray<TokenModel>;

    constructor(private MetroService: MetroService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.metroStationR = this.route.snapshot.data.metro.Stations;
        this.autocompleteMetroStations = new ObservableArray<TokenModel>();
        this.metroStationR.forEach((metroStationInfo) => {
            this.autocompleteMetroStations.push(new TokenModel(metroStationInfo.Name, undefined));
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    extractData(stationCode: string) {
        this.MetroService.getData(stationCode)
            .subscribe((res) => {
                this.onGetDataSuccess(res);
            }, (error) => {
                console.log(error);
            });
    }

    private onGetDataSuccess(res) {
        this.metroExists = false;
        if(res.Trains.length > 0) {
            this.metroExists = true;
        }
        this.metroInfo = res.Trains;

        var groupByName = {};
        res.Trains.forEach(function (a) {
            groupByName [a.Line] = groupByName [a.Line] || [];
            groupByName [a.Line].push({ DestinationName: a.DestinationName, Min: a.Min });
        });
        this.groupByNameMetroInfo = groupByName;
    }

    searchData(arg) {
        this.processing = true;
        this.metroStationR.forEach(station => {
            if(arg.text === station.Name) {
                this.processing = false;
                this.extractData(station.Code);
            }
        })
    }

}
