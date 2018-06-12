import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { EventPage } from '../event/event';

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  info: any [];
  eventos : any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private http: HttpClient,
    public alertCtrl: AlertController
  ) {
    this.eventos;
  }

  ngOnInit(): void {
    this.http.get('http://estareservado.ctrlztest.com.ar/traereventos.php')
      .subscribe((response)=>{
        this.info = JSON.parse(response['data'])
        //console.log('data',response);
        this.eventos = this.info['eventos'];
        console.log('aqui',this.eventos)
      })
  }

  cortarCaracteres(frase){
    var resultado;
    if(frase.length >= 20){
      resultado = frase.substring(0, 20);
      return resultado +' ...';
    }else{
      resultado = frase;
      return resultado;
    }
  }

  showAlert(direcc){
    let alert = this.alertCtrl.create({
      title: 'Dirección',
      subTitle: direcc,
      buttons: ['OK']
    });
    alert.present();
  }

  goToEvent(e){
    this.navCtrl.push('EventPage', {info: e.eventos});
    //console.log('aqui');
  }

}
