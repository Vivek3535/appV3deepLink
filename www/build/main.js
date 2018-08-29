webpackJsonp([0],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'http://sfc.dimensiongraphic.com/sfc-app/api/';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        //console.log('Hello AuthService Provider');
    }
    AuthService.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=authservice.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsandconditionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favteam_favteam__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TermsandconditionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsandconditionPage = /** @class */ (function () {
    function TermsandconditionPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.messageApplied = false;
        this.termsCondition = this.formBuilder.group({
            messageApplied: ['false', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].requiredTrue],
        });
    }
    TermsandconditionPage.prototype.termsForm = function () {
        // console.log(this.termsCondition.value);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__favteam_favteam__["a" /* FavteamPage */]);
    };
    TermsandconditionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsandconditionPage');
    };
    TermsandconditionPage.prototype.gotToSignUpPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    TermsandconditionPage.prototype.termsform = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    TermsandconditionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-termsandcondition',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/termsandcondition/termsandcondition.html"*/'<!--\n  Generated template for the TermsandconditionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n    <div class="headerbg">\n      <ion-row class="top-icons">\n        <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n            <!-- <button ion-button icon-left (click)="backtomain()"> \n              <ion-icon name="arrow-back"></ion-icon>\n                \n              </button> -->\n              \n        </ion-col>\n  \n        <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n          <p text-right (click)="gotToSignUpPage()">Create Account</p>\n        </ion-col>\n      </ion-row>\n      <img text-center src="assets/imgs/img_logo.png" alt="logo">\n    </div>\n   \n    <div class="graybg">\n  \n      <div class="reg-form termsPage">\n        <p>By creating an account, I agree to the Terms of Use and knowledge that I have read the Privacy Policy.</p>\n        <p>Please send me occasional information and offers about my favourite teams, sports and other information from:</p>\n        <p>SFC regarding selected third-party Partners</p>\n        <form [formGroup]="termsCondition" (ngSubmit)="termsForm()">\n            <ion-item>\n                <ion-label>SFC regarding selected third-party Partners</ion-label>\n                <ion-checkbox formControlName="messageApplied"></ion-checkbox>\n              </ion-item>\n            <button ion-button type="submit" [disabled]="!termsCondition.valid">Submit</button>\n          </form>\n      </div>\n    </div>\n  </ion-content>\n'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/termsandcondition/termsandcondition.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], TermsandconditionPage);
    return TermsandconditionPage;
}());

//# sourceMappingURL=termsandcondition.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileuploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ProfileuploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfileuploadPage = /** @class */ (function () {
    function ProfileuploadPage(navCtrl, navParams, loadingCtrl, authService, camera, transfer, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.camera = camera;
        this.transfer = transfer;
        this.toastCtrl = toastCtrl;
        this.userProfileData = {
            profilePicture: "",
            userName: "",
            userFollowers: "",
            userFollowersCount: "",
            userPosts: "",
            latestPost: "",
            userTeams: "",
            postMedia: "",
            postTags: "",
            postCheckedin: "",
            postText: "",
            postType: "",
        };
        this.userPostData = {
            user_id: "",
        };
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.getUserProfileData();
    }
    ProfileuploadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileuploadPage');
    };
    ProfileuploadPage.prototype.getUserProfileData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading Please Wait...'
        });
        loading.present();
        this.authService.postData(this.userPostData, "getuserprofiledata").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.profileData) {
                loading.dismiss();
                /*this.dataSet = this.resposeData.feedData;
                const dataLength = this.resposeData.feedData.length;
                this.userPostData.lastCreated = this.resposeData.feedData[
                  dataLength - 1
                ].created;*/
                _this.userProfileData.profilePicture = _this.resposeData.profileData.profilePicture;
                _this.userProfileData.userName = _this.resposeData.profileData.userName;
                _this.userProfileData.userFollowers = _this.resposeData.profileData.userFollowers;
                _this.userProfileData.userFollowersCount = _this.resposeData.profileData.userFollowersCount;
                _this.userProfileData.userPosts = _this.resposeData.profileData.userPosts;
                _this.userProfileData.latestPost = _this.resposeData.profileData.latestPost;
                _this.userProfileData.userTeams = _this.resposeData.profileData.userTeams;
            }
            else {
                console.log("No access");
                loading.dismiss();
            }
        }, function (err) {
            //Connection failed message
            loading.dismiss();
        });
    };
    /* Take user profile pic Starts */
    ProfileuploadPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            mediaType: this.camera.MediaType.PICTURE,
            /*sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,*/
            allowEdit: true,
        };
        /*let options = {
            quality: 100,
            mediaType: this.camera.MediaType.PICTURE,
        };*/
        this.camera.getPicture(options).then(function (imageData) {
            /*this.base64Image = "data:image/jpeg;base64," + imageData;
            this.photos.push(this.base64Image);
            this.photos.reverse();*/
            var loading = _this.loadingCtrl.create({
                content: 'Loading Please Wait...'
            });
            loading.present();
            /* Starts Preloader */
            /*this.presentToast(imageData);*/
            _this.imageFileName = imageData.substring(imageData.lastIndexOf('/') + 1);
            var fileTransfer = _this.transfer.create();
            var options11 = {
                fileKey: 'file',
                fileName: _this.imageFileName,
                params: { "userData": _this.userDetails.user_id },
                headers: {}
            };
            fileTransfer.upload(imageData, 'http://sfc.dimensiongraphic.com/sfc-app/api/profilePicUpload.php', options11, true).then(function (data) {
                /* success
                /alert("success"); */
                loading.dismiss();
                _this.resposeData = data;
                if (_this.resposeData.imageURL != "") {
                    _this.userProfileData.profilePicture = _this.resposeData.imageURL;
                    _this.presentToast("Image Uploaded successfully.");
                }
                else {
                    _this.presentToast("There was an error uploading the file, please try again!");
                }
            }, function (err) {
                // error
                //alert("error"+JSON.stringify(err));
                loading.present();
                _this.presentToast(JSON.stringify(err));
            });
        }, function (err) {
            console.log(err);
        });
    };
    /* Take user profile pic Ends */
    /* Upload user profile pic Starts */
    ProfileuploadPage.prototype.uploadPhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
        };
        /*let options = {
            quality: 100,
            mediaType: this.camera.MediaType.PICTURE,
        };*/
        this.camera.getPicture(options).then(function (imageData) {
            /*this.base64Image = "data:image/jpeg;base64," + imageData;
            this.photos.push(this.base64Image);
            this.photos.reverse();*/
            var loading = _this.loadingCtrl.create({
                content: 'Loading Please Wait...'
            });
            loading.present();
            /* Starts Preloader */
            /*this.presentToast(imageData);*/
            _this.imageFileName = imageData.substring(imageData.lastIndexOf('/') + 1);
            var fileTransfer = _this.transfer.create();
            var options11 = {
                fileKey: 'file',
                fileName: _this.imageFileName,
                params: { "userData": _this.userDetails.user_id },
                headers: {}
            };
            fileTransfer.upload(imageData, 'http://sfc.dimensiongraphic.com/sfc-app/api/profilePicUpload.php', options11, true).then(function (data) {
                /* success
                /alert("success"); */
                loading.dismiss();
                _this.resposeData = data;
                if (_this.resposeData.imageURL != "") {
                    _this.userProfileData.profilePicture = _this.resposeData.imageURL;
                    _this.presentToast("Image Uploaded successfully.");
                }
                else {
                    _this.presentToast("There was an error uploading the file, please try again!");
                }
            }, function (err) {
                // error
                //alert("error"+JSON.stringify(err));
                loading.present();
                _this.presentToast(JSON.stringify(err));
            });
        }, function (err) {
            console.log(err);
        });
    };
    /* Upload user profile pic Ends */
    ProfileuploadPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ProfileuploadPage.prototype.backtoprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
    };
    ProfileuploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profileupload',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/profileupload/profileupload.html"*/'<!--\n  Generated template for the ProfileuploadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n	<ion-header>\n	  <ion-navbar>\n		<div class="headerbg">\n		  <ion-row>\n			<ion-col col-9>\n			  <div class="logo">\n				<img src="assets/imgs/logo.png" alt="logo">\n			  </div>\n			</ion-col>\n			<ion-col col-3>\n			  <div class="right" (click)="backtoprofile()">Done</div>\n			</ion-col>\n		  </ion-row>\n		</div>\n	  </ion-navbar>\n	</ion-header>\n	\n	<ion-content>\n		<ion-grid>\n			<ion-row>\n				<ion-col col-12>\n					<img src="{{userProfileData.profilePicture}}" alt="profile_pic">\n				</ion-col>\n			</ion-row>\n		</ion-grid>	\n	</ion-content>\n	\n	<ion-footer>\n	  <ul>\n		<li (click)="uploadPhoto()">Library</li>\n		<li class="active">Video</li>\n		<li (click)="takePhoto()">Photo</li>\n	  </ul>\n	</ion-footer>'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/profileupload/profileupload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ProfileuploadPage);
    return ProfileuploadPage;
}());

//# sourceMappingURL=profileupload.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommunityPage = /** @class */ (function () {
    function CommunityPage(navCtrl, navParams, authService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.userPostData = {
            user_id: "",
            friend_id: ""
        };
        this.ionViewDidLoad();
        var data1 = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data1.userData;
        this.userPostData.user_id = this.userDetails.user_id;
    }
    CommunityPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CommunityPage');
        this.authService.postData(this.userPostData, "getallusers").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.data) {
                _this.users = _this.resposeData.data;
                _this.allusers = _this.resposeData.data;
            }
            else {
                console.log("No access");
            }
        }, function (err) {
            //Connection failed message
            console.log("No access");
        });
    };
    CommunityPage.prototype.addFriend = function (friendId) {
        var _this = this;
        this.userPostData.friend_id = friendId;
        Object.keys(this.users).forEach(function (h) {
            if (_this.users[h].id == friendId) {
                _this.users[h].checked = true;
            }
        });
        Object.keys(this.allusers).forEach(function (h) {
            if (_this.allusers[h].id == friendId) {
                _this.allusers[h].checked = true;
            }
        });
        this.authService.postData(this.userPostData, "sendfriendrequest").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.data == 1) {
                _this.presentToast("Request Sent successfully!");
            }
            else {
                _this.presentToast("Error occurs.");
            }
        }, function (err) {
            //Connection failed message
            console.log("No access");
        });
    };
    CommunityPage.prototype.showAddFriends = function () {
        var usersListEl = document.querySelector('.searchbarlist');
        var usersListBtnEl = document.querySelector('.usersListBtn');
        usersListEl.classList.remove('opacityclass');
        usersListBtnEl.classList.add('build');
    };
    CommunityPage.prototype.filterTechnologies = function (param) {
        //this.ionViewDidLoad();
        this.users = this.allusers;
        var val = param;
        // DON'T filter the technologies IF the supplied input is an empty string
        if (val.trim() !== '') {
            this.users = this.users.filter(function (item) {
                return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
    };
    CommunityPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    CommunityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-community',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/community/community.html"*/'<!--\n  Generated template for the CommunityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <div class="headerbg">\n      <ion-row>\n        <!-- <ion-col col-3>\n          <div icon-left>\n            <ion-icon name="arrow-back"></ion-icon>\n          </div>\n        </ion-col> -->\n        <ion-col col-12>\n          <div class="logo">\n            <img src="assets/imgs/logo.png" alt="logo">\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="searchbarbox">\n    <ion-searchbar type="text" (ionInput)="filterTechnologies($event.target.value)" placeholder="Search by Name and Team"></ion-searchbar>\n  </div>\n  <div class="usersListBtn">\n	<div class="pagetitle">Build your SFC Community!</div>\n	<div class="addfriends"><button ion-button (click)="showAddFriends()">Add Friends</button></div>\n  </div>	\n  <div class="searchbarlist opacityclass">\n    <ul>\n      <li *ngFor="let user of users">\n        <div class="left">\n          <img src="{{user.image}}" alt="{{user.name}}">\n          <span>{{user.name}}</span>\n        </div>\n        <div class="right" *ngIf="user.checked !=\'true\'" (click)="addFriend(user.id)"><ion-icon name="person-add"></ion-icon></div>\n      </li>\n    </ul>\n  </div>\n</ion-content>\n\n<page-footer></page-footer>'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/community/community.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], CommunityPage);
    return CommunityPage;
}());

//# sourceMappingURL=community.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadscreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the UploadscreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploadscreenPage = /** @class */ (function () {
    function UploadscreenPage(navCtrl, navParams, loadingCtrl, authService, camera, transfer, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.camera = camera;
        this.transfer = transfer;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.userProfileData = {
            profilePicture: "",
            userName: "",
            userFollowers: "",
            userFollowersCount: "",
            userPosts: "",
            latestPost: "",
            userTeams: "",
            postMedia: "",
            postTags: "",
            postCheckedin: "",
            postText: "",
            postType: "",
        };
        this.userPostData = {
            user_id: "",
        };
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.ChallengeType = navParams.get('postChallengeType');
        this.getUserProfileData();
    }
    UploadscreenPage_1 = UploadscreenPage;
    UploadscreenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploadscreenPage');
    };
    UploadscreenPage.prototype.getUserProfileData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading Please Wait...'
        });
        loading.present();
        this.authService.postData(this.userPostData, "getuserprofiledata").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.profileData) {
                loading.dismiss();
                /*this.dataSet = this.resposeData.feedData;
                const dataLength = this.resposeData.feedData.length;
                this.userPostData.lastCreated = this.resposeData.feedData[
                  dataLength - 1
                ].created;*/
                _this.userProfileData.profilePicture = _this.resposeData.profileData.profilePicture;
                _this.userProfileData.userName = _this.resposeData.profileData.userName;
                _this.userProfileData.userFollowers = _this.resposeData.profileData.userFollowers;
                _this.userProfileData.userFollowersCount = _this.resposeData.profileData.userFollowersCount;
                _this.userProfileData.userPosts = _this.resposeData.profileData.userPosts;
                _this.userProfileData.latestPost = _this.resposeData.profileData.latestPost;
                _this.userProfileData.userTeams = _this.resposeData.profileData.userTeams;
            }
            else {
                console.log("No access");
                loading.dismiss();
            }
        }, function (err) {
            //Connection failed message
            loading.dismiss();
        });
    };
    /* Take user profile pic Starts */
    UploadscreenPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            mediaType: this.camera.MediaType.PICTURE,
            /*sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,*/
            allowEdit: true,
        };
        /*let options = {
            quality: 100,
            mediaType: this.camera.MediaType.PICTURE,
        };*/
        this.camera.getPicture(options).then(function (imageData) {
            /*this.base64Image = "data:image/jpeg;base64," + imageData;
            this.photos.push(this.base64Image);
            this.photos.reverse();*/
            var loading = _this.loadingCtrl.create({
                content: 'Loading Please Wait...'
            });
            loading.present();
            /* Starts Preloader */
            /*this.presentToast(imageData);*/
            _this.imageFileName = imageData.substring(imageData.lastIndexOf('/') + 1);
            var fileTransfer = _this.transfer.create();
            var options11 = {
                fileKey: 'file',
                fileName: _this.imageFileName,
                params: { "userData": _this.userDetails.user_id },
                headers: {}
            };
            fileTransfer.upload(imageData, 'http://sfc.dimensiongraphic.com/sfc-app/api/profilePicUpload.php', options11, true).then(function (data) {
                /* success
                /alert("success"); */
                loading.dismiss();
                _this.resposeData = data;
                if (_this.resposeData.imageURL != "") {
                    _this.userProfileData.profilePicture = _this.resposeData.imageURL;
                    _this.navCtrl.push(UploadscreenPage_1);
                    _this.presentToast("Image Uploaded successfully.");
                }
                else {
                    _this.presentToast("There was an error uploading the file, please try again!");
                }
            }, function (err) {
                // error
                //alert("error"+JSON.stringify(err));
                loading.present();
                _this.presentToast(JSON.stringify(err));
            });
        }, function (err) {
            console.log(err);
        });
    };
    /* Take user profile pic Ends */
    /* Upload user profile pic Starts */
    UploadscreenPage.prototype.uploadPhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
        };
        /*let options = {
            quality: 100,
            mediaType: this.camera.MediaType.PICTURE,
        };*/
        this.camera.getPicture(options).then(function (imageData) {
            /*this.base64Image = "data:image/jpeg;base64," + imageData;
            this.photos.push(this.base64Image);
            this.photos.reverse();*/
            var loading = _this.loadingCtrl.create({
                content: 'Loading Please Wait...'
            });
            loading.present();
            /* Starts Preloader */
            /*this.presentToast(imageData);*/
            _this.imageFileName = imageData.substring(imageData.lastIndexOf('/') + 1);
            var fileTransfer = _this.transfer.create();
            var options11 = {
                fileKey: 'file',
                fileName: _this.imageFileName,
                params: { "userData": _this.userDetails.user_id },
                headers: {}
            };
            fileTransfer.upload(imageData, 'http://sfc.dimensiongraphic.com/sfc-app/api/profilePicUpload.php', options11, true).then(function (data) {
                /* success
                /alert("success"); */
                loading.dismiss();
                _this.resposeData = data;
                if (_this.resposeData.imageURL != "") {
                    _this.userProfileData.profilePicture = _this.resposeData.imageURL;
                    _this.navCtrl.push(UploadscreenPage_1);
                    _this.presentToast("Image Uploaded successfully.");
                }
                else {
                    _this.presentToast("There was an error uploading the file, please try again!");
                }
            }, function (err) {
                // error
                //alert("error"+JSON.stringify(err));
                loading.present();
                _this.presentToast(JSON.stringify(err));
            });
        }, function (err) {
            console.log(err);
        });
    };
    /* Upload user profile pic Ends */
    /* Create User Post Starts */
    // createPost(){
    // 	this.resposeData = {
    // 		user_id: this.userPostData.user_id,
    // 		postMedia : this.userProfileData.postMedia,
    // 		postText: this.userProfileData.postText,
    // 		postType: this.userProfileData.postType,
    // 		team_id: this.userDetails.team_id,
    // 		postChallengeType: this.ChallengeType,
    // 	};
    // 	console.log(this.resposeData);
    // 	let loading = this.loadingCtrl.create({
    // 		content: 'Please Wait...'
    // 	});
    // 	loading.present();
    // 	this.authService.postData(this.resposeData, "createpost").then(
    // 		result => {
    // 		  this.resposeData = result;
    // 		  if (this.resposeData.error == 0) {
    // 			loading.dismiss();
    // 			this.presentToast(this.resposeData.message);
    // 			this.navCtrl.push(ProfilePage);
    // 		  } else {
    // 			console.log("No access");
    // 			loading.dismiss();
    // 			this.presentToast(this.resposeData.message);
    // 		  }
    // 		},
    // 		err => {
    // 		  //Connection failed message
    // 		  loading.dismiss();
    // 		}
    // 	);
    // }
    /* Create User Post Ends */
    UploadscreenPage.prototype.postImageBtn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
    };
    UploadscreenPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    UploadscreenPage = UploadscreenPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-uploadscreen',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/uploadscreen/uploadscreen.html"*/'<!--\n  Generated template for the UploadscreenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <div class="headerbg">\n      <ion-row>\n        <ion-col col-9>\n          <div class="logo">\n            <img src="assets/imgs/logo.png" alt="logo">\n          </div>\n        </ion-col>\n        <ion-col col-3>\n          <div class="right" (click)="postImageBtn()">Post</div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- <caption>\n    <ion-textarea placeholder="Caption" [(ngModel)]="userProfileData.postText">{{this.userProfileData.postText}}</ion-textarea>\n  </caption> -->\n\n\n  <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n		  <div class="pagetitle">POST YOUR CHALLENGE!</div>\n		<div class="uploadscreen-img">	\n		 <img src="assets/imgs/profile-player.png" alt="profile_pic">\n		</div> \n        </ion-col>\n      </ion-row>\n    </ion-grid>	\n\n\n  <!-- <div class="challengevideo" *ngIf="userProfileData.postType!=\'\'">\n    <video *ngIf="userProfileData.postType == \'Video\'" controls >\n		<source src="{{userProfileData.postMedia}}#t=1" type="video/mp4">\n	</video>\n	<img *ngIf="userProfileData.postType == \'Image\'" src="{{userProfileData.postMedia}}">\n  </div>\n  <div class="cameraicon"></div> -->\n</ion-content>\n<ion-footer>\n  <ul>\n    <li (click)="uploadPhoto()">Library</li>\n    <li (click)="uploadPostvideo()" class="active">Video</li>\n    <li (click)="takePhoto()">Photo</li>\n  </ul>\n</ion-footer>'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/uploadscreen/uploadscreen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], UploadscreenPage);
    return UploadscreenPage;
    var UploadscreenPage_1;
}());

//# sourceMappingURL=uploadscreen.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FriendprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FriendprofilePage = /** @class */ (function () {
    function FriendprofilePage(navCtrl, navParams, loadingCtrl, authService, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.userPostData = {
            user_id: "",
        };
        this.userProfileData = {
            profilePicture: "",
            userName: "",
            userFriends: "",
            userFriendsCount: "",
            userPosts: "",
            latestPost: "",
            userTeams: "",
            postMedia: "",
            postTags: "",
            postCheckedin: "",
            postText: "",
            postType: "",
            getUserPointsRanks: "",
        };
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = navParams.get('userId');
        this.getUserProfileData();
    }
    FriendprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FriendprofilePage');
    };
    FriendprofilePage.prototype.getUserProfileData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading Please Wait...'
        });
        loading.present();
        this.authService.postData(this.userPostData, "getuserprofiledata").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.profileData) {
                loading.dismiss();
                /*this.dataSet = this.resposeData.feedData;
                const dataLength = this.resposeData.feedData.length;
                this.userPostData.lastCreated = this.resposeData.feedData[
                  dataLength - 1
                ].created;*/
                _this.userProfileData.profilePicture = _this.resposeData.profileData.profilePicture;
                _this.userProfileData.userName = _this.resposeData.profileData.userName;
                _this.userProfileData.userFriends = _this.resposeData.profileData.userFriends;
                _this.userProfileData.userFriendsCount = _this.resposeData.profileData.userFriendsCount;
                _this.userProfileData.userPosts = _this.resposeData.profileData.userPosts;
                _this.userProfileData.latestPost = _this.resposeData.profileData.latestPost;
                _this.userProfileData.userTeams = _this.resposeData.profileData.userTeams;
                _this.userProfileData.getUserPointsRanks = _this.resposeData.profileData.getUserPointsRanks;
            }
            else {
                console.log("No access");
                loading.dismiss();
            }
        }, function (err) {
            //Connection failed message
            loading.dismiss();
        });
    };
    FriendprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friendprofile',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/friendprofile/friendprofile.html"*/'<!--\n  Generated template for the FriendprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <div class="headerbg">\n        <ion-row>\n            <ion-col col-12>\n              <div class="logo">\n                <img src="assets/imgs/logo.png" alt="logo">\n              </div>\n            </ion-col>\n          </ion-row>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="new-profile-content">\n    <div class="new-profile">\n      <img src="{{userProfileData.profilePicture}}" alt="userpic">\n      <span>{{userProfileData.userName}}</span>\n    </div>\n    <div class="team-name">\n      <p>{{userProfileData.userTeams}}</p>\n    </div>\n  </div>\n  <div class="bio">\n    <!-- <p>Bio copy bio copy bio copy</p> -->\n    <div class="right"><button ion-button>Unfriend</button></div>\n  </div>\n  <div class="profile-frient-count">\n    <ul>\n      <li>\n        <a href="#">Friends\n          <span>{{userProfileData.userFriendsCount}}</span>\n        </a>\n      </li>\n      <li>\n        <a href="#">Points\n          <span>{{userProfileData.getUserPointsRanks.likecount}}</span>\n        </a>\n      </li>\n      <li>\n        <a href="#">Rank\n          <span>{{userProfileData.getUserPointsRanks.rank}}</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n  <div class="videophoto">\n      <ul>\n        <li *ngFor="let post of this.userProfileData.userPosts; let id = index">\n			<img *ngIf="post.type == \'Image\'" src="{{post.media}}">\n			<video *ngIf="post.type == \'Video\'" controls >\n				<source src="{{post.media}}#t=1" type="video/mp4">\n			</video>\n			\n        </li>\n      </ul>\n    </div>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ul>\n      <li>\n        <a href="#">\n          <img src="assets/imgs/home.png" alt="home">\n        </a>\n      </li>\n      <li>\n        <a href="#">\n          <img src="assets/imgs/explore.png" alt="explore">\n        </a>\n      </li>\n      <li class="footer-logo">\n        <a href="#">\n          <img src="assets/imgs/footer-icon.png" alt="footer-icon" width="60">\n        </a>\n      </li>\n      <li>\n        <a href="#">\n          <img src="assets/imgs/leader-board.png" alt="leader-board">\n        </a>\n      </li>\n      <li>\n        <a href="#">\n          <img src="assets/imgs/profile.png" alt="profile">\n        </a>\n      </li>\n    </ul>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/friendprofile/friendprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FriendprofilePage);
    return FriendprofilePage;
}());

//# sourceMappingURL=friendprofile.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetescreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uploadscreen_uploadscreen__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CompetescreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompetescreenPage = /** @class */ (function () {
    function CompetescreenPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CompetescreenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompetescreenPage');
    };
    CompetescreenPage.prototype.goToUploadscreenPage = function (ChallengeType) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__uploadscreen_uploadscreen__["a" /* UploadscreenPage */], { postChallengeType: ChallengeType });
    };
    CompetescreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-competescreen',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/competescreen/competescreen.html"*/'<!--\n  Generated template for the CompetescreenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <div class="headerbg">\n          <ion-row>\n              <ion-col col-12>\n                <div class="logo">\n                  <img src="assets/imgs/logo.png" alt="logo">\n                </div>\n              </ion-col>\n            </ion-row>\n      </div>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n    <div class="competescreen-contant">\n        <div class="pagetitle">Bonus Challenge</div>\n\n        <div class="competescreen-cup">\n            <img src="assets/imgs/compete-screen-cup.jpg" alt="compete-screen-cup">\n            \n            <div class="mode-text">\n              <h5>Mood Challenge</h5>\n              <p>Photo/Video of your biggest regret from the weekend.Why do you regret the photo/video that you are abour to post?\n                  How to win: Vote</p>\n                 <div class="mode-btn">\n                  <button ion-button (click)="goToUploadscreenPage(\'bonus\')">Submit Entry</button>   \n                </div>\n            </div>\n        </div>\n\n        <div class="compete-text">\n            <h1>Post. <span>Compete.</span>  <span>Win!</span></h1>\n        </div>\n\n\n    </div>    \n  </ion-content>\n\n<page-footer></page-footer>\n'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/competescreen/competescreen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CompetescreenPage);
    return CompetescreenPage;
}());

//# sourceMappingURL=competescreen.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperfanchallengebonusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__competescreen_competescreen__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__otherfanentryview_otherfanentryview__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SuperfanchallengebonusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SuperfanchallengebonusPage = /** @class */ (function () {
    function SuperfanchallengebonusPage(navCtrl, navParams, authService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.userPostData = {
            user_id: "",
            challenge_type: "superfan",
        };
        this.countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.ionViewDidLoad();
    }
    SuperfanchallengebonusPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SuperfanchallengebonusPage');
        setInterval(function () {
            _this.now = new Date().getTime();
            // Find the distance between now and the count down date
            _this.distance = _this.countDownDate - _this.now;
            // Time calculations for days, hours, minutes and seconds
            _this.days = Math.floor(_this.distance / (1000 * 60 * 60 * 24));
            _this.hours = Math.floor((_this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            _this.minutes = Math.floor((_this.distance % (1000 * 60 * 60)) / (1000 * 60));
            _this.seconds = Math.floor((_this.distance % (1000 * 60)) / 1000);
            // Display the result in the element with id="demo"
            _this.timeLeft = _this.days + "D : " + _this.hours + "H : "
                + _this.minutes + "M : " + _this.seconds + "S ";
            // If the count down is finished, write some text
            if (_this.distance < 0) {
                //clearInterval(x);
                _this.timeLeft = "EXPIRED";
            }
        }, 1000);
        this.authService.postData(this.userPostData, "getchallengeposts").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.data) {
                _this.posts = _this.resposeData.data;
                console.log(_this.posts);
            }
            else {
                console.log("No access");
            }
        }, function (err) {
            //Connection failed message
            console.log("No access");
        });
    };
    SuperfanchallengebonusPage.prototype.goToOtherfanentryviewPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__otherfanentryview_otherfanentryview__["a" /* OtherfanentryviewPage */], { postId: id });
    };
    SuperfanchallengebonusPage.prototype.goToCompetescreenPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__competescreen_competescreen__["a" /* CompetescreenPage */]);
    };
    SuperfanchallengebonusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-superfanchallengebonus',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/superfanchallengebonus/superfanchallengebonus.html"*/'<!--\n  Generated template for the SuperfanchallengebonusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <div class="headerbg">\n        <ion-row>\n            <ion-col col-12>\n            <div class="logo">\n              <img src="assets/imgs/logo.png" alt="logo">\n            </div>\n            </ion-col>\n          </ion-row>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="pagetitle">SFC Conutdown</div>\n  <div class="conutdown"><p>{{timeLeft}}</p></div> \n  <div class="bonuschallenge">\n    <div class="pagetitle">Bonus Challenge</div>\n    <div class="viewchallenge">\n      <div class="left">\n        <img src="{{userDetails.profilePicture}}" alt="User">\n        <span>{{userDetails.team_name}}</span>\n      </div>\n      <div class="right">\n        <button ion-button (click)="goToCompetescreenPage()">Play Now!</button>\n      </div>\n    </div>\n  </div>\n  <div class="pagetitle">ENTRIES</div>\n  <div class="videophoto">\n    <ul>\n      <li *ngFor="let post of posts; let id = index">\n        <div><video *ngIf="post.type == \'Video\'" controls >\n			<source src="{{post.media}}#t=1" type="video/mp4">\n		</video>\n    <img *ngIf="post.type == \'Image\'" src="{{post.media}}">\n  </div>\n  <div class="click-layer" (click)="goToOtherfanentryviewPage(post.id)">\n  </div>\n      </li>\n    </ul>\n  </div>\n</ion-content>\n\n<page-footer></page-footer>'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/superfanchallengebonus/superfanchallengebonus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], SuperfanchallengebonusPage);
    return SuperfanchallengebonusPage;
}());

//# sourceMappingURL=superfanchallengebonus.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FanrankingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FanrankingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FanrankingPage = /** @class */ (function () {
    function FanrankingPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.userPostData = {
            user_id: "",
        };
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.getfanrankingedata();
    }
    FanrankingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FanrankingPage');
    };
    FanrankingPage.prototype.getfanrankingedata = function () {
        var _this = this;
        this.authService.postData(this.userPostData, "getfanrankingedata").then(function (result) {
            _this.resposePostData = result;
            if (_this.resposePostData.fanrankingData) {
                _this.fanrankingdataSet = _this.resposePostData.fanrankingData;
                _this.fanrankingList = _this.resposePostData.fanrankingData;
                console.log(_this.fanrankingdataSet);
            }
            else {
                //this.photos = "No Post Found!";
                console.log("No access");
            }
        }, function (err) {
            //Connection failed message
            console.log("out");
        });
    };
    FanrankingPage.prototype.filterTechnologies = function (param) {
        this.fanrankingdataSet = this.fanrankingList;
        var val = param;
        // alert(val);
        // DON'T filter the technologies IF the supplied input is an empty string
        if (val.trim() !== '') {
            this.fanrankingdataSet = this.fanrankingdataSet.filter(function (item) {
                return item.username.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.username.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
    };
    FanrankingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fanranking',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/fanranking/fanranking.html"*/'<!--\n  Generated template for the FanrankingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <div class="headerbg">\n        <ion-row>\n            <ion-col col-12>\n              <div class="logo">\n                <img src="assets/imgs/logo.png" alt="logo">\n              </div>\n            </ion-col>\n          </ion-row>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="fanranking-contant">\n     <div class="fanranking-search">\n        <ion-searchbar (ionInput)="filterTechnologies($event.target.value)" placeholder="Search for specific player"></ion-searchbar>\n     </div>\n    <div class="pagetitle">\n      <h2>FAN RANKING</h2>\n      SFC Overall Rankings</div>\n   </div>\n   <div class="ranking-table">\n      <div class="ranking-table-row" *ngFor="let fanrankingdatalist of fanrankingdataSet">\n        <ion-row>\n            <ion-col col-3><div class="rank-left"><h1>#{{fanrankingdatalist.rank}}</h1><p>{{fanrankingdatalist.likecount}}<span>Points</span></p></div></ion-col>\n            <ion-col col-6><div class="rank-mid">\n              <div class="rank-user"><img src="{{fanrankingdatalist.profilePicture}}" alt="{{fanrankingdatalist.username}}"></div>\n            <p>{{fanrankingdatalist.username}}</p>\n            </div>\n          </ion-col>\n            <ion-col col-3><div class="rank-right"><p>{{fanrankingdatalist.team_name}}</p></div></ion-col>\n        </ion-row>\n      </div>\n\n   </div>\n</ion-content>\n\n<page-footer></page-footer>\n'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/fanranking/fanranking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthService */]])
    ], FanrankingPage);
    return FanrankingPage;
}());

//# sourceMappingURL=fanranking.js.map

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profileupload_profileupload__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilePage = /** @class */ (function () {
    //createSuccess = false;
    function EditprofilePage(navCtrl, navParams, authService, loadingCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.userPostData = {
            user_id: "",
        };
        this.selectedTeamData = {
            team_id: "",
            team_name: "",
        };
        this.userProfileData = {
            userName: "",
            city: "",
            userTeams: "",
            dob: "",
            email: "",
            profilePicture: "",
            phone: "",
            team_id: "",
        };
        var data = JSON.parse(localStorage.getItem('userData'));
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
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
    };
    EditprofilePage.prototype.editProfileCancleBtn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
    };
    EditprofilePage.prototype.goToProfileUploadPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profileupload_profileupload__["a" /* ProfileuploadPage */]);
    };
    EditprofilePage.prototype.updateuserprofile = function () {
        var _this = this;
        this.authService.postData(this.userProfileData, 'updateuserprofile').then(function (result) {
            _this.responseData = result;
            if (_this.responseData.userData) {
                //console.log(this.responseData);
                localStorage.setItem('userData', JSON.stringify(_this.responseData));
                _this.presentToast("Profile updated successfully.");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
            }
            else {
                _this.presentToast("Error occurs, Please try again.");
            }
        }, function (error) {
            _this.presentToast("Error occurs, Please try again.");
        });
    };
    EditprofilePage.prototype.changeTeam = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading Please Wait...'
        });
        loading.present();
        this.authService.postData(this.userPostData, 'getallteams').then(function (result) {
            _this.responseData = result;
            if (_this.responseData.data) {
                loading.dismiss();
                console.log(_this.responseData.data);
                var alert_1 = _this.alertCtrl.create();
                alert_1.setTitle('Change Team');
                alert_1.setMessage('Select team to change your current team.');
                var teamsData_1 = _this.responseData.data;
                Object.keys(teamsData_1).forEach(function (key) {
                    alert_1.addInput({
                        type: 'radio',
                        label: teamsData_1[key].team_name,
                        value: teamsData_1[key],
                    });
                });
                alert_1.addButton('Cancel');
                alert_1.addButton({
                    text: 'Select',
                    handler: function (data) {
                        if (data) {
                            _this.selectedTeamData.team_id = data.id;
                            _this.selectedTeamData.team_name = data.team_name;
                            _this.userProfileData.userTeams = data.team_name;
                            _this.userProfileData.team_id = data.id;
                        }
                        else {
                            _this.presentToast("Please select team.");
                        }
                    }
                });
                alert_1.present();
            }
            else {
                loading.dismiss();
                _this.presentToast("Error occurs.");
            }
        }, function (error) {
            loading.dismiss();
            _this.presentToast("Error occurs.");
        });
    };
    EditprofilePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    EditprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editprofile',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/editprofile/editprofile.html"*/'<!--\n  Generated template for the EditprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <div class="headerbg">\n        <ion-row>\n          <ion-col col-3>\n            <div icon-left>\n                <button ion-button (click)="editProfileCancleBtn()">Cancel</button>\n            </div>\n          </ion-col>\n          <ion-col col-6>\n            <div class="logo">\n              <img src="assets/imgs/logo.png" alt="logo">\n            </div>\n          </ion-col>\n          <ion-col col-3>\n              <div class="header-right">\n              <button ion-button (click)="updateuserprofile()">Done</button>\n              </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  \n  <ion-content>\n    <div class="edit-profile-contant">\n     <div class="change-image-sec">\n       <p>Edit Profile</p>\n       <div class="change-img">\n          <img (click)="goToProfileUploadPage()" src="{{userProfileData.profilePicture}}" alt="{{userProfileData.userName}}">\n       </div>\n       <span (click)="goToProfileUploadPage()">Change Profile Photo</span>\n     </div>\n    \n    <div class="change-profile-form">\n       <ion-list>\n          <ion-item>\n            <ion-label>Name :</ion-label>\n            <ion-input type="text" [(ngModel)]="userProfileData.userName" value="{{userProfileData.userName}}" name="name"></ion-input>\n          </ion-item>\n  \n          <!-- <ion-item>\n            <ion-label>Bio :</ion-label>\n            <ion-input type="text" value="" name="Bio"></ion-input>\n          </ion-item> -->\n  \n          <ion-item>\n              <ion-label>Your Team :</ion-label>\n              <ion-input type="text" (click)="changeTeam()" value="{{selectedTeamData.team_name}}" name="team" readonly></ion-input>\n          </ion-item>\n  \n          <h4>Private Information</h4>\n  \n          <ion-item>\n              <ion-label>Email :</ion-label>\n              <ion-input type="email" value="{{userProfileData.email}}" name="email" readonly></ion-input>\n          </ion-item>\n  \n          <!-- <ion-item>\n              <ion-label>Phone :</ion-label>\n              <ion-input type="text" [(ngModel)]="userProfileData.phone" value="{{userProfileData.phone}}" name="phone" ></ion-input>\n          </ion-item> -->\n		  \n		  <ion-item>\n              <ion-label>City :</ion-label>\n              <ion-input type="text" [(ngModel)]="userProfileData.city" value="{{userProfileData.city}}" name="city" ></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>DOB :</ion-label>\n            <ion-input type="text" [(ngModel)]="userProfileData.dob" value="{{userProfileData.dob}}" name="dob" ></ion-input>\n        </ion-item>\n  \n        </ion-list>\n    </div>\n  \n    </div>\n  </ion-content>\n  \n  <page-footer></page-footer>'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/editprofile/editprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailycompeteviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uploadscreen_uploadscreen__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DailycompeteviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DailycompeteviewPage = /** @class */ (function () {
    function DailycompeteviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DailycompeteviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DailycompeteviewPage');
    };
    DailycompeteviewPage.prototype.goToUploadscreenPage = function (ChallengeType) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__uploadscreen_uploadscreen__["a" /* UploadscreenPage */], { postChallengeType: ChallengeType });
    };
    DailycompeteviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dailycompeteview',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/dailycompeteview/dailycompeteview.html"*/'<!--\n  Generated template for the DailycompeteviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <div class="headerbg">\n        <ion-row>\n            <ion-col col-12>\n              <div class="logo">\n                <img src="assets/imgs/logo.png" alt="logo">\n              </div>\n            </ion-col>\n          </ion-row>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="competescreen-contant">\n        <div class="pagetitle">#1 Super Fan Challenge!</div>\n\n        <div class="competescreen-cup">\n            <img src="assets/imgs/compete-screen-cup.jpg" alt="compete-screen-cup">\n            \n            <div class="mode-text">\n              \n              <p>Photo/Video of your biggest regret from the weekend.Why do you regret the photo/video that you are abour to post?\n                  How to win: Vote</p>\n                 <div class="mode-btn">\n                  <button ion-button (click)="goToUploadscreenPage(\'superfan\')">Submit Entry</button>   \n                </div>\n            </div>\n        </div>\n\n        <div class="compete-text">\n            <h1>Post. <span>Compete.</span>  <span>Win!</span></h1>\n        </div>\n\n\n    </div>    \n</ion-content>\n\n<page-footer></page-footer>'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/dailycompeteview/dailycompeteview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DailycompeteviewPage);
    return DailycompeteviewPage;
}());

//# sourceMappingURL=dailycompeteview.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <div class="headerbg">\n      <ion-row>\n        <ion-col col-12>\n          <div class="logo">\n            <img src="assets/imgs/logo.png" alt="logo">\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n  <div class="notification-contant">\n   <ion-row>\n    <ion-col col-12>\n    <div class="request-notification">\n         <h5>You have a friend request!</h5>\n         <div class="req-row">\n          <div class="req-left">\n            <img src="assets/imgs/profile-player.png" alt="profile-player">\n            <span>Glenn</span>\n          </div>\n          <div class="req-right">\n            <button ion-button>Apprope</button>   \n            <button ion-button>Decline</button>\n          </div>\n        </div>\n\n        <div class="req-row">\n            <div class="req-left">\n              <img src="assets/imgs/profile-player.png" alt="profile-player">\n              <span>Glenn</span>\n            </div>\n            <div class="req-right">\n              <button ion-button>Apprope</button>   \n              <button ion-button>Decline</button>\n            </div>\n          </div>\n      </div>\n      </ion-col>\n      </ion-row>\n      <hr>\n      \n      <ion-row>\n        <ion-col col-12>\n        <div class="timeline-notification">\n          <h5>Timeline</h5>\n           <div class="req-row">\n              <div class="req-left">\n                <img src="assets/imgs/profile-player.png" alt="profile-player">\n                <span>Ms Behjon posted on your timeline!</span>\n              </div>\n            </div>\n\n            <div class="req-row">\n                <div class="req-left">\n                  <img src="assets/imgs/profile-player.png" alt="profile-player">\n                  <span>Mr Gole challange your post!</span>\n                </div>\n              </div>\n\n              <div class="req-row">\n                  <div class="req-left">\n                    <img src="assets/imgs/profile-player.png" alt="profile-player">\n                    <span>Mr Rox accept your friend request!</span>\n                  </div>\n              </div>\n        </div>\n      </ion-col>\n   </ion-row>\n\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ul> \n      <li><img src="assets/imgs/home.png" alt="home"></li>\n     <li><img src="assets/imgs/explore.png" alt="explore"></li> \n     <li class="footer-logo"> <img src="assets/imgs/footer-icon.png" alt="footer-icon" width="60"></li>\n      <li><img src="assets/imgs/leader-board.png" alt="leader-board"></li>\n      <li><img src="assets/imgs/profile.png" alt="profile"></li>\n    </ul>  \n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authservice_authservice__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ForgotpassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpassPage = /** @class */ (function () {
    function ForgotpassPage(navCtrl, navParams, authService, alertCtrl, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.userData = { "useremail": "" };
    }
    ForgotpassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpassPage');
    };
    ForgotpassPage.prototype.backmain = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
    };
    ForgotpassPage.prototype.forgotpass = function () {
        var _this = this;
        this.presentLoading();
        if (this.userData.useremail) {
            this.authService.postData(this.userData, "forgotpass").then(function (result) {
                _this.resposeData = result;
                if (_this.resposeData.message) {
                    _this.presentToast("New password successfully sent to you on mail.");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
                }
                else {
                    _this.showAlert();
                }
            }, function (err) {
                //Connection failed message
            });
        }
        else {
            this.showAlert();
        }
    };
    ForgotpassPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    };
    ForgotpassPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Incorrect!',
            subTitle: 'Username and Password',
            buttons: ['OK']
        });
        alert.present();
    };
    ForgotpassPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ForgotpassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotpass',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/forgotpass/forgotpass.html"*/'<ion-content class="forget-bg">\n  <div class="headerbg">\n    <ion-row class="top-icons">\n      <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n        <button ion-button icon-left (click) = "backmain()">\n          <ion-icon name="arrow-back"></ion-icon>\n          \n        </button>\n\n      </ion-col>\n\n      <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n        <p text-right>Forgot Password</p>\n      </ion-col>\n    </ion-row>\n    <img text-center src="assets/imgs/img_logo.png" alt="logo">\n  </div>\n  <div class="graybg" padding-horizontal>\n    <div class="forget-form">\n      <ion-list>\n        <h1 text-center>Oh no,</h1>\n        <h3>You forgot your password</h3>\n        <p text-center>No worries, enter your email and\n          <br>we will send you a reset</p>\n\n          <ion-item>\n              <ion-input type="email"  value="" placeholder="E-mail" [(ngModel)]="userData.useremail"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="email"  value="" placeholder="Confirm e-mail" [(ngModel)]="userData.useremail"></ion-input>\n            </ion-item>\n\n        <!-- <ion-item>\n          <ion-input type="email" placeholder="Confirm E-mail"></ion-input>\n        </ion-item> -->\n      </ion-list>\n    </div>\n    <div text-center>\n      <button ion-button round class="forget-btn" (click)="forgotpass()">Reset</button>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/forgotpass/forgotpass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_authservice_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ForgotpassPage);
    return ForgotpassPage;
}());

//# sourceMappingURL=forgotpass.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExplorePage = /** @class */ (function () {
    function ExplorePage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.explore = "exploresfc";
        this.userPostData = {
            user_id: "",
            team_id: "",
            game_id: "",
            team_name: "",
        };
        var data = JSON.parse(localStorage.getItem('userData'));
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
    ExplorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExploreScreenPage');
    };
    ExplorePage.prototype.getexplorepostdata = function () {
        var _this = this;
        this.authService.postData(this.userPostData, "getexplorepostdata").then(function (result) {
            _this.resposePostData = result;
            if (_this.resposePostData.exploreData) {
                _this.exploredataSet = _this.resposePostData.exploreData;
            }
            else {
                console.log("No access");
            }
        }, function (err) {
            //Connection failed message
            console.log("out");
        });
    };
    ExplorePage.prototype.getteampostdata = function () {
        var _this = this;
        this.authService.postData(this.userPostData, "getteampostdata").then(function (result) {
            _this.resposePostData = result;
            if (_this.resposePostData.teamData) {
                _this.teamdataSet = _this.resposePostData.teamData;
            }
            else {
                console.log("No access");
            }
        }, function (err) {
            //Connection failed message
            console.log("out");
        });
    };
    ExplorePage.prototype.getteamsdata = function (id, team_name) {
        this.team_id = id;
        this.team_name = team_name;
        this.userPostData.team_id = this.team_id;
        this.userPostData.team_name = this.team_name;
        this.getexplorepostdata();
    };
    ExplorePage.prototype.getgamepostdata = function () {
        var _this = this;
        this.authService.postData(this.userPostData, "getgamepostdata").then(function (result) {
            _this.resposePostData = result;
            if (_this.resposePostData.gameData) {
                _this.gamedataSet = _this.resposePostData.gameData;
                console.log(_this.gamedataSet);
            }
            else {
                console.log("No access");
            }
        }, function (err) {
            //Connection failed message
            console.log("out");
        });
    };
    ExplorePage.prototype.getgamesdata = function (id) {
        this.game_id = id;
        this.userPostData.game_id = this.game_id;
        this.getexploregamepostdata();
    };
    ExplorePage.prototype.getexploregamepostdata = function () {
        var _this = this;
        this.authService.postData(this.userPostData, "getexploregamepostdata").then(function (result) {
            _this.resposePostData = result;
            if (_this.resposePostData.exploregameData) {
                _this.exploregamedataSet = _this.resposePostData.exploregameData;
            }
            else {
                //this.photos = "No Post Found!";
                console.log("No access");
            }
        }, function (err) {
            //Connection failed message
            console.log("out");
        });
    };
    ExplorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-explore',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/explore/explore.html"*/'<!--\n  Generated template for the ExplorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <div class="headerbg">\n        <ion-row>\n          <ion-col col-12>\n            <div class="logo">\n              <img src="assets/imgs/logo.png" alt="logo">\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n    <div class="explorepage">\n        <ion-segment [(ngModel)]="explore">\n          <ion-segment-button value="exploresfc">\n            SFC\n          </ion-segment-button>\n          <ion-segment-button value="explorebonus">\n            BONUS\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n      <div [ngSwitch]="explore">\n        <ion-list *ngSwitchCase="\'exploresfc\'">\n          <div class="challengelist exter">\n            <ul>\n                <ion-scroll scrollX="true" class="item_scroll_auto" style="height:112px" >\n                    <ion-row nowrap class="headerChip">\n              <button *ngFor="let teamdatalist of teamdataSet" ion-button (click)="getteamsdata(teamdatalist.id,teamdatalist.team_name)">\n                <img *ngIf="teamdatalist.team_name == \'For You\'" src="assets/imgs/teams2.png" alt="teams">\n                <p>{{teamdatalist.team_name}}</p>\n              </button>\n            </ion-row>\n          </ion-scroll>\n            </ul>\n          </div>\n          <div class="videophoto">\n            <ul>\n    \n              <li *ngFor="let exploredatalist of exploredataSet">\n                <video controls *ngIf="exploredatalist.type == \'Video\'">\n                  <source src="{{exploredatalist.media}}" type="video/mp4">\n                </video>\n                <img *ngIf="exploredatalist.type == \'Image\'" src="{{exploredatalist.media}}">\n              </li>\n    \n            </ul>\n          </div>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'explorebonus\'">\n            <div class="challengelist exter">\n                <ul>\n                    <ion-scroll scrollX="true" class="item_scroll_auto" style="height:112px" >\n                        <ion-row nowrap class="headerChip">\n                  <button *ngFor="let gamedatalist of gamedataSet" ion-button (click)="getgamesdata(gamedatalist.id)">\n                    <img *ngIf="gamedatalist.game_name == \'For You\'" src="assets/imgs/teams2.png" alt="teams">\n                    <p>{{gamedatalist.game_name}}</p>\n                  </button>\n                </ion-row>\n              </ion-scroll>\n                </ul>\n              </div>\n          <div class="videophoto">\n            <ul>\n                <li *ngFor="let exploregamedatalist of exploregamedataSet">\n                    <video controls *ngIf="exploregamedatalist.type == \'Video\'">\n                      <source src="{{exploregamedatalist.media}}" type="video/mp4">\n                    </video>\n                    <img *ngIf="exploregamedatalist.type == \'Image\'" src="{{exploregamedatalist.media}}">\n                  </li>\n            </ul>\n          </div>\n        </ion-list>\n      </div>\n</ion-content>\n\n<page-footer></page-footer>'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/explore/explore.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthService */]])
    ], ExplorePage);
    return ExplorePage;
}());

//# sourceMappingURL=explore.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(245);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authservice_authservice__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_media_capture__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_forgotpass_forgotpass__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_changepassword_changepassword__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_favteam_favteam__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profileupload_profileupload__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_community_community__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_superfanchallenge_superfanchallenge__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_dailycompeteview_dailycompeteview__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_uploadscreen_uploadscreen__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_superfanchallengebonus_superfanchallengebonus__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_friendprofile_friendprofile__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_otherfanentryview_otherfanentryview__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_fanranking_fanranking__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_explore_explore__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_header_header__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_footer_footer__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_competescreen_competescreen__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_termsandcondition_termsandcondition__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_editprofile_editprofile__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_notification_notification__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_social_sharing__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_deeplinks__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_forgotpass_forgotpass__["a" /* ForgotpassPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_changepassword_changepassword__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_favteam_favteam__["a" /* FavteamPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_profileupload_profileupload__["a" /* ProfileuploadPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_community_community__["a" /* CommunityPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_superfanchallenge_superfanchallenge__["a" /* SuperfanchallengePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_dailycompeteview_dailycompeteview__["a" /* DailycompeteviewPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_uploadscreen_uploadscreen__["a" /* UploadscreenPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_superfanchallengebonus_superfanchallengebonus__["a" /* SuperfanchallengebonusPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_friendprofile_friendprofile__["a" /* FriendprofilePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_otherfanentryview_otherfanentryview__["a" /* OtherfanentryviewPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_fanranking_fanranking__["a" /* FanrankingPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_explore_explore__["a" /* ExplorePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_header_header__["a" /* HeaderPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_footer_footer__["a" /* FooterPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_competescreen_competescreen__["a" /* CompetescreenPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_termsandcondition_termsandcondition__["a" /* TermsandconditionPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_notification_notification__["a" /* NotificationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_forgotpass_forgotpass__["a" /* ForgotpassPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_changepassword_changepassword__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_favteam_favteam__["a" /* FavteamPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_profileupload_profileupload__["a" /* ProfileuploadPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_community_community__["a" /* CommunityPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_superfanchallenge_superfanchallenge__["a" /* SuperfanchallengePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_dailycompeteview_dailycompeteview__["a" /* DailycompeteviewPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_uploadscreen_uploadscreen__["a" /* UploadscreenPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_superfanchallengebonus_superfanchallengebonus__["a" /* SuperfanchallengebonusPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_friendprofile_friendprofile__["a" /* FriendprofilePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_otherfanentryview_otherfanentryview__["a" /* OtherfanentryviewPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_fanranking_fanranking__["a" /* FanrankingPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_explore_explore__["a" /* ExplorePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_header_header__["a" /* HeaderPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_footer_footer__["a" /* FooterPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_competescreen_competescreen__["a" /* CompetescreenPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_termsandcondition_termsandcondition__["a" /* TermsandconditionPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_notification_notification__["a" /* NotificationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_deeplinks__["a" /* Deeplinks */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_1__providers_authservice_authservice__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_media_capture__["a" /* MediaCapture */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_deeplinks__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_otherfanentryview_otherfanentryview__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, deeplinks) {
        var _this = this;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.deeplinks = deeplinks;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            //this is the code who responds to the app deeplinks
            //Deeplinks if from Ionic Native
            _this.deeplinks.routeWithNavController(_this.navChild, {
                '/home': __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                '/post/:postId': __WEBPACK_IMPORTED_MODULE_6__pages_otherfanentryview_otherfanentryview__["a" /* OtherfanentryviewPage */]
            }).subscribe(function (match) {
                console.log('Successfully routed', match);
            }, function (nomatch) {
                console.log('Unmatched Route', nomatch);
            });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "navChild", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_deeplinks__["a" /* Deeplinks */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authservice_authservice__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(navCtrl, navParams, authService, alertCtrl, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.userData = { "useremail": "", "password": "", "newpassword": "" };
        this.currentUser = localStorage.getItem('userData');
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePasswordPage');
    };
    ChangePasswordPage.prototype.changepass = function () {
        var _this = this;
        this.presentLoading();
        if (this.userData.useremail && this.userData.password && this.userData.newpassword && (this.userData.password != this.userData.newpassword)) {
            this.authService.postData(this.userData, "changepassword").then(function (result) {
                _this.resposeData = result;
                if (_this.resposeData.userData) {
                    console.log(_this.resposeData.userData);
                    /*localStorage.setItem('userData', JSON.stringify(this.resposeData) )*/
                    _this.presentToast("Password Updated successfully.");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                }
                else {
                    _this.showAlert();
                }
            }, function (err) {
                //Connection failed message
            });
        }
        else {
            this.showAlert();
        }
    };
    ChangePasswordPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    };
    ChangePasswordPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Incorrect!',
            subTitle: 'Username and Password',
            buttons: ['OK']
        });
        alert.present();
    };
    ChangePasswordPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-password',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/changepassword/changepassword.html"*/'<ion-content class="forget-bg">\n    <div class="headerbg">\n      <ion-row class="top-icons">\n        <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n          <button ion-button icon-left (click) = "backmain()">\n            <ion-icon name="arrow-back"></ion-icon>\n            Back\n          </button>\n  \n        </ion-col>\n  \n        <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n          <p text-right>Reset Password</p>\n        </ion-col>\n      </ion-row>\n      <img text-center src="assets/imgs/img_logo.png" alt="logo">\n    </div>\n    <div class="graybg" padding-horizontal>\n      <div class="forget-form">\n        <ion-list>\n          <h1 text-center>Change Password</h1>\n          <h3>You want to change your password</h3>\n          <p text-center>No worries, enter the below details and\n            <br>we will change your current password</p>\n      Current User : {{this.currentUser.name}}\n          \n      <ion-row>\n              <ion-col>\n                <ion-list>\n          <ion-item>\n            <ion-input type="email"  value="" placeholder="E-mail" [(ngModel)]="userData.useremail"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="password" placeholder="Old Password" [(ngModel)]="userData.password"></ion-input>\n                  </ion-item>\n          <ion-item>\n            <ion-input type="password" placeholder="New Password" [(ngModel)]="userData.newpassword"></ion-input>\n                  </ion-item>\n          <hr>\n                  <button ion-button block class="bluebtn" (click)="changepass()">Save</button>\n                </ion-list>\n              </ion-col>\n            </ion-row>\n          <!-- <ion-item>\n            <ion-input type="email" placeholder="Confirm E-mail"></ion-input>\n          </ion-item> -->\n        </ion-list>\n      </div>\n      <div text-center>\n        <button ion-button round class="forget-btn" (click)="forgotpass()">Sign up</button>\n      </div>\n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/changepassword/changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_authservice_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__superfanchallengebonus_superfanchallengebonus__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HeaderPage = /** @class */ (function () {
    function HeaderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HeaderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HeaderPage');
    };
    HeaderPage.prototype.goToUploadPostImgVideoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__superfanchallengebonus_superfanchallengebonus__["a" /* SuperfanchallengebonusPage */]);
    };
    HeaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-header',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/header/header.html"*/'<!--\n  Generated template for the HeaderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <div class="headerbg">\n        <ion-row>\n          <ion-col col-3>\n            <div icon-left>\n                <ion-icon name="arrow-back"></ion-icon>\n            </div>\n          </ion-col>\n          <ion-col col-6>\n            <div class="logo">\n              <img src="assets/imgs/logo.png" (click)="goToUploadPostImgVideoPage()" alt="logo">\n            </div>\n          </ion-col>\n          <ion-col col-3>\n              <div class="header-right">\n              </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/header/header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HeaderPage);
    return HeaderPage;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__explore_explore__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__superfanchallenge_superfanchallenge__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fanranking_fanranking__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the FooterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FooterPage = /** @class */ (function () {
    function FooterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FooterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FooterPage');
    };
    FooterPage.prototype.goToHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    FooterPage.prototype.goToexploreScreen = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__explore_explore__["a" /* ExplorePage */]);
    };
    FooterPage.prototype.goToSuperfanchallengePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__superfanchallenge_superfanchallenge__["a" /* SuperfanchallengePage */]);
    };
    FooterPage.prototype.goTofanRankingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__fanranking_fanranking__["a" /* FanrankingPage */]);
    };
    FooterPage.prototype.goToprofilePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */]);
    };
    FooterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-footer',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/footer/footer.html"*/'<!--\n  Generated template for the FooterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-footer>\n    <ion-toolbar>\n      <ul> \n        <li><a href="#" (click)="goToHomePage()"><img src="assets/imgs/home.png" alt="home"></a></li>\n       <li><a href="#" (click)="goToexploreScreen()"><img src="assets/imgs/explore.png" alt="explore"></a></li> \n       <li class="footer-logo"><a href="#" (click)="goToSuperfanchallengePage()"> <img src="assets/imgs/footer-icon.png" alt="footer-icon" width="60"></a></li>\n        <li><a href="#" (click)="goTofanRankingPage()"><img src="assets/imgs/leader-board.png" alt="leader-board"></a></li>\n        <li><a href="#" (click)="goToprofilePage()"><img src="assets/imgs/profile.png" alt="profile"></a></li>\n      </ul>  \n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/footer/footer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FooterPage);
    return FooterPage;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profileupload_profileupload__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editprofile_editprofile__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__community_community__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_authservice_authservice__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*import { RewardsPage } from '../rewards/rewards';*/
/*import { ContestlistPage } from '../contestlist/contestlist';*/






/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, loadingCtrl, authService, camera, transfer, toastCtrl, geolocation, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.camera = camera;
        this.transfer = transfer;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.userProfileData = {
            profilePicture: "",
            userName: "",
            userFollowers: "",
            userFollowersCount: "",
            userFriendsCount: "",
            userPosts: "",
            latestPost: "",
            userTeams: "",
            postMedia: "",
            postTags: "",
            postCheckedin: "",
            postText: "",
            postType: "",
            getUserPointsRanks: "",
        };
        this.userPostData = {
            user_id: "",
        };
        this.userLocationData = {
            Latitude: "",
            Longitude: "",
        };
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.getUserProfileData();
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.backtomain = function () {
        //  const root = this.app.getRootNav();
        //  root.popToRoot();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ProfilePage.prototype.goToeditProfilePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editprofile_editprofile__["a" /* EditprofilePage */]);
    };
    ProfilePage.prototype.goTocommunityPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__community_community__["a" /* CommunityPage */]);
    };
    ProfilePage.prototype.goToProfileUploadPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profileupload_profileupload__["a" /* ProfileuploadPage */]);
    };
    ProfilePage.prototype.getUserProfileData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading Please Wait...'
        });
        loading.present();
        this.authService.postData(this.userPostData, "getuserprofiledata").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.profileData) {
                loading.dismiss();
                /*this.dataSet = this.resposeData.feedData;
                const dataLength = this.resposeData.feedData.length;
                this.userPostData.lastCreated = this.resposeData.feedData[
                  dataLength - 1
                ].created;*/
                _this.userProfileData.profilePicture = _this.resposeData.profileData.profilePicture;
                _this.userProfileData.userName = _this.resposeData.profileData.userName;
                _this.userProfileData.userFollowers = _this.resposeData.profileData.userFollowers;
                _this.userProfileData.userFollowersCount = _this.resposeData.profileData.userFollowersCount;
                _this.userProfileData.userFriendsCount = _this.resposeData.profileData.userFriendsCount;
                _this.userProfileData.userPosts = _this.resposeData.profileData.userPosts;
                _this.userProfileData.latestPost = _this.resposeData.profileData.latestPost;
                _this.userProfileData.userTeams = _this.resposeData.profileData.userTeams;
                _this.userProfileData.getUserPointsRanks = _this.resposeData.profileData.getUserPointsRanks;
            }
            else {
                console.log("No access");
                loading.dismiss();
            }
        }, function (err) {
            //Connection failed message
            loading.dismiss();
        });
    };
    /* Upload Images/Videos for user post starts */
    ProfilePage.prototype.uploadPostimgvideo = function () {
        var _this = this;
        var options = {
            quality: 100,
            mediaType: this.camera.MediaType.ALLMEDIA,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
        };
        this.camera.getPicture(options).then(function (imageData) {
            var loading = _this.loadingCtrl.create({
                content: 'Loading Please Wait...'
            });
            loading.present();
            /* Starts Preloader */
            _this.imageFileName = imageData.substring(imageData.lastIndexOf('/') + 1);
            var fileTransfer = _this.transfer.create();
            var options11 = {
                fileKey: 'file',
                fileName: _this.imageFileName,
                params: { "userData": _this.userDetails.user_id },
                headers: {}
            };
            fileTransfer.upload(imageData, 'http://sfc.dimensiongraphic.com/sfc-app/api/postsUpload.php', options11, true).then(function (data) {
                /* success
                /alert("success"); */
                loading.dismiss();
                _this.resposeData = data;
                var mediaresponse = JSON.parse(_this.resposeData.response);
                _this.authService.postData(mediaresponse, "getreturndata").then(function (result) {
                    _this.resposeData = result;
                    if (_this.resposeData.postType != "") {
                        _this.userProfileData.postMedia = _this.resposeData.postMedia;
                        _this.userProfileData.postType = _this.resposeData.postType;
                        _this.presentToast("Upload Success");
                    }
                    else {
                        _this.presentToast("There was an error uploading the file, please try again!");
                    }
                }, function (err) {
                    _this.presentToast("Returned Error");
                });
            }, function (err) {
                loading.present();
                _this.presentToast(JSON.stringify(err));
            });
        }, function (err) {
            console.log(err);
        });
    };
    /* Upload Images/Videos for user post Ends */
    /* Get Geolocaion for user post Starts */
    ProfilePage.prototype.getLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (res) {
            var loading = _this.loadingCtrl.create({
                content: 'Loading Please Wait...'
            });
            loading.present();
            _this.userLocationData.Latitude = "" + res.coords.latitude + "";
            _this.userLocationData.Longitude = "" + res.coords.longitude + "";
            _this.authService.postData(_this.userLocationData, "sharegeolocation").then(function (result) {
                _this.resposeData = result;
                if (_this.resposeData.geoLocation) {
                    loading.dismiss();
                    _this.userProfileData.postCheckedin = "At-" + _this.resposeData.geoLocation;
                    _this.presentToast(_this.resposeData.geoLocation);
                }
                else {
                    console.log("No access");
                    loading.dismiss();
                }
            }, function (err) {
                //Connection failed message
                loading.dismiss();
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    /* Get Geolocaion for user post Ends */
    /* Tag Friends for user post Starts */
    ProfilePage.prototype.tagFriends = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Please Select Your Friends');
        var followersData = this.userProfileData.userFollowers;
        Object.keys(followersData).forEach(function (key) {
            /*console.log(r);*/
            console.log(key);
            console.log(followersData[key].name);
            alert.addInput({
                type: 'checkbox',
                label: followersData[key].name,
                value: followersData[key].name,
            });
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: function (data) {
                /*console.log('Checkbox data:', data);*/
                _this.tagFriendsData = "";
                data.forEach(function (d) {
                    console.log(d);
                    _this.tagFriendsData = _this.tagFriendsData + d + ",";
                });
                _this.tagFriendsData = "With-" + _this.tagFriendsData;
                _this.userProfileData.postTags = _this.tagFriendsData;
            }
        });
        alert.present();
    };
    /* Tag Friends for user post Starts */
    /* Upload user profile pic Starts */
    ProfilePage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
        };
        /*let options = {
            quality: 100,
            mediaType: this.camera.MediaType.PICTURE,
        };*/
        this.camera.getPicture(options).then(function (imageData) {
            /*this.base64Image = "data:image/jpeg;base64," + imageData;
            this.photos.push(this.base64Image);
            this.photos.reverse();*/
            var loading = _this.loadingCtrl.create({
                content: 'Loading Please Wait...'
            });
            loading.present();
            /* Starts Preloader */
            /*this.presentToast(imageData);*/
            _this.imageFileName = imageData.substring(imageData.lastIndexOf('/') + 1);
            var fileTransfer = _this.transfer.create();
            var options11 = {
                fileKey: 'file',
                fileName: _this.imageFileName,
                params: { "userData": _this.userDetails.user_id },
                headers: {}
            };
            fileTransfer.upload(imageData, 'http://sfc.dimensiongraphic.com/sfc-app/api/profilePicUpload.php', options11, true).then(function (data) {
                /* success
                /alert("success"); */
                loading.dismiss();
                _this.resposeData = data;
                if (_this.resposeData.imageURL != "") {
                    _this.userProfileData.profilePicture = _this.resposeData.imageURL;
                    _this.presentToast("Image Uploaded successfully.");
                }
                else {
                    _this.presentToast("There was an error uploading the file, please try again!");
                }
            }, function (err) {
                // error
                //alert("error"+JSON.stringify(err));
                loading.present();
                _this.presentToast(JSON.stringify(err));
            });
        }, function (err) {
            console.log(err);
        });
    };
    /* Upload user profile pic Ends */
    /* Create User Post Starts */
    ProfilePage.prototype.createPost = function () {
        var _this = this;
        this.resposeData = {
            user_id: this.userPostData.user_id,
            postTags: this.userProfileData.postTags,
            postMedia: this.userProfileData.postMedia,
            postCheckedin: this.userProfileData.postCheckedin,
            postText: this.userProfileData.postText,
            postType: this.userProfileData.postType
        };
        console.log(this.resposeData);
        var loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        loading.present();
        this.authService.postData(this.resposeData, "createpost").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.error == 0) {
                loading.dismiss();
                _this.presentToast(_this.resposeData.message);
                /*this.navCtrl.push(ProfilePage); */
                _this.userProfileData.latestPost = _this.resposeData.latestPost;
            }
            else {
                console.log("No access");
                loading.dismiss();
                _this.presentToast(_this.resposeData.message);
            }
        }, function (err) {
            //Connection failed message
            loading.dismiss();
        });
    };
    /* Create User Post Ends */
    ProfilePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ProfilePage.prototype.getchallenge = function () {
        /*this.navCtrl.push(ContestlistPage); */
    };
    ProfilePage.prototype.getRewardsPage = function () {
        /*this.navCtrl.push(RewardsPage); */
    };
    ProfilePage.prototype.createPostComment = function () {
    };
    ProfilePage.prototype.Profileupload = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profileupload_profileupload__["a" /* ProfileuploadPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <div class="headerbg">\n          <ion-row>\n              <ion-col col-12>\n                <div class="logo">\n                  <img src="assets/imgs/logo.png" alt="logo">\n                </div>\n              </ion-col>\n            </ion-row>\n      </div>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content>\n\n    <div class="new-profile-content">\n        <div class="new-profile-content-padding">\n          <ion-row>\n            <ion-col col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7>\n              <div class="new-profile-image">\n                <!-- <ion-icon ios="ios-add" md="md-add"></ion-icon> -->\n                <img (click)="goToProfileUploadPage()" src="{{userProfileData.profilePicture}}" alt="profile_pic">\n              </div>\n            <div class="username">\n                <p>{{userDetails.username}}</p>\n            </div>\n            </ion-col>\n    \n            <ion-col col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5>\n              <div class="team-name">\n                <p>{{userProfileData.userTeams}}</p>\n              </div>\n            </ion-col>\n          </ion-row>\n    \n          <ion-row>\n            <ion-col>\n              <div class="new-profile-btns">\n                <ul>\n                  <li><a href="#" (click)="goTocommunityPage()">Add Friend</a></li>\n                  <li><a href="#" (click)="goToeditProfilePage()">Edit Profile</a></li>\n                </ul>\n              </div>\n            </ion-col>\n          </ion-row>\n    \n          <ion-row>\n            <ion-col>\n              <div class="profile-frient-count">\n                <ul>\n                  <li>\n                    <a href="#">Friends\n                      <span>{{userProfileData.userFriendsCount}}</span>\n                    </a>\n                  </li>\n                  <li>\n                    <a href="#">Points\n                      <span>{{userProfileData.getUserPointsRanks.likecount}}</span>\n                    </a>\n                  </li>\n                  <li>\n                    <a href="#">Rank\n                      <span>{{userProfileData.getUserPointsRanks.rank}}</span>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n            <div class="new-profile-challenage">\n              <p>Post a challenge<br> entry to see it here !</p>\n              <ion-icon name="arrow-round-down"></ion-icon>\n            </div>\n          </div>\n\n  <!-- <ion-grid>\n    <ion-row style="padding-top: 12px;">\n      <ion-col col-4 class="edit_profile_btn">\n        <button ion-button>Edit<br> Profile</button> \n      </ion-col>\n      <ion-col col-4 class="profile_pic">\n       (click)="openModal({charNum: 0})"\n        <span class="span_profle_pic" (click)="Profileupload()"><img src="{{userProfileData.profilePicture}}" alt="profile_pic"></span>\n        <span class="span_profle_pic_txt">Username</span>\n      </ion-col>\n      <ion-col col-4 class="setting_icons">\n          <ion-icon ios="ios-settings" md="md-settings"></ion-icon><br>\n          <ion-icon ios="ios-person-add" md="md-person-add" (click)="goTocommunityPage()"></ion-icon>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 class="friends_votting_list">\n         <strong>\n           Friends\n           <b>0</b>\n         </strong>\n      </ion-col>\n      <ion-col col-6 class="friends_votting_list">\n        <strong>\n          Votes\n          <b>0</b>\n        </strong>\n      </ion-col>\n    </ion-row>\n  </ion-grid>   -->\n</ion-content>\n\n<page-footer></page-footer>'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_authservice_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_media_capture__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__favteam_favteam__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__community_community__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__superfanchallenge_superfanchallenge__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__superfanchallengebonus_superfanchallengebonus__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__friendprofile_friendprofile__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__otherfanentryview_otherfanentryview__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__fanranking_fanranking__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__notification_notification__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_social_sharing__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, loadingCtrl, authService, camera, transfer, toastCtrl, alertCtrl, mediaCapture, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.camera = camera;
        this.transfer = transfer;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.mediaCapture = mediaCapture;
        this.socialSharing = socialSharing;
        this.userProfileData = {
            profilePicture: "",
            userName: "",
            userFollowers: "",
            userFollowersCount: "",
            userPosts: "",
            latestPost: "",
            userTeams: "",
            postMedia: "",
            postTags: "",
            postCheckedin: "",
            postText: "",
            postType: "",
            url: "",
            type: "",
            triviaGame: "",
            gameStatus: "",
            gameMessage: "",
        };
        this.userPostData = {
            user_id: "",
            feed_id: "",
            feed: "",
        };
        this.gamePostData = {
            selectedOption: "",
            user_id: "",
            game_id: "",
        };
        this.flag_upload = true;
        this.flag_play = true;
        this.comments = [];
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.gamePostData.user_id = this.userDetails.user_id;
        this.getUserProfileData();
    }
    HomePage_1 = HomePage;
    HomePage.prototype.getUserProfileData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading Please Wait...'
        });
        loading.present();
        this.authService.postData(this.userPostData, "getuserprofiledata").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.profileData) {
                loading.dismiss();
                /*this.dataSet = this.resposeData.feedData;
                const dataLength = this.resposeData.feedData.length;
                this.userPostData.lastCreated = this.resposeData.feedData[
                  dataLength - 1
                ].created;*/
                _this.userProfileData.profilePicture = _this.resposeData.profileData.profilePicture;
                _this.userProfileData.userName = _this.resposeData.profileData.userName;
                _this.userProfileData.userFollowers = _this.resposeData.profileData.userFollowers;
                _this.userProfileData.userFollowersCount = _this.resposeData.profileData.userFollowersCount;
                _this.userProfileData.userPosts = _this.resposeData.profileData.userPosts;
                _this.userProfileData.latestPost = _this.resposeData.profileData.latestPost;
                _this.userProfileData.userTeams = _this.resposeData.profileData.userTeams;
                _this.userProfileData.triviaGame = _this.resposeData.profileData.triviaGame;
                _this.gamePostData.game_id = _this.resposeData.profileData.triviaGame[0].id;
                _this.userProfileData.gameStatus = _this.resposeData.profileData.gameStatus;
                _this.userProfileData.gameMessage = "You already played this game.";
                /*if(this.userProfileData.gameStatus == "Played"){
                    let triviagameBgEl = document.querySelector('.triviagameBgParent');
                    let boxtitleEl = document.querySelector('.boxtitle');
                    triviagameBgEl.classList.add('triviagamedisplay');
                    boxtitleEl.classList.add('showboxtitle');
                    
                    console.log(triviagameBgEl);
                    console.log(boxtitleEl);
                }*/
            }
            else {
                console.log("No access");
                loading.dismiss();
            }
        }, function (err) {
            //Connection failed message
            loading.dismiss();
        });
    };
    /* Upload Images/Videos for user post starts */
    HomePage.prototype.uploadPostimgvideo = function () {
        var _this = this;
        var options = {
            quality: 100,
            mediaType: this.camera.MediaType.ALLMEDIA,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
        };
        this.camera.getPicture(options).then(function (imageData) {
            var loading = _this.loadingCtrl.create({
                content: 'Loading Please Wait...'
            });
            loading.present();
            /* Starts Preloader */
            _this.imageFileName = imageData.substring(imageData.lastIndexOf('/') + 1);
            var fileTransfer = _this.transfer.create();
            var options11 = {
                fileKey: 'file',
                fileName: _this.imageFileName,
                params: { "userData": _this.userDetails.user_id },
                headers: {}
            };
            fileTransfer.upload(imageData, 'http://sfc.dimensiongraphic.com/sfc-app/api/postsUpload.php', options11, true).then(function (data) {
                /* success
                /alert("success"); */
                loading.dismiss();
                _this.resposeData = data;
                var mediaresponse = JSON.parse(_this.resposeData.response);
                _this.authService.postData(mediaresponse, "getreturndata").then(function (result) {
                    _this.resposeData = result;
                    if (_this.resposeData.postType != "") {
                        _this.userProfileData.postMedia = _this.resposeData.postMedia;
                        _this.userProfileData.postType = _this.resposeData.postType;
                        _this.presentToast("Upload Success");
                    }
                    else {
                        _this.presentToast("There was an error uploading the file, please try again!");
                    }
                }, function (err) {
                    _this.presentToast("Returned Error");
                });
            }, function (err) {
                loading.present();
                _this.presentToast(JSON.stringify(err));
            });
        }, function (err) {
            console.log(err);
        });
    };
    /* Upload Images/Videos for user post Ends */
    /* Upload user profile pic Starts */
    HomePage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            mediaType: this.camera.MediaType.PICTURE,
            // sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
        };
        /*let options = {
            quality: 100,
            mediaType: this.camera.MediaType.PICTURE,
        };*/
        this.camera.getPicture(options).then(function (imageData) {
            /*this.base64Image = "data:image/jpeg;base64," + imageData;
            this.photos.push(this.base64Image);
            this.photos.reverse();*/
            var loading = _this.loadingCtrl.create({
                content: 'Loading Please Wait...'
            });
            loading.present();
            /* Starts Preloader */
            /*this.presentToast(imageData);*/
            _this.imageFileName = imageData.substring(imageData.lastIndexOf('/') + 1);
            var fileTransfer = _this.transfer.create();
            var options11 = {
                fileKey: 'file',
                fileName: _this.imageFileName,
                params: { "userData": _this.userDetails.user_id },
                headers: {}
            };
            fileTransfer.upload(imageData, 'http://sfc.dimensiongraphic.com/sfc-app/api/postsUpload.php', options11, true).then(function (data) {
                /* success
                /alert("success"); */
                loading.dismiss();
                _this.resposeData = data;
                var mediaresponse = JSON.parse(_this.resposeData.response);
                _this.authService.postData(mediaresponse, "getreturndata").then(function (result) {
                    _this.resposeData = result;
                    if (_this.resposeData.postType != "") {
                        _this.userProfileData.postMedia = _this.resposeData.postMedia;
                        _this.userProfileData.postType = _this.resposeData.postType;
                        _this.presentToast("Upload Success");
                    }
                    else {
                        _this.presentToast("There was an error uploading the file, please try again!");
                    }
                }, function (err) {
                    _this.presentToast("Returned Error");
                });
            }, function (err) {
                // error
                //alert("error"+JSON.stringify(err));
                loading.present();
                _this.presentToast(JSON.stringify(err));
            });
        }, function (err) {
            console.log(err);
        });
    };
    /* Upload user profile pic Ends */
    /* Create User Post Starts */
    HomePage.prototype.createPost = function () {
        var _this = this;
        this.resposeData = {
            user_id: this.userPostData.user_id,
            postMedia: this.userProfileData.postMedia,
            postText: this.userProfileData.postText,
            postType: this.userProfileData.postType,
            team_id: this.userDetails.team_id,
            url: this.userProfileData.postMedia,
            postChallengeType: 'superfan',
        };
        console.log(this.resposeData);
        var loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        if (this.userProfileData.postText) {
            loading.present();
            this.authService.postData(this.resposeData, "createpost").then(function (result) {
                _this.resposeData = result;
                if (_this.resposeData.error == 0) {
                    loading.dismiss();
                    _this.presentToast(_this.resposeData.message);
                    _this.userProfileData.latestPost = _this.resposeData.latestPost;
                    _this.userProfileData.postText = null;
                    _this.userProfileData.postType = null;
                }
                else {
                    console.log("No access");
                    loading.dismiss();
                    _this.presentToast(_this.resposeData.message);
                }
            }, function (err) {
                //Connection failed message
                loading.dismiss();
            });
        }
    };
    /* Create User Post Ends */
    HomePage.prototype.tvgAnswer = function (selectedOption) {
        this.gamePostData.selectedOption = selectedOption;
    };
    HomePage.prototype.submitGame = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Submitting, Please Wait...'
        });
        loading.present();
        this.authService.postData(this.gamePostData, "submittriviagame").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.message) {
                _this.userProfileData.gameMessage = _this.resposeData.message;
                var triviagameBgEl = document.querySelector('.triviagameBgParent');
                var boxtitleEl = document.querySelector('.boxtitle');
                triviagameBgEl.classList.add('triviagamedisplay');
                boxtitleEl.classList.add('showboxtitle');
            }
            loading.dismiss();
        }, function (err) {
            //Connection failed message
            loading.dismiss();
        });
    };
    HomePage.prototype.likePhoto = function (ID) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        loading.present();
        this.userPostData.feed_id = ID;
        this.authService.postData(this.userPostData, "likepost").then(function (result) {
            _this.resposeData = result;
            loading.dismiss();
            if (_this.resposeData.error == 0) {
                _this.presentToast("Like Submitted Successfully!");
                _this.navCtrl.push(HomePage_1);
            }
            else {
                _this.presentToast("Error occurs while submitting like.");
            }
        }, function (err) {
            //Connection failed message
            loading.dismiss();
            _this.presentToast("Error occurs while submitting like.");
        });
    };
    HomePage.prototype.sharePhoto = function (ID) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        loading.present();
        this.userPostData.feed_id = ID;
        this.authService.postData(this.userPostData, "sharepost").then(function (result) {
            _this.resposeData = result;
            loading.dismiss();
            if (_this.resposeData.error == 0) {
                _this.presentToast("Shared Successfully!");
                _this.navCtrl.push(HomePage_1);
            }
            else {
                _this.presentToast("Error occurs while shareing post.");
            }
        }, function (err) {
            //Connection failed message
            loading.dismiss();
            _this.presentToast("Error occurs while shareing post.");
        });
    };
    HomePage.prototype.addComment = function (ID, newComment) {
        var _this = this;
        if (newComment) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please Wait...'
            });
            loading_1.present();
            this.userPostData.feed_id = ID;
            this.userPostData.feed = newComment;
            this.authService.postData(this.userPostData, "addpostcomment").then(function (result) {
                loading_1.dismiss();
                _this.resposeData = result;
                if (_this.resposeData.error == 0) {
                    _this.comments.push(newComment);
                    _this.presentToast("Comment added successfully!");
                    _this.navCtrl.push(HomePage_1);
                }
                else {
                    _this.presentToast("Error occurs while adding post comment.");
                }
            }, function (err) {
                //Connection failed message
                loading_1.dismiss();
                _this.presentToast("Error occurs while adding post comment.");
            });
        }
    };
    HomePage.prototype.deletecomnt = function ($commnt) {
        // this.heroes.splice($commnt, 1);
        this.comments.splice(this.comments.indexOf($commnt), 1);
    };
    HomePage.prototype.videoCaptureFn = function () {
        var _this = this;
        var options = { limit: 1 };
        this.mediaCapture.captureVideo(options)
            .then(function (videodata) {
            var i, path, len;
            for (i = 0, len = videodata.length; i < len; i += 1) {
                path = videodata[i].fullPath;
                // do something interesting with the file
            }
            _this.videoId = path;
            _this.presentToast(_this.videoId);
            _this.flag_play = false;
            _this.flag_upload = false;
        });
    };
    HomePage.prototype.sharePostImage = function () {
        var _this = this;
        //this code is to use the social sharing plugin
        // message, subject, file, url
        this.socialSharing.share("Check this item:  appv2://home/")
            .then(function () {
            _this.presentToast('testing');
        })
            .catch(function () {
        });
    };
    HomePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    HomePage.prototype.loginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* Login */]);
    };
    HomePage.prototype.signupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.goToFavteamPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__favteam_favteam__["a" /* FavteamPage */]);
    };
    HomePage.prototype.goToProfilePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__profile_profile__["a" /* ProfilePage */]);
    };
    HomePage.prototype.goToCommunityPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__community_community__["a" /* CommunityPage */]);
    };
    HomePage.prototype.goToSuperFanChallengePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__superfanchallenge_superfanchallenge__["a" /* SuperfanchallengePage */]);
    };
    HomePage.prototype.goToSuperfanchallengebonusPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__superfanchallengebonus_superfanchallengebonus__["a" /* SuperfanchallengebonusPage */]);
    };
    HomePage.prototype.goToFriendprofilePage = function (user_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__friendprofile_friendprofile__["a" /* FriendprofilePage */], { userId: user_id });
    };
    HomePage.prototype.goToOtherfanentryviewPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__otherfanentryview_otherfanentryview__["a" /* OtherfanentryviewPage */], { postId: id });
    };
    HomePage.prototype.goToFanrankingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__fanranking_fanranking__["a" /* FanrankingPage */]);
    };
    HomePage.prototype.goToNotificationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__notification_notification__["a" /* NotificationPage */]);
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="headerbg">\n      <ion-row>\n        <!-- <ion-col col-3>\n          <div icon-left>\n              <ion-icon name="arrow-back"></ion-icon>\n          </div>\n        </ion-col> -->\n        <ion-col col-12>\n          <div class="logo">\n            <img src="assets/imgs/logo.png" (click)="goToSuperfanchallengebonusPage()" alt="logo">\n			<ion-icon ios="ios-notifications" (click)="goToNotificationPage()" md="md-notifications"></ion-icon>\n          </div>\n        </ion-col>\n        <!-- <ion-col col-3>\n            <div class="header-right">\n            </div>\n        </ion-col> -->\n      </ion-row>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n		<!-- <button ion-button block class="bluebtn" (click)="videoCaptureFn()">Video Capture</button> -->\n		<ion-row class="postToprow">\n        <span class="hme_profile_pic"><img src="{{userDetails.profilePicture}}" (click)="goToFriendprofilePage(userPostData.user_id)"></span>\n        <ion-textarea placeholder="Talk some smack..." [(ngModel)]="userProfileData.postText">{{this.userProfileData.postText}}</ion-textarea>\n        <span class="txt_ico">\n          <ion-icon ios="ios-videocam" md="md-videocam" (click)="uploadPostimgvideo()"> Library</ion-icon>\n          <ion-icon ios="ios-images" md="md-images" (click)="takePhoto()"> Photos</ion-icon>\n          <ion-icon ios="ios-send" md="md-send" (click)="createPost()">Post</ion-icon>\n        </span>\n        <div class="challengevideo" *ngIf="userProfileData.postType!=\'\'">\n            <video *ngIf="userProfileData.postType == \'Video\'" controls >\n            <source src="{{userProfileData.postMedia}}#t=1" type="video/mp4">\n          </video>\n          <img *ngIf="userProfileData.postType == \'Image\'" src="{{userProfileData.postMedia}}">\n          </div>\n      </ion-row>\n  \n      <ion-row class="hme_postRow">\n          <div class="hmebox" *ngIf="userProfileData.latestPost">\n            <span class="hme_profile_pic"><img (click)="goToFriendprofilePage(userPostData.user_id)" src="{{userDetails.profilePicture}}"> <b class="hme_profile_pic_txt">{{userProfileData.userName}}</b></span> \n            <div class="post_caption_txt">{{this.userProfileData.latestPost.description}}</div>\n            <div class="post_video_hme" (click)="goToOtherfanentryviewPage(userProfileData.latestPost.id)">\n              <video *ngIf="userProfileData.latestPost.type == \'Video\'" preload="metadata" webkit-playsinline="webkit-playsinline" controls>\n                <source src="{{userProfileData.latestPost.media}}#t=1" type="video/mp4">\n              </video>\n              <img *ngIf="userProfileData.latestPost.type == \'Image\'" src="{{userProfileData.latestPost.media}}">\n            </div>\n            <div class="comment">\n              {{userProfileData.latestPost.likes}}\n              <ion-icon ios="ios-thumbs-up" md="md-thumbs-up" name="like" (click)="likePhoto(userProfileData.latestPost.id)"></ion-icon>\n              {{userProfileData.latestPost.share}}\n              <ion-icon ios="ios-share-alt" md="md-share-alt" name="share" (click)="sharePhoto(userProfileData.latestPost.id)"></ion-icon>\n              <button ion-button clear small color="danger" icon-left (click)="sharePostImage()" style="color: #000; margin-top: -6px; margin-left: -6px;">\n                <ion-icon ios="ios-share" md="md-share"></ion-icon>\n              </button>\n              <!-- <ion-icon name="trash" class="deleteIcon" (click)="deletePhoto(photo.id,id)"></ion-icon> -->\n              <!-- <ion-icon ios="ios-share" md="md-share" (click)="shareInfo(userProfileData.latestPost.url)"></ion-icon> -->\n            </div>\n            <div class="commnt_input">\n              <ion-item>\n                <ion-input type="text" placeholder="Comment" #newComment (keyup.enter)="addComment(userProfileData.latestPost.id,newComment.value); newComment.value=\'\'"\n                 (blur)="addComment(userProfileData.latestPost.id,newComment.value); newComment.value=\'\' "></ion-input>\n              </ion-item>\n              <ion-icon ios="ios-send" md="md-send"></ion-icon>\n              <ul>\n                <li *ngFor="let comment of userProfileData.latestPost.comments">\n                  <div class="left"><img src="{{comment.profilepic}}" alt="status"></div>\n                  <div class="right">\n                    <h6>{{comment.name}} <ion-icon name="trash" class="deleteIcon" (click)="deletecomnt();"></ion-icon></h6>\n                    <p>{{comment.comment}}</p>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </ion-row>\n\n        <ion-row class="hme_triviaGameRow">\n            <span class="hme_profile_pic"><img src="{{userDetails.profilePicture}}"></span> <b class="hme_profile_pic_txt">Trivia Game</b>\n            <div class="boxtitle" [ngClass]="{\'showboxtitle\': userProfileData.gameStatus === \'Played\' }"><p>{{userProfileData.gameMessage}}</p></div>\n			<div class="triviagameBgParent" [ngClass]="{\'triviagamedisplay\':   userProfileData.gameStatus === \'Played\' }">\n				<div class="triviagameBg" *ngFor="let game of userProfileData.triviaGame; let i = index">\n				<div class="extra_earn">{{game.title}}</div>\n				<ion-list radio-group [(ngModel)]="autoManufacturers">        \n					<ion-item>\n					  <ion-label>{{game.option1}}</ion-label>\n					  <ion-radio value="{{game.option1}}" (ionSelect)="tvgAnswer(game.option1)"></ion-radio>\n					</ion-item>\n				  \n					<ion-item>\n					  <ion-label>{{game.option2}}</ion-label>\n					  <ion-radio value="{{game.option2}}" (ionSelect)="tvgAnswer(game.option2)"></ion-radio>\n					</ion-item>\n				  \n					<ion-item>\n					  <ion-label>{{game.option3}}</ion-label>\n					  <ion-radio value="{{game.option3}}" (ionSelect)="tvgAnswer(game.option3)"></ion-radio>\n					</ion-item>\n				  \n					<ion-item>\n					  <ion-label>{{game.option4}}</ion-label>\n					  <ion-radio value="{{game.option4}}" (ionSelect)="tvgAnswer(game.option4)"></ion-radio>\n					</ion-item>\n				  </ion-list>\n				  <div class="submit"><button ion-button (click)="submitGame()">Submit</button></div>\n				</div>\n			</div>\n		</ion-row>   \n\n    <button ion-button block class="bluebtn" (click)="videoCaptureFn()">Video Capture</button>\n  <!-- <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n	<button ion-button block class="bluebtn" (click)="loginPage()">Login</button>\n	<button ion-button block class="bluebtn" (click)="signupPage()">Signup</button>\n	<button ion-button block class="bluebtn" (click)="goToFavteamPage()">Favorite Team </button>\n	<button ion-button block class="bluebtn" (click)="goToProfilePage()">Profile</button>\n	<button ion-button block class="bluebtn" (click)="goToCommunityPage()">Community Page</button>\n	<button ion-button block class="bluebtn" (click)="goToSuperFanChallengePage()">Super Fan Challenge Page</button>\n	<button ion-button block class="bluebtn" (click)="goToSuperfanchallengebonusPage()">Super Fan Challenge Bonus Page</button>\n	<button ion-button block class="bluebtn" (click)="goToFriendprofilePage(12)">Friend Profile Page</button>\n	<button ion-button block class="bluebtn" (click)="goToOtherfanentryviewPage()">Other Fan Entry View Page</button>\n	<button ion-button block class="bluebtn" (click)="goToFanrankingPage()">Fan Ranking Page</button>\n  </p> -->\n</ion-content>\n\n<page-footer></page-footer>\n'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_media_capture__["a" /* MediaCapture */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_media_capture__["a" /* MediaCapture */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_17__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _k || Object])
    ], HomePage);
    return HomePage;
    var HomePage_1, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authservice_authservice__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgotpass_forgotpass__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__termsandcondition_termsandcondition__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__favteam_favteam__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*import { HomescreenPage } from '../homescreen/homescreen';*/




var Login = /** @class */ (function () {
    function Login(navCtrl, loadingCtrl, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.userData = { "username": "", "password": "" };
    }
    Login.prototype.backtomain = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    Login.prototype.forGotpassPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forgotpass_forgotpass__["a" /* ForgotpassPage */]);
    };
    Login.prototype.favtmPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__favteam_favteam__["a" /* FavteamPage */]);
    };
    Login.prototype.gotToSignUpPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    Login.prototype.gotToTermsandconditionPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__termsandcondition_termsandcondition__["a" /* TermsandconditionPage */]);
    };
    Login.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad Login');
    };
    Login.prototype.login = function () {
        var _this = this;
        this.presentLoading();
        if (this.userData.username && this.userData.password) {
            this.authService.postData(this.userData, "login").then(function (result) {
                _this.resposeData = result;
                if (_this.resposeData.userData) {
                    console.log(_this.resposeData.userData);
                    localStorage.setItem('userData', JSON.stringify(_this.resposeData));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
                else {
                    _this.showAlert();
                }
            }, function (err) {
                //Connection failed message
            });
        }
        else {
            this.showAlert();
        }
    };
    Login.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    };
    Login.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Incorrect!',
            subTitle: 'Email and Password',
            buttons: ['OK']
        });
        alert.present();
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/login/login.html"*/'<ion-content class="bg">\n  <ion-row class="logo-row">\n    <!-- <img src="../assets/imgs/img_login_bg.png" class="banner_img" />-->\n    <div class="login_sec">\n        <ion-row class="top-icons">\n            <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n                <!-- <button ion-button icon-left (click)="backtomain()"> \n                  <ion-icon name="arrow-back"></ion-icon>\n                    Back\n                  </button> -->\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n              <!-- <p text-right>Login</p> -->\n            </ion-col>\n          </ion-row>\n      <ion-col> <img src="assets/imgs/img_logo.png" class="logo_img" /></ion-col>\n      <div class="login-box" padding>\n          <p>Enter Your E-mail & Password</p>\n          <ion-row>\n            <ion-col>\n              <ion-list>\n                <ion-input type="email" value="" [(ngModel)]="userData.username" placeholder="Enter Username"></ion-input>\n                <ion-input type="password" [(ngModel)]="userData.password" placeholder="Enter Password"></ion-input>\n                  <p>\n                    <span (click)="forGotpassPage()">Forgot Password?</span>\n                    <span>Need an Account? <b (click)="gotToSignUpPage()">Sign Up Now</b> <!--<b (click)="favtmPage()">Sign Up Now</b>--></span>\n                  </p>\n              \n                <hr>\n                <button ion-button block class="bluebtn" (click)="login()">Login</button>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <!-- <div class="signup-col">\n              <a href="#" ion-button class="submit-btn redbtn" full type="submit">Login with gmail</a>\n              <a href="#" ion-button class="submit-btn bluebtn" full type="submit">Login with facebook</a>\n              <button ion-button class="register-btn" block clear (click)="createAccount()">Create New Account</button> \n            </div>-->\n          </ion-row>\n      </div>\n    </div>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_authservice_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherfanentryviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__superfanchallenge_superfanchallenge__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__friendprofile_friendprofile__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the OtherfanentryviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OtherfanentryviewPage = /** @class */ (function () {
    function OtherfanentryviewPage(navCtrl, navParams, loadingCtrl, authService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.fabentryPostData = {
            post_id: "",
        };
        this.singlePostData = {
            profilePicture: "",
            userId: "",
            userName: "",
            teamName: "",
            challenge_type: "",
            type: "",
            media: "",
            likes: "",
            share: "",
            comments: "",
        };
        this.userPostData = {
            user_id: "",
            feed_id: "",
            feed: "",
        };
        this.userProfileData = {
            profilePicture: "",
            userName: "",
            userFollowers: "",
            userFollowersCount: "",
            userPosts: "",
            latestPost: "",
            userTeams: "",
            postMedia: "",
            postTags: "",
            postCheckedin: "",
            postText: "",
            postType: "",
            url: "",
            type: "",
            triviaGame: "",
            gameStatus: "",
            gameMessage: "",
        };
        this.gamePostData = {
            selectedOption: "",
            user_id: "",
            game_id: "",
        };
        this.comments = [];
        this.fabentryPostData.post_id = navParams.get('postId');
        console.log(this.fabentryPostData.post_id);
        this.singlePostImage();
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.gamePostData.user_id = this.userDetails.user_id;
        this.getUserProfileData();
    }
    OtherfanentryviewPage_1 = OtherfanentryviewPage;
    OtherfanentryviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtherfanentryviewPage');
    };
    OtherfanentryviewPage.prototype.getUserProfileData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading Please Wait...'
        });
        loading.present();
        this.authService.postData(this.userPostData, "getuserprofiledata").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.profileData) {
                loading.dismiss();
                /*this.dataSet = this.resposeData.feedData;
                const dataLength = this.resposeData.feedData.length;
                this.userPostData.lastCreated = this.resposeData.feedData[
                    dataLength - 1
                ].created;*/
                _this.userProfileData.profilePicture = _this.resposeData.profileData.profilePicture;
                _this.userProfileData.userName = _this.resposeData.profileData.userName;
                _this.userProfileData.userFollowers = _this.resposeData.profileData.userFollowers;
                _this.userProfileData.userFollowersCount = _this.resposeData.profileData.userFollowersCount;
                _this.userProfileData.userPosts = _this.resposeData.profileData.userPosts;
                _this.userProfileData.latestPost = _this.resposeData.profileData.latestPost;
                _this.userProfileData.userTeams = _this.resposeData.profileData.userTeams;
                _this.userProfileData.triviaGame = _this.resposeData.profileData.triviaGame;
                _this.gamePostData.game_id = _this.resposeData.profileData.triviaGame[0].id;
                _this.userProfileData.gameStatus = _this.resposeData.profileData.gameStatus;
                _this.userProfileData.gameMessage = "You already played this game.";
                /*if(this.userProfileData.gameStatus == "Played"){
                    let triviagameBgEl = document.querySelector('.triviagameBgParent');
                    let boxtitleEl = document.querySelector('.boxtitle');
                    triviagameBgEl.classList.add('triviagamedisplay');
                    boxtitleEl.classList.add('showboxtitle');
                    
                    console.log(triviagameBgEl);
                    console.log(boxtitleEl);
                }*/
            }
            else {
                console.log("No access");
                loading.dismiss();
            }
        }, function (err) {
            //Connection failed message
            loading.dismiss();
        });
    };
    OtherfanentryviewPage.prototype.singlePostImage = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        loading.present();
        this.authService.postData(this.fabentryPostData, "getpostbyid").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.postData) {
                loading.dismiss();
                _this.userPostData.user_id = _this.resposeData.postData.userId;
                _this.singlePostData.profilePicture = _this.resposeData.postData.profilePicture;
                _this.singlePostData.userName = _this.resposeData.postData.userName;
                _this.singlePostData.teamName = _this.resposeData.postData.teamName;
                _this.singlePostData.challenge_type = _this.resposeData.postData.challenge_type;
                _this.singlePostData.type = _this.resposeData.postData.type;
                _this.singlePostData.media = _this.resposeData.postData.media;
                _this.singlePostData.likes = _this.resposeData.postData.likes;
                _this.singlePostData.share = _this.resposeData.postData.share;
                _this.singlePostData.comments = _this.resposeData.postData.comments;
            }
            else {
                console.log("No access");
                loading.dismiss();
            }
        }, function (err) {
            //Connection failed message
            loading.dismiss();
        });
    };
    OtherfanentryviewPage.prototype.addComment = function (ID, newComment) {
        var _this = this;
        if (newComment) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please Wait...'
            });
            loading_1.present();
            this.userPostData.feed_id = ID;
            this.userPostData.feed = newComment;
            this.authService.postData(this.userPostData, "addpostcomment").then(function (result) {
                loading_1.dismiss();
                _this.resposeData = result;
                if (_this.resposeData.error == 0) {
                    _this.comments.push(newComment);
                    _this.presentToast("Comment added successfully!");
                    _this.navCtrl.push(OtherfanentryviewPage_1);
                }
                else {
                    _this.presentToast("Error occurs while adding post comment.");
                }
            }, function (err) {
                //Connection failed message
                loading_1.dismiss();
                _this.presentToast("Error occurs while adding post comment.");
            });
        }
    };
    OtherfanentryviewPage.prototype.deletecomnt = function ($commnt) {
        // this.heroes.splice($commnt, 1);
        this.comments.splice(this.comments.indexOf($commnt), 1);
    };
    OtherfanentryviewPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    OtherfanentryviewPage.prototype.goToSuperfanchallengePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__superfanchallenge_superfanchallenge__["a" /* SuperfanchallengePage */]);
    };
    OtherfanentryviewPage.prototype.goToFriendprofilePage = function (user_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__friendprofile_friendprofile__["a" /* FriendprofilePage */], { userId: user_id });
    };
    OtherfanentryviewPage = OtherfanentryviewPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-otherfanentryview',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/otherfanentryview/otherfanentryview.html"*/'<!--\n  Generated template for the OtherfanentryviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <div class="headerbg">\n        <ion-row>\n            <ion-col col-12>\n              <div class="logo">\n                <img src="assets/imgs/logo.png" alt="logo">\n              </div>\n            </ion-col>\n          </ion-row>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="new-profile-content">\n    <div class="new-profile">\n      <img src="{{singlePostData.profilePicture}}" (click)="goToFriendprofilePage(singlePostData.userId)" alt="profile-user">\n      <span>{{singlePostData.userName}}</span>\n    </div>\n    <div class="team-name">\n      <p>{{singlePostData.teamName}}</p>\n    </div>\n  </div>\n  \n  <div class="friend-challenge">\n    <p>{{singlePostData.challenge_type}}</p>\n  <video *ngIf="singlePostData.type == \'Video\'" controls>\n    <source src="{{singlePostData.media}}" type="video/mp4">\n  </video>\n  <img *ngIf="singlePostData.type == \'Image\'" src="{{singlePostData.media}}">\n  </div>\n<div class="hmebox">\n  <div class="comment">\n    {{singlePostData.likes}}\n    <ion-icon ios="ios-thumbs-up" md="md-thumbs-up" name="like" (click)="likePhoto(fabentryPostData.post_id)"></ion-icon>\n    {{singlePostData.share}}\n    <ion-icon ios="ios-share-alt" md="md-share-alt" name="share" (click)="sharePhoto(fabentryPostData.post_id)"></ion-icon>\n    <!-- <ion-icon name="trash" class="deleteIcon" (click)="deletePhoto(photo.id,id)"></ion-icon> -->\n    <!-- <ion-icon ios="ios-share" md="md-share" (click)="shareInfo(userProfileData.latestPost.url)"></ion-icon> -->\n  </div>\n  \n  <div class="commnt_input">\n    <ion-item>\n      <ion-input type="text" placeholder="Comment" #newComment (keyup.enter)="addComment(fabentryPostData.post_id,newComment.value); newComment.value=\'\'"\n       (blur)="addComment(fabentryPostData.post_id,newComment.value); newComment.value=\'\' "></ion-input>\n    </ion-item>\n    <ion-icon ios="ios-send" md="md-send"></ion-icon>\n    <ul>\n      <li *ngFor="let comment of singlePostData.comments">\n        <div class="left"><img src="{{comment.profilepic}}" alt="Profile"></div>\n        <div class="right">\n          <h6>{{comment.name}} <ion-icon name="trash" class="deleteIcon" (click)="deletecomnt();"></ion-icon></h6>\n          <p>{{comment.comment}}</p>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <!-- <div class="info">\n      <caption>\n          <ion-textarea placeholder="Caption"></ion-textarea>\n      </caption>\n      <ul>\n        <li>\n          <ion-icon name="heart"></ion-icon>\n        </li>\n        <li class="comment-icon">\n            <img src="assets/imgs/comment-icon.svg" alt="comment-icon">\n        </li>\n        <li>\n            <ion-icon name="share-alt"></ion-icon>\n        </li>\n        <li>share - <span class="share-link">https://sfcfriend.com</span></li>\n      </ul>\n      <h5>View all 3 comments<span>July 4</span></h5> \n  </div> -->\n\n  <div class="friend-challenge-postbtn">\n    <button ion-button (click)="goToSuperfanchallengePage()">Post Your Entry</button>\n  </div>\n</div>\n\n</ion-content>\n\n<page-footer></page-footer>'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/otherfanentryview/otherfanentryview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], OtherfanentryviewPage);
    return OtherfanentryviewPage;
    var OtherfanentryviewPage_1;
}());

//# sourceMappingURL=otherfanentryview.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__termsandcondition_termsandcondition__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.createSuccess = false;
        this.userData = { "password": "", "name": "", "username": "", "email": "", "dob": "", "city": "" };
    }
    RegisterPage.prototype.backtomain = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* Login */]);
    };
    RegisterPage.prototype.signup = function () {
        var _this = this;
        this.authService.postData(this.userData, 'signup').then(function (result) {
            _this.responseData = result;
            if (_this.responseData.userData) {
                console.log(_this.responseData);
                localStorage.setItem('userData', JSON.stringify(_this.responseData));
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__termsandcondition_termsandcondition__["a" /* TermsandconditionPage */]);
            }
            else {
                _this.showPopup("Error", "User already exists.");
            }
        }, function (error) {
            _this.showPopup("Error", error);
        });
    };
    RegisterPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.navCtrl.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage.prototype.loginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* Login */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/register/register.html"*/'<ion-content>\n  <div class="headerbg">\n    <ion-row class="top-icons">\n      <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n          <button ion-button icon-left (click)="backtomain()"> \n            <ion-icon name="arrow-back"></ion-icon>\n              \n            </button>\n            \n      </ion-col>\n\n      <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n        <p text-right (click)="loginPage()">Login</p>\n      </ion-col>\n    </ion-row>\n    <img text-center src="assets/imgs/img_logo.png" alt="logo">\n  </div>\n \n  <div class="graybg">\n\n    <div class="reg-form">\n      <ion-list>\n        <h3 text-center>Create Account</h3>\n        <hr>\n        <ion-item>\n          <ion-input type="text" [(ngModel)]="userData.name" placeholder="Enter Name"></ion-input> \n        </ion-item>\n\n        <ion-item>\n          <ion-input type="text" [(ngModel)]="userData.username" placeholder="Enter User Name"></ion-input> \n        </ion-item>\n\n        <ion-item>\n          <ion-input type="text" [(ngModel)]="userData.email" placeholder="Enter Email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input type="password" [(ngModel)]="userData.password" placeholder="Enter Password"></ion-input>\n        </ion-item>\n\n		<ion-item>\n          <ion-input type="text" [(ngModel)]="userData.dob" placeholder="Enter Birth Day"></ion-input>\n        </ion-item>\n		\n		<ion-item>\n          <ion-input type="text" [(ngModel)]="userData.city" placeholder="Enter City/State"></ion-input>\n        </ion-item>\n      </ion-list>\n  \n    </div>\n    <div text-center>\n      <button ion-button class="redbtn" (click)="signup()">Sign up</button>\n    </div>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavteamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authservice_authservice__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FavteamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavteamPage = /** @class */ (function () {
    function FavteamPage(navCtrl, navParams, loadingCtrl, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.userData = { "name": "" };
        this.userPostData = {
            user_id: ""
        };
        this.initializeItems();
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
    }
    FavteamPage.prototype.initializeItems = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading Please Wait...'
        });
        loading.present();
        this.authService.postData(this.userPostData, "getallteams").then(function (result) {
            _this.resposeData = result;
            _this.items = _this.resposeData.data;
            _this.teams = _this.resposeData.data;
            loading.dismiss();
        }, function (err) {
            //Connection failed message
            loading.dismiss();
        });
    };
    FavteamPage.prototype.filterTechnologies = function (param) {
        //this.initializeItems();
        this.items = this.teams;
        var val = param;
        // DON'T filter the technologies IF the supplied input is an empty string
        if (val.trim() !== '') {
            this.items = this.items.filter(function (item) {
                return item.team_name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.team_name.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
    };
    FavteamPage.prototype.getSelectedItems = function (selectedOption) {
        this.selectteam = selectedOption;
    };
    // selctRadioBtn(questionID,answer){
    //   }
    FavteamPage.prototype.favnextPage = function () {
        var _this = this;
        var myteamData = ({ "user_id": this.userDetails.user_id, "selectedteams": this.selectteam });
        if (myteamData) {
            this.authService.postData(myteamData, "SelectedTeams").then(function (result) {
                _this.resposeData = result;
                //console.log(this.resposeData);
                if (_this.resposeData) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
                }
                else {
                    //this.showAlert();
                }
            }, function (err) {
                //Connection failed message
            });
        }
        else {
            //this.showAlert();
        }
    };
    FavteamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favteam',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/favteam/favteam.html"*/'<ion-content>\n    <div class="headerbg">\n      <ion-row class="top-icons">\n        <ion-col col-12 text-center>\n          <p>Top your favorite team</p>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div class="logo">\n    <img src="assets/imgs/logo.png" alt="logo">\n    </div>\n    <div class="searchbox">\n      <ion-searchbar (ionInput)="filterTechnologies($event.target.value)" placeholder="Search your team hare"></ion-searchbar>\n    </div>\n    <div class="team-select">\n      <ion-list radio-group [(ngModel)]="autoManufacturers">\n        <ion-item *ngFor="let item of items; let i = index">\n          <ion-label>{{item.team_name}}</ion-label>\n          <ion-radio value="{{item.id}}" (ionSelect)="getSelectedItems(item.id)"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </div>\n    <footer><button ion-button icon-center (click)="favnextPage()">Next</button></footer>\n  </ion-content>'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/favteam/favteam.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_authservice_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], FavteamPage);
    return FavteamPage;
}());

//# sourceMappingURL=favteam.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperfanchallengePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dailycompeteview_dailycompeteview__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__otherfanentryview_otherfanentryview__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__competescreen_competescreen__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SuperfanchallengePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SuperfanchallengePage = /** @class */ (function () {
    function SuperfanchallengePage(navCtrl, navParams, authService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.userPostData = {
            user_id: "",
            challenge_type: "bonus",
        };
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.ionViewDidLoad();
    }
    SuperfanchallengePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SuperfanchallengePage');
        this.authService.postData(this.userPostData, "getchallengeposts").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.data) {
                _this.posts = _this.resposeData.data;
                console.log(_this.posts);
            }
            else {
                console.log("No access");
            }
        }, function (err) {
            //Connection failed message
            console.log("No access");
        });
    };
    SuperfanchallengePage.prototype.goToOtherfanentryviewPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__otherfanentryview_otherfanentryview__["a" /* OtherfanentryviewPage */], { postId: id });
    };
    SuperfanchallengePage.prototype.goToCompetescreenPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__competescreen_competescreen__["a" /* CompetescreenPage */]);
    };
    SuperfanchallengePage.prototype.goToDailycompeteviewPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dailycompeteview_dailycompeteview__["a" /* DailycompeteviewPage */]);
    };
    SuperfanchallengePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-superfanchallenge',template:/*ion-inline-start:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/superfanchallenge/superfanchallenge.html"*/'<!--\n  Generated template for the SuperfanchallengePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <div class="headerbg">\n        <ion-row>\n            <ion-col col-12>\n            <div class="logo">\n              <img src="assets/imgs/logo.png" alt="logo">\n            </div>\n            </ion-col>\n          </ion-row>\n    </div>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- <div class="pagetitle">#1 Super Fan Challenge</div>\n  <div class="viewchallenge">\n    <div class="left">\n        <img src="{{userDetails.profilePicture}}" alt="User">\n		<span>Georgia Tech</span>\n    </div>\n    <div class="right"><button ion-button (click)="goToDailycompeteviewPage()">Play Now!</button></div>\n  </div> -->\n	<div class="fan-challenge">\n      <h3>#1 Super Fan Challenge!</h3>\n      <div class="button-sec">\n         <h4>American Athletic</h4>\n         <button ion-button (click)="goToDailycompeteviewPage()">Play <br>Now!</button>\n      </div>\n    </div>\n\n    <div class="bonus-challenge">\n        <h3>Bonus Challenge</h3>\n         <div class="button-sec">\n            <button ion-button (click)="goToCompetescreenPage()">Play <br>Now!</button>\n            <h4>Dog Day Tuesday!</h4>\n           \n         </div>\n    </div>\n  <div class="videophoto">\n    <ul>\n      <li *ngFor="let post of posts; let id = index" >\n		<div><video *ngIf="post.type == \'Video\'" controls >\n			<source src="{{post.media}}#t=1" type="video/mp4">\n		</video>\n    <img *ngIf="post.type == \'Image\'" src="{{post.media}}">\n  </div>\n  <div class="click-layer" (click)="goToOtherfanentryviewPage(post.id)">\n  </div>\n      </li>\n    </ul>\n  </div>\n</ion-content>\n\n<page-footer></page-footer>'/*ion-inline-end:"/Users/Maverick/Desktop/firstTest/appv2/src/pages/superfanchallenge/superfanchallenge.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], SuperfanchallengePage);
    return SuperfanchallengePage;
}());

//# sourceMappingURL=superfanchallenge.js.map

/***/ })

},[222]);
//# sourceMappingURL=main.js.map