import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {
    LocationStrategy,
    HashLocationStrategy,
    DatePipe,
} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ExamplesModule } from './examples/examples.module';
import { setGlobalInjector } from './examples/global-injector/global-injector';
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [AppComponent, WelcomeComponent, AboutComponent],
    imports: [BrowserModule, UiModule, ExamplesModule, AppRoutingModule],
    providers: [
        DatePipe,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(injector: Injector) {
        setGlobalInjector(injector);
    }
}
