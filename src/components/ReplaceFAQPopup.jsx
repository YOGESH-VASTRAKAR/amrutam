import React, { useState } from "react";
import { X, Check } from "lucide-react";

const ReplaceFAQPopup = ({ onReplace, onCancel, selectedTab = "Consultation" }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // FAQ questions based on tab
  const faqQuestions = [
    "What types of consultations are available?",
    "Can I get refund for the wallet money?",
    "What is the Amrutam Forum?",
    "Can I pause the audio consultation?",
    "Is there a minimum duration for an audio consultation?"
  ];

  const handleQuestionSelect = (question) => {
    setSelectedQuestion(question);
  };

  const handleReplaceClick = () => {
    if (selectedQuestion) {
      onReplace(selectedQuestion);
    }
  };

  // Custom checkbox styles
  const checkboxStyles = `
    input[type="checkbox"] {
      appearance: none;
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      border: 2px solid #d1d5db;
      border-radius: 4px;
      outline: none;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    input[type="checkbox"]:checked {
      border-color: #2f5e37;
      background-color: #2f5e37;
    }

    input[type="checkbox"]:checked::before {
      content: "";
      width: 8px;
      height: 8px;
      background-color: white;
      border-radius: 1px;
    }

    input[type="checkbox"]:hover {
      border-color: #2f5e37;
    }
  `;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {/* Custom checkbox CSS */}
      <style>{checkboxStyles}</style>
      
      <div className="bg-white rounded-2xl w-full max-w-2xl">
        {/* Header with Close button */}
        <div className="flex items-center justify-between p-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Select the question that you would like to replace it with
          </h3>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content - FAQ Questions List */}
        <div className="p-6 max-h-[400px] overflow-y-auto">
          <div className="space-y-3">
            {faqQuestions.map((question, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedQuestion === question
                    ? "border-[#2f5e37] bg-green-50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => handleQuestionSelect(question)}
              >
                <div className="flex items-center gap-3 flex-1">
                  {/* Custom Checkbox */}
                  <input
                    type="checkbox"
                    checked={selectedQuestion === question}
                    onChange={() => handleQuestionSelect(question)}
                    onClick={(e) => e.stopPropagation()}
                    className="flex-shrink-0 cursor-pointer"
                  />
                  
                  <span className="text-gray-800">{question}</span>
                </div>
                
                {/* Green Check Icon - Remove this if you want only checkbox */}
                {/* {selectedQuestion === question && (
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2f5e37]">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                )} */}
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 p-6">
          <button
            onClick={onCancel}
            className="px-8 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition min-w-[120px]"
          >
            Cancel
          </button>
          <button
            onClick={handleReplaceClick}
            disabled={!selectedQuestion}
            className={`px-8 py-3 rounded-xl font-medium transition min-w-[120px] ${
              selectedQuestion
                ? "bg-[#2f5e37] text-white hover:bg-[#244a2d]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Replace
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplaceFAQPopup;