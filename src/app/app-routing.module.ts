import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
// import { FooterComponent } from './components/footer/footer.component';
import { PagarComponent } from './components/pagar/pagar.component';
import { RecargarComponent } from './components/recargar/recargar.component';
import { TransferirComponent } from './components/transferir/transferir.component';
import { InvertirComponent } from './components/invertir/invertir.component';
import { CajasComponent } from './components/cuentas/caja-ahorro-pesos/detalle-cajas-ahorro-pesos.component';


const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'pagar',
        component: PagarComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
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
        component: CajasComponent,
      }

    ]
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: '**',
  component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
