import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from '../environments/environment';

@Injectable()
export class AuthService {
  private api = environment.apiUrl;

  private _registerUrl = this.api + "auth/signup";
  private _loginUrl = this.api + "auth/signin";

  constructor(private http: HttpClient,
    private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }
}
