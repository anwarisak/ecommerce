import React from "react";
import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Product from "./Product";
import NewArrivals from "./NewArrivals";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Product />
      <Features />
      <NewArrivals />
      <Footer/>
    </div>
  );
};

export default Home;
