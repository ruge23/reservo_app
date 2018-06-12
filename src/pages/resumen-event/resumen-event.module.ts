import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResumenEventPage } from './resumen-event';

@NgModule({
  declarations: [
    ResumenEventPage,
  ],
  imports: [
    IonicPageModule.forChild(ResumenEventPage),
  ],
})
export class ResumenEventPageModule {}
