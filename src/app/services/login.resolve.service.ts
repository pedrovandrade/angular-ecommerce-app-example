import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginResolveService {

  private userIsLoggedIn = true

  constructor() { }
}
