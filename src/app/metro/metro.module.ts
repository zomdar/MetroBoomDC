import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MetroRoutingModule } from "./metro-routing.module";
import { MetroInfoComponent } from "./metro-info.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MetroRoutingModule
    ],
    declarations: [
        MetroInfoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MetroInfoModule { }
