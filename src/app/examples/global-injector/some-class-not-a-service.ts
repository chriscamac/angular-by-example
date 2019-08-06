import { DatePipe } from '@angular/common';
import { globalInjector } from './global-injector';

export class SomeClassNotAService {
    datePipe: DatePipe;

    constructor() {
        // use the globalInjector to get the DatePipe
        this.datePipe = globalInjector.get(DatePipe);
    }

    // now use the datePipe
    getCurrentTimeFormatted(): string {
        return this.datePipe.transform(new Date());
    }
}
