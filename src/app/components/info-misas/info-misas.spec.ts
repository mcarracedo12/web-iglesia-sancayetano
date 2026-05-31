import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMisas } from './info-misas';

describe('InfoMisas', () => {
  let component: InfoMisas;
  let fixture: ComponentFixture<InfoMisas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoMisas],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoMisas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
