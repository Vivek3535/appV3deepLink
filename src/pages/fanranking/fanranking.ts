import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/authservice/authservice';

/**
 * Generated class for the FanrankingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-fanranking',
  templateUrl: 'fanranking.html',
})
export class FanrankingPage {
  public userDetails: any;
  public fanrankingdataSet:any;
  public fanrankingList:any;
  public resposePostData: any;
  userPostData = {
    user_id: "",
    
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthService) {

    const data = JSON.parse(localStorage.getItem('userData'));
     this.userDetails = data.userData;
     this.userPostData.user_id = this.userDetails.user_id;
    
     this.getfanrankingedata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FanrankingPage');
  }

 
  getfanrankingedata()
  {
    this.authService.postData(this.userPostData, "getfanrankingedata").then(
      result => {
        this.resposePostData = result;
        
        if (this.resposePostData.fanrankingData) {
         this.fanrankingdataSet = this.resposePostData.fanrankingData;
         this.fanrankingList = this.resposePostData.fanrankingData;
          console.log(this.fanrankingdataSet);
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

  filterTechnologies(param: any): void {
    this.fanrankingdataSet = this.fanrankingList;
    let val: string = param;
   // alert(val);
    // DON'T filter the technologies IF the supplied input is an empty string
    if (val.trim() !== '') {
      this.fanrankingdataSet = this.fanrankingdataSet.filter((item) => {
		return item.username.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.username.toLowerCase().indexOf(val.toLowerCase()) > -1; 
      })
    }
  }
}
