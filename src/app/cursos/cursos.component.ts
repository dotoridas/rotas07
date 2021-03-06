import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    this.inscricao =  this.route.queryParams.subscribe(
      (queryParam: any) =>{
        this.pagina = queryParam["pagina"]
      }
    );

  }

  onProximaPagina(){
    this.pagina++;
    this.router.navigate(['cursos'],
    {queryParams:{
      'pagina': ++this.pagina
    }});
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
