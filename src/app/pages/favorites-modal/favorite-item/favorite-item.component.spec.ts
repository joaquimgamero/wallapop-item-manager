import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';

import { FavoriteItemComponent } from './favorite-item.component';
import { Item } from 'src/app/shared/item';
import { By } from '@angular/platform-browser';
import { FavoritesService } from '../favorites.service';

describe('FavoriteItemComponent', () => {
  let component: FavoriteItemComponent;
  let fixture: ComponentFixture<FavoriteItemComponent>;

  let service: FavoritesService;
  let spy: jasmine.Spy;

  let mockItem: Item = {
    id: 0,
    description: 'Test fav desrcription',
    title: 'Test fav title',
    email: 'testfav@wallapop.com',
    price: 100,
    image: 'api/user/1234/favorites/0/img',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteItemComponent],
      providers: [FavoritesService],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteItemComponent);
    component = fixture.componentInstance;
    component.item = mockItem;

    service = fixture.debugElement.injector.get(FavoritesService);
    spy = spyOn(service, 'isFavorite');

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should contain the item's image", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.photo>img').src).toContain(
      component.item.image
    );
  });

  it("should contain the item's title", () => {
    const titleParagraph = fixture.debugElement.query(By.css('.title>span'));
    expect(titleParagraph.nativeElement.innerText).toContain(
      component.item.title
    );
  });

  it(`should call to remove the item from favorites through the remove button`, () => {
    const compiled = fixture.debugElement.nativeElement;
    component.onRemoveFromFavorites();

    expect(spy).toHaveBeenCalled();
    expect(spy.calls.all().length).toEqual(1);
  });
});
