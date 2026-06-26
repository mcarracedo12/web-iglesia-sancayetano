import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Narcoticos } from './narcoticos';

describe('Narcoticos', () => {
  let component: Narcoticos;
  let fixture: ComponentFixture<Narcoticos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Narcoticos],
    }).compileComponents();

    fixture = TestBed.createComponent(Narcoticos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
