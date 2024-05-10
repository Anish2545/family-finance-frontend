import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplitAmountPage } from './split-amount.page';

describe('SplitAmountPage', () => {
  let component: SplitAmountPage;
  let fixture: ComponentFixture<SplitAmountPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SplitAmountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
