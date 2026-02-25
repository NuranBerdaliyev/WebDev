import { Component, signal } from '@angular/core';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/products.model';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  categories: Category[] = [];
  selectedCategoryId = signal<number | null>(null);
  selectedProducts = signal<Product[]>([]);

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(id: number) {
    this.selectedCategoryId.set(id);
    const products = this.productService.getProductsByCategory(id);
    this.selectedProducts.set([...products]);
  }
}