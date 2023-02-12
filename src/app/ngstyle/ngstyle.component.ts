import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent {

  color:string = "green";
  colorNaranja:string = "orange";
  colorAzul:boolean = false;

  cambiarColor:boolean = true;

  onCambiarColor() {
    this.cambiarColor = !this.cambiarColor;
  }
}
