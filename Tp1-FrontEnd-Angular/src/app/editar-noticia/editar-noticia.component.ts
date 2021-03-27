import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '..//servicio/noticia.service';
import { EmpresaService } from '..//servicio/empresa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertaService } from '..//servicio/alerta.service';
import { EmpresaI } from '../modelo/empresa.interface';
import { FormNoticiaI } from '../modelo/formNoticia.interface';
import { NoticiaI } from '../modelo/noticia.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-editar-noticia',
  templateUrl: './editar-noticia.component.html',
  styleUrls: ['./editar-noticia.component.css']
})
export class EditarNoticiaComponent implements OnInit {
  
  imagen: string;
  
  noticia: NoticiaI;

  empresas: EmpresaI[];

  editarFormNoticia = new FormGroup({
    id: new FormControl(''),
    tituloNoticia: new FormControl('', Validators.required),
    resumenNoticia: new FormControl('', Validators.required),
    imagenNoticia: new FormControl('', Validators.required),
    contenidoHtml: new FormControl('', Validators.required),
    publicada: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    idEmpresa: new FormControl('', Validators.required)
  });

  constructor(private noticiaServicio: NoticiaService, private empresaServicio: EmpresaService, private alerta: AlertaService, private router: Router, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getEmpresas();
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.noticiaServicio.getNoticiaById(id).subscribe(data =>{
      this.noticia = data;
      this.editarFormNoticia.setValue({
        'id': this.noticia.id,
        'tituloNoticia': this.noticia.tituloNoticia,
        'resumenNoticia': this.noticia.resumenNoticia,
        'imagenNoticia': '',
        'contenidoHtml': this.noticia.contenidoHtml,
        'publicada': this.noticia.publicada,
        'fecha': this.noticia.fecha,
        'idEmpresa': this.noticia.empresa.id
      });
      // this.editarFormNoticia.get('publicada')?.markAsTouched();
    });
  }

  getEmpresas() {
    this.empresaServicio.getAllEmpresas().subscribe(data =>{
      this.empresas = data;
    });
  }

  putForm(form: FormNoticiaI) {
    this.empresaServicio.getEmpresaById(form.idEmpresa).subscribe(data =>{
      let noticia = {"id": this.noticia.id, "tituloNoticia": form.tituloNoticia, "resumenNoticia": form.resumenNoticia, 
      "imagenNoticia": this.imagen, "contenidoHtml": form.contenidoHtml, "publicada": form.publicada,
      "fecha": form.fecha, "empresa": data};
      this.noticiaServicio.updateNoticia(noticia).subscribe(data =>{
        if(data == null) {
          this.alerta.mostrarError("No se pudo actualizar la noticia!", "Error")
        } else {
          this.alerta.mostrarSuccess("Noticia actualizada!", "Hecho")
        }
        this.router.navigate(['ver-noticias']);
      });
    });
  }

  deleteNoticia() {
    this.noticiaServicio.deleteNoticia(this.noticia.id).subscribe(data =>{
      if(data == null) {
        this.alerta.mostrarError("No se pudo eliminar la noticia!", "Error")
      } else {
        this.alerta.mostrarSuccess("Noticia eliminada!", "Hecho")
      }
      this.router.navigate(['ver-noticias']);
    });
  }

  capturarImg(event: any): any {
    const file = event.target.files[0];
    console.log(file);
    this.blobFile(file).then((res: any) => {
    this.imagen = res.base;
    });
  }

  blobFile = async ($event: any) => new Promise((resolve) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({ blob: $event, image, base: reader.result });
      };
      reader.onerror = error => {
        resolve({ blob: $event, image, base: null });
      };
      return resolve;
    } catch (e) { return null; }
  });

}
