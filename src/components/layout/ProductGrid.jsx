import imagecard from "../../assets/dress.avif";
import { productlist } from "../../index";
const ProductGrid = () => {
  const products = productlist.slice(0, 3);

  return (
    <div className="px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`text-start ${
              index === products.length - 1 ? "col-span-2" : ""
            }`}
          >
            <img
              className="w-120 h-65 object-cover rounded-lg"
              src={product.img}
              alt={product.name}
            />

            <div className="flex flex-col text-start my-4">
              <span className="text-gray-500 text-lg my-2">{product.name}</span>
              <span className="text-lg font-bold">USD {product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
