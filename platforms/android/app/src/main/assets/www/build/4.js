webpackJsonp([4],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacePageModule", function() { return PlacePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__place__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlacePageModule = /** @class */ (function () {
    function PlacePageModule() {
    }
    PlacePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__place__["a" /* PlacePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__place__["a" /* PlacePage */]),
            ],
        })
    ], PlacePageModule);
    return PlacePageModule;
}());

//# sourceMappingURL=place.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlacePage = /** @class */ (function () {
    function PlacePage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.idLocal = this.navParams.get('info');
        this.info;
    }
    PlacePage.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.idLocal);
        var req = this.http.post('http://estareservado.ctrlztest.com.ar/traerlocaldetalle.php?localid=' + this.idLocal, {}, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } })
            .subscribe(function (res) {
            _this.info = JSON.parse(res['data'])['store'];
            console.log(_this.info);
        }, function (err) { console.log('Error', err); });
    };
    PlacePage.prototype.goToEvents = function () {
        this.navCtrl.push('EventosPage', { info: this.idLocal, nombreLocal: this.info[0].nombre });
        //console.log("Holaaa!");
    };
    PlacePage.prototype.goToMap = function (direcc) {
        this.navCtrl.push('MapPage', { direcc: direcc });
    };
    PlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-place',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/place/place.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title color="secondary">Lugar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg">\n  <ion-grid>\n    <ion-card *ngIf=info>\n      <img src="{{info[0].foto}}"/>\n    <ion-card-content>\n      <ion-card-title>\n        Descripcion\n      </ion-card-title>\n      <p>\n        {{info[0].descripcion}}    \n      </p>\n    </ion-card-content>\n        <ion-row>\n          <ion-col>\n            <ion-toolbar style="width: 100% !important; margin: 0 !important;">\n              <ion-buttons>\n                <button (click)="goToMap(info[0].direccion)" ion-button style="margin-left: 30%;">\n                  <div>\n                    <ion-icon name="pin"></ion-icon>\n                    <span>UBICACIÓN</span>\n                  </div>\n                </button>\n              </ion-buttons>\n            </ion-toolbar>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <button ion-button full color="secondary"(click)="goToEvents()">Eventos Actuales</button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/place/place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], PlacePage);
    return PlacePage;
}());

//# sourceMappingURL=place.js.map

/***/ })

});
//# sourceMappingURL=4.js.map