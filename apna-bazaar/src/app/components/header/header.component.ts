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
  isSmMenuOpened: boolean =false;

  constructor(private cartService: CartService) { 
    this.cartService.cartSubscription().subscribe(
      data => {
        this.cart = data;
      } 
    )
  }

  ngOnInit(): void {
  }

  mobileNavClicked() {
    // Check if menu was opened or closed
    const mobileNav = document.getElementById('mobile-nav') as HTMLElement;
    this.isSmMenuOpened = mobileNav.className == 'd-none';

    mobileNav.className = this.isSmMenuOpened ? 'd-block' : 'd-none';

    const mobileNavLinks = document.querySelectorAll('#mobile-nav a');
    mobileNavLinks.forEach(el => {
      this.isSmMenuOpened ?
        el.addEventListener('click', () => { 
          mobileNav.className = 'd-none'; 
          this.isSmMenuOpened = false;
        }) :
        el.removeEventListener('click', () => {});
    });
  }

  showCart() {
    this.cartService.cartContainerOpened(true);
  }
}
