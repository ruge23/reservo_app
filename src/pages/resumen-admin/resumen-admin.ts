import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-resumen-admin',
  templateUrl: 'resumen-admin.html',
})
export class ResumenAdminPage {

  cuentas: any [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: HttpClient,
  ) {
    this.cuentas;
  }

  ngOnInit(): void{
    this.http.get('http://estareservado.ctrlztest.com.ar/traerresumencuentas.php?usuarioid=1')
      .subscribe(
        res=>{
          this.cuentas = JSON.parse(res['data'])['resumen']
          console.log(this.cuentas)
        },
        err=>{console.log('Error', err)}
      )
  }

  mostrarFecha(fecha){
    var split = fecha.split('-').reverse();
    return split[0]+'/'+split[1];
  }

}
