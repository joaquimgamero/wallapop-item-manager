import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';
import { Item } from 'src/app/shared/item';

describe('FavoritesService', () => {
  let service: FavoritesService;

  const mockFavorites: Item[] = [
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

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to add favorites', () => {
    service.addToFavorites(mockFavorites[0]);

    expect(service.userHasFavorites).toBeTrue();
  });

  it('should be able to remove favorites', () => {
    if (!service.isFavorite(0)) {
      service.addToFavorites(mockFavorites[0]);
    }

    expect(service.isFavorite(0)).toBeTrue();

    service.removeFromFavorites(mockFavorites[0]);

    expect(service.isFavorite(0)).toBeFalse();
  });
});
