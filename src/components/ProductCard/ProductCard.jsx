import "./ProductCard.css";

function ProductCard({ item }) {
  return (
    <article className="product-card">
      <img className="product-card__image" src={item.image} alt={item.name} />
      <div className="product-card__body">
        <div className="product-card__top">
          <h3>{item.name}</h3>
          <span className="product-card__price">{item.price} บาท</span>
        </div>
        <p>{item.description}</p>
        <button type="button" className="product-card__button">
          เลือก
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
