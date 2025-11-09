import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IcsPage } from './ics.page';

describe('IcsPage', () => {
  let component: IcsPage;
  let fixture: ComponentFixture<IcsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IcsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
