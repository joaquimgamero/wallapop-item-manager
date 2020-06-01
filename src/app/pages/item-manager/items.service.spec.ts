import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ItemsService } from './items.service';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { Item } from 'src/app/shared/item';

describe('ItemsService', () => {
  let service: ItemsService;
  let httpMock: HttpTestingController;
  const itemsUrl =
    'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, HttpClientModule, HttpClientTestingModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    service = TestBed.get(ItemsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve items from the API (GET)', () => {
    const mockItems: Item[] = [
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

    service.getItems().subscribe((items) => {
      expect(items.length).toBe(3);
      expect(items).toEqual(mockItems);
    });

    const call = httpMock.expectOne(itemsUrl);

    expect(call.request.method).toBe('GET');

    call.flush(mockItems);
  });
});
