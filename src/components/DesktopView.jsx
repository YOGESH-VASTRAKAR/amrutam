import React from "react";
import { Check } from "lucide-react";

const DesktopView = () => {
  return (
    <div className="relative">
      <div className="w-full bg-white p-4 md:p-6 rounded-xl md:flex md:gap-6 lg:gap-10 mb-12 md:mb-16" 
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>

        {/* LEFT IMAGE - Mobile: Full width, Desktop: Sidebar */}
        <div className="md:w-[45%] mb-6 md:mb-0">
          <div className="rounded-xl overflow-hidden">
            <img
              src="/productpreview.png"
              alt="Product"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 flex flex-col gap-4 md:gap-6">

          {/* TITLE + PRICE */}
          <div>
            <h2 className="text-lg md:text-[22px] font-semibold text-gray-900 leading-snug">
              Amrutam Amla Churna | Ayurvedic Anti-Oxidant
            </h2>
            <p className="text-lg md:text-[22px] font-semibold text-black mt-1">₹ 2820.00</p>
          </div>

          {/* PACK SIZES */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <div className="border rounded-lg md:rounded-xl py-3 md:py-4 text-center bg-[#f7f7f7] flex-1">
              <p className="font-semibold text-sm md:text-[15px]">170 GM</p>
              <p className="text-gray-500 text-xs md:text-[11px]">1 Month<br />1 Jar</p>
              <p className="font-semibold text-sm md:text-[14px] mt-1">₹ 329</p>
            </div>

            <div className="border rounded-lg md:rounded-xl py-3 md:py-4 text-center bg-[#f7f7f7] flex-1">
              <p className="font-semibold text-sm md:text-[15px]">200 GM</p>
              <p className="text-gray-500 text-xs md:text-[11px]">2 Months<br />1 Jar</p>
              <p className="font-semibold text-sm md:text-[14px] mt-1">₹ 711</p>
            </div>

            <div className="border rounded-lg md:rounded-xl py-3 md:py-4 text-center bg-[#f7f7f7] flex-1">
              <p className="font-semibold text-sm md:text-[15px]">3 × 400 GM</p>
              <p className="text-gray-500 text-xs md:text-[11px]">3 Months<br />3 Jars</p>
              <p className="font-semibold text-sm md:text-[14px] mt-1">₹ 3636</p>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-700 text-sm md:text-[13px] leading-relaxed">
            Amrutam's Amla Churna is a pure and authentic Ayurvedic recipe that is
            an excellent source of Vitamin C, brought to you freshly from the gardens
            of Amrutam Vatikā.
          </p>

          {/* PRIMARY BENEFITS */}
          <div>
            <h3 className="font-semibold text-base md:text-[18px] text-[#2f5e37]">
              Primary Benefits
            </h3>
            <div className="mt-2 md:mt-3 flex flex-col gap-1 md:gap-2">
              {[
                "Reduces Hair Fall",
                "Treats Scalp Health",
                "Improves Blood Circulation",
                "Promotes Hair Growth",
                "Repairs Damaged Hair",
                "Treats Dry and Frizzy Hair",
                "Makes Hair Soft & Voluminous",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm md:text-[14px]">
                  {/* Green circle with white check mark */}
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-[#2f5e37] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={8} md:size={10} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SECONDARY BENEFITS */}
          <div>
            <h3 className="font-semibold text-base md:text-[18px] text-[#2f5e37]">
              Secondary Benefits
            </h3>

            <div className="grid grid-cols-3 text-center mt-3 md:mt-4 gap-2 md:gap-0">
              <div>
                {/* b1.svg */}
                <img src="/b1.svg" alt="Reduces Stress" className="mx-auto w-6 h-6 md:w-8 md:h-8" />
                <p className="text-xs md:text-[11px] mt-1 md:mt-2 leading-tight">Reduces Stress<br />and Anxiety</p>
              </div>
              <div>
                {/* b2.svg */}
                <img src="/b2.svg" alt="Aids in Digestion" className="mx-auto w-6 h-6 md:w-8 md:h-8" />
                <p className="text-xs md:text-[11px] mt-1 md:mt-2 leading-tight">Aids in<br />Digestion</p>
              </div>
              <div>
                {/* b3.svg */}
                <img src="/b3.svg" alt="Boosts Immune System" className="mx-auto w-6 h-6 md:w-8 md:h-8" />
                <p className="text-xs md:text-[11px] mt-1 md:mt-2 leading-tight">Boosts the<br />Immune System</p>
              </div>
            </div>
          </div>

          {/* DOSAGE */}
          <div>
            <h3 className="font-semibold text-base md:text-[18px] text-[#2f5e37]">Dosage</h3>
            <p className="mt-1 md:mt-2 text-sm md:text-[14px] text-gray-700">🔁 Twice a day | 🕖 Empty Stomach</p>
          </div>

          {/* USAGE */}
          <div>
            <h3 className="font-semibold text-base md:text-[18px] text-[#2f5e37]">Usage</h3>
            <div className="mt-1 md:mt-2 text-sm md:text-[14px] text-gray-700 space-y-1">
              <div>🧴 Shampoo | Twice a week</div>
              <div>💆 Oil | Twice a week</div>
              <div>🧖 Spa | Twice a week</div>
            </div>
          </div>

          {/* PRIMARY INGREDIENTS */}
          <div>
            <h3 className="font-semibold text-base md:text-[18px] text-[#2f5e37]">
              Primary Ingredients
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-3 md:mt-4">
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
                  <img src={i.img} className="w-12 h-12 md:w-[70px] md:h-[70px] object-cover rounded" alt={i.name} />
                  <p className="text-xs md:text-[13px] mt-1 md:mt-2 font-medium text-gray-700 text-center">{i.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DURATION */}
          <div>
            <h3 className="font-semibold text-base md:text-[18px] text-[#2f5e37]">Duration</h3>
            <p className="text-sm md:text-[14px] mt-1 md:mt-2 text-gray-700">🕒 3-6 months minimum.</p>
          </div>
        </div>
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

export default DesktopView;