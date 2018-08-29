import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';

import { AuthService } from '../../providers/authservice/authservice';
import { Camera, CameraOptions} from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { MediaCapture, MediaFile, CaptureVideoOptions } from '@ionic-native/media-capture';

import { Login } from '../login/login';
import { RegisterPage } from '../register/register';
import { FavteamPage } from '../favteam/favteam';
import { ProfilePage } from '../profile/profile';
import { CommunityPage } from '../community/community';
import { SuperfanchallengePage } from '../superfanchallenge/superfanchallenge';
import { SuperfanchallengebonusPage } from '../superfanchallengebonus/superfanchallengebonus';
import { FriendprofilePage } from '../friendprofile/friendprofile';
import { OtherfanentryviewPage } from '../otherfanentryview/otherfanentryview'; 
import { FanrankingPage } from '../fanranking/fanranking'; 
import { NotificationPage } from '../notification/notification';

import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    public resposeData: any;
	public imageFileName: any;
	public tagFriendsData: any;
    public locationlistData: any;
    public userDetails: any;
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
	userPostData = {
		user_id: "",
		feed_id: "",
		feed: "",
	};
	gamePostData = {
		selectedOption: "",
		user_id: "",
		game_id: "",
	};

	loader: any;
	videoId: any;
	flag_upload = true;
	flag_play = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,public authService:AuthService,public camera : Camera,public transfer: FileTransfer,public toastCtrl: ToastController, public alertCtrl: AlertController,private mediaCapture: MediaCapture, public socialSharing: SocialSharing) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
	this.userPostData.user_id = this.userDetails.user_id;
	this.gamePostData.user_id = this.userDetails.user_id;
	this.getUserProfileData();
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



  /* Upload Images/Videos for user post starts */
	uploadPostimgvideo(){
		const options : CameraOptions = {
			quality: 100, // picture quality
			mediaType: this.camera.MediaType.ALLMEDIA,
			destinationType : this.camera.DestinationType.FILE_URI,
			sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
			allowEdit: true,
		}
		
		this.camera.getPicture(options) .then((imageData) => {
			let loading = this.loadingCtrl.create({
				content: 'Loading Please Wait...'
			});
			loading.present();
			/* Starts Preloader */
			this.imageFileName = imageData.substring(imageData.lastIndexOf('/')+1);
			const fileTransfer: FileTransferObject = this.transfer.create();
			let options11: FileUploadOptions = {
				fileKey: 'file',
				fileName: this.imageFileName,
				params : {"userData":this.userDetails.user_id},
				headers: {}
			}
			fileTransfer.upload(imageData, 'http://sfc.dimensiongraphic.com/sfc-app/api/postsUpload.php', options11, true).then((data) => {
				/* success
				/alert("success"); */
				loading.dismiss();
				this.resposeData = data;
				let mediaresponse = JSON.parse(this.resposeData.response);
				this.authService.postData(mediaresponse, "getreturndata").then(
					result => {
						this.resposeData = result;
						if(this.resposeData.postType != ""){
							this.userProfileData.postMedia = this.resposeData.postMedia;
							this.userProfileData.postType = this.resposeData.postType;
							this.presentToast("Upload Success");
						}
						else{
							this.presentToast("There was an error uploading the file, please try again!");
						}
					},
					err => {
						this.presentToast("Returned Error");
					}
				);	
			}, (err) => {
				loading.present();
				this.presentToast(JSON.stringify(err));
			});
		}, (err) => {
		  console.log(err);
		});
	}
    /* Upload Images/Videos for user post Ends */
    
    /* Upload user profile pic Starts */
	takePhoto() {
		const options : CameraOptions = {
			quality: 100, // picture quality
			mediaType: this.camera.MediaType.PICTURE,
			// sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
			allowEdit: true,
		}
		/*let options = {
			quality: 100,
			mediaType: this.camera.MediaType.PICTURE,
		};*/
		this.camera.getPicture(options) .then((imageData) => {
		  /*this.base64Image = "data:image/jpeg;base64," + imageData;
		  this.photos.push(this.base64Image);
		  this.photos.reverse();*/
		  
			let loading = this.loadingCtrl.create({
				content: 'Loading Please Wait...'
			});
			loading.present();
			/* Starts Preloader */
			/*this.presentToast(imageData);*/
			this.imageFileName = imageData.substring(imageData.lastIndexOf('/')+1);
			const fileTransfer: FileTransferObject = this.transfer.create();
			let options11: FileUploadOptions = {
				fileKey: 'file',
				fileName: this.imageFileName,
				params : {"userData":this.userDetails.user_id},
				headers: {}
			}
			fileTransfer.upload(imageData, 'http://sfc.dimensiongraphic.com/sfc-app/api/postsUpload.php', options11, true).then((data) => {
				/* success
				/alert("success"); */
				loading.dismiss();
				this.resposeData = data;
				let mediaresponse = JSON.parse(this.resposeData.response);
				this.authService.postData(mediaresponse, "getreturndata").then(
					result => {
						this.resposeData = result;
						if(this.resposeData.postType != ""){
							this.userProfileData.postMedia = this.resposeData.postMedia;
							this.userProfileData.postType = this.resposeData.postType;
							this.presentToast("Upload Success");
						}
						else{
							this.presentToast("There was an error uploading the file, please try again!");
						}
					},
					err => {
						this.presentToast("Returned Error");
					}
				);	
			}, (err) => {
				// error
				//alert("error"+JSON.stringify(err));
				loading.present();
				this.presentToast(JSON.stringify(err));
			});
		}, (err) => {
		  console.log(err);
		});
	}
	/* Upload user profile pic Ends */
	
	/* Create User Post Starts */
	createPost(){
		this.resposeData = {
			user_id: this.userPostData.user_id,
			postMedia : this.userProfileData.postMedia,
			postText: this.userProfileData.postText,
			postType: this.userProfileData.postType,
			team_id: this.userDetails.team_id,
			url: this.userProfileData.postMedia,
			postChallengeType: 'superfan',
		};
		console.log(this.resposeData);
		let loading = this.loadingCtrl.create({
			content: 'Please Wait...'
		});
		if (this.userProfileData.postText) {
		loading.present();
		this.authService.postData(this.resposeData, "createpost").then(
			result => {
			  this.resposeData = result;
			  if (this.resposeData.error == 0) {
				loading.dismiss();
				this.presentToast(this.resposeData.message);
				this.userProfileData.latestPost = this.resposeData.latestPost;
				this.userProfileData.postText = null;
				this.userProfileData.postType = null;
			  } else {
				console.log("No access");
				loading.dismiss();
				this.presentToast(this.resposeData.message);
			  }
			},
			err => {
			  //Connection failed message
			  loading.dismiss();
			}
		);
	}
	}
	/* Create User Post Ends */
	tvgAnswer(selectedOption){
		this.gamePostData.selectedOption = selectedOption;
	}
	submitGame(){
		let loading = this.loadingCtrl.create({
			content: 'Submitting, Please Wait...'
		});
		loading.present();
		this.authService.postData(this.gamePostData, "submittriviagame").then(
			result => {
				this.resposeData = result;
				if(this.resposeData.message){
					this.userProfileData.gameMessage = this.resposeData.message;
					let triviagameBgEl = document.querySelector('.triviagameBgParent');
					let boxtitleEl = document.querySelector('.boxtitle');
					triviagameBgEl.classList.add('triviagamedisplay');
					boxtitleEl.classList.add('showboxtitle');
					
				}
				loading.dismiss();
			},
			err => {
			  //Connection failed message
			  loading.dismiss();
			}
		);
		
	}

	likePhoto(ID) {
		let loading = this.loadingCtrl.create({
			content: 'Please Wait...'
		});
		loading.present();
		this.userPostData.feed_id = ID;
		this.authService.postData(this.userPostData, "likepost").then(
			result => {
				this.resposeData = result;
				loading.dismiss();
				if (this.resposeData.error == 0) {
					this.presentToast("Like Submitted Successfully!");
					this.navCtrl.push(HomePage);
				} else {
					this.presentToast("Error occurs while submitting like.");
				}
			},
			err => {
			  //Connection failed message
			  loading.dismiss();
			  this.presentToast("Error occurs while submitting like.");
			}
		);
			  
	}

	sharePhoto(ID) {
		let loading = this.loadingCtrl.create({
			content: 'Please Wait...'
		});
		loading.present();
		this.userPostData.feed_id = ID;
		this.authService.postData(this.userPostData, "sharepost").then(
			result => {
				this.resposeData = result;
				loading.dismiss();
				if (this.resposeData.error == 0) {
					this.presentToast("Shared Successfully!");
					this.navCtrl.push(HomePage);
				} else {
					this.presentToast("Error occurs while shareing post.");
				}
			},
			err => {
			  //Connection failed message
			  loading.dismiss();
			  this.presentToast("Error occurs while shareing post.");
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
						this.navCtrl.push(HomePage);
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

	videoCaptureFn(){
		let options: CaptureVideoOptions = { limit: 1 };
		this.mediaCapture.captureVideo(options)
		.then((videodata: MediaFile[]) => {
		var i, path, len;
		for (i = 0, len = videodata.length; i < len; i += 1) {
		path = videodata[i].fullPath;
		// do something interesting with the file
		}
		this.videoId = path;
		this.presentToast(this.videoId);
		this.flag_play = false;
		this.flag_upload = false;
		});
	}

	sharePostImage() {
		//this code is to use the social sharing plugin
		// message, subject, file, url
		this.socialSharing.share("Check this item:  appv2://home/")
		.then(() => {
			this.presentToast('testing');
			
		})
		.catch(() => {
	
		});
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
	loginPage()
    {
        this.navCtrl.push(Login);
    }
	
	signupPage()
    {
        this.navCtrl.push(RegisterPage);
    }
	
	goToFavteamPage()
    {
        this.navCtrl.push(FavteamPage);
    }
	
	goToProfilePage()
    {
        this.navCtrl.push(ProfilePage);
    }
	
	goToCommunityPage()
    {
        this.navCtrl.push(CommunityPage);
    }
	
	goToSuperFanChallengePage()
    {
        this.navCtrl.push(SuperfanchallengePage);
    }
	
	goToSuperfanchallengebonusPage()
    {
        this.navCtrl.push(SuperfanchallengebonusPage);
    }
	
	goToFriendprofilePage(user_id)
    {
		this.navCtrl.push(FriendprofilePage,{ userId: user_id });
    }
	
	goToOtherfanentryviewPage(id)
    {
        this.navCtrl.push(OtherfanentryviewPage,{ postId: id }); 
    }
	
	goToFanrankingPage()
    {
        this.navCtrl.push(FanrankingPage); 
    }
	
	goToNotificationPage()
    {
        this.navCtrl.push(NotificationPage); 
    }
}
