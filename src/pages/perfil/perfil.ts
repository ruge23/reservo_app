import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../../pages/tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})

export class PerfilPage {

  info : any [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.info = this.navParams.get('info');
  }

  ionViewDidLoad() {
    /*
    this.http.get('http://estareservado.ctrlztest.com.ar/traereventos.php')
      .subscribe((response)=>{
        this.info = JSON.parse(response['data'])
        console.log(this.info['eventos'][0].id)
      })
    */
   console.log(this.info);
  }

  savePerfil(){
    //this.navCtrl.push(TabsAdminPage);
    this.navCtrl.push(TabsPage);
  }

}
