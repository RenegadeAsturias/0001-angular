import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { ListasComponent } from './listas/listas.component';
import { ListasEventosEnlacesComponent } from './listas-eventos-enlaces/listas-eventos-enlaces.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CalendarioComponent,
    NgstyleComponent,
    NgclassComponent,
    ListasComponent,
    ListasEventosEnlacesComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
