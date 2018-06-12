import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmacionPage } from '../confirmacion/confirmacion';

@IonicPage()
@Component({
  selector: 'page-reserva',
  templateUrl: 'reserva.html',
})
export class ReservaPage {

  info : any =[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    this.info=this.navParams.get('info');
    console.log(this.info);
  }

  goToConfirmacion(){
    this.navCtrl.push('ConfirmacionPage');
  }

}
