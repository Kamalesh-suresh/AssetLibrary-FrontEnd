import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { definePreset } from '@primeuix/themes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import Material from '@primeuix/themes/material';
import { authInterceptor } from './services/auth.interceptor';

import { routes } from './app.routes';

const MyPreset = definePreset(Material, {
  semantic: {
    primary: {
      50: '#F3E5F5',
      100: '#237E7E',
      200: '#DCD80D',
      300: '#BA68C8',
      400: '#AB47BC',
      500: '#9C27B0', // Secondary main
      600: '#8E24AA',
      700: '#7B1FA2',
      800: '#6A1B9A',
      900: '#4A148C',
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimationsAsync(),
    provideAnimations(),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    providePrimeNG({
      zIndex: {
        modal: 1100, // dialog, sidebar
        overlay: 1000, // dropdown, overlaypanel
        menu: 1000, // overlay menus
        tooltip: 1100, // tooltip
      },
      ripple: true,
      theme: {
        preset: MyPreset,
        options: {
          prefix: 'my',
          darkModeSelector: false || 'none',
        },
      },
    }),
  ],
};
