import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UploadscreenPage } from '../uploadscreen/uploadscreen';
/**
 * Generated class for the DailycompeteviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-dailycompeteview',
  templateUrl: 'dailycompeteview.html',
})
export class DailycompeteviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailycompeteviewPage');
  }
	
	goToUploadscreenPage(ChallengeType)
    {
        this.navCtrl.push(UploadscreenPage, {postChallengeType : ChallengeType});
    }
	
}
