import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;
  private userRole: string = '';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    //return actual api call
    return this.http
      .post('/api/login', {
        username,
        password,
      })
      .pipe(
        map((response: any) => {
          if (response.success) {
            this.isLoggedIn = true;
            this.userRole = response.role;
          }
          return response;
        })
      );
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getRole(): string {
    return this.userRole;
  }
}
