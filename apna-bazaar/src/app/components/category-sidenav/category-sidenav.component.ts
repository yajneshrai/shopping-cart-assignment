import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-category-sidenav',
  templateUrl: './category-sidenav.component.html',
  styleUrls: ['./category-sidenav.component.scss']
})
export class CategorySidenavComponent implements OnInit {

  @Input() categories: Category[] = [];
  @Output() categorySelected = new EventEmitter<{categoryId: string, selected: boolean}>();

  selectedCategory: string = '';
  isCategorySelected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  selectCategory(categoryId: string) {
    // Check if current and previously selected categories are unique
    this.isCategorySelected = categoryId != this.selectedCategory ? true : false
    this.selectedCategory = categoryId;
    this.categorySelected.emit(
      { categoryId: categoryId, selected: this.isCategorySelected }
    );
  }

}
