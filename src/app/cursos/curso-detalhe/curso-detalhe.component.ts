import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute, 
    private cursoService: CursosService,
    private router: Router 
  ){}

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (param: any) => {
        this.id = param['id'];
        this.curso = this.cursoService.getCurso(this.id);
      
        if (this.curso == null){
          this.router.navigate(['/naoEncontrado']);
        }
      }

     
    );
    
  }

  onDestroy(){
    this.inscricao.unsubscribe();
  }

}
