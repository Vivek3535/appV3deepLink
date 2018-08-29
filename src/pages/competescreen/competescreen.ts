import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UploadscreenPage } from '../uploadscreen/uploadscreen';
/**
 * Generated class for the CompetescreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-competescreen',
  templateUrl: 'competescreen.html',
})
export class CompetescreenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetescreenPage');
  }

	goToUploadscreenPage(ChallengeType)
    {
        this.navCtrl.push(UploadscreenPage, {postChallengeType : ChallengeType});
    }
}
