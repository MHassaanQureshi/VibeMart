import { Product } from './types/product';
import ProductCard from './components/ProductCard';

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div className='flex flex-col items-center '>
      <div className='w-full bg-black flex flex-col justify-center p-4 items-center rounded-2xl border-blue-500 border-4  md:w-[30%] md:flex-row md:gap-2 '>
        <span className='font-bold text-2xl'>Welcome</span>
        <span className='font-bold text-2xl'>To</span>
        <span className='font-bold text-2xl'>
          <span>Vibe</span>
          <span className='bg-blue-500 px-[6px] py-[2px] rounded'>Mart</span>
        </span>
      </div>
      <h1 className="text-3xl font-bold text-center mb-8 bg-black mt-2 w-[80%] rounded-2xl p-2 border-blue-500 border-4 md:w-[30%]">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-black py-4 px-2 rounded-2xl  border-blue-500 border-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
