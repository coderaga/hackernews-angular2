import { NgModule } from '@angular/core';

/**
 * Import Components
 */
import { BusyLoaderComponent } from './busy-loader/busy-loader.component'; 


export const COMPONENTS = [
    BusyLoaderComponent
];

@NgModule({
    imports: [],
    declarations: COMPONENTS,
    exports: COMPONENTS
})

export class ComponentsModule {}