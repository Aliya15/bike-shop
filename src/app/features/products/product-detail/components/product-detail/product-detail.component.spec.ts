import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { provideRouter } from '@angular/router';
import { ProductDetailService } from '../../services/product-detail.service';
import { of } from 'rxjs';
import { BikeDetails } from '../../../../../shared/models/product.model';
import { By } from '@angular/platform-browser';
import SpyObj = jasmine.SpyObj;

const data: Partial<BikeDetails> = {
  large_img: '',
  title: 'Title',
  manufacturer_name: 'manufacturer_name',
  serial: 'serial',
  description: 'description',
  stolen: true,
};

describe('ProductDetailComponent', () => {
  let productDetailService: SpyObj<ProductDetailService>;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async () => {
    productDetailService = jasmine.createSpyObj<ProductDetailService>({
      getBikeDataById: of(data as BikeDetails),
    });
    await TestBed.configureTestingModule({
      imports: [ProductDetailComponent],
      providers: [
        provideRouter([]),
        {
          provide: ProductDetailService,
          useValue: productDetailService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailComponent);
  });

  it('should call getBikeDataById method', () => {
    fixture.detectChanges();

    expect(
      fixture.debugElement
        .query(By.css('.product-title'))
        .nativeElement.innerText.trim()
    ).toEqual('Title');

    expect(
      fixture.debugElement
        .query(By.css('.product-brand'))
        .nativeElement.innerText.trim()
    ).toEqual('manufacturer_name');
  });
});
