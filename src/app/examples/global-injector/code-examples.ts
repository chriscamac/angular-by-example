export const globalInjectorCodeExamples = {
    classCode: `
    export class SomeClassNotAService {
        constructor() {}

        // what if we wanted to use angular's date pipe here?
        // we don't have access to dependency injection
        // since we are just a class
        getCurrentTimeFormatted(): string {
            return new Date().toString();
        }
    }
    `,
    globalInjector: `
    // doing this in a separate file rather than in the app.module.ts file
    // avoids circular dependency warnings
    import { Injector } from '@angular/core';

    export let globalInjector: Injector;

    export function setGlobalInjector(injector: Injector) {
        if (globalInjector) {
            // just being cautious here, this shouldn't happen
            console.error('globalInjector was already set');
        } else {
            globalInjector = injector;
        }
    }
    `,
    appModule: `
    // here we are modifying the AppModule and using it to get access
    // to the injector
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule, Injector } from '@angular/core';
    import { DatePipe } from '@angular/common';
    import { setGlobalInjector } from './examples/global-injector/global-injector';

    @NgModule({
        imports: [BrowserModule],
        providers: [DatePipe],
        ...
    })
    export class AppModule {
        constructor(injector: Injector) {
            setGlobalInjector(injector);
        }
    }
    `,
    classCodeWithInjector: `
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
    `,
};
