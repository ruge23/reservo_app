import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { EventosPage } from '../eventos/eventos';
import { MapPage } from '../map/map';

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {

  idLocal: any;
  info: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: HttpClient
  ) {
    this.idLocal = this.navParams.get('info');
    this.info;
  }

  ngOnInit(): void{
    console.log(this.idLocal);
    const req = this.http.post('http://estareservado.ctrlztest.com.ar/traerlocaldetalle.php?localid='+this.idLocal,{},{headers :{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}})
    .subscribe(
        (res)=>{
          this.info=JSON.parse(res['data'])['store'] 
          console.log(this.info);
      },
        (err)=>{console.log('Error', err)}
      );
  }

  goToEvents(){
    this.navCtrl.push('EventosPage', {info: this.idLocal, nombreLocal: this.info[0].nombre });
    //console.log("Holaaa!");
  }

  goToMap(direcc){
    this.navCtrl.push('MapPage',{direcc});
  }

}
