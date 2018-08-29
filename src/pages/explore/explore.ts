import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/authservice/authservice';

/**
 * Generated class for the ExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {
  explore: string = "exploresfc"; 
  public resposePostData: any;
  public exploredataSet: any;
  public exploregamedataSet: any;
  public teamdataSet:any;
  public gamedataSet:any;
  public team_id:any;
  public team_name:any;
  public game_id:any;
  public userDetails: any;
  userPostData = {
    user_id: "",
    team_id:"",
    game_id:"",
    team_name:"",
  };
  constructor(public navCtrl: NavController, public navParams: NavParams ,public authService:AuthService) {
    const data = JSON.parse(localStorage.getItem('userData'));
     this.userDetails = data.userData;
     this.userPostData.user_id = this.userDetails.user_id;
     this.userPostData.team_id = this.userDetails.team_id;
     this.userPostData.game_id = this.userDetails.game_id;
     this.userPostData.team_name = this.userDetails.team_name;
     this.getteampostdata();
     this.getexplorepostdata();
     this.getgamepostdata();
     this.getexploregamepostdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExploreScreenPage');
  }
  getexplorepostdata()
  {
   
	this.authService.postData(this.userPostData, "getexplorepostdata").then(
    result => {
      this.resposePostData = result;
      if (this.resposePostData.exploreData) {
       this.exploredataSet = this.resposePostData.exploreData;
      } else {
        console.log("No access");
      }
    },
    err => {
      //Connection failed message
	  console.log("out");
    }
  );
  }
  getteampostdata()
  {
   
	this.authService.postData(this.userPostData, "getteampostdata").then(
    result => {
      this.resposePostData = result;
      if (this.resposePostData.teamData) {
       this.teamdataSet = this.resposePostData.teamData;
      } else {
        console.log("No access");
      }
    },
    err => {
      //Connection failed message
	   console.log("out");
    }
  );
  }

  getteamsdata(id,team_name:any)
  {
     this.team_id = id;
      this.team_name = team_name;
      this.userPostData.team_id = this.team_id;
      this.userPostData.team_name = this.team_name;
      this.getexplorepostdata();
  }


  getgamepostdata()
  {
   
	this.authService.postData(this.userPostData, "getgamepostdata").then(
    result => {
      this.resposePostData = result;
      if (this.resposePostData.gameData) {
       this.gamedataSet = this.resposePostData.gameData;
       console.log(this.gamedataSet);
      } else {
        console.log("No access");
      }
    },
    err => {
      //Connection failed message
	  console.log("out");
    }
  );
  }

  getgamesdata(id)
  {
      this.game_id = id;
      this.userPostData.game_id = this.game_id;
      this.getexploregamepostdata();
  }


  getexploregamepostdata()
  {
   
	this.authService.postData(this.userPostData, "getexploregamepostdata").then(
    result => {
      this.resposePostData = result;
      if (this.resposePostData.exploregameData) {
       this.exploregamedataSet = this.resposePostData.exploregameData;
      } else {
		//this.photos = "No Post Found!";
        console.log("No access");
      }
    },
    err => {
      //Connection failed message
	  console.log("out");
    }
  );
  }
}
