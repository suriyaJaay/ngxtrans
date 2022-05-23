import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    UsersComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TranslateModule
  ],
  /* exports: [
    TranslateModule
  ] */
})
export class UsersModule { }
