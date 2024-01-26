import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BentoSectionComponent } from './bento-section.component';

describe('BentoSectionComponent', () => {
  let component: BentoSectionComponent;
  let fixture: ComponentFixture<BentoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BentoSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BentoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
