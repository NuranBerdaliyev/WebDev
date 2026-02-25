import { Component, input, output } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {

  product = input.required<Product>();
  delete = output<number>();

  like() {
    this.product().likes++;
  }

  remove() {
    const confirmed = confirm('Are you sure you want to delete this product?');
    if (confirmed) {
      this.delete.emit(this.product().id);
    }
  }

  shareWhatsApp(link: string) {
    const text = encodeURIComponent(`Check out this product: ${link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareTelegram(link: string, name: string) {
    const url = encodeURIComponent(link);
    const text = encodeURIComponent(name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}
