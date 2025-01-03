import ProductClientComponent from "./ProductClientComponent";
import { Product } from "@/app/types/product";

// Server-side function to fetch product data
async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 10 }, // Optional: Cache revalidation for static generation
  });
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id); // Fetch product data on the server

  return <ProductClientComponent product={product} />;
}
