import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { RedirectFunction, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl = 'http://localhost:3000/api'

  constructor(
    private http: HttpClient,
  ) { }

  signup(data: any) {
    return this.http.post(`${this.baseUrl}/register`, data)
  }

  login(data: any) {
    // return this.http.post(`${this.baseUrl}/login`, data)
    //   .pipe(tap((result) => {
    //     localStorage.setItem('authUser', JSON.stringify(result))
    //   }))
    const { username, password } = data
    return new Promise((resolve, reject) => {
      if (username === 'admin' && password === 'admin123') {
        const user = {
          username: 'admin',
          id: '1'
        }
        localStorage.setItem('authUser', JSON.stringify(user))
        resolve(user)
      } else {
        reject({ message: 'Username or password incorrect!' })
      }
    })
  }

  logout() {
    localStorage.removeItem('authUser')
  }

  isLoggedIn() {
    return localStorage.getItem('authUser') !== null
  }
}
