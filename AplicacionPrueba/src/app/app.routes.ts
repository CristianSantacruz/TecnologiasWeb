import {Route, Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {TiendaComponent} from "./tienda/tienda.component";
import {ProductosComponent} from "./productos/productos.component";

export const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'tienda/:idTienda/producto', component: ProductosComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
