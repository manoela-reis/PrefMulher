import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalendRioMenstrualPage } from '../calend-rio-menstrual/calend-rio-menstrual';

@Component({
  selector: 'page-telefones-teis',
  templateUrl: 'telefones-teis.html'
})
export class TelefonesTeisPage {

  constructor(public navCtrl: NavController) {
  }
  goToCalendRioMenstrualPage(params){
    if (!params) params = {};
    this.navCtrl.push(CalendRioMenstrualPage);
  }
}
