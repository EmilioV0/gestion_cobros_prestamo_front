import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'v1',
  },
  {
    path: 'v1',
    component: AuthComponent,
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
