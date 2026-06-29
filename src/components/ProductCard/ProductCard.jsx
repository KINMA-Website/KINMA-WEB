import "./ProductCard.css";

function ProductCard({ item, onSelect }) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img className="product-card__image" src={item.image} alt={item.name} />
        {item.recommended ? <span className="product-card__badge product-card__badge--recommended">แนะนำ</span> : null}
        {item.soldOut ? <span className="product-card__badge product-card__badge--sold">ขายแล้ว</span> : null}
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
        <button type="button" className="product-card__button" onClick={() => onSelect(item)}>
          เลือก
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
