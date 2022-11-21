import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyerEatsComponent } from './flyer-eats.component';

describe('FlyerEatsComponent', () => {
  let component: FlyerEatsComponent;
  let fixture: ComponentFixture<FlyerEatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyerEatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyerEatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
