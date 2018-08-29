import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { AuthService  } from '../../providers/authservice/authservice';
/**
 * Generated class for the CommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-community',
  templateUrl: 'community.html',
})
export class CommunityPage {
	public userDetails: any;
	public userPostData = {
		user_id: "",
		friend_id: ""
	};
	resposeData : any;
	users: any; 
	allusers: any; 
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthService,public toastCtrl: ToastController) {
	this.ionViewDidLoad();
	const data1 = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data1.userData;
    this.userPostData.user_id = this.userDetails.user_id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunityPage');
	this.authService.postData(this.userPostData, "getallusers").then(
		result => {
		  this.resposeData = result;
		  if (this.resposeData.data) {
			this.users = this.resposeData.data;
			this.allusers = this.resposeData.data;
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
  
	addFriend(friendId){
		this.userPostData.friend_id = friendId;
		Object.keys(this.users).forEach(h => {
			if(this.users[h].id == friendId){
				this.users[h].checked = true;
			}
		});
		Object.keys(this.allusers).forEach(h => {
			if(this.allusers[h].id == friendId){
				this.allusers[h].checked = true;
			}
		});
		this.authService.postData(this.userPostData, "sendfriendrequest").then(
			result => {
			  this.resposeData = result;
			  if (this.resposeData.data == 1) {
				this.presentToast("Request Sent successfully!");
			  } else {
				this.presentToast("Error occurs.");
			  }
			},
			err => {
			  //Connection failed message
			  console.log("No access");
			}
		);
	}
	
	showAddFriends(){
		let usersListEl = document.querySelector('.searchbarlist');
		let usersListBtnEl = document.querySelector('.usersListBtn');
		usersListEl.classList.remove('opacityclass');
		usersListBtnEl.classList.add('build');
	}
	
	filterTechnologies(param: any): void {
		//this.ionViewDidLoad();
		this.users = this.allusers;
		let val: string = param;

		// DON'T filter the technologies IF the supplied input is an empty string
		if (val.trim() !== '') {
		  this.users = this.users.filter((item) => {
			return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
		  })
		}
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
