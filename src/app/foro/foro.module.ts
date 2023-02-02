import { NgModule     }  from '@angular/core';
import { CommonModule } from '@angular/common'
import { HomeComponent } from './paginas/home/home.component';

import { JuegosListadoComponent } from './paginas/juegos-listado/juegos-listado.component';
import { JuegosReviewComponent } from './paginas/juegos-review/juegos-review.component';


@NgModule({
    declarations: [
        HomeComponent,
        JuegosListadoComponent,
        JuegosReviewComponent
    ],
    exports: [
        HomeComponent

    ],
    imports: [
        CommonModule
    ]

})

export class ForoModule {}