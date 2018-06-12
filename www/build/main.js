webpackJsonp([19],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservasAdminPage; });
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



var ReservasAdminPage = /** @class */ (function () {
    function ReservasAdminPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.adminId = 1; //
        this.eventos;
    }
    ReservasAdminPage.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://estareservado.ctrlztest.com.ar/traereventosxlocal.php?localid=' + this.adminId)
            .subscribe(function (res) {
            _this.eventos = JSON.parse(res['data'])['evento'];
            console.log(_this.eventos);
        }, function (err) { console.log(err); });
    };
    ReservasAdminPage.prototype.goToEvent = function (e) {
        this.navCtrl.push('ResumenEventPage', { info: e });
    };
    ReservasAdminPage.prototype.cortarCaracteres = function (frase) {
        var resultado;
        if (frase.length >= 10) {
            resultado = frase.substring(0, 10);
            return resultado + ' ...';
        }
        else {
            resultado = frase;
            return resultado;
        }
    };
    ReservasAdminPage.prototype.goToAddEvent = function () {
        this.navCtrl.push('AddNewEventPage');
        //console.log('holaaaaa');
    };
    ReservasAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reservas-admin',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/reservas-admin/reservas-admin.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title color="secondary">Reservas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor="let event of eventos">    \n    <ion-grid>\n      <ion-item (click)=goToEvent(event)>\n        <ion-row align-items-center>\n          <ion-col style="text-align: center;">\n            <p><ion-icon style="font-size: 1.5em; color: black" name="pie"></ion-icon></p>\n            <ion-badge color="secondary">51/100</ion-badge>\n          </ion-col>\n          <ion-col>\n            <p style="color: black;">{{cortarCaracteres(event.nombre)}}</p>\n            <div style="display: flex;">\n              <ion-badge color="secondary">{{event.fechadesde}}</ion-badge>\n              <ion-icon style="margin-left: 5px; font-size: 1.5em; color: black;" name="calendar"></ion-icon>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div style="text-align: center; border: 1px solid #666; border-radius: 20px;"><p style="font-size: 0.8em; color: black;">Precio</p><p style="font-size: 0.6em; color: black;">${{event.precio}}</p></div>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-grid>      \n  </ion-list>\n  <ion-fab bottom right>\n    <button ion-fab mini (click)="goToAddEvent()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/reservas-admin/reservas-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ReservasAdminPage);
    return ReservasAdminPage;
}());

//# sourceMappingURL=reservas-admin.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_popover_popover__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http, geolocation, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.geolocation = geolocation;
        this.popoverCtrl = popoverCtrl;
        this.locales;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://estareservado.ctrlztest.com.ar/traerlocales.php')
            .subscribe(function (response) {
            _this.info = JSON.parse(response['data']);
            _this.locales = _this.info['stores'];
            //console.log(this.locales)
        });
    };
    HomePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.geolocation.getCurrentPosition()
            .then(function (position) {
            //console.log(position)
            _this.myPosition = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            console.log('aqui', _this.myPosition);
        });
    };
    //hacer funcion con  =>'geolocation'<=
    // funcion 'filter'
    HomePage.prototype.goToPlace = function (id) {
        this.navCtrl.push('PlacePage', { info: id });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Cercanos a mi</ion-title>\n    <ion-buttons end> \n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list *ngFor="let local of locales">\n      <ion-item (click)=goToPlace(local.id)>\n        <ion-thumbnail item-start>\n          <img src="{{local.foto}}">\n        </ion-thumbnail>\n        <div style="display: flex; text-align: center;">\n          <ion-icon style="float: left; margin: 3px; color: white;" name="logo-facebook"></ion-icon><h4 style="float: right; margin-top: 5px; color: white;">{{local.nombre}}</h4>\n        </div>\n        <div style="display: flex; text-align: center;">\n            <ion-icon style="float: left; margin: 3px; color: white;" name="pin"></ion-icon><p style="float: right; margin-top: 5px; color: white;">{{local.direccion}}•</p>\n        </div>\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListEventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_popover_popover__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListEventsPage = /** @class */ (function () {
    function ListEventsPage(navCtrl, navParams, http, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.popoverCtrl = popoverCtrl;
        this.eventos = [];
        this.localId = 1;
        this.eventos;
    }
    ListEventsPage.prototype.ngOnInit = function (clientId) {
        var _this = this;
        this.http.post('http://estareservado.ctrlztest.com.ar/traereventosxlocal.php?localid=' + this.localId, {}, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } })
            .subscribe(function (res) {
            _this.eventos = JSON.parse(res['data'])['evento'];
            console.log(_this.eventos);
        }, function (err) { console.log('Error', err); });
    };
    ListEventsPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    ListEventsPage.prototype.goToListInvitados = function (e) {
        this.navCtrl.push('ListInvitedPage', { info: e });
    };
    ListEventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-events',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/list-events/list-events.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Lista Eventos</ion-title>\n    <ion-buttons end> \n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list *ngFor="let evento of eventos">    \n        <ion-item (click)=goToListInvitados(evento)>\n          <ion-thumbnail item-start>\n            <img src="{{evento.foto}}">\n          </ion-thumbnail>\n          <div style="display: flex; text-align: center;">\n            <ion-icon style="float: left; margin: 3px; color: white;" name="pin"></ion-icon><h4 style="float: right; margin-top: 5px; color: white;">{{evento.direccion}}</h4>\n          </div>\n          <div style="display: flex; text-align: center;">\n              <ion-icon style="float: left; margin: 3px; color: white;" name="logo-facebook"></ion-icon><p style="float: right; margin-top: 5px; color: white;">{{evento.nombre}}•</p>\n          </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/list-events/list-events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */]])
    ], ListEventsPage);
    return ListEventsPage;
}());

//# sourceMappingURL=list-events.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerPage; });
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


//import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
var ScannerPage = /** @class */ (function () {
    function ScannerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //options: BarcodeScannerOptions;
        this.encodedData = {};
        this.encodeText = '';
        this.scannedData = {};
    }
    ScannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scanner',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/scanner/scanner.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title color="secondary">Scanner QR</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <button ion-button block (click)="scan()">Scan</button>\n      <div *ngIf="scannedData.text">\n        <label>Your barcode is</label>\n        <br>\n        <span>{{scannedData.text}}</span>    \n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/scanner/scanner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ScannerPage);
    return ScannerPage;
}());

//# sourceMappingURL=scanner.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__perfil_admin_perfil_admin__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservas_admin_reservas_admin__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resumen_admin_resumen_admin__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsAdminPage = /** @class */ (function () {
    function TabsAdminPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__perfil_admin_perfil_admin__["a" /* PerfilAdminPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__reservas_admin_reservas_admin__["a" /* ReservasAdminPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__resumen_admin_resumen_admin__["a" /* ResumenAdminPage */];
    }
    TabsAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/tabsadmin/tabsadmin.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Perfil" tabIcon="disc"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Reservas" tabIcon="images"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Resumen" tabIcon="calculator"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/tabsadmin/tabsadmin.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsAdminPage);
    return TabsAdminPage;
}());

//# sourceMappingURL=tabsadmin.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_popover_popover__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PerfilAdminPage = /** @class */ (function () {
    function PerfilAdminPage(navCtrl, navParams, http, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.popoverCtrl = popoverCtrl;
        this.adminId = 1; //
        this.info;
    }
    PerfilAdminPage.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://estareservado.ctrlztest.com.ar/traerlocaldetalle.php?localid=' + this.adminId)
            .subscribe(function (res) {
            _this.info = JSON.parse(res['data'])['store'][0];
            console.log(_this.info);
        }, function (err) { console.log('Error', err); });
    };
    PerfilAdminPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    PerfilAdminPage.prototype.goToEditPerfil = function () {
        this.navCtrl.push('EditPerfilAdminPage');
    };
    PerfilAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil-admin',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/perfil-admin/perfil-admin.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Perfil Administrador</ion-title>\n    <ion-buttons end> \n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row justify-content-end>\n      <ion-col col-4>\n        <button style="background-color: #222;" color="dark">\n          <ion-badge color="dark" (click)="goToEditPerfil()">Editar</ion-badge>\n        </button>       \n      </ion-col>\n    </ion-row>\n    <ion-card class="cards-bg" *ngIf="info">\n      <img src="{{info.foto}}"/>\n      <ion-card-content>\n        <ion-card-title>\n            Descripcion\n        </ion-card-title>\n        <p>\n          {{info.descripcion}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/perfil-admin/perfil-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */]])
    ], PerfilAdminPage);
    return PerfilAdminPage;
}());

//# sourceMappingURL=perfil-admin.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumenAdminPage; });
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



var ResumenAdminPage = /** @class */ (function () {
    function ResumenAdminPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.cuentas;
    }
    ResumenAdminPage.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://estareservado.ctrlztest.com.ar/traerresumencuentas.php?usuarioid=1')
            .subscribe(function (res) {
            _this.cuentas = JSON.parse(res['data'])['resumen'];
            console.log(_this.cuentas);
        }, function (err) { console.log('Error', err); });
    };
    ResumenAdminPage.prototype.mostrarFecha = function (fecha) {
        var split = fecha.split('-').reverse();
        return split[0] + '/' + split[1];
    };
    ResumenAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resumen-admin',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/resumen-admin/resumen-admin.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title color="secondary">Resumen de Cuentas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 style="margin-left: 10px; color: white;">RRPP</h2>\n  <ion-grid style="margin: 0;">\n    <ion-row>\n      <ion-col col-4>\n        <img src="https://pixel.nymag.com/imgs/daily/vulture/2017/06/14/14-tom-cruise.w710.h473.jpg"/>\n      </ion-col>\n      <ion-col col-8>\n        <h3 style="margin-top: 15%; margin-left: 5%; color: white;">Nombre Apellido</h3>\n      </ion-col>\n    </ion-row>  \n  </ion-grid>\n  <ion-list *ngFor="let cuenta of cuentas">    \n    <ion-item>\n      <ion-thumbnail item-start style="border-right: 1px solid grey; text-align: center;">\n        <h5 style="margin-top: 30px; color: white;"><strong>{{mostrarFecha(cuenta.fechaevento)}}</strong></h5>\n      </ion-thumbnail>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p style="color: white;">Anotados</p>\n            <p style="color: white;">Entraron</p>\n          </ion-col>\n          <ion-col>\n            <p style="color: white;">{{cuenta.anotados}}</p>\n            <p style="color: white;">{{cuenta.entraron}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n  <ion-row style="margin-top: 10px;">\n    <ion-col style="margin: auto;">\n      <img style="width: 30%; height: 30%;margin-left: 35%;" src="http://estareservado.ctrlztest.com.ar/imgApp_Reservo/logo-reservado.png">\n    </ion-col>\n  </ion-row>  \n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/resumen-admin/resumen-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ResumenAdminPage);
    return ResumenAdminPage;
}());

//# sourceMappingURL=resumen-admin.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-new-event/add-new-event.module": [
		289,
		13
	],
	"../pages/confirmacion/confirmacion.module": [
		290,
		12
	],
	"../pages/detalle-reserva/detalle-reserva.module": [
		291,
		11
	],
	"../pages/edit-perfil-admin/edit-perfil-admin.module": [
		292,
		10
	],
	"../pages/event/event.module": [
		293,
		9
	],
	"../pages/eventos/eventos.module": [
		294,
		8
	],
	"../pages/list-events/list-events.module": [
		295,
		18
	],
	"../pages/list-ingresos/list-ingresos.module": [
		296,
		7
	],
	"../pages/list-invited/list-invited.module": [
		297,
		0
	],
	"../pages/map/map.module": [
		298,
		6
	],
	"../pages/perfil-admin/perfil-admin.module": [
		299,
		17
	],
	"../pages/perfil/perfil.module": [
		300,
		5
	],
	"../pages/place/place.module": [
		301,
		4
	],
	"../pages/qr-data/qr-data.module": [
		302,
		3
	],
	"../pages/reserva/reserva.module": [
		303,
		2
	],
	"../pages/reservas-admin/reservas-admin.module": [
		304,
		16
	],
	"../pages/resumen-admin/resumen-admin.module": [
		305,
		15
	],
	"../pages/resumen-event/resumen-event.module": [
		306,
		1
	],
	"../pages/scanner/scanner.module": [
		307,
		14
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsClientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_events_list_events__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scanner_scanner__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsClientPage = /** @class */ (function () {
    function TabsClientPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__list_events_list_events__["a" /* ListEventsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__scanner_scanner__["a" /* ScannerPage */];
    }
    TabsClientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/tabsclient/tabsclient.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Eventos" tabIcon="images"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Scanner" tabIcon="crop"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/tabsclient/tabsclient.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsClientPage);
    return TabsClientPage;
}());

//# sourceMappingURL=tabsclient.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.info = [];
        this.userFaceId = 623982267;
        this.info;
    }
    AboutPage.prototype.ngOnInit = function (userId) {
        var _this = this;
        this.http.post('http://estareservado.ctrlztest.com.ar/traerperfilusuario.php?faceid=' + this.userFaceId, {}, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } })
            .subscribe(function (res) {
            _this.info = res['data'];
            console.log(_this.info);
        }, function (err) {
            console.log('Error ocurred', err);
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar color ="dark">\n    <ion-title color="secondary">Tu Perfil</ion-title>\n    <img style="width: 100px; height: 100px;" src="https://pixel.nymag.com/imgs/daily/vulture/2017/06/14/14-tom-cruise.w710.h473.jpg">\n  </ion-navbar>\n</ion-header>\n\n<ion-content *ngIf=info>\n  <form #loginForm="ngForm" id="cloud-layer">\n    <ion-row>\n      <ion-col>\n        <ion-list inset>\n            <ion-item>\n              <ion-label><ion-icon name="person"></ion-icon>{{info[2]}}</ion-label>\n            </ion-item>    \n            <ion-item>\n              <ion-label><ion-icon name="person"></ion-icon>{{info[3]}}</ion-label>\n          </ion-item>\n          <ion-item>\n              <ion-label><ion-icon name="mail"></ion-icon>{{info[4]}}</ion-label>\n          </ion-item>    \n          <ion-item>\n              <ion-label><ion-icon name="call"></ion-icon>{{info.phone}}</ion-label>\n          </ion-item>\n          <ion-item>\n              <ion-label><ion-icon name="card"></ion-icon>{{info.dni}}</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n</form>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
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



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.usuarioId = 3;
        this.reservas;
    }
    ContactPage.prototype.ngOnInit = function () {
        var _this = this;
        this.http.post('http://estareservado.ctrlztest.com.ar/traermisreservas.php?usuarioid=' + this.usuarioId, {}, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } })
            .subscribe(function (response) {
            _this.reservas = JSON.parse(response['data'])['reserva'];
            console.log(_this.reservas);
            //this.info = JSON.parse(response['data']);
            //this.reservas = this.info['reservas'];
        });
    };
    ContactPage.prototype.mostrarDia = function (fecha) {
        var day = fecha.split("-").reverse();
        return day[0] + '/' + day[1] + '/' + day[2];
    };
    ContactPage.prototype.mostrarQR = function (e) {
        this.navCtrl.push('QrDataPage', { info: e });
    };
    ContactPage.prototype.mostrarIcon = function (data) {
        if (data === "0")
            return false;
        if (data === "1")
            return true;
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title color="secondary">\n      Mis Reservas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor="let reserva of reservas">\n    <ion-item (click)="mostrarQR(reserva)">\n      <ion-avatar item-start>\n        <img src="{{reserva.fotoevento}}">\n      </ion-avatar>\n      {{reserva.nombrelugar}}\n      <ion-col>\n        <ion-badge style="margin-left: 5px;" color="secondary">{{mostrarDia(reserva.fechaevento)}}</ion-badge>\n      </ion-col>\n      <ion-col>\n        <ion-icon name="calendar"></ion-icon>\n      </ion-col>\n      <ion-icon *ngIf="mostrarIcon(reserva.estapago)" name="logo-pinterest" item-end></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Lugares" tabIcon="map"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Perfil" tabIcon="person"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Reservas" tabIcon="clipboard"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Historial" tabIcon="chatbubbles"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabsclient_tabsclient__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabsadmin_tabsadmin__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_list_events_list_events__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_scanner_scanner__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_perfil_admin_perfil_admin__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_reservas_admin_reservas_admin__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_resumen_admin_resumen_admin__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_popover_popover__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabsclient_tabsclient__["a" /* TabsClientPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabsadmin_tabsadmin__["a" /* TabsAdminPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_list_events_list_events__["a" /* ListEventsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_scanner_scanner__["a" /* ScannerPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_perfil_admin_perfil_admin__["a" /* PerfilAdminPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reservas_admin_reservas_admin__["a" /* ReservasAdminPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_resumen_admin_resumen_admin__["a" /* ResumenAdminPage */],
                __WEBPACK_IMPORTED_MODULE_18__components_popover_popover__["a" /* PopoverComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-new-event/add-new-event.module#AddNewEventPageModule', name: 'AddNewEventPage', segment: 'add-new-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmacion/confirmacion.module#ConfirmacionPageModule', name: 'ConfirmacionPage', segment: 'confirmacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalle-reserva/detalle-reserva.module#DetalleReservaPageModule', name: 'DetalleReservaPage', segment: 'detalle-reserva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-perfil-admin/edit-perfil-admin.module#EditPerfilAdminPageModule', name: 'EditPerfilAdminPage', segment: 'edit-perfil-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event/event.module#EventPageModule', name: 'EventPage', segment: 'event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/eventos/eventos.module#EventosPageModule', name: 'EventosPage', segment: 'eventos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-events/list-events.module#ListEventsPageModule', name: 'ListEventsPage', segment: 'list-events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-ingresos/list-ingresos.module#ListIngresosPageModule', name: 'ListIngresosPage', segment: 'list-ingresos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-invited/list-invited.module#ListInvitedPageModule', name: 'ListInvitedPage', segment: 'list-invited', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil-admin/perfil-admin.module#PerfilAdminPageModule', name: 'PerfilAdminPage', segment: 'perfil-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/place/place.module#PlacePageModule', name: 'PlacePage', segment: 'place', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qr-data/qr-data.module#QrDataPageModule', name: 'QrDataPage', segment: 'qr-data', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reserva/reserva.module#ReservaPageModule', name: 'ReservaPage', segment: 'reserva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservas-admin/reservas-admin.module#ReservasAdminPageModule', name: 'ReservasAdminPage', segment: 'reservas-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resumen-admin/resumen-admin.module#ResumenAdminPageModule', name: 'ResumenAdminPage', segment: 'resumen-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resumen-event/resumen-event.module#ResumenEventPageModule', name: 'ResumenEventPage', segment: 'resumen-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scanner/scanner.module#ScannerPageModule', name: 'ScannerPage', segment: 'scanner', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabsclient_tabsclient__["a" /* TabsClientPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabsadmin_tabsadmin__["a" /* TabsAdminPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_list_events_list_events__["a" /* ListEventsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_scanner_scanner__["a" /* ScannerPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_perfil_admin_perfil_admin__["a" /* PerfilAdminPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reservas_admin_reservas_admin__["a" /* ReservasAdminPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_resumen_admin_resumen_admin__["a" /* ResumenAdminPage */],
                __WEBPACK_IMPORTED_MODULE_18__components_popover_popover__["a" /* PopoverComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__["a" /* Geolocation */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.overlaysWebView(true);
            statusBar.backgroundColorByHexString('#ffffff');
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login_login__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopoverComponent = /** @class */ (function () {
    function PopoverComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PopoverComponent.prototype.close = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pages_login_login__["a" /* LoginPage */]);
    };
    PopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'popover',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/components/popover/popover.html"*/'<ion-list>\n  <button ion-item (click)="close()">Salir</button>\n</ion-list>'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/components/popover/popover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavController */]])
    ], PopoverComponent);
    return PopoverComponent;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabsclient_tabsclient__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabsadmin_tabsadmin__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.isLoggedIn = false;
    }
    LoginPage.prototype.login = function () {
        this.username = this.user.value.toLowerCase();
        //console.log(this.username, this.password.value)
        if (this.username === "usuario" && this.password.value === "1234") {
            this.navCtrl.push('PerfilPage');
        }
        else if (this.username === "cliente" && this.password.value === "1234") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabsclient_tabsclient__["a" /* TabsClientPage */]);
        }
        else if (this.username === "admin" && this.password.value === "1234") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabsadmin_tabsadmin__["a" /* TabsAdminPage */]);
        }
        else {
            this.showAlert();
        }
    };
    LoginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Rellenar los Campos!',
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/login/login.html"*/'<ion-content padding>\n  <form  #loginForm="ngForm" (ngSubmit)="login()" autocomplete="off" id="cloud-layer">\n    <ion-row>\n      <ion-col>\n        <img src="http://estareservado.ctrlztest.com.ar/imgApp_Reservo/logo-reservado.png"/>\n      </ion-col>\n    </ion-row>\n    <ion-row style="margin-top:20px;">\n      <ion-col>\n        <ion-list inset>\n            <ion-item>\n              <ion-label><ion-icon name="person"></ion-icon></ion-label>\n              <ion-input #username placeholder="Username" type="text" required></ion-input>\n            </ion-item>    \n            <ion-item>\n              <ion-label><ion-icon name="unlock"></ion-icon></ion-label>\n              <ion-input #password placeholder="Password" type="password" required></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row style="margin-top:10px;">\n      <ion-col>\n        <button ion-button class="submit-btn" full type="submit">Login!</button>\n      </ion-col>\n    </ion-row>\n    <ion-row style="margin-top:10px;">\n      <ion-col>\n        <button ion-button class="submit-btnFB" full (click)="loginWithFB()">Iniciar Sesion con Facebook</button>\n      </ion-col>\n    </ion-row>\n    <ion-row style="margin-top:10px;">\n      <ion-col>\n        <p style="font-size: 0.7em;">Al continuar aceptás <strong>Nuestros Términos<br/>de servicio y Politica de Privacidad</strong></p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p style="font-size: 0.7em;">No publicamos nada en Facebook</p>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map