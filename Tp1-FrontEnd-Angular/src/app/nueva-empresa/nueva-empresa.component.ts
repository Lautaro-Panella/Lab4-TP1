import { Component, OnInit } from '@angular/core';
import { EmpresaI } from '../modelo/empresa.interface';
import { EmpresaService } from '..//servicio/empresa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertaService } from '..//servicio/alerta.service';

@Component({
  selector: 'app-nueva-empresa',
  templateUrl: './nueva-empresa.component.html',
  styleUrls: ['./nueva-empresa.component.css']
})
export class NuevaEmpresaComponent implements OnInit {

  guardarFormEmpresa = new FormGroup({
    denominacion: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    horarioAtencion: new FormControl('', Validators.required),
    latitud: new FormControl('', Validators.required),
    longitud: new FormControl('', Validators.required),
    domicilio: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    quienesSomos: new FormControl('', Validators.required),
  });
  
  constructor(private empresaServicio: EmpresaService, private alerta: AlertaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  postForm(form: EmpresaI) {
    this.empresaServicio.saveEmpresa(form).subscribe(data =>{
      if(data == null) {
        this.alerta.mostrarError("No se pudo guardar la empresa!", "Error");
      } else {
        this.alerta.mostrarSuccess("Empresa guardada!", "Hecho");
      }
      this.router.navigate(['ver-empresas']);
    });
  }

}
