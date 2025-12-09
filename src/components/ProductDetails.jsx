import React, { useState, useRef, useEffect } from "react";
import { MoreVertical, Check, Menu, X } from "lucide-react";

const ProductDetails = ({ product }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [mobileView, setMobileView] = useState(false);
  const dropdownRef = useRef(null);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setMobileView(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!product) return null;

  // Initial title set karna
  useEffect(() => {
    if (product) {
      setEditedTitle(product.name);
    }
  }, [product]);

  // Outside click pe dropdown close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleStatusChange = (newStatus) => {
    console.log(`Status changed to: ${newStatus}`);
    setShowDropdown(false);
  };

  const handleTitleSave = () => {
    console.log(`New title saved: ${editedTitle}`);
    setIsEditing(false);
  };

  // Mobile Header
  const renderMobileHeader = () => (
    <div className="md:hidden mb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Product Details</h2>
        <div className="relative" ref={dropdownRef}>
          <button 
            className="bg-[#EEF3EF] rounded-xl p-2 hover:bg-gray-200 transition"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {showDropdown ? (
              <X className="h-5 w-5 text-gray-700" />
            ) : (
              <Menu className="h-5 w-5 text-gray-700" />
            )}
          </button>

          {/* Mobile Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-10 border border-gray-100">
              {/* Edit Title Option */}
              <div className="px-4 py-3">
                {isEditing ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#2c5e39]"
                      autoFocus
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') handleTitleSave();
                      }}
                    />
                    <button
                      onClick={handleTitleSave}
                      className="p-2 bg-green-100 rounded-lg"
                    >
                      <Check className="h-4 w-4 text-[#2c5e39]" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setIsEditing(true);
                      setEditedTitle(product.name);
                    }}
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#2c5e39] w-full text-left py-2"
                  >
                    Edit Title
                  </button>
                )}
              </div>

              {/* Status Change Options */}
              <div className="border-t border-gray-100 pt-2">
                {product.status === "Active" ? (
                  <button
                    onClick={() => handleStatusChange("Inactive")}
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-red-600 w-full px-4 py-3 hover:bg-gray-50"
                  >
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    Mark as Inactive
                  </button>
                ) : (
                  <button
                    onClick={() => handleStatusChange("Active")}
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-green-600 w-full px-4 py-3 hover:bg-gray-50"
                  >
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    Mark as Active
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Desktop Header
  const renderDesktopHeader = () => (
    <div className="hidden md:flex items-start justify-between">
      <h2 className="text-xl font-semibold text-gray-900">Product Details</h2>

      {/* 3 dot icon with dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button 
          className="bg-[#EEF3EF] rounded-xl px-3 hover:bg-gray-200 transition h-[40px] flex items-center justify-center"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <MoreVertical className="h-5 w-5 text-gray-700" />
        </button>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-10 border border-gray-100">
            {/* Edit Title Option */}
            <div className="px-4 py-2">
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#2c5e39]"
                    autoFocus
                  />
                  <button
                    onClick={handleTitleSave}
                    className="p-1 hover:bg-green-50 rounded"
                  >
                    <Check className="h-4 w-4 text-[#2c5e39]" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setIsEditing(true);
                    setEditedTitle(product.name);
                  }}
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#2c5e39] w-full text-left"
                >
                  Edit
                </button>
              )}
            </div>

            {/* Status Change Options */}
            <div className="border-t border-gray-100 pt-2">
              {product.status === "Active" ? (
                <button
                  onClick={() => handleStatusChange("Inactive")}
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-red-600 w-full px-4 py-2 hover:bg-gray-50"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  Inactive
                </button>
              ) : (
                <button
                  onClick={() => handleStatusChange("Active")}
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-600 w-full px-4 py-2 hover:bg-gray-50"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Mark as Active
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Mobile Product Name Row
  const renderMobileProductRow = () => (
    <div className="md:hidden">
      <div className="flex flex-col gap-3">
        {/* Product Label and Image */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-900">Product :</span>
            <img
              src={product.image}
              alt="product"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          
          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">Status:</span>
            <span className={`font-medium ${product.status === "Active" ? "text-green-600" : "text-red-600"}`}>
              {product.status}
            </span>
          </div>
        </div>

        {/* Title display/edit */}
        <div>
          {isEditing ? (
            <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-gray-800 font-medium text-base focus:outline-none focus:border-[#2c5e39]"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleTitleSave();
                }}
              />
              <button
                onClick={handleTitleSave}
                className="p-2 bg-green-100 rounded-lg"
              >
                <Check className="h-5 w-5 text-[#2c5e39]" />
              </button>
            </div>
          ) : (
            <div className="bg-gray-50 p-3 rounded-lg">
              <span className="text-gray-800 font-medium text-base block">
                {editedTitle}
              </span>
              <div className="text-gray-500 text-sm mt-1">
                ID: #{product.id}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Desktop Product Name Row
  const renderDesktopProductRow = () => (
    <div className="hidden md:flex items-center gap-3">
      <span className="font-medium text-gray-900">Product :</span>

      <img
        src={product.image}
        alt="product"
        className="w-8 h-8 rounded-full object-cover"
      />

      {/* Title display/edit */}
      {isEditing ? (
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-lg text-gray-800 font-medium text-[15px] focus:outline-none focus:border-[#2c5e39]"
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleTitleSave();
            }}
          />
          <button
            onClick={handleTitleSave}
            className="p-1 hover:bg-green-50 rounded"
          >
            <Check className="h-4 w-4 text-[#2c5e39]" />
          </button>
        </div>
      ) : (
        <span className="text-gray-800 font-medium text-[15px]">
          {editedTitle}
        </span>
      )}

      <div className="ml-auto flex items-center gap-2">
        <span className="text-gray-500">Status:</span>
        <span className={`font-medium ${product.status === "Active" ? "text-green-600" : "text-red-600"}`}>
          {product.status}
        </span>
      </div>
    </div>
  );

  // Mobile Description Row
  const renderMobileDescription = () => (
    <div className="md:hidden mt-4">
      <div className="flex flex-col gap-2">
        <span className="font-medium text-gray-900">Description :</span>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-gray-700 text-sm leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );

  // Desktop Description Row
  const renderDesktopDescription = () => (
    <div className="hidden md:flex items-start gap-3 mt-6">
      <span className="font-medium text-gray-900 whitespace-nowrap">
        Description :
      </span>
      <p className="text-gray-700 leading-relaxed flex-1">
        {product.description}
      </p>
    </div>
  );

  return (
    <div 
      className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6"  
      style={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      {/* Headers */}
      {renderMobileHeader()}
      {renderDesktopHeader()}

      {/* Product Rows */}
      <div className="mt-4 md:mt-6">
        {renderMobileProductRow()}
        {renderDesktopProductRow()}
      </div>

      {/* Description Rows */}
      {renderMobileDescription()}
      {renderDesktopDescription()}
    </div>
  );
};

export default ProductDetails;