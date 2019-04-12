// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

// for pull to refresh function
import { registerElement } from "nativescript-angular/element-registry";
registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);

import { AppModule } from "./app/app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);
