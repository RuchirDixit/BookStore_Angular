import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  showCustomerDetails = false;
  booksArray = [
    {
    "bookId" : "1",
    "name" : "Demo1",
    "author" : "Author1",
    "price" : "999",
    "quantity" : 0,
    "logo" : "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
  },
  {
    "bookId" : "2",
    "name" : "Demo2",
    "author" : "Author2",
    "price" : "999",
    "quantity" : 0,
    "logo" : "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
  },
  {
    "bookId" : "3",
    "name" : "Demo3",
    "author" : "Author3",
    "price" : "999",
    "quantity" : 0,
    "logo" : "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
  }
  ];
  gridColumns = 1;
  total = 0;
  quantity : number = 0;
  finalQuantity : number = 0;
  constructor() {
    this.total = this.booksArray.length
  }

  add(id:String) {
  for(var book of this.booksArray){
    if(book.bookId == id){
      ++book.quantity;
    }  
  }
  }

  remove(id:String) {
    for(var book of this.booksArray){
      if(book.bookId == id){
        --book.quantity;
      }  
    }
  }

  removeFromCart(id:String){
    console.log("Remove from cart api call");
  }

  placeOrder(){
    this.showCustomerDetails = true;
  }
  ngOnInit(): void {
    
  }

}
