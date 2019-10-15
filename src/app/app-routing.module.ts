import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ApiResolver } from "./apiResolver.resolver";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    // { path: "metro", loadChildren: "~/app/metro/metro.module#MetroModule" },
    { path: "incidents", loadChildren: "~/app/incidents/incidents.module#IncidentsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
    providers: [
        ApiResolver
    ]
})
export class AppRoutingModule { }
