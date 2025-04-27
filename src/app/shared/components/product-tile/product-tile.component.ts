import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { Bike } from '../../models/product.model';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-tile',
  standalone: true,
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss'],
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTileComponent {
  private readonly router = inject(Router);
  readonly product = input.required<Bike>();

  openPLP(): void {
    this.router.navigate(['/list', this.product().id]);
  }
}
