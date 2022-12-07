import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {FooterComponent} from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";

const reexportedModules = [HttpClientModule];

@NgModule({
  declarations: [
    NavigationBarComponent,
    FooterComponent
  ],
  exports: [
    ...reexportedModules,
    NavigationBarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ...reexportedModules,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('CoreModule exists!')
    }
  }
}
