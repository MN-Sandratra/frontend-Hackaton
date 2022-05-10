import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSlideComponent } from './hotel-slide.component';

describe('HotelSlideComponent', () => {
  let component: HotelSlideComponent;
  let fixture: ComponentFixture<HotelSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
