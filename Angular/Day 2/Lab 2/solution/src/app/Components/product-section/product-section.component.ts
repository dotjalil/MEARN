import { Component } from '@angular/core';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css'],
})
export class ProductSectionComponent {
  products = [
    {
      title: 'Apple iPhone XR (Red, 128 GB)',
      img: 'assets/images/product-1.jpg',
      description:
        '128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display',
      quantitiy: 3,
      price: '$499.00',
    },
    {
      title: 'Apple iPhone XR (Red, 128 GB)',
      img: 'assets/images/product-2.jpg',
      description:
        '128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display',
      quantitiy: 3,
      price: '$599.00',
    },
    {
      title: 'Apple iPhone XS Max (Gold, 64 GB)',
      img: 'assets/images/product-1.jpg',
      description:
        '256 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 15MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display',
      quantitiy: 0,
      price: '$499.00',
    },
    {
      title: 'Apple iPhone XR (Red, 128 GB)',
      img: 'assets/images/product-2.jpg',
      description:
        '128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display',
      quantitiy: 1,
      price: '$599.00',
    },
  ];
}
