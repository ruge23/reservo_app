webpackJsonp([9],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageModule", function() { return EventPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventPageModule = /** @class */ (function () {
    function EventPageModule() {
    }
    EventPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event__["a" /* EventPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event__["a" /* EventPage */]),
            ],
        })
    ], EventPageModule);
    return EventPageModule;
}());

//# sourceMappingURL=event.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
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



var EventPage = /** @class */ (function () {
    function EventPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.usuarioId = 623982267;
        this.getInfoUser();
        this.info;
        this.infoUser;
        this.nombreLocal = this.navParams.get('nombreLocal');
    }
    EventPage.prototype.getInfoUser = function () {
        var _this = this;
        this.http.post('http://estareservado.ctrlztest.com.ar/traerperfilusuario.php?faceid=' + this.usuarioId, {}, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } })
            .subscribe(function (response) {
            _this.infoUser = response['data'];
            console.log(_this.infoUser);
        }, function (err) { console.log(err); });
    };
    EventPage.prototype.ionViewDidLoad = function () {
        this.info = this.navParams.get('info');
        console.log(this.info);
        console.log(this.nombreLocal);
    };
    EventPage.prototype.mostrarDia = function (fecha) {
        var date = new Date(fecha);
        var dia = date.getDay() + 1;
        var day;
        switch (dia) {
            case 0:
                day = "Domingo";
                break;
            case 1:
                day = "Lunes";
                break;
            case 2:
                day = "Martes";
                break;
            case 3:
                day = "Miércoles";
                break;
            case 4:
                day = "Jueves";
                break;
            case 5:
                day = "Viernes";
                break;
            case 6:
                day = "Sábado";
        }
        return day;
    };
    EventPage.prototype.goToPago = function () {
        console.log('SII!');
    };
    EventPage.prototype.goToReserva = function (e) {
        this.navCtrl.push('ReservaPage', { info: e });
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/event/event.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title color="secondary">Evento</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page" *ngIf="info">\n  <ion-card>\n    <img src="{{info.foto}}"/>\n    <div *ngIf="nombreLocal" class="card-title">{{nombreLocal}}</div>\n  </ion-card>\n  <ion-toolbar color="dark">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-badge style="margin-left:5%; margin-top:5%; font-size: 1.5em;" color="secondary">{{mostrarDia(info.fechadesde)}}</ion-badge>\n        </ion-col>\n        <ion-col>\n          <h6 style="color: #f4f4f4; text-align: center;">{{info.nombre}}</h6>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <form #loginForm="ngForm" (ngSubmit)="goToReserva(info)" autocomplete="off" id="cloud-layer">\n    <div style="height: 275px; border: 1px solid #666; border-radius: 20px; margin-top: 10px !important;">\n      <ion-row>\n        <ion-col>\n          <ion-list *ngIf=infoUser>\n            <ion-item>\n              <ion-label>Nombre:</ion-label><ion-label>{{infoUser[2]}}</ion-label>\n            </ion-item>    \n            <ion-item>\n                <ion-label>Apellido:</ion-label><ion-label>{{infoUser[3]}}</ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label>DNI:</ion-label><ion-label>{{infoUser.dni}}</ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label>Fecha Nac:</ion-label><ion-label>{{infoUser[7]}}</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>${{info.precio}}</ion-label>\n              <ion-label><button (click)="goToPago()" style="margin-left: 5px;" ion-button outline item-end>\n                  <ion-icon style="margin: 5px; font-size: 1.5em;" name="card"></ion-icon>\n                  Tarjeta\n                </button></ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </div>\n      <ion-row>\n        <ion-col>\n          <button ion-button style="margin-left: 60%;" type="submit">RESERVAR</button>\n        </ion-col>\n      </ion-row>\n  </form> \n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/event/event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ })

});
//# sourceMappingURL=9.js.map