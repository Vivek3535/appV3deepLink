import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/authservice/authservice';
import { TermsandconditionPage } from '../termsandcondition/termsandcondition';
import { Login } from '../login/login';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  responseData : any;
  createSuccess = false;
  userData = {"password": "", "name": "", "username": "", "email": "","dob": "","city": ""};
constructor(private navCtrl: NavController, public authService:AuthService, public alertCtrl: AlertController) { } 
	backtomain()
    {
        this.navCtrl.push(Login);
    }
    
	signup(){
        this.authService.postData(this.userData,'signup').then((result) => {
         this.responseData = result;
         if(this.responseData.userData){
         console.log(this.responseData);
         localStorage.setItem('userData', JSON.stringify(this.responseData));
         this.navCtrl.push(TermsandconditionPage);
         }
         else{ this.showPopup("Error", "User already exists.");   }
       },  error => {
        this.showPopup("Error", error);
      });
    }
	 
	 showPopup(title, text) {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: text,
        buttons: [
          {
            text: 'OK',
            handler: data => {
              if (this.createSuccess) {
                this.navCtrl.popToRoot();
              }
            }
          }
        ]
      });
      alert.present(); 
    }
	
    loginPage()
    {
        this.navCtrl.push(Login);
    }

}