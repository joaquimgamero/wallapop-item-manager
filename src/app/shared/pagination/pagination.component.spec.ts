import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.firstPage = 1;
    component.lastPage = 3;
    component.currentPage = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be protected from overflowing the page number (positive direction)', () => {
    expect(component.currentPage).toBe(1);
    component.onNext();
    expect(component.currentPage).toBe(2);
    component.onNext();
    expect(component.currentPage).toBe(3);
    component.onNext();
    expect(component.currentPage).toBe(3);
  });

  it('should be protected from overflowing the page number (negative direction)', () => {
    component.currentPage = 3;
    expect(component.currentPage).toBe(3);
    component.onPrevious();
    expect(component.currentPage).toBe(2);
    component.onPrevious();
    expect(component.currentPage).toBe(1);
    component.onPrevious();
    expect(component.currentPage).toBe(1);
  });

  it('should normalize the current page when number of pages diminish', () => {
    component.lastPage = 5;
    component.currentPage = 3;
    expect(component.currentPage).toBe(3);
    component.lastPage = 2;
    component.onPageChange();
    expect(component.currentPage).toBe(2);
  });
});
