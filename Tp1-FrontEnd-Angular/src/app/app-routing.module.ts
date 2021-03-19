import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerEmpresasComponent } from './ver-empresas/ver-empresas.component';

const routes: Routes = [
  { path: '', redirectTo: 'ver-empresas', pathMatch: 'full' },
  { path: 'ver-empresas', component: VerEmpresasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
