import { Component, OnInit } from '@angular/core';
import { EmpresaI } from '../modelo/empresa.interface';
import { EmpresaService } from '../servicio/empresa.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-empresas',
  templateUrl: './ver-empresas.component.html',
  styleUrls: ['./ver-empresas.component.css'],
})
export class VerEmpresasComponent implements OnInit {

  empresas: EmpresaI[];
  
  constructor(private empresaServicio: EmpresaService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.verEmpresas();
  }

  verEmpresas(): void {
    this.empresaServicio.getAllEmpresas().subscribe((data) => {
      this.empresas = data;
    });
  }

  verNoticias(): void {
    this.router.navigate(['ver-noticias']);
  }

  editarEmpresa(id: number): void {
    this.router.navigate(['editar-empresa', id]);
  }

}
