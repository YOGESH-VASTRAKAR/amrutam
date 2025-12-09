import React, { useState, useEffect } from "react";
import { ChevronRight, Plus, RefreshCcw, Download, ArrowUpDown, Menu, X, ChevronDown } from "lucide-react";
import FAQCustomize from "./FAQCustomize";
import AddNewFAQ from "./AddNewFAQ";

const AppCustomization = () => {
  const [activeTab, setActiveTab] = useState("Banners");
  const [activeUserType, setActiveUserType] = useState("Consumer");
  const [selectedItems, setSelectedItems] = useState([]);
  const [showAddFAQ, setShowAddFAQ] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [showMobileMainTabs, setShowMobileMainTabs] = useState(false);
  const [showMobileUserTabs, setShowMobileUserTabs] = useState(false);

  const tabs = ["Banners", "Per Page Products", "Ingredients", "FAQ"];
  const userTypes = ["Consumer", "Doctor"];
  
  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setMobileView(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const getTextWidth = (text) => {
    const baseWidth = mobileView ? 8 : 10;
    const calculatedWidth = text.length * baseWidth;
    return Math.max(calculatedWidth, mobileView ? 50 : 60);
  };

  const tableData = [
    { id: 1, title: "Homepage Banner", status: "Active", lastUpdated: "2024-12-08" },
    { id: 2, title: "Promotional Banner", status: "Inactive", lastUpdated: "2024-12-07" },
    { id: 3, title: "Category Banner", status: "Active", lastUpdated: "2024-12-06" },
    { id: 4, title: "Product Banner", status: "Active", lastUpdated: "2024-12-05" },
    { id: 5, title: "Special Offer Banner", status: "Inactive", lastUpdated: "2024-12-04" },
  ];

  const handleCheckboxChange = (itemId) => {
    setSelectedItems(prev => {
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectedItems.length === tableData.length) {
      setSelectedItems([]);
    } else {
      const allIds = tableData.map(item => item.id);
      setSelectedItems(allIds);
    }
  };

  const isAllSelected = selectedItems.length === tableData.length && tableData.length > 0;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab !== "FAQ") {
      setShowAddFAQ(false);
    }
    if (mobileView) {
      setShowMobileMainTabs(false);
    }
  };

  const handleUserTypeClick = (userType) => {
    setActiveUserType(userType);
    if (mobileView) {
      setShowMobileUserTabs(false);
    }
  };

  const handleAddFAQClick = () => {
    setShowAddFAQ(true);
  };

  const handleBackToFAQList = () => {
    setShowAddFAQ(false);
  };

  // Mobile Main Tabs Dropdown
  const renderMobileMainTabs = () => (
    <div className="mb-4 md:hidden">
      <button
        className="w-full flex items-center justify-between px-4 py-3 bg-white border rounded-lg shadow-sm"
        onClick={() => setShowMobileMainTabs(!showMobileMainTabs)}
      >
        <span className="font-medium text-gray-700">{activeTab}</span>
        {showMobileMainTabs ? <X size={20} /> : <ChevronDown size={20} />}
      </button>
      
      {showMobileMainTabs && (
        <div className="mt-1 bg-white border rounded-lg shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`w-full text-left px-4 py-3 border-b last:border-b-0 ${
                activeTab === tab
                  ? "bg-green-50 text-[#2f5e37] font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  // Desktop Main Tabs
  const renderDesktopMainTabs = () => (
    <div className="mx-0 mb-6 hidden md:block">
      <div className="bg-white rounded-xl px-4 py-3 shadow-sm" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
        <div className="flex justify-between items-center">
          {tabs.map((tab) => (
            <div key={tab} className="flex-1">
              <div className="flex flex-col items-center relative">
                <button 
                  className={`text-lg font-medium whitespace-nowrap transition-colors w-full text-center px-2 ${
                    activeTab === tab 
                      ? "text-[#2f5e37]" 
                      : "text-gray-400 hover:text-[#2f5e37]"
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
                {activeTab === tab && (
                  <div className="absolute bottom-[-1px] left-1/2 transform -translate-x-1/2">
                    <span 
                      className="h-[2px] bg-[#2f5e37] rounded-sm block"
                      style={{ width: `${getTextWidth(tab)}px` }}
                    ></span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Mobile User Type Tabs
  const renderMobileUserTabs = () => (
    activeTab === "FAQ" && !showAddFAQ && (
      <div className="mb-4 md:hidden">
        <button
          className="w-full flex items-center justify-between px-4 py-3 bg-white border rounded-lg shadow-sm"
          onClick={() => setShowMobileUserTabs(!showMobileUserTabs)}
        >
          <span className="font-medium text-gray-700">{activeUserType}</span>
          {showMobileUserTabs ? <X size={20} /> : <ChevronDown size={20} />}
        </button>
        
        {showMobileUserTabs && (
          <div className="mt-1 bg-white border rounded-lg shadow-lg">
            {userTypes.map((userType) => (
              <button
                key={userType}
                className={`w-full text-left px-4 py-3 border-b last:border-b-0 ${
                  activeUserType === userType
                    ? "bg-green-50 text-[#2f5e37] font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => handleUserTypeClick(userType)}
              >
                {userType}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  );

  // Desktop User Type Tabs
  const renderDesktopUserTabs = () => (
    activeTab === "FAQ" && !showAddFAQ && (
      <div className="mx-0 mb-6 hidden md:block">
        <div className="bg-white rounded-xl px-4 py-3 shadow-sm" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
          <div className="flex justify-center">
            <div className="flex w-full">
              {userTypes.map((userType) => (
                <div key={userType} className="flex-1">
                  <div className="flex flex-col items-center relative">
                    <button 
                      className={`text-lg font-medium whitespace-nowrap transition-colors w-full text-center px-2 ${
                        activeUserType === userType 
                          ? "text-[#2f5e37]" 
                          : "text-gray-400 hover:text-[#2f5e37]"
                      }`}
                      onClick={() => handleUserTypeClick(userType)}
                    >
                      {userType}
                    </button>
                    {activeUserType === userType && (
                      <div className="absolute bottom-[-1px] left-1/2 transform -translate-x-1/2">
                        <span 
                          className="h-[2px] bg-[#2f5e37] rounded-sm block"
                          style={{ width: `${getTextWidth(userType)}px` }}
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
    )
  );

  // Mobile Header with Breadcrumb
  const renderMobileHeader = () => (
    <div className="mb-4 md:hidden">
      <div className="flex items-center justify-between">
        <nav className="flex items-center text-sm text-gray-600">
          <span className="text-[#2f5e37] font-medium truncate max-w-[150px]">
            {activeTab} - {activeUserType}
          </span>
        </nav>
        <div className="flex items-center gap-2">
          {activeTab === "FAQ" && !showAddFAQ && (
            <button 
              onClick={handleAddFAQClick}
              className="bg-[#2f5e37] text-white rounded-lg px-3 py-2 flex items-center justify-center gap-1"
            >
              <Plus size={18} />
              <span className="text-xs">Add FAQ</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );

  // Desktop Header
  const renderDesktopHeader = () => (
    <div className="mb-6 hidden md:block">
      <nav className="flex items-center text-sm text-gray-600 mb-2">
        <span className="text-[#2f5e37]">Customization</span>
        <ChevronRight className="h-4 w-4 mx-2 text-[#2f5e37]" />
        <span className="text-[#2f5e37]">App</span>
        <ChevronRight className="h-4 w-4 mx-2 text-[#2f5e37]" />
        <span className="text-[#2f5e37] font-medium">{activeTab}</span>
      </nav>
    </div>
  );

  // Mobile Search and Actions
  const renderMobileSearchActions = () => (
    !showAddFAQ && (
      <div className="mb-6 md:hidden">
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
            className="w-full pl-10 pr-4 py-3
            bg-[#EEF3EF] text-gray-600
            rounded-xl text-sm placeholder-gray-500
            focus:outline-none"
          />
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="bg-[#EEF3EF] rounded-xl p-2 hover:bg-gray-200 transition">
              <RefreshCcw className="h-5 w-5 text-[#2f5e37]" />
            </button>
            <button className="bg-[#EEF3EF] rounded-xl p-2 hover:bg-gray-200 transition">
              <ArrowUpDown className="h-5 w-5 text-[#2f5e37]" />
            </button>
            <button className="bg-[#EEF3EF] rounded-xl p-2 hover:bg-gray-200 transition">
              <Download className="h-5 w-5 text-[#2f5e37]" />
            </button>
          </div>
          
          {activeTab !== "FAQ" && (
            <button className="bg-[#EEF3EF] rounded-xl p-2 hover:bg-gray-200 transition">
              <Plus className="h-5 w-5 text-[#2f5e37]" />
            </button>
          )}
        </div>
      </div>
    )
  );

  // Desktop Search and Actions
  const renderDesktopSearchActions = () => (
    !showAddFAQ && (
      <div className="hidden md:flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <span className="text-xl font-medium text-gray-800 whitespace-nowrap">
            {activeTab} 
          </span>

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

          {activeTab === "FAQ" ? (
            null
          ) : (
            <button 
              className="bg-[#EEF3EF] rounded-xl px-3 hover:bg-gray-200 transition flex-shrink-0 h-[40px] flex items-center justify-center"
            >
              <Plus className="h-5 w-5 text-[#2f5e37]" />
            </button>
          )}

          <button className="bg-[#EEF3EF] rounded-xl px-3 hover:bg-gray-200 transition h-[40px] flex items-center justify-center">
            <RefreshCcw className="h-5 w-5 text-[#2f5e37]" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          {activeTab === "FAQ" && (
            <button 
              className="bg-[#2f5e37] text-white rounded-xl px-4 hover:bg-[#24502f] transition h-[40px] flex items-center justify-center gap-2"
              onClick={handleAddFAQClick}
            >
              <Plus className="h-5 w-5" />
              <span className="text-sm">Add New FAQ</span>
            </button>
          )}
          
          <button className="bg-[#EEF3EF] rounded-xl px-3 hover:bg-gray-200 transition h-[40px] flex items-center justify-center">
            <ArrowUpDown className="h-5 w-5 text-[#2f5e37]" />
          </button>
          
          <button className="bg-[#EEF3EF] rounded-xl px-3 hover:bg-gray-200 transition h-[40px] flex items-center justify-center">
            <Download className="h-5 w-5 text-[#2f5e37]" />
          </button>
        </div>
      </div>
    )
  );

  // Original content structure (table commented out as per original)
  const renderOriginalContent = () => (
    <div>
      <div className="w-full overflow-x-auto mt-4">
        {/* Commented out table content remains as is */}
        {/* <table className="min-w-max w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="py-4 px-4 text-center w-12">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={handleSelectAll}
                  className="h-4 w-4 cursor-pointer"
                />
              </th>
              <th className="py-4 px-4 font-medium whitespace-nowrap">Title</th>
              <th className="py-4 px-4 font-medium whitespace-nowrap">Status</th>
              <th className="py-4 px-4 font-medium whitespace-nowrap">Last Updated</th>
              <th className="py-4 px-4 font-medium whitespace-nowrap text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="py-5 px-4 text-center">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                    className="h-4 w-4 cursor-pointer"
                  />
                </td>
                
                <td className="py-5 px-4 font-medium">{item.title}</td>
                
                <td className="py-5 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.status}
                  </span>
                </td>
                
                <td className="py-5 px-4 text-gray-600">{item.lastUpdated}</td>
                
                <td className="py-5 px-4">
                  <div className="flex items-center justify-center gap-4">
                    <button className="text-green-700 hover:text-green-800 font-medium text-sm">
                      Edit
                    </button>
                    <button className="text-red-700 hover:text-red-800 font-medium text-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>

      {/* Commented out pagination remains as is */}
      {/* <div className="flex justify-between items-center mt-6 px-1">
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">Rows per page:</span>
          <select className="text-sm border rounded px-2 py-1 bg-white">
            <option>10</option>
            <option>20</option>
            <option>30</option>
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
          <span className="text-gray-600 text-sm">1-8 of 80</span>
        </div>
      </div> */}
    </div>
  );

  return (
    <div className="p-4 md:p-6 min-h-screen">
      {/* Headers */}
      {renderMobileHeader()}
      {renderDesktopHeader()}

      {/* Main Tabs */}
      {renderMobileMainTabs()}
      {renderDesktopMainTabs()}

      {/* User Type Tabs */}
      {renderMobileUserTabs()}
      {renderDesktopUserTabs()}

      {/* Main Content Area */}
      <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100 shadow-sm md:shadow-md" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
        {/* Search and Actions */}
        {renderMobileSearchActions()}
        {renderDesktopSearchActions()}

        {/* Content Section */}
        {activeTab === "FAQ" ? (
          showAddFAQ ? (
            <AddNewFAQ onBack={handleBackToFAQList} />
          ) : (
            <FAQCustomize />
          )
        ) : (
          renderOriginalContent()
        )}
      </div>
    </div>
  );
};

export default AppCustomization;