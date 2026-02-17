const Features = () => {
  return (
    <section className="w-full max-w-[1240px] mx-auto py-12">
      <div className=" flex flex-col md:flex-row justify-between items-center gap-8 mx-0">
        {/* Feature 1 */}
        <div className="flex flex-col max-w-xs shadow-2xs">
          <h1 className="font-bold text-xl mb-2">Premium Quality</h1>
          <p className="text-sm text-gray-600">
            All our clothes are crafted from high-quality fabrics for comfort and durability.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col max-w-xs shadow-2xs">
          <h1 className="font-bold text-xl mb-2">Free Shipping</h1>
          <p className="text-sm text-gray-600">
            Orders over $50 enjoy free, fast shipping straight to your door.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col max-w-xs shadow-2xs">
          <h1 className="font-bold text-xl mb-2">Easy Returns</h1>
          <p className="text-sm text-gray-600">
            Return items hassle-free within 14 days if you change your mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
