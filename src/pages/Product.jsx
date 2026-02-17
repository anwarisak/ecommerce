import ProductGrid from "../components/layout/ProductGrid";
import Title from "../components/layout/Title";

const Product = () => {
  return (
    <div>
      <Title
        title="Exclusive Products"
        desc="Shopping is a bit of a relaxing hobby for me which is sometimes troubling"
      />
      <ProductGrid />
    </div>
  );
};

export default Product;
