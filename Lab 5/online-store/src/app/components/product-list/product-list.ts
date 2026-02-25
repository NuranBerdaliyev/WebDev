import { Component, input, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {

  products = input<Product[]>([]);
  displayedProducts = signal<Product[]>([]);

  ngOnInit() {
    this.displayedProducts.set([...this.products()]);
  }
  reset() {
  this.displayedProducts.set([...this.products()]);
  }
  ngOnChanges() {
    this.displayedProducts.set([...this.products()]);
  }

  removeProduct(id: number) {
    this.displayedProducts.update(list =>
      list.filter(p => p.id !== id)
    );
  }
}