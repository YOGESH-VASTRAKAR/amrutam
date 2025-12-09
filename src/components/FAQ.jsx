import React, { useState, useEffect } from "react";
import { X, ImageIcon, ArrowLeft, ChevronRight } from "lucide-react";

const AddImageButton = ({ isMobile = false }) => (
  <div className={`flex items-center gap-2 border-2 border-dashed border-[#2f5e37] rounded-lg md:rounded-xl px-3 md:px-4 py-2 cursor-pointer h-[44px] md:h-auto ${isMobile ? 'w-full justify-center' : ''}`}>
    <ImageIcon size={isMobile ? 16 : 18} className="text-[#2f5e37]" />
    <span className="text-[#2f5e37] font-medium text-sm md:text-base">
      {isMobile ? 'Add Image' : 'Add Image'}
    </span>
  </div>
);

const FAQ = ({ onNext, onBack }) => {
  const [mobileView, setMobileView] = useState(false);
  
  const [faqList, setFaqList] = useState([
    { question: "What are benefits of this product?", answer: "benefits of this product" },
    { question: "", answer: "" },
  ]);

  const [productList, setProductList] = useState([{ name: "" }]);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setMobileView(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Add new FAQ
  const addFAQ = () => {
    setFaqList([...faqList, { question: "", answer: "" }]);
  };

  // Remove FAQ
  const removeFAQ = (index) => {
    if (faqList.length > 1) {
      const updated = faqList.filter((_, i) => i !== index);
      setFaqList(updated);
    }
  };

  // Update FAQ question
  const updateFAQQuestion = (index, value) => {
    const updated = [...faqList];
    updated[index].question = value;
    setFaqList(updated);
  };

  // Update FAQ answer
  const updateFAQAnswer = (index, value) => {
    const updated = [...faqList];
    updated[index].answer = value;
    setFaqList(updated);
  };

  // Add new product
  const addProduct = () => {
    setProductList([...productList, { name: "" }]);
  };

  // Remove product
  const removeProduct = (index) => {
    if (productList.length > 1) {
      const updated = productList.filter((_, i) => i !== index);
      setProductList(updated);
    }
  };

  // Update product name
  const updateProductName = (index, value) => {
    const updated = [...productList];
    updated[index].name = value;
    setProductList(updated);
  };

  // Mobile Header
  const renderMobileHeader = () => (
    <div className="md:hidden mb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">FAQ</h2>
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
    <div className="hidden md:flex justify-between items-center mb-6">
      <h2 className="font-semibold text-lg">FAQ</h2>
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[#2f5e37] font-medium"
      >
        <ArrowLeft size={18} />
        Back
      </button>
    </div>
  );

  // Mobile FAQ Section
  const renderMobileFAQ = () => (
    <div className="md:hidden space-y-4 mb-6">
      {faqList.map((item, index) => (
        <div key={index} className="space-y-3">
          {/* Question Fieldset */}
          <fieldset className="border border-gray-300 rounded-lg p-2">
            <legend className="px-2 font-medium text-gray-900 text-xs">
              Enter Question<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              value={item.question}
              onChange={(e) => updateFAQQuestion(index, e.target.value)}
              placeholder={index === 0 ? "What are benefits of this product?" : "Label"}
              className="w-full outline-none px-2 text-sm h-[24px]"
            />
          </fieldset>

          {/* Answer Fieldset and Delete Button */}
          <div className="flex items-start gap-2">
            <fieldset className="flex-1 border border-gray-300 rounded-lg p-2">
              <legend className="px-2 font-medium text-gray-900 text-xs">
                Enter Answer<span className="text-red-500">*</span>
              </legend>
              <input
                type="text"
                value={item.answer}
                onChange={(e) => updateFAQAnswer(index, e.target.value)}
                placeholder={index === 0 ? "benefits of this product" : "Label"}
                className="w-full outline-none px-2 text-sm h-[24px]"
              />
            </fieldset>
            
            {/* Delete Button */}
            <button 
              onClick={() => removeFAQ(index)}
              className="text-[#2f5e37] mt-2"
              disabled={faqList.length === 1}
            >
              <X size={18} />
            </button>
          </div>
        </div>
      ))}
      
      <button 
        onClick={addFAQ}
        className="text-[#2f5e37] text-xs cursor-pointer font-medium mt-2"
      >
        + Add Another FAQ
      </button>
    </div>
  );

  // Desktop FAQ Section
  const renderDesktopFAQ = () => (
    <div className="hidden md:block space-y-6">
      {faqList.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          {/* Question Fieldset */}
          <fieldset className="flex-1 border border-gray-300 rounded-xl p-2">
            <legend className="px-2 font-medium text-gray-900 text-sm">
              Enter Question<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              value={item.question}
              onChange={(e) => updateFAQQuestion(index, e.target.value)}
              placeholder={index === 0 ? "What are benefits of this product?" : "Label"}
              className="w-full outline-none px-2 text-sm"
            />
          </fieldset>

          {/* Answer Fieldset */}
          <fieldset className="flex-1 border border-gray-300 rounded-xl p-2">
            <legend className="px-2 font-medium text-gray-900 text-sm">
              Enter Answer<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              value={item.answer}
              onChange={(e) => updateFAQAnswer(index, e.target.value)}
              placeholder={index === 0 ? "benefits of this product" : "Label"}
              className="w-full outline-none px-2 text-sm"
            />
          </fieldset>

          {/* Delete Button */}
          <button 
            onClick={() => removeFAQ(index)}
            className="text-[#2f5e37] mt-7"
            disabled={faqList.length === 1}
          >
            <X size={20} />
          </button>
        </div>
      ))}
      
      <button 
        onClick={addFAQ}
        className="mt-2 text-[#2f5e37] text-sm cursor-pointer font-medium"
      >
        Add Another FAQ
      </button>
    </div>
  );

  // Mobile Additional Products
  const renderMobileProducts = () => (
    <div className="md:hidden mt-6">
      <h2 className="font-semibold text-base mb-3">Additional Product Display</h2>
      
      {/* Title Fieldset */}
      <fieldset className="border border-gray-300 rounded-lg p-2 mb-4">
        <legend className="px-2 font-medium text-gray-900 text-xs">
          Select Title<span className="text-red-500">*</span>
        </legend>
        <input
          type="text"
          placeholder="Products for Related Concerns"
          className="w-full outline-none px-2 text-sm h-[24px]"
        />
      </fieldset>

      {/* Product Items */}
      {productList.map((product, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center gap-2">
            <AddImageButton isMobile={true} />
            
            <input
              type="text"
              value={product.name}
              onChange={(e) => updateProductName(index, e.target.value)}
              placeholder="Add Product"
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm h-[44px]"
            />
            
            <button 
              onClick={() => removeProduct(index)}
              className="text-[#2f5e37] h-[44px] flex items-center"
              disabled={productList.length === 1}
            >
              <X size={18} />
            </button>
          </div>
        </div>
      ))}
      
      <button 
        onClick={addProduct}
        className="text-[#2f5e37] text-xs cursor-pointer font-medium mt-2"
      >
        + Add Another Product
      </button>
    </div>
  );

  // Desktop Additional Products
  const renderDesktopProducts = () => (
    <div className="hidden md:block mt-10">
      <h2 className="font-semibold text-lg mb-3">Additional Product Display</h2>

      {/* Title Fieldset */}
      <fieldset className="border border-gray-300 rounded-xl p-2">
        <legend className="px-2 font-medium text-gray-900 text-sm">
          Select Title<span className="text-red-500">*</span>
        </legend>
        <input
          type="text"
          placeholder="Products for Related Concerns"
          className="w-full outline-none px-2 text-sm"
        />
      </fieldset>

      {/* Product Items */}
      {productList.map((product, index) => (
        <div key={index} className="flex items-center gap-4 mt-6">
          <AddImageButton />

          <input
            type="text"
            value={product.name}
            onChange={(e) => updateProductName(index, e.target.value)}
            placeholder="Add Product"
            className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-sm h-[44px]"
          />

          <button 
            onClick={() => removeProduct(index)}
            className="text-[#2f5e37]"
            disabled={productList.length === 1}
          >
            <X size={20} />
          </button>
        </div>
      ))}
      
      <button 
        onClick={addProduct}
        className="mt-3 text-[#2f5e37] text-sm cursor-pointer font-medium"
      >
        Add Another Product
      </button>
    </div>
  );

  // Mobile Buttons
  const renderMobileButtons = () => (
    <div className="md:hidden mt-8">
      <div className="flex gap-3">
        <button 
          onClick={() => alert('Saved successfully!')}
          className="bg-[#2f5e37] text-white flex-1 py-3 rounded-xl text-sm font-medium"
        >
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
      <button 
        onClick={() => alert('Saved successfully!')}
        className="bg-[#2f5e37] text-white px-16 py-3 rounded-xl text-lg font-medium"
      >
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
      <div className="p-4 md:p-8 bg-white rounded-xl md:rounded-2xl mb-8 md:mb-20" 
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
        
        {/* Headers */}
        {renderMobileHeader()}
        {renderDesktopHeader()}

        {/* FAQ Sections */}
        {renderMobileFAQ()}
        {renderDesktopFAQ()}

        {/* Product Sections */}
        {renderMobileProducts()}
        {renderDesktopProducts()}
      </div>

      {/* Buttons */}
      {renderMobileButtons()}
      {renderDesktopButtons()}
    </div>
  );
};

export default FAQ;