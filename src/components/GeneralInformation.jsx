import React, { useState, useEffect } from "react";
import { Plus, X, ChevronRight } from "lucide-react";

const GeneralInformation = ({ onNext, onBack }) => {
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

  // Mobile Header
  const renderMobileHeader = () => (
    <div className="md:hidden mb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">General Information</h2>
        {onBack && (
          <button 
            onClick={onBack}
            className="flex items-center gap-1 text-[#2f5e37] text-sm"
          >
            <ChevronRight className="rotate-180" size={16} />
            <span>Back</span>
          </button>
        )}
      </div>
    </div>
  );

  // Desktop Header
  const renderDesktopHeader = () => (
    <h2 className="hidden md:block text-xl font-semibold text-gray-900 mb-6">
      General Information
    </h2>
  );

  // Mobile Form Fields
  const renderMobileFormFields = () => (
    <div className="md:hidden space-y-4">
      {/* Product Name */}
      <fieldset className="border border-gray-300 rounded-xl px-3 pb-2">
        <legend className="text-gray-700 px-1 text-xs">
          Product Name <span className="text-red-500">*</span>
        </legend>
        <select className="w-full mt-1 px-2 py-2 rounded-lg text-sm text-gray-600 focus:outline-none">
          <option>Label</option>
        </select>
      </fieldset>

      {/* Subtitle */}
      <fieldset className="border border-gray-300 rounded-xl px-3 pb-2">
        <legend className="text-gray-700 px-1 text-xs">
          Subtitle <span className="text-red-500">*</span>
        </legend>
        <select className="w-full mt-1 px-2 py-2 rounded-lg text-sm text-gray-600 focus:outline-none">
          <option>Label</option>
        </select>
      </fieldset>

      {/* Quantity, Month/Jar, Price */}
      <div className="grid grid-cols-1 gap-4">
        {/* Quantity */}
        <div>
          <fieldset className="border border-gray-300 rounded-xl px-3 pb-2">
            <legend className="text-gray-700 px-1 text-xs">
              Select Quantity <span className="text-red-500">*</span>
            </legend>
            <select className="w-full mt-1 px-2 py-2 rounded-lg text-sm text-gray-600 focus:outline-none">
              <option>Label</option>
            </select>
          </fieldset>
          <div className="bg-[#dff0d8] text-[#2f5e37] text-center mt-2 py-2 rounded-lg text-xs font-medium">
            170 GM
          </div>
        </div>

        {/* Month / Jar */}
        <div>
          <fieldset className="border border-gray-300 rounded-xl px-3 pb-2">
            <legend className="text-gray-700 px-1 text-xs">
              Month / Jar
            </legend>
            <select className="w-full mt-1 px-2 py-2 rounded-lg text-sm text-gray-600 focus:outline-none">
              <option>Label</option>
            </select>
          </fieldset>
          <div className="bg-[#dff0d8] text-[#2f5e37] text-center mt-2 py-2 rounded-lg text-xs font-medium">
            1 Month / 1 Jar
          </div>
        </div>

        {/* Add Price with Add More */}
        <div>
          <fieldset className="border border-gray-300 rounded-xl px-3 pb-2">
            <legend className="text-gray-700 px-1 text-xs flex items-center justify-between">
              <span>Add Price <span className="text-red-500">*</span></span>
              <div className="flex items-center gap-1 text-[#2f5e37] cursor-pointer">
                <div className="border-2 border-[#2f5e37] p-0.5 rounded flex items-center justify-center">
                  <Plus size={8} />
                </div>
                <span className="font-medium text-xs">Add More</span>
              </div>
            </legend>
            <select className="w-full mt-1 px-2 py-2 rounded-lg text-sm text-gray-600 focus:outline-none">
              <option>Label</option>
            </select>
          </fieldset>
          <div className="bg-[#dff0d8] text-[#2f5e37] text-center mt-2 py-2 rounded-lg text-xs font-medium flex items-center justify-between px-3">
            <span>₹ 329</span>
            <X size={16} className="text-[#2f5e37] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Product Description */}
      <fieldset className="border border-gray-300 rounded-xl px-3 pb-2">
        <legend className="text-gray-700 px-1 text-xs">
          Product Description <span className="text-red-500">*</span>
        </legend>
        <div className="mt-1">
          <textarea
            className="w-full outline-none px-2 py-2 text-sm min-h-[80px] rounded-lg"
            rows="3"
            placeholder="description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
          />
        </div>
      </fieldset>
    </div>
  );

  // Desktop Form Fields
  const renderDesktopFormFields = () => (
    <div className="hidden md:block">
      {/* Product Name and Subtitle */}
      <div className="grid grid-cols-1 gap-6">
        <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
          <legend className="text-gray-700 px-1 text-sm">
            Product Name <span className="text-red-500">*</span>
          </legend>
          <select className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 focus:outline-none">
            <option>Label</option>
          </select>
        </fieldset>

        <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
          <legend className="text-gray-700 px-1 text-sm">
            Subtitle <span className="text-red-500">*</span>
          </legend>
          <select className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 focus:outline-none">
            <option>Label</option>
          </select>
        </fieldset>
      </div>

      {/* Row 3: Quantity + Month/Jar + Price */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {/* Select Quantity */}
        <div>
          <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
            <legend className="text-gray-700 px-1 text-sm">
              Select Quantity <span className="text-red-500">*</span>
            </legend>
            <select className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 focus:outline-none">
              <option>Label</option>
            </select>
          </fieldset>
          <div className="bg-[#dff0d8] text-[#2f5e37] text-center mt-2 py-2 rounded-lg text-sm font-medium">
            170 GM
          </div>
        </div>

        {/* Month / Jar */}
        <div>
          <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
            <legend className="text-gray-700 px-1 text-sm">
              Month / Jar
            </legend>
            <select className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 focus:outline-none">
              <option>Label</option>
            </select>
          </fieldset>
          <div className="bg-[#dff0d8] text-[#2f5e37] text-center mt-2 py-2 rounded-lg text-sm font-medium">
            1 Month / 1 Jar
          </div>
        </div>

        {/* Add Price */}
        <div className="relative">
          <div className="flex items-center">
            <div className="flex-1">
              <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
                <legend className="text-gray-700 px-1 text-sm">
                  Add Price <span className="text-red-500">*</span>
                </legend>
                <select className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 focus:outline-none">
                  <option>Label</option>
                </select>
              </fieldset>
              
              <div className="bg-[#dff0d8] text-[#2f5e37] text-center mt-2 py-2 rounded-lg text-sm font-medium">
                ₹ 329
              </div>
            </div>
            
            <div className="ml-3 flex flex-col">
              <div className="flex items-center gap-1 text-[#2f5e37] cursor-pointer mb-6">
                <div className="border-2 border-[#2f5e37] p-0.5 rounded flex items-center justify-center">
                  <Plus size={10} /> 
                </div>
                <span className="font-medium text-xs">Add More</span>
              </div>
              
              <div className="text-[#2f5e37] cursor-pointer mt-auto">
                <X size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <fieldset className="mt-6 border border-gray-300 rounded-xl px-4 pb-3">
        <legend className="text-gray-700 px-1 text-sm">
          Product Description <span className="text-red-500">*</span>
        </legend>
        <div className="mt-1">
          <textarea
            className="w-full outline-none px-3 py-2 text-sm min-h-[60px] rounded-lg"
            rows="2"
            placeholder="description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
          />
        </div>
      </fieldset>
    </div>
  );

  // Mobile Product Image Upload
  const renderMobileImageUpload = () => (
    <div className="md:hidden mt-6">
      <fieldset className="border border-gray-300 rounded-xl p-3">
        <legend className="px-2 font-medium text-gray-900 text-xs">
          Product Image <span className="text-red-500">*</span>
        </legend>

        {/* Simple Image Upload */}
        <div className="border-2 border-dashed border-[#c6d5c0] bg-[#f3f8f0] rounded-xl p-6 flex flex-col items-center justify-center mt-2">
          <img src="/download-img.svg" alt="Upload" className="w-6 h-6 text-[#325834] mb-2" />
          <p className="text-gray-600 text-sm text-center mb-1">Drag and drop images</p>
          <p className="text-gray-500 text-xs mb-3">or</p>
          <button className="bg-[#2f5e37] text-white px-4 py-2 rounded-lg text-xs font-medium">
            Browse Files
          </button>
          <p className="text-gray-400 text-xs mt-3 text-center">
            Supported formats: JPG, PNG, GIF
          </p>
        </div>

        {/* Image Preview (if any) */}
        <div className="mt-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0"></div>
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0"></div>
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0"></div>
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
              <Plus size={16} className="text-gray-400" />
            </div>
          </div>
          <div className="text-center text-gray-500 text-xs mt-2">
            Add up to 5 images
          </div>
        </div>
      </fieldset>
    </div>
  );

  // Desktop Product Image Upload
  const renderDesktopImageUpload = () => (
    <div className="hidden md:block mt-6 border border-gray-300 rounded-2xl p-4">
      <legend className="px-2 font-medium text-gray-900 text-sm mb-4">
        Product Image <span className="text-red-500">*</span>
      </legend>

      <div className="flex items-center">
        {/* IMAGE CAROUSEL SECTION */}
        <div className="flex-1 flex items-center relative">
          {/* LEFT ARROW */}
          <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
            <button className="min-w-14 min-h-14 bg-[#FFF6D9] rounded-full flex items-center justify-center shadow-md border border-[#f3eac4]">
              <img src="/prev.svg" alt="Previous" className="w-6 h-6" />
            </button>
          </div>

          {/* IMAGES CONTAINER */}
          <div className="flex-1 flex flex-col items-center pl-5">
            <div className="flex items-center gap-5 relative w-full justify-center">
              {/* IMAGE 1 */}
              <div className="relative">
                <img
                  src="p1.png"
                  className="w-[270px] h-[270px] object-cover"
                  alt="Product 1"
                />
              </div>

              {/* IMAGE 2 */}
              <img
                src="p2.png"
                className="w-[270px] h-[270px] object-cover"
                alt="Product 2"
              />

              {/* IMAGE 3 */}
              <div className="relative overflow-hidden w-[196px] h-[270px]">
                <img
                  src="p3.png"
                  className="w-[270px] h-[270px] object-cover"
                  alt="Product 3"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/80 pointer-events-none"></div>
              </div>
            </div>

            {/* DOT INDICATOR */}
            <div className="flex gap-2 mt-4">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-[#2f5e37] rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* RIGHT ARROW */}
          <div className="absolute right-[-24px] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
            <button className="min-w-14 min-h-14 bg-[#FFF6D9] rounded-full flex items-center justify-center shadow-md border border-[#f3eac4]">
              <img src="/next.svg" alt="Next" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* DIVIDER LINE */}
        <div className="h-[300px] w-[3px] bg-[#e6ebdc] mx-1 flex-shrink-0"></div>

        {/* UPLOAD BOX */}
        <div className="ml-3 w-[320px] h-[300px] border-[3px] border-dashed border-[#c6d5c0] bg-[#f3f8f0] rounded-2xl flex flex-col items-center justify-center flex-shrink-0">
          <img src="/download-img.svg" alt="Upload" className="w-8 h-8 text-[#325834] mb-3" />
          <p className="text-gray-600 text-base">Drag and drop</p>
          <p className="text-gray-500 text-sm mb-3">or</p>
          <button className="bg-[#2f5e37] text-white px-6 py-2 rounded-xl text-sm font-medium">
            Browse
          </button>
        </div>
      </div>
    </div>
  );

  // Mobile Buttons
  const renderMobileButtons = () => (
    <div className="md:hidden mt-8">
      <div className="flex gap-3">
        <button className="bg-[#2f5e37] text-white flex-1 py-3 rounded-xl text-sm font-medium">
          Save
        </button>
        <button 
          onClick={onNext}
          className="bg-[#EEF3EF] text-[#2f5e37] flex-1 py-3 rounded-xl text-sm font-medium"
        >
          Next
        </button>
      </div>
    </div>
  );

  // Desktop Buttons
  const renderDesktopButtons = () => (
    <div className="hidden md:flex absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-full justify-center gap-10">
      <button className="bg-[#2f5e37] text-white px-16 py-3 rounded-xl text-lg font-medium">
        Save
      </button>
      <button 
        onClick={onNext}
        className="bg-[#EEF3EF] text-[#2f5e37] px-16 py-3 rounded-xl text-lg font-medium"
      >
        Next
      </button>
    </div>
  );

  return (
    <div className="relative">
      <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl mb-8 md:mb-20" 
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
        
        {/* Headers */}
        {renderMobileHeader()}
        {renderDesktopHeader()}

        {/* Form Fields */}
        {renderMobileFormFields()}
        {renderDesktopFormFields()}

        {/* Product Image Upload */}
        {renderMobileImageUpload()}
        {renderDesktopImageUpload()}
      </div>

      {/* Buttons */}
      {renderMobileButtons()}
      {renderDesktopButtons()}
    </div>
  );
};

export default GeneralInformation;