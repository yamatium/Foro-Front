import { NgModule     }  from '@angular/core';
import { CommonModule } from '@angular/common'

import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    declarations: [           //que componentes contienen  video 50
                                // video 52 para hacer el repositorio de github
                               
        ContadorComponent,
        HeroeComponent,
        ListadoComponent
        
    ],
    exports: [
        ListadoComponent,
        ContadorComponent
    ],
    imports: [
        CommonModule,
        
    ]

})
export class PruebasModule { }