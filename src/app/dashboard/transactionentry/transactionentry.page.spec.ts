

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionentryPage } from './transactionentry.page';

describe('TransactionentryPage', () => {
  let component: TransactionentryPage;
  let fixture: ComponentFixture<TransactionentryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TransactionentryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

