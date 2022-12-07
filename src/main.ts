import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

console.log('JS ready!')

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(()=> console.log('Angular ready!'))
  .catch(err => console.error(err));
