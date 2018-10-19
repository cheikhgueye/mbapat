import { Component, ViewChild } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginTabsPage } from '../login-tabs/login-tabs';
import { SwipeTabDirective } from '../../directives/swipe-tab/swipe-tab';
import { Tabs } from 'ionic-angular';
import { NotifPage } from '../notif/notif';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
   @ViewChild(SwipeTabDirective) swipeTabDirective: SwipeTabDirective;
    @ViewChild('myTabs') tabRef: Tabs;
  loaded:   boolean = false;
  tabIndex: number  = 0;
  tab1Root = HomePage;
  tab2Root =   NotifPage;
  tab3Root = ContactPage;


  constructor( private nativePageTransitions: NativePageTransitions) {
}
private getAnimationDirection(index:number):string {
  var currentIndex = this.tabIndex;

  this.tabIndex = index;

  switch (true){
    case (currentIndex < index):
      return('left');
    case (currentIndex > index):
      return('right');
  }
}

transition($event) {
  this.swipeTabDirective.onTabInitialized($event.index);
}

onTabChange(index: number) {
  this.tabRef.select(index);
}
}
