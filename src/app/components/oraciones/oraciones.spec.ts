import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oraciones } from './oraciones';

describe('Oraciones', () => {
  let component: Oraciones;
  let fixture: ComponentFixture<Oraciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oraciones],
    }).compileComponents();

    fixture = TestBed.createComponent(Oraciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
