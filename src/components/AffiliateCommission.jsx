import React, { useEffect, useState } from "react";
import { ChevronRight, Plus, RotateCcw, Download, Menu, X } from "lucide-react";

const AffiliateCommission = ({ onNavigate }) => {
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

  // Doctor data with images
  const doctors = [
    { id: 1, name: "Alina Mathew", image: "d1.jpg", doctorCommission: "30%", productName: "Nari Sandariya Malt", productCommission: "30%" },
    { id: 2, name: "John Doe", image: "d2.jpg", doctorCommission: "25%", productName: "Ayurvedic Gold", productCommission: "28%" },
    { id: 3, name: "Sarah Smith", image: "d3.jpg", doctorCommission: "35%", productName: "Herbal Boost", productCommission: "32%" },
    { id: 4, name: "Michael Brown", image: "d4.jpg", doctorCommission: "28%", productName: "Wellness Pro", productCommission: "27%" },
    { id: 5, name: "Emma Wilson", image: "d5.jpg", doctorCommission: "32%", productName: "Nature's Cure", productCommission: "31%" }
  ];

  const handleAddClick = () => {
    if (onNavigate) {
      onNavigate('add-special-commission');
    } else {
      window.location.hash = '#/add-special-commission';
    }
  };

  // Mobile Header
  const renderMobileHeader = () => (
    <div className="mb-4 md:hidden">
      <div className="flex items-center justify-between">
        <nav className="flex items-center text-sm">
          <span className="text-[#2f5e37] font-medium">Commission</span>
        </nav>
        <button 
          className="bg-[#2f5e37] text-white px-3 py-2 rounded-lg text-xs flex items-center gap-1"
          onClick={handleAddClick}
        >
          <Plus size={14} />
          Add Commission
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
        <span className="text-[#2f5e37] font-medium">Commission</span>
      </nav>
    </div>
  );

  // Desktop Top Button
  const renderDesktopTopButton = () => (
    <div className="hidden md:flex justify-end mb-6">
      <button 
        className="bg-[#2f5e37] text-white px-5 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-[#25542d] transition"
        onClick={handleAddClick}
      >
        <Plus size={16} />
        Add Special Commission
      </button>
    </div>
  );

  // Mobile Product Commission Card
  const renderMobileProductCommission = () => (
    <div className="bg-white rounded-xl p-4 shadow-md mb-6 md:hidden">
      <div className="grid grid-cols-1 gap-4">
        <fieldset className="border border-gray-300 rounded-xl px-3 pb-2">
          <legend className="text-gray-700 px-1 text-xs">Product</legend>
          <select className="w-full mt-1 px-2 py-1.5 rounded-lg text-sm text-gray-600 focus:outline-none">
            <option>Applies to all the products</option>
          </select>
        </fieldset>

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
        <button className="bg-[#2f5e37] text-white px-6 py-1.5 rounded-lg text-sm hover:bg-[#25542d] transition">Update</button>
      </div>
    </div>
  );

  // Desktop Product Commission Card
  const renderDesktopProductCommission = () => (
    <div className="bg-white rounded-2xl p-6 shadow-md mb-8 hidden md:block">
      <div className="grid grid-cols-2 gap-10">
        <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
          <legend className="text-gray-700 px-1 text-sm">Product</legend>
          <select className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 focus:outline-none">
            <option>Applies to all the products</option>
          </select>
        </fieldset>

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
        <button className="bg-[#2f5e37] text-white px-8 py-2 rounded-lg text-sm hover:bg-[#25542d] transition">Update</button>
      </div>
    </div>
  );

  // Mobile Doctor Commission Card
  const renderMobileDoctorCommission = () => (
    <div className="bg-white rounded-xl p-4 shadow-md mb-6 md:hidden">
      <div className="grid grid-cols-1 gap-4">
        <fieldset className="border border-gray-300 rounded-xl px-3 pb-2">
          <legend className="text-gray-700 px-1 text-xs">Product</legend>
          <select className="w-full mt-1 px-2 py-1.5 rounded-lg text-sm text-gray-600 focus:outline-none">
            <option>Applies to all the products</option>
          </select>
        </fieldset>

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
        <button className="bg-[#2f5e37] text-white px-6 py-1.5 rounded-lg text-sm hover:bg-[#25542d] transition">Update</button>
      </div>
    </div>
  );

  // Desktop Doctor Commission Card
  const renderDesktopDoctorCommission = () => (
    <div className="bg-white rounded-2xl p-6 shadow-md mb-8 hidden md:block">
      <div className="grid grid-cols-2 gap-10">
        <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
          <legend className="text-gray-700 px-1 text-sm">Product</legend>
          <select className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 focus:outline-none">
            <option>Applies to all the products</option>
          </select>
        </fieldset>

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
        <button className="bg-[#2f5e37] text-white px-8 py-2 rounded-lg text-sm hover:bg-[#25542d] transition">Update</button>
      </div>
    </div>
  );

  // Mobile Table View
  const renderMobileTable = () => (
    <div className="md:hidden mt-6">
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
            <button 
              className="bg-[#EEF3EF] rounded-xl p-2 hover:bg-gray-200 transition"
              onClick={handleAddClick}
            >
              <Plus className="h-5 w-5 text-[#2f5e37]" />
            </button>
          </div>
        </div>

        {/* Special Commission Cards */}
        <h3 className="text-lg font-medium text-gray-800 mb-3">Special Commission</h3>
        <div className="space-y-3">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-800 text-sm">{doctor.name}</div>
                  <div className="text-xs text-gray-500">Doctor</div>
                </div>
                <div className="ml-auto">
                  <img 
                    src="action1.svg" 
                    alt="Action" 
                    className="w-5 h-5 cursor-pointer hover:opacity-80"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-gray-500 text-xs">Doctor's Commission</div>
                  <div className="font-medium text-[#2f5e37]">{doctor.doctorCommission}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs">Product's Commission</div>
                  <div className="font-medium text-[#2f5e37]">{doctor.productCommission}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-gray-500 text-xs">Product Name</div>
                  <div className="font-medium truncate">{doctor.productName}</div>
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
            Showing 1-5 of {doctors.length}
          </div>
        </div>
      </div>
    </div>
  );

  // Desktop Table View
  const renderDesktopTable = () => (
    <div className="hidden md:block">
      <div
        className="bg-white rounded-2xl p-6 mt-8"
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        {/* Top Row - EXACTLY like reference code */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          {/* Left Section */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <span className="text-2xl font-medium text-gray-800 whitespace-nowrap">
              Special Commission
            </span>

            {/* Search Bar - EXACTLY like reference code with SVG icon */}
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
            <button 
              className="bg-[#EEF3EF] rounded-xl px-3 hover:bg-gray-200 transition flex-shrink-0 h-[40px] flex items-center justify-center"
              onClick={handleAddClick}
            >
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
                <th className="py-3 font-medium">Doctor's Commission</th>
                <th className="py-3 font-medium">Product Name</th>
                <th className="py-3 font-medium">Product's Commission</th>
                <th className="py-3 font-medium">Action</th>
              </tr>
            </thead>

            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id} className="border-b text-gray-700 hover:bg-gray-50">
                  <td className="py-4 flex items-center gap-3">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    {doctor.name}
                  </td>
                  <td className="py-4">{doctor.doctorCommission}</td>
                  <td className="py-4">{doctor.productName}</td>
                  <td className="py-4">{doctor.productCommission}</td>
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

  return (
    <div className="p-4 md:p-6 min-h-screen bg-[#f5f5f7]">
      {/* Headers */}
      {renderMobileHeader()}
      {renderDesktopHeader()}

      {/* Top Button */}
      {renderDesktopTopButton()}

      {/* Default Product Commission */}
      <div className="flex justify-between items-center mt-4 md:mt-5 mb-4">
        <h1 className="text-xl md:text-2xl font-medium text-gray-800">Default Product Commission</h1>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#2f5e37] relative
            after:content-[''] after:absolute after:top-1/2 after:left-[3px] after:-translate-y-1/2
            after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all
            peer-checked:after:translate-x-full">
          </div>
        </label>
      </div>

      {/* Product Commission Cards */}
      {renderMobileProductCommission()}
      {renderDesktopProductCommission()}

      {/* Default Doctor Commission */}
      <div className="flex justify-between items-center mt-6 md:mt-8 mb-4">
        <h1 className="text-xl md:text-2xl font-medium text-gray-800">Default Doctor Commission</h1>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#2f5e37] relative
            after:content-[''] after:absolute after:top-1/2 after:left-[3px] after:-translate-y-1/2
            after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all
            peer-checked:after:translate-x-full">
          </div>
        </label>
      </div>

      {/* Doctor Commission Cards */}
      {renderMobileDoctorCommission()}
      {renderDesktopDoctorCommission()}

      {/* Special Commission Section */}
      {renderMobileTable()}
      {renderDesktopTable()}
    </div>
  );
};

export default AffiliateCommission;