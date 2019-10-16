import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel } from "nativescript-ui-autocomplete";
import { ActivatedRoute } from '@angular/router';

import { map, distinct } from 'rxjs/operators';
import { Observable } from "rxjs";

import { MetroService } from "../metroService/metro.service";

interface Metro {
    Stations: Array<[]>;
}

interface Stations {
    Name: string;
}

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

    public metroStationCode: string = "";
    newMetroStationNameArray
    metroStationNameArray;

    private autocompleteMetroStations: ObservableArray<TokenModel>;

    constructor(private metroService: MetroService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.autocompleteMetroStations = new ObservableArray<TokenModel>();
        this.metroStationR = this.metroService.getTrainStationInfo();

        this.metroStationNameArray = this.metroStationR
                                        .subscribe((res) => {
                                            this.newMetroStationNameArray = []
                                            res.Stations.forEach((item, index) => {
                                                if (this.newMetroStationNameArray.findIndex(i => i.Name == item.Name) === -1) {
                                                    this.newMetroStationNameArray.push(item)
                                                }

                                            });
                                            this.newMetroStationNameArray.forEach((metroStationInfo) => {
                                                this.autocompleteMetroStations.push(new TokenModel(metroStationInfo.Name, undefined));
                                            });
                                        },
                                        (error) => {
                                            console.log(error);
                                        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    extractData(stationCode: string) {
        this.metroService.getData(stationCode)
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
        this.metroStationR.subscribe((res) => {
            res.Stations .forEach(station => {
                if(arg.text === station.Name) {
                    this.metroStationCode = station.Code;
                    this.processing = false;
                    this.extractData(station.Code);
                }
            })
        }, (error) => {
            console.log(error);
        });
    }

    refreshList(args) {
        var pullRefresh = args.object;
        this.extractData(this.metroStationCode);
        setTimeout(function () {
            pullRefresh.refreshing = false;
        }, 1000);
    }

}
