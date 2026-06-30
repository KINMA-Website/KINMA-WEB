import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import ProductModal from "../ProductModal/ProductModal";
import "./MenuSection.css";
import { menuData } from "../../data/menuData";

function MenuSection() {
  const categories = menuData.categories ?? [];
  const items = menuData.menuItems ?? [];
  const categoryLabels = menuData.categoryLabels ?? {};
  const [activeCategory, setActiveCategory] = useState(categories[0] || "");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const visibleItems = activeCategory
    ? items.filter((item) => item.category === activeCategory)
    : items;

  const handleSelect = (item) => {
  console.log("Clicked", item);
  setSelectedItem(item);
  setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <section id="menu" className="menu-section">
        <div className="menu-section__header">
          <p className="menu-section__eyebrow">💥เมนูแนะนำ💥</p>
          <h2>สามารถเพิ่มเมนูลงตะกร้าได้เลย🛒</h2>
          <p>อิ่ม❗ คุ้ม❗ อร่อย❗ แน่นอน🌟</p>
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
              <ProductCard key={item.id} item={item} onSelect={handleSelect} />
            ))}
          </div>
        )}
      </section>

      <ProductModal isOpen={isModalOpen} item={selectedItem} onClose={handleClose} />
    </>
  );
}

export default MenuSection;
