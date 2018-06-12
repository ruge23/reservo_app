import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ResumenEventPage } from '../resumen-event/resumen-event';
import { AddNewEventPage } from '../add-new-event/add-new-event';

@IonicPage()
@Component({
  selector: 'page-reservas-admin',
  templateUrl: 'reservas-admin.html',
})
export class ReservasAdminPage {

  eventos : any [];
  adminId = 1; //

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http : HttpClient,
  ) {
    this.eventos
  }

  ngOnInit(): void{
    this.http.get('http://estareservado.ctrlztest.com.ar/traereventosxlocal.php?localid='+this.adminId)
      .subscribe(
        res=>{
          this.eventos = JSON.parse(res['data'])['evento']
          console.log(this.eventos)},
        err=>{console.log(err)}
      )
  }

  goToEvent(e){
    this.navCtrl.push('ResumenEventPage',{info:e});
  }

  cortarCaracteres(frase){
    var resultado;
    if(frase.length >= 10){
      resultado = frase.substring(0, 10);
      return resultado +' ...';
    }else{
      resultado = frase;
      return resultado;
    }
  }

  goToAddEvent(){
    this.navCtrl.push('AddNewEventPage');
    //console.log('holaaaaa');
  }
}
