import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductService],
})
export class HomeComponent {
  products: Product[] = [];
  constructor(private productService: ProductService) {
    this.products = this.productService.getAllProducts();
  }
}
