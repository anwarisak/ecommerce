import { products } from "../../index";

const NewArrivalsGrid = () => {
  return (
    <div className="px-8 my-8">
      <div className="max-w-5xl grid grid-cols md:grid-cols-4 mx-auto gap-4">
        {products.slice(4, 8).map((product) => (
          <div key={product.id} className="text-start">
            <img className="" src={product.img} alt={product.name} />

            <div>
              <span className="text-gray-500 text-sm block my-2">
                {product.name}
              </span>
              <span className="font-semibold">USD {product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsGrid;
