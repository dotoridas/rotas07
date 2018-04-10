import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.css']
})
export class AlunosDetalheComponent implements OnInit {

  subscribe: Subscription;
  id: number;
  aluno: any;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
   ) {
   }
   
  ngOnInit() {
    this.subscribe = this.route.params.subscribe(
      (params: any)=>{
        let id = params['id'];
        this.aluno = this.alunosService.getAluno(id);
      } 
    )
  }

  editarContacto(){
    this.router.navigate([ '/alunos',this.aluno.id, 'editar'])
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe
  }
  
}
