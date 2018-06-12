webpackJsonp([1],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumenEventPageModule", function() { return ResumenEventPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resumen_event__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResumenEventPageModule = /** @class */ (function () {
    function ResumenEventPageModule() {
    }
    ResumenEventPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__resumen_event__["a" /* ResumenEventPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__resumen_event__["a" /* ResumenEventPage */]),
            ],
        })
    ], ResumenEventPageModule);
    return ResumenEventPageModule;
}());

//# sourceMappingURL=resumen-event.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumenEventPage; });
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


var ResumenEventPage = /** @class */ (function () {
    function ResumenEventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.info = [];
        this.info = this.navParams.get('info');
    }
    ResumenEventPage.prototype.ionViewDidLoad = function () {
        console.log(this.info);
    };
    ResumenEventPage.prototype.goToListInvitados = function (e) {
        this.navCtrl.push('ListIngresosPage', { info: e });
    };
    ResumenEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resumen-event',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/resumen-event/resumen-event.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title color="secondary">Resumen Eventos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page" *ngIf=info>\n  <ion-card>\n    <img src="{{info.foto}}"/>\n    <div class="card-title">{{info.nombre}}</div>\n    <div class="card-subtitle">{{info.fechadesde}}</div>\n  </ion-card>\n  <ion-row>\n      <ion-col>\n        <ion-toolbar style="width: 100% !important; margin: 0 !important;">\n          <ion-buttons>\n            <button ion-button style="margin-left: 30%;">\n              <div>\n                <span>TOTAL VENTAS : 51</span>\n              </div>\n            </button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n  </ion-row>\n  <ion-card style="margin-top: 20px;">\n    <ion-card-title>\n      <h5 style="margin-left: 10px;">Resumen de Ventas</h5>\n    </ion-card-title>\n    <ion-card-content>\n      <button ion-button full (click)="goToListInvitados(this[\'info\'])">\n        VER LISTA\n      </button>\n    </ion-card-content>\n  </ion-card>\n  <ion-row>\n      <ion-col style="margin-top: 20px;">\n        <ion-toolbar color="dark" style="width: 100% !important; margin: 0 !important;">\n            <ion-row>\n              <ion-col col-4 style="text-align: center; margin: auto auto;">\n                <ion-icon color="primary" style="font-size: 3em;" name="pie"></ion-icon>\n              </ion-col>\n              <ion-col col-8 style="text-align: center;">\n                <div>\n                  <p style="color: grey;">Entradas Vendidas</p>\n                  <ion-badge color="secondary">51/100</ion-badge>\n                </div>\n              </ion-col>\n            </ion-row>\n        </ion-toolbar>\n      </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/resumen-event/resumen-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ResumenEventPage);
    return ResumenEventPage;
}());

//# sourceMappingURL=resumen-event.js.map

/***/ })

});
//# sourceMappingURL=1.js.map