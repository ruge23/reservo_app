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
  data:any;
  nombreLocal: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private http: HttpClient,
    public alertCtrl: AlertController
  ) {
    this.data = this.navParams.get('info');
    this.nombreLocal = this.navParams.get('nombreLocal')
    this.eventos;
  }

  ngOnInit(): void {
    this.http.get('http://estareservado.ctrlztest.com.ar/traereventosxlocal.php?localid='+this.data)
      .subscribe((response)=>{
        this.info = JSON.parse(response['data'])
        //console.log('data',response);
        this.eventos = this.info['evento'];
        console.log('aqui',this.eventos)
      })
  }
  
  ionViewDidLoad(){
    console.log(this.data)
    console.log(this.nombreLocal);
  }

  sinEventos(eventos){
    if(eventos.length === 0) return 'No hay eventos agregados en este Local!';
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
    this.navCtrl.push('EventPage', {info: e, nombreLocal:this.nombreLocal});
    //console.log('aqui');
  }

}
