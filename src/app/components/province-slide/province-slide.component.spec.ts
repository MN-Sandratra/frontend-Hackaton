import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceSlideComponent } from './province-slide.component';

describe('ProvinceSlideComponent', () => {
  let component: ProvinceSlideComponent;
  let fixture: ComponentFixture<ProvinceSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinceSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinceSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
