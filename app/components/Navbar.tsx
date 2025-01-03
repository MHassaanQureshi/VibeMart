"use client";

import Link from 'next/link';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <nav className="bg-black p-4 text-white">
      <div className="container mx-auto flex justify-between items-center text-2xl font-extrabold">
        <Link href="/">
        <span>Vibe</span>
        <span className='bg-blue-500 px-[6px] py-[2px] rounded'>Mart</span>
        </Link>
        <Link href="/cart">
          <p className="text-lg flex items-center">
            Cart ({cartCount})
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
