import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';


@NgModule({
  declarations: [
    UsersPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
