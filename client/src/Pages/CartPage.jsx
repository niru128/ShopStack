import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";
import { addToCart, removeCartItem } from "../features/CartSlice";
import { toast } from "sonner";

export default function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (product, qty) => {
    if (qty < 1) return;
    dispatch(addToCart({ product, quantity: qty - getCurrentQty(product) }));
  };

  const getCurrentQty = (product) => {
    const item = cartItems.find((ci) => ci.product._id === product._id);
    return item ? item.quantity : 0;
  };

  const handleRemove = (id) => {
    dispatch(removeCartItem(id));
    toast.success("Item removed from cart");
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  if (cartItems.length === 0)
    return (
      <div>
        <Navbar />
        <p className="text-center mt-10 text-xl">Your cart is empty</p>
      </div>
    );

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-10 p-6">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        <div className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <div
              key={item.product._id}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 border p-4 rounded shadow"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-32 h-32 object-cover rounded-md"
              />
              <div className="flex-1 flex flex-col gap-2">
                <h2 className="text-xl font-bold">{item.product.name}</h2>
                <p className="text-gray-600">{item.product.description}</p>
                <p className="text-indigo-600 font-bold text-lg">
                  ₹{item.product.price}
                </p>

                <div className="flex items-center gap-2">
                  <span className="font-semibold">Qty:</span>
                  <input
                    type="number"
                    min={1}
                    max={item.product.stock}
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.product, Number(e.target.value))
                    }
                    className="w-16 border rounded p-1 text-center"
                  />
                  <Button
                    className="bg-red-500 hover:bg-red-600 text-white cursor-pointer    "
                    onClick={() => handleRemove(item.product._id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-right">
          <h2 className="text-2xl font-bold">
            Total: ₹{totalPrice.toFixed(2)}
          </h2>
          <Button className="mt-4 bg-green-500 hover:bg-green-600 text-white">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
