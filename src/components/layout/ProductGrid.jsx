import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/products/productsSlice";

const ProductGrid = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();

        if (res.ok) {
          setProducts(data.data || data); // depends on your API structure
        } else {
          console.error("Failed to fetch products:", data.message);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    console.log(item);
  };

  if (loading) {
    return <div className="text-center my-8">Loading products...</div>;
  }

  return (
    <div className="px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {products.map((item) => (
          <div key={item.id} className="group relative">
            <img
              className="w-full h-64 object-cover rounded-lg"
              src={item.image} // make sure API uses `image` field
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
