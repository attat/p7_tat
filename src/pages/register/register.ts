import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { NgForm } from '../../../node_modules/@angular/forms';
import { ThankyouPage } from '../thankyou/thankyou';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService, public loadingCtrl: LoadingController, private alertController: AlertController) {
  }

  onSingUp(form: NgForm) {
    let loader = this.loadingCtrl.create({
      content: "Logging in user..."
    });
    loader.present();

    this.authService.signin(form.value.email, form.value.password)
      .then(data => {
        console.log(data)
        loader.dismiss();
        this.navCtrl.setRoot(ThankyouPage)
      }, )
      .catch(error => {
        console.log(error)
        loader.dismiss();

        let alert = this.alertController.create({
          title: 'Sign Up failed!',
          message: error.message,
          buttons: ['OK']
        })

        alert.present()
      })
  }

}