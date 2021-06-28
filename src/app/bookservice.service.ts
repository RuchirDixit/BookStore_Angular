import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './model/book';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http: HttpClient) { }

  public findAll() {
    return this.http.get<Book[]>("http://localhost:8080/book/getBooks/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4fQ.PovrO1SlYXAfjyAmOFAW2GN7_mzymacPu0V47Il29_4");
  }
}
