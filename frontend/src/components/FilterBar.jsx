"use client";

export default function FilterBar({ filters, setFilters }) {
    return (
        <div className="bg-white px-6 py-2 rounded-lg sticky top-0    shadow-md mb-8 max-w-5xl mx-auto  flex flex-wrap justify-between items-center">
            <div className="flex gap-6 items-center">
                <label className="text-sm font-medium text-cyan-900">Category:</label>
                <select
                    className="border border-gray-300 rounded-md p-2 bg-gray-50 text-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
                    value={filters.category}
                    onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value }))}
                >
                    <option value="">All Categories</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Headphone">Headphone</option>
                    <option value="Electronic">Electronic</option>
                    <option value="Shoe">Fashion</option>
                    <option value="Wearable">Wearable</option>
                </select>
            </div>

            <div className="flex gap-6 mt-2 sm:mt-0 items-center">
                <label className="text-sm font-medium text-cyan-900">Sort By:</label>
                <select
                    className="border border-gray-300 rounded-md p-2 bg-gray-50 text-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
                    value={filters.sort}
                    onChange={(e) => setFilters((prev) => ({ ...prev, sort: e.target.value }))}
                >
                    <option value="">Sort By</option>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                </select>
            </div>
        </div>
    );
}
