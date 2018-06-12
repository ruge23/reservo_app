import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { EditPerfilAdminPage } from '../edit-perfil-admin/edit-perfil-admin';

@IonicPage()
@Component({
  selector: 'page-perfil-admin',
  templateUrl: 'perfil-admin.html',
})
export class PerfilAdminPage {

  info : any;
  adminId = 1; //

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: HttpClient,
  ) {
    this.info;
  }

  ngOnInit(): void {
    this.http.get('http://estareservado.ctrlztest.com.ar/traerlocaldetalle.php?localid='+this.adminId)
      .subscribe(
        res=>{
          this.info = JSON.parse(res['data'])['store'][0]
          console.log(this.info)},
        err=>{console.log('Error', err)}
      )
  }

  goToEditPerfil(){
    this.navCtrl.push('EditPerfilAdminPage');
  }
}
