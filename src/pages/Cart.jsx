import { useSelector } from "react-redux";

const Cart = () => {
  // get cart from redux store
  const cartItems = useSelector((state) => state.products.cart);
  console.log(cartItems);
  // calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-gray-100 min-h-screen py-14 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg grid md:grid-cols-3">
        {/* LEFT SIDE */}
        <div className="md:col-span-2 p-8">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-6 mb-8">
            <h2 className="text-2xl font-semibold">Shopping Cart</h2>
            <span className="text-gray-500 text-sm">
              {cartItems.length} Items
            </span>
          </div>

          {/* Items */}
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-6 border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                </div>
              </div>
            ))
          )}

          <button className="mt-8 text-indigo-600 text-sm">
            ← Continue Shopping
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-50 p-8 border-l">
          <h3 className="text-xl font-semibold mb-6">Order Summary</h3>

          <div className="flex justify-between mb-4 text-sm">
            <span>Items {cartItems.length}</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="mb-6">
            <select className="w-full border p-2 rounded text-sm">
              <option>free Delivery - $0.00</option>
            </select>
          </div>

          <div className="border-t pt-6 mb-6 flex justify-between font-semibold">
            <span>Total Cost</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
