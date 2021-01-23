import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-category-sidenav',
  templateUrl: './category-sidenav.component.html',
  styleUrls: ['./category-sidenav.component.scss']
})
export class CategorySidenavComponent implements OnInit {

  @Input() categories: Category[] = [];
  @Output() categorySelected = new EventEmitter<{categoryId: string, selected: boolean}>();

  isCategorySelected: boolean = false;
  selectedCategory: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productKey = params.get('productKey');
      this.selectedCategory = this.categories.find(cat => cat.key == productKey)?.id || '';
      this.isCategorySelected = this.selectedCategory ? true : false;
    });
  }

  selectCategory(categoryId: string, key: string) {    
    // Check if current and previously selected categories are unique
    this.isCategorySelected = categoryId != this.selectedCategory ? true : false
    this.selectedCategory = categoryId;

    if(this.isCategorySelected)
      this.router.navigate(['/product-list', key]);
    else 
      this.router.navigate(['/product-list']);
  }

}
