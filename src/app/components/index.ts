import { NgModule } from '@angular/core';

/**
 * Import Components
 */
import { BusyLoaderComponent } from './busy-loader/busy-loader.component'; 
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


export const COMPONENTS = [
    BusyLoaderComponent,
    HeaderComponent,
    FooterComponent
];

@NgModule({
    imports: [],
    declarations: COMPONENTS,
    exports: COMPONENTS
})

export class ComponentsModule {}