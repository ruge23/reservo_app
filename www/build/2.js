webpackJsonp([2],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservaPageModule", function() { return ReservaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reserva__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReservaPageModule = /** @class */ (function () {
    function ReservaPageModule() {
    }
    ReservaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reserva__["a" /* ReservaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reserva__["a" /* ReservaPage */]),
            ],
        })
    ], ReservaPageModule);
    return ReservaPageModule;
}());

//# sourceMappingURL=reserva.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReservaPage = /** @class */ (function () {
    function ReservaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.info = [];
        this.info = this.navParams.get('info');
    }
    ReservaPage.prototype.ionViewDidLoad = function () {
        console.log(this.info);
    };
    ReservaPage.prototype.goToConfirmacion = function () {
        this.navCtrl.push('ConfirmacionPage');
    };
    ReservaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reserva',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/reserva/reserva.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title color="secondary">Confirmar Reserva</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content *ngIf=info>\n  <ion-grid>\n    <h1 style="margin-top: 5px; margin-left: 10px;">{{info.nombrelocal}}</h1>\n    <ion-row>\n      <ion-col style="margin:20px 30px;height: 90%;width: 90%; text-align: center; border: 1px solid #666;">\n        <img style="height: 80%; width: 80%; margin: 20px 20px;;" src="{{info.foto}}">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col style="text-align: center;">\n        <p>{{info.fechadesde}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col style="text-align: center;">\n        <p>{{info.fechahasta}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row style="margin-top: 20px;">\n      <ion-col style="text-align: center; border-right: 1px solid #666;">\n        <ion-icon name="pin"></ion-icon>\n        <div style="text-align: center;">{{info.direccion}}</div>\n      </ion-col>\n      <ion-col style="text-align: center;">\n        <ion-icon name="call"></ion-icon>\n        <div style="text-align: center;">{{info.nombre}}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col style="text-align: center; margin-top: 20px;">\n        <button (click)="goToConfirmacion()" ion-button full>RESERVAR</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/reserva/reserva.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ReservaPage);
    return ReservaPage;
}());

//# sourceMappingURL=reserva.js.map

/***/ })

});
//# sourceMappingURL=2.js.map