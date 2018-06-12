import { Component } from '@angular/core';
import { ListEventsPage } from '../list-events/list-events';
import { ScannerPage} from '../scanner/scanner';

@Component({
    templateUrl: 'tabsclient.html'
  })
  export class TabsClientPage {
  
    tab1Root = ListEventsPage;
    tab2Root = ScannerPage;
  
    constructor() {
  
    }
}