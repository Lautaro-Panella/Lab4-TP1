import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empresa } from '../modelo/empresa.model';
import { Injectable } from '@angular/core';
@Injectable()
export class EmpresaServicio {
  private url: string = 'http://localhost:8080/empresa/';

  constructor(private http: HttpClient) {}
  //Obtengo todas las empresas
  getAllEmpresas() {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Empresa[]>(this.url, { headers: header });
  }
  getEmpresaById(id: number) {
    return this.http.get<Empresa>(this.url + id);
  }
  saveEmpresa(empresa: Empresa) {
    return this.http.post<Empresa>(this.url, empresa);
  }
  updateEmpresa(empresa: Empresa) {
    return this.http.put<Empresa>(this.url, empresa);
  }
  deleteEmpresa(id: number) {
    return this.http.delete(this.url + id, { responseType: 'text' });
  }
}
