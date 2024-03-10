import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../interfaces/users.interfaces';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class AuthService {

  private baseUrl: string = environment.baseUrl;

  private user?: User;

  constructor(private http: HttpClient) { }

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }


  register(data: User) {
    return this.http.post(`${this.baseUrl}/register`, data)
  }

  login(data: User):Observable<User> {

    return this.http.post<User>(`${this.baseUrl}/login`, data)
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
