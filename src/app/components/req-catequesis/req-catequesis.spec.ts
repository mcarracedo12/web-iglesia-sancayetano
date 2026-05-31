import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqCatequesis } from './req-catequesis';

describe('ReqCatequesis', () => {
  let component: ReqCatequesis;
  let fixture: ComponentFixture<ReqCatequesis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReqCatequesis],
    }).compileComponents();

    fixture = TestBed.createComponent(ReqCatequesis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
