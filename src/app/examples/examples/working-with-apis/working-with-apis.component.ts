import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    templateUrl: './working-with-apis.component.html',
    styleUrls: ['./working-with-apis.component.less'],
})
export class WorkingWithApisComponent implements OnInit {
    employees;
    employee;

    constructor(private http: Http) {}

    ngOnInit() {
        this.http
            .get('http://api.worldbank.org/v2/country/br?format=json')
            .subscribe(employees => {
                console.log(employees);
            });
        // http://api.worldbank.org/v2/country/BRA/indicator/NY.GDP.MKTP.CD?format=json
    }
}
