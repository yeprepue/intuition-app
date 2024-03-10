import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { LayoutAdminComponent } from './pages/layout-admin/layout-admin.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { UserImagePipe } from './pipes/userImage.pipe';
import { NewUserComponent } from './pages/new-user/new-user.component';


@NgModule({
  declarations: [
    QuestionsComponent,
    UsersComponent,
    LayoutAdminComponent,
    CardComponent,

    UserImagePipe,
     NewUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
