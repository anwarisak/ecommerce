import React from "react";
import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Product from "./Product";
import NewArrivals from "./NewArrivals";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Product />
      <Features />
      <NewArrivals />
    </div>
  );
};

export default Home;
