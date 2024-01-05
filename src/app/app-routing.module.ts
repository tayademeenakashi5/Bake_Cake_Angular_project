import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrderDashboardComponent } from './order-dashboard/order-dashboard.component';
import { authGuard } from './services/auth.guard';
import { canDeactivateGuard } from './can-deactivate.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  {
    path: 'item/:id',
    component: OrderPageComponent,
    canDeactivate: [canDeactivateGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'orderDashboard',
    component: OrderDashboardComponent,
    canActivate: [authGuard],
  },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for Page Not Found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
