import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  selectedCategoryId: string = '';
  products: Product[] = [];
  displayedProducts: Product[] = [];

  constructor(
    private dataService: DataService,
    private cartService: CartService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.dataService.fetchCategories()
    .subscribe(data =>  {
      this.categories = data;

      this.dataService.fetchProducts()
      .subscribe(data => {
          this.products = data;
          this.displayedProducts = data;
          
          this.route.paramMap
          .subscribe(params => {
            const productKey = params.get('productKey');
            this.selectedCategoryId = this.categories.find(cat => cat.key == productKey)?.id || '';
            this.filterProducts();
          });
      });

    });    
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  filterProducts() {
    if(this.selectedCategoryId) {
      this.displayedProducts = this.products.filter(
        product => product.category == this.selectedCategoryId
      );
    }
    else {
      this.displayedProducts = this.products;
    }
  }
}
