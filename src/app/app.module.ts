import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TabsClientPage } from '../pages/tabsclient/tabsclient';
import { TabsAdminPage } from '../pages/tabsadmin/tabsadmin';
import { ListEventsPage } from '../pages/list-events/list-events';
import { ScannerPage } from '../pages/scanner/scanner';
import { PerfilAdminPage } from '../pages/perfil-admin/perfil-admin';
import { ReservasAdminPage } from '../pages/reservas-admin/reservas-admin';
import { ResumenAdminPage } from '../pages/resumen-admin/resumen-admin';
import { PopoverComponent } from './../components/popover/popover';

import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TabsClientPage,
    TabsAdminPage,
    ListEventsPage,
    ScannerPage,
    PerfilAdminPage,
    ReservasAdminPage,
    ResumenAdminPage,
    PopoverComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TabsClientPage,
    TabsAdminPage,
    ListEventsPage,
    ScannerPage,
    PerfilAdminPage,
    ReservasAdminPage,
    ResumenAdminPage,
    PopoverComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
  ]
})
export class AppModule {}
