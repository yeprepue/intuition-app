import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionsService } from '../../services/questions.service';
import { Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styles: [
  ]
})
export class QuestionsComponent implements OnInit {
  questionForm!: FormGroup;
  questionFormUpdate!: FormGroup;
  questions: any = [];
  editable: boolean = false;
  question_id!: number;

  constructor(
    private questionService: QuestionsService,
    private router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      question_name: ['', Validators.required]
    });

    this.questionFormUpdate = this.fb.group({
      question_name: ['', Validators.required]
    });

    this.getQuestion();
  }

  createQuestion(): void {
    if (this.questionForm.valid) {
      this.questionService.createQuestion(this.questionForm.value).
        subscribe((user: any) => {
          if (!user) return;
          this._snackBar.open("Pregunta creada correctamente", "Cerrar", {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
          });

          this.questionForm.reset();

          setTimeout(() => {
            this.getQuestion();
          }, 3000);

        },
          (error) => {
            alert('No se pudo crear la pregunta');
          }
        );

    }
  }

  updateQuestion() {
    if (this.questionFormUpdate.valid) {
      this.questionService.updateQuestion(this.questionFormUpdate.value, this.question_id).
        subscribe((user: any) => {
          if (!user) return;
          this._snackBar.open("Pregunta actualizada correctamente", "Cerrar", {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
          });

          this.questionForm.reset();
          this.editable = false;

          setTimeout(() => {
            this.getQuestion();
          }, 3000);

        },
          (error) => {
            alert('No se pudo crear la pregunta');
          }
        );

    }
  }

  getQuestion(): void {
    this.questionService.getQuestions().
      subscribe((data: any) => {
        if (!data) return;
        this.questions = data;
      },
        (error) => {
          console.log('No se pudo crear la pregunta');
        }
      );

  }

  editQuestion(question: any) {
    this.editable = true;
    this.question_id = question.id;
    this.questionFormUpdate.controls['question_name'].setValue(question.question_name);
  }
}
