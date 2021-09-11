import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Rutas hijas AUTH
import { AuthRoutingModule } from './auth/auth-routing.module';

// Componente de APP
import { Nofound404Component } from './nofound404/nofound404.component';

// Modulo Pages Routing de PAGES
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  // Si es un path vacio va a redirecionar a -> dashboard y esto a un -> path: '', component: DashboardComponent
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // Cualquiera otra ruta que no este definida en este routing va a mostrar NoPagesFound
  { path: '**', component: Nofound404Component }
  /**Fin rutas hijas principales */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
