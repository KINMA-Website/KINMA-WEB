import { useMemo, useState } from "react";
import "./ProductModal.css";

function ProductModal({ isOpen, item, onClose }) {
  const [spiceLevel, setSpiceLevel] = useState("กลาง");
  const [selectedToppings, setSelectedToppings] = useState([]);

  const spiceOptions = [
    { label: "ไม่เผ็ด", value: "ไม่เผ็ด", price: 0 },
    { label: "กลาง", value: "กลาง", price: 0 },
    { label: "เผ็ดมาก", value: "เผ็ดมาก", price: 15 },
  ];

  const toppingOptions = [
    { label: "ไข่", value: "ไข่", price: 15 },
    { label: "ชีส", value: "ชีส", price: 20 },
    { label: "ผักเพิ่มเติม", value: "ผักเพิ่มเติม", price: 10 },
  ];

  const totalPrice = useMemo(() => {
    const spicePrice = spiceOptions.find((option) => option.value === spiceLevel)?.price || 0;
    const toppingsPrice = selectedToppings.reduce((sum, topping) => {
      const toppingOption = toppingOptions.find((option) => option.value === topping);
      return sum + (toppingOption?.price || 0);
    }, 0);

    return (item?.price || 0) + spicePrice + toppingsPrice;
  }, [item, selectedToppings, spiceLevel]);

  if (!isOpen || !item) {
    return null;
  }

  const toggleTopping = (value) => {
    setSelectedToppings((current) =>
      current.includes(value) ? current.filter((itemValue) => itemValue !== value) : [...current, value]
    );
  };

  return (
    <div className="product-modal__overlay" role="dialog" aria-modal="true" aria-label={`ปรับแต่ง ${item.name}`}>
      <div className="product-modal">
        <button type="button" className="product-modal__close" onClick={onClose} aria-label="ปิด">
          ×
        </button>

        <div className="product-modal__content">
          <img className="product-modal__image" src={item.image} alt={item.name} />

          <div className="product-modal__details">
            <p className="product-modal__eyebrow">ปรับแต่งเมนู</p>
            <h3>{item.name}</h3>
            <p className="product-modal__description">{item.description}</p>

            <div className="product-modal__section">
              <h4>ระดับความเผ็ด</h4>
              <div className="product-modal__options">
                {spiceOptions.map((option) => (
                  <label key={option.value} className="product-modal__option">
                    <input
                      type="radio"
                      name="spice"
                      value={option.value}
                      checked={spiceLevel === option.value}
                      onChange={() => setSpiceLevel(option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="product-modal__section">
              <h4>ท็อปปิ้ง</h4>
              <div className="product-modal__options">
                {toppingOptions.map((option) => (
                  <label key={option.value} className="product-modal__option">
                    <input
                      type="checkbox"
                      checked={selectedToppings.includes(option.value)}
                      onChange={() => toggleTopping(option.value)}
                    />
                    <span>
                      {option.label}
                      {option.price > 0 ? ` (+${option.price} บาท)` : ""}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="product-modal__footer">
              <div>
                <p className="product-modal__price-label">ยอดรวม</p>
                <p className="product-modal__price">{totalPrice} บาท</p>
              </div>

              <div className="product-modal__actions">
                <button type="button" className="product-modal__cancel" onClick={onClose}>
                  ยกเลิก
                </button>
                <button type="button" className="product-modal__submit">
                  เพิ่มลงตะกร้า
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
