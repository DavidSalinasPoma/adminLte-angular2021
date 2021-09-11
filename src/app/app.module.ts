import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Modulo PAGES
import { PagesModule } from './pages/pages.module';

// Sistema de Rutas Principal
import { AppRoutingModule } from './app-routing.module';

// Componentes de APP
import { AppComponent } from './app.component';
import { Nofound404Component } from './nofound404/nofound404.component';

@NgModule({
  declarations: [
    AppComponent,
    Nofound404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
