import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { IncidentsRoutingModule } from "./incidents-routing.module";
import { IncidentsComponent } from "./incidents.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        IncidentsRoutingModule
    ],
    declarations: [
        IncidentsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class IncidentsModule { }
