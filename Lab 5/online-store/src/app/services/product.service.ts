import { Injectable } from '@angular/core';
import { products, categories } from '../data/store.data';
import { Product } from '../models/products.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getCategories(): Category[] {
    return categories;
  }

  getProducts(): Product[] {
    return products;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return products.filter(p => p.categoryId === categoryId);
  }

  likeProduct(productId: number) {
    const product = products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }
}