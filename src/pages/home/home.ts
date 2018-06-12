import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PopoverComponent } from './../../components/popover/popover';
import { PopoverController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { PlacePage } from '../place/place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  info : any [];
  locales : any;
  myPosition: any;

  constructor(
    public navCtrl: NavController, 
    private http: HttpClient,
    public geolocation: Geolocation,
    public popoverCtrl : PopoverController,
  ) {
    this.locales;
  }

  ngOnInit(): void{
    this.http.get('http://estareservado.ctrlztest.com.ar/traerlocales.php')
      .subscribe((response)=>{
        this.info = JSON.parse(response['data']);
        this.locales = this.info['stores'];
        //console.log(this.locales)
      })
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad(){
    this.geolocation.getCurrentPosition()
      .then((position)=>{
        //console.log(position)
        this.myPosition = {
          lat : position.coords.latitude,
          lng: position.coords.longitude
        }
        console.log('aqui',this.myPosition);
      })
  }

  //hacer funcion con  =>'geolocation'<=
  // funcion 'filter'

  goToPlace(id){
    this.navCtrl.push('PlacePage',{info:id});
  }

}
