import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbookComponent } from './sbook.component';

describe('SbookComponent', () => {
  let component: SbookComponent;
  let fixture: ComponentFixture<SbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
