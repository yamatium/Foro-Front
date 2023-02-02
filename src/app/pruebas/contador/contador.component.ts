import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h1> {{ title }} </h1>   
    <h1> {{ 2 + 2 }} </h1>
    <h3>La base es: <strong> {{ base }} </strong> </h3>

    <button (click)=" acumular(+ base) "> {{ base }} </button>

    <span> {{ number }} </span>

    <button (click)=" acumular(- base) "> {{ base }} </button>
    
    `
})

// html en template cargado desde ts

export class ContadorComponent {
    
    title = 'front';
    number = 10;
  
    base: number = 5;
  
    acumular ( valor: number ) {
      this.number += valor;
  
    }

}