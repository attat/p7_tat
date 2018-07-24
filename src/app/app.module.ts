import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MyComponent } from '../components/foo';
import { SignInPage } from '../pages/sign-in/sign-in';
import { DisplayPage } from '../pages/display/display';
import { AuthService } from '../services/auth';
import { RegisterPage } from '../pages/register/register';
import { ThankyouPage } from '../pages/thankyou/thankyou';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyComponent,
    SignInPage,
    DisplayPage,
    RegisterPage,
    ThankyouPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyComponent,
    SignInPage,
    DisplayPage,
    RegisterPage,
    ThankyouPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
