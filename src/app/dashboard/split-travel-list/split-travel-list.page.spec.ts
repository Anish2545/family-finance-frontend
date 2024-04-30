import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { SplitTravelListPage } from './split-travel-list.page';

describe('SplitTravelListPage', () => {
  let component: SplitTravelListPage;
  let fixture: ComponentFixture<SplitTravelListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SplitTravelListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
