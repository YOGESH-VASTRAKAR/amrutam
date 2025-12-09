import React, { useState, useEffect } from "react";
import { ChevronRight, TrendingUp, TrendingDown, Menu, X } from "lucide-react";

const doctors = [
  { 
    name: "Dr. Meenal", 
    subtitle: "Gynecology + 2 others", 
    pct: "+8%", 
    up: true, 
    avatar: "/docter1.png"
  },
  { 
    name: "Dr. Pallav", 
    subtitle: "Gynecology + 2 others", 
    pct: "+1%", 
    up: true, 
    avatar: "/docter1.png"
  },
  { 
    name: "Dr. Sapna", 
    subtitle: "Gynecology + 2 others", 
    pct: "-2%", 
    up: false, 
    avatar: "/docter1.png"
  },
];

const products = [
  { 
    name: "Amrutam Nari Sondarya Malt", 
    img: "/af1.png"
  },
  { 
    name: "Amrutam Bhringraj Hair Therapy", 
    img: "/af2.png"
  },
  { 
    name: "Amrutam Lozenge Malt", 
    img: "/af3.png"
  },
];

const StatCard = ({ title, icon, value }) => (
  <div className="bg-white rounded-xl border border-gray-100 p-4 md:p-5 shadow-sm" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
    <div className="flex items-start justify-between">
      <h4 className="text-sm md:text-base text-gray-600 font-medium">{title}</h4>
    </div>

    <div className="flex items-center mt-3 md:mt-4">
      {/* Icon container */}
      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#FBF8E6] mr-3 md:mr-4">
        {icon}
      </div>

      <div className="flex items-baseline gap-2 md:gap-3">
        <div className="text-2xl md:text-3xl font-extrabold text-[#2f5e37] leading-none">
          {value}
        </div>
        <div className="text-xs md:text-sm text-gray-500 mt-1">/month</div>
      </div>
    </div>
  </div>
);

const AffiliateDashboard = () => {
  const [activeTab, setActiveTab] = useState("Month So Far");
  const [mobileView, setMobileView] = useState(false);
  const [showMobileTabs, setShowMobileTabs] = useState(false);

  const tabs = ["Today So Far", "Week So Far", "Month So Far", "Custom"];

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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (mobileView) {
      setShowMobileTabs(false);
    }
  };

  // Mobile Tabs Dropdown
  const renderMobileTabs = () => (
    <div className="mb-6 md:hidden">
      <button
        className="w-full flex items-center justify-between px-4 py-3 bg-white border rounded-lg shadow-sm"
        onClick={() => setShowMobileTabs(!showMobileTabs)}
      >
        <span className="font-medium text-gray-700">{activeTab}</span>
        {showMobileTabs ? <X size={20} /> : <Menu size={20} />}
      </button>
      
      {showMobileTabs && (
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

  // Desktop Tabs - AppCustomization style
  const renderDesktopTabs = () => (
    <div className="mx-0 mb-8 hidden md:block">
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

  // Mobile Header
  const renderMobileHeader = () => (
    <div className="mb-4 md:hidden">
      <div className="flex items-center justify-between">
        <nav className="flex items-center text-sm text-gray-600">
          <span className="text-[#2f5e37] font-medium">Affiliate Dashboard</span>
        </nav>
      </div>
    </div>
  );

  // Desktop Header
  const renderDesktopHeader = () => (
    <div className="mb-4 hidden md:block">
      <nav className="flex items-center text-sm text-gray-600">
        <span className="text-[#2f5e37]">Affiliate</span>
        <ChevronRight className="h-4 w-4 mx-2 text-[#2f5e37]" />
        <span className="text-[#2f5e37] font-medium">Dashboard</span>
      </nav>
    </div>
  );

  // Responsive Doctor Card
  const renderDoctorCard = (d, i) => (
    <div
      key={i}
      className="flex items-center justify-between p-3 rounded-lg bg-white hover:bg-gray-50"
    >
      <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
        {/* left number */}
        <div className="text-gray-500 font-medium w-6 text-right text-sm md:text-base">{i + 1}.</div>

        {/* avatar */}
        <div className="relative flex-shrink-0">
          <img
            src={d.avatar}
            alt={d.name}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-gray-200"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/40?text=DR";
            }}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="font-medium text-gray-800 text-sm md:text-base truncate">{d.name}</div>
          <div className="text-xs md:text-sm text-gray-400 truncate">{d.subtitle}</div>
        </div>
      </div>

      <div className="flex-shrink-0 ml-2">
        <div
          className={`inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-md text-xs md:text-sm font-medium ${
            d.up ? "text-green-700 bg-green-50" : "text-red-700 bg-red-50"
          }`}
        >
          {d.up ? <TrendingUp className="w-3 h-3 md:w-4 md:h-4 mr-1" /> : <TrendingDown className="w-3 h-3 md:w-4 md:h-4 mr-1" />}
          <span>{d.pct}</span>
        </div>
      </div>
    </div>
  );

  // Responsive Product Card
  const renderProductCard = (p, idx) => (
    <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
      <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
        <div className="text-gray-500 font-medium w-6 text-right text-sm md:text-base">{idx + 1}.</div>
        
        {/* product image */}
        <div className="relative flex-shrink-0">
          <img 
            src={p.img} 
            alt={p.name} 
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-gray-200"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/40?text=P";
            }}
          />
        </div>
        
        <div className="font-medium text-gray-800 text-sm md:text-base truncate">{p.name}</div>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-6 min-h-screen">
      {/* Headers */}
      {renderMobileHeader()}
      {renderDesktopHeader()}

      {/* Tabs */}
      {renderMobileTabs()}
      {renderDesktopTabs()}

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        {/* Total Coupons clicks */}
        <StatCard
          title="Total Coupons clicks"
          icon={
            <img 
              src="/appointments.svg" 
              alt="Coupons" 
              className="h-5 w-5 md:h-6 md:w-6"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/24?text=C";
              }}
            />
          }
          value={"255"}
        />
        
        {/* Total Orders */}
        <StatCard
          title="Total Orders"
          icon={
            <img 
              src="/order.svg" 
              alt="Orders" 
              className="h-5 w-5 md:h-6 md:w-6"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/24?text=O";
              }}
            />
          }
          value={"55"}
        />
        
        {/* Total Revenue */}
        <StatCard
          title="Total Revenue"
          icon={
            <img 
              src="/revenue.svg" 
              alt="Revenue" 
              className="h-5 w-5 md:h-6 md:w-6"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/24?text=₹";
              }}
            />
          }
          value={"5,540"}
        />
        
        {/* Total Doctors */}
        <StatCard
          title="Total Doctors"
          icon={
            <img 
              src="/doctor.svg" 
              alt="Doctors" 
              className="h-5 w-5 md:h-6 md:w-6"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/24?text=D";
              }}
            />
          }
          value={"5"}
        />
      </div>

      {/* Main two-column area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Left: Top Affiliate Doctors */}
        <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 border border-gray-100 shadow-sm md:shadow-md" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Top Affiliate Doctors</h3>

          <div className="space-y-3 md:space-y-4">
            {doctors.map((d, i) => renderDoctorCard(d, i))}
          </div>
        </div>

        {/* Right: Top Affiliate Products */}
        <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 border border-gray-100 shadow-sm md:shadow-md" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Top Affiliate Products</h3>

          <div className="space-y-3 md:space-y-4">
            {products.map((p, idx) => renderProductCard(p, idx))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateDashboard;