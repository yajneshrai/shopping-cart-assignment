import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySidenavComponent } from './category-sidenav.component';

describe('CategorySidenavComponent', () => {
  let component: CategorySidenavComponent;
  let fixture: ComponentFixture<CategorySidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
