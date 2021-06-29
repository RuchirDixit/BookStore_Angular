import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  booksArray = [
    {
    "name" : "Demo1",
    "author" : "Author1",
    "price" : "999",
    "quantity" : "20",
    "logo" : "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
  },
  {
    "name" : "Demo2",
    "author" : "Author2",
    "price" : "999",
    "quantity" : "20",
    "logo" : "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
  },
  {
    "name" : "Demo3",
    "author" : "Author3",
    "price" : "999",
    "quantity" : "20",
    "logo" : "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
  }
  ];
  gridColumns = 1;
  total = 0;
  quantity : number = 0;
  constructor() {
    this.total = this.booksArray.length
  }

  add() {
    this.quantity = this.quantity + 1;
    console.log("Quan:" + this.quantity);
    
  }

  remove() {
    this.quantity = this.quantity - 1;
    console.log("Quan:" + this.quantity);
    
  }

  ngOnInit(): void {
    
  }

}
