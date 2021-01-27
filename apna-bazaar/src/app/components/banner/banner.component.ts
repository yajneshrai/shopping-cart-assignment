import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/models/banner.model';
import { DataService } from 'src/app/services/data.service';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {

  banners: Banner[] = [];
  currentIndex = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.fetchBanners()
    .subscribe(data => {
        this.banners = data.filter(banner => banner.isActive).sort((a, b) => a.order > b.order ? 1 : -1);
      },
      error => {
        this.banners = [];
      }
    );
  }

  ngAfterViewInit() {
    const bannerSection = document.getElementById('banner-section') as HTMLElement;
    const hammer = new Hammer(bannerSection);
    
    hammer.on('swipeleft', (event) => {
      this.nextClicked();
    });

    hammer.on('swiperight', (event) => {
      this.prevClicked();
    });
  }

  dotClicked(index: number) {
    this.currentIndex = index;
  }

  prevClicked() {
    this.currentIndex = --this.currentIndex < 0 ? this.banners.length - 1 : this.currentIndex
  }

  nextClicked() {
    this.currentIndex = ++this.currentIndex > this.banners.length - 1 ? 0 : this.currentIndex;
  }
}
