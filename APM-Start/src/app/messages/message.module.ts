import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message.component';

@NgModule({
  imports: [
    SharedModule,
    // since this is a feature module, we use "forChild" method and pass in an array of route definitions
    RouterModule.forChild([
      {
        path:'messages',
        component: MessageComponent,
        outlet: 'popup'
      }
    ])
  ],
  declarations: [
    MessageComponent
  ]
})
export class MessageModule { }
