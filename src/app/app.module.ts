import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PossuiUmNMeroDeOfCioPage } from '../pages/possui-um-nmero-de-of-cio/possui-um-nmero-de-of-cio';
import { ServiOsDisponVeisPage } from '../pages/servi-os-dispon-veis/servi-os-dispon-veis';
import { TelefonesTeisPage } from '../pages/telefones-teis/telefones-teis';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { CalendRioMenstrualPage } from '../pages/calend-rio-menstrual/calend-rio-menstrual';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VagasPage } from '../pages/vagas/vagas';
import { ServicosAddPage } from '../pages/servicos-add/servicos-add';

const firebaseAuth = {
  apiKey: "AIzaSyDl6oh5t73FupNYiW_z8uwn2sQmQrHzU00",
  authDomain: "prefmulher.firebaseapp.com",
  databaseURL: "https://prefmulher.firebaseio.com",
  projectId: "prefmulher",
  storageBucket: "prefmulher.appspot.com",
  messagingSenderId: "460671453623"
};

@NgModule({
  declarations: [
    MyApp,
    PossuiUmNMeroDeOfCioPage,
    ServiOsDisponVeisPage,
    TelefonesTeisPage,
    LoginPage,
    SignupPage,
    HomePage,
    VagasPage,
    ServicosAddPage,
    CalendRioMenstrualPage
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PossuiUmNMeroDeOfCioPage,
    ServiOsDisponVeisPage,
    TelefonesTeisPage,
    LoginPage,
    SignupPage,
    HomePage,
    VagasPage,
    ServicosAddPage,
    CalendRioMenstrualPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}