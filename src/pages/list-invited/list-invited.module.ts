import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListInvitedPage } from './list-invited';

@NgModule({
  declarations: [
    ListInvitedPage,
  ],
  imports: [
    IonicPageModule.forChild(ListInvitedPage),
  ],
})
export class ListInvitedPageModule {}
