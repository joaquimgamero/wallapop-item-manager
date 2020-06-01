import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemManagerComponent } from './item-manager.component';
import { HttpClientModule } from '@angular/common/http';

describe('ItemManagerComponent', () => {
  let component: ItemManagerComponent;
  let fixture: ComponentFixture<ItemManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ItemManagerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
