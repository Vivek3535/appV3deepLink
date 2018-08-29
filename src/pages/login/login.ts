
import { Component } from '@angular/core';
import { AuthService  } from '../../providers/authservice/authservice';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
/*import { HomescreenPage } from '../homescreen/homescreen';*/
import { ForgotpassPage } from '../forgotpass/forgotpass';
import { RegisterPage } from '../register/register';
import { TermsandconditionPage } from '../termsandcondition/termsandcondition';
import { FavteamPage } from '../favteam/favteam';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  
  resposeData : any;
  userData = {"username":"", "password":""};

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public authService: AuthService, public alertCtrl: AlertController) {
  }

  backtomain()
      {
          this.navCtrl.push(HomePage);
      }

      forGotpassPage()
      {
          this.navCtrl.push(ForgotpassPage);
      }

      favtmPage()
      {
          this.navCtrl.push(FavteamPage);
      }
      
    gotToSignUpPage()
    {
        this.navCtrl.push(RegisterPage);
    }

    gotToTermsandconditionPage()
    {
        this.navCtrl.push(TermsandconditionPage);
    }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad Login');
  }

  login(){
   this.presentLoading();
   if(this.userData.username && this.userData.password){
    this.authService.postData(this.userData, "login").then((result) =>{
    this.resposeData = result;
    if(this.resposeData.userData){
      console.log(this.resposeData.userData);
     localStorage.setItem('userData', JSON.stringify(this.resposeData) )
    this.navCtrl.push(HomePage);
  }
  else{
    this.showAlert();
  }
    


    }, (err) => {
      //Connection failed message
    });
   }
   else{
    this.showAlert();
   }
  
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }



  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Incorrect!',
      subTitle: 'Email and Password',
      buttons: ['OK']
    });
    alert.present();
  }

}
