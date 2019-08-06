import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesComponent } from './examples/examples.component';
import { ExamplesRoutingModule } from './examples-routing.module';
import { GlobalInjectorExampleComponent } from './global-injector/global-injector.component';

@NgModule({
    declarations: [ExamplesComponent, GlobalInjectorExampleComponent],
    imports: [CommonModule, ExamplesRoutingModule],
})
export class ExamplesModule {}
