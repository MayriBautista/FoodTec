import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraexitPage } from './compraexit.page';

describe('CompraexitPage', () => {
  let component: CompraexitPage;
  let fixture: ComponentFixture<CompraexitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraexitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraexitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
