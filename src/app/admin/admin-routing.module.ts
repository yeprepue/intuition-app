import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from './pages/layout-admin/layout-admin.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { UsersComponent } from './pages/users/users.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { AuthGuard } from '../auth/guard/auth.guard';
import { UserComponent } from './pages/user/user.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      { path: 'question', component: QuestionsComponent, canActivate: [AuthGuard] },
      {path:'new-user', component: NewUserComponent, canActivate: [AuthGuard] },
      { path: 'user/:id', component: UserComponent, canActivate: [AuthGuard] },
      { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
      { path: 'edit/:id', component: UserComponent, canActivate: [AuthGuard] },

      { path: '**', component: UserComponent, canActivate: [AuthGuard] },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
