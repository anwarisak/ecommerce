import { useSelector, useDispatch } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeFromCart,
} from "../features/products/productsSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.products.cart);

  // Calculate subtotal safely
  const subtotal = cartItems.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;
    return total + price * quantity;
  }, 0);

  const shipping = 0;
  const total = subtotal + shipping;

  const goToShop = () => {
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="md:col-span-2 bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-8">Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              {/* Header */}
              <div className="grid grid-cols-3 md:grid-cols-5 text-sm font-semibold border-b pb-4 mb-6">
                <span>Product</span>
                <span className="hidden md:flex">Name</span>
                <span>Price</span>
                <span>Qty</span>
                <span className="hidden md:flex">Total</span>
              </div>

              {/* Items */}
              {cartItems.map((item) => {
                const quantity = Number(item.quantity) || 1;
                const price = Number(item.price) || 0;

                return (
                  <div
                    key={item.id}
                    className="grid grid-cols-3 md:grid-cols-5 items-center border-b py-6 text-xs md:text-sm"
                  >
                    <div>
                      <img
                        src={item.image || item.img}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />

                      <button
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                        className="my-2 text-red-500 cursor-pointer text-xs"
                      >
                        Remove
                      </button>
                    </div>

                    <span className="hidden md:flex">{item.name}</span>

                    <span>${price.toFixed(2)}</span>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          dispatch(
                            decreaseItemQuantity({
                              id: item.id,
                              quantity: Math.max(1, quantity - 1),
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
                        value={quantity}
                        className="w-10 border rounded py-1 text-center"
                      />

                      <button
                        onClick={() =>
                          dispatch(
                            increaseItemQuantity({
                              id: item.id,
                              quantity: quantity + 1,
                            }),
                          )
                        }
                        className="px-2 py-1 border rounded"
                      >
                        +
                      </button>
                    </div>

                    <span className="hidden md:flex px-4 py-1">
                      ${(price * quantity).toFixed(2)}
                    </span>
                  </div>
                );
              })}
            </>
          )}

          {/* Back Button */}
          <button
            onClick={goToShop}
            className="mt-8 text-indigo-600 text-sm cursor-pointer"
          >
            ← Return to Shop
          </button>
        </div>

        {/* RIGHT SIDE */}
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

          <button
            onClick={() => navigate("/checkout")}
            className="mt-8 w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition cursor-pointer"
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
