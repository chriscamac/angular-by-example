import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesComponent } from './examples/examples.component';
import { ExamplesRoutingModule } from './examples-routing.module';

@NgModule({
    declarations: [ExamplesComponent],
    imports: [CommonModule, ExamplesRoutingModule],
})
export class ExamplesModule {}
