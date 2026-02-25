import { Category } from '../models/category.model';
import { Product } from '../models/products.model';

export const categories: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Tablets' }
];

export const products: Product[] = [
    {
      id: 1,
      name: "Защитная накладка Limmalin для MacBook Air 13.6 A2681/A2442/A2485",
      description: "Максимальная диагональ ноутбука: 13.6 дюйм; Совместимые модели: MacBook Air 13.6 A2681/A2442/A2485",
      price: 750,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hb7/h03/81125621170206.jpg?format=gallery-large",
      images: [],
      link: "https://kaspi.kz/shop/p/zaschitnaja-nakladka-limmalin-dlja-macbook-air-13-6-a2681-a2442-a2485-110714986/?c=750000000",
      likes: 0,
      categoryId: 2
    },
    {
      id: 2,
      name: "Creative Bracket подставка для ноутбука UN-60",
      description: 'Без охлаждения; Максимальная диагональ ноутбука: 15.6, 17, 14, 15, 16; антискользящее покрытие; Цвет серый',
      price: 1043,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h0a/ha5/64119036379166.jpg?format=gallery-large",
      images: ["https://resources.cdn-kaspi.kz/img/m/p/h56/hcb/64119038476318.jpg?format=gallery-large"],
      link: "https://kaspi.kz/shop/p/creative-bracket-un-60-101298013/?c=750000000",
      likes: 0,
      categoryId: 2
    },
    {
      id: 3,
      name: "Блок питания сетевой адаптер 9V 2A, штекер 5.5х2.5",
      description: "Сетевой; Универсальная совместимость; Выходное напряжение - 9 В, Входное - 220 В",
      price: 993,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hce/hb8/69496266293278.jpg?format=gallery-medium",
      images: [],
      link: "https://kaspi.kz/shop/p/setevoi-adapter-9v-2a-shteker-5-5h2-5-109106246/?c=750000000",
      likes: 0,
      categoryId: 2
    },
    {
      id: 4,
      name: "Ноутбук PRYME N5095 15.6'' / 16 Гб / SSD 512 Гб / Win 11 Pro / FHK14BK25",
      description: "PRYME N5095 идеально подойдёт для студентов, офисных сотрудников и всех, кто ценит баланс между производительностью и мобильностью. Он легко справляется с повседневными задачами — будь то работа с документами, интернет-сёрфинг, онлайн-обучение или просмотр фильмов.",
      price: 189990,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p0b/pfb/45122460.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pd2/pfa/45122462.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p9a/pfa/45122464.jpg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/pryme-n5095-15-6-16-gb-ssd-512-gb-win-11-pro-fhk14bk25-133963600/?c=750000000",
      likes: 0,
      categoryId: 2
    },
    { id: 5,
      name: "Сумка Cheezle Cheezle SER15 до 15.6'' серый",
      description: "Сумка для ноутбука 15.6 дюймов | Унисекс | Стиль и защита каждый день Универсальная сумка для ноутбука до 15.6'' — надёжный помощник в повседневной жизни. Подходит как мужчинам, так и женщинам. Практичный чёрный цвет и лаконичный дизайн впишутся в любой образ — от делового до casual. ✅ Преимущества: Совместимость: подходит для ноутбуков с диагональю до 15.6 дюймов Материал Оксфорд: прочный, влагостойкий и лёгкий в уходе Функциональные отделения: удобно разместите документы, зарядку и мелочи Плечевой ремень + замок: для комфортной носки и защиты ваших вещей Компактные размеры: 41×30×3 см — легко помещается в ручную кладь Идеальный выбор для работы, учёбы, командировок и деловых встреч. 💼 Стильная, удобная, практичная — закажите сейчас и обеспечьте защиту своему ноутбуку с комфортом и вкусом",
      price: 2290,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p27/pa2/41166221.png?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p0b/pa2/41166222.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pb6/pa1/41166225.png?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/sumka-cheezle-cheezle-ser15-do-15-6-seryi-139013070/?c=750000000",
      likes: 0,
      categoryId: 2
    },
    {
      id: 5,
      name: "Смартфон Apple iPhone 17 Pro 256Gb NanoSIM+eSIM оранжевый",
      description: "Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей",
      price: 822702,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/pdf/p95/64168415.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-oranzhevyi-145467625/?c=750000000",
      likes: 0,
      categoryId: 1
    },
    {
        id: 6,
        name: "Смартфон Apple iPhone 17 Pro 256Gb NanoSIM+eSIM темно-синий",
        description: "Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе передовые технологии, непревзойденную производительность и элегантный дизайн.",
        price: 809700,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/p37/p7a/64463536.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p0e/p84/64167658.png?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-temno-sinii-145438959/?c=750000000",
        likes: 0,
        categoryId: 1
    },
    {
        id: 7,
        name: "Наушники GERLAX GH-34 черный",
        description: "Наушники GERLAX GH-34 — это идеальный выбор для тех, кто ценит высокое качество звука и удобство использования",
        price: 2769,
        rating: 4.8,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h33/hfc/86037848064030.png?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h52/h6d/86037848129566.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h15/h72/86037848195102.png?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/naushniki-gerlax-gh-34-chernyi-119492193/?c=750000000",
        likes: 0,
        categoryId: 3
    },
    {
        id: 8,
        name: "Наушники Air pro 2 белый",
        description: "Представляем наушники Air Pro 2 — идеальный выбор для тех, кто ценит высокое качество звука и комфорт в использовании.",
        price: 2250,
        rating: 4.9,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/he4/h13/85730021834782.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h61/ha2/85730021900318.jpg?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/naushniki-air-pro-2-belyi-118366664/?c=750000000",
        likes: 0,
        categoryId: 3
    },
    {
        id: 9,
        name: "ТераФлю саше 325 мг 10 шт",
        description: "Моментальная помощь при простуде и температуре.",
        price: 2200,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/hc9/hcf/87293798088734.jpg?format=gallery-medium",
        images: [],
        link: 'https://kaspi.kz/shop/p/teraflju-sashe-325-mg-10-sht-124283396/?c=750000000',
        likes: 0,
        categoryId: 4
    },
    {
        id: 10,
        name:"Эргоферон таблетки 0.006 г 20 шт",
        description: "Гомеопатический безвредный препарат. Помогает при вирусах, при первых симптомах простуды.",
        price: 2774,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/hf2/hf8/86919576125470.jpg?format=gallery-medium",
        images: ["https://resources.cdn-kaspi.kz/img/m/p/h2f/hac/63962962427934.jpg?format=gallery-medium"],
        link: "https://kaspi.kz/shop/p/ergoferon-tabletki-0-006-g-20-sht-100996101/?c=750000000",
        likes: 0,
        categoryId: 4
    }
];