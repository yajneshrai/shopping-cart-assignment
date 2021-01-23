import { Component, OnInit } from '@angular/core';
import { Cart, initialCart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cart: Cart = initialCart;

  constructor(private cartService: CartService) { 
    this.cartService.cartSubscription().subscribe(
      data => {
        this.cart = data;
        console.log(this.cart);
      } 
    )
  }

  ngOnInit(): void {
  }

}
