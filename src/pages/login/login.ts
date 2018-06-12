import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { PerfilPage } from '../perfil/perfil';
import { TabsClientPage } from '../tabsclient/tabsclient';
import { TabsAdminPage } from '../tabsadmin/tabsadmin';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  isLoggedIn:boolean = false;
  users: any;
  username: any;
  userData : any;

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    //private facebook: Facebook
  ) {
  }

  login(){

    this.username= this.user.value.toLowerCase();
    //console.log(this.username, this.password.value)
    
    if(this.username === "usuario" && this.password.value === "1234"){
      this.navCtrl.push('PerfilPage');
    }else if(this.username === "cliente" && this.password.value === "1234"){
      this.navCtrl.push(TabsClientPage);
    }else if(this.username === "admin" && this.password.value === "1234"){
      this.navCtrl.push(TabsAdminPage);
    }else{
      this.showAlert();
    }
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Rellenar los Campos!',
      buttons: ['OK']
    });
    alert.present();
  }

  /*
  loginWithFB(){
    this.facebook.login(['email', 'public_profile'])
      .then((response: FacebookLoginResponse)=>{
        this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)',[])
          .then(profile=>{
            console.log(profile);
            this.userData = {email:profile['email'], first_name:profile['first_name'], picture:profile['picture_large']['data']['url'], username:profile['name']}
            this.navCtrl.push('PerfilPage', {info: this.userData})
          });
      });
  }
  */
}
