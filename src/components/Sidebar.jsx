import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

const Sidebar = ({ onNavigate, activeView: propActiveView, onCloseMobileSidebar }) => {
  const [activeSection, setActiveSection] = useState('Dashboard');
  const [activeView, setActiveView] = useState(propActiveView || 'dashboard');
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isAffiliateOpen, setIsAffiliateOpen] = useState(false);
  const [isCustomizationOpen, setIsCustomizationOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  useEffect(() => {
    if (propActiveView) {
      setActiveView(propActiveView);
      
      if (propActiveView.includes('affiliate')) {
        setIsAffiliateOpen(true);
        setIsProductOpen(false);
        setIsCustomizationOpen(false);
      } else if (propActiveView.includes('product')) {
        setIsProductOpen(true);
        setIsAffiliateOpen(false);
        setIsCustomizationOpen(false);
      } else if (propActiveView.includes('customization')) {
        setIsCustomizationOpen(true);
        setIsProductOpen(false);
        setIsAffiliateOpen(false);
      } else {
        setIsProductOpen(false);
        setIsAffiliateOpen(false);
        setIsCustomizationOpen(false);
      }
    }
  }, [propActiveView]);

  const menuSections = [
    {
      title: 'Main',
      items: [
        { 
          id: 'dashboard', 
          name: 'Dashboard', 
          iconType: 'svg', 
          iconName: 'dashboard.svg', 
          view: 'dashboard' 
        },
        { 
          id: 'doctors', 
          name: 'Doctors', 
          iconType: 'svg', 
          iconName: 'doctor.svg', 
          view: 'doctors' 
        },
        { 
          id: 'patients', 
          name: 'Patients', 
          iconType: 'svg', 
          iconName: 'patients.svg', 
          view: 'patients' 
        },
        { 
          id: 'appointments', 
          name: 'Appointments', 
          iconType: 'svg', 
          iconName: 'appointments.svg', 
          view: 'appointments' 
        },
        { 
          id: 'specialities', 
          name: 'Specialities', 
          iconType: 'svg', 
          iconName: 'specialities.svg', 
          view: 'specialities' 
        },
        { 
          id: 'product', 
          name: 'Product', 
          iconType: 'svg', 
          iconName: 'specialities.svg',
          view: 'product-list',
          hasDropdown: true,
          dropdownItems: [
            { id: 'product-list', name: 'Product List', view: 'product-list' },
            { id: 'add-product', name: 'Add Product', view: 'add-product' }
          ]
        },
        { 
          id: 'coupons', 
          name: 'Coupons', 
          iconType: 'svg', 
          iconName: 'specialities.svg', 
          view: 'coupons' 
        },
        { 
          id: 'concerns', 
          name: 'Concerns', 
          iconType: 'svg', 
          iconName: 'appointments.svg', 
          view: 'concerns' 
        },
        { 
          id: 'referral', 
          name: 'Referral', 
          iconType: 'svg', 
          iconName: 'appointments.svg', 
          view: 'referral' 
        },
        { 
          id: 'affiliate', 
          name: 'Affiliate', 
          iconType: 'svg', 
          iconName: 'appointments.svg',
          view: 'affiliate-dashboard',
          hasDropdown: true,
          dropdownItems: [
            { 
              id: 'affiliate-dashboard', 
              name: 'Affiliate Dashboard', 
              displayName: 'Dashboard', 
              view: 'affiliate-dashboard' 
            },
            { 
              id: 'affiliate-commission', 
              name: 'Affiliate Commission', 
              displayName: 'Commission', 
              view: 'affiliate-commission' 
            },
            { 
              id: 'affiliate-coupons', 
              name: 'Affiliate Coupons', 
              displayName: 'Coupons', 
              view: 'affiliate-coupons' 
            },
            { 
              id: 'affiliate-payment', 
              name: 'Affiliate Payment', 
              displayName: 'Payment',
              view: 'affiliate-payment',
              hasSubDropdown: true,
              subDropdownItems: [
                { 
                  id: 'affiliate-pending-payment', 
                  name: 'Pending Payment', 
                  displayName: 'Pending Payment', 
                  view: 'affiliate-pending-payment' 
                },
                { 
                  id: 'affiliate-payment-history', 
                  name: 'Payment History', 
                  displayName: 'Payment History', 
                  view: 'affiliate-payment-history' 
                }
              ]
            },
            { 
              id: 'affiliate-sales', 
              name: 'Affiliate Sales', 
              displayName: 'Sales', 
              view: 'affiliate-sales' 
            },
            { 
              id: 'affiliate-doctors', 
              name: 'Affiliate Doctors', 
              displayName: 'Doctors', 
              view: 'affiliate-doctors' 
            }
          ]
        },
        { 
          id: 'customization', 
          name: 'Customization', 
          iconType: 'svg', 
          iconName: 'appointments.svg',
          view: 'customization-web',
          hasDropdown: true,
          dropdownItems: [
            { 
              id: 'customization-web', 
              name: 'Web Customization', 
              displayName: 'Web', 
              view: 'customization-web' 
            },
            { 
              id: 'customization-app', 
              name: 'App Customization', 
              displayName: 'App', 
              view: 'customization-app' 
            }
          ]
        },
        { 
          id: 'wallet', 
          name: 'Wallet', 
          iconType: 'svg', 
          iconName: 'appointments.svg', 
          view: 'wallet' 
        },
        { 
          id: 'refund', 
          name: 'Refund', 
          iconType: 'svg', 
          iconName: 'appointments.svg', 
          view: 'refund' 
        }
      ]
    }
  ];

  const toggleNestedDropdown = (dropdownId) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [dropdownId]: !prev[dropdownId]
    }));
  };

  const renderIcon = (item, isActive) => {
    const iconBackgroundColor = isActive ? 'bg-[#2C5E391A]' : 'bg-[#E5E7EA]'; 
    
    if (item.iconType === 'svg') {
      return (
        <div className={`p-2 rounded-lg ${iconBackgroundColor}`}>
          <img 
            src={`/${item.iconName}`} 
            alt={item.name} 
            className="h-[20px] w-[20px]"
          />
        </div>
      );
    }
  };

  const handleItemClick = (itemName, view, itemId) => {
    setActiveSection(itemName);
    setActiveView(view || itemId);
    
    if (onNavigate && view) {
      onNavigate(view);
    }
  };

  const handleProductClick = () => {
    const newState = !isProductOpen;
    setIsProductOpen(newState);
    
    if (newState) {
      setIsAffiliateOpen(false);
      setIsCustomizationOpen(false);
    }
    
    if (newState && onNavigate) {
      onNavigate('product-list');
      setActiveView('product-list');
    }
  };

  const handleAffiliateClick = () => {
    const newState = !isAffiliateOpen;
    setIsAffiliateOpen(newState);
    
    if (newState) {
      setIsProductOpen(false);
      setIsCustomizationOpen(false);
    }
    
    if (newState && onNavigate) {
      onNavigate('affiliate-dashboard');
      setActiveView('affiliate-dashboard');
    }
  };

  const handleCustomizationClick = () => {
    const newState = !isCustomizationOpen;
    setIsCustomizationOpen(newState);
    
    if (newState) {
      setIsProductOpen(false);
      setIsAffiliateOpen(false);
    }
    
    if (newState && onNavigate) {
      onNavigate('customization-web');
      setActiveView('customization-web');
    }
  };

  return (
    <aside 
      className="w-64 h-full bg-white text-[#4A4D49] rounded-tr-lg rounded-br-lg" 
      style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
    >
      <div className="lg:hidden flex justify-end p-2">
        <button 
          onClick={onCloseMobileSidebar}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <X className="h-5 w-5 text-gray-700" />
        </button>
      </div>

      <div className="p-4 pt-2 space-y-6">
        {menuSections.map((section) => (
          <div key={section.title} className="space-y-2">
            <div className="flex items-center space-x-2 px-2.5 py-1">
              <h3 className="text-xs font-semibold text-[#6B6F6A] uppercase tracking-wide">
                {section.title}
              </h3>
            </div>

            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = activeView === item.id || 
                  activeView === item.view ||
                  (item.hasDropdown && item.dropdownItems?.some(dropdownItem => 
                    activeView === dropdownItem.view || activeView === dropdownItem.id ||
                    (dropdownItem.subDropdownItems?.some(subItem => 
                      activeView === subItem.view || activeView === subItem.id
                    ))
                  ));
                
                return (
                  <div key={item.id}>
                    <div
                      className={`flex items-center justify-between px-2 py-2 rounded-lg cursor-pointer transition-all
                        ${
                          isActive 
                            ? 'bg-gradient-to-r from-[#51745D10] to-[#2C5E3910] text-[#2C5E39] '
                            : 'hover:bg-[#F1F3EF] text-[#4A4D49]'
                        }
                      `}
                      onClick={() => {
                        if (item.id === 'product') {
                          handleProductClick();
                        } else if (item.id === 'affiliate') {
                          handleAffiliateClick();
                        } else if (item.id === 'customization') {
                          handleCustomizationClick();
                        } else {
                          handleItemClick(item.name, item.view || item.id, item.id);
                        }
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        {renderIcon(item, isActive)}
                        <span className="text-sm">{item.name}</span>
                      </div>
                      
                      {item.hasDropdown && (
                        <div className="mr-2">
                          {(item.id === 'product' && isProductOpen) || 
                           (item.id === 'affiliate' && isAffiliateOpen) ||
                           (item.id === 'customization' && isCustomizationOpen) ? (
                            <ChevronUp className="h-4 w-4 text-[#6F7571]" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-[#6F7571]" />
                          )}
                        </div>
                      )}
                    </div>

                    {item.id === 'product' && item.hasDropdown && isProductOpen && (
                      <div className="ml-8 mt-1 space-y-1">
                        {item.dropdownItems.map((dropdownItem) => {
                          const isDropdownActive = activeView === dropdownItem.view || activeView === dropdownItem.id;
                          return (
                            <div
                              key={dropdownItem.id}
                              className={`flex items-center px-2 py-2 rounded-lg cursor-pointer transition-all
                                ${
                                  isDropdownActive 
                                    ? 'bg-gradient-to-r from-[#51745D10] to-[#2C5E3910] text-[#2C5E39] '
                                    : 'hover:bg-[#F1F3EF] text-[#4A4D49]'
                                }
                              `}
                              onClick={() => handleItemClick(
                                dropdownItem.name, 
                                dropdownItem.view, 
                                dropdownItem.id
                              )}
                            >
                              <span className="text-sm">{dropdownItem.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {item.id === 'affiliate' && item.hasDropdown && isAffiliateOpen && (
                      <div className="ml-8 mt-1 space-y-1">
                        {item.dropdownItems.map((dropdownItem) => {
                          const isDropdownActive = activeView === dropdownItem.view || activeView === dropdownItem.id ||
                            (dropdownItem.subDropdownItems?.some(subItem => 
                              activeView === subItem.view || activeView === subItem.id
                            ));
                          
                          const isNestedDropdownOpen = openDropdowns[dropdownItem.id];
                          
                          return (
                            <div key={dropdownItem.id} className="space-y-1">
                              <div
                                className={`flex items-center justify-between px-2 py-2 rounded-lg cursor-pointer transition-all
                                  ${
                                    isDropdownActive 
                                      ? 'bg-gradient-to-r from-[#51745D10] to-[#2C5E3910] text-[#2C5E39] '
                                      : 'hover:bg-[#F1F3EF] text-[#4A4D49]'
                                  }
                                `}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (dropdownItem.hasSubDropdown) {
                                    toggleNestedDropdown(dropdownItem.id);
                                  } else {
                                    handleItemClick(
                                      dropdownItem.name, 
                                      dropdownItem.view, 
                                      dropdownItem.id
                                    );
                                  }
                                }}
                              >
                                <div className="flex items-center">
                                  <span className="text-sm">{dropdownItem.displayName || dropdownItem.name}</span>
                                </div>
                                
                                {dropdownItem.hasSubDropdown && (
                                  <div className="mr-2">
                                    {isNestedDropdownOpen ? (
                                      <ChevronUp className="h-3 w-3 text-[#6F7571]" />
                                    ) : (
                                      <ChevronDown className="h-3 w-3 text-[#6F7571]" />
                                    )}
                                  </div>
                                )}
                              </div>

                              {dropdownItem.hasSubDropdown && dropdownItem.subDropdownItems && isNestedDropdownOpen && (
                                <div className="ml-4 mt-1 space-y-1">
                                  {dropdownItem.subDropdownItems.map((subItem) => {
                                    const isSubItemActive = activeView === subItem.view || activeView === subItem.id;
                                    return (
                                      <div
                                        key={subItem.id}
                                        className={`flex items-center px-2 py-2 rounded-lg cursor-pointer transition-all
                                          ${
                                            isSubItemActive 
                                              ? 'bg-gradient-to-r from-[#51745D10] to-[#2C5E3910] text-[#2C5E39] '
                                              : 'hover:bg-[#F1F3EF] text-[#4A4D49]'
                                          }
                                        `}
                                        onClick={() => handleItemClick(
                                          subItem.name, 
                                          subItem.view, 
                                          subItem.id
                                        )}
                                      >
                                        <span className="text-sm pl-2">{subItem.displayName || subItem.name}</span>
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {item.id === 'customization' && item.hasDropdown && isCustomizationOpen && (
                      <div className="ml-8 mt-1 space-y-1">
                        {item.dropdownItems.map((dropdownItem) => {
                          const isDropdownActive = activeView === dropdownItem.view || activeView === dropdownItem.id;
                          return (
                            <div
                              key={dropdownItem.id}
                              className={`flex items-center px-2 py-2 rounded-lg cursor-pointer transition-all
                                ${
                                  isDropdownActive 
                                    ? 'bg-gradient-to-r from-[#51745D10] to-[#2C5E3910] text-[#2C5E39] '
                                    : 'hover:bg-[#F1F3EF] text-[#4A4D49]'
                                }
                              `}
                              onClick={() => handleItemClick(
                                dropdownItem.name, 
                                dropdownItem.view, 
                                dropdownItem.id
                              )}
                            >
                              <span className="text-sm">{dropdownItem.displayName || dropdownItem.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;