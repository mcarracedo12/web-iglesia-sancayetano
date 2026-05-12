import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaModal } from './historia-modal';

describe('HistoriaModal', () => {
  let component: HistoriaModal;
  let fixture: ComponentFixture<HistoriaModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriaModal],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoriaModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
