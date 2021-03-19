import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaServicio } from './servicio/empresa.service';
import { VerEmpresasComponent } from './ver-empresas/ver-empresas.component';

@NgModule({
  declarations: [
    AppComponent,
    VerEmpresasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmpresaServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
