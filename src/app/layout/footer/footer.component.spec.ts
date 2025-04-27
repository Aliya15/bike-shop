import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
  });

  it('should have a logo', () => {
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('img')).nativeElement
    ).toBeTruthy();
  });
});
