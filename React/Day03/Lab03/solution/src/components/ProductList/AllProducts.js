import products from "../../API/products";
import Proudct from "./Product";

const AllProducts = () => {
  let productsList = products;

  return (
    <div x-data="{ cartOpen: false , isOpen: false }" className="bg-white">
      <main className="my-8">
        <div className="container mx-auto px-6">
          <div className="mt-16">
            <h3 className="text-gray-600 text-2xl font-medium">Bestselling</h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              {productsList.length > 0 &&
                productsList.map((product) => (
                  <Proudct key={product.id} product={product} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllProducts;
