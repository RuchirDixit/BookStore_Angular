import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

   headeroption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { 
  }


  public addToCart(id:any) {
  
    let cartObj = {
      "bookId" : id,
      "quantity" : 2
    }
    var token = localStorage.getItem("ACCESS_TOKEN")
    debugger
    return this.http.post("http://localhost:8080/cart/addToCart/"+token,cartObj,this.headeroption)
  }
}
