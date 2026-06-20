import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import MenuItem from "./ManuItem/ManuItem";

const menuItems = [
  { label: "Apply for Recommendation Letter", address: "recommendation-letter" },
  { label: "Apply for Testimonial", address: "testimonial" },
  { label: "Apply for Course Complete Certificate", address: "course-certificate" },
  { label: "Apply for Readmission", address: "readmission" },
  { label: "Apply for Industrial Placement Documents", address: "industrial-documents" },
  { label: "Apply for Academic Transcript & Certificate Withdrawal", address: "academic-transcript" },
  { label: "Students Admission Cancel Form", address: "admission-cancel" },
  { label: "International Student Exchange Programs", address: "student-exchange" },
  { label: "ID card Re-issue", address: "id-card-reissue" },
  { label: "Admit Card Re-issue", address: "admit-card-reissue" },
  { label: "Marksheet Verification", address: "marksheet-verification" },
  { label: "Marksheet Correction", address: "marksheet-correction" },
  { label: "S. Sc Marksheet Received (Copy)", address: "ssc-marksheet-copy" },
  { label: "SSC Marksheet", address: "ssc-marksheet" }
];

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMenuItems = menuItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-80 md:w-96 p-4 border-r border-gray-200 flex flex-col h-full bg-white select-none">
      <div className="relative mb-6">
        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <IoIosSearch className="text-gray-400 text-xl" />
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Menu/Content"
          className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-teal-500 focus:bg-white text-sm transition-all"
        />
      </div>

      <div className="overflow-y-auto flex-1 max-h-[calc(100vh-140px)] pr-1">
        <nav className="space-y-1">
          {filteredMenuItems.length > 0 ? (
            filteredMenuItems.map((item, idx) => (
              <MenuItem
                key={idx}
                label={item.label}
                address={item.address}
              />
            ))
          ) : (
            <div className="text-center py-8 text-gray-400 text-sm">
              No results found
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
