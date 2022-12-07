import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {FeaturesModule} from "./feature/features.module";
import {SharedModule} from "./shared/shared.module";
import {RouterModule} from "@angular/router";
import {NotFoundComponent} from './feature/not-found/not-found.component';
import {routes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FeaturesModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(routes, {
      enableTracing: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
