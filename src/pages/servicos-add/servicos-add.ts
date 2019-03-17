import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendRioMenstrualPage } from '../calend-rio-menstrual/calend-rio-menstrual';

/**
 * Generated class for the ServicosAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicos-add',
  templateUrl: 'servicos-add.html',
})
export class ServicosAddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicosAddPage');
  }
  goToCalendRioMenstrualPage(params){
    if (!params) params = {};
    this.navCtrl.push(CalendRioMenstrualPage);
  }

}
