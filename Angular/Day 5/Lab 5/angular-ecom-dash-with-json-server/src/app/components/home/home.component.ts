import { Component, OnDestroy } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductService],
})
export class HomeComponent implements OnDestroy {
  products: Product[] | undefined = [];
  productObservable;

  constructor(private productService: ProductService) {
    this.productObservable = this.productService.getAllProducts().subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.log(err),
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
  }

  ngOnDestroy(): void {
    this.productObservable.unsubscribe();
  }
}
