import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerEmpresasComponent } from './ver-empresas/ver-empresas.component';
import { NuevaEmpresaComponent } from './nueva-empresa/nueva-empresa.component';
import { EditarEmpresaComponent } from './editar-empresa/editar-empresa.component';
import { VerNoticiasComponent } from './ver-noticias/ver-noticias.component';
import { NuevaNoticiaComponent } from './nueva-noticia/nueva-noticia.component';
import { EditarNoticiaComponent } from './editar-noticia/editar-noticia.component';

const routes: Routes = [
  { path: '', redirectTo: 'ver-empresas', pathMatch: 'full' },
  { path: 'ver-empresas', component: VerEmpresasComponent },
  { path: 'nueva-empresa', component: NuevaEmpresaComponent },
  { path: 'editar-empresa/:id', component: EditarEmpresaComponent },
  { path: 'ver-noticias', component: VerNoticiasComponent },
  { path: 'nueva-noticia', component: NuevaNoticiaComponent },
  { path: 'editar-noticia/:id', component: EditarNoticiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
