import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(credentials: any) {
    const url = `${environment.apiUrl}/login`;
    return this.httpClient.post(url, credentials);
  }

  signup(credentials: any) {
    const url = `${environment.apiUrl}/signup`;
    return this.httpClient.post(url, credentials);
  }
}
