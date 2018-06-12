import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-list-ingresos',
  templateUrl: 'list-ingresos.html',
})
export class ListIngresosPage {

  ingresos: any;
  idEvent : any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: HttpClient,
  ) {
    this.idEvent = this.navParams.get('info').id;
    this.ingresos;
  }

  ionViewDidLoad() {
    console.log(this.idEvent);
    this.http.post('http://estareservado.ctrlztest.com.ar/traerinvitadosevento.php?eventoid='+this.idEvent,{},{headers :{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'} })
    .subscribe(
      res=>{
        this.ingresos= JSON.parse(res['data'])['reserva']
        console.log(this.ingresos);
      },
      err=>{console.log('Error', err)}
    );
  }

}
