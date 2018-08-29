import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { Deeplinks } from '@ionic-native/deeplinks';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Login } from '../pages/login/login';
import { OtherfanentryviewPage } from '../pages/otherfanentryview/otherfanentryview';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) navChild:Nav;
  rootPage:any = Login;

  constructor(platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public deeplinks: Deeplinks) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();

      //this is the code who responds to the app deeplinks
      //Deeplinks if from Ionic Native
      this.deeplinks.routeWithNavController(this.navChild, {
        '/home': HomePage,
        '/post/:postId': OtherfanentryviewPage
      }).subscribe((match) => {
        console.log('Successfully routed', match);
      }, (nomatch) => {
        console.log('Unmatched Route', nomatch);
      });
    });

  }
}

