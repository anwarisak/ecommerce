import { productlist } from "../../index";

const NewArrivalsGrid = () => {
  return (
    <div className="px-8 my-8">
      <div className="flex justify-center gap-6 overflow-x-auto scrollbar-hide">
        {productlist.slice(3, 7).map((product) => (
          <div key={product.id} className="min-w-[160px] text-start">
            <img
              className="w-full h-50 object-cover rounded-lg"
              src={product.img}
              alt={product.name}
            />

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
