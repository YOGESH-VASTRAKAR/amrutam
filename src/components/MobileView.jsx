import React from "react";
import { Check } from "lucide-react";

const MobileView = () => {
  return (
    <div className="relative">
      <div className="w-full bg-white p-4 md:p-6 rounded-xl shadow border mb-12 md:mb-8" 
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
        
        {/* ===== Product Image ===== */}
        <div className="w-full rounded-xl overflow-hidden">
          <img
            src="/productpreview.png"
            alt="Product"
            className="w-full object-cover"
          />
        </div>

        {/* ===== Title + Price ===== */}
        <h2 className="mt-4 text-2xl md:text-4xl font-semibold text-gray-900 leading-snug">
          Amrutam Amla Churna | Ayurvedic Anti-Oxidant
        </h2>

        <p className="text-lg md:text-[22px] font-semibold text-black mt-1">₹ 2820.00</p>

        {/* ===== Weight / Variant Options ===== */}
        <div className="grid grid-cols-3 gap-2 md:gap-3 mt-4">
          <div className="border rounded-lg md:rounded-xl py-3 md:py-4 text-center bg-[#f7f7f7]">
            <p className="font-semibold text-base md:text-xl">170 GM</p>
            <p className="text-gray-500 text-sm md:text-base">1 Month<br />1 Jar</p>
            <p className="font-semibold text-base md:text-xl mt-1">₹ 329</p>
          </div>

          <div className="border rounded-lg md:rounded-xl py-3 md:py-4 text-center bg-[#f7f7f7]">
            <p className="font-semibold text-base md:text-xl">200 GM</p>
            <p className="text-gray-500 text-sm md:text-base">2 Months<br />1 Jar</p>
            <p className="font-semibold text-base md:text-xl mt-1">₹ 711</p>
          </div>

          <div className="border rounded-lg md:rounded-xl py-3 md:py-4 text-center bg-[#f7f7f7]">
            <p className="font-semibold text-base md:text-xl">3 × 400 GM</p>
            <p className="text-gray-500 text-sm md:text-base">3 Months<br />3 Jars</p>
            <p className="font-semibold text-base md:text-xl mt-1">₹ 3636</p>
          </div>
        </div>

        {/* ===== Description ===== */}
        <p className="text-gray-700 text-base md:text-xl mt-4 leading-relaxed">
          Amrutam's Amla Churna is a pure and authentic Ayurvedic recipe that is
          an excellent source of Vitamin C, brought to you freshly from the gardens
          of Amrutam Vatikā.
        </p>

        {/* ===== Primary Benefits ===== */}
        <h3 className="mt-5 text-xl md:text-2xl font-semibold text-[#2f5e37]">
          Primary Benefits
        </h3>

        <ul className="mt-2 space-y-1 md:space-y-2">
          {[
            "Reduces Hair Fall",
            "Treats Scalp Health",
            "Improves Blood Circulation",
            "Promotes Hair Growth",
            "Repairs Damaged Hair",
            "Treats Dry and Frizzy Hair",
            "Makes Hair Soft & Voluminous",
          ].map((item) => (
            <li key={item} className="flex items-start md:items-center gap-2">
              {/* Green circle with white check mark */}
              <div className="w-4 h-4 md:w-5 md:h-5 bg-[#2f5e37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-0">
                <Check size={10} md:size={12} className="text-white" strokeWidth={3} />
              </div>
              <span className="text-gray-700 text-sm md:text-base">{item}</span>
            </li>
          ))}
        </ul>

        {/* ===== Secondary Benefits ===== */}
        <h3 className="mt-6 text-xl md:text-2xl font-semibold text-[#2f5e37]">
          Secondary Benefits
        </h3>

        <div className="grid grid-cols-3 text-center mt-3 gap-2 md:gap-0">
          <div>
            {/* b1.svg */}
            <img src="/b1.svg" alt="Reduces Stress" className="mx-auto w-8 h-8 md:w-10 md:h-10" />
            <p className="text-sm md:text-base mt-1">Reduces Stress<br />and Anxiety</p>
          </div>
          <div>
            {/* b2.svg */}
            <img src="/b2.svg" alt="Aids in Digestion" className="mx-auto w-8 h-8 md:w-10 md:h-10" />
            <p className="text-sm md:text-base mt-1">Aids in<br />Digestion</p>
          </div>
          <div>
            {/* b3.svg */}
            <img src="/b3.svg" alt="Boosts Immune System" className="mx-auto w-8 h-8 md:w-10 md:h-10" />
            <p className="text-sm md:text-base mt-1">Boosts the<br />Immune System</p>
          </div>
        </div>

        {/* ===== Dosage ===== */}
        <h3 className="mt-6 text-xl md:text-2xl font-semibold text-[#2f5e37]">Dosage</h3>
        <p className="mt-1 text-sm md:text-base text-gray-700">🔁 Twice a day | 🕖 Empty Stomach</p>

        {/* ===== Usage ===== */}
        <h3 className="mt-5 text-xl md:text-2xl font-semibold text-[#2f5e37]">Usage</h3>
        <ul className="list-disc mt-1 text-gray-700 text-sm md:text-base space-y-1 list-none">
          <li>🧴 Shampoo | Twice a week</li>
          <li>💆 Oil | Twice a week</li>
          <li>🧖 Spa | Twice a week</li>
        </ul>

        {/* ===== Primary Ingredients ===== */}
        <h3 className="mt-6 text-xl md:text-2xl font-semibold text-[#2f5e37]">
          Primary Ingredients
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
          {[
            { name: "Bhringraj", img: "item1.png" },
            { name: "Sariva", img: "item2.png" },
            { name: "Gudahal", img: "item3.png" },
            { name: "Jatamansi", img: "item4.png" },
          ].map((i) => (
            <div
              key={i.name}
              className="border rounded-lg md:rounded-xl p-2 flex flex-col items-center"
            >
              <img src={i.img} className="w-12 h-12 md:w-16 md:h-16 object-cover rounded" alt={i.name} />
              <p className="text-base md:text-xl mt-1 md:mt-2 font-medium text-gray-700 text-center">{i.name}</p>
            </div>
          ))}
        </div>

        {/* ===== Duration ===== */}
        <h3 className="mt-6 text-xl md:text-2xl font-semibold text-[#2f5e37]">Duration</h3>
        <p className="mt-1 text-gray-700 text-sm md:text-base">🕒 3-6 months minimum.</p>
      </div>

      {/* ===== Submit Button (OUTSIDE CONTAINER) ===== */}
      <div className="w-full">
        <button className="bg-[#2f5e37] text-white w-full md:w-48 py-3 rounded-lg md:rounded-xl text-base md:text-lg font-medium block mx-auto shadow-lg">
          Submit
        </button>
      </div>
    </div>
  );
};

export default MobileView;