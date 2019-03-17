import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PossuiUmNMeroDeOfCioPage } from '../possui-um-nmero-de-of-cio/possui-um-nmero-de-of-cio';
import { ServiOsDisponVeisPage } from '../servi-os-dispon-veis/servi-os-dispon-veis';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  @ViewChild ('email') email;
  @ViewChild ('password') password;
  

  constructor(private fire:AngularFireAuth, public navCtrl: NavController) {
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
  signup(){
    this.fire.auth.createUserWithEmailAndPassword(this.email.value + '@domian.xta', this.password.value)
    .then(data => {
      console.log('Esses dados foram guardados: ', data);
    })
    .catch(error => {
      console.log('erro ', error);
    });
  	console.log('vc se registraria com: ', this.email.value, this.password.value);
  }
  }
}
