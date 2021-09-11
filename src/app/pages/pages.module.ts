import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulo de rutas
// import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router'; // presenta el router-outlet

// Modulo SHARED
import { SharedModule } from '../shared/shared.module';

// Componentes de PAGES
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';


@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [ // Se exporta para que otros modulos puedan utilizarlas
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent
  ]
})
export class PagesModule { }
