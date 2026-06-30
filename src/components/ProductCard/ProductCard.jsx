import "./ProductCard.css";

function ProductCard({ item, onSelect, shopOpen }) {

  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img className="product-card__image" src={item.image} alt={item.name} />
        {item.badge && (
  <span
    className={`product-card__badge product-card__badge--${item.badge}`}
  >
    {item.badge}
  </span>
)}
      </div>
      <div className="product-card__body">
        <div className="product-card__top">
          <div className="product-card__title-wrap">
            <h3>{item.name}</h3>
            <p className="product-card__subtitle">{item.category}</p>
          </div>
          <span className="product-card__price">{item.price} บาท</span>
        </div>
        <p className="product-card__description">{item.description}</p>
        <button
  type="button"
  className="product-card__button"
  disabled={!shopOpen}
  onClick={() => {
    if (shopOpen) {
      onSelect(item);
    }
  }}
>
  {shopOpen ? "เลือก" : "🔒 ร้านปิด"}
</button>
      </div>
    </article>
  );
}

export default ProductCard;
