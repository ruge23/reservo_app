import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-qr-data',
  templateUrl: 'qr-data.html',
})
export class QrDataPage {

  info : any;
  encodedData:any={};
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public scanner: BarcodeScanner
  ) {
    this.info=this.navParams.get('info');
  }

  encode(){
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.info)
      .then((data)=>{
        this.encodedData = data;
      }, (err)=>{
        console.log('Error', err);
      })
  }

}
