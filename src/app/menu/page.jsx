"use client";

import { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import menu from "./data";

const allCategories = [
  "all",
  ...new Set(menu.map((item) => item.category)),
];

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState(menu);

  const [activeCategory, setActiveCategory] = useState("all");

  const filterItems = (category) => {
    setActiveCategory(category);

    if (category === "all") {
      setMenuItems(menu);
      return;
    }

    const newItems = menu.filter(
      (item) => item.category === category
    );

    setMenuItems(newItems);
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-100 overflow-hidden py-20">
      <section className="w-[90vw] max-w-7xl mx-auto">
        
        <div className="text-center mt-6 mb-10">
          <h2 className="text-5xl font-bold capitalize text-gray-800">
            our menu
          </h2>

          <div className="w-20 h-1 bg-yellow-700 mx-auto mt-4 rounded"></div>
        </div>

        <Categories
          categories={allCategories}
          filterItems={filterItems}
          activeCategory={activeCategory}
        />

        <Menu items={menuItems} />
      </section>
    </main>
  );
}