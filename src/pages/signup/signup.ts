import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PossuiUmNMeroDeOfCioPage } from '../possui-um-nmero-de-of-cio/possui-um-nmero-de-of-cio';
import { ServiOsDisponVeisPage } from '../servi-os-dispon-veis/servi-os-dispon-veis';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToPossuiUmNMeroDeOfCio(params){
    if (!params) params = {};
    this.navCtrl.push(PossuiUmNMeroDeOfCioPage);
  }goToServiOsDisponVeis(params){
    if (!params) params = {};
    this.navCtrl.push(ServiOsDisponVeisPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}
