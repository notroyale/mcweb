import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenomicsCarouselComponent } from './tokenomics-carousel.component';

describe('TokenomicsCarouselComponent', () => {
  let component: TokenomicsCarouselComponent;
  let fixture: ComponentFixture<TokenomicsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenomicsCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TokenomicsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
