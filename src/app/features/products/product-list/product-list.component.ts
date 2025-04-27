import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ProductTileComponent } from '../../../shared/components/product-tile/product-tile.component';
import { ProductService } from './services/product.service';
import { SearchComponent } from '../../../shared/components/search/search.component';
import { AsyncPipe } from '@angular/common';
import { FilterPipe } from '../../../shared/pipes/filter.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductTileComponent, SearchComponent, AsyncPipe, FilterPipe],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  private readonly productService = inject(ProductService);
  readonly productList$ = this.productService.getBikeList();
  readonly query = signal<string>('');

  filterBikes(query: string): void {
    this.query.set(query);
  }
}
