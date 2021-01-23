import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  categories: Category[] = [];
  products: Product[] = [];
  displayedProducts: Product[] = [];

  constructor(
    private dataService: DataService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.dataService.fetchCategories()
    .subscribe(
      data => this.categories = data
    );

    this.dataService.fetchProducts()
    .subscribe(
      data => {
        this.products = data;
        this.displayedProducts = data;
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  categorySelected(event: any) {
    if(event.selected) {
      this.displayedProducts = this.products.filter(product => product.category == event.categoryId);
    }
    else {
      this.displayedProducts = this.products;
    }
  }
}
