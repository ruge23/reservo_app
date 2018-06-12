import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResumenAdminPage } from './resumen-admin';

@NgModule({
  declarations: [
    ResumenAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(ResumenAdminPage),
  ],
})
export class ResumenAdminPageModule {}
