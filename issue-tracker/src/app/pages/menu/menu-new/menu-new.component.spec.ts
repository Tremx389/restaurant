import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNewComponent } from './new-menu.component';

describe('MenuNewComponent', () => {
  let component: MenuNewComponent;
  let fixture: ComponentFixture<MenuNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNewComponent);
    component = fixture.componentInstance;
    fsxture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
