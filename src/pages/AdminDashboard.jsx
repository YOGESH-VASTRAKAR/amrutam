import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import AddProduct from '../components/AddProduct';
import AffiliateDashboard from '../components/AffiliateDashboard';
import AffiliateCommission from '../components/AffiliateCommission';
import AffiliateCoupons from '../components/AffiliateCoupons';
import AffiliateSales from '../components/AffiliateSales';
import AffiliateDoctors from '../components/AffiliateDoctors';
import AddSpecialCommission from '../components/AddSpecialCommission';
import AffiliatePendingPayment from '../components/AffiliatePendingPayment';
import AffiliatePaymentHistory from '../components/AffiliatePaymentHistory';
import AppCustomization from '../components/AppCustomization';

const AdminDashboard = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const handleNavigate = (view) => {
    setActiveView(view);
    if (window.innerWidth < 1024) {
      setIsMobileSidebarOpen(false);
    }
  };

  const renderMainContent = () => {
    switch(activeView) {
      case 'product-list':
        return <ProductList />;
      case 'add-product':
        return <AddProduct />;
      case 'affiliate-dashboard':
        return <AffiliateDashboard />;
      case 'affiliate-commission':
        return <AffiliateCommission onNavigate={setActiveView} />;
      case 'affiliate-coupons':
        return <AffiliateCoupons />;
      case 'affiliate-sales':
        return <AffiliateSales />;
      case 'affiliate-doctors':
        return <AffiliateDoctors />;
      case 'affiliate-pending-payment':
        return <AffiliatePendingPayment />;
      case 'affiliate-payment-history':
        return <AffiliatePaymentHistory />;
      case 'add-special-commission':
        return <AddSpecialCommission onBack={() => setActiveView('affiliate-commission')} />;
      case 'customization-web':
        return <AppCustomization type="web" />;
      case 'customization-app':
        return <AppCustomization />;
      case 'dashboard':
      default:
        return (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">Only Header and Sidebar are visible</p>
            <p className="text-sm mt-2">Main content area will be added later</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Header 
        onToggleSidebar={toggleSidebar}
        onToggleMobileSidebar={toggleMobileSidebar}
      />
      
      <div className="flex flex-1 pt-6">
        {isMobileSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={toggleMobileSidebar}
          />
        )}
        
        <div className={`
          fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out lg:hidden
          ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="w-64 h-full">
            <Sidebar 
              onNavigate={handleNavigate} 
              activeView={activeView}
              onCloseMobileSidebar={toggleMobileSidebar} // ✅ Fixed
            />
          </div>
        </div>
        
        {!isSidebarCollapsed && (
          <div className="hidden lg:block lg:w-64">
            <Sidebar 
              onNavigate={handleNavigate} 
              activeView={activeView}
              onCloseMobileSidebar={() => setIsSidebarCollapsed(true)} // Optional
            />
          </div>
        )}
        
        <main className={`
          flex-1 overflow-x-hidden transition-all duration-300
          ${isSidebarCollapsed ? 'lg:ml-0' : 'lg:ml-0'}
          ${isMobileSidebarOpen ? 'ml-64 lg:ml-0' : ''}
        `}>
          <div className="w-full">
            {renderMainContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;