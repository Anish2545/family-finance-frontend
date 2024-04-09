import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Otpverify1Page } from './otpverify1.page';

describe('Otpverify1Page', () => {
  let component: Otpverify1Page;
  let fixture: ComponentFixture<Otpverify1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Otpverify1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
