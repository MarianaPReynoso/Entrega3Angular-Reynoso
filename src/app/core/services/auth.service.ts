import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../features/dashboard/users/models';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private PROBAR_USUARIO: User = {
    email: 'estoesun@email.com',
    password: '123456',
    rol: 'USUARIO'
  };

  private VALID_TOKEN = 'sjdkhd';

  private authUser$ = new BehaviorSubject<User | null> (null);

  authUser = this.authUser$.asObservable();

  constructor(private router: Router) { }

  login() {
    this.authUser$.next(this.PROBAR_USUARIO);
    localStorage.setItem('token', this.VALID_TOKEN);
    this.router.navigate(['dashboard', 'inicio']);
  }

  logout() {
    localStorage.removeItem('token');
    this.authUser$.next(null);
    this.router.navigate(['auth', 'login']);
  }

  verificarToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    const isValid = this.VALID_TOKEN === token;
    if(isValid) {
      this.authUser$.next(this.PROBAR_USUARIO)
    }
    return of(isValid);
  }
}
