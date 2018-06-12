import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrDataPage } from './qr-data';

@NgModule({
  declarations: [
    QrDataPage,
  ],
  imports: [
    IonicPageModule.forChild(QrDataPage),
  ],
})
export class QrDataPageModule {}
