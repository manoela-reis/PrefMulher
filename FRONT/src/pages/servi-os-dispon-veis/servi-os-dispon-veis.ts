import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TelefonesTeisPage } from '../telefones-teis/telefones-teis';
import { CalendRioMenstrualPage } from '../calend-rio-menstrual/calend-rio-menstrual';
import { NearbyPage } from '../nearby/nearby';
import { MoreInfoPage } from '../more-info/more-info';

@Component({
  selector: 'page-servi-os-dispon-veis',
  templateUrl: 'servi-os-dispon-veis.html'
})
export class ServiOsDisponVeisPage {

  constructor(public navCtrl: NavController) {
  }
  goToTelefonesTeisPage(params){
    if (!params) params = {};
    this.navCtrl.push(TelefonesTeisPage);
  }
  goToCalendRioMenstrualPage(params){
    if (!params) params = {};
    this.navCtrl.push(CalendRioMenstrualPage);
  }
  goNearBy(params){
    if (!params) params = {};
    this.navCtrl.push(NearbyPage);
  }
  goMoreInfo(params){
    if (!params) params = {};
    this.navCtrl.push(MoreInfoPage);
  }
}
