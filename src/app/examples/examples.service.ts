import { Injectable } from '@angular/core';

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
        {
            title: `Working with API's`,
            description: `Retreiving objects from API's and building out those objects into compilation objects.
              Includes making multiple calls to an API both synchronously and asynchronously in order to build out
              a larger compilation object from the the resulting calls.`,
            route: `working-with-apis`,
        },
    ];

    get examples(): IExample[] {
        return this._examples;
    }

    constructor() {}
}
