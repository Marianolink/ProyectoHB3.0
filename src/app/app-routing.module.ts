import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { navegacionComponent } from './views/navegacion/navegacion.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { BienvenidoComponent } from './views/bienvenido/bienvenido.component';
// import { FooterComponent } from './components/footer/footer.component';
import { PagarComponent } from './views/pagar/pagar.component'; 
import { RecargarComponent } from './views/recargar/recargar.component';
import { TransferirComponent } from './views/transferir/transferir.component';
import { InvertirComponent } from './views/invertir/invertir.component';
// import { CajasComponent } from './views/cuentas/detalle-caja-ahorro-pesos/detalle-cajas-ahorro-pesos.component';
import { ConsultaCuentasComponent } from './views/cuentas/consulta-cuentas/consulta-cuentas.component';
// import { CuentasAhorroPesosWidgetComponent } from './views/cuentas/cuentas-ahorro-pesos-widget/cuentas-ahorro-pesos-widget.component';
//  import { CuentasAhorroWidgetComponent } from './views/cuentas-ahorro-widget/cuentas-ahorro-widget.component';


const routes: Routes = [
  {
    path: '',
    component: navegacionComponent,
    
    
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'pagar',
        component: PagarComponent,
      },
      {
        path: 'home',
        component: DashboardComponent,
      },
      {
        path: 'bienvenido',
        component: BienvenidoComponent,
      },
      {
        path: 'recargar',
        component: RecargarComponent,
      },
      {
        path: 'invertir',
        component: InvertirComponent,
      },
      {
        path: 'transferir',
        component: TransferirComponent,
      },
      {
        path: 'transferir',
        component: TransferirComponent,
      },
      {
        path: 'cuentas/cajas',
        component: ConsultaCuentasComponent,
      }
    ]
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: '**',
  component: DashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
