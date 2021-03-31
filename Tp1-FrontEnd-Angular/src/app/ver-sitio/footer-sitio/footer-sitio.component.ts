import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresaI } from 'src/app/modelo/empresa.interface';
import { EmpresaService } from 'src/app/servicio/empresa.service';

@Component({
  selector: 'app-footer-sitio',
  templateUrl: './footer-sitio.component.html',
  styleUrls: ['./footer-sitio.component.css']
})
export class FooterSitioComponent implements OnInit {

  empresa: EmpresaI;
  id: number;

  constructor(private empresaServicio: EmpresaService,
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

}
