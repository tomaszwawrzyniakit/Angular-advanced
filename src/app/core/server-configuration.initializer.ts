import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";


export const serverConfigurationInitializer = (httpClient: HttpClient) =>
  () => httpClient.get('/api/settings').pipe(tap((config) => console.log('loaded config', config)));
