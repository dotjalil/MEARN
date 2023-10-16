import { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div className="col mb-5">
        <div className="card h-100">
          {this.props.product.sale ? (
            <div
              class="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Sale
            </div>
          ) : (
            ""
          )}
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />

          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{this.props.product.title}</h5>
              {this.props.product.sale ? (
                <>
                  <span className="text-muted text-decoration-line-through">
                    {this.props.product.was}
                  </span>
                  {" - "} {this.props.product.price}
                </>
              ) : (
                this.props.product.price
              )}
            </div>
          </div>

          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="/">
                View options
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
