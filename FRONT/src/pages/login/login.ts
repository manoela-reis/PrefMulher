import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PossuiUmNMeroDeOfCioPage } from '../possui-um-nmero-de-of-cio/possui-um-nmero-de-of-cio';
import { ServiOsDisponVeisPage } from '../servi-os-dispon-veis/servi-os-dispon-veis';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  

  constructor(private fire:AngularFireAuth,public navCtrl: NavController) {
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
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }

  signIn(){
    this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
    .then( data => {
      console.log('Esses dados foram guardados:', this.fire.auth.currentUser);
      this.navCtrl.setRoot( HomePage );
      // user está logado
    })
    .catch( error => {
      console.log('erro', error);
    })
  }

}

