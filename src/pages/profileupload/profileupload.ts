import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { AuthService } from '../../providers/authservice/authservice';
import { Camera, CameraOptions} from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the ProfileuploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-profileupload',
  templateUrl: 'profileupload.html',
})
export class ProfileuploadPage {
	public resposeData: any;
	public imageFileName: any;
	public userProfileData = {
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
	};
	public userPostData = {
		user_id: "",
	};
	public userDetails: any;
	constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,public authService:AuthService, public camera : Camera, public transfer: FileTransfer,public toastCtrl: ToastController) {
		const data = JSON.parse(localStorage.getItem('userData'));
		this.userDetails = data.userData;
		this.userPostData.user_id = this.userDetails.user_id;
		this.getUserProfileData();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ProfileuploadPage');
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
	
	/* Take user profile pic Starts */
	takePhoto() {
		
		const options : CameraOptions = {
			quality: 100, // picture quality
			mediaType: this.camera.MediaType.PICTURE,
			/*sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,*/
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
			fileTransfer.upload(imageData, 'http://sfc.dimensiongraphic.com/sfc-app/api/profilePicUpload.php', options11, true).then((data) => {
				/* success
				/alert("success"); */
				loading.dismiss();
				this.resposeData = data;
				if(this.resposeData.imageURL != ""){
					this.userProfileData.profilePicture = this.resposeData.imageURL;
					this.presentToast("Image Uploaded successfully.");
				}
				else{
					this.presentToast("There was an error uploading the file, please try again!");
				}
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
	/* Take user profile pic Ends */
	/* Upload user profile pic Starts */
	uploadPhoto() {
		
		const options : CameraOptions = {
			quality: 100, // picture quality
			mediaType: this.camera.MediaType.PICTURE,
			sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
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
			fileTransfer.upload(imageData, 'http://sfc.dimensiongraphic.com/sfc-app/api/profilePicUpload.php', options11, true).then((data) => {
				/* success
				/alert("success"); */
				loading.dismiss();
				this.resposeData = data;
				if(this.resposeData.imageURL != ""){
					this.userProfileData.profilePicture = this.resposeData.imageURL;
					this.presentToast("Image Uploaded successfully.");
				}
				else{
					this.presentToast("There was an error uploading the file, please try again!");
				}
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
	
	backtoprofile(){
		this.navCtrl.push(ProfilePage);
	}
}
