import React from "react";
import { FaBookOpen, FaThumbsUp, FaDesktop, FaEnvelope, FaRegClock } from "react-icons/fa";

const AboutStudentPortal = () => {
  return (
    <div className="space-y-8 select-none">
      {/* About Student Portal Service Card */}
      <div className="card bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        {/* Card Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100 bg-gray-50/50">
          <FaBookOpen className="text-gray-700 text-lg" />
          <h3 className="font-bold text-[18px] text-[#2c6b5b]">
            About Student Portal Service
          </h3>
        </div>
        {/* Card Body */}
        <div className="p-6 text-gray-600 leading-relaxed text-[15px]">
          Our goal is to make the process easy and seamless. In response to this,
          we created Student Portal. You can apply for any required documents
          here.
        </div>
      </div>

      {/* Why use online student portal service Card */}
      <div className="card bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        {/* Card Header */}
        <div className="flex items-center gap-3 px-6 py-4 bg-[#e6f4f6] border-b border-[#cce8eb]">
          <FaThumbsUp className="text-[#2c6b5b] text-lg" />
          <h3 className="font-bold text-[18px] text-[#2c6b5b]">
            Why use online student portal service
          </h3>
        </div>
        
        {/* Card Body with Asymmetric Grid Layout */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 relative">
          
          {/* Vertical Divider (only visible on md and up) */}
          <div className="hidden md:block absolute top-8 bottom-8 left-1/2 w-[1px] bg-gray-200 -translate-x-1/2"></div>

          {/* Left Column - Right Aligned */}
          <div className="space-y-10 text-right">
            {/* One Stop Solution */}
            <div className="space-y-2">
              <div className="flex items-center justify-end gap-3 text-gray-800">
                <span className="font-bold text-[17px]">One Stop Solution</span>
                <div className="p-2.5 bg-slate-100 text-slate-600 rounded-xl">
                  <FaDesktop size={20} />
                </div>
              </div>
              <p className="text-gray-500 text-sm pl-8">
                Hassle free system - forget to move desk to desk
              </p>
            </div>

            {/* Apply Form Anywhere */}
            <div className="space-y-2">
              <div className="flex items-center justify-end gap-3 text-gray-800">
                <span className="font-bold text-[17px]">Apply form Anywhere</span>
                <div className="p-2.5 bg-slate-100 text-slate-600 rounded-xl">
                  <FaEnvelope size={20} />
                </div>
              </div>
              <p className="text-gray-500 text-sm pl-8">
                Using internet connection - apply for documents anytime, anywhere
              </p>
            </div>
          </div>

          {/* Right Column - Left Aligned */}
          <div className="space-y-10 text-left">
            {/* Easy to Apply */}
            <div className="space-y-2">
              <div className="flex items-center justify-start gap-3 text-gray-800">
                <div className="p-2.5 bg-slate-100 text-slate-600 rounded-xl">
                  <FaThumbsUp size={20} />
                </div>
                <span className="font-bold text-[17px]">Easy to Apply</span>
              </div>
              <p className="text-gray-500 text-sm pr-8">
                Short brief application form - Just a minute to apply
              </p>
            </div>

            {/* Save Time */}
            <div className="space-y-2">
              <div className="flex items-center justify-start gap-3 text-gray-800">
                <div className="p-2.5 bg-slate-100 text-slate-600 rounded-xl">
                  <FaRegClock size={20} />
                </div>
                <span className="font-bold text-[17px]">Save Time</span>
              </div>
              <p className="text-gray-500 text-sm pr-8">
                No need for you to be in campus in person
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutStudentPortal;
