import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) { }

  login(data) {
    return this.http.post<any>('https://localhost:44309/api/User/login', data);
  }

  insert(data, headers) {
    return this.http.post<any>('https://localhost:44309/api/User/insert', data);
  }
}