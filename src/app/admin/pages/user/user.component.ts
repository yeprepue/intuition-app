import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { User } from 'src/app/auth/interfaces/users.interfaces';
import { QuestionsService } from '../../services/questions.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [`
     .small-image {
      width: 50%;
      height: 50%;
    }
      `]
})
export class UserComponent implements OnInit {
  public user?: User;
  public userAnswer?: any;
  constructor(
    private questionService: QuestionsService,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.activateRoute.params.pipe(
      switchMap(({ id }) => this.questionService.getUsersById(id)),
    ).subscribe(user => {
      console.log(user)
      if (!user) return this.router.navigate(['/admin/user']);
      this.user = user.user;
      this.userAnswer = user.user_answers;
      return;

    })
  }

  goBack() {
    this.router.navigateByUrl('admin/users')
  }
}
