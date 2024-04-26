import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TransactionHistoryPage } from './transactionhistory.page'; // Updated import statement

describe('TransactionHistory', () => { // Updated component name
  let component: TransactionHistoryPage; // Updated component name
  let fixture: ComponentFixture<TransactionHistoryPage>; // Updated component name

  beforeEach(waitForAsync(() => { // Updated asynchronous test function
    TestBed.configureTestingModule({
      declarations: [ TransactionHistoryPage ] // Updated component name
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionHistoryPage); // Updated component name
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
