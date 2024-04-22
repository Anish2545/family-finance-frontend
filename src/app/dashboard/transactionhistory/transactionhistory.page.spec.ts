import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TransactionHistory } from './transaction-history.page'; // Updated import statement

describe('TransactionHistory', () => { // Updated component name
  let component: TransactionHistory; // Updated component name
  let fixture: ComponentFixture<TransactionHistory>; // Updated component name

  beforeEach(waitForAsync(() => { // Updated asynchronous test function
    TestBed.configureTestingModule({
      declarations: [ TransactionHistory ] // Updated component name
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionHistory); // Updated component name
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
