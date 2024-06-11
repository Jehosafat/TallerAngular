import { Routes } from '@angular/router';
import { ContactosComponent } from './shared/contactos/contactos.component';
import { InicioComponent } from './shared/inicio/inicio.component';
import { NosotrosComponent } from './shared/nosotros/nosotros.component';
import { ServiciosComponent } from './shared/servicios/servicios.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'contactos', component: ContactosComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'servicios', component: ServiciosComponent }
];

export class AppRoutingModule { }