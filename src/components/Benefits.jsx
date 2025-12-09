import React, { useState, useEffect } from "react";
import { X, Image as ImageIcon, Smile, ArrowLeft } from "lucide-react";

const Benefits = ({ onNext, onBack }) => {
  const [mobileView, setMobileView] = useState(false);

  // Primary Benefits
  const [primaryBenefits, setPrimaryBenefits] = useState([
    "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been.",
    "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been.",
    "",
  ]);

  // Secondary Benefits
  const [secondaryBenefits, setSecondaryBenefits] = useState([
    { icon: "smile", text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been." },
    { icon: "upload", text: "Lorem Ipsum" },
  ]);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setMobileView(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Add primary benefit
  const addPrimaryBenefit = () => {
    setPrimaryBenefits([...primaryBenefits, ""]);
  };

  // Remove primary benefit
  const removePrimaryBenefit = (index) => {
    const updated = primaryBenefits.filter((_, i) => i !== index);
    setPrimaryBenefits(updated);
  };

  // Add secondary benefit
  const addSecondaryBenefit = () => {
    setSecondaryBenefits([...secondaryBenefits, { icon: "upload", text: "" }]);
  };

  // Remove secondary benefit
  const removeSecondaryBenefit = (index) => {
    const updated = secondaryBenefits.filter((_, i) => i !== index);
    setSecondaryBenefits(updated);
  };

  // Mobile Header
  const renderMobileHeader = () => (
    <div className="md:hidden mb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Benefits</h2>
        {onBack && (
          <button 
            onClick={onBack}
            className="flex items-center gap-1 text-[#2f5e37] text-sm"
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>
        )}
      </div>
    </div>
  );

  // Desktop Header
  const renderDesktopHeader = () => (
    <div className="hidden md:flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold text-gray-900">Benefits</h2>
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[#2f5e37] font-medium"
      >
        <ArrowLeft size={18} />
        Back
      </button>
    </div>
  );

  // Mobile Primary Benefits
  const renderMobilePrimaryBenefits = () => (
    <div className="md:hidden mb-6">
      <h3 className="text-base font-semibold text-gray-900 mb-3">Primary Benefits</h3>
      {primaryBenefits.map((value, index) => (
        <div key={index} className="flex items-center gap-2 mb-3">
          <input
            type="text"
            value={value}
            placeholder="Enter Here"
            onChange={(e) => {
              const updated = [...primaryBenefits];
              updated[index] = e.target.value;
              setPrimaryBenefits(updated);
            }}
            className="flex-1 border border-[#d6d9de] rounded-lg px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400"
          />
          <button 
            onClick={() => removePrimaryBenefit(index)}
            className="text-[#2f5e37] flex-shrink-0"
          >
            <X size={18} />
          </button>
        </div>
      ))}
      <button 
        onClick={addPrimaryBenefit} 
        className="text-[#2f5e37] font-medium text-sm"
      >
        Add Another Benefit
      </button>
    </div>
  );

  // Desktop Primary Benefits
  const renderDesktopPrimaryBenefits = () => (
    <div className="hidden md:block mb-10">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Primary Benefits</h3>
      {primaryBenefits.map((value, index) => (
        <div key={index} className="flex items-center gap-3 mb-4">
          <input
            type="text"
            value={value}
            placeholder="Enter Here"
            onChange={(e) => {
              const updated = [...primaryBenefits];
              updated[index] = e.target.value;
              setPrimaryBenefits(updated);
            }}
            className="flex-1 border border-[#d6d9de] rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400"
          />
          <button 
            onClick={() => removePrimaryBenefit(index)}
            className="text-[#2f5e37]"
          >
            <X size={22} />
          </button>
        </div>
      ))}
      <button 
        onClick={addPrimaryBenefit} 
        className="text-[#2f5e37] font-medium text-sm mb-10"
      >
        Add Another Benefit
      </button>
    </div>
  );

  // Mobile Secondary Benefits
  const renderMobileSecondaryBenefits = () => (
    <div className="md:hidden">
      <h3 className="text-base font-semibold text-gray-900 mb-3">Secondary Benefits</h3>
      {secondaryBenefits.map((item, index) => (
        <div key={index} className="mb-4">
          {/* ICON BOX */}
          <div className="w-full h-[52px] border-[2px] border-dashed border-[#bcd1b2] bg-[#f3f8f0] rounded-lg flex items-center justify-center cursor-pointer mb-2">
            {item.icon === "smile" ? (
              <Smile size={24} className="text-[#2f5e37]" />
            ) : (
              <div className="flex items-center gap-2">
                <ImageIcon size={24} className="text-[#2f5e37]" />
                <span className="text-sm text-[#2f5e37]">Upload icon</span>
              </div>
            )}
          </div>
          
          {/* TEXT FIELD AND DELETE */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={item.text}
              placeholder="Lorem Ipsum"
              onChange={(e) => {
                const updated = [...secondaryBenefits];
                updated[index].text = e.target.value;
                setSecondaryBenefits(updated);
              }}
              className="flex-1 border border-[#d6d9de] rounded-lg px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400"
            />
            <button 
              onClick={() => removeSecondaryBenefit(index)}
              className="text-[#2f5e37] flex-shrink-0"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      ))}
      <button 
        onClick={addSecondaryBenefit} 
        className="text-[#2f5e37] font-medium text-sm"
      >
        Add Another Benefit
      </button>
    </div>
  );

  // Desktop Secondary Benefits
  const renderDesktopSecondaryBenefits = () => (
    <div className="hidden md:block">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Secondary Benefits</h3>
      {secondaryBenefits.map((item, index) => (
        <div key={index} className="flex items-center gap-4 mb-5">
          {/* ICON BOX */}
          <div className="w-[150px] h-[52px] border-[2px] border-dashed border-[#bcd1b2] bg-[#f3f8f0] rounded-xl flex items-center justify-center cursor-pointer flex-shrink-0">
            {item.icon === "smile" ? (
              <Smile size={26} className="text-[#2f5e37]" />
            ) : (
              <div className="flex items-center gap-3 px-3">
                <ImageIcon size={26} className="text-[#2f5e37]" />
                <span className="text-sm text-[#2f5e37]">Upload icon</span>
              </div>
            )}
          </div>

          {/* TEXT FIELD */}
          <input
            type="text"
            value={item.text}
            placeholder="Lorem Ipsum"
            onChange={(e) => {
              const updated = [...secondaryBenefits];
              updated[index].text = e.target.value;
              setSecondaryBenefits(updated);
            }}
            className="flex-1 border border-[#d6d9de] rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400"
          />

          {/* DELETE */}
          <button 
            onClick={() => removeSecondaryBenefit(index)}
            className="text-[#2f5e37] flex-shrink-0"
          >
            <X size={22} />
          </button>
        </div>
      ))}
      <button 
        onClick={addSecondaryBenefit} 
        className="text-[#2f5e37] font-medium text-sm"
      >
        Add Another Benefit
      </button>
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

        {/* Primary Benefits */}
        {renderMobilePrimaryBenefits()}
        {renderDesktopPrimaryBenefits()}

        {/* Secondary Benefits */}
        {renderMobileSecondaryBenefits()}
        {renderDesktopSecondaryBenefits()}
      </div>

      {/* Buttons */}
      {renderMobileButtons()}
      {renderDesktopButtons()}
    </div>
  );
};

export default Benefits;