import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  aleatorio1:number = Math.floor(Math.random()*100);
  aleatorio2:number = Math.floor(Math.random()*100);
  total:number = 0;

  color:String = '#FFD55E'; // Yellow Minion

  encendido:boolean = true;
  
  /**
  NG0100: Expression has changed after it was checked
  https://angular.io/errors/NG0100
  generarRandom():String {
    return Math.floor(Math.random()*255).toString(16); // devuelve número hexadecimal
  }

  colorHex():String {
    return "#"+this.generarRandom()+this.generarRandom()+this.generarRandom();
  }
  */

  numeroHexadecimal1:string = Math.floor(Math.random()*255).toString(16);
  numeroHexadecimal2:string = Math.floor(Math.random()*255).toString(16);
  numeroHexadecimal3:string = Math.floor(Math.random()*255).toString(16);
  micolor = "#"+this.numeroHexadecimal1+this.numeroHexadecimal2+this.numeroHexadecimal3;
  
  cambiar():void{
    this.encendido = !this.encendido;
    this.total = this.aleatorio1 + this.aleatorio2;
  }

}
