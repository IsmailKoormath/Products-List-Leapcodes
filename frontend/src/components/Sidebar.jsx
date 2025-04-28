"use client";

import { useState } from "react";
import { FaBars } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';

export default function Sidebar({ filters, setFilters }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleBrandChange = (brand) => {
        setFilters((prev) => ({ ...prev, brand }));
    };

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div>
            <div className="sm:hidden flex justify-between mt-2 items-center">
                <button onClick={toggleSidebar} className="text-lg  text-cyan-900">
                    <FaBars />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`w-64 min-h-screen lg:w-60 p-6 sm:mt-20 bg-white shadow-lg rounded-lg fixed  sm:sticky top-0 left-0  transition-transform ${isSidebarOpen ? "transform translate-x-0" : "transform -translate-x-full"
                    } sm:translate-x-0 z-50`}
            >
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold mb-4 text-cyan-900">Filter by Brand</h2>
                  {<p
                        className="text-[15px] text-cyan-900 mt-1 cursor-pointer"
                        onClick={() => isSidebarOpen ? toggleSidebar(): handleBrandChange("")}
                    >
                        {isSidebarOpen ? <RxCross1 />: "Clear"}
                    </p>}
                </div>

                <div className="space-y-3">
                    <h3 className="text-lg font-medium text-cyan-900">Select a Brand:</h3>
                    <div className="space-y-2">
                        {["Apple", "Samsung", "Sony", "Adidas", "Nike", "Dell"].map((brand) => (
                            <div key={brand} className="flex items-center">
                                <input
                                    type="radio"
                                    id={brand}
                                    name="brand"
                                    value={brand}
                                    checked={filters.brand === brand}
                                    onChange={() => handleBrandChange(brand)}
                                    className="h-4 w-4 text-blue-500"
                                />
                                <label htmlFor={brand} className="ml-2 text-gray-700">{brand}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Overlay when sidebar is open on mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 sm:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
}
