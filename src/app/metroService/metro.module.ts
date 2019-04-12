import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MetroRoutingModule } from "./metro-routing.module";
import { MetroComponent } from "./metro.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MetroRoutingModule
    ],
    declarations: [
        MetroComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MetroModule { }
