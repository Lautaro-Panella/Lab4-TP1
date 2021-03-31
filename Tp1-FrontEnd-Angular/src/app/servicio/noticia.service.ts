import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NoticiaI } from '..//modelo/noticia.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private url: string = 'http://localhost:8080/noticia/';
  private header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  getAllNoticias() {
    return this.http.get<NoticiaI[]>(this.url, { headers: this.header });
  }

  getNoticiaById(id: any) {
    return this.http.get<NoticiaI>(this.url + id, { headers: this.header });
  }

  getNoticiasByIdEmpresa(id: any) {
    return this.http.get<NoticiaI[]>(this.url + "consulta?empresa=" + id, { headers: this.header });
  }

  saveNoticia(noticia: NoticiaI) {
    return this.http.post<NoticiaI>(this.url, noticia, { headers: this.header });
  }

  updateNoticia(noticia: NoticiaI) {
    return this.http.put<NoticiaI>(this.url, noticia, { headers: this.header });
  }

  deleteNoticia(id: any) {
    return this.http.delete(this.url + id, { responseType: 'text' });
  }

  getNoticiasPorTituloOrResumen(consulta: any){
    return this.http.get<NoticiaI[]>(this.url + "consulta2?consulta=" + consulta, { headers: this.header });
  } 

}
