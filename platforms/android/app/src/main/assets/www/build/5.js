webpackJsonp([5],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PerfilPageModule = /** @class */ (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */]),
            ],
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());

//# sourceMappingURL=perfil.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.info = this.navParams.get('info');
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        /*
        this.http.get('http://estareservado.ctrlztest.com.ar/traereventos.php')
          .subscribe((response)=>{
            this.info = JSON.parse(response['data'])
            console.log(this.info['eventos'][0].id)
          })
        */
        console.log(this.info);
    };
    PerfilPage.prototype.savePerfil = function () {
        //this.navCtrl.push(TabsAdminPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/perfil/perfil.html"*/'<ion-header>\n  <ion-navbar color ="dark">\n    <div style="display: flex;">\n      <ion-title color="secondary">Tu Perfil</ion-title>\n      <div style="width: 100px; height: 100px; border: 1px solid #666;">\n        <img src="https://pixel.nymag.com/imgs/daily/vulture/2017/06/14/14-tom-cruise.w710.h473.jpg">\n      </div>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <form #loginForm="ngForm" (ngSubmit)="savePerfil()" autocomplete="off" id="cloud-layer">\n                <ion-item class="no-scroll">\n                  <ion-label><ion-icon name="person"></ion-icon></ion-label>\n                  <ion-input placeholder="Nombre" type="text" required></ion-input>\n                </ion-item>    \n                <ion-item>\n                  <ion-label><ion-icon name="person"></ion-icon></ion-label>\n                  <ion-input placeholder="Apellido" type="text" required></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n                  <ion-input placeholder="E-mail" type="text" required></ion-input>\n              </ion-item>    \n              <ion-item>\n                  <ion-label><ion-icon name="call"></ion-icon></ion-label>\n                  <ion-input placeholder="Telefono" type="number" required></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label><ion-icon name="card"></ion-icon></ion-label>\n                  <ion-input placeholder="DNI" type="number" required></ion-input>\n              </ion-item>\n        <ion-row style="margin-top:20px;">\n          <ion-col>\n            <button ion-button class="submit-btn" full type="submit">Continuar</button>\n          </ion-col>\n        </ion-row>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ })

});
//# sourceMappingURL=5.js.map