import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { cartDTO } from '../model/cartDTO';

@Injectable({
  providedIn: 'root'
})
export class CartService {

   headeroption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { 
  }


  public addToCart(cart : cartDTO) {
    
    var token = localStorage.getItem("ACCESS_TOKEN")
    return this.http.post("http://localhost:8080/cart/addToCart/"+token,cart,this.headeroption)
  }
}
