import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplesComponent } from './examples/examples.component';
import { GlobalInjectorExampleComponent } from './global-injector/global-injector.component';

const routes: Routes = [
    {
        path: 'examples',
        component: ExamplesComponent,
    },
    {
        path: 'examples/global-injector',
        component: GlobalInjectorExampleComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExamplesRoutingModule {}
