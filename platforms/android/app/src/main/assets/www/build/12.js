webpackJsonp([12],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmacionPageModule", function() { return ConfirmacionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmacion__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmacionPageModule = /** @class */ (function () {
    function ConfirmacionPageModule() {
    }
    ConfirmacionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirmacion__["a" /* ConfirmacionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmacion__["a" /* ConfirmacionPage */]),
            ],
        })
    ], ConfirmacionPageModule);
    return ConfirmacionPageModule;
}());

//# sourceMappingURL=confirmacion.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmacionPage = /** @class */ (function () {
    function ConfirmacionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfirmacionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }, 2500);
    };
    ConfirmacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmacion',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/confirmacion/confirmacion.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title color="secondary">Reserva Confirmada</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-grid>\n    <ion-row style="margin-top: 80px;">\n      <ion-col style="margin: auto;">\n        <img style="margin-left: 70px;width: 50%; height: 50%;" src="http://estareservado.ctrlztest.com.ar/imgApp_Reservo/logo-reservado.png">\n      </ion-col>\n    </ion-row>\n    <ion-row style="margin-top: 60px;">\n      <ion-col style="text-align: center;">\n        <p style="color: white;">Muchas gracias por utilizar <strong>RESERVADO</strong>,<br/>su reserva a sido confirmada.</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/confirmacion/confirmacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ConfirmacionPage);
    return ConfirmacionPage;
}());

//# sourceMappingURL=confirmacion.js.map

/***/ })

});
//# sourceMappingURL=12.js.map