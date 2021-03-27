import { Component, OnInit } from '@angular/core';
import { NoticiaI } from '..//modelo/noticia.interface';
import { NoticiaService } from '..//servicio/noticia.service'; 
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-noticias',
  templateUrl: './ver-noticias.component.html',
  styleUrls: ['./ver-noticias.component.css']
})
export class VerNoticiasComponent implements OnInit {

  noticias: NoticiaI[];

  constructor(private noticiaServicio: NoticiaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.verNoticias();
  }

  verNoticias(): void {
    this.noticiaServicio.getAllNoticias().subscribe(data => {
      this.noticias = data;
    });
  }

  editarNoticia(id: number): void {
    this.router.navigate(['editar-noticia', id]);
  }
  
}
