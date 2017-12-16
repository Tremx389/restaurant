import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantNewComponent } from './new-restaurant.component';

describe('RestaurantNewComponent', () => {
  let component: RestaurantNewComponent;
  let fixture: ComponentFixture<RestaurantNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantNewComponent);
    component = fixture.componentInstance;
    fsxture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
