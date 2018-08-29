import { HttpModule } from '@angular/http';
import { AuthService } from '../providers/authservice/authservice';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer'; 
import { Geolocation } from '@ionic-native/geolocation';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MediaCapture } from '@ionic-native/media-capture';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ForgotpassPage } from '../pages/forgotpass/forgotpass';
import { ChangePasswordPage } from '../pages/changepassword/changepassword';
import { ProfilePage } from '../pages/profile/profile';
import { FavteamPage } from '../pages/favteam/favteam';
import { ProfileuploadPage } from '../pages/profileupload/profileupload';
import { CommunityPage } from '../pages/community/community';
import { SuperfanchallengePage } from '../pages/superfanchallenge/superfanchallenge';
import { DailycompeteviewPage } from '../pages/dailycompeteview/dailycompeteview';
import { UploadscreenPage } from '../pages/uploadscreen/uploadscreen';
import { SuperfanchallengebonusPage } from '../pages/superfanchallengebonus/superfanchallengebonus';
import { FriendprofilePage } from '../pages/friendprofile/friendprofile';
import { OtherfanentryviewPage } from '../pages/otherfanentryview/otherfanentryview';
import { FanrankingPage } from '../pages/fanranking/fanranking';
import { ExplorePage } from '../pages/explore/explore';
import { HeaderPage } from '../pages/header/header';
import { FooterPage } from '../pages/footer/footer';
import { CompetescreenPage } from '../pages/competescreen/competescreen';
import { TermsandconditionPage } from '../pages/termsandcondition/termsandcondition';
import { EditprofilePage } from '../pages/editprofile/editprofile'; 
import { NotificationPage } from '../pages/notification/notification'; 
import {Camera} from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Deeplinks } from '@ionic-native/deeplinks';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
		Login,
		RegisterPage,
		ForgotpassPage,
		ChangePasswordPage,
		ProfilePage,
		FavteamPage,
		ProfileuploadPage,
		CommunityPage,
		SuperfanchallengePage,
		DailycompeteviewPage,
		UploadscreenPage,
		SuperfanchallengebonusPage,
		FriendprofilePage,
		OtherfanentryviewPage,
		FanrankingPage,
		ExplorePage,
		HeaderPage,
		FooterPage,
		CompetescreenPage,
		TermsandconditionPage,
		EditprofilePage,
		NotificationPage
  ],
  imports: [
	HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
		Login,
		RegisterPage,
		ForgotpassPage,
		ChangePasswordPage,
		ProfilePage,
		FavteamPage,
		ProfileuploadPage,
		CommunityPage,
		SuperfanchallengePage,
		DailycompeteviewPage,
		UploadscreenPage,
		SuperfanchallengebonusPage,
		FriendprofilePage,
		OtherfanentryviewPage,
		FanrankingPage,
		ExplorePage,
		HeaderPage,
		FooterPage,
		CompetescreenPage,
		TermsandconditionPage,
		EditprofilePage,
		NotificationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    FileTransfer,
    FileTransferObject,
	Geolocation,
	SocialSharing,
	Deeplinks,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
	AuthService,
	MediaCapture
  ]
})
export class AppModule {}
