import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsAdminPage } from '../tabsadmin/tabsadmin';

@IonicPage()
@Component({
  selector: 'page-edit-perfil-admin',
  templateUrl: 'edit-perfil-admin.html',
})
export class EditPerfilAdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPerfilAdminPage');
  }

  savePerfilAdmin(){
    this.navCtrl.push(TabsAdminPage);
  }

}
