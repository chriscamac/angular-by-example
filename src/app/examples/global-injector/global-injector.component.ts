import { Component, OnInit } from '@angular/core';
import { IExample } from '../examples.service';
import { SomeClassNotAService } from './some-class-not-a-service';

export const globalInjectorExample: IExample = {
    title: `Global Injector`,
    description: `There are times when you would want to be able to use dependency injection, but the code
      you are working with is not a registered component or service.  Thus the constructor does not follow
      dependency injection rules.  Setting up a global injector provides a way to fix this problem.`,
    route: `global-injector`,
};

@Component({
    templateUrl: './global-injector.component.html',
    styleUrls: ['./global-injector.component.less'],
})
export class GlobalInjectorExampleComponent implements OnInit {
    description: string;

    currentTimeFormatted;

    classCode = `
    export class SomeClassNotAService {
        constructor() {}

        // what if we wanted to use angular's date pipe here?
        // we don't have access to dependency injection
        // since we are just a class
        getCurrentTimeFormatted(): string {
            return new Date().toString();
        }
    }
    `;

    globalInjector = `
    import { Injector } from '@angular/core';

    export let globalInjector: Injector;

    export function setGlobalInjector(injector: Injector) {
        if (globalInjector) {
            console.error('Programming error: globalInjector was already set');
        } else {
            globalInjector = injector;
        }
    }
    `;

    appModule = `
    // here we are modifying the AppModule and using it to get access
    // to the injector
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule, Injector } from '@angular/core';
    import { setGlobalInjector } from './examples/global-injector/global-injector';

    @NgModule({
        imports: [BrowserModule],
        ...
    })
    export class AppModule {
        constructor(injector: Injector) {
            setGlobalInjector(injector);
        }
    }
    `;

    classCodeWithInjector = `
    import { DatePipe } from '@angular/common';
    import { globalInjector } from './global-injector';

    export class SomeClassNotAService {
        datePipe: DatePipe;

        constructor() {
            // use the globalInjector to get the DatePipe
            this.datePipe = globalInjector.get(DatePipe);
        }

        // now use the datePipe
        getCurrentTimeFormatted(): string {
            return this.datePipe.transform(new Date());
        }
    }
    `;

    constructor() {}

    ngOnInit() {
        this.description = globalInjectorExample.description;
        this.currentTimeFormatted = new SomeClassNotAService().getCurrentTimeFormatted();
    }
}
