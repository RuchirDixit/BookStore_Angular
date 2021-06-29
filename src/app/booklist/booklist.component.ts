import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { Book } from '../model/book';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CartService } from '../services/cart.service';
import { cartDTO } from '../model/cartDTO';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  books:Book[]=[];

  gridColumns = 4;
  constructor(private bookService : BookserviceService,private sanitizer: DomSanitizer,private cartService : CartService) {
    console.log(localStorage.getItem("ACCESS_TOKEN"));
    
   }


sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}

addItemToBag(id:number){
  var dto = new cartDTO();
  dto.bookId = id;
  dto.quantity = 2;
  this.cartService.addToCart(dto).subscribe(response => {
    console.log(response);   
  });
}

  ngOnInit(): void {
    this.bookService.findAll().subscribe(data => {
      data.map(bookData => {
        this.books.push(bookData)
      })
    })
    
  }

}
