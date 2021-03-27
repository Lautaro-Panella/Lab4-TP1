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
  selector: 'app-nueva-noticia',
  templateUrl: './nueva-noticia.component.html',
  styleUrls: ['./nueva-noticia.component.css']
})
export class NuevaNoticiaComponent implements OnInit {

  empresas: EmpresaI[];

  imagen: string;

  guardarFormNoticia = new FormGroup({
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
  }

  // get tituloNoticia() { return this.guardarFormNoticia.get("tituloNoticia") };

  getEmpresas() {
    this.empresaServicio.getAllEmpresas().subscribe(data =>{
      this.empresas = data;
    });
  }

  postForm(form: FormNoticiaI) {
    this.empresaServicio.getEmpresaById(form.idEmpresa).subscribe(data =>{
      let noticia: NoticiaI = {"id": 0, "tituloNoticia": form.tituloNoticia, "resumenNoticia": form.resumenNoticia, 
      "imagenNoticia": this.imagen, "contenidoHtml": form.contenidoHtml, "publicada": form.publicada,
      "fecha": form.fecha, "empresa": data};
      this.noticiaServicio.saveNoticia(noticia).subscribe(data =>{
        if(data == null) {
          this.alerta.mostrarError("No se pudo guardar la noticia!", "Error");
        } else {
          this.alerta.mostrarSuccess("Noticia guardada!", "Hecho");
        }
        this.router.navigate(['ver-noticias']);
      });
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
