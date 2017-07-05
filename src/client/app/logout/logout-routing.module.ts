import { LogoutComponent } from './logout.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'logout', component: LogoutComponent }
    ])
  ],
  exports: [RouterModule]
})
export class LogoutRoutingModule { }
