import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaI } from 'src/app/modelo/empresa.interface';
import { NoticiaI } from 'src/app/modelo/noticia.interface';
import { EmpresaService } from 'src/app/servicio/empresa.service';

@Component({
  selector: 'app-header-sitio',
  templateUrl: './header-sitio.component.html',
  styleUrls: ['./header-sitio.component.css']
})
export class HeaderSitioComponent implements OnInit {

  empresa: EmpresaI;
  id: number;
  noticia: NoticiaI;

  searchForm = new FormGroup({
    buscar: new FormControl('', Validators.required),
  });

  constructor(private empresaServicio: EmpresaService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarEmpresa();
  }

  cargarEmpresa(): void{
    this.id = this.activatedRoute.snapshot.params['id'];
    this.empresaServicio.getEmpresaById(this.id).subscribe(
      empresa => {
        this.empresa = empresa;
      }
    )
  }

  getNews(form: string){
    this.router.navigate(['buscador', form]);
  }
}
