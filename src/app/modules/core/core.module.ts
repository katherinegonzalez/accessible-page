import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './containers/main-container/main-container.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [MainContainerComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule

  ]
})
export class CoreModule { }
