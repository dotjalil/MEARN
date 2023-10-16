import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  product = {
    name: '',
    detail: '',
    price: null,
  };

  constructor(private productService: ProductService, private router: Router) {}

  submitAddProductForm(value: any) {
    this.productService.addProduct(value).subscribe({
      next: (data) => {
        this.router.navigate(['/']);
      },
    });
  }
}
