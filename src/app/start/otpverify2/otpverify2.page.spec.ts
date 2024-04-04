import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Otpverify2Page } from './otpverify2.page';

describe('Otpverify2Page', () => {
  let component: Otpverify2Page;
  let fixture: ComponentFixture<Otpverify2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Otpverify2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
