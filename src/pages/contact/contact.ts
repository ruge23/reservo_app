import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { QrDataPage } from '../qr-data/qr-data';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  reservas : any [];
  usuarioId = 3;

  constructor(
    public navCtrl: NavController,
    private http: HttpClient
  ) {
    this.reservas;
  }

  ngOnInit(): void{
    this.http.post('http://estareservado.ctrlztest.com.ar/traermisreservas.php?usuarioid='+this.usuarioId,{},{headers :{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}})
      .subscribe((response)=>{
        this.reservas = JSON.parse(response['data'])['reserva']
        console.log(this.reservas);
        //this.info = JSON.parse(response['data']);
        //this.reservas = this.info['reservas'];
      })
  }

  mostrarDia(fecha){
    var day = fecha.split("-").reverse();
    return day[0]+'/'+day[1]+'/'+day[2];
  }

  mostrarQR(e){
    this.navCtrl.push('QrDataPage',{info: e})
  }

  mostrarIcon(data){
    if(data==="0") return false;
    if(data==="1") return true;
  }

}
