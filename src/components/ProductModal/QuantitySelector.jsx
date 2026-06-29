function QuantitySelector({
  quantity,
  setQuantity,
}) {
  return (
    <div className="product-modal__quantity">

      <span>จำนวน</span>

      <div className="product-modal__quantity-controls">

        <button
          type="button"
          onClick={() =>
            setQuantity((q) => Math.max(1, q - 1))
          }
        >
          −
        </button>

        <span>{quantity}</span>

        <button
          type="button"
          onClick={() =>
            setQuantity((q) => q + 1)
          }
        >
          +
        </button>

      </div>

    </div>
  );
}

export default QuantitySelector;