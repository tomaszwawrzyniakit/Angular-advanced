import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {FooterComponent} from './footer/footer.component';


@NgModule({
  declarations: [
    NavigationBarComponent,
    FooterComponent
  ],
  exports: [
    NavigationBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('CoreModule exists!')
    }
  }
}
