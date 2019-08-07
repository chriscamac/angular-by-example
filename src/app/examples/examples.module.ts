import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesComponent } from './examples-component/examples.component';
import { ExamplesRoutingModule } from './examples-routing.module';
import { GlobalInjectorExampleComponent } from './global-injector/global-injector.component';

import { HighlightModule } from 'ngx-highlightjs';

import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

export function hljsLanguages() {
    return [
        { name: 'typescript', func: typescript },
        { name: 'scss', func: scss },
        { name: 'xml', func: xml },
    ];
}

@NgModule({
    declarations: [ExamplesComponent, GlobalInjectorExampleComponent],
    imports: [
        CommonModule,
        ExamplesRoutingModule,
        HighlightModule.forRoot({
            languages: hljsLanguages,
        }),
    ],
})
export class ExamplesModule {}
