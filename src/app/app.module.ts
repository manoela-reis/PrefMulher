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


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PossuiUmNMeroDeOfCioPage,
    ServiOsDisponVeisPage,
    TelefonesTeisPage,
    LoginPage,
    SignupPage,
    HomePage,
    CalendRioMenstrualPage
  ],
  imports: [
    BrowserModule,
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
    CalendRioMenstrualPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}