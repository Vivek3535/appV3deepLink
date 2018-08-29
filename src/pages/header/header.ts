import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SuperfanchallengebonusPage } from '../superfanchallengebonus/superfanchallengebonus'; 
/**
 * Generated class for the HeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-header',
  templateUrl: 'header.html',
})
export class HeaderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeaderPage');
  }

	goToUploadPostImgVideoPage(){
	  this.navCtrl.push(SuperfanchallengebonusPage);
	}
}
