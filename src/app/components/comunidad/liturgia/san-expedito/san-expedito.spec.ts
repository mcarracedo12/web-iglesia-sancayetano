import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanExpedito } from './san-expedito';

describe('SanExpedito', () => {
  let component: SanExpedito;
  let fixture: ComponentFixture<SanExpedito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanExpedito],
    }).compileComponents();

    fixture = TestBed.createComponent(SanExpedito);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
