import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarnombrePage } from './cambiarnombre.page';

describe('CambiarnombrePage', () => {
  let component: CambiarnombrePage;
  let fixture: ComponentFixture<CambiarnombrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarnombrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarnombrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
