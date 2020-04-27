import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContainerComponent } from './modules/core/containers/main-container/main-container.component';


const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
