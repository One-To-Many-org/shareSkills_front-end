import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './login-page/services/guards/auth.guard';
import { LoginPageComponent } from './login-page/components/login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';


const routes: Routes = [
  {
    path: 'login', component: LoginPageComponent,
  },
  {
    path: 'registration',
    component: RegistrationPageComponent
  },
  {
    path: 'collaborations',
    loadChildren: () => import('./collaborations/collaborations.module').then(m => m.CollaborationsModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
