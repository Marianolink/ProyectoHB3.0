import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { BienvenidoComponent } from './views/bienvenido/bienvenido.component'; 
import { FooterComponent } from './views/footer/footer.component';
import { PagarComponent } from './views/pagar/pagar.component';
import { RecargarComponent } from './views/recargar/recargar.component';
import { TransferirComponent } from './views/transferir/transferir.component';
import { InvertirComponent } from './views/invertir/invertir.component';
import { CajasComponent } from './views/cuentas/detalle-caja-ahorro-pesos/detalle-cajas-ahorro-pesos.component';
import { ConsultaCuentasComponent } from './views/cuentas/consulta-cuentas/consulta-cuentas.component';
import { CuentasAhorroPesosWidgetComponent } from './views/cuentas/cuentas-ahorro-pesos-widget/cuentas-ahorro-pesos-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    BienvenidoComponent,
    FooterComponent,
    PagarComponent,
    RecargarComponent,
    TransferirComponent,
    InvertirComponent,
    CajasComponent,
    ConsultaCuentasComponent,
    CuentasAhorroPesosWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
