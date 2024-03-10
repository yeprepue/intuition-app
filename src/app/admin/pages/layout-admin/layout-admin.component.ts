import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styles: [
  ]
})
export class LayoutAdminComponent {

  public sidebarItems = [

    { label: 'Question', icon:'quiz', url:'./question' },
    { label: 'Users', icon:'person', url:'./users' },

  ]
  constructor(
      private authService :AuthService,
      private router : Router
  ){}

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }

}
