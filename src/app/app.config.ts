import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import * as echarts from 'echarts/core';

import { routes } from './app.routes';
import { MyPreset } from './theme/my-preset';
import { provideEchartsCore } from 'ngx-echarts';
import { loggingInterceptor } from './shared/interceptor/logging.interceptor';
import { authInterceptor } from './auth/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEchartsCore({ echarts }),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors(
      [
        // loggingInterceptor,
        authInterceptor
      ])),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: MyPreset
      }
    })
  ]
};
