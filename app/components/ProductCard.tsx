import Link from 'next/link';
import { Product } from '../types/product';
import Image from 'next/image';
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow-lg text-black rounded-2xl  border-blue-500 border-4">
      <Image src={product.image} alt={product.title} width={400} height={200} className="w-full h-64 object-contain" />
      <h2 className="text-xl font-semibold mt-4 ">{product.title}</h2>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold">${product.price}</span>
        <Link href={`/product/${product.id}`}>
          <p className="bg-blue-500 text-white px-4 py-2 rounded-lg">View</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
