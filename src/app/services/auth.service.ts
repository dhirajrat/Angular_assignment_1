import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserPayload } from '../models/UserPayload';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  inputDataUrl = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    return this.http.get<UserPayload[]>(this.inputDataUrl);
  }
}
