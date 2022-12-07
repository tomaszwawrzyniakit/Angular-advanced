import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsNavigatorComponent } from './book-details-navigator.component';

describe('BookDetailsNavigatorComponent', () => {
  let component: BookDetailsNavigatorComponent;
  let fixture: ComponentFixture<BookDetailsNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailsNavigatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDetailsNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
