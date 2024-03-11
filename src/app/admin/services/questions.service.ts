import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { User } from 'src/app/auth/interfaces/users.interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class QuestionsService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get(`${this.baseUrl}/questions`);
  }

  createQuestion(data: any) {
    return this.http.post(`${this.baseUrl}/questions`, data)
  }

  updateQuestion(data: any, id: number) {
    return this.http.put(`${this.baseUrl}/questions/${id}`, data)
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/user`)
  }

  getUsersById(id: number): Observable<User | undefined> {
    console.log(id);
    return this.http.get<User>(`${this.baseUrl}/user/${id}`).pipe(
      catchError(Error=> of(undefined))
    );
  }
}
