import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferePage } from './transfere.page';

describe('TransferePage', () => {
  let component: TransferePage;
  let fixture: ComponentFixture<TransferePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
