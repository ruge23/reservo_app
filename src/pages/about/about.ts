import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  info : any = [];
  userFaceId = 623982267;

  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
  ) {
    this.info;
  }

  ngOnInit(userId): void{
    this.http.post('http://estareservado.ctrlztest.com.ar/traerperfilusuario.php?faceid='+this.userFaceId,{},{headers :{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}})
    .subscribe((res)=>{
      this.info = res['data'];
      console.log(this.info);
    },
    err => {
      console.log('Error ocurred', err);
    }
  );
  }

}

