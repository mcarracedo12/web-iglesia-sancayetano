import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoDesarrollador } from './contacto-desarrollador';

describe('ContactoDesarrollador', () => {
  let component: ContactoDesarrollador;
  let fixture: ComponentFixture<ContactoDesarrollador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoDesarrollador],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactoDesarrollador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
