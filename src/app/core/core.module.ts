import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {FooterComponent} from './footer/footer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtTokenInterceptor} from "./jwt-token.interceptor";
import {HttpErrorInterceptor} from "./http-error.interceptor";
import {RetryInterceptor} from "./http-retry.interceptor";

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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtTokenInterceptor,
      multi: true
    },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: RetryInterceptor,
      multi: true
    }
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
