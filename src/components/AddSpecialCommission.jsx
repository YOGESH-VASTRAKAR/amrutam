import React from "react";
import { ChevronRight, ArrowLeft } from "lucide-react";

const AddSpecialCommission = ({ onBack }) => {
  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  // Mobile Header
  const renderMobileHeader = () => (
    <div className="md:hidden mb-4">
      <div className="flex items-center justify-between">
        <nav className="flex items-center text-sm">
          <button 
            onClick={handleBack}
            className="text-[#2f5e37] hover:text-[#25542d] hover:underline"
          >
            Commission
          </button>
          <ChevronRight className="h-4 w-4 mx-2 text-[#2f5e37]" />
          <span className="text-[#2f5e37] font-medium">Add Commission</span>
        </nav>
      </div>
    </div>
  );

  // Desktop Header
  const renderDesktopHeader = () => (
    <div className="hidden md:block mb-6">
      <nav className="flex items-center text-sm">
        <button 
          onClick={handleBack}
          className="text-[#2f5e37] hover:text-[#25542d] hover:underline"
        >
          Affiliate
        </button>
        <ChevronRight className="h-4 w-4 mx-2 text-[#2f5e37]" />
        <button 
          onClick={handleBack}
          className="text-[#2f5e37] hover:text-[#25542d] hover:underline"
        >
          Commission
        </button>
        <ChevronRight className="h-4 w-4 mx-2 text-[#2f5e37]" />
        <span className="text-[#2f5e37] font-medium">Special Commission</span>
      </nav>
    </div>
  );

  // Mobile Title Section
  const renderMobileTitle = () => (
    <div className="mb-6 md:hidden flex items-center justify-between">
      <h1 className="text-xl font-medium text-gray-800">Add Special Commission</h1>
      <button 
        onClick={handleBack}
        className="flex items-center gap-1 text-[#2f5e37] hover:text-[#25542d] transition text-sm"
      >
        <ArrowLeft size={16} />
        <span>Back</span>
      </button>
    </div>
  );

  // Desktop Title Section
  const renderDesktopTitle = () => (
    <div className="hidden md:flex mb-8 items-center justify-between">
      <h1 className="text-2xl font-medium text-gray-800">Add Special Commission</h1>
      <button 
        onClick={handleBack}
        className="flex items-center gap-2 text-[#2f5e37] hover:text-[#25542d] transition"
      >
        <ArrowLeft size={20} />
        Back
      </button>
    </div>
  );

  // Mobile Form Container
  const renderMobileForm = () => (
    <div className="md:hidden bg-white rounded-xl p-4 shadow-md">
      <div className="grid grid-cols-1 gap-4">
        {/* Product Field */}
        <fieldset className="border border-gray-300 rounded-xl px-3 pb-2">
          <legend className="text-gray-700 px-1 text-xs">
            Product <span className="text-red-500">*</span>
          </legend>
          <select className="w-full mt-1 px-2 py-2 rounded-lg text-sm text-gray-600 focus:outline-none bg-white">
            <option>Please Select a Product</option>
            <option>Nari Sandariya Malt</option>
            <option>Ayurvedic Gold</option>
            <option>Herbal Boost</option>
            <option>Wellness Pro</option>
            <option>Nature's Cure</option>
          </select>
        </fieldset>

        {/* Doctor Field */}
        <fieldset className="border border-gray-300 rounded-xl px-3 pb-2">
          <legend className="text-gray-700 px-1 text-xs">
            Doctor <span className="text-red-500">*</span>
          </legend>
          <select className="w-full mt-1 px-2 py-2 rounded-lg text-sm text-gray-600 focus:outline-none bg-white">
            <option>Please select a Doctor</option>
            <option>Alina Mathew</option>
            <option>Jack Rock</option>
            <option>John Doe</option>
            <option>Sarah Smith</option>
            <option>Michael Brown</option>
            <option>Emma Wilson</option>
          </select>
        </fieldset>

        {/* First Percentage Field */}
        <fieldset className="border border-gray-300 rounded-xl px-3 pb-2">
          <legend className="text-gray-700 px-1 text-xs">
            Doctor's Commission <span className="text-red-500">*</span>
          </legend>
          <select className="w-full mt-1 px-2 py-2 rounded-lg text-sm text-gray-600 focus:outline-none bg-white">
            <option>Please select a Percentage</option>
            <option>10%</option>
            <option>15%</option>
            <option>20%</option>
            <option>25%</option>
            <option>30%</option>
            <option>35%</option>
            <option>40%</option>
          </select>
        </fieldset>

        {/* Second Percentage Field */}
        <fieldset className="border border-gray-300 rounded-xl px-3 pb-2">
          <legend className="text-gray-700 px-1 text-xs">
            Product's Commission <span className="text-red-500">*</span>
          </legend>
          <select className="w-full mt-1 px-2 py-2 rounded-lg text-sm text-gray-600 focus:outline-none bg-white">
            <option>Please select a Percentage</option>
            <option>10%</option>
            <option>15%</option>
            <option>20%</option>
            <option>25%</option>
            <option>30%</option>
            <option>35%</option>
            <option>40%</option>
          </select>
        </fieldset>
      </div>

      {/* Action Button */}
      <div className="flex justify-end pt-6">
        <button className="bg-[#2f5e37] text-white px-6 py-2.5 rounded-lg text-sm hover:bg-[#25542d] transition w-full md:w-auto">
          Add Commission
        </button>
      </div>
    </div>
  );

  // Desktop Form Container
  const renderDesktopForm = () => (
    <div className="hidden md:block bg-white rounded-2xl p-6 shadow-md">
      {/* Grid Layout for 4 items */}
      <div className="grid grid-cols-2 gap-6">
        {/* Product Field */}
        <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
          <legend className="text-gray-700 px-1 text-sm">
            Product <span className="text-red-500">*</span>
          </legend>
          <select className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 focus:outline-none bg-white">
            <option>Please Select a Product</option>
            <option>Nari Sandariya Malt</option>
            <option>Ayurvedic Gold</option>
            <option>Herbal Boost</option>
            <option>Wellness Pro</option>
            <option>Nature's Cure</option>
          </select>
        </fieldset>

        {/* Doctor Field */}
        <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
          <legend className="text-gray-700 px-1 text-sm">
            Doctor <span className="text-red-500">*</span>
          </legend>
          <select className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 focus:outline-none bg-white">
            <option>Please select a Doctor</option>
            <option>Alina Mathew</option>
            <option>Jack Rock</option>
            <option>John Doe</option>
            <option>Sarah Smith</option>
            <option>Michael Brown</option>
            <option>Emma Wilson</option>
          </select>
        </fieldset>

        {/* First Percentage Field */}
        <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
          <legend className="text-gray-700 px-1 text-sm">
            Percentage <span className="text-red-500">*</span>
          </legend>
          <select className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 focus:outline-none bg-white">
            <option>Please select a Percentage</option>
            <option>10%</option>
            <option>15%</option>
            <option>20%</option>
            <option>25%</option>
            <option>30%</option>
            <option>35%</option>
            <option>40%</option>
          </select>
        </fieldset>

        {/* Second Percentage Field */}
        <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
          <legend className="text-gray-700 px-1 text-sm">
            Percentage <span className="text-red-500">*</span>
          </legend>
          <select className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 focus:outline-none bg-white">
            <option>Please select a Percentage</option>
            <option>10%</option>
            <option>15%</option>
            <option>20%</option>
            <option>25%</option>
            <option>30%</option>
            <option>35%</option>
            <option>40%</option>
          </select>
        </fieldset>
      </div>

      {/* Action Button - Only Add button remains */}
      <div className="flex justify-end pt-6">
        <button className="bg-[#2f5e37] text-white px-8 py-3 rounded-lg text-sm hover:bg-[#25542d] transition">
          Add
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-6 min-h-screen bg-[#f5f5f7]">
      {/* Headers */}
      {renderMobileHeader()}
      {renderDesktopHeader()}

      {/* Title Sections */}
      {renderMobileTitle()}
      {renderDesktopTitle()}

      {/* Form Containers */}
      {renderMobileForm()}
      {renderDesktopForm()}
    </div>
  );
};

export default AddSpecialCommission;