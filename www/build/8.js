webpackJsonp([8],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosPageModule", function() { return EventosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventos__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventosPageModule = /** @class */ (function () {
    function EventosPageModule() {
    }
    EventosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__eventos__["a" /* EventosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__eventos__["a" /* EventosPage */]),
            ],
        })
    ], EventosPageModule);
    return EventosPageModule;
}());

//# sourceMappingURL=eventos.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosPage; });
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




var EventosPage = /** @class */ (function () {
    function EventosPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.data = this.navParams.get('info');
        this.nombreLocal = this.navParams.get('nombreLocal');
        this.eventos;
    }
    EventosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://estareservado.ctrlztest.com.ar/traereventosxlocal.php?localid=' + this.data)
            .subscribe(function (response) {
            _this.info = JSON.parse(response['data']);
            //console.log('data',response);
            _this.eventos = _this.info['evento'];
            console.log('aqui', _this.eventos);
        });
    };
    EventosPage.prototype.ionViewDidLoad = function () {
        console.log(this.data);
        console.log(this.nombreLocal);
    };
    EventosPage.prototype.sinEventos = function (eventos) {
        if (eventos.length === 0)
            return 'No hay eventos agregados en este Local!';
    };
    EventosPage.prototype.cortarCaracteres = function (frase) {
        var resultado;
        if (frase.length >= 20) {
            resultado = frase.substring(0, 20);
            return resultado + ' ...';
        }
        else {
            resultado = frase;
            return resultado;
        }
    };
    EventosPage.prototype.showAlert = function (direcc) {
        var alert = this.alertCtrl.create({
            title: 'Dirección',
            subTitle: direcc,
            buttons: ['OK']
        });
        alert.present();
    };
    EventosPage.prototype.goToEvent = function (e) {
        this.navCtrl.push('EventPage', { info: e, nombreLocal: this.nombreLocal });
        //console.log('aqui');
    };
    EventosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventos',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/eventos/eventos.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title color="secondary">Eventos Actuales</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 style="text-align: center;">{{nombreLocal}}</h3>\n  <h5 style="text-align: center;" *ngIf="eventos">{{sinEventos(eventos)}}</h5>\n  <ion-list *ngFor="let evento of eventos">    \n        <ion-item>\n          <ion-thumbnail item-start (click)=goToEvent(evento)>\n            <img src="{{evento.foto}}">\n          </ion-thumbnail>\n          <div style="display: flex; text-align: center;">\n            <ion-icon style="float: left; margin: 3px;" name="pin"></ion-icon><h4 (click)="showAlert(evento.direccion)" style="float: right; margin-top: 5px;">{{cortarCaracteres(evento.direccion)}}</h4>\n          </div>\n          <div style="display: flex; text-align: center;">\n              <ion-icon style="float: left; margin: 3px;" name="logo-facebook"></ion-icon><p style="float: right; margin-top: 5px;">{{evento.nombre}}</p>\n          </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/eventos/eventos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EventosPage);
    return EventosPage;
}());

//# sourceMappingURL=eventos.js.map

/***/ })

});
//# sourceMappingURL=8.js.map