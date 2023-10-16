import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, UrlSegment } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy {
  id: number | undefined;
  idObservable: Subscription | undefined;
  product: Product | undefined;
  action: string | null | undefined;
  actionObservable: any;
  productObservable: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.idObservable = this.route.paramMap.subscribe({
      next: (params: ParamMap) => {
        this.id = Number(params.get('id'));
        this.productObservable = this.productService
          .getProductById(this.id)
          .subscribe({
            next: (product) => {
              this.product = product;
            },
            error: (err) => {
              console.log(err);
            },
          });
      },
      error: (err: any) => {
        console.log(err);
      },
    });

    this.actionObservable = this.route.url.subscribe({
      next: (val: any) => {
        this.action = val[2]?.path;
      },
    });
  }

  ngOnDestroy(): void {
    this.idObservable?.unsubscribe();
    this.actionObservable?.unsubscribe();
    this.productObservable?.unsubscribe();
  }
}
