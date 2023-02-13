import { Component } from '@angular/core';
import { Libro } from './Libro';
import { Aventura } from './Aventura';

@Component({
  selector: 'app-listas-eventos-enlaces',
  templateUrl: './listas-eventos-enlaces.component.html',
  styleUrls: ['./listas-eventos-enlaces.component.css']
})
export class ListasEventosEnlacesComponent {

  libros: Array<Libro>;
  aventuras: Array<Aventura>;

  constructor() {
    this.libros = [ 
      { id:'1', titulo:'El mundo de la música', autor:'Juan Ruíz', precio: 35 },
      { id:'2', titulo:'El mundo de los animales', autor:'Pedro Pérez', precio: 40 },
      { id:'3', titulo:'El mundo de los volcanes', autor:'Andrés Sanz', precio: 45 },
      { id:'4', titulo:'El mundo de la aviones', autor:'Álvaro Ruíz', precio: 50 },
      { id:'5', titulo:'El mundo de los planetas', autor:'Susana Pérez', precio: 55 },
      { id:'6', titulo:'El mundo de los anfibios', autor:'Ana Sanz', precio: 60 },
    ];

    this.aventuras = [
      {id:1, nombre:'Nilo', descripcion:'Descenso del río.', precio: 1500 },
      {id:2, nombre:'Cataratas', descripcion:'Vista de las cataratas.', precio: 2500 },
      {id:3, nombre:'Escalada', descripcion:'Escalada montaña nevada.', precio: 1200 },
    ];
  }

  mostrarDetalleAventura(aventura:Aventura) {
    alert("AVENTURA:\nNombre:"+aventura.nombre+"\nDescripción:"+aventura.descripcion+"\nPrecio:"+aventura.precio);
  }

}
