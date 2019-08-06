import { Injector } from '@angular/core';

export let globalInjector: Injector;

export function setGlobalInjector(injector: Injector) {
    if (globalInjector) {
        console.error('Programming error: globalInjector was already set');
    } else {
        globalInjector = injector;
    }
}
