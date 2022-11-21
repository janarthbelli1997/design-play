import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaminShopeeComponent } from './vitamin-shopee.component';

describe('VitaminShopeeComponent', () => {
  let component: VitaminShopeeComponent;
  let fixture: ComponentFixture<VitaminShopeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitaminShopeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VitaminShopeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
