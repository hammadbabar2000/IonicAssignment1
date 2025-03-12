import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatailsPage } from './datails.page';

describe('DatailsPage', () => {
  let component: DatailsPage;
  let fixture: ComponentFixture<DatailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DatailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
