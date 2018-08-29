import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ExplorePage } from '../explore/explore';
import { SuperfanchallengePage } from '../superfanchallenge/superfanchallenge';
import { FanrankingPage } from '../fanranking/fanranking';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the FooterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-footer',
  templateUrl: 'footer.html',
})
export class FooterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FooterPage');
  }

  goToHomePage()
    {
        this.navCtrl.push(HomePage);
    }

    goToexploreScreen()
    {
        this.navCtrl.push(ExplorePage);
    }

    goToSuperfanchallengePage()
    {
        this.navCtrl.push(SuperfanchallengePage);
    }

    goTofanRankingPage()
    {
        this.navCtrl.push(FanrankingPage);
    }

    goToprofilePage()
    {
        this.navCtrl.push(ProfilePage);
    }

}
