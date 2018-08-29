import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/authservice/authservice';

import { SuperfanchallengePage } from '../superfanchallenge/superfanchallenge';
import { FriendprofilePage } from '../friendprofile/friendprofile';

/**
 * Generated class for the OtherfanentryviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-otherfanentryview',
  templateUrl: 'otherfanentryview.html',
})
export class OtherfanentryviewPage {
	public resposeData: any;
	fabentryPostData = {
		post_id: "",
	};
	singlePostData = {
		profilePicture: "",
		userId : "",
		userName: "",
		teamName: "",
		challenge_type: "",
		type: "",
		media: "",
		likes: "",
		share: "",
		comments: "",
	};

	userPostData = {
		user_id: "",
		feed_id: "",
		feed: "",
	};

	userProfileData = {
		profilePicture: "",
		userName: "",
		userFollowers: "",
		userFollowersCount: "",
		userPosts: "",
		latestPost: "",
		userTeams: "",
		postMedia: "",
		postTags: "",
		postCheckedin: "",
		postText: "",
		postType: "",
		url: "",
		type: "",
		triviaGame: "",
		gameStatus: "",
		gameMessage: "",
	};

	gamePostData = {
		selectedOption: "",
		user_id: "",
		game_id: "",
	};
	userDetails: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public authService:AuthService, public toastCtrl: ToastController) {
    this.fabentryPostData.post_id = navParams.get('postId');
	console.log(this.fabentryPostData.post_id);
    this.singlePostImage();
		const data = JSON.parse(localStorage.getItem('userData'));
		this.userDetails = data.userData;
		this.userPostData.user_id = this.userDetails.user_id;
		this.gamePostData.user_id = this.userDetails.user_id;
		this.getUserProfileData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherfanentryviewPage');
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
			this.userProfileData.userFollowers = this.resposeData.profileData.userFollowers;
			this.userProfileData.userFollowersCount = this.resposeData.profileData.userFollowersCount;
			this.userProfileData.userPosts = this.resposeData.profileData.userPosts;
			this.userProfileData.latestPost = this.resposeData.profileData.latestPost;
			this.userProfileData.userTeams = this.resposeData.profileData.userTeams;
			this.userProfileData.triviaGame = this.resposeData.profileData.triviaGame;
			this.gamePostData.game_id = this.resposeData.profileData.triviaGame[0].id;
			this.userProfileData.gameStatus = this.resposeData.profileData.gameStatus;
			this.userProfileData.gameMessage = "You already played this game.";
			/*if(this.userProfileData.gameStatus == "Played"){
				let triviagameBgEl = document.querySelector('.triviagameBgParent');
				let boxtitleEl = document.querySelector('.boxtitle');
				triviagameBgEl.classList.add('triviagamedisplay');
				boxtitleEl.classList.add('showboxtitle');
				
				console.log(triviagameBgEl);
				console.log(boxtitleEl);
			}*/
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
	
  singlePostImage(){
		let loading = this.loadingCtrl.create({
			content: 'Please Wait...'
		});
		loading.present();
		this.authService.postData(this.fabentryPostData, "getpostbyid").then(
			result => {
			  this.resposeData = result;
			  if (this.resposeData.postData) {
				loading.dismiss();
				this.userPostData.user_id = this.resposeData.postData.userId;
				this.singlePostData.profilePicture = this.resposeData.postData.profilePicture;
				this.singlePostData.userName = this.resposeData.postData.userName;
				this.singlePostData.teamName = this.resposeData.postData.teamName;
				this.singlePostData.challenge_type = this.resposeData.postData.challenge_type;
				this.singlePostData.type = this.resposeData.postData.type;
				this.singlePostData.media = this.resposeData.postData.media;
				this.singlePostData.likes = this.resposeData.postData.likes;
				this.singlePostData.share = this.resposeData.postData.share;
				this.singlePostData.comments = this.resposeData.postData.comments;
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
	
	comments = [];
	addComment(ID, newComment: string) {
		if (newComment) {
			let loading = this.loadingCtrl.create({
				content: 'Please Wait...'
			});
			loading.present();
			this.userPostData.feed_id = ID;
			this.userPostData.feed = newComment;
			this.authService.postData(this.userPostData, "addpostcomment").then(
				result => {
					loading.dismiss();
					this.resposeData = result;
					if (this.resposeData.error == 0) {
						this.comments.push(newComment);
						this.presentToast("Comment added successfully!");
						this.navCtrl.push(OtherfanentryviewPage);
					} else {
						this.presentToast("Error occurs while adding post comment.");
					}
				},
				err => {
				  //Connection failed message
				  loading.dismiss();
				  this.presentToast("Error occurs while adding post comment.");
				}
			);
		} 
	}


	deletecomnt($commnt) {
		// this.heroes.splice($commnt, 1);
		this.comments.splice(this.comments.indexOf($commnt),1);
	}


  presentToast(msg) {
		let toast = this.toastCtrl.create({
			message: msg,
			duration: 6000,
			position: 'bottom'
		});

		toast.onDidDismiss(() => {
			console.log('Dismissed toast');
		});

		toast.present();
	}

	goToSuperfanchallengePage()
    {
        this.navCtrl.push(SuperfanchallengePage);
    }

	goToFriendprofilePage(user_id)
    {
		this.navCtrl.push(FriendprofilePage,{ userId: user_id });
    }
}
