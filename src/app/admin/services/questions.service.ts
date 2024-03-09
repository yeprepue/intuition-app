import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
