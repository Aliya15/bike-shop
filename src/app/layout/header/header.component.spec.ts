import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
  });

  it('should have a logo', () => {
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('img')).nativeElement
    ).toBeTruthy();
  });
});
