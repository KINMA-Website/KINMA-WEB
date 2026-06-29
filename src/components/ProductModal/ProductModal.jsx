import { useEffect, useMemo, useState } from "react";
import { useCart } from "../../context/CartContext";

import OptionGroup from "./OptionGroup";
import QuantitySelector from "./QuantitySelector";

import "./ProductModal.css";

function ProductModal({ isOpen, item, onClose }) {

  const { addItem } = useCart();

  const [selectedOptions, setSelectedOptions] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    setSelectedOptions({});
    setQuantity(1);
    setError("");
  }, [isOpen, item]);

  const handleRadio = (groupTitle, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [groupTitle]: value,
    }));

    setError("");
  };

  const handleCheckbox = (group, value) => {
    const current = selectedOptions[group.title] || [];

    let next = [...current];

    if (next.includes(value)) {
      next = next.filter((v) => v !== value);
    } else {
      if (group.max && next.length >= group.max) {
        return;
      }

      next.push(value);
    }

    setSelectedOptions((prev) => ({
      ...prev,
      [group.title]: next,
    }));

    setError("");
  };

  const totalPrice = useMemo(() => {
    if (!item) return 0;

  let total = item.price || 0;

  (item.options || []).forEach((group) => {
    const selected = selectedOptions[group.title];

    if (!selected) return;

    const values = Array.isArray(selected)
      ? selected
      : [selected];

    values.forEach((value) => {
      const found = group.items.find((option) =>
        typeof option === "string"
          ? option === value
          : option.name === value
      );

      if (found && typeof found === "object") {
        total += found.price || 0;
      }
    });
  });

  return total;
}, [item, selectedOptions]);
if (!isOpen || !item) return null;

const handleSubmit = () => {
    for (const group of item.options || []) {
      const value = selectedOptions[group.title];

      if (group.required) {
        if (group.type === "radio" && !value) {
          setError(`กรุณาเลือก ${group.title}`);
          return;
        }

        if (group.type === "checkbox") {
          const count = value?.length || 0;

          if (group.min && count < group.min) {
            setError(
              `กรุณาเลือก ${group.title} อย่างน้อย ${group.min} รายการ`
            );
            return;
          }
        }
      }
    }

    addItem({
      id: `${item.id}-${Date.now()}`,
      productId: item.id,
      name: item.name,
      image: item.image,
      quantity,
      totalPrice: totalPrice * quantity,
      options: selectedOptions,
    });

    onClose();
  };

  return (
    <div className="product-modal__overlay">
      <div className="product-modal">

        <button
          className="product-modal__close"
          onClick={onClose}
          type="button"
        >
          ×
        </button>

        <div className="product-modal__content">

          <div className="product-modal__image-wrap">
            <img
              src={item.image}
              alt={item.name}
              className="product-modal__image"
            />
          </div>

          <div className="product-modal__details">

            <p className="product-modal__eyebrow">
              ปรับแต่งเมนู
            </p>

            <h2>{item.name}</h2>

            {Array.isArray(item.description)
              ? item.description.map((text, index) => (
                  <p key={index}>{text}</p>
                ))
              : item.description && (
                  <p>{item.description}</p>
                )}

            <h3 className="product-modal__price">
              {item.price} บาท
            </h3>

            {(item.options || []).map((group) => (
              <OptionGroup
                key={group.title}
                group={group}
                value={selectedOptions[group.title]}
                onRadio={handleRadio}
                onCheckbox={handleCheckbox}
              />
            ))}

            <QuantitySelector
              quantity={quantity}
              setQuantity={setQuantity}
            />

            {error && (
              <p className="product-modal__error">
                {error}
              </p>
            )}

            <div className="product-modal__footer">

              <div>

                <small>ยอดรวม</small>

                <h2>
                  {(totalPrice * quantity).toLocaleString()} บาท
                </h2>

              </div>

              <button
                className="product-modal__submit"
                type="button"
                onClick={handleSubmit}
              >
                เพิ่มลงตะกร้า
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductModal;