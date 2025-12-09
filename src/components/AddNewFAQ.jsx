import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

const AddNewFAQ = ({ onBack }) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxStyles = `
    input[type="checkbox"] {
      appearance: none;
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      border: 2px solid #d1d5db;
      border-radius: 50%;
      outline: none;
      cursor: pointer;
      transition: all 0.2s;
      position: relative;
    }

    input[type="checkbox"]:checked {
      border-color: #2f5e37;
      background-color: #2f5e37;
      background-image: radial-gradient(circle at center, white 0%, white 35%, transparent 40%);
    }

    input[type="checkbox"]:hover {
      border-color: #2f5e37;
    }
  `;

  return (
    <>
      <style>{checkboxStyles}</style>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium text-gray-800">Add New FAQ</h2>
        
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#2f5e37] font-medium"
        >
          <ArrowLeft size={18} />
          Back
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
          <legend className="text-gray-700 px-1 text-sm">
            Select Platform <span className="text-red-500">*</span>
          </legend>
          <input 
            type="text" 
            defaultValue="Consumer Web"
            className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#2f5e37]"
          />
        </fieldset>

        <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
          <legend className="text-gray-700 px-1 text-sm">
            Select Title <span className="text-red-500">*</span>
          </legend>
          <input 
            type="text"
            className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#2f5e37]"
          />
        </fieldset>

      </div>

      <div className="flex items-center gap-3 mt-6">
        <input 
          type="checkbox" 
          id="addToHomepage"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="h-4 w-4"
        />
        
        <label 
          htmlFor="addToHomepage" 
          className="text-gray-700 text-base cursor-pointer"
          onClick={() => setIsChecked(!isChecked)}
        >
          Add to homepage as well
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

        <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
          <legend className="text-gray-700 px-1 text-sm">
            Add Question <span className="text-red-500">*</span>
          </legend>
          <textarea
            rows={5}
            className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 resize-none outline-none focus:ring-1 focus:ring-[#2f5e37]"
            placeholder="Enter your question here..."
          ></textarea>
        </fieldset>

        <fieldset className="border border-gray-300 rounded-xl px-4 pb-3">
          <legend className="text-gray-700 px-1 text-sm">
            Add Answer <span className="text-red-500">*</span>
          </legend>
          <textarea
            rows={5}
            className="w-full mt-1 px-3 py-2 rounded-lg text-gray-600 resize-none outline-none focus:ring-1 focus:ring-[#2f5e37]"
            placeholder="Enter your answer here..."
          ></textarea>
        </fieldset>

      </div>

      <div className="flex justify-end items-center gap-4 mt-8">

        <button className="px-6 py-2.5 rounded-xl bg-gray-100 text-gray-600 text-sm hover:bg-gray-200">
          Clear all
        </button>

        <button className="px-8 py-2.5 rounded-xl bg-[#2f5e37] text-white text-sm hover:bg-[#244a2d]">
          Submit
        </button>

      </div>
    </>
  );
};

export default AddNewFAQ;