import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes de AUTH
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [ // para que se use en tros modulos
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
