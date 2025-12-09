import React, { useState, useEffect } from "react";
import { Plus, Download, ChevronRight, ArrowUpDown } from "lucide-react";
import ProductDetails from "./ProductDetails";

const ProductList = () => {
  const [products] = useState([
    {
      id: 1,
      name: "B Feral Gold Malt",
      description: "A versatile herb that enhances fertility and aids in treating insomnia. It has a calming effect on the nervous system and promotes overall wellbeing. This herbal supplement is known for its therapeutic properties.",
      image: "/product.png",
      status: "Active",
    },
    {
      id: 2,
      name: "B Feral Gold Malt",
      description: "A versatile herb that enhances fertility and aids in treating insomnia. It has a calming effect on the nervous system and promotes overall wellbeing. This herbal supplement is known for its therapeutic properties.",
      image: "/product.png",
      status: "Active",
    },
    {
      id: 3,
      name: "B Feral Gold Malt",
      description: "A versatile herb that enhances fertility and aids in treating insomnia. It has a calming effect on the nervous system and promotes overall wellbeing. This herbal supplement is known for its therapeutic properties.",
      image: "/product.png",
      status: "Active",
    },
    {
      id: 4,
      name: "B Feral Gold Malt",
      description: "A versatile herb that enhances fertility and aids in treating insomnia. It has a calming effect on the nervous system and promotes overall wellbeing. This herbal supplement is known for its therapeutic properties.",
      image: "/product.png",
      status: "Active",
    },
    {
      id: 5,
      name: "B Feral Gold Malt",
      description: "A versatile herb that enhances fertility and aids in treating insomnia. It has a calming effect on the nervous system and promotes overall wellbeing. This herbal supplement is known for its therapeutic properties.",
      image: "/product.png",
      status: "Active",
    },
  ]);

  const [selected, setSelected] = useState(null);
  const [mobileView, setMobileView] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setMobileView(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const selectedProduct = products.find((p) => p.id === selected);

  // Radio button ka custom styling
  const radioStyles = `
    input[type="radio"] {
      appearance: none;
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      border: 2px solid #d1d5db;
      border-radius: 50%;
      outline: none;
      cursor: pointer;
      transition: all 0.2s;
    }

    input[type="radio"]:checked {
      border-color: #2c5e39;
      background-color: #2c5e39;
      background-image: radial-gradient(circle at center, white 0%, white 35%, transparent 40%);
    }

    input[type="radio"]:hover {
      border-color: #2c5e39;
    }
  `;

  // Mobile Header
  const renderMobileHeader = () => (
    <div className="mb-4 md:hidden">
      <div className="flex items-center justify-between">
        <nav className="flex items-center text-sm text-gray-600">
          <span className="text-gray-800 font-medium">Product List</span>
        </nav>
      </div>
    </div>
  );

  // Desktop Header
  const renderDesktopHeader = () => (
    <div className="mb-6 hidden md:block">
      <nav className="flex items-center text-sm text-gray-600">
        <span className="text-gray-800">Products</span>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-800 font-medium">Product List</span>
      </nav>
    </div>
  );

  // Mobile Product Card
  const renderMobileProductCard = (p) => (
    <div
      key={p.id}
      className={`bg-white rounded-xl p-4 mb-3 border transition cursor-pointer ${
        selected === p.id 
          ? 'border-[#2c5e39] bg-[#eef3ef]' 
          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
      }`}
      onClick={() => setSelected(p.id)}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="prod"
            checked={selected === p.id}
            onChange={() => setSelected(p.id)}
            className="h-4 w-4 cursor-pointer mt-1"
          />
          <img
            src={p.image}
            alt="product"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className={`font-medium text-sm ${
              selected === p.id ? 'text-[#2c5e39]' : 'text-gray-900'
            }`}>
              {p.name}
            </div>
            <div className="text-gray-500 text-xs">ID: #{p.id}</div>
          </div>
        </div>
        <span className="text-green-600 font-medium text-sm">{p.status}</span>
      </div>
      
      <div className={`text-sm ${
        selected === p.id ? 'text-gray-800' : 'text-gray-600'
      }`}>
        <div className="line-clamp-2">{p.description}</div>
      </div>
    </div>
  );

  // Mobile Table View
  const renderMobileTable = () => (
    <div className="md:hidden">
      <div className="bg-white rounded-xl p-4 shadow-sm">
        {/* Search Bar */}
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img
              src="/search.svg"
              alt="Search"
              className="h-4 w-4 opacity-60"
            />
          </div>
          <input
            type="text"
            placeholder="Search here"
            className="w-full pl-10 pr-4 py-3
            bg-[#EEF3EF] text-gray-600
            rounded-xl text-sm placeholder-gray-500
            focus:outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <button className="bg-[#EEF3EF] rounded-xl p-2 hover:bg-gray-200 transition">
              <ArrowUpDown className="h-5 w-5 text-[#2c5e39]" />
            </button>
            <button className="bg-[#EEF3EF] rounded-xl p-2 hover:bg-gray-200 transition">
              <Download className="h-5 w-5 text-[#2c5e39]" />
            </button>
            <button className="bg-[#EEF3EF] rounded-xl p-2 hover:bg-gray-200 transition">
              <Plus className="h-5 w-5 text-[#2c5e39]" />
            </button>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-medium text-gray-800 mb-3">Products List</h2>

        {/* Product Cards */}
        <div>
          {products.map(renderMobileProductCard)}
        </div>
      </div>
    </div>
  );

  // Desktop Table View
  const renderDesktopTable = () => (
    <div className="hidden md:block">
      <div
        className="bg-white rounded-2xl p-6"
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          {/* Left Section */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <span className="text-lg font-medium text-gray-900 whitespace-nowrap">
              Products List
            </span>

            {/* Search Bar */}
            <div className="relative flex-1 sm:flex-none sm:w-[250px]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img
                  src="/search.svg"
                  alt="Search"
                  className="h-4 w-4 opacity-60"
                />
              </div>

              <input
                type="text"
                placeholder="Search here"
                className="w-full pl-10 pr-4 py-2.5
                bg-[#EEF3EF] text-gray-600
                rounded-xl text-sm placeholder-gray-500
                focus:outline-none"
              />
            </div>

            {/* Plus Button */}
            <button className="bg-[#EEF3EF] rounded-xl px-3 hover:bg-gray-200 transition flex-shrink-0 h-[40px] flex items-center justify-center">
              <Plus className="h-5 w-5 text-[#2c5e39]" />
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <button className="bg-[#EEF3EF] rounded-xl px-3 hover:bg-gray-200 transition h-[40px] flex items-center justify-center">
              <Download className="h-5 w-5 text-[#2c5e39]" />
            </button>

            <button className="bg-[#EEF3EF] rounded-xl px-3 hover:bg-gray-200 transition h-[40px] flex items-center justify-center">
              <ArrowUpDown className="h-5 w-5 text-[#2c5e39]" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl">
          {/* Header */}
          <div className="grid grid-cols-12 py-3 border-b border-gray-200 text-sm font-semibold text-gray-700">
            <div className="col-span-1 pl-2"></div>
            <div className="col-span-3">Products</div>
            <div className="col-span-7">Description</div>
            <div className="col-span-1 text-right pr-6">Status</div>
          </div>

          {/* Rows */}
          {products.map((p) => (
            <div
              key={p.id}
              className={`grid grid-cols-12 py-4 transition cursor-pointer ${
                selected === p.id 
                  ? 'bg-[#eef3ef]' 
                  : 'hover:bg-[#eef3ef]'
              }`}
              onClick={() => setSelected(p.id)}
            >
              <div className="col-span-1 flex items-center pl-2">
                <input
                  type="radio"
                  name="prod"
                  checked={selected === p.id}
                  onChange={() => setSelected(p.id)}
                  className="h-4 w-4 cursor-pointer"
                />
              </div>

              <div className="col-span-3 flex items-center gap-3">
                <img
                  src={p.image}
                  alt="product"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <div className={`font-medium text-[15px] truncate ${
                    selected === p.id ? 'text-[#2c5e39]' : 'text-gray-900'
                  }`}>
                    {p.name}
                  </div>
                  <div className="text-gray-500 text-xs">ID: #{p.id}</div>
                </div>
              </div>

              <div className={`col-span-7 text-sm pr-4 ${
                selected === p.id ? 'text-gray-800' : 'text-gray-600'
              }`}>
                <div className="line-clamp-2">{p.description}</div>
              </div>

              <div className="col-span-1 flex items-center justify-end pr-6">
                <span className="text-green-600 font-medium">{p.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-6">
      {/* Radio button ke liye custom CSS */}
      <style>{radioStyles}</style>

      {/* Headers */}
      {renderMobileHeader()}
      {renderDesktopHeader()}

      {/* Product Details - Sirf tab show hoga jab product select ho */}
      {selectedProduct && (
        <div className="mb-6 md:mb-8">
          <ProductDetails product={selectedProduct} />
        </div>
      )}

      {/* Table Sections */}
      {renderMobileTable()}
      {renderDesktopTable()}
    </div>
  );
};

export default ProductList;