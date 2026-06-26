import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catequesis } from './catequesis';

describe('Catequesis', () => {
  let component: Catequesis;
  let fixture: ComponentFixture<Catequesis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Catequesis],
    }).compileComponents();

    fixture = TestBed.createComponent(Catequesis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
