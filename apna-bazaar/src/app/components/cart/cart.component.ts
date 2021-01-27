import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart, initialCart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  isCartOpened$: Observable<boolean>;
  cartSubs$: Observable<Cart>;

  cart: Cart = { ...initialCart };

  constructor(private cartService: CartService) { 
    this.isCartOpened$ = this.cartService.cartContainerSubscription();
    this.cartSubs$ = this.cartService.cartSubscription();
  }

  ngOnInit(): void {
    this.cartSubs$.subscribe(
      data => this.cart = data
    );
  }

  hideCart(clearCart: boolean) {
    if(clearCart)
      this.cartService.clearCart();
    this.cartService.cartContainerOpened(false);
  }

  addItem(product: Product) {
    this.cartService.addToCart(product);
  }

  removeItem(productId: string) {
    this.cartService.removeFromCart(productId);
  }

  ngOnDestory() {
    
  }
}
