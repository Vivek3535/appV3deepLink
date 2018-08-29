import { Component } from '@angular/core';
import { AuthService } from '../../providers/authservice/authservice';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the FavteamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-favteam',
  templateUrl: 'favteam.html',
})
export class FavteamPage {
  public items: any;
  public teams: any;
  resposeData: any;
  userData = { "name": "" };
  public userPostData = {
    user_id: ""
  };
  public userDetails: any;
  public selectteam: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public authService: AuthService, public alertCtrl: AlertController) {
    this.initializeItems();
	const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
  }

	initializeItems() {
		let loading = this.loadingCtrl.create({
			content: 'Loading Please Wait...'
		});
		loading.present();
		this.authService.postData(this.userPostData, "getallteams").then(
			result => {
				this.resposeData = result;
				this.items = this.resposeData.data;
				this.teams = this.resposeData.data;
				loading.dismiss();
			},
			err => {
				//Connection failed message
				loading.dismiss();
			}
		);
	}

  filterTechnologies(param: any): void {
    //this.initializeItems();
	this.items = this.teams;
    let val: string = param;

    // DON'T filter the technologies IF the supplied input is an empty string
    if (val.trim() !== '') {
      this.items = this.items.filter((item) => {
        return item.team_name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.team_name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      })
    }
  }

  
	getSelectedItems(selectedOption) {
		this.selectteam = selectedOption;
	}

  // selctRadioBtn(questionID,answer){
   
  //   }

  favnextPage() {
    var myteamData = ({"user_id": this.userDetails.user_id,"selectedteams": this.selectteam});
    if(myteamData){
      this.authService.postData(myteamData, "SelectedTeams").then((result) =>{
      this.resposeData = result;
     //console.log(this.resposeData);
      if(this.resposeData){
       this.navCtrl.push(ProfilePage);
    }
    else{
      //this.showAlert();
    }
     
      }, (err) => {
        //Connection failed message
      });
     }
     else{
      //this.showAlert();
     }

  }

}