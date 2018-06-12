import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalle-reserva',
  templateUrl: 'detalle-reserva.html',
})
export class DetalleReservaPage {

  info: any=[];
  data: any=[];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.info = this.navParams.get('info');
    this.data = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('data', this.data)
    console.log('info', this.info);
  }

  mostrarDia(fecha){
    var day = fecha.split("-").reverse();
    return day[0]+'/'+day[1]+'/'+day[2];
  }

  pago(data){
    if(data === "0"){
      return "No Pago";
    }else{
      return "Pago";
    }
  }

}
