import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, initialCart } from '../models/cart.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = { ...initialCart };
  cartItem: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.cart);

  isCartOpened: boolean = false;
  cartOpened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isCartOpened);

  constructor() {
    this.notifyCartUpdate();
  }

  cartSubscription() {
    return this.cartItem.asObservable();
  }

  cartContainerSubscription() {
    return this.cartOpened.asObservable();
  }

  cartContainerOpened(isOpened: boolean) {
    this.isCartOpened = isOpened;
    const body = document.getElementsByTagName('body')[0];
    body.style.overflow = this.isCartOpened ? 'hidden' : 'auto';
    //body.tabIndex = -1;
    this.cartOpened.next(this.isCartOpened);
  }

  addToCart(product: Product) {
    // If the product already exists
    // 1. Increase the count
    // 2. Update total cost
    if(this.cart.productIds.includes(product.id)) {
      this.cart.productMap[product.id].count++;
    } 
    // If a new product added
    // 1. Add it to product list and map
    // 2. Initialize count
    else {
      this.cart.productIds.push(product.id);
      this.cart.productMap[product.id] = {
        product: product,
        count: 1
      };
    }

    this.cart.totalProducts++;
    this.updateCartCost();
    this.notifyCartUpdate();
  }

  removeFromCart(productId: string) {
    this.cart.productMap[productId].count--;
    this.cart.totalProducts--;

    if(this.cart.productMap[productId].count == 0) {
      const idx = this.cart.productIds.indexOf(productId);
      this.cart.productIds.splice(idx, 1);

      delete this.cart.productMap[productId];
    } 

    this.updateCartCost();
    this.notifyCartUpdate();
  }

  private updateCartCost() {
    this.cart.totalCost = 0;
    for(let productId of this.cart.productIds) {
      this.cart.totalCost += this.cart.productMap[productId].product.price * this.cart.productMap[productId].count;
    }
  }

  private notifyCartUpdate() {
    this.cartItem.next(this.cart);
  }

  clearCart() {
    this.cart = { ...initialCart };
    this.notifyCartUpdate();
  }
}
