import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesComponent } from './examples-component/examples.component';
import { ExamplesRoutingModule } from './examples-routing.module';
import { WorkingWithApisComponent } from './examples/working-with-apis/working-with-apis.component';

@NgModule({
    declarations: [ExamplesComponent, WorkingWithApisComponent],
    imports: [CommonModule, ExamplesRoutingModule],
})
export class ExamplesModule {}
