import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenomicsCardComponent } from './tokenomics-card.component';

describe('TokenomicsCardComponent', () => {
  let component: TokenomicsCardComponent;
  let fixture: ComponentFixture<TokenomicsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenomicsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TokenomicsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
