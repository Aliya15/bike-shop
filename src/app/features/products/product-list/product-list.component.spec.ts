import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { Bike } from '../../../shared/models/product.model';
import { of } from 'rxjs';
import { ProductService } from './services/product.service';
import { By } from '@angular/platform-browser';
import SpyObj = jasmine.SpyObj;

const data: Partial<Bike>[] = [
  {
    large_img: '',
    title: 'Title',
    manufacturer_name: 'manufacturer_name',
    serial: 'serial',
    description: 'description',
    stolen: true,
  },
  {
    large_img: '',
    title: 'Title 2',
    manufacturer_name: 'manufacturer_name 2',
    serial: 'serial 2',
    description: 'description 2',
    stolen: true,
  },
];

describe('ProductListComponent', () => {
  let productService: SpyObj<ProductService>;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    productService = jasmine.createSpyObj<ProductService>({
      getBikeList: of(data as Bike[]),
    });

    await TestBed.configureTestingModule({
      imports: [ProductListComponent],
      providers: [
        {
          provide: ProductService,
          useValue: productService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
  });

  it('should render 2 product cards', () => {
    fixture.detectChanges();

    expect(
      fixture.debugElement.queryAll(By.css('app-product-tile')).length
    ).toEqual(2);
  });
});
