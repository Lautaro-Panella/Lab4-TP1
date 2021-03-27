import { Component, OnInit } from '@angular/core';
import { EmpresaI } from '../modelo/empresa.interface';
import { EmpresaService } from '..//servicio/empresa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertaService } from '..//servicio/alerta.service';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent implements OnInit {

  empresa: EmpresaI;

  editarFormEmpresa = new FormGroup({
    id: new FormControl('', Validators.required),
    denominacion: new FormControl('', Validators.required),
    telefono: new FormControl(''),
    horarioAtencion: new FormControl('', Validators.required),
    latitud: new FormControl('', Validators.required),
    longitud: new FormControl('', Validators.required),
    domicilio: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    quienesSomos: new FormControl('', Validators.required),
  });

  constructor(private empresaServicio: EmpresaService, private alerta: AlertaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.empresaServicio.getEmpresaById(id).subscribe(data =>{
      this.empresa = data;
      this.editarFormEmpresa.setValue({
        'id': this.empresa.id,
        'denominacion': this.empresa.denominacion,
        'telefono': this.empresa.telefono,
        'horarioAtencion': this.empresa.horarioAtencion,
        'latitud': this.empresa.latitud,
        'longitud': this.empresa.longitud,
        'domicilio': this.empresa.domicilio,
        'email': this.empresa.email,
        'quienesSomos': this.empresa.quienesSomos,
      });
    });
  }

  putForm(form: EmpresaI) {
    this.empresaServicio.updateEmpresa(form).subscribe(data =>{
      if(data == null) {
        this.alerta.mostrarError("No se pudo actualizar la empresa!", "Error")
      } else {
        this.alerta.mostrarSuccess("Empresa actualizada!", "Hecho")
      }
      this.router.navigate(['ver-empresas']);
    });
  }

  deleteEmpresa() {
    this.empresaServicio.deleteEmpresa(this.empresa.id).subscribe(data =>{
      if(data == null) {
        this.alerta.mostrarError("No se pudo eliminar la empresa!", "Error")
      } else {
        this.alerta.mostrarSuccess("Empresa eliminada!", "Hecho")
      }
      this.router.navigate(['ver-empresas']);
    });
  }

}
