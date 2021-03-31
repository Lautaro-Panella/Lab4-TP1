import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaI } from 'src/app/modelo/empresa.interface';
import { NoticiaI } from 'src/app/modelo/noticia.interface';
import { EmpresaService } from 'src/app/servicio/empresa.service';
import { NoticiaService } from 'src/app/servicio/noticia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noticias: NoticiaI[];
  empresa: EmpresaI;
  id: number;
  
  constructor(private empresaServicio: EmpresaService,
              private noticiaServicio: NoticiaService, 
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarEmpresa();
    this.cargarNoticiaPorIdEmpresa();
  }

  cargarNoticiaPorIdEmpresa(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.noticiaServicio.getNoticiasByIdEmpresa(this.id).subscribe(noticia => {
      this.noticias = noticia;
    })
  }
  
  cargarEmpresa(): void{
    this.id = this.activatedRoute.snapshot.params['id'];
    this.empresaServicio.getEmpresaById(this.id).subscribe(
      empresa => {
        this.empresa = empresa;
      }
    )
  }
}
