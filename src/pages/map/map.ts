import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google : any;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapRef: ElementRef;

  map: any;
  marker : any;
  direccion: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.direccion = this.navParams.get('direcc');
  }

  ionViewDidLoad() {
    console.log(this.direccion)
    this.loadMap(this.direccion);
  }

  loadMap(direcc){

    //Geocoder
    let geocoder = new google.maps.Geocoder();
    
    //create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');

    //Map options
    const options = {
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      streetViewControl: true,
      disableDefaultUI: true,     
    }

    //create map
    this.map = new google.maps.Map(mapEle, options)
    
    geocoder.geocode({'address': direcc}, (results,status)=>{
      if(status==='OK'){
        var resultados = results[0].geometry.location, 
        resultados_lat = resultados.lat(),
        resultados_lng = resultados.lng();
        
        this.map.setCenter(results[0].geometry.location);

        this.marker = new google.maps.Marker({
          map: this.map,
          position: results[0].geometry.location,
          draggable: false,
          animation: google.maps.Animation.DROP,
          clickable: true,
        });
        
        this.marker.info = new google.maps.InfoWindow({
          content : direcc
        })
        
        this.map = google.maps.event.addListener(this.marker, 'click', ()=>{
          this.marker.info.open(this.map, this.marker);
        })

      }else{
        var mensajeError = "";
				  if (status === "ZERO_RESULTS") {
					  mensajeError = "No hubo resultados para la dirección ingresada.";
				  } else if (status === "OVER_QUERY_LIMIT" || status === "REQUEST_DENIED" || status === "UNKNOWN_ERROR") {
					  mensajeError = "Error general del mapa.";
				  } else if (status === "INVALID_REQUEST") {
					  mensajeError = "Error de la web. Contacte con Name Agency.";
				  }
				  alert(mensajeError);
      }
    });    
  }
}

