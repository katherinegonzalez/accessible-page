import { Routes, RouterModule } from "@angular/router";
import { AuthContainerComponent } from './containers/auth-container/auth-container.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: '',
        component: AuthContainerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}