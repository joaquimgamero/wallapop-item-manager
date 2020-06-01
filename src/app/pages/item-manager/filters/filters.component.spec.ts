import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersComponent } from './filters.component';
import { HttpClientModule } from '@angular/common/http';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [FiltersComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should include the searcher component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('searcher')).not.toBe(null);
  }));

  it('should include the pagination component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('pagination')).not.toBe(null);
  }));
});
