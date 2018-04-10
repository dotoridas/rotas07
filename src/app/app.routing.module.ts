import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';


import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';

import { CursosService } from './cursos/cursos.service';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component'
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    //{ path: 'cursos', component: CursosComponent }, 
    //{ path: 'curso/:id', component: CursoDetalheComponent },
    //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
    { path: 'alunos', component: AlunosComponent },
    { path: 'login', component: LoginComponent }
 ];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}