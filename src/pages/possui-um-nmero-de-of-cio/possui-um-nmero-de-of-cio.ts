import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiOsDisponVeisPage } from '../servi-os-dispon-veis/servi-os-dispon-veis';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-possui-um-nmero-de-of-cio',
  templateUrl: 'possui-um-nmero-de-of-cio.html'
})
export class PossuiUmNMeroDeOfCioPage {

  constructor(public navCtrl: NavController) {
  }
  goToServiOsDisponVeis(params){
    if (!params) params = {};
    this.navCtrl.push(ServiOsDisponVeisPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToPossuiUmNMeroDeOfCio(params){
    if (!params) params = {};
    this.navCtrl.push(PossuiUmNMeroDeOfCioPage);
  }
}
