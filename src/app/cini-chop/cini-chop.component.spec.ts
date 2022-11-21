import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiniChopComponent } from './cini-chop.component';

describe('CiniChopComponent', () => {
  let component: CiniChopComponent;
  let fixture: ComponentFixture<CiniChopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiniChopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiniChopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
