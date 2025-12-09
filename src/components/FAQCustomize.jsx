import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import MaxFAQPopup from "./MaxFAQPopup";
import ReplaceFAQPopup from "./ReplaceFAQPopup";

const FAQCustomize = () => {
  const [faqTab, setFaqTab] = useState("Consultation");
  const [selectedFAQs, setSelectedFAQs] = useState([]);
  const [showMaxFAQPopup, setShowMaxFAQPopup] = useState(false);
  const [showReplacePopup, setShowReplacePopup] = useState(false);
  const [lastSelectedFAQ, setLastSelectedFAQ] = useState(null);
  const [mobileView, setMobileView] = useState(false);
  const [showMobileTabs, setShowMobileTabs] = useState(false);
  
  const faqTabs = ["Consultation", "Shop", "Wallet", "Forum", "Additional"];

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setMobileView(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleFaqTabClick = (tab) => {
    setFaqTab(tab);
    if (mobileView) {
      setShowMobileTabs(false);
    }
  };

  // Calculate text width function
  const getTextWidth = (text) => {
    const baseWidth = mobileView ? 7 : 8;
    const calculatedWidth = text.length * baseWidth;
    return Math.max(calculatedWidth, mobileView ? 50 : 60);
  };

  // Dummy FAQ items with IDs
  const faqList = [
    { id: 1, text: "What types of consultations are available?" },
    { id: 2, text: "Can I get refund for the wallet money?" },
    { id: 3, text: "What is the Amrutam Forum?" },
    { id: 4, text: "Can I pause the audio consultation?" },
    { id: 5, text: "Is there a minimum duration for an audio consultation?" },
    { id: 6, text: "What is the Amrutam Forum?" },
    { id: 7, text: "Is there a minimum duration for an audio consultation?" },
    { id: 8, text: "What is the Amrutam Forum?" }
  ];

  const handleCheckboxChange = (faqItem) => {
    if (selectedFAQs.includes(faqItem.id)) {
      setSelectedFAQs(prev => prev.filter(id => id !== faqItem.id));
    } else {
      setSelectedFAQs(prev => [...prev, faqItem.id]);
      setLastSelectedFAQ(faqItem);
      setShowMaxFAQPopup(true);
    }
  };

  const handleSelectAll = () => {
    if (selectedFAQs.length === faqList.length) {
      setSelectedFAQs([]);
    } else {
      const allIds = faqList.map(item => item.id);
      setSelectedFAQs(allIds);
      if (allIds.length > 0) {
        setLastSelectedFAQ(faqList[0]);
        setShowMaxFAQPopup(true);
      }
    }
  };

  const isAllSelected = selectedFAQs.length === faqList.length && faqList.length > 0;

  // MaxFAQPopup में Replace button click handler
  const handleMaxPopupReplace = () => {
    console.log("Opening Replace FAQ popup");
    setShowMaxFAQPopup(false);
    setShowReplacePopup(true);
  };

  const handleMaxPopupCancel = () => {
    if (lastSelectedFAQ) {
      setSelectedFAQs(prev => prev.filter(id => id !== lastSelectedFAQ.id));
    }
    setShowMaxFAQPopup(false);
  };

  // ReplaceFAQPopup handlers
  const handleReplaceFinal = (selectedQuestion) => {
    console.log("Replacing with question:", selectedQuestion);
    alert(`FAQ replaced with: "${selectedQuestion}"`);
    setShowReplacePopup(false);
  };

  const handleReplacePopupCancel = () => {
    setShowReplacePopup(false);
  };

  // Mobile tabs dropdown
  const renderMobileTabsDropdown = () => (
    <div className="md:hidden mb-4">
      <button
        className="w-full flex items-center justify-between px-4 py-3 bg-white border rounded-lg"
        onClick={() => setShowMobileTabs(!showMobileTabs)}
      >
        <span className="font-medium text-gray-700">{faqTab}</span>
        {showMobileTabs ? <X size={20} /> : <Menu size={20} />}
      </button>
      
      {showMobileTabs && (
        <div className="mt-1 bg-white border rounded-lg shadow-lg">
          {faqTabs.map((tab) => (
            <button
              key={tab}
              className={`w-full text-left px-4 py-3 border-b last:border-b-0 ${
                faqTab === tab
                  ? "bg-green-50 text-[#2f5e37] font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => handleFaqTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  // Desktop tabs
  const renderDesktopTabs = () => (
    <div className="mb-6 hidden md:block">
      <div className="flex justify-center w-full">
        <div className="w-full">
          <div className="flex justify-evenly items-center w-full">
            {faqTabs.map((tab) => (
              <div key={tab} className="flex-1">
                <div className="flex flex-col items-center relative">
                  <button
                    className={`text-base font-medium whitespace-nowrap transition-colors w-full text-center px-2 py-1 ${
                      faqTab === tab
                        ? "text-[#2f5e37]"
                        : "text-gray-400 hover:text-[#2f5e37]"
                    }`}
                    onClick={() => handleFaqTabClick(tab)}
                  >
                    {tab}
                  </button>

                  {/* Active Line - Fixed width based on text */}
                  {faqTab === tab && (
                    <div className="absolute bottom-[-1px] left-1/2 transform -translate-x-1/2">
                      <span
                        className="h-[2px] bg-[#2f5e37] rounded-sm block"
                        style={{
                          width: `${getTextWidth(tab)}px`,
                          minWidth: "20px"
                        }}
                      ></span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Mobile responsive FAQ items
  const renderFAQItem = (item) => (
    <div
      key={item.id}
      className="flex items-center justify-between px-3 md:px-4 py-3 md:py-4 border-b last:border-none hover:bg-gray-50"
    >
      {/* Left Items: Drag + Checkbox + Text */}
      <div className="flex items-center gap-2 md:gap-4 flex-1">
        {/* Drag handle icon - Hide on mobile */}
        <div className="text-gray-400 cursor-grab text-xl leading-none hidden md:block">
          ⋮⋮
        </div>

        {/* Checkbox */}
        <input 
          type="checkbox" 
          className="w-4 h-4 cursor-pointer flex-shrink-0"
          checked={selectedFAQs.includes(item.id)}
          onChange={() => handleCheckboxChange(item)}
        />

        {/* FAQs text - Truncate on mobile */}
        <span className="text-gray-800 text-sm md:text-base line-clamp-2 md:line-clamp-none">
          {item.text}
        </span>
      </div>

      {/* Right dropdown arrow */}
      <ChevronDown className="text-gray-500 flex-shrink-0 ml-2" size={mobileView ? 18 : 20} />
    </div>
  );

  // Mobile responsive pagination
  const renderMobilePagination = () => (
    <div className="flex flex-col gap-4 md:hidden mt-4">
      {/* Rows per page */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">Rows per page:</span>
          <select className="border rounded px-2 py-1 text-sm bg-white">
            <option>8</option>
            <option>12</option>
            <option>20</option>
          </select>
        </div>
        
        {/* Select All Checkbox */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="selectAllMobile"
            checked={isAllSelected}
            onChange={handleSelectAll}
            className="w-4 h-4 cursor-pointer"
          />
          <label htmlFor="selectAllMobile" className="text-gray-500 text-sm cursor-pointer">
            Select All
          </label>
        </div>
      </div>

      {/* Page info and navigation */}
      <div className="flex items-center justify-between">
        <span className="text-gray-500 text-sm">1–8 of 80</span>
        
        <div className="flex items-center gap-2">
          <button className="border rounded-md px-3 py-1 text-gray-600">
            <ChevronLeft size={16} />
          </button>
          <button className="border rounded-md px-3 py-1 text-gray-600">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );

  // Desktop pagination
  const renderDesktopPagination = () => (
    <div className="hidden md:flex justify-between items-center mt-4 px-2 text-gray-500 text-sm">
      <div className="flex items-center gap-2">
        <span>Rows per page:</span>
        <select className="border rounded px-2 py-1 text-sm">
          <option>8</option>
          <option>12</option>
          <option>20</option>
        </select>
        
        {/* Select All Checkbox */}
        <div className="flex items-center gap-2 ml-4">
          <input
            type="checkbox"
            id="selectAll"
            checked={isAllSelected}
            onChange={handleSelectAll}
            className="w-4 h-4 cursor-pointer"
          />
          <label htmlFor="selectAll" className="cursor-pointer">
            Select All
          </label>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span>1–8 of 80</span>

        <button className="border rounded-md px-2 py-1">{'<'}</button>
        <button className="border rounded-md px-2 py-1">{'>'}</button>
      </div>
    </div>
  );

  return (
    <>
      {/* TABS SECTION - Mobile & Desktop */}
      {renderMobileTabsDropdown()}
      {renderDesktopTabs()}

      {/* FAQ LIST SECTION */}
      <div className="bg-white border rounded-lg md:rounded-none overflow-hidden">
        {faqList.map(renderFAQItem)}
      </div>

      {/* PAGINATION SECTION - Mobile & Desktop */}
      {renderMobilePagination()}
      {renderDesktopPagination()}

      {/* Popups */}
      {showMaxFAQPopup && lastSelectedFAQ && (
        <MaxFAQPopup 
          onReplace={handleMaxPopupReplace}
          onCancel={handleMaxPopupCancel}
        />
      )}

      {showReplacePopup && (
        <ReplaceFAQPopup 
          onReplace={handleReplaceFinal}
          onCancel={handleReplacePopupCancel}
          selectedTab={faqTab}
        />
      )}
    </>
  );
};

export default FAQCustomize;