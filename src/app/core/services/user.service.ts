import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUsers(p0?: string){
    return this.http.get(`${this.apiUrl}?per_page=10`);
  }
  getUser(username: string){
    return this.http.get(`${this.apiUrl}/${username}`);
  }
}
