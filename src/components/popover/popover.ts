import { NavController } from 'ionic-angular';
import { LoginPage } from './../../pages/login/login';
import { Component } from '@angular/core';

@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  text: string;

  constructor(public navCtrl: NavController,) {
  }

  close(){
    this.navCtrl.push(LoginPage);
  }
}

