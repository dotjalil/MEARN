import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
    {
      id: 1,
      name: 'hero Product',
      detail: 'Lorem ipsum dolor sit amet',
      price: '99',
      hero: 'OMG This just came out today!',
      image: 'http://placehold.it/940x300/999/CCC',
    },
    {
      id: 2,
      name: 'Product 1',
      detail: 'Lorem ipsum dolor sit amet',
      price: '99',
      info: 'This is the latest and greatest product from Derp corp.',
      image: 'http://placehold.it/300x300/999/CCC',
    },
    {
      id: 3,
      name: 'Product 2',
      detail: 'Lorem ipsum dolor sit amet',
      price: '99',
      offer: 'BOGOF',
      image: 'http://placehold.it/300x300/999/CCC',
    },
  ];

  constructor() {}

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  addProduct(product: Product) {
    console.log('Add Product!');
  }

  editProduct(product: Product) {
    console.log('Edit Product!');
  }

  deleteProduct(productId: number) {
    console.log('Delete Product!');
  }
}
