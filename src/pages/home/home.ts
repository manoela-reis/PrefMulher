import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalendRioMenstrualPage } from '../calend-rio-menstrual/calend-rio-menstrual';
import { VagasPage } from '../vagas/vagas';
import { ServicosAddPage } from '../servicos-add/servicos-add';
import { ServiOsDisponVeisPage } from '../servi-os-dispon-veis/servi-os-dispon-veis';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email : string;

  constructor(private fire:AngularFireAuth,public navCtrl: NavController) {
    this.email = fire.auth.currentUser.email;
  }
  goToCalendRioMenstrualPage(params){
    if (!params) params = {};
    this.navCtrl.push(CalendRioMenstrualPage);
  }
  goToVagasPage(params){
    if (!params) params = {};
    this.navCtrl.push(VagasPage);
  }
  goToServicosAddPage(params){
    if (!params) params = {};
    this.navCtrl.push(ServicosAddPage);
  }
  goToServiOsDisponVeis(params){
    if (!params) params = {};
    this.navCtrl.push(ServiOsDisponVeisPage);
  }
  
}
