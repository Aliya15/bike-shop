import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, DatePipe, NgOptimizedImage } from '@angular/common';
import { ProductDetailService } from '../../services/product-detail.service';

@Component({
  selector: 'app-product-detail',
  imports: [AsyncPipe, NgOptimizedImage, DatePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {
  private readonly productService: ProductDetailService =
    inject(ProductDetailService);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  readonly currentBikeData$ = this.productService.getBikeDataById(
    this.route.snapshot.paramMap.get('id')?.toString() ?? ''
  );
}
