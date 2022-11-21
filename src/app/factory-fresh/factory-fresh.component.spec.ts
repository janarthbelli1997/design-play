import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryFreshComponent } from './factory-fresh.component';

describe('FactoryFreshComponent', () => {
  let component: FactoryFreshComponent;
  let fixture: ComponentFixture<FactoryFreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoryFreshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryFreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
