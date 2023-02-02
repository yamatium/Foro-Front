import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  jugadores: string[] = ['goku', 'mariano el marciano', 'all might', 'thanos'];
  borrado: string = '';

  borrarJugador(){
    
    this.borrado = this.jugadores.shift() || '';
    console.log("borrando " + this.borrado )

  }
  

}
