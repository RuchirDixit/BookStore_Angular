import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public checkLogin(email: String,password:String){
   return this.http.get("http://localhost:8080/user/login?email="+email+"&password="+password);
  }
}
