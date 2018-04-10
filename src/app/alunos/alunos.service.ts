import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  constructor() {}

  private alunos: any[] = [
    { id: 1, nome: 'aluno01', email: 'aluno01@angular.com'},
    { id: 2, nome: 'aluno02', email: 'aluno02@angular.com'},
    { id: 3, nome: 'aluno03', email: 'aluno03@angular.com'}
  ];
  
  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    for(let i=0; i<this.alunos.length; i++){
      let aluno = this.alunos[i];
      if(aluno.id==id){
        return aluno;
      }
    }
    return null;
  }

  

}
