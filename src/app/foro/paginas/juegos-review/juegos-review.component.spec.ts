import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosReviewComponent } from './juegos-review.component';

describe('JuegosReviewComponent', () => {
  let component: JuegosReviewComponent;
  let fixture: ComponentFixture<JuegosReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
