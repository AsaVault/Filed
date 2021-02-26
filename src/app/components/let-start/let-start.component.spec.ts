/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LetStartComponent } from './let-start.component';

describe('LetStartComponent', () => {
  let component: LetStartComponent;
  let fixture: ComponentFixture<LetStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
