import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociarsComponent } from './sociars.component';

describe('SociarsComponent', () => {
  let component: SociarsComponent;
  let fixture: ComponentFixture<SociarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SociarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SociarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
