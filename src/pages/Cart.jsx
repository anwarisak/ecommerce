import { useSelector, useDispatch } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../features/products/productsSlice"; // adjust the path
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.products.cart);

  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * (Number(item.quantity) || 1),
    0,
  );

  const nextPage = () => {
    navigate("/");
  };
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* LEFT SIDE - TABLE */}
        <div className="md:col-span-2 bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-8">Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              {/* Table Header */}
              <div className="grid grid-cols-3 md:grid-cols-5 text-sm font-semibold border-b pb-4 mb-6">
                <span>Product</span>
                <span className="hidden md:flex">Name</span>
                <span>Price</span>
                <span>Qty</span>
                <span className="hidden md:flex">Total</span>
              </div>

              {/* Items */}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-3 md:grid-cols-5 items-center border-b py-6 text-xs md:text-sm"
                >
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />

                  {/* Name */}
                  <span className="hidden md:flex">{item.name}</span>

                  {/* Price */}
                  <span>${Number(item.price).toFixed(2)}</span>

                  {/* Quantity */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        dispatch(
                          decreaseItemQuantity({
                            id: item.id,
                            quantity: item.quantity - 1,
                          }),
                        )
                      }
                      className="px-2 py-1 border rounded"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      className="w-8 border rounded py-1 text-center"
                    />
                    <button
                      onClick={() =>
                        dispatch(
                          increaseItemQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          }),
                        )
                      }
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>

                  {/* Total */}
                  <span className="hidden md:flex px-4 py-1">
                    ${(Number(item.price) * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </>
          )}

          <button
            onClick={nextPage}
            className="mt-8 text-indigo-600 text-sm cursor-pointer"
          >
            ← Return to Shop
          </button>
        </div>

        {/* RIGHT SIDE - TOTAL CARD */}
        <div className="bg-white p-8 rounded-xl shadow h-fit">
          <h3 className="text-xl font-semibold mb-6">Cart Totals</h3>

          <div className="flex justify-between mb-4 text-sm">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-6 text-sm">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>

          <div className="border-t pt-6 flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="mt-8 w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
