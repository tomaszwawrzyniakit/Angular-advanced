import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {FeaturesModule} from "./feature/features.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FeaturesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
