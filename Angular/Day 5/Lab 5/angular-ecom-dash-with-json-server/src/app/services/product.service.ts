import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[] | undefined> {
    return new Observable((observer) => {
      fetch(this.url)
        .then((res) => res.json())
        .then((data) => {
          observer.next(data);
          observer.complete();
        })
        .catch((err) => observer.error(err));
    });
  }

  getProductById(id: number): Observable<Product> {
    return new Observable((observer) => {
      fetch(`${this.url}/${id}`)
        .then((res) => res.json())
        .then((data) => {
          observer.next(data);
          observer.complete();
        })
        .catch((err) => observer.error(err));
    });
  }

  addProduct(product: Product) {
    return this.http.post<any>(this.url, product);
  }

  editProduct(product: Product, id: number | string) {
    this.http.put<any>(`${this.url}/${id}`, product).subscribe({
      next: (data) => {
        console.log('data: ', data);
      },
    });
  }

  deleteProduct(productId: number) {
    console.log('Delete Product!', productId);
    this.http.delete<any>(`${this.url}/${productId}`).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
