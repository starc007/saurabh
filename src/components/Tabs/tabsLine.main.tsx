"use client";

import React from "react";
import { motion } from "framer-motion";

interface TabItemProps {
  title: string;
  isActive: boolean;
  setActiveTab: () => void;
}

const TabItem = ({ title, isActive, setActiveTab }: TabItemProps) => {
  return (
    <button
      className={`py-3 font-medium transition-all relative ${
        isActive ? "text-primary" : "text-primary/60 hover:text-primary"
      }`}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
      onClick={() => setActiveTab()}
    >
      {isActive && (
        <motion.span
          layoutId="line-tab"
          className="absolute left-0 right-0 bottom-0 z-0 border-b-2 border-accent"
          transition={{
            type: "spring",
            bounce: 0.3,
            duration: 0.4,
            delay: 0.1,
          }}
        />
      )}
      <span className="relative z-10 flex items-center gap-1.5 text-sm">
        {title}
      </span>
    </button>
  );
};

interface TabsProps {
  tabs: { label: string; value: string }[];
  activeTab: string;
  setActiveTab: (index: string) => void;
}

const LineTabs = ({ tabs, activeTab, setActiveTab }: TabsProps) => {
  return (
    <div className="flex gap-8">
      {tabs.map((tab, index) => (
        <TabItem
          key={index}
          title={tab.label}
          isActive={activeTab === tab.value}
          setActiveTab={() => setActiveTab(tab.value)}
        />
      ))}
    </div>
  );
};

export default LineTabs;
