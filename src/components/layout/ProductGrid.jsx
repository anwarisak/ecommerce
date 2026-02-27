import { useDispatch } from "react-redux";
import { addToCart } from "../../features/products/productsSlice";

const ProductGrid = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    console.log(item);
  };

  return (
    <div className="px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {products.map((item) => (
          <div key={item.id} className="group relative">
            <img
              className="w-full h-64 object-cover rounded-lg"
              src={item.img}
              alt={item.name}
            />

            <button
              onClick={() => handleAddToCart(item)}
              className="absolute top-4 right-4 bg-black text-white px-4 py-2 text-sm rounded-lg opacity-100 transition duration-300"
            >
              Add Cart
            </button>

            <div className="flex flex-col text-start my-4">
              <span className="text-gray-500 text-lg my-2">{item.name}</span>
              <span className="text-lg font-bold">USD {item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
