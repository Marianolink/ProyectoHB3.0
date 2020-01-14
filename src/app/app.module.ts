import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { navegacionComponent } from './views/navegacion/navegacion.component';
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
import { CuentasAhorroWidgetComponent } from './views/cuentas/cuentas-ahorro-widget/cuentas-ahorro-widget.component';
import { TarjetasCreditosWidgetComponent } from './views/tarjetas/tarjetas-creditos-widget/tarjetas-creditos-widget.component';
import { ProximosVencimientosWidgetComponent } from './views/proximos-vencimientos-widget/proximos-vencimientos-widget.component';
import { AdelantoHaberesWidgetComponent } from './views/adelanto-haberes-widget/adelanto-haberes-widget.component';
import { PrestamosPersonalWidgetComponent } from './views/prestamos-personal-widget/prestamos-personal-widget.component';
import { CotizacionDolarWidgetComponent } from './views/cotizacion-dolar-widget/cotizacion-dolar-widget.component';
import { PlazoFijoWidgetComponent } from './views/plazo-fijo-widget/plazo-fijo-widget.component';
import { FondoInversionesWidgetComponent } from './views/fondo-inversiones-widget/fondo-inversiones-widget.component';
import { ProductosPreaprobadosWidgetComponent } from './views/productos-preaprobados-widget/productos-preaprobados-widget.component';
import { IconsModule } from './icons/icons.module';
import { RecargarWidgetComponent } from './views/recargar/recargar-widget/recargar-widget.component';
import { RecargarUltimasWidgetComponent } from './views/recargar/recargar-ultimas-widget/recargar-ultimas-widget.component';
import { ModalComponent } from './modal/modal.component';
import { RecargarModalComponent } from './views/recargar/recargar-widget/recargar-modal/recargar-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    navegacionComponent,
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
    CuentasAhorroPesosWidgetComponent,
    CuentasAhorroWidgetComponent,
    TarjetasCreditosWidgetComponent,
    ProximosVencimientosWidgetComponent,
    AdelantoHaberesWidgetComponent,
    PrestamosPersonalWidgetComponent,
    CotizacionDolarWidgetComponent,
    PlazoFijoWidgetComponent,
    FondoInversionesWidgetComponent,
    ProductosPreaprobadosWidgetComponent,
    RecargarWidgetComponent,
    RecargarUltimasWidgetComponent,
    ModalComponent,
    RecargarModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
