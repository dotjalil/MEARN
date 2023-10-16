import { useEffect, useState } from "react";
import { getAllProducts } from "../../API/products";
import Proudct from "./Product";

const AllProducts = () => {
  let [productsList, setProductsList] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let getProductsRes = await getAllProducts();
        setProductsList(getProductsRes.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div x-data="{ cartOpen: false , isOpen: false }" className="bg-white">
      <main className="my-8">
        <div className="container mx-auto px-6">
          <div className="mt-16">
            <h3 className="text-gray-600 text-2xl font-medium">Bestselling</h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              {productsList &&
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
