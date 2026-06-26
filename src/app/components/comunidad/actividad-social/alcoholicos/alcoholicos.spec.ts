import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alcoholicos } from './alcoholicos';

describe('Alcoholicos', () => {
  let component: Alcoholicos;
  let fixture: ComponentFixture<Alcoholicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alcoholicos],
    }).compileComponents();

    fixture = TestBed.createComponent(Alcoholicos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
