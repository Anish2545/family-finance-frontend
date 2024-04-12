

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetalertPage } from './budgetalert.page';

describe('BudgetalertPage', () => {
  let component: BudgetalertPage;
  let fixture: ComponentFixture<BudgetalertPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BudgetalertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
