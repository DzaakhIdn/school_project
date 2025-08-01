"use client";
import React, { useState } from "react";

type TabKey = "about" | "gallery";

interface TabContent {
  image: string;
  text: string;
}

const content: Record<TabKey, TabContent> = {
  about: {
    image: "https://source.unsplash.com/random/300x200?nature",
    text: "Ini adalah deskripsi tentang kami. Kami menciptakan pengalaman luar biasa.",
  },
  gallery: {
    image: "https://source.unsplash.com/random/300x200?city",
    text: "Lihat galeri kami yang berisi berbagai dokumentasi menarik.",
  },
};

export default function SimpleTab(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabKey>("about");

  return (
    <div className="max-w-md mx-auto p-4">
      {/* Tab Buttons */}
      <div className="flex space-x-4 mb-6">
        {(["about", "gallery"] as TabKey[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full transition ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {tab === "about" ? "Tentang" : "Galeri"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="text-center">
        <img
          src={content[activeTab].image}
          alt={`Gambar ${activeTab}`}
          className="rounded-lg w-full h-48 object-cover mb-4"
        />
        <p className="text-gray-700">{content[activeTab].text}</p>
      </div>
    </div>
  );
}
