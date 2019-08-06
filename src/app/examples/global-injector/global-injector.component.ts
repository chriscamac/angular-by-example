import { Component, OnInit } from '@angular/core';
import { ExamplesService, IExample } from '../examples.service';

@Component({
    templateUrl: './global-injector.component.html',
    styleUrls: ['./global-injector.component.less'],
})
export class GlobalInjectorExampleComponent implements OnInit {
    constructor() {}

    ngOnInit() {
    }
}
