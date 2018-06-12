import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { DetalleReservaPage } from '../detalle-reserva/detalle-reserva';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-list-invited',
  templateUrl: 'list-invited.html',
})
export class ListInvitedPage {

  invitados: any=[];
  searchTerm: string = '';
  searchControl: FormControl;
  searching : any = false;
  idEvent : any;
  fecha: any;
  nombreEvento: any;
  dataFilter : any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: HttpClient,
    public data: Http,
  ) {
    this.nombreEvento = this.navParams.get('info').nombre;
    this.idEvent = this.navParams.get('info').id;
    this.fecha = this.navParams.get('info').fechadesde;
    this.invitados;
    this.dataFilter;
    this.searchControl = new FormControl();
  }
  
  ionViewDidLoad(): void{
    this.http.post('http://estareservado.ctrlztest.com.ar/traerinvitadosevento.php?eventoid='+this.idEvent,{},{headers :{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'} })
    .subscribe(
      res=>{
        this.invitados= JSON.parse(res['data'])['reserva']
        this.dataFilter=this.invitados.map((obj)=>{
          return {nombre: obj.nombreusuario,apellido: obj.usuarioapellido,dni: obj.usuariodni}
        })
        console.log(this.invitados);
      },
      err=>{console.log('Error', err)}
    );
  }  
  
  filterItems(searchTerm){
    //console.log('aqui!',this.dataFilter);
    return this.invitados.filter((invit)=>{
      return invit.nombreusuario.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    })
  }
  
  onSearchInput(){
    this.setFilteredItems();
    this.searching = true;
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilteredItems();
    });
  }
  
  setFilteredItems(){
    console.log('palabra', this.searchTerm);
    //console.log('data', this.dataFilter);
    this.invitados = this.filterItems(this.searchTerm);
  }

  mostrarDia(){
    var date = new Date(this.fecha);
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

  sinInvitados(data){
    if(data.length === 0) return 'Sin reservas hasta el momento!';
  }

  goToDetalleReserva(e, event){
    this.navCtrl.push('DetalleReservaPage', {info: e, data: event.fecha});
  }

}
