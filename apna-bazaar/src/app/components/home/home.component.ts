import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/models/banner.model';
import { Category } from 'src/app/models/category.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banners: Banner[] = [];
  categories: Category[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getBanners();
    this.getCategories();
  }

  getBanners() {
    this.dataService.fetchBanners().subscribe(
      data => ( this.banners = data ),
      error => ( this.banners = [] )
    );
  }

  getCategories() {
    this.dataService.fetchCategories().subscribe(
      data => ( this.categories = data ),
      error => ( this.categories = [] )
    );
  }
}
