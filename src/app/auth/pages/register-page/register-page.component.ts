import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { QuestionsService } from 'src/app/admin/services/questions.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent implements OnInit {
  registerForm!: FormGroup;
  public questionData: any = [];
  constructor(
    private fb: FormBuilder,
    private registerService: AuthService,
    private questionService: QuestionsService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required],
      country: ['', Validators.required],
      role: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      answer0: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
    });

    this.getQuestions();
  }

  registerUser() {
    let formData: any = [];

    this.questionData.forEach((question: any, index: number) => {
      let answer = `answer${index}`
      formData.push({
        id: question.id,
        answer: this.registerForm.value[answer]
      });
    });

    if (this.registerForm.valid) {
      Object.assign(this.registerForm.value, { questions: formData });
      this.registerService.register(this.registerForm.value).
        subscribe((user: any) => {
          // if (!user) return;
          console.log('ok')
        },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  getQuestions() {
    this.questionService.getQuestions().
      subscribe((questions: any) => {
        if (!questions) return;
        this.questionData = questions;

      },
        (error) => {
          console.log(error);
        }
      );

  }
}
