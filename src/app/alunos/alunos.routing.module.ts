import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"; 

import { AlunosModule } from "./alunos.module";
import { AlunosComponent } from "./alunos.component";
import { AlunosDetalheComponent } from "./alunos-detalhe/alunos-detalhe.component";
import { AlunosFormComponent } from "./alunos-form/alunos-form.component";



const constAlunos: Routes = [
    {path: 'alunos', component: AlunosComponent, children:[
        {path: 'novo', component:AlunosFormComponent},
        {path: ':id', component:AlunosDetalheComponent},
        {path: ':id/editar', component:AlunosFormComponent}
    ]}
]

@NgModule({
    imports:[RouterModule.forChild(constAlunos)],
    exports:[RouterModule],
})
export class AlunosRoutingModule{

}