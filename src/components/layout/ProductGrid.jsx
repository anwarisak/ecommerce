import imagecard from "../../assets/dress.avif";
import { productlist } from "../../index";
const ProductGrid = () => {
  return (
    <div className="px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {productlist.map((product) => (
          <div key={product.id} className="text-start">
            <img
              className="w-full h-64 object-cover"
              src={product.img}
              alt={product.name}
            />

            <div className="mt-2 flex justify-between">
              <span className="font-semibold">${product.price}</span>
              <span className="text-gray-500 text-sm">{product.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ProductGrid;
