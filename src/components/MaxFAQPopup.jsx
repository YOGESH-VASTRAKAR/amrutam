import React from "react";
import { X } from "lucide-react";

const MaxFAQPopup = ({ onReplace, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg">
        {/* Header with Close button */}
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">
            FAQ List
          </h3>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Main Message */}
          <div className="text-center mb-6">
            {/* Red colored text */}
            <p className="text-red-500 mb-6 font-medium">
              Homepage already has maximum number of FAQ's.
            </p>
            
            <p className="text-gray-700 font-medium mb-6">
              Would you like to replace it instead ?
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={onCancel}
              className="px-8 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition min-w-[120px]"
            >
              Cancel
            </button>
            <button
              onClick={onReplace}
              className="px-8 py-3 rounded-xl bg-[#2f5e37] text-white font-medium hover:bg-[#244a2d] transition min-w-[120px]"
            >
              Replace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaxFAQPopup;