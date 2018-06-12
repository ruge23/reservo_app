webpackJsonp([7],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListIngresosPageModule", function() { return ListIngresosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_ingresos__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListIngresosPageModule = /** @class */ (function () {
    function ListIngresosPageModule() {
    }
    ListIngresosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_ingresos__["a" /* ListIngresosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_ingresos__["a" /* ListIngresosPage */]),
            ],
        })
    ], ListIngresosPageModule);
    return ListIngresosPageModule;
}());

//# sourceMappingURL=list-ingresos.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListIngresosPage; });
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



var ListIngresosPage = /** @class */ (function () {
    function ListIngresosPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.idEvent = this.navParams.get('info').id;
        this.ingresos;
    }
    ListIngresosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.idEvent);
        this.http.post('http://estareservado.ctrlztest.com.ar/traerinvitadosevento.php?eventoid=' + this.idEvent, {}, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } })
            .subscribe(function (res) {
            _this.ingresos = JSON.parse(res['data'])['reserva'];
            console.log(_this.ingresos);
        }, function (err) { console.log('Error', err); });
    };
    ListIngresosPage.prototype.sinIngresos = function (data) {
        if (data.length === 0)
            return 'No hay lista de ingresos en este evento!!';
    };
    ListIngresosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-ingresos',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/list-ingresos/list-ingresos.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Lista ingresos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 *ngIf="ingresos" style="text-align: center;">{{sinIngresos(ingresos)}}</h3>\n  <ion-list *ngFor="let ingreso of ingresos">\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="http://graph.facebook.com/{{ingreso.facebookid}}/picture?type=square">\n        </ion-avatar>\n        <h2>{{ingreso.nombreusuario}} {{ingreso.usuarioapellido}}</h2>\n        <p>{{ingreso.usuariodni}}</p>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/list-ingresos/list-ingresos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ListIngresosPage);
    return ListIngresosPage;
}());

//# sourceMappingURL=list-ingresos.js.map

/***/ })

});
//# sourceMappingURL=7.js.map