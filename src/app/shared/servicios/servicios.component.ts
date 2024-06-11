import { Component } from '@angular/core';
import { Personaje } from '../../interfaz/personaje';
import { HttpClientModule } from '@angular/common/http';
import { RecursosService } from '../../servicios/recursos.service';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [HttpClientModule],
  providers: [RecursosService],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  personajes: Personaje[] = [];
  constructor(private recursosService: RecursosService){
    recursosService.obtenerDatos().subscribe(respuesta => {
      this.personajes = respuesta as Array<Personaje>
    })
  }
}