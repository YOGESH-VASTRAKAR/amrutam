import React, { useState, useEffect } from "react";
import { ArrowLeft, ChevronRight, Check, Menu, X } from "lucide-react";
import GeneralInformation from "./GeneralInformation";
import Benefits from "./Benefits";
import Properties from "./Properties";
import FAQ from "./FAQ";
import Overview from "./Overview";

const AddProduct = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [mobileView, setMobileView] = useState(false);
  const [showMobileSteps, setShowMobileSteps] = useState(false);
  
  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setMobileView(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Function to handle Next button click from child components
  const handleNextStep = () => {
    if (!completedSteps.includes(activeStep)) {
      setCompletedSteps([...completedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
    if (mobileView) {
      setShowMobileSteps(false);
    }
  };

  // Function to handle Back button click
  const handleBackStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
    if (mobileView) {
      setShowMobileSteps(false);
    }
  };

  // Mobile Header
  const renderMobileHeader = () => (
    <div className="mb-4 md:hidden">
      <div className="flex items-center justify-between">
        <nav className="flex items-center text-sm">
          <span className="text-[#2f5e37] font-medium">Add Product</span>
        </nav>
        <button 
          onClick={() => setShowMobileSteps(!showMobileSteps)}
          className="bg-[#EEF3EF] rounded-lg p-2"
        >
          {showMobileSteps ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </div>
  );

  // Desktop Header
  const renderDesktopHeader = () => (
    <div className="mb-4 hidden md:block">
      <nav className="flex items-center text-sm">
        <span className="text-[#2f5e37]">Product</span>
        <ChevronRight className="h-4 w-4 mx-2 text-[#2f5e37]" />
        <span className="text-[#2f5e37] font-medium">Add Product</span>
      </nav>
    </div>
  );

  // Mobile Steps Dropdown
  const renderMobileSteps = () => (
    <div className="mb-6 md:hidden">
      <button
        className="w-full flex items-center justify-between px-4 py-3 bg-white border rounded-lg shadow-sm"
        onClick={() => setShowMobileSteps(!showMobileSteps)}
      >
        <div className="flex items-center gap-3">
          <div className={`
            w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-semibold
            ${completedSteps.includes(activeStep) ? 'border-[#2f5e37] text-white bg-[#2f5e37]' : 'border-[#2f5e37] text-[#2f5e37]'}
          `}>
            {activeStep}
          </div>
          <span className="font-medium text-gray-700">
            {getStepName(activeStep)}
          </span>
        </div>
        {showMobileSteps ? <X size={18} /> : <ChevronRight size={18} />}
      </button>
      
      {showMobileSteps && (
        <div className="mt-1 bg-white border rounded-lg shadow-lg">
          {[1, 2, 3, 4, 5].map((step) => (
            <button
              key={step}
              className={`w-full text-left px-4 py-3 border-b last:border-b-0 flex items-center gap-3 ${
                activeStep === step
                  ? "bg-green-50 text-[#2f5e37] font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => {
                setActiveStep(step);
                setShowMobileSteps(false);
              }}
            >
              <div className={`
                w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-semibold
                ${activeStep === step || completedSteps.includes(step) 
                  ? 'border-[#2f5e37] text-white bg-[#2f5e37]' 
                  : 'border-gray-300 text-gray-400'
                }`}
              >
                {completedSteps.includes(step) && activeStep !== step ? (
                  <Check className="h-4 w-4" />
                ) : (
                  step.toString().padStart(2, '0')
                )}
              </div>
              <span>{getStepName(step)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );

  // Helper function to get step name
  const getStepName = (step) => {
    switch(step) {
      case 1: return "General Information";
      case 2: return "Benefits";
      case 3: return "Properties";
      case 4: return "FAQ";
      case 5: return "Overview";
      default: return "";
    }
  };

  // Mobile Step Progress Bar
  const renderMobileProgress = () => (
    <div className="mb-6 md:hidden">
      <div className="flex items-center justify-between px-2 mb-2">
        <span className="text-sm text-gray-600">
          Step {activeStep} of 5
        </span>
        <span className="text-sm font-medium text-[#2f5e37]">
          {getStepName(activeStep)}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-[#2f5e37] h-2 rounded-full transition-all duration-300"
          style={{ width: `${(activeStep / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  // Desktop Step Indicator
  const renderDesktopSteps = () => (
    <div className="w-full hidden md:flex flex-col items-center mb-10 mt-4">
      <div className="flex items-center justify-center gap-4 lg:gap-6 relative">
        {[1, 2, 3, 4, 5].map((step) => (
          <React.Fragment key={step}>
            {/* Step Circle */}
            <div className="flex flex-col items-center relative">
              <div className={`
                w-10 h-10 lg:w-11 lg:h-11 rounded-full border-2 flex items-center justify-center 
                font-semibold text-sm
                ${activeStep === step 
                  ? 'border-[#2f5e37] text-white bg-[#2f5e37]' 
                  : completedSteps.includes(step) 
                    ? 'border-[#2f5e37] text-white bg-[#2f5e37]'
                    : 'border-[#b8bbc1] text-[#7d828a] bg-white'
                }`}
              >
                {completedSteps.includes(step) && activeStep !== step ? (
                  <Check className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                ) : (
                  step.toString().padStart(2, '0')
                )}
              </div>
              <p className={`
                text-xs lg:text-sm mt-2 absolute top-full w-24 lg:w-36 text-center whitespace-nowrap
                ${activeStep === step || completedSteps.includes(step) 
                  ? 'text-[#2f5e37] font-semibold' 
                  : 'text-[#7d828a]'
                }`}
              >
                {getStepName(step)}
              </p>
            </div>

            {/* Connector Line (except for last step) */}
            {step < 5 && (
              <div className={`
                w-12 lg:w-20 h-[2px] 
                ${completedSteps.includes(step) ? 'bg-[#2f5e37]' : 'bg-[#c5c7cc]'}
              `}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-6">
      {/* Headers */}
      {renderMobileHeader()}
      {renderDesktopHeader()}

      {/* Mobile Progress */}
      {renderMobileProgress()}

      {/* Mobile Steps Dropdown */}
      {renderMobileSteps()}

      {/* Desktop Step Indicator */}
      {renderDesktopSteps()}

      {/* MAIN CARD */}
      <div className="mt-4 md:mt-0">
        {activeStep === 1 ? (
          <GeneralInformation onNext={handleNextStep} onBack={handleBackStep} />
        ) : activeStep === 2 ? (
          <Benefits onNext={handleNextStep} onBack={handleBackStep} />
        ) : activeStep === 3 ? (
          <Properties onNext={handleNextStep} onBack={handleBackStep} />
        ) : activeStep === 4 ? (
          <FAQ onNext={handleNextStep} onBack={handleBackStep} />
        ) : activeStep === 5 ? (
          <Overview onNext={handleNextStep} onBack={handleBackStep} />
        ) : null}
      </div>
    </div>
  );
};

export default AddProduct;