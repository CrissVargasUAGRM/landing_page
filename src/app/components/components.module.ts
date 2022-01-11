import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { ContactanosComponent } from './contactanos/contactanos.component';



@NgModule({
  declarations: [HeaderComponent, AboutComponent, ServicesComponent, DescripcionComponent, ContactanosComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    DescripcionComponent,
    ContactanosComponent
  ]
})
export class ComponentsModule { }
