import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthContainerComponent } from './containers/auth-container/auth-container.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AuthContainerComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule
  ]
})
export class AuthModule { }
