import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmpresaI } from '../modelo/empresa.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private url: string = 'http://localhost:8080/empresa/';
  private header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  getAllEmpresas() {
    return this.http.get<EmpresaI[]>(this.url, { headers: this.header });
  }

  getEmpresaById(id: any) {
    return this.http.get<EmpresaI>(this.url + id, { headers: this.header });
  }

  saveEmpresa(empresa: EmpresaI) {
    return this.http.post<EmpresaI>(this.url, empresa, { headers: this.header });
  }

  updateEmpresa(empresa: EmpresaI) {
    return this.http.put<EmpresaI>(this.url, empresa, { headers: this.header });
  }

  deleteEmpresa(id: any) {
    return this.http.delete(this.url + id, { responseType: 'text' });
  }

}
