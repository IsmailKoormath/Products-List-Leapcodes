"use client";

export default function ProductCard({ product }) {
    return (
        <div className="border bg-white rounded-xl max-w-sm p-4 shadow hover:shadow-lg transition">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg text-gray-800 font-bold">{product.name}</h2>
            <p className="text-gray-700">${product.price}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
        </div>
    );
}
