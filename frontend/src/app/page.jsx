"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    sort: "",
    brand: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getProducts(filters);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  return (
    <main className="flex p-6 md:p-10 lg:p-12 bg-[#d4ddde] min-h-screen">
      <Sidebar filters={filters} setFilters={setFilters} />
      <div className="flex-1 sm:ml-6">
          <h1 className=" text-2xl sm:text-3xl md:text-4xl font-semibold text-cyan-900 text-center mb-10">
            Explore Our Products
          </h1>
        <FilterBar filters={filters} setFilters={setFilters} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
          {loading ? (
            <div className="flex justify-center items-center col-span-full py-12">
              <p className="text-xl text-gray-500">Loading products...</p>
            </div>
          ) : products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="flex justify-center items-center col-span-full py-12">
              <p className="text-xl text-gray-500">No products found.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
