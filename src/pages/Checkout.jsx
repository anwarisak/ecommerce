import { useSelector } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";

const Checkout = () => {
  const cartItems = useSelector((state) => state.products.cart);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
    description: "",
    shipping: "free",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shippingCost = form.shipping === "express" ? 9 : 0;
  const total = subtotal + shippingCost;

  // ✅ VALIDATION
  const validateForm = () => {
    if (!form.firstName || !form.lastName || !form.email) {
      alert("Please fill required fields");
      return false;
    }
    if (cartItems.length === 0) {
      alert("Cart is empty");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const res = await fetch("http://localhost:5000/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: "0f27c64a-4862-4a0c-a8e4-d2900d417b1f",
          items: cartItems,
          subtotal,
          tax: 0,
          total,

          // ✅ CLEAN shipping object (NO shipping field)
          shippingAddress: {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
            city: form.city,
            state: form.state,
            zip: form.zip,
            description: form.description,
          },
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to place order");
        return;
      }

      console.log(data);
      // alert("Order placed successfully!");
      toast.success("Order placed successfully!");
    } catch (error) {
      console.error(error);
      alert("Network error");
    }
  };

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 p-8">
      {/* LEFT FORM */}
      <div className="md:col-span-2 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            className="input"
          />
          <input
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            className="input"
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="input"
          />
          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="input"
          />
          <input
            name="city"
            placeholder="City"
            onChange={handleChange}
            className="input"
          />
          <input
            name="state"
            placeholder="State"
            onChange={handleChange}
            className="input"
          />
          <input
            name="zip"
            placeholder="Zip Code"
            onChange={handleChange}
            className="input"
          />
        </div>

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full border mt-4 p-2"
        />

        {/* Shipping */}
        <div className="mt-6">
          <label>
            <input
              type="radio"
              name="shipping"
              value="free"
              checked={form.shipping === "free"}
              onChange={handleChange}
            />
            Free Shipping ($0)
          </label>

          <label className="ml-4">
            <input
              type="radio"
              name="shipping"
              value="express"
              onChange={handleChange}
            />
            Express ($9)
          </label>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="font-semibold mb-4">Your Cart</h3>

        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.name}</span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}

        <hr className="my-4" />

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shippingCost}</span>
        </div>

        <div className="flex justify-between font-bold mt-2">
          <span>Total</span>
          <span>${total}</span>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-black text-white py-2 cursor-pointer"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;
