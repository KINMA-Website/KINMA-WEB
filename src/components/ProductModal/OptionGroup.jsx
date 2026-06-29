function OptionGroup({
  group,
  value,
  onRadio,
  onCheckbox,
}) {
  return (
    <div className="product-modal__section">
      <div className="product-modal__section-header">
        <strong>{group.title}</strong>

        {group.required && (
          <span className="required">*จำเป็น</span>
        )}
      </div>

      {(group.min || group.max) && (
        <small className="product-modal__helper">
          เลือก
          {group.min ? ` อย่างน้อย ${group.min}` : ""}
          {group.max ? ` สูงสุด ${group.max}` : ""}
          {" "}รายการ
        </small>
      )}

      <div className="product-modal__options">
        {group.items.map((item, index) => {
          const label =
            typeof item === "string"
              ? item
              : item.name;

          const price =
            typeof item === "string"
              ? 0
              : item.price;

          if (group.type === "radio") {
            return (
              <label
                key={index}
                className="product-modal__option"
              >
                <input
                  type="radio"
                  name={group.title}
                  checked={value === label}
                  onChange={() =>
                    onRadio(group.title, label)
                  }
                />

                <span>
                  {label}

                  {price > 0 && (
                    <strong>
                      {" "}
                      (+{price} บาท)
                    </strong>
                  )}
                </span>
              </label>
            );
          }

          const checked =
            (value || []).includes(label);

          return (
            <label
              key={index}
              className="product-modal__option"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() =>
                  onCheckbox(group, label)
                }
              />

              <span>
                {label}

                {price > 0 && (
                  <strong>
                    {" "}
                    (+{price} บาท)
                  </strong>
                )}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default OptionGroup;