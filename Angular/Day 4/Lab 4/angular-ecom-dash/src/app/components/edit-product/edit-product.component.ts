import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit, OnDestroy {
  id: number | undefined;
  product: Product | undefined;
  idObservable: Subscription | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idObservable = this.route.paramMap.subscribe({
      next: (param: ParamMap) => {
        this.id = Number(param.get('id'));
        this.product = this.productService.getProductById(this.id);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  ngOnDestroy(): void {
    this.idObservable?.unsubscribe();
  }
}
