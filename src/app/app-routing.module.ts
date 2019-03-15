import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ApiResolver } from "./apiResolver.resolver";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule", resolve: { metro: ApiResolver } },
    { path: "metro", loadChildren: "~/app/metro/metro.module#MetroModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
    providers: [
        ApiResolver
    ]
})
export class AppRoutingModule { }
