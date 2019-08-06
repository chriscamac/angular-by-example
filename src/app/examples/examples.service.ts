import { Injectable } from '@angular/core';
import { globalInjectorExample } from './global-injector/global-injector.component';

export interface IExample {
    title: string;
    description: string;
    route: string;
}

@Injectable({
    providedIn: 'root',
})
export class ExamplesService {
    private _examples: IExample[] = [
        globalInjectorExample,
    ];

    get examples(): IExample[] {
        return this._examples;
    }

    constructor() {}
}
