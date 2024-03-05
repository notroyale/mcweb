import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingHeadlineComponent } from './rotating-headline.component';

describe('RotatingHeadlineComponent', () => {
  let component: RotatingHeadlineComponent;
  let fixture: ComponentFixture<RotatingHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotatingHeadlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RotatingHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
