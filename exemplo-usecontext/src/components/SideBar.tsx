"use client";

import React, { useState } from "react";
import {
  Menu,
  Home,
  Settings,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function SideBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const sidebarItems = [
    { icon: Home, text: "Home" },
    { icon: Users, text: "Users" },
    { icon: Settings, text: "Settings" },
  ];

  return (
    <div
      className={`
      h-screen 
      bg-gray-800 
      text-white 
      transition-all 
      duration-300 
      ${isExpanded ? "w-64" : "w-20"}
      relative
    `}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="
          absolute 
          right-[-12px] 
          top-8 
          bg-gray-700 
          p-1 
          rounded-full 
          border 
          border-gray-600
        "
      >
        {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>

      {/* Sidebar Items */}
      <div className="p-4 mt-8">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`
              flex 
              items-center 
              p-3 
              hover:bg-gray-700 
              rounded 
              cursor-pointer 
              mb-2
              ${isExpanded ? "justify-start" : "justify-center"}
            `}
          >
            <item.icon className="mr-3" />
            {isExpanded && <span>{item.text}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
