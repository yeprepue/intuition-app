import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { User } from 'src/app/auth/interfaces/users.interfaces';
import { QuestionsService } from '../../services/questions.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  public user?: User;
  constructor(
    private questionService: QuestionsService,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.activateRoute.params.pipe(
      switchMap(({ id }) =>  this.questionService.getUsersById(id)),
    ).subscribe(user => {

      if (!user) return this.router.navigate(['/admin/user']);
      this.user = user;
      return;

    })
  }

  goBack() {
    this.router.navigateByUrl('admin/users')
  }
}
