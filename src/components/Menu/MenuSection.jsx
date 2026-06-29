import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./MenuSection.css";
import { menuData } from "../../data/menuData";

function MenuSection() {
  const categories = menuData.categories ?? [];
  const items = menuData.menuItems ?? [];
  const [activeCategory, setActiveCategory] = useState(categories[0] || "");

  const visibleItems = activeCategory
    ? items.filter((item) => item.category === activeCategory)
    : items;

  const categoryLabels = {
    "ชุดเมนูสำหรับคุณ": "🍜 เมนูแนะนำ",
    SAMYANG: "🌶️ Samyang",
    เครื่องดื่ม: "🥤 เครื่องดื่ม",
  };

  return (
    <section className="menu-section" id="menu">
      <div className="menu-section__header">
        <p className="menu-section__eyebrow">เมนูแนะนำ</p>
        <h2>เลือกเมนูที่ชอบ</h2>
        <p>สไตล์ใหม่สำหรับการเรียกดูเมนูอย่างง่ายและทันสมัย</p>
      </div>

      {categories.length > 0 ? (
        <div className="menu-tabs" role="tablist" aria-label="หมวดหมู่เมนู">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={`menu-tab ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {categoryLabels[category] || category}
            </button>
          ))}
        </div>
      ) : null}

      {items.length === 0 ? (
        <div className="menu-empty">
          <p>กำลังเพิ่มเมนู...</p>
        </div>
      ) : (
        <div className="menu-grid">
          {visibleItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}

export default MenuSection;
