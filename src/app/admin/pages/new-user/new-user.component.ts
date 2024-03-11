import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionsService } from '../../services/questions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/auth/interfaces/users.interfaces';



@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styles: [
  ]
})
export class NewUserComponent implements OnInit{

public userForm = new FormGroup({
  id:        new FormControl<string>(''),
  firstname: new FormControl<string>('', { nonNullable: true }),
  email:     new FormControl<string>('', { nonNullable: true }),
  phone:     new FormControl<string>('', { nonNullable: true }),
  password:  new FormControl<string>('', { nonNullable: true }),
  country:   new FormControl<string>('', { nonNullable: true }),
  role:      new FormControl<string>('', { nonNullable: true }),
});

public publishers = [
  { id: 'Administrador', desc: 'Administrador' },
  { id: 'Analista', desc: 'Analista' },
  { id: 'Comercial', desc: 'Comercial' },
];

constructor(
    private questionsService:QuestionsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

// get currentUser():User{
//   const user = this.userForm.value as User;
//  return user;
// }


}
