import { Component, OnInit } from '@angular/core';
import { ExamplesService, IExample } from '../examples.service';

@Component({
    selector: 'app-examples',
    templateUrl: './examples.component.html',
    styleUrls: ['./examples.component.less'],
})
export class ExamplesComponent implements OnInit {
    examples: IExample[] = [];
    constructor(private examplesService: ExamplesService) {}

    ngOnInit() {
        this.examples = this.examplesService.examples;
    }
}
