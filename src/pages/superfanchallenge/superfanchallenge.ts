import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { AuthService  } from '../../providers/authservice/authservice';
import { DailycompeteviewPage } from '../dailycompeteview/dailycompeteview';
import { OtherfanentryviewPage } from '../otherfanentryview/otherfanentryview';
import { CompetescreenPage } from '../competescreen/competescreen';

/**
 * Generated class for the SuperfanchallengePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-superfanchallenge',
  templateUrl: 'superfanchallenge.html',
})
export class SuperfanchallengePage {
	public userDetails: any;
	public posts: any;
	public userPostData = {
		user_id: "",
		challenge_type: "bonus",
	};
	users: any; 
	resposeData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthService,public toastCtrl: ToastController) {
	const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
	this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuperfanchallengePage');
	this.authService.postData(this.userPostData, "getchallengeposts").then(
		result => {
		  this.resposeData = result;
		  if (this.resposeData.data) {
			this.posts = this.resposeData.data;
			console.log(this.posts);
		  } else {
			console.log("No access");
		  }
		},
		err => {
		  //Connection failed message
		  console.log("No access");
		}
	);
	}
	
	goToOtherfanentryviewPage(id){
		this.navCtrl.push(OtherfanentryviewPage,{ postId: id }); 
	}

	goToCompetescreenPage()
    {
        this.navCtrl.push(CompetescreenPage);
    }
	
	goToDailycompeteviewPage()
	{
		this.navCtrl.push(DailycompeteviewPage);
	}

}
