import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Route, ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit {

  subscribe: Subscription;
  id: number;
  aluno: {};

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) {  }

    ngOnInit() {
      this.subscribe = this.route.params.subscribe(
        (params: any)=>{
          let id = params['id'];
          this.aluno = this.alunosService.getAluno(id);
        } 
      )
    }

    ngOnDestroy(){
      this.subscribe.unsubscribe;
    }

}



