import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, initialCart } from '../models/cart.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = initialCart;
  cartItem: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.cart);

  constructor() {
    this.notifyCartUpdate();
  }

  cartSubscription() {
    return this.cartItem.asObservable();
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
    this.notifyCartUpdate();
  }

  removeFromCart() {

  }

  updateCartCost() {
/*     Object.keys(this.cart.productMap).forEach(
      (total, key) => {

      }
    ) */
  }

  notifyCartUpdate() {
    this.cartItem.next(this.cart);
  }
}
