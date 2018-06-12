webpackJsonp([13],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewEventPageModule", function() { return AddNewEventPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_new_event__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddNewEventPageModule = /** @class */ (function () {
    function AddNewEventPageModule() {
    }
    AddNewEventPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_new_event__["a" /* AddNewEventPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_new_event__["a" /* AddNewEventPage */]),
            ],
        })
    ], AddNewEventPageModule);
    return AddNewEventPageModule;
}());

//# sourceMappingURL=add-new-event.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservas_admin_reservas_admin__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddNewEventPage = /** @class */ (function () {
    function AddNewEventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddNewEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddNewEventPage');
    };
    AddNewEventPage.prototype.saveEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reservas_admin_reservas_admin__["a" /* ReservasAdminPage */]);
    };
    AddNewEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-new-event',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/add-new-event/add-new-event.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title color="secondary">Agregar Fiesta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form #loginForm="ngForm" (ngSubmit)="saveEvent()" autocomplete="off">\n    <ion-row>\n      <ion-col>\n        <ion-list inset>\n          <ion-item>\n            <ion-label><ion-icon name="person"></ion-icon></ion-label>\n            <ion-input placeholder="Nombre" type="text" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label><ion-icon name="calendar"></ion-icon></ion-label>\n            <ion-input placeholder="Fecha y Hora Inical"></ion-input>\n            <ion-datetime displayFormat="MMM DD, HH:mm"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label><ion-icon name="time"></ion-icon></ion-label>\n            <ion-input placeholder="Fecha y Hora Final"></ion-input>\n            <ion-datetime displayFormat="MMM DD, HH:mm"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label><ion-icon name="disc"></ion-icon></ion-label>\n            <ion-input placeholder="Tipo de Evento" type="text" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label><ion-icon name="image"></ion-icon></ion-label>\n            <ion-input placeholder="Cantidad Entradas" type="number" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label><ion-icon name="cash"></ion-icon></ion-label>\n            <ion-input placeholder="Precio" type="number" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label><ion-icon name="images"></ion-icon></ion-label>\n            <ion-input placeholder="Foto - (url)" type="text" required></ion-input>\n          </ion-item>  \n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row style="margin-top:20px;">\n      <ion-col>\n        <button ion-button class="submit-btn" full type="submit">Agregar</button>\n      </ion-col>\n    </ion-row>\n  </form>\n  <ion-row style="margin-top: 10px;">\n    <ion-col style="margin: auto;">\n      <img style="margin-left: 35%;width: 30%; height: 30%;" src="http://estareservado.ctrlztest.com.ar/imgApp_Reservo/logo-reservado.png">\n    </ion-col>\n  </ion-row>  \n</ion-content>\n\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/add-new-event/add-new-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AddNewEventPage);
    return AddNewEventPage;
}());

//# sourceMappingURL=add-new-event.js.map

/***/ })

});
//# sourceMappingURL=13.js.map