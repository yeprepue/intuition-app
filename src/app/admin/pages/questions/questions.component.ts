import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionsService } from '../../services/questions.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styles: [
  ]
})
export class QuestionsComponent implements OnInit {
  questionForm!: FormGroup;
  constructor(
    private questionService: QuestionsService,
    private router: Router,
    private fb: FormBuilder,
  ) { }
  ngOnInit(): void {
    this.questionForm = this.fb.group({
      question_name: ['', Validators.required]
    });


  }

  question(): void {
    if (this.questionForm.valid) {
      this.questionService.createQuestion(this.questionForm.value).
        subscribe((user: any) => {
          if (!user) return;
          alert("Pregunta creada correctamente");

        },
          (error) => {
            alert('No se pudo crear la pregunta');
          }
        );

    }

  }
}
