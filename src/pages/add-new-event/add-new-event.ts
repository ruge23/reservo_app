import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservasAdminPage } from '../reservas-admin/reservas-admin';

@IonicPage()
@Component({
  selector: 'page-add-new-event',
  templateUrl: 'add-new-event.html',
})
export class AddNewEventPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewEventPage');
  }

  saveEvent(){
    this.navCtrl.push(ReservasAdminPage);
  }

}
