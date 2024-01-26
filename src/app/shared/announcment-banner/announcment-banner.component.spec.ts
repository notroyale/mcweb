import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncmentBannerComponent } from './announcment-banner.component';

describe('AnnouncmentBannerComponent', () => {
  let component: AnnouncmentBannerComponent;
  let fixture: ComponentFixture<AnnouncmentBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnouncmentBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnouncmentBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
