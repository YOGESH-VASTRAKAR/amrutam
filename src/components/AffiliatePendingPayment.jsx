import React, { useState, useEffect } from "react";
import { ChevronRight, Plus, RotateCcw, Download, ArrowUpDown, Menu, X } from "lucide-react";

const AffiliatePendingPayment = () => {
  const [selectedPayments, setSelectedPayments] = useState([]);
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

  // Doctor data with payment requests and images
  const pendingPayments = [
    { 
      id: 1, 
      name: "Isobel Wizo", 
      image: "pd1.jpg",
      email: "alinamath@gmail.com", 
      mobile: "+91 8805322849", 
      amountWithdrawal: "4,290",
      requestedDate: "Feb 2024",
      walletAmount: "30,000",
      details: "View All"
    },
    { 
      id: 2, 
      name: "Soumyo Moheswai", 
      image: "pd2.jpg",
      email: "alinamath@gmail.com", 
      mobile: "+91 8805322849", 
      amountWithdrawal: "5,290",
      requestedDate: "Feb 2024",
      walletAmount: "30,000",
      details: "View All"
    },
    { 
      id: 3, 
      name: "Margie O'Reiley", 
      image: "pd3.jpg",
      email: "alinamath@gmail.com", 
      mobile: "+91 8805322849", 
      amountWithdrawal: "4,290",
      requestedDate: "Feb 2024",
      walletAmount: "30,000",
      details: "View All"
    },
    { 
      id: 4, 
      name: "Lucas Legros", 
      image: "pd4.jpg",
      email: "alinamath@gmail.com", 
      mobile: "+91 8805322849", 
      amountWithdrawal: "4,290",
      requestedDate: "Feb 2024",
      walletAmount: "30,000",
      details: "View All"
    },
    { 
      id: 5, 
      name: "Shanelle Ziemann", 
      image: "pd5.jpg",
      email: "alinamath@gmail.com", 
      mobile: "+91 8805322849", 
      amountWithdrawal: "5,290",
      requestedDate: "Feb 2024",
      walletAmount: "30,000",
      details: "View All"
    }
  ];

  const handleCheckboxChange = (paymentId) => {
    setSelectedPayments(prev => {
      if (prev.includes(paymentId)) {
        return prev.filter(id => id !== paymentId);
      } else {
        return [...prev, paymentId];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectedPayments.length === pendingPayments.length) {
      setSelectedPayments([]);
    } else {
      const allIds = pendingPayments.map(payment => payment.id);
      setSelectedPayments(allIds);
    }
  };

  const isAllSelected = selectedPayments.length === pendingPayments.length && pendingPayments.length > 0;

  // Mobile Header
  const renderMobileHeader = () => (
    <div className="mb-4 md:hidden">
      <div className="flex items-center justify-between">
        <nav className="flex items-center text-sm">
          <span className="text-[#2f5e37] font-medium">Pending Payment</span>
        </nav>
      </div>
    </div>
  );

  // Desktop Header
  const renderDesktopHeader = () => (
    <div className="mb-6 hidden md:block">
      <nav className="flex items-center text-sm">
        <span className="text-[#2f5e37]">Affiliate</span>
        <ChevronRight className="h-4 w-4 mx-2 text-[#2f5e37]" />
        <span className="text-[#2f5e37]">Payment</span>
        <ChevronRight className="h-4 w-4 mx-2 text-[#2f5e37]" />
        <span className="text-[#2f5e37] font-medium">Pending Payment</span>
      </nav>
    </div>
  );

  // Mobile Payment Card
  const renderMobilePaymentCard = (payment) => (
    <div key={payment.id} className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={selectedPayments.includes(payment.id)}
            onChange={() => handleCheckboxChange(payment.id)}
            className="w-4 h-4 cursor-pointer"
          />
          <img
            src={payment.image}
            alt={payment.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="font-medium text-gray-800">{payment.name}</div>
            <div className="text-xs text-gray-500">Doctor</div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 text-sm mb-3">
        <div>
          <div className="text-gray-500 text-xs">Email</div>
          <div className="font-medium truncate">{payment.email}</div>
        </div>
        <div>
          <div className="text-gray-500 text-xs">Mobile</div>
          <div className="font-medium">{payment.mobile}</div>
        </div>
        <div>
          <div className="text-gray-500 text-xs">Withdrawal</div>
          <div className="font-medium">₹{payment.amountWithdrawal}</div>
        </div>
        <div>
          <div className="text-gray-500 text-xs">Requested Date</div>
          <div className="font-medium">{payment.requestedDate}</div>
        </div>
        <div>
          <div className="text-gray-500 text-xs">Wallet Amount</div>
          <div className="font-medium">₹{payment.walletAmount}</div>
        </div>
        <div>
          <div className="text-gray-500 text-xs">Details</div>
          <button className="text-[#2f5e37] hover:underline text-xs">
            {payment.details}
          </button>
        </div>
      </div>
      
      {/* Approval Actions */}
      <div className="flex items-center justify-between pt-3 border-t">
        <div className="text-gray-500 text-xs">
          Status: <span className="text-yellow-600 font-medium">Pending</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-green-700 hover:text-green-800 font-medium text-sm px-3 py-1 bg-green-50 rounded-lg">
            Accept
          </button>
          <button className="text-red-700 hover:text-red-800 font-medium text-sm px-3 py-1 bg-red-50 rounded-lg">
            Decline
          </button>
        </div>
      </div>
    </div>
  );

  // Mobile Table View
  const renderMobileTable = () => (
    <div className="md:hidden">
      <div className="bg-white rounded-xl p-4 shadow-sm">
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

        {/* Action Buttons */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <button className="bg-[#EEF3EF] rounded-xl p-2 hover:bg-gray-200 transition">
              <RotateCcw className="h-5 w-5 text-[#2f5e37]" />
            </button>
            <button className="bg-[#EEF3EF] rounded-xl p-2 hover:bg-gray-200 transition">
              <Download className="h-5 w-5 text-[#2f5e37]" />
            </button>
            <button className="bg-[#EEF3EF] rounded-xl p-2 hover:bg-gray-200 transition">
              <Plus className="h-5 w-5 text-[#2f5e37]" />
            </button>
          </div>
          <button className="bg-[#EEF3EF] rounded-xl p-2 hover:bg-gray-200 transition">
            <ArrowUpDown className="h-5 w-5 text-[#2f5e37]" />
          </button>
        </div>

        {/* Title */}
        <h2 className="text-lg font-medium text-gray-800 mb-3">Pending Payment Request</h2>

        {/* Select All */}
        <div className="flex items-center gap-2 mb-3">
          <input
            type="checkbox"
            id="selectAllMobile"
            checked={isAllSelected}
            onChange={handleSelectAll}
            className="w-4 h-4 cursor-pointer"
          />
          <label htmlFor="selectAllMobile" className="text-gray-500 text-sm cursor-pointer">
            Select All ({selectedPayments.length}/{pendingPayments.length})
          </label>
        </div>

        {/* Payment Cards */}
        <div className="space-y-3">
          {pendingPayments.map(renderMobilePaymentCard)}
        </div>

        {/* Mobile Pagination */}
        <div className="flex flex-col gap-3 mt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">Rows:</span>
              <select className="text-sm border rounded px-2 py-1 bg-white">
                <option>5</option>
                <option>10</option>
                <option>20</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-lg bg-[#2f5e37] text-white text-sm">1</button>
              <div className="flex items-center gap-1">
                <button className="p-1 rounded hover:bg-gray-100">
                  <span className="text-gray-600">{'<'}</span>
                </button>
                <button className="p-1 rounded hover:bg-gray-100">
                  <span className="text-gray-600">{'>'}</span>
                </button>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm">
            Showing 1-5 of {pendingPayments.length}
          </div>
        </div>
      </div>
    </div>
  );

  // Desktop Table View
  const renderDesktopTable = () => (
    <div className="hidden md:block">
      <div
        className="bg-white rounded-2xl p-6"
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        {/* Top Row - EXACTLY like reference code */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          {/* Left Section */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <span className="text-2xl font-medium text-gray-800 whitespace-nowrap">
              Pending Payment Request
            </span>

            {/* Search Bar - EXACTLY like reference code with SVG icon */}
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

            {/* Plus Button - Added between search and reload */}
            <button 
              className="bg-[#EEF3EF] rounded-xl px-3 hover:bg-gray-200 transition flex-shrink-0 h-[40px] flex items-center justify-center"
            >
              <Plus className="h-5 w-5 text-[#2f5e37]" />
            </button>

            {/* Reload Button on LEFT side */}
            <button className="bg-[#EEF3EF] rounded-xl px-3 hover:bg-gray-200 transition h-[40px] flex items-center justify-center">
              <RotateCcw className="h-5 w-5 text-[#2f5e37]" />
            </button>
          </div>

          {/* Right Section - Sort icon added before Download button */}
          <div className="flex items-center gap-3">
            {/* Sort Button */}
            <button className="bg-[#EEF3EF] rounded-xl px-3 hover:bg-gray-200 transition h-[40px] flex items-center justify-center">
              <ArrowUpDown className="h-5 w-5 text-[#2f5e37]" />
            </button>
            
            {/* Download button */}
            <button className="bg-[#EEF3EF] rounded-xl px-3 hover:bg-gray-200 transition h-[40px] flex items-center justify-center">
              <Download className="h-5 w-5 text-[#2f5e37]" />
            </button>
          </div>
        </div>

        {/* 🌟 IMPROVED TABLE WRAPPER */}
        <div className="w-full overflow-x-auto mt-4">
          <table className="min-w-max w-full text-sm">
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
                <th className="py-4 px-4 font-medium whitespace-nowrap">Doctor Name</th>
                <th className="py-4 px-4 font-medium whitespace-nowrap">Email–Id</th>
                <th className="py-4 px-4 font-medium whitespace-nowrap">Mobile</th>
                <th className="py-4 px-4 font-medium whitespace-nowrap">Amount Withdrawal</th>
                <th className="py-4 px-4 font-medium whitespace-nowrap">Requested Date</th>
                <th className="py-4 px-4 font-medium whitespace-nowrap">Wallet Amount</th>
                <th className="py-4 px-4 font-medium whitespace-nowrap">Details</th>
                <th className="py-4 px-4 font-medium whitespace-nowrap text-center">Approval</th>
              </tr>
            </thead>

            <tbody>
              {pendingPayments.map((payment) => (
                <tr key={payment.id} className="border-b hover:bg-gray-50">
                  {/* Checkbox Column */}
                  <td className="py-5 px-4 text-center">
                    <input
                      type="checkbox"
                      checked={selectedPayments.includes(payment.id)}
                      onChange={() => handleCheckboxChange(payment.id)}
                      className="h-4 w-4 cursor-pointer"
                    />
                  </td>
                  
                  {/* Doctor Name with Image */}
                  <td className="py-5 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={payment.image}
                        alt={payment.name}
                        className="w-11 h-11 rounded-full object-cover"
                      />
                      <div className="font-medium text-[15px]">{payment.name}</div>
                    </div>
                  </td>
                  
                  {/* Email */}
                  <td className="py-5 px-4">{payment.email}</td>
                  
                  {/* Mobile */}
                  <td className="py-5 px-4">{payment.mobile}</td>
                  
                  {/* Amount Withdrawal */}
                  <td className="py-5 px-4 font-medium">₹{payment.amountWithdrawal}</td>
                  
                  {/* Requested Date */}
                  <td className="py-5 px-4">{payment.requestedDate}</td>
                  
                  {/* Wallet Amount */}
                  <td className="py-5 px-4 font-medium">₹{payment.walletAmount}</td>
                  
                  {/* Details - View All Button */}
                  <td className="py-5 px-4">
                    <button className="text-gray-700 hover:underline text-sm">
                      {payment.details}
                    </button>
                  </td>
                  
                  {/* Approval Actions */}
                  <td className="py-5 px-4">
                    <div className="flex items-center justify-center gap-4">
                      <button className="text-green-700 hover:text-green-800 font-medium text-sm">
                        Accept
                      </button>
                      <button className="text-red-700 hover:text-red-800 font-medium text-sm">
                        Decline
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FOOTER ROWS / PAGINATION - EXACTLY like reference code */}
        <div className="flex justify-between items-center mt-6 px-1">
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
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-6 min-h-screen bg-[#f5f5f7]">
      {/* Headers */}
      {renderMobileHeader()}
      {renderDesktopHeader()}

      {/* Table Sections */}
      {renderMobileTable()}
      {renderDesktopTable()}
    </div>
  );
};

export default AffiliatePendingPayment;