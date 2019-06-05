import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarcontraPage } from './cambiarcontra.page';

describe('CambiarcontraPage', () => {
  let component: CambiarcontraPage;
  let fixture: ComponentFixture<CambiarcontraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarcontraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarcontraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
