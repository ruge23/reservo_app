import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListIngresosPage } from './list-ingresos';

@NgModule({
  declarations: [
    ListIngresosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListIngresosPage),
  ],
})
export class ListIngresosPageModule {}
