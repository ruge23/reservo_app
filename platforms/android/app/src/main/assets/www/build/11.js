webpackJsonp([11],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleReservaPageModule", function() { return DetalleReservaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_reserva__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalleReservaPageModule = /** @class */ (function () {
    function DetalleReservaPageModule() {
    }
    DetalleReservaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalle_reserva__["a" /* DetalleReservaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalle_reserva__["a" /* DetalleReservaPage */]),
            ],
        })
    ], DetalleReservaPageModule);
    return DetalleReservaPageModule;
}());

//# sourceMappingURL=detalle-reserva.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleReservaPage; });
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


var DetalleReservaPage = /** @class */ (function () {
    function DetalleReservaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.info = [];
        this.data = [];
        this.info = this.navParams.get('info');
        this.data = this.navParams.get('data');
    }
    DetalleReservaPage.prototype.ionViewDidLoad = function () {
        console.log('data', this.data);
        console.log('info', this.info);
    };
    DetalleReservaPage.prototype.mostrarDia = function (fecha) {
        var day = fecha.split("-").reverse();
        return day[0] + '/' + day[1] + '/' + day[2];
    };
    DetalleReservaPage.prototype.pago = function (data) {
        if (data === "0") {
            return "No Pago";
        }
        else {
            return "Pago";
        }
    };
    DetalleReservaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalle-reserva',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/detalle-reserva/detalle-reserva.html"*/'<ion-header>\n  <ion-navbar color="dark">\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid *ngIf=info>\n        <h1 style="margin-top: 5px; text-align: center; color: white;">Perfil Scaneado</h1>\n        <ion-row>\n          <ion-col style="margin:20px 30px;height: 70%;width: 70%; text-align: center; border: 1px solid #666;">\n            <img style="height: 80%; width: 80%; margin: 20px 20px; background-size: cover;background-position: center;" src="http://graph.facebook.com/{{info.facebookid}}/picture?type=square">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col style="text-align: center;">\n            <h3 style="color: white;">{{info.nombreusuario}} {{info.usuarioapellido}}</h3>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col *ngIf=data style="text-align: center;">\n            <p style="color: white;"><ion-icon name="calendar"></ion-icon>{{mostrarDia(data)}}</p>\n          </ion-col>\n          <ion-col style="text-align: center;">\n            <p style="color: white;"><ion-icon name="card"></ion-icon>{{info.usuariodni}}</p>\n          </ion-col>\n          <ion-col style="text-align: center;">\n            <p style="border-left: 1px solid #666; color: white;">{{info.edad}} años</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col style="text-align: center;">\n            <ion-toolbar color="dark">\n              <ion-badge style="font-size: 2em;" color="secondary">{{pago(info.pago)}}</ion-badge>\n            </ion-toolbar>\n          </ion-col>\n        </ion-row>\n        <ion-row style="margin-top: 10px;">\n          <ion-col style="margin: auto;">\n            <img style="margin-left: 35%;width: 30%; height: 30%;" src="http://estareservado.ctrlztest.com.ar/imgApp_Reservo/logo-reservado.png">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/detalle-reserva/detalle-reserva.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetalleReservaPage);
    return DetalleReservaPage;
}());

//# sourceMappingURL=detalle-reserva.js.map

/***/ })

});
//# sourceMappingURL=11.js.map