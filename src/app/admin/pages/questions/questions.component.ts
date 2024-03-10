import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionsService } from '../../services/questions.service';
import { Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styles: [
    ` .question-container {
        margin-bottom: 20px;
      }

    .question-card {
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      background-color: #5ee268;
    }

    .question-card:hover {
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .question-name {
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: bold;
    }

    .edit-button {
      background-color: #2b0ce2;
      color: white;
    }

    .edit-button:hover {
      background-color: #f6e2af;
    }
`
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
