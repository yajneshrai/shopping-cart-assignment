import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountUpdateButtonComponent } from './count-update-button.component';

describe('CountUpdateButtonComponent', () => {
  let component: CountUpdateButtonComponent;
  let fixture: ComponentFixture<CountUpdateButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountUpdateButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountUpdateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
