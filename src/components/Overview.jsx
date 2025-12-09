import React, { useState, useEffect } from "react";
import { Smartphone, Monitor, ArrowLeft } from "lucide-react";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";

const Overview = ({ onBack }) => {
  const [selected, setSelected] = useState("mobile");
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Mobile Header
  const renderMobileHeader = () => (
    <div className="md:hidden mb-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
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
    <div className="hidden md:flex justify-between items-center">
      {/* TOGGLE BUTTONS */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => setSelected("mobile")}
          className={`w-[200px] h-[130px] rounded-2xl border flex flex-col items-center justify-center gap-3 transition-all ${
            selected === "mobile"
              ? "border-[#2f5e37] bg-[#e7ece5]"
              : "border-[#e5e5e5] bg-white"
          }`}
        >
          <Smartphone
            size={45}
            className={`${
              selected === "mobile" ? "text-[#2f5e37]" : "text-[#b5b5c5]"
            }`}
          />
          <span
            className={`text-lg font-medium ${
              selected === "mobile" ? "text-[#2f5e37]" : "text-black"
            }`}
          >
            Mobile View
          </span>
        </button>

        <button
          onClick={() => setSelected("desktop")}
          className={`w-[200px] h-[130px] rounded-2xl border flex flex-col items-center justify-center gap-3 transition-all ${
            selected === "desktop"
              ? "border-[#2f5e37] bg-[#e7ece5]"
              : "border-[#e5e5e5] bg-white"
          }`}
        >
          <Monitor
            size={45}
            className={`${
              selected === "desktop" ? "text-[#2f5e37]" : "text-[#b5b5c5]"
            }`}
          />
          <span
            className={`text-lg font-medium ${
              selected === "desktop" ? "text-[#2f5e37]" : "text-black"
            }`}
          >
            Desktop View
          </span>
        </button>
      </div>

      {/* Back Button - Right End */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[#2f5e37] font-medium"
      >
        <ArrowLeft size={18} />
        Back
      </button>
    </div>
  );

  // Mobile Toggle Buttons
  const renderMobileToggleButtons = () => (
    <div className="md:hidden mb-6">
      <div className="flex gap-3">
        <button
          onClick={() => setSelected("mobile")}
          className={`flex-1 h-[80px] rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${
            selected === "mobile"
              ? "border-[#2f5e37] bg-[#e7ece5]"
              : "border-[#e5e5e5] bg-white"
          }`}
        >
          <Smartphone
            size={32}
            className={`${
              selected === "mobile" ? "text-[#2f5e37]" : "text-[#b5b5c5]"
            }`}
          />
          <span
            className={`text-sm font-medium ${
              selected === "mobile" ? "text-[#2f5e37]" : "text-black"
            }`}
          >
            Mobile View
          </span>
        </button>

        <button
          onClick={() => setSelected("desktop")}
          className={`flex-1 h-[80px] rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${
            selected === "desktop"
              ? "border-[#2f5e37] bg-[#e7ece5]"
              : "border-[#e5e5e5] bg-white"
          }`}
        >
          <Monitor
            size={32}
            className={`${
              selected === "desktop" ? "text-[#2f5e37]" : "text-[#b5b5c5]"
            }`}
          />
          <span
            className={`text-sm font-medium ${
              selected === "desktop" ? "text-[#2f5e37]" : "text-black"
            }`}
          >
            Desktop View
          </span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {/* Headers */}
      {renderMobileHeader()}
      {renderDesktopHeader()}

      {/* Mobile Toggle Buttons (only shown on mobile) */}
      {renderMobileToggleButtons()}

      {/* VIEW */}
      <div className={`${isMobile ? 'px-0' : ''}`}>
        {selected === "mobile" && <MobileView />}
        {selected === "desktop" && <DesktopView />}
      </div>
    </div>
  );
};

export default Overview;