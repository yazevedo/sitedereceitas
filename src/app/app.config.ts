import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Rotas definidas em outro arquivo

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
