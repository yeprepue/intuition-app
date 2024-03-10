
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/interfaces/users.interfaces';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})

export class UsersComponent implements OnInit {


public users:any[] =[];

constructor(private questionsService:QuestionsService){}


ngOnInit(): void {
  this.questionsService.getUsers().subscribe(
    (users: User[]) => {
      this.users = users;
    }
  );
}



}
