import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

enableProdMode();

const platform = platformBrowser();
platform.bootstrapModule(AppModule);