import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListComponent } from './item-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { Item } from 'src/app/shared/item';
import { By } from '@angular/platform-browser';
import { SortType } from 'src/app/shared/sort-type.enum';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;
  let de: DebugElement;

  let mockItems: Item[] = [
    {
      id: 0,
      description: 'Test description 0',
      title: 'C - Test title 0',
      email: 'test0@wallapop.com',
      price: 10,
      image: 'api/item/0/img',
    },
    {
      id: 1,
      description: 'Test description 1',
      title: 'A -Test title 1',
      email: 'atest1@wallapop.com',
      price: 100,
      image: 'api/item/1/img',
    },
    {
      id: 2,
      description: 'A - Test description 2',
      title: 'B - Test title 2',
      email: 'test2@wallapop.com',
      price: 200,
      image: 'api/item/2/img',
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ItemListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    component.allItems = mockItems;
    component.filteredItems = mockItems;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should include a filtering component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('filters')).not.toBe(null);
  }));

  it('should include a working sorting filter - By price descending', async(() => {
    const filters = fixture.debugElement.query(By.css('filters'))
      .componentInstance;

    filters.onSortBy(SortType.PriceDescending);
    // After sorting
    expect(component.filteredItems[0].id).toBe(2);
  }));

  it('should include a working sorting filter - By price ascending', async(() => {
    const filters = fixture.debugElement.query(By.css('filters'))
      .componentInstance;

    filters.onSortBy(SortType.PriceAscending);
    // After sorting
    expect(component.filteredItems[0].id).toBe(0);
  }));

  it('should include a working sorting filter - By title', async(() => {
    const filters = fixture.debugElement.query(By.css('filters'))
      .componentInstance;

    filters.onSortBy(SortType.Title);
    // After sorting
    expect(component.filteredItems[0].id).toBe(1);
  }));

  it('should include a working sorting filter - By email', async(() => {
    const filters = fixture.debugElement.query(By.css('filters'))
      .componentInstance;

    filters.onSortBy(SortType.Email);
    // After sorting
    expect(component.filteredItems[0].id).toBe(1);
  }));

  it('should include a working sorting filter - By description', async(() => {
    const filters = fixture.debugElement.query(By.css('filters'))
      .componentInstance;

    filters.onSortBy(SortType.Description);
    // After sorting
    expect(component.filteredItems[0].id).toBe(2);
  }));

  it('should include a working search filter - By description', async(() => {
    component.onSearch('atest1');
    // After sorting
    expect(component.filteredItems.length).toBe(1);
    expect(component.filteredItems[0].id).toBe(1);
  }));
});
