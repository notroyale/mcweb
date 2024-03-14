import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAlternativeComponent } from './hero-alternative.component';

describe('HeroAlternativeComponent', () => {
  let component: HeroAlternativeComponent;
  let fixture: ComponentFixture<HeroAlternativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroAlternativeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
