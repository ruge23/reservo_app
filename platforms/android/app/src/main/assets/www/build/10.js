webpackJsonp([10],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPerfilAdminPageModule", function() { return EditPerfilAdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_perfil_admin__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditPerfilAdminPageModule = /** @class */ (function () {
    function EditPerfilAdminPageModule() {
    }
    EditPerfilAdminPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_perfil_admin__["a" /* EditPerfilAdminPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_perfil_admin__["a" /* EditPerfilAdminPage */]),
            ],
        })
    ], EditPerfilAdminPageModule);
    return EditPerfilAdminPageModule;
}());

//# sourceMappingURL=edit-perfil-admin.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPerfilAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabsadmin_tabsadmin__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditPerfilAdminPage = /** @class */ (function () {
    function EditPerfilAdminPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditPerfilAdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPerfilAdminPage');
    };
    EditPerfilAdminPage.prototype.savePerfilAdmin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabsadmin_tabsadmin__["a" /* TabsAdminPage */]);
    };
    EditPerfilAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-perfil-admin',template:/*ion-inline-start:"/home/rodrigo/gitHub/reservo_app/src/pages/edit-perfil-admin/edit-perfil-admin.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Editar Perfil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form #loginForm="ngForm" (ngSubmit)="savePerfilAdmin()" autocomplete="off" id="cloud-layer">\n    <ion-row>\n      <ion-col>\n        <ion-list inset>\n          <ion-item>\n            <ion-label><ion-icon name="person"></ion-icon></ion-label>\n            <ion-input placeholder="Nombre" type="text" required></ion-input>\n          </ion-item>    \n          <ion-item>\n            <ion-label><ion-icon name="disc"></ion-icon></ion-label>\n            <ion-textarea placeholder="Descripcion" type="text" required></ion-textarea>\n          </ion-item>\n          <ion-item>\n            <ion-label><ion-icon name="image"></ion-icon></ion-label>\n            <ion-input placeholder="Foto" type="url" required></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row style="margin-top:20px;">\n      <ion-col>\n        <button ion-button class="submit-btn" full type="submit">Guardar</button>\n      </ion-col>\n    </ion-row>\n  </form>\n  <ion-row style="margin-top: 10px;">\n    <ion-col style="margin: auto;">\n      <img style="margin-left: 35%;width: 30%; height: 30%;" src="http://estareservado.ctrlztest.com.ar/imgApp_Reservo/logo-reservado.png">\n    </ion-col>\n  </ion-row>  \n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/gitHub/reservo_app/src/pages/edit-perfil-admin/edit-perfil-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EditPerfilAdminPage);
    return EditPerfilAdminPage;
}());

//# sourceMappingURL=edit-perfil-admin.js.map

/***/ })

});
//# sourceMappingURL=10.js.map