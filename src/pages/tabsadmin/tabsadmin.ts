import { Component } from '@angular/core';
import { PerfilAdminPage } from '../perfil-admin/perfil-admin';
import { ReservasAdminPage } from '../reservas-admin/reservas-admin';
import { ResumenAdminPage } from '../resumen-admin/resumen-admin';

@Component({
    templateUrl: 'tabsadmin.html'
  })
  export class TabsAdminPage {
  
    tab1Root = PerfilAdminPage;
    tab2Root = ReservasAdminPage;
    tab3Root = ResumenAdminPage;
  
    constructor() {
    }
}