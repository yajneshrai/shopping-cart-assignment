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
  cartOpened: boolean = false;

  constructor(private cartService: CartService) { 
    this.isCartOpened$ = this.cartService.cartContainerSubscription();
    this.cartSubs$ = this.cartService.cartSubscription();
  }

  ngOnInit(): void {
    this.cartSubs$.subscribe(
      data => this.cart = data
    );

    this.isCartOpened$.subscribe(
      data => {
        this.cartOpened = data;
        this.onCartContainerUpdate();
      });
  }

  onCartContainerUpdate() {
    // On cart open: Remove focus from all tabbale body elements
    // On cart close: Add focus back to all tabbale body elements
    const bodyElements = document.querySelectorAll('a, button, [tabindex]');
    bodyElements.forEach(element => {
      element.setAttribute('tabindex', this.cartOpened ? '-1' : '0');
    });

    // On cart open: Add focus insude cart-container tabbale elements
    // On cart close: Remove focus insude cart-container tabbale elements
    const cartElements = document.querySelectorAll('#cart-container a, #cart-container button, #cart-container [tabindex]');
    cartElements.forEach(element => {
      element.setAttribute('tabindex', this.cartOpened ? '0' : '-1');
    });

    // On cart open: Focus on cart-container
    if(this.cartOpened) {
      const cartContainer = document.getElementById('cart-container') as HTMLElement;
      cartContainer.focus();
    }
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
