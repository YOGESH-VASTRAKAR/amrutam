import React from 'react';
import { ChevronRight } from "lucide-react";

const AffiliateSales = () => {
  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="flex items-center text-sm">
          <span className="text-[#2f5e37]">Affiliate</span>
          <ChevronRight className="h-4 w-4 mx-2 text-[#2f5e37]" />
          <span className="text-[#2f5e37] font-medium">Sales</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-800 mt-2">Affiliate Sales</h1>
      </div>

      <div className="bg-white p-6 rounded-2xl" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Sales Tracking</h2>
        </div>
        
        <p className="text-gray-600">Affiliate Sales tracking will appear here.</p>
      </div>
    </div>
  );
};

export default AffiliateSales;