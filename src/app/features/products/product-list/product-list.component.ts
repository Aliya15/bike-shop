import {Component, inject, OnInit} from '@angular/core';
import {ProductTileComponent} from '../../../shared/components/product-tile/product-tile.component';
import {Bike} from '../../../shared/models/product.model';
import {ProductService} from './services/product.service';
import {SearchComponent} from '../../../shared/components/search/search.component';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {FilterPipe} from '../../../shared/pipes/filter.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductTileComponent, SearchComponent, AsyncPipe, FilterPipe],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  private productService: ProductService = inject(ProductService);
  productList$?: Observable<Bike[] | undefined>;
  query: string | undefined | null = '';

  ngOnInit() {
    this.productList$ = this.productService.getBikeList();
  }

  filterBikes(query: string | undefined | null): void {
    this.query = query;
  }
}
