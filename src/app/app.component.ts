import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { AuthService } from '../services/auth';
import { SignInPage } from '../pages/sign-in/sign-in';
import { RegisterPage } from '../pages/register/register';
import { DisplayPage } from '../pages/display/display';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = DisplayPage;
  signInPage = SignInPage;
  registerPage = RegisterPage;
  isAuthenticated = false;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController, private authService: AuthService) {

    firebase.initializeApp({
      apiKey: "AIzaSyBQKoe_CbB6b7dkRyQqyjSmKu5rjxEUlRo",
      authDomain: "p6tat-41152.firebaseapp.com"
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
        this.rootPage = SignInPage;
      }
    });

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout() {
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SignInPage);
  }
}
