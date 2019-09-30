import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagarComponent } from './components/pagar/pagar.component';
import { RecargarComponent } from './components/recargar/recargar.component';
import { TransferirComponent } from './components/transferir/transferir.component';
import { InvertirComponent } from './components/invertir/invertir.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    BienvenidoComponent,
    FooterComponent,
    PagarComponent,
    RecargarComponent,
    TransferirComponent,
    InvertirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
