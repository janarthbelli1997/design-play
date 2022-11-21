import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeLabsComponent } from './life-labs.component';

describe('LifeLabsComponent', () => {
  let component: LifeLabsComponent;
  let fixture: ComponentFixture<LifeLabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeLabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
