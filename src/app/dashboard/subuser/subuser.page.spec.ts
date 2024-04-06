import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubuserPage } from './subuser.page';

describe('SubuserPage', () => {
  let component: SubuserPage;
  let fixture: ComponentFixture<SubuserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
