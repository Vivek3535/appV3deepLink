import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';

import { AuthService } from '../../providers/authservice/authservice';

/**
 * Generated class for the FriendprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-friendprofile',
  templateUrl: 'friendprofile.html',
})
export class FriendprofilePage {

	public resposeData: any;
	userPostData = {
		user_id: "",
	};
	userProfileData = {
		profilePicture: "",
		userName: "",
		userFriends: "",
		userFriendsCount: "",
		userPosts: "",
		latestPost: "",
		userTeams: "",
		postMedia: "",
		postTags: "",
		postCheckedin: "",
		postText: "",
		postType: "",
		getUserPointsRanks: "",
	};
	public userDetails: any;
	
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public authService: AuthService, public toastCtrl: ToastController, public alertCtrl: AlertController) {
		const data = JSON.parse(localStorage.getItem('userData'));
		this.userDetails = data.userData;
		this.userPostData.user_id = navParams.get('userId');
		this.getUserProfileData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendprofilePage');
  }
  
	getUserProfileData() {
		let loading = this.loadingCtrl.create({
			content: 'Loading Please Wait...'
		});
		loading.present();
		this.authService.postData(this.userPostData, "getuserprofiledata").then(
		result => {
		  this.resposeData = result;
		  if (this.resposeData.profileData) {
			loading.dismiss();
			/*this.dataSet = this.resposeData.feedData;
			const dataLength = this.resposeData.feedData.length;
			this.userPostData.lastCreated = this.resposeData.feedData[
			  dataLength - 1
			].created;*/
			this.userProfileData.profilePicture = this.resposeData.profileData.profilePicture;
			this.userProfileData.userName = this.resposeData.profileData.userName;
			this.userProfileData.userFriends = this.resposeData.profileData.userFriends;
			this.userProfileData.userFriendsCount = this.resposeData.profileData.userFriendsCount;
			this.userProfileData.userPosts = this.resposeData.profileData.userPosts;
			this.userProfileData.latestPost = this.resposeData.profileData.latestPost;
			this.userProfileData.userTeams = this.resposeData.profileData.userTeams;
			this.userProfileData.getUserPointsRanks = this.resposeData.profileData.getUserPointsRanks;
		  } else {
			console.log("No access");
			loading.dismiss();
		  }
		},
		err => {
		  //Connection failed message
		  loading.dismiss();
		}
	  );
	}

}
