import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/book';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http: HttpClient) { }

  public findAll() {
    let token = localStorage.getItem("ACCESS_TOKEN")
    return this.http.get<Book[]>("http://localhost:8080/book/getBooks/"+token);
  }
}
