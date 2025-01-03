"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";
export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center mt-4">Your cart is empty.</p>
      ) : (
        <div className="mt-8 ">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 mb-4 rounded-lg shadow-lg flex-col gap-2 md:flex-row"
            >
              <div className="flex items-center text-black">
                <Image src={item.image} alt={item.title} width={400} height={200} className="w-16 h-16 object-contain mr-4" />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-bold mr-4 text-black">${item.price * item.quantity}</span>
                <button
                  className="text-red-500"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-end">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
