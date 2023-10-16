import { Component } from "react";
import Product from "./Product";

export class ProductGrid extends Component {
  products = [
    { id: 1, title: "Fancy Product", price: "$40.00", sale: false },
    {
      id: 2,
      title: "Discounted Product",
      price: "$40.00",
      sale: true,
      was: "$60.00",
    },
    { id: 3, title: "Hello Product", price: "$40.00", sale: false },
    { id: 4, title: "ITI Product", price: "$40.00", sale: true, was: "$80.00" },
    { id: 5, title: "Great Product", price: "$40.00", sale: false },
    { id: 6, title: "Good Product", price: "$40.00", sale: false },
    { id: 7, title: "Bad Product", price: "$40.00", sale: false },
    { id: 8, title: "Ugly Product", price: "$40.00", sale: false },
  ];
  render() {
    return (
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {this.products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}
