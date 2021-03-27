import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaService } from './servicio/empresa.service';
import { NoticiaService } from './servicio/noticia.service';
import { VerEmpresasComponent } from './ver-empresas/ver-empresas.component';
import { NuevaEmpresaComponent } from './nueva-empresa/nueva-empresa.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditarEmpresaComponent } from './editar-empresa/editar-empresa.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VerNoticiasComponent } from './ver-noticias/ver-noticias.component';
import { NuevaNoticiaComponent } from './nueva-noticia/nueva-noticia.component';
import { EditarNoticiaComponent } from './editar-noticia/editar-noticia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EditorModule } from '@tinymce/tinymce-angular';
import  localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es'); 

@NgModule({
  declarations: [
    AppComponent,
    VerEmpresasComponent,
    NuevaEmpresaComponent,
    EditarEmpresaComponent,
    HeaderComponent,
    FooterComponent,
    VerNoticiasComponent,
    NuevaNoticiaComponent,
    EditarNoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,
    BrowserAnimationsModule, // Required animations module
    ToastrModule.forRoot(), // ToastrModule added
    EditorModule
  ],
  providers: [EmpresaService, NoticiaService, {provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
