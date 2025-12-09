import React from 'react';
import { Menu } from 'lucide-react';
import logoImg from '../assets/logo-img.png';
import logoText from '../assets/logo-text.png';

const Header = ({ onToggleSidebar, onToggleMobileSidebar }) => {
  return (
    <header className="w-full bg-white shadow-sm" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
      
      <div className="py-3 pr-4 sm:pr-5 lg:pr-6 flex items-center justify-between">

        <div className="flex items-center">

          <button 
            className="p-1.5 rounded-lg hover:bg-gray-100 lg:hidden mr-2"
            onClick={onToggleMobileSidebar}
          >
            <Menu className="h-5 w-5 text-gray-700" />
          </button>

          <div className="flex items-center">

            <div className="w-[55px] h-[55px] sm:w-[60px] sm:h-[60px] lg:w-[67px] lg:h-[67px] flex items-center justify-center">
              <img 
                src={logoImg} 
                alt="AMRUTAM Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="hidden lg:block">
              <img 
                src={logoText} 
                alt="AMRUTAM"
                className="h-[42px] lg:h-[46px] object-contain brightness-0"
              />
            </div>

            <div className="hidden lg:block ml-1">
              <button 
                onClick={onToggleSidebar}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                title="Toggle Sidebar"
              >
                <img 
                  src="/bar-icon.svg"
                  className="h-5 w-5 opacity-90"
                  alt="Menu Bar"
                />
              </button>
            </div>

          </div>
        </div>

        <div className="hidden lg:flex flex-1 mx-6">
          <div className="relative w-full max-w-[450px]">

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
                         focus:outline-none focus:ring-2 focus:ring-[#2C5E39] focus:ring-opacity-20"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-4">

          <button className="relative p-2 rounded-full hover:bg-gray-200 transition-colors">
            <img src="/mail.svg" className="h-7 w-7 text-[#7B9A88]" alt="Mail" />
            <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full border border-white"></span>
          </button>

          <button className="relative p-2 rounded-full hover:bg-gray-200 transition-colors">
            <img src="/bell.svg" className="h-7 w-7 text-[#7B9A88]" alt="Notifications" />
            <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full border border-white"></span>
          </button>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="hidden md:block text-right">
              <p className="font-medium text-[#2C5E39] text-sm">Liam Michael</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>

            <div className="relative">
              {/* Profile image को pd5.jpg से replace किया गया */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden flex items-center justify-center shadow">
                <img 
                  src="/pd5.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
            </div>
          </div>

          <button className="hidden sm:block p-2 rounded-full hover:bg-gray-200 transition-colors">
            <img src="/setting.svg" className="h-7 w-7 text-[#7B9A88]" alt="Settings" />
          </button>
        </div>
      </div>

      <div className="lg:hidden pr-4 sm:pr-6 lg:pr-8 pb-3 pl-3 sm:pl-4">
        <div className="relative">

          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img 
              src="/search.svg"
              alt="Search"
              className="h-5 w-5 opacity-60"
            />
          </div>

          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2.5
                       bg-[#EEF3EF] text-gray-700 
                       rounded-xl text-sm placeholder-gray-500 
                       focus:outline-none focus:ring-2 focus:ring-[#2C5E39] focus:ring-opacity-20"
          />
        </div>
      </div>

    </header>
  );
};

export default Header;