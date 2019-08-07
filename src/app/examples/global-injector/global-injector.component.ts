import { Component, OnInit } from '@angular/core';
import { IExample } from '../examples.service';
import { SomeClassNotAService } from './some-class-not-a-service';
import { globalInjectorCodeExamples } from './code-examples';

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

    currentTimeFormattedWithoutDatePipe;
    currentTimeFormattedUsingDatePipe;

    classCode = globalInjectorCodeExamples.classCode;
    globalInjector = globalInjectorCodeExamples.globalInjector;
    appModule = globalInjectorCodeExamples.appModule;
    classCodeWithInjector = globalInjectorCodeExamples.classCodeWithInjector;

    constructor() {}

    ngOnInit() {
        this.description = globalInjectorExample.description;
        this.currentTimeFormattedWithoutDatePipe = new Date().toString();
        this.currentTimeFormattedUsingDatePipe = new SomeClassNotAService().getCurrentTimeFormatted();
    }
}
