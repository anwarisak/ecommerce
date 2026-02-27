import { useSelector } from "react-redux";
import Header from "../components/layout/Header";
import ProductGrid from "../components/layout/ProductGrid";
import Title from "../components/layout/Title";
// import { products } from "../index";

const Product = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div>
      <Title
        title="Exclusive Products"
        desc="Shopping is a bit of a relaxing hobby for me which is sometimes troubling"
      />
      <ProductGrid products={products} />
    </div>
  );
};

export default Product;
