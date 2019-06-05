import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarnumPage } from './cambiarnum.page';

describe('CambiarnumPage', () => {
  let component: CambiarnumPage;
  let fixture: ComponentFixture<CambiarnumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarnumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarnumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
