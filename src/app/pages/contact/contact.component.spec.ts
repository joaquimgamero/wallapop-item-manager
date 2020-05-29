import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a valid wallapop contact email`, () => {
    expect(component.contactEmail).toContain('@wallapop.com');
  });

  it(`should have the contact email as a link rendered in the view`, () => {
    expect(de.query(By.css('a')).nativeElement.innerText).toContain(
      component.contactEmail
    );
  });
});
