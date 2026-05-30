import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqBautismos } from './req-bautismos';

describe('ReqBautismos', () => {
  let component: ReqBautismos;
  let fixture: ComponentFixture<ReqBautismos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReqBautismos],
    }).compileComponents();

    fixture = TestBed.createComponent(ReqBautismos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
