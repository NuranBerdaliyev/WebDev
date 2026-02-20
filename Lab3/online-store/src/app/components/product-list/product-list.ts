import { Component } from '@angular/core';
import { Product } from '../../models/products.model';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: "Защитная накладка Limmalin для MacBook Air 13.6 A2681/A2442/A2485",
      description: "Максимальная диагональ ноутбука: 13.6 дюйм; Совместимые модели: MacBook Air 13.6 A2681/A2442/A2485",
      price: 750,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hb7/h03/81125621170206.jpg?format=gallery-large",
      images: [],
      link: "https://kaspi.kz/shop/p/zaschitnaja-nakladka-limmalin-dlja-macbook-air-13-6-a2681-a2442-a2485-110714986/?c=750000000"
    },
    {
      id: 2,
      name: "Creative Bracket подставка для ноутбука UN-60",
      description: 'Без охлаждения; Максимальная диагональ ноутбука: 15.6, 17, 14, 15, 16; антискользящее покрытие; Цвет серый',
      price: 1043,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h0a/ha5/64119036379166.jpg?format=gallery-large",
      images: ["https://resources.cdn-kaspi.kz/img/m/p/h56/hcb/64119038476318.jpg?format=gallery-large"],
      link: "https://kaspi.kz/shop/p/creative-bracket-un-60-101298013/?c=750000000"
    },
    {
      id: 3,
      name: "Блок питания сетевой адаптер 9V 2A, штекер 5.5х2.5",
      description: "Сетевой; Универсальная совместимость; Выходное напряжение - 9 В, Входное - 220 В",
      price: 993,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hce/hb8/69496266293278.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/setevoi-adapter-9v-2a-shteker-5-5h2-5-109106246/?c=750000000"

    },
  ];
  shareWhatsApp(productLink: string) {
  const text = encodeURIComponent(`Check out this product: ${productLink}`);
  const url = `https://wa.me/?text=${text}`;
  window.open(url, '_blank');
  };

  shareTelegram(productLink: string, productName: string) {
    const urlEncoded = encodeURIComponent(productLink);
    const textEncoded = encodeURIComponent(productName);
    const url = `https://t.me/share/url?url=${urlEncoded}&text=${textEncoded}`;
    window.open(url, '_blank');
  };
}
