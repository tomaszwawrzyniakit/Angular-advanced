import {APP_INITIALIZER, ErrorHandler, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {FooterComponent} from './footer/footer.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {JwtTokenInterceptor} from "./jwt-token.interceptor";
import {HttpErrorInterceptor} from "./http-error.interceptor";
import {RetryInterceptor} from "./http-retry.interceptor";
import {baseUrlToken} from "./base-url.token";
import {environment} from "../../environment/environment";
import {serverConfigurationInitializer} from "./server-configuration.initializer";
import {GlobalErrorHandler} from "./global-error-handler.service";
import {RouterModule} from "@angular/router";

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
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },

    {
      provide: baseUrlToken,
      useValue: environment.BASE_API
    },

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
    },

    {
      provide: APP_INITIALIZER,
      useFactory: serverConfigurationInitializer,
      deps: [HttpClient],
      multi: true
    }
  ],
  imports: [
    CommonModule,
    RouterModule,
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
