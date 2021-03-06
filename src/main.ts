import './polyfills.ts';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import {AppModule} from './app/';
import {disableDebugTools} from "@angular/platform-browser";

if (environment.production) {
    enableProdMode();
}

// enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
