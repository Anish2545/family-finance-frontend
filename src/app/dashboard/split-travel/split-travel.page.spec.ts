import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplitTravelPage } from './split-travel.page';

describe('SplitTravelPage', () => {
  let component: SplitTravelPage;
  let fixture: ComponentFixture<SplitTravelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SplitTravelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});