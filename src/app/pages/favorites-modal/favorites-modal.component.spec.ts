import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesModalComponent } from './favorites-modal.component';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Item } from 'src/app/shared/item';
import { FavoritesService } from './favorites.service';

describe('FavoritesModalComponent', () => {
  let component: FavoritesModalComponent;
  let fixture: ComponentFixture<FavoritesModalComponent>;

  let mockFavorites: Item[] = [
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
      declarations: [FavoritesModalComponent],
      imports: [MatDialogModule],
      providers: [
        FavoritesService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesModalComponent);
    component = fixture.componentInstance;
    component.filteredFavorites = mockFavorites;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide filters if user has no favorites', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('searcher')).toBe(null);
    expect(compiled.querySelector('pagination')).toBe(null);
  }));
});
