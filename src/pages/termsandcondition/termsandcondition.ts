import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FavteamPage } from '../favteam/favteam';

/**
 * Generated class for the TermsandconditionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-termsandcondition',
  templateUrl: 'termsandcondition.html',
})
export class TermsandconditionPage {
  public termsCondition : FormGroup;
  public messageApplied: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.termsCondition = this.formBuilder.group({
      messageApplied: ['false', Validators.requiredTrue],
    });
  }

  termsForm(){
    // console.log(this.termsCondition.value);
    this.navCtrl.push(FavteamPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsandconditionPage');
  }

  gotToSignUpPage()
    {
        this.navCtrl.push(RegisterPage);
    }

    termsform() {
      this.navCtrl.push(RegisterPage);
    }

}
