import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { LoginTabsPage } from '../pages/login-tabs/login-tabs';
import { ConnexionPage } from '../pages/connexion/connexion';
import { InscriptionPage } from '../pages/inscription/inscription';
import { NotifPage } from '../pages/notif/notif';
import { IonTextAvatar } from 'ionic-text-avatar';
import { SwipeTabDirective } from '../directives/swipe-tab/swipe-tab';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginTabsPage,
    ConnexionPage,
    InscriptionPage,
    NotifPage,IonTextAvatar,SwipeTabDirective
  ],
  imports: [
    BrowserModule,
    SuperTabsModule.forRoot(),

    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginTabsPage,
    ConnexionPage,
    InscriptionPage,
    NotifPage

  ],
  providers: [
    StatusBar,

    SplashScreen,
    NativePageTransitions,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
