import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ListInvitedPage } from '../list-invited/list-invited';

@IonicPage()
@Component({
  selector: 'page-list-events',
  templateUrl: 'list-events.html',
})
export class ListEventsPage {

  eventos: any=[];
  localId = 1;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: HttpClient,
  ) {
    this.eventos;
  }

  ngOnInit(clientId): void{
    this.http.post('http://estareservado.ctrlztest.com.ar/traereventosxlocal.php?localid='+this.localId,{},{headers :{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}})
    .subscribe(
      res=>{
        this.eventos = JSON.parse(res['data'])['evento']
        console.log(this.eventos)
      },
      err=>{console.log('Error',err)}
    );
  }

  goToListInvitados(e){
    this.navCtrl.push('ListInvitedPage',{info:e});
  }

}
