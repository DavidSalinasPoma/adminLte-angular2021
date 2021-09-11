import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes del SHARED
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [ // Exportar para que otros modulos puedan utilizarlos
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    FooterComponent
  ]

})
export class SharedModule { }
