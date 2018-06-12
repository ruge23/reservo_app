import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-confirmacion',
  templateUrl: 'confirmacion.html',
})
export class ConfirmacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    setTimeout(()=>{
      this.navCtrl.push(HomePage)
    },2500)
  }

}
