import { Component } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent {

  libros: Array<Libro>;

  constructor() {
    this.libros = [ 
      { id:'1', titulo:'El mundo de la música', autor:'Juan Ruíz' },
      { id:'2', titulo:'El mundo de los animales', autor:'Pedro Pérez' },
      { id:'3', titulo:'El mundo de los volcanes', autor:'Andrés Sanz'},
      { id:'4', titulo:'El mundo de la aviones', autor:'Álvaro Ruíz' },
      { id:'5', titulo:'El mundo de los planetas', autor:'Susana Pérez' },
      { id:'6', titulo:'El mundo de los anfibios', autor:'Ana Sanz'},
    ];
  }
}

class Libro {
  id?:string;
  titulo?:string;
  autor?:string;
}
