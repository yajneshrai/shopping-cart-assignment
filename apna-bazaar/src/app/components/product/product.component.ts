import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product | any;
  @Output() productAdded = new EventEmitter<Product>();
  
  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    this.productAdded.emit(this.product);
  }
}
