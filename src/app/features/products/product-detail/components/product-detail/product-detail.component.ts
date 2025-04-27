import {Component, inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BikeDetails} from '../../../../../shared/models/product.model';
import {ActivatedRoute} from '@angular/router';
import {AsyncPipe, DatePipe, NgOptimizedImage} from '@angular/common';
import {ProductDetailService} from '../../services/product-detail.service';

@Component({
  selector: 'app-product-detail',
  imports: [
    AsyncPipe,
    NgOptimizedImage,
    DatePipe,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  standalone: true,
})
export class ProductDetailComponent implements OnInit {
  private productService: ProductDetailService = inject(ProductDetailService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  currentBikeData$?: Observable<BikeDetails>;

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.currentBikeData$ = this.productService.getBikeDataById(productId.toString());
    }
  }
}
