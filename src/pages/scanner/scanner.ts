import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})
export class ScannerPage {
  
  //options: BarcodeScannerOptions;
  encodedData:any={};
  encodeText: string='';
  scannedData:any={};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    //public scanner: BarcodeScanner,
  ) {
  }

  /*
  scan(){
    this.scanner.scan(this.options)
      .then((data)=>{
        this.scannedData = data;
      },
      (err)=>{
        console.log('Error', err);
      }
    )
  }
*/
}
