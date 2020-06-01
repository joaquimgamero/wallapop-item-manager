import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesModalComponent } from './favorites-modal.component';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

describe('FavoritesModalComponent', () => {
  let component: FavoritesModalComponent;
  let fixture: ComponentFixture<FavoritesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesModalComponent],
      imports: [MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
