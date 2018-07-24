import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { NgForm } from '../../../node_modules/@angular/forms';
import { DisplayPage } from '../display/display';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-sing-in',
  templateUrl: 'sing-in.html',
})
export class SignInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService, public loadingCtrl: LoadingController, private alertController: AlertController) {
  }

  onSignin(form: NgForm) {

    let loader = this.loadingCtrl.create({
      content: "Logging in user..."
    });
    loader.present();

    this.authService.signin(form.value.email, form.value.password)
      .then(data => {
        console.log(data)
        loader.dismiss();
        this.navCtrl.setRoot(DisplayPage)
      }, )
      .catch(error => {
        console.log(error)
        loader.dismiss();

        let alert = this.alertController.create({
          title: 'Signin failed!',
          message: error.message,
          buttons: ['OK']
        })

        alert.present()
      })
  }

}
