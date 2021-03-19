import { Component, OnInit } from '@angular/core';
import { Empresa } from '../modelo/empresa.model';
import { EmpresaServicio } from '../servicio/empresa.service';

@Component({
  selector: 'app-ver-empresas',
  templateUrl: './ver-empresas.component.html',
  styleUrls: ['./ver-empresas.component.css'],
})
export class VerEmpresasComponent implements OnInit {
  empresas: Empresa[];
  constructor(private empresaServicio: EmpresaServicio) {}

  ngOnInit(): void {
    this.verEmpresas();
  }

  verEmpresas(): void {
    this.empresaServicio.getAllEmpresas().subscribe((data) => {
      this.empresas = data;
    });
  }
}
