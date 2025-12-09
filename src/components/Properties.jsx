import React, { useState, useRef, useEffect } from "react";
import { X, ChevronDown, ArrowLeft, ChevronRight } from "lucide-react";

const Properties = ({ onNext, onBack }) => {
  const [mobileView, setMobileView] = useState(false);
  
  const [dosageItems, setDosageItems] = useState([
    {
      icon: null,
      title: "Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been.",
    },
    {
      icon: null,
      title: "Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been.",
    },
  ]);

  const [usageItems, setUsageItems] = useState([
    {
      icon: null,
      title: "Lorem Ipsum",
      description: "Lorem Ipsum",
    },
    {
      icon: null,
      title: "Lorem Ipsum",
      description: "Lorem Ipsum",
    },
    {
      icon: null,
      title: "Lorem Ipsum",
      description: "Lorem Ipsum",
    },
  ]);

  const [primaryIngredients, setPrimaryIngredients] = useState([
    { 
      id: 1,
      selected: "Select ingredient*",
      selectedImage: null,
      isOpen: false,
    }
  ]);

  const [allIngredients, setAllIngredients] = useState([
    { 
      id: 1,
      selected: "Select ingredient*",
      selectedImage: null,
      isOpen: false,
    }
  ]);

  const [durationItems, setDurationItems] = useState([
    {
      icon: null,
      title: "Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been.",
    },
  ]);

  const ingredientOptions = [
    { name: "Bhringraj", image: "/item1.png" },
    { name: "Sariva", image: "/item2.png" },
    { name: "Gudahal", image: "/item3.png" },
    { name: "Jatamansi", image: "/item4.png" }
  ];

  const primaryDropdownRefs = useRef([]);
  const allDropdownRefs = useRef([]);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setMobileView(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      primaryIngredients.forEach((_, index) => {
        if (primaryDropdownRefs.current[index] && 
            !primaryDropdownRefs.current[index].contains(event.target)) {
          handleClosePrimaryDropdown(index);
        }
      });

      allIngredients.forEach((_, index) => {
        if (allDropdownRefs.current[index] && 
            !allDropdownRefs.current[index].contains(event.target)) {
          handleCloseAllDropdown(index);
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [primaryIngredients, allIngredients]);

  // Add new dosage item
  const addDosageItem = () => {
    setDosageItems([
      ...dosageItems,
      {
        icon: null,
        title: "",
      },
    ]);
  };

  // Add new usage item
  const addUsageItem = () => {
    setUsageItems([
      ...usageItems,
      {
        icon: null,
        title: "",
        description: "",
      },
    ]);
  };

  // Add new primary ingredient
  const addPrimaryIngredient = () => {
    setPrimaryIngredients([
      ...primaryIngredients,
      { 
        id: Date.now(),
        selected: "Select ingredient*",
        selectedImage: null,
        isOpen: false,
      }
    ]);
  };

  // Add new all ingredient
  const addAllIngredient = () => {
    setAllIngredients([
      ...allIngredients,
      { 
        id: Date.now(),
        selected: "Select ingredient*",
        selectedImage: null,
        isOpen: false,
      }
    ]);
  };

  // Remove primary ingredient
  const removePrimaryIngredient = (index) => {
    if (primaryIngredients.length > 1) {
      const updated = primaryIngredients.filter((_, i) => i !== index);
      setPrimaryIngredients(updated);
    }
  };

  // Remove all ingredient
  const removeAllIngredient = (index) => {
    if (allIngredients.length > 1) {
      const updated = allIngredients.filter((_, i) => i !== index);
      setAllIngredients(updated);
    }
  };

  // Toggle primary ingredient dropdown
  const togglePrimaryDropdown = (index) => {
    const updated = [...primaryIngredients];
    updated[index].isOpen = !updated[index].isOpen;
    setPrimaryIngredients(updated);
  };

  // Close primary ingredient dropdown
  const handleClosePrimaryDropdown = (index) => {
    const updated = [...primaryIngredients];
    updated[index].isOpen = false;
    setPrimaryIngredients(updated);
  };

  // Select primary ingredient
  const selectPrimaryIngredient = (index, ingredient) => {
    const updated = [...primaryIngredients];
    updated[index].selected = ingredient.name;
    updated[index].selectedImage = ingredient.image;
    updated[index].isOpen = false;
    setPrimaryIngredients(updated);
  };

  // Toggle all ingredient dropdown
  const toggleAllDropdown = (index) => {
    const updated = [...allIngredients];
    updated[index].isOpen = !updated[index].isOpen;
    setAllIngredients(updated);
  };

  // Close all ingredient dropdown
  const handleCloseAllDropdown = (index) => {
    const updated = [...allIngredients];
    updated[index].isOpen = false;
    setAllIngredients(updated);
  };

  // Select all ingredient
  const selectAllIngredient = (index, ingredient) => {
    const updated = [...allIngredients];
    updated[index].selected = ingredient.name;
    updated[index].selectedImage = ingredient.image;
    updated[index].isOpen = false;
    setAllIngredients(updated);
  };

  // Add new duration item
  const addDurationItem = () => {
    setDurationItems([
      ...durationItems,
      {
        icon: null,
        title: "",
      },
    ]);
  };

  // Remove duration item
  const removeDurationItem = (index) => {
    if (durationItems.length > 1) {
      const updated = durationItems.filter((_, i) => i !== index);
      setDurationItems(updated);
    }
  };

  // Mobile Header
  const renderMobileHeader = () => (
    <div className="md:hidden mb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Properties</h2>
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
      <h2 className="text-xl font-semibold text-gray-900">Properties</h2>
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[#2f5e37] font-medium"
      >
        <ArrowLeft size={18} />
        Back
      </button>
    </div>
  );

  // Mobile Dosage Section
  const renderMobileDosage = () => (
    <div className="md:hidden mb-6">
      <h3 className="text-base font-semibold text-gray-900 mb-3">Dosage</h3>
      {dosageItems.map((item, index) => (
        <div key={index} className="mb-4">
          {/* Icon Box */}
          <div className="w-full h-[50px] border-[2px] border-dashed border-[#bcd1b2] bg-[#f3f8f0] rounded-lg flex items-center justify-center cursor-pointer mb-2">
            <div className="flex items-center gap-2">
              <img src="/smile2.svg" alt="Smile Icon" className="w-5 h-5" />
              <span className="text-xs text-[#2f5e37]">Add Icon</span>
            </div>
          </div>

          {/* Title Input and Delete */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={item.title}
              placeholder="Lorem Ipsum is Simply Dummy Text..."
              onChange={(e) => {
                const updated = [...dosageItems];
                updated[index].title = e.target.value;
                setDosageItems(updated);
              }}
              className="flex-1 h-[50px] border border-[#d6d9de] rounded-lg px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400"
            />
            <button className="text-[#2f5e37] h-[50px] flex items-center">
              <X size={18} />
            </button>
          </div>
        </div>
      ))}
      <button onClick={addDosageItem} className="text-[#2f5e37] font-medium text-xs">
        Add Another Items
      </button>
      <div className="h-[1px] bg-gray-200 my-4"></div>
    </div>
  );

  // Desktop Dosage Section
  const renderDesktopDosage = () => (
    <div className="hidden md:block mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Dosage</h3>
      {dosageItems.map((item, index) => (
        <div key={index} className="flex items-center gap-4 mb-4">
          {/* Icon Box */}
          <div className="w-[150px] h-[50px] border-[2px] border-dashed border-[#bcd1b2] bg-[#f3f8f0] rounded-xl flex items-center justify-center cursor-pointer flex-shrink-0">
            <div className="flex items-center gap-3 px-3">
              <img src="/smile2.svg" alt="Smile Icon" className="w-6 h-6" />
              <span className="text-sm text-[#2f5e37]">Add Icon</span>
            </div>
          </div>

          {/* Title Input */}
          <div className="flex-1">
            <input
              type="text"
              value={item.title}
              placeholder="Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been."
              onChange={(e) => {
                const updated = [...dosageItems];
                updated[index].title = e.target.value;
                setDosageItems(updated);
              }}
              className="w-full h-[50px] border border-[#d6d9de] rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400"
            />
          </div>

          {/* Delete Button */}
          <button className="text-[#2f5e37] h-[50px] flex items-center">
            <X size={22} />
          </button>
        </div>
      ))}
      <button onClick={addDosageItem} className="text-[#2f5e37] font-medium text-sm mb-6">
        Add Another Items
      </button>
      <div className="h-[1px] bg-gray-200 my-6"></div>
    </div>
  );

  // Mobile Usage Section
  const renderMobileUsage = () => (
    <div className="md:hidden mb-6">
      <h3 className="text-base font-semibold text-gray-900 mb-3">Usage</h3>
      {usageItems.map((item, index) => (
        <div key={index} className="mb-4">
          {/* Icon Box */}
          <div className="w-full h-[50px] border-[2px] border-dashed border-[#bcd1b2] bg-[#f3f8f0] rounded-lg flex items-center justify-center cursor-pointer mb-2">
            <div className="flex items-center gap-2">
              <img src="/smile2.svg" alt="Smile Icon" className="w-5 h-5" />
              <span className="text-xs text-[#2f5e37]">Add Icon</span>
            </div>
          </div>

          {/* Title Input */}
          <input
            type="text"
            value={item.title}
            placeholder="Lorem Ipsum"
            onChange={(e) => {
              const updated = [...usageItems];
              updated[index].title = e.target.value;
              setUsageItems(updated);
            }}
            className="w-full h-[50px] border border-[#d6d9de] rounded-lg px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 mb-2"
          />

          {/* Description Input and Delete */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={item.description}
              placeholder="Lorem Ipsum"
              onChange={(e) => {
                const updated = [...usageItems];
                updated[index].description = e.target.value;
                setUsageItems(updated);
              }}
              className="flex-1 h-[50px] border border-[#d6d9de] rounded-lg px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400"
            />
            <button className="text-[#2f5e37] h-[50px] flex items-center">
              <X size={18} />
            </button>
          </div>
        </div>
      ))}
      <button onClick={addUsageItem} className="text-[#2f5e37] font-medium text-xs">
        Add Another Items
      </button>
      <div className="h-[1px] bg-gray-200 my-4"></div>
    </div>
  );

  // Desktop Usage Section
  const renderDesktopUsage = () => (
    <div className="hidden md:block mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage</h3>
      {usageItems.map((item, index) => (
        <div key={index} className="flex items-center gap-4 mb-4">
          {/* Icon Box */}
          <div className="w-[150px] h-[50px] border-[2px] border-dashed border-[#bcd1b2] bg-[#f3f8f0] rounded-xl flex items-center justify-center cursor-pointer flex-shrink-0">
            <div className="flex items-center gap-3 px-3">
              <img src="/smile2.svg" alt="Smile Icon" className="w-6 h-6" />
              <span className="text-sm text-[#2f5e37]">Add Icon</span>
            </div>
          </div>

          {/* First Input Field */}
          <input
            type="text"
            value={item.title}
            placeholder="Lorem Ipsum"
            onChange={(e) => {
              const updated = [...usageItems];
              updated[index].title = e.target.value;
              setUsageItems(updated);
            }}
            className="flex-1 h-[50px] border border-[#d6d9de] rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400"
          />

          {/* Second Input Field */}
          <input
            type="text"
            value={item.description}
            placeholder="Lorem Ipsum"
            onChange={(e) => {
              const updated = [...usageItems];
              updated[index].description = e.target.value;
              setUsageItems(updated);
            }}
            className="flex-1 h-[50px] border border-[#d6d9de] rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400"
          />

          {/* Delete Button */}
          <button className="text-[#2f5e37] h-[50px] flex items-center">
            <X size={22} />
          </button>
        </div>
      ))}
      <button onClick={addUsageItem} className="text-[#2f5e37] font-medium text-sm mb-6">
        Add Another Items
      </button>
      <div className="h-[1px] bg-gray-200 my-6"></div>
    </div>
  );

  // Mobile Primary Ingredients
  const renderMobilePrimaryIngredients = () => (
    <div className="md:hidden mb-6">
      <h3 className="text-base font-semibold text-gray-900 mb-3">Primary Ingredients</h3>
      {primaryIngredients.map((ingredient, index) => (
        <div key={ingredient.id} className="mb-4 relative">
          <div 
            ref={el => primaryDropdownRefs.current[index] = el}
            className="relative"
          >
            <fieldset className="border border-gray-300 rounded-lg px-3 pb-2">
              <legend className="text-gray-700 px-1 text-xs">
                Select ingredient*
              </legend>
              <div 
                className="w-full mt-1"
                onClick={() => togglePrimaryDropdown(index)}
              >
                <div className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    {ingredient.selectedImage && (
                      <img 
                        src={ingredient.selectedImage} 
                        alt={ingredient.selected}
                        className="w-5 h-5 object-cover"
                      />
                    )}
                    <span className="text-gray-700 text-xs">
                      {ingredient.selected}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChevronDown className={`text-gray-400 transition-transform ${ingredient.isOpen ? 'rotate-180' : ''}`} size={16} />
                  </div>
                </div>
              </div>
            </fieldset>

            {/* DROPDOWN MENU WITH IMAGES */}
            {ingredient.isOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 overflow-hidden">
                <div className="py-2">
                  {ingredientOptions.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`px-3 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2 ${ingredient.selected === option.name ? 'bg-gray-50 text-[#2f5e37]' : 'text-gray-700'}`}
                      onClick={() => selectPrimaryIngredient(index, option)}
                    >
                      <img 
                        src={option.image} 
                        alt={option.name}
                        className="w-10 h-10 object-cover"
                      />
                      <span className="text-xs">{option.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Delete Button */}
          <div className="flex justify-end mt-2">
            <button 
              onClick={() => removePrimaryIngredient(index)}
              className="text-[#2f5e37] flex items-center text-xs"
              disabled={primaryIngredients.length === 1}
            >
              <X size={16} />
              <span className="ml-1">Remove</span>
            </button>
          </div>
        </div>
      ))}
      <button onClick={addPrimaryIngredient} className="text-[#2f5e37] font-medium text-xs">
        Add Another Ingredients
      </button>
      <div className="h-[1px] bg-gray-200 my-4"></div>
    </div>
  );

  // Desktop Primary Ingredients
  const renderDesktopPrimaryIngredients = () => (
    <div className="hidden md:block mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Primary Ingredients</h3>
      {primaryIngredients.map((ingredient, index) => (
        <div key={ingredient.id} className="flex items-center gap-4 mb-4 relative">
          {/* Fieldset Container with dropdown */}
          <div 
            ref={el => primaryDropdownRefs.current[index] = el}
            className="flex-1 relative"
          >
            <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
              <legend className="text-gray-700 px-1 text-sm">
                Select ingredient*
              </legend>
              <div 
                className="w-full mt-1"
                onClick={() => togglePrimaryDropdown(index)}
              >
                <div className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-3">
                    {ingredient.selectedImage && (
                      <img 
                        src={ingredient.selectedImage} 
                        alt={ingredient.selected}
                        className="w-6 h-6 object-cover"
                      />
                    )}
                    <span className="text-gray-700 text-sm">
                      {ingredient.selected}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronDown className={`text-gray-400 transition-transform ${ingredient.isOpen ? 'rotate-180' : ''}`} size={18} />
                  </div>
                </div>
              </div>
            </fieldset>

            {/* DROPDOWN MENU WITH IMAGES */}
            {ingredient.isOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-xl shadow-lg z-10 overflow-hidden">
                <div className="py-2">
                  {ingredientOptions.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 ${ingredient.selected === option.name ? 'bg-gray-50 text-[#2f5e37]' : 'text-gray-700'}`}
                      onClick={() => selectPrimaryIngredient(index, option)}
                    >
                      <img 
                        src={option.image} 
                        alt={option.name}
                        className="w-14 h-14 object-cover"
                      />
                      <span className="text-sm">{option.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Delete Button */}
          <button 
            onClick={() => removePrimaryIngredient(index)}
            className="text-[#2f5e37] h-[52px] flex items-center"
            disabled={primaryIngredients.length === 1}
          >
            <X size={22} />
          </button>
        </div>
      ))}
      <button onClick={addPrimaryIngredient} className="text-[#2f5e37] font-medium text-sm mb-6">
        Add Another Ingredients
      </button>
      <div className="h-[1px] bg-gray-200 my-6"></div>
    </div>
  );

  // Mobile All Ingredients
  const renderMobileAllIngredients = () => (
    <div className="md:hidden mb-6">
      <h3 className="text-base font-semibold text-gray-900 mb-3">All Ingredients</h3>
      {allIngredients.map((ingredient, index) => (
        <div key={ingredient.id} className="mb-4 relative">
          <div 
            ref={el => allDropdownRefs.current[index] = el}
            className="relative"
          >
            <fieldset className="border border-gray-300 rounded-lg px-3 pb-2">
              <legend className="text-gray-700 px-1 text-xs">
                Select ingredient*
              </legend>
              <div 
                className="w-full mt-1"
                onClick={() => toggleAllDropdown(index)}
              >
                <div className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    {ingredient.selectedImage && (
                      <img 
                        src={ingredient.selectedImage} 
                        alt={ingredient.selected}
                        className="w-5 h-5 object-cover"
                      />
                    )}
                    <span className="text-gray-700 text-xs">
                      {ingredient.selected}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChevronDown className={`text-gray-400 transition-transform ${ingredient.isOpen ? 'rotate-180' : ''}`} size={16} />
                  </div>
                </div>
              </div>
            </fieldset>

            {/* DROPDOWN MENU WITH IMAGES */}
            {ingredient.isOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 overflow-hidden">
                <div className="py-2">
                  {ingredientOptions.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`px-3 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2 ${ingredient.selected === option.name ? 'bg-gray-50 text-[#2f5e37]' : 'text-gray-700'}`}
                      onClick={() => selectAllIngredient(index, option)}
                    >
                      <img 
                        src={option.image} 
                        alt={option.name}
                        className="w-10 h-10 object-cover"
                      />
                      <span className="text-xs">{option.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Delete Button */}
          <div className="flex justify-end mt-2">
            <button 
              onClick={() => removeAllIngredient(index)}
              className="text-[#2f5e37] flex items-center text-xs"
              disabled={allIngredients.length === 1}
            >
              <X size={16} />
              <span className="ml-1">Remove</span>
            </button>
          </div>
        </div>
      ))}
      <button onClick={addAllIngredient} className="text-[#2f5e37] font-medium text-xs">
        Add Another Ingredients
      </button>
      <div className="h-[1px] bg-gray-200 my-4"></div>
    </div>
  );

  // Desktop All Ingredients
  const renderDesktopAllIngredients = () => (
    <div className="hidden md:block mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">All Ingredients</h3>
      {allIngredients.map((ingredient, index) => (
        <div key={ingredient.id} className="flex items-center gap-4 mb-4 relative">
          {/* Fieldset Container with dropdown */}
          <div 
            ref={el => allDropdownRefs.current[index] = el}
            className="flex-1 relative"
          >
            <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
              <legend className="text-gray-700 px-1 text-sm">
                Select ingredient*
              </legend>
              <div 
                className="w-full mt-1"
                onClick={() => toggleAllDropdown(index)}
              >
                <div className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-3">
                    {ingredient.selectedImage && (
                      <img 
                        src={ingredient.selectedImage} 
                        alt={ingredient.selected}
                        className="w-6 h-6 object-cover"
                      />
                    )}
                    <span className="text-gray-700 text-sm">
                      {ingredient.selected}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronDown className={`text-gray-400 transition-transform ${ingredient.isOpen ? 'rotate-180' : ''}`} size={18} />
                  </div>
                </div>
              </div>
            </fieldset>

            {/* DROPDOWN MENU WITH IMAGES */}
            {ingredient.isOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-xl shadow-lg z-10 overflow-hidden">
                <div className="py-2">
                  {ingredientOptions.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 ${ingredient.selected === option.name ? 'bg-gray-50 text-[#2f5e37]' : 'text-gray-700'}`}
                      onClick={() => selectAllIngredient(index, option)}
                    >
                      <img 
                        src={option.image} 
                        alt={option.name}
                        className="w-14 h-14 object-cover"
                      />
                      <span className="text-sm">{option.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Delete Button */}
          <button 
            onClick={() => removeAllIngredient(index)}
            className="text-[#2f5e37] h-[52px] flex items-center"
            disabled={allIngredients.length === 1}
          >
            <X size={22} />
          </button>
        </div>
      ))}
      <button onClick={addAllIngredient} className="text-[#2f5e37] font-medium text-sm mb-6">
        Add Another Ingredients
      </button>
      <div className="h-[1px] bg-gray-200 my-6"></div>
    </div>
  );

  // Mobile Duration
  const renderMobileDuration = () => (
    <div className="md:hidden">
      <h3 className="text-base font-semibold text-gray-900 mb-3">Duration</h3>
      {durationItems.map((item, index) => (
        <div key={index} className="mb-4">
          {/* Icon Box */}
          <div className="w-full h-[50px] border-[2px] border-dashed border-[#bcd1b2] bg-[#f3f8f0] rounded-lg flex items-center justify-center cursor-pointer mb-2">
            <div className="flex items-center gap-2">
              <img src="/smile2.svg" alt="Smile Icon" className="w-5 h-5" />
              <span className="text-xs text-[#2f5e37]">Add Icon</span>
            </div>
          </div>

          {/* Title Input and Delete */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={item.title}
              placeholder="Lorem Ipsum is Simply Dummy Text..."
              onChange={(e) => {
                const updated = [...durationItems];
                updated[index].title = e.target.value;
                setDurationItems(updated);
              }}
              className="flex-1 h-[50px] border border-[#d6d9de] rounded-lg px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400"
            />
            <button 
              onClick={() => removeDurationItem(index)}
              className="text-[#2f5e37] h-[50px] flex items-center"
              disabled={durationItems.length === 1}
            >
              <X size={18} />
            </button>
          </div>
        </div>
      ))}
      <button onClick={addDurationItem} className="text-[#2f5e37] font-medium text-xs">
        Add Another Items
      </button>
    </div>
  );

  // Desktop Duration
  const renderDesktopDuration = () => (
    <div className="hidden md:block mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Duration</h3>
      {durationItems.map((item, index) => (
        <div key={index} className="flex items-center gap-4 mb-4">
          {/* Icon Box */}
          <div className="w-[150px] h-[50px] border-[2px] border-dashed border-[#bcd1b2] bg-[#f3f8f0] rounded-xl flex items-center justify-center cursor-pointer flex-shrink-0">
            <div className="flex items-center gap-3 px-3">
              <img src="/smile2.svg" alt="Smile Icon" className="w-6 h-6" />
              <span className="text-sm text-[#2f5e37]">Add Icon</span>
            </div>
          </div>

          {/* Title Input */}
          <div className="flex-1">
            <input
              type="text"
              value={item.title}
              placeholder="Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been."
              onChange={(e) => {
                const updated = [...durationItems];
                updated[index].title = e.target.value;
                setDurationItems(updated);
              }}
              className="w-full h-[50px] border border-[#d6d9de] rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400"
            />
          </div>

          {/* Delete Button */}
          <button 
            onClick={() => removeDurationItem(index)}
            className="text-[#2f5e37] h-[50px] flex items-center"
            disabled={durationItems.length === 1}
          >
            <X size={22} />
          </button>
        </div>
      ))}
      <button onClick={addDurationItem} className="text-[#2f5e37] font-medium text-sm mb-6">
        Add Another Items
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

        {/* Dosage Sections */}
        {renderMobileDosage()}
        {renderDesktopDosage()}

        {/* Usage Sections */}
        {renderMobileUsage()}
        {renderDesktopUsage()}

        {/* Primary Ingredients Sections */}
        {renderMobilePrimaryIngredients()}
        {renderDesktopPrimaryIngredients()}

        {/* All Ingredients Sections */}
        {renderMobileAllIngredients()}
        {renderDesktopAllIngredients()}

        {/* Duration Sections */}
        {renderMobileDuration()}
        {renderDesktopDuration()}
      </div>

      {/* Buttons */}
      {renderMobileButtons()}
      {renderDesktopButtons()}
    </div>
  );
};

export default Properties;