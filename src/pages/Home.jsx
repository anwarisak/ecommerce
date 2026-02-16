import React from "react";
import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Product />
    </div>
  );
};

export default Home;
