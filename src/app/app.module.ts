import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ExamplesModule } from './examples/examples.module';

@NgModule({
    declarations: [AppComponent, WelcomeComponent],
    imports: [BrowserModule, UiModule, ExamplesModule, AppRoutingModule],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent],
})
export class AppModule {}
