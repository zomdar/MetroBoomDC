import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { InsidentsRoutingModule } from "./insidents-routing.module";
import { InsidentsComponent } from "./insidents.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        InsidentsRoutingModule
    ],
    declarations: [
        InsidentsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class insidentsModule { }
