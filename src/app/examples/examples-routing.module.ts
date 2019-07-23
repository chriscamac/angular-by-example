import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplesComponent } from './examples-component/examples.component';
import { WorkingWithApisComponent } from './examples/working-with-apis/working-with-apis.component';

const routes: Routes = [
    {
        path: 'examples',
        component: ExamplesComponent,
    },
    {
        path: 'examples/working-with-apis',
        component: WorkingWithApisComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExamplesRoutingModule {}
