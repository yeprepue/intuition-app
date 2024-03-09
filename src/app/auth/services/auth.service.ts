import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../interfaces/users.interfaces';

@Injectable({ providedIn: 'root' })

export class AuthService {

  private baseUrl: string = environment.baseUrl;

  private user?:User;

  constructor(private http: HttpClient) { }

  register(data: User) {
    return this.http.post(`${this.baseUrl}/register`, data)
  }

  login(data:User){
    return this.http.post(`${this.baseUrl}/login`,data)
  }

  logout() {
    this.user = undefined;
    localStorage.clear();
  }
}
