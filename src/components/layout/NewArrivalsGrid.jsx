import { useEffect, useState } from "react";

const NewArrivalsGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();

        if (res.ok) {
          setProducts(data.data || data);
        } else {
          console.error("Failed:", data.message);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center my-6">Loading...</p>;
  }

  return (
    <div className="px-8 my-8">
      <div className="max-w-5xl grid grid-cols-2 md:grid-cols-4 mx-auto gap-4">
        {products.slice(2, 8).map((product) => (
          <div key={product.id} className="text-start">
            <img
              className="w-full h-68 object-cover"
              src={product.image} 
              alt={product.name}
            />

            <div>
              <span className="text-gray-500 text-sm block my-2">
                {product.name}
              </span>
              <span className="font-semibold">
                USD {product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsGrid;