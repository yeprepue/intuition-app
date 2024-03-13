import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { QuestionsService } from 'src/app/admin/services/questions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FileUploadService } from 'src/services/file-upload.service';
import { User } from '../../interfaces/users.interfaces';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',

})
export class RegisterPageComponent implements OnInit {
  registerForm!: FormGroup;
  public questionData: any = [];
  public passwordVisible: boolean = false;
  public imagen?: File;
  public selectedImage: any;
  public image: any;
  public file: any;
  public fileName: any;


  constructor(
    private fb: FormBuilder,
    private registerService: AuthService,
    private questionService: QuestionsService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private fileUploadService: FileUploadService,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.getQuestions();
  }

  initForm() {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/)]],
      country: ['', Validators.required],
      role: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      answer0: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],

    });
  }

  onFileChange(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      const file = files[0];
      this.registerForm.patchValue({
        imagen: file
      });
    }
  }

  onSubmit() {

  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  registerUser() {
    let sendQuestion: any = [];

    this.questionData.forEach((question: any, index: number) => {
      let answer = `answer${index}`
      sendQuestion.push({
        id: question.id,
        answer: this.registerForm.value[answer]
      });
    });


    if (this.registerForm.valid) {

      let formData = this.formatedData(this.file, sendQuestion);

      this.registerService.register(formData).
        subscribe((user: any) => {

          if (!user) return;
          this._snackBar.open("Guardado correctamente", "Cerrar", {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
          });

          setTimeout(() => {
            this.router.navigate(['auth/login']);
          }, 3000);
        },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  formatedData(file: File, sendQuestion: any) {
    const formData: any = new FormData();
    formData.append('image', file, file.name);
    formData.append('firstname', this.registerForm.get('firstname')!.value);
    formData.append('lastname', this.registerForm.get('lastname')!.value);
    formData.append('phone', this.registerForm.get('phone')!.value);
    formData.append('email', this.registerForm.get('email')!.value);
    formData.append('password', this.registerForm.get('password')!.value);
    formData.append('country', this.registerForm.get('country')!.value);
    formData.append('role', this.registerForm.get('role')!.value);
    formData.append('questions', JSON.stringify(sendQuestion));

    return formData;
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

  subirImagen(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0 && files.length < 2) {
      const file = files[0];
      this.file = file;
      this.fileName = this.file.name;


      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }


  guardarImagen(userId: number) {
    if (this.imagen) {
      this.fileUploadService.uploadImage(this.imagen, userId)
        .then((response) => {
          console.log('Imagen guardada exitosamente', response);
        })
        .catch((error) => {
          console.error('Error al guardar la imagen', error);
        });
    } else {
      console.error('Falta la imagen.');
    }
  }
}


