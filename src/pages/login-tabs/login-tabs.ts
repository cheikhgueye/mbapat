import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { SuperTabsController } from 'ionic2-super-tabs';
import { ConnexionPage } from '../connexion/connexion';
import { InscriptionPage } from '../inscription/inscription';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-tabs',
  templateUrl: 'login-tabs.html',
})
export class LoginTabsPage {
  tab1Root =  ConnexionPage;
  tab2Root =  InscriptionPage;
  auth;
  cache: boolean=false;



  constructor(public navCtrl: NavController, public navParams: NavParams,private superTabsCtrl: SuperTabsController) {
    this.superTabsCtrl.setBadge('homeTab', 5);

   /* if(localStorage.getItem('auth')){
      this.navCtrl.setRoot(TabsPage);
    }*/

  console.log(this.cache)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginTabsPage');





  }

  hideToolbar() {
    this.superTabsCtrl.showToolbar(false);
  }

  showToolbar() {
    this.superTabsCtrl.showToolbar(true);
  }

  onTabSelect(ev: any) {
    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
  }


}
