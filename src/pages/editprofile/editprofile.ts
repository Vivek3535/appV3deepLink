import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/authservice/authservice';

import { ProfileuploadPage } from '../profileupload/profileupload';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {

	public userDetails: any;
	public allTeams: any;
	public responseData : any;
	
	userPostData = {
		user_id: "",
	};
	selectedTeamData = {
		team_id: "",
		team_name: "",
	};
	userProfileData = {
		userName: "",
		city: "",
		userTeams: "",
		dob:"",
		email: "",
		profilePicture: "",
		phone: "",
		team_id: "",
	};
  //createSuccess = false;
	constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthService, public loadingCtrl: LoadingController,public alertCtrl: AlertController, public toastCtrl: ToastController ) {

		const data = JSON.parse(localStorage.getItem('userData'));
		this.userDetails = data.userData;
		console.log(this.userDetails);
		this.userPostData.user_id = this.userDetails.user_id;
		/*this.getUserProfileData();*/
		this.userProfileData.profilePicture = this.userDetails.profilePicture;
		this.userProfileData.userName = this.userDetails.name;
		this.userProfileData.email = this.userDetails.email;
		this.userProfileData.phone = this.userDetails.phone;
		this.userProfileData.userTeams = this.userDetails.team_name;
		this.userProfileData.team_id = this.userDetails.team_id;
		this.selectedTeamData.team_name = this.userDetails.team_name;
		this.userProfileData.dob = this.userDetails.userdob;
		this.userProfileData.city = this.userDetails.city;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EditprofilePage');
	} 

	editProfileCancleBtn(){
		this.navCtrl.push(ProfilePage);
	}

	goToProfileUploadPage(){
		this.navCtrl.push(ProfileuploadPage);
	}
  
	updateuserprofile()
	{
		this.authService.postData(this.userProfileData,'updateuserprofile').then((result) => {
			this.responseData = result;
			if(this.responseData.userData){
				//console.log(this.responseData);
				localStorage.setItem('userData', JSON.stringify(this.responseData) );
				this.presentToast("Profile updated successfully.");
				this.navCtrl.push(ProfilePage);
			}
			else{
				this.presentToast("Error occurs, Please try again.");
			}
		},  error => {
			this.presentToast("Error occurs, Please try again.");
		});
	}
  
	changeTeam(): void
	{
		let loading = this.loadingCtrl.create({
			content: 'Loading Please Wait...'
		});
		loading.present();
		this.authService.postData(this.userPostData,'getallteams').then((result) => {
			this.responseData = result;
			if(this.responseData.data){
				loading.dismiss();
				console.log(this.responseData.data);
				
				let alert = this.alertCtrl.create();
				alert.setTitle('Change Team');
				alert.setMessage('Select team to change your current team.');
				let teamsData = this.responseData.data;
				Object.keys(teamsData).forEach( function(key) {
					alert.addInput({
						type: 'radio',
						label: teamsData[key].team_name,
						value: teamsData[key],
					});
					
				});
				alert.addButton('Cancel');
				alert.addButton({
					text: 'Select',
					handler: (data: any) => {
						if(data){
							this.selectedTeamData.team_id = data.id;
							this.selectedTeamData.team_name = data.team_name;
							this.userProfileData.userTeams = data.team_name;
							this.userProfileData.team_id = data.id;
						}else{
							this.presentToast("Please select team.");
						}
					}
				});
				alert.present();
				
			}
			else{
				loading.dismiss();
				this.presentToast("Error occurs.");
			}
		},  error => {
			loading.dismiss();
			this.presentToast("Error occurs.");
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
}
