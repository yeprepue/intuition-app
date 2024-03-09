import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({ providedIn: 'root' })

export class AuthService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  register(data: any) {
    return this.http.post(`${this.baseUrl}/register`, data)
  }

  login(data:any){
    return this.http.post(`${this.baseUrl}/login`,data)
  }
}
