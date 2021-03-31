import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaI } from 'src/app/modelo/empresa.interface';
import { NoticiaI } from 'src/app/modelo/noticia.interface';
import { EmpresaService } from 'src/app/servicio/empresa.service';
import { NoticiaService } from 'src/app/servicio/noticia.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  noticia: NoticiaI;
  empresa: EmpresaI;
  id: number;
  
  constructor(private empresaServicio: EmpresaService,
              private noticiaServicio: NoticiaService, 
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarNoticia();
    this.cargarEmpresa();
  }

  cargarNoticia(): void {
    this.id = this.activatedRoute.snapshot.params['id2'];
    this.noticiaServicio.getNoticiaById(this.id).subscribe(
      noticia => {
        this.noticia = noticia;
      }
    )
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
