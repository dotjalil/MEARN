import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <ProductGrid />
        <Footer />
      </div>
    );
  }
}
