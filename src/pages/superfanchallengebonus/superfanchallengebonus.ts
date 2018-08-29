import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { AuthService  } from '../../providers/authservice/authservice';
import { CompetescreenPage } from '../competescreen/competescreen';
import { OtherfanentryviewPage } from '../otherfanentryview/otherfanentryview';

/**
 * Generated class for the SuperfanchallengebonusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-superfanchallengebonus',
  templateUrl: 'superfanchallengebonus.html',
})
export class SuperfanchallengebonusPage {
	public userDetails: any;
	public posts: any;
	public userPostData = {
		user_id: "",
		challenge_type: "superfan",
	};
	users: any; 
	resposeData : any;
	countDownDate : any= new Date("Jan 5, 2019 15:37:25").getTime();
	timeLeft : any;
	now : any;
	distance : any;
	days : any;
	hours : any;
	minutes : any;
	seconds : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthService,public toastCtrl: ToastController) {
		const data = JSON.parse(localStorage.getItem('userData'));
		this.userDetails = data.userData;
		this.userPostData.user_id = this.userDetails.user_id;
		this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuperfanchallengebonusPage');
	setInterval(() => { 
	   this.now = new Date().getTime();
	  // Find the distance between now and the count down date
	  this.distance = this.countDownDate - this.now;

	  // Time calculations for days, hours, minutes and seconds
	  this.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
	  this.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
	  this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

	  // Display the result in the element with id="demo"
	  this.timeLeft =  this.days + "D : " + this.hours + "H : "
	  + this.minutes + "M : " + this.seconds + "S ";

	  // If the count down is finished, write some text
	  if (this.distance < 0) {
		//clearInterval(x);
		this.timeLeft = "EXPIRED";
	  }
	  
	}, 1000);
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

}
