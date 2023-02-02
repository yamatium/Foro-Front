import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './foro/paginas/home/home.component';
import { JuegosReviewComponent } from './foro/paginas/juegos-review/juegos-review.component';
import { JuegosListadoComponent } from './foro/paginas/juegos-listado/juegos-listado.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [

    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
        
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'reviews',
        component: JuegosReviewComponent
    },
    {
        path: 'juegos',
        component: JuegosListadoComponent
    },
    {
        path: '404',
        component: ErrorPageComponent
    },
    {
        path: '**',
        redirectTo: '404'
    }
]



@NgModule({
    imports: [
        RouterModule.forRoot( routes )

    ],
    exports: [
        RouterModule
    ]
})




export class AppRoutingModule {}