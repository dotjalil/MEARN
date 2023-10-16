import Hero from "../components/Hero";
import AllProducts from "../components/ProductList/AllProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="py-8"></div>
      <AllProducts />
    </>
  );
};

export default Home;
