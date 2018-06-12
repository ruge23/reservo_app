import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservasAdminPage } from './reservas-admin';

@NgModule({
  declarations: [
    ReservasAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservasAdminPage),
  ],
})
export class ReservasAdminPageModule {}
