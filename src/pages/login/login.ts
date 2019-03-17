import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PossuiUmNMeroDeOfCioPage } from '../possui-um-nmero-de-of-cio/possui-um-nmero-de-of-cio';
import { ServiOsDisponVeisPage } from '../servi-os-dispon-veis/servi-os-dispon-veis';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToPossuiUmNMeroDeOfCio(params){
    if (!params) params = {};
    this.navCtrl.push(PossuiUmNMeroDeOfCioPage);
  }goToServiOsDisponVeis(params){
    if (!params) params = {};
    this.navCtrl.push(ServiOsDisponVeisPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
}
