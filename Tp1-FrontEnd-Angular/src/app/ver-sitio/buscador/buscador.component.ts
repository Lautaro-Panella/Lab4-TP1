import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresaI } from 'src/app/modelo/empresa.interface';
import { NoticiaI } from 'src/app/modelo/noticia.interface';
import { NoticiaService } from 'src/app/servicio/noticia.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  consultas: NoticiaI[];
  form: any;
  constructor(private noticiaServicio: NoticiaService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.activatedRoute.snapshot.params['buscar'];
    console.log(this.form);
    this.noticiaServicio.getNoticiasPorTituloOrResumen(this.form).subscribe(data => {
      this.consultas = data;
    })

  }

}
