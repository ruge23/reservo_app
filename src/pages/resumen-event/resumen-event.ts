import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListIngresosPage } from '../list-ingresos/list-ingresos';

@IonicPage()
@Component({
  selector: 'page-resumen-event',
  templateUrl: 'resumen-event.html',
})
export class ResumenEventPage {

  info: any=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.info = this.navParams.get('info');
  }

  ionViewDidLoad() {
    console.log(this.info);
  }

  goToListInvitados(e){
    this.navCtrl.push('ListIngresosPage', {info: e});
  }

}

