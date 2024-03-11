import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserImagePipe } from './pipes/userImage.pipe';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './pages/users/users.component';

import { LayoutAdminComponent } from './pages/layout-admin/layout-admin.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { CardComponent } from './components/card/card.component';



import { NewUserComponent } from './pages/new-user/new-user.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [


    LayoutAdminComponent,
    UsersComponent,
    NewUserComponent,
    QuestionsComponent,
    CardComponent,
    UserComponent,
    UserImagePipe,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    MaterialModule,
    ReactiveFormsModule,
    MatGridListModule

  ]
})
export class AdminModule { }
