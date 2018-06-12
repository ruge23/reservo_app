import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ReservaPage } from '../reserva/reserva';

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  
  info : any;
  infoUser : any;
  usuarioId = 623982267;
  nombreLocal: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http : HttpClient
  ) {
    this.getInfoUser();
    this.info;
    this.infoUser;
    this.nombreLocal = this.navParams.get('nombreLocal');
  }

  getInfoUser(){
    this.http.post('http://estareservado.ctrlztest.com.ar/traerperfilusuario.php?faceid='+ this.usuarioId,{},{headers :{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}})
      .subscribe((response)=>{
        this.infoUser = response['data'];
        console.log(this.infoUser);
      },(err)=>{console.log(err)}
    );
  }

  ionViewDidLoad() {
    this.info=this.navParams.get('info');
    console.log(this.info);
    console.log(this.nombreLocal);
  }

  mostrarDia(fecha){
    var date = new Date(fecha);
    var dia = date.getDay()+1;
    var day;
    switch (dia) {
      case 0:
          day = "Domingo";
          break;
      case 1:
          day = "Lunes";
          break;
      case 2:
          day = "Martes";
          break;
      case 3:
          day = "Miércoles";
          break;
      case 4:
          day = "Jueves";
          break;
      case 5:
          day = "Viernes";
          break;
      case 6:
          day = "Sábado";
    }
    return day
  }

  goToPago(){
    console.log('SII!')
  }

  goToReserva(e){
    this.navCtrl.push('ReservaPage',{info:e});
  }
}
