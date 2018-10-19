import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginTabsPage } from './login-tabs';

@NgModule({
  declarations: [
    LoginTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginTabsPage),
  ],
})
export class LoginTabsPageModule {}
