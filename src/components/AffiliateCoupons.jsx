import React, { useState, useEffect } from "react";
import { ChevronRight, Plus, RotateCcw, Download, Menu, X } from "lucide-react";

const AffiliateCoupons = () => {
  // Toggle states
  const [defaultCouponsEnabled, setDefaultCouponsEnabled] = useState(true);
  const [cartDiscountEnabled, setCartDiscountEnabled] = useState(true);
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

  // Special Coupons data
  const specialCoupons = [
    { 
      id: 1, 
      doctorName: "Jack Rock", 
      productName: "Nari Sandariya Malt", 
      usageLimit: 10, 
      percentage: "30%",
      doctorImage: "d1.jpg"
    },
    { 
      id: 2, 
      doctorName: "Alina Mathew", 
      productName: "Nari Sandariya Malt", 
      usageLimit: 4, 
      percentage: "20%",
      doctorImage: "d2.jpg"
    },
    { 
      id: 3, 
      doctorName: "Alina Mathew", 
      productName: "Nari Sandariya Malt", 
      usageLimit: 20, 
      percentage: "25%",
      doctorImage: "d3.jpg"
    },
    { 
      id: 4, 
      doctorName: "Jack Rock", 
      productName: "Nari Sandariya Malt", 
      usageLimit: 6, 
      percentage: "15%",
      doctorImage: "d4.jpg"
    },
    { 
      id: 5, 
      doctorName: "Alina Mathew", 
      productName: "Nari Sandariya Malt", 
      usageLimit: 1, 
      percentage: "30%",
      doctorImage: "d5.jpg"
    }
  ];

  // Mobile Header
  const renderMobileHeader = () => (
    <div className="mb-4 md:hidden">
      <div className="flex items-center justify-between">
        <nav className="flex items-center text-sm">
          <span className="text-[#2f5e37] font-medium">Affiliate Coupons</span>
        </nav>
        <button className="bg-[#2f5e37] text-white px-3 py-2 rounded-lg text-xs flex items-center gap-1">
          <Plus size={14} />
          Add Coupon
        </button>
      </div>
    </div>
  );

  // Desktop Header
  const renderDesktopHeader = () => (
    <div className="mb-6 hidden md:block">
      <nav className="flex items-center text-sm">
        <span className="text-[#2f5e37]">Affiliate</span>
        <ChevronRight className="h-4 w-4 mx-2 text-[#2f5e37]" />
        <span className="text-[#2f5e37] font-medium">Coupons</span>
      </nav>
    </div>
  );

  // Mobile Default Coupons Card
  const renderMobileDefaultCoupons = () => (
    defaultCouponsEnabled && (
      <div className="bg-white rounded-xl p-4 shadow-md mb-6 md:hidden">
        <div className="grid grid-cols-1 gap-4">
          {/* Doctor Name */}
          <fieldset className="border border-gray-300 rounded-xl px-3 pb-2">
            <legend className="text-gray-700 px-1 text-xs">Doctor Name</legend>
            <select className="w-full mt-1 px-2 py-1.5 rounded-lg text-sm text-gray-600 focus:outline-none">
              <option>Applies to all the Doctors</option>
            </select>
          </fieldset>

          {/* Usage Limit */}
          <fieldset className="border border-gray-300 rounded-xl px-3 pb-2">
            <legend className="text-gray-700 px-1 text-xs">
              Usage Limit <span className="text-red-500">*</span>
            </legend>
            <select className="w-full mt-1 px-2 py-1.5 rounded-lg text-sm text-gray-600 focus:outline-none">
              <option>Please select a Percentage</option>
            </select>
          </fieldset>

          {/* Percentage */}
          <fieldset className="border border-gray-300 rounded-xl px-3 pb-2">
            <legend className="text-gray-700 px-1 text-xs">
              Percentage <span className="text-red-500">*</span>
            </legend>
            <select className="w-full mt-1 px-2 py-1.5 rounded-lg text-sm text-gray-600 focus:outline-none">
              <option>Please select a Percentage</option>
            </select>
          </fieldset>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="bg-[#2f5e37] text-white px-6 py-1.5 rounded-lg text-sm">Update</button>
        </div>
      </div>
    )
  );

  // Desktop Default Coupons Card
  const renderDesktopDefaultCoupons = () => (
    defaultCouponsEnabled && (
      <div className="bg-white rounded-2xl p-6 shadow-md mb-8 hidden md:block">
        <div className="grid grid-cols-3 gap-8">
          {/* Doctor Name */}
          <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
            <legend className="text-gray-700 px-1 text-sm">Doctor Name</legend>
            <select className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 focus:outline-none">
              <option>Applies to all the Doctors</option>
            </select>
          </fieldset>

          {/* Usage Limit */}
          <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
            <legend className="text-gray-700 px-1 text-sm">
              Usage Limit <span className="text-red-500">*</span>
            </legend>
            <select className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 focus:outline-none">
              <option>Please select a Percentage</option>
            </select>
          </fieldset>

          {/* Percentage */}
          <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
            <legend className="text-gray-700 px-1 text-sm">
              Percentage <span className="text-red-500">*</span>
            </legend>
            <select className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 focus:outline-none">
              <option>Please select a Percentage</option>
            </select>
          </fieldset>
        </div>

        <div className="mt-10 flex justify-end">
          <button className="bg-[#2f5e37] text-white px-8 py-2 rounded-lg text-sm">Update</button>
        </div>
      </div>
    )
  );

  // Mobile Cart Discount Card
  const renderMobileCartDiscount = () => (
    cartDiscountEnabled && (
      <div className="bg-white rounded-xl p-4 shadow-md mb-6 md:hidden">
        <div className="grid grid-cols-1 gap-4">
          {/* Product Name */}
          <fieldset className="border border-gray-300 rounded-xl px-3 pb-2">
            <legend className="text-gray-700 px-1 text-xs">
              Product Name <span className="text-red-500">*</span>
            </legend>
            <select className="w-full mt-1 px-2 py-1.5 rounded-lg text-sm text-gray-600 focus:outline-none">
              <option>Please select a Product</option>
            </select>
          </fieldset>

          {/* Usage Limit */}
          <fieldset className="border border-gray-300 rounded-xl px-3 pb-2">
            <legend className="text-gray-700 px-1 text-xs">
              Usage Limit <span className="text-red-500">*</span>
            </legend>
            <select className="w-full mt-1 px-2 py-1.5 rounded-lg text-sm text-gray-600 focus:outline-none">
              <option>Please select a Doctor</option>
            </select>
          </fieldset>

          {/* Doctor Name */}
          <fieldset className="border border-gray-300 rounded-xl px-3 pb-2">
            <legend className="text-gray-700 px-1 text-xs">
              Doctor Name <span className="text-red-500">*</span>
            </legend>
            <select className="w-full mt-1 px-2 py-1.5 rounded-lg text-sm text-gray-600 focus:outline-none">
              <option>Please select a Percentage</option>
            </select>
          </fieldset>

          {/* Discount */}
          <fieldset className="border border-gray-300 rounded-xl px-3 pb-2">
            <legend className="text-gray-700 px-1 text-xs">
              Discount <span className="text-red-500">*</span>
            </legend>
            <select className="w-full mt-1 px-2 py-1.5 rounded-lg text-sm text-gray-600 focus:outline-none">
              <option>Please select a Percentage</option>
            </select>
          </fieldset>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="bg-[#2f5e37] text-white px-6 py-1.5 rounded-lg text-sm">Update</button>
        </div>
      </div>
    )
  );

  // Desktop Cart Discount Card
  const renderDesktopCartDiscount = () => (
    cartDiscountEnabled && (
      <div className="bg-white rounded-2xl p-6 shadow-md mb-8 hidden md:block">
        <div className="grid grid-cols-2 gap-8">
          {/* Row 1 */}
          <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
            <legend className="text-gray-700 px-1 text-sm">
              Product Name <span className="text-red-500">*</span>
            </legend>
            <select className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 focus:outline-none">
              <option>Please select a Product</option>
            </select>
          </fieldset>

          <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
            <legend className="text-gray-700 px-1 text-sm">
              Usage Limit <span className="text-red-500">*</span>
            </legend>
            <select className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 focus:outline-none">
              <option>Please select a Doctor</option>
            </select>
          </fieldset>

          {/* Row 2 */}
          <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
            <legend className="text-gray-700 px-1 text-sm">
              Doctor Name <span className="text-red-500">*</span>
            </legend>
            <select className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 focus:outline-none">
              <option>Please select a Percentage</option>
            </select>
          </fieldset>

          <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
            <legend className="text-gray-700 px-1 text-sm">
              Discount <span className="text-red-500">*</span>
            </legend>
            <select className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 focus:outline-none">
              <option>Please select a Percentage</option>
            </select>
          </fieldset>
        </div>

        <div className="mt-10 flex justify-end">
          <button className="bg-[#2f5e37] text-white px-8 py-2 rounded-lg text-sm">Update</button>
        </div>
      </div>
    )
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
            placeholder="Search coupons"
            className="w-full pl-10 pr-4 py-2.5
            bg-[#EEF3EF] text-gray-600
            rounded-xl text-sm placeholder-gray-500
            focus:outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <button className="bg-[#EEF3EF] rounded-xl p-2 hover:bg-gray-200 transition">
              <RotateCcw className="h-5 w-5 text-[#2f5e37]" />
            </button>
            <button className="bg-[#EEF3EF] rounded-xl p-2 hover:bg-gray-200 transition">
              <Download className="h-5 w-5 text-[#2f5e37]" />
            </button>
            <button className="bg-[#EEF3EF] rounded-xl p-2 hover:bg-gray-200 transition">
              <Plus className="h-5 w-5 text-[#2f5e37]" />
            </button>
          </div>
        </div>

        {/* Special Coupons Cards */}
        <h3 className="text-lg font-medium text-gray-800 mb-3">Special Coupons</h3>
        <div className="space-y-3">
          {specialCoupons.map((coupon) => (
            <div key={coupon.id} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={coupon.doctorImage}
                  alt={coupon.doctorName}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-800 text-sm">{coupon.doctorName}</div>
                  <div className="text-xs text-gray-500">Doctor</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <div className="text-gray-500 text-xs">Product</div>
                  <div className="font-medium truncate">{coupon.productName}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs">Usage Limit</div>
                  <div className="font-medium">{coupon.usageLimit}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs">Percentage</div>
                  <div className="font-medium text-[#2f5e37]">{coupon.percentage}</div>
                </div>
                <div className="flex items-center justify-end">
                  <img 
                    src="action1.svg" 
                    alt="Action" 
                    className="w-5 h-5 cursor-pointer hover:opacity-80"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Pagination */}
        <div className="flex flex-col gap-3 mt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">Rows:</span>
              <select className="text-sm border rounded px-2 py-1 bg-white">
                <option>5</option>
                <option>10</option>
                <option>20</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-lg bg-[#2f5e37] text-white text-sm">1</button>
              <div className="flex items-center gap-1">
                <button className="p-1 rounded hover:bg-gray-100">
                  <span className="text-gray-600">{'<'}</span>
                </button>
                <button className="p-1 rounded hover:bg-gray-100">
                  <span className="text-gray-600">{'>'}</span>
                </button>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm">
            Showing 1-5 of {specialCoupons.length}
          </div>
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
            <span className="text-2xl font-medium text-gray-800 whitespace-nowrap">
              Special Coupons
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
              <Plus className="h-5 w-5 text-[#2f5e37]" />
            </button>

            {/* Reload Button on LEFT side */}
            <button className="bg-[#EEF3EF] rounded-xl px-3 hover:bg-gray-200 transition h-[40px] flex items-center justify-center">
              <RotateCcw className="h-5 w-5 text-[#2f5e37]" />
            </button>
          </div>

          {/* Right Section - ONLY Download button */}
          <div className="flex items-center gap-3">
            <button className="bg-[#EEF3EF] rounded-xl px-3 hover:bg-gray-200 transition h-[40px] flex items-center justify-center">
              <Download className="h-5 w-5 text-[#2f5e37]" />
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="py-3 font-medium">Doctor Name</th>
                <th className="py-3 font-medium">Product Name</th>
                <th className="py-3 font-medium">Usage Limit</th>
                <th className="py-3 font-medium">Percentage</th>
                <th className="py-3 font-medium">Action</th>
              </tr>
            </thead>

            <tbody>
              {specialCoupons.map((coupon) => (
                <tr key={coupon.id} className="border-b text-gray-700 hover:bg-gray-50">
                  <td className="py-4 flex items-center gap-3">
                    <img
                      src={coupon.doctorImage}
                      alt={coupon.doctorName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    {coupon.doctorName}
                  </td>
                  <td className="py-4">{coupon.productName}</td>
                  <td className="py-4">{coupon.usageLimit}</td>
                  <td className="py-4">{coupon.percentage}</td>
                  <td className="py-4">
                    <img 
                      src="action1.svg" 
                      alt="Action" 
                      className="w-6 h-6 cursor-pointer hover:opacity-80"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FOOTER ROWS / PAGINATION */}
        <div className="flex justify-between items-center mt-6 px-1">
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">Rows per page:</span>
            <select className="text-sm border rounded px-2 py-1 bg-white">
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button className="p-1 rounded hover:bg-gray-100">
                <span className="text-gray-600">{'<'}</span>
              </button>
              <button className="w-8 h-8 rounded-lg bg-[#2f5e37] text-white text-sm">1</button>
              <button className="p-1 rounded hover:bg-gray-100">
                <span className="text-gray-600">{'>'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Desktop Top Button
  const renderDesktopTopButton = () => (
    <div className="hidden md:flex justify-end mb-6">
      <button className="bg-[#2f5e37] text-white px-5 py-2 rounded-lg text-sm flex items-center gap-2">
        <Plus size={16} />
        Add Special Coupon
      </button>
    </div>
  );

  return (
    <div className="p-4 md:p-6 min-h-screen bg-[#f5f5f7]">
      {/* Headers */}
      {renderMobileHeader()}
      {renderDesktopHeader()}

      {/* Top Button */}
      {renderDesktopTopButton()}

      {/* Default Coupons Section */}
      <div className="flex justify-between items-center mt-4 md:mt-5 mb-4">
        <h1 className="text-xl md:text-2xl font-medium text-gray-800">Default Coupons</h1>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer" 
            checked={defaultCouponsEnabled}
            onChange={() => setDefaultCouponsEnabled(!defaultCouponsEnabled)}
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#2f5e37] relative
            after:content-[''] after:absolute after:top-1/2 after:left-[3px] after:-translate-y-1/2
            after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all
            peer-checked:after:translate-x-full">
          </div>
        </label>
      </div>

      {/* Default Coupons Cards */}
      {renderMobileDefaultCoupons()}
      {renderDesktopDefaultCoupons()}

      {/* Cart Discount Section */}
      <div className="flex justify-between items-center mt-6 md:mt-8 mb-4">
        <h1 className="text-xl md:text-2xl font-medium text-gray-800">Default Cart Discount</h1>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer" 
            checked={cartDiscountEnabled}
            onChange={() => setCartDiscountEnabled(!cartDiscountEnabled)}
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#2f5e37] relative
            after:content-[''] after:absolute after:top-1/2 after:left-[3px] after:-translate-y-1/2
            after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all
            peer-checked:after:translate-x-full">
          </div>
        </label>
      </div>

      {/* Cart Discount Cards */}
      {renderMobileCartDiscount()}
      {renderDesktopCartDiscount()}

      {/* Special Coupons Section */}
      {renderMobileTable()}
      {renderDesktopTable()}
    </div>
  );
};

export default AffiliateCoupons;