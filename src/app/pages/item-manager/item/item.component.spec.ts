import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { DebugElement } from '@angular/core';
import { Item } from 'src/app/shared/item';
import { By } from '@angular/platform-browser';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  let mockItem: Item = {
    id: 0,
    description: 'Test desrcription',
    title: 'Test title',
    email: 'test@wallapop.com',
    price: 100,
    image: 'api/item/0/img',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.item = mockItem;
    fixture.detectChanges();
  });

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
    const titleParagraph = fixture.debugElement.query(By.css('.info-title'));
    expect(titleParagraph.nativeElement.innerText).toContain(
      component.item.title
    );
  });

  it("should contain the item's description", () => {
    const descriptionParagraph = fixture.debugElement.query(
      By.css('.info-description-text')
    );
    expect(descriptionParagraph.nativeElement.innerText).toContain(
      component.item.description
    );
  });

  it(`should have the item's email as a link `, () => {
    const emailLink = fixture.debugElement.query(By.css('a'));
    expect(emailLink.nativeElement.innerText).toContain(component.item.email);
  });

  it(`should have a working toggle favorite button`, () => {
    expect(component.isFavorite).toBeFalsy();
    component.toggleFavorite();
    expect(component.isFavorite).toBeTruthy();
    component.toggleFavorite();
    expect(component.isFavorite).toBeFalsy();
  });
});
