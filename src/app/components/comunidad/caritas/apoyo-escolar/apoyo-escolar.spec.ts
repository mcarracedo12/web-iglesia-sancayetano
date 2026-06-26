import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoyoEscolar } from './apoyo-escolar';

describe('ApoyoEscolar', () => {
  let component: ApoyoEscolar;
  let fixture: ComponentFixture<ApoyoEscolar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApoyoEscolar],
    }).compileComponents();

    fixture = TestBed.createComponent(ApoyoEscolar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
