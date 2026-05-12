import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiografiaModal } from './biografia-modal';

describe('BiografiaModal', () => {
  let component: BiografiaModal;
  let fixture: ComponentFixture<BiografiaModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiografiaModal],
    }).compileComponents();

    fixture = TestBed.createComponent(BiografiaModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
