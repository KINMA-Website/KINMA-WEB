import { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./Cart.css";
import CheckoutModal from "../Checkout/CheckoutModal";
import Loading from "../Loading/Loading";

function Cart() {
  const {
  items,
  totalPrice,
  removeItem,
  updateQuantity,
  clearCart,
  isOpen,
  setIsOpen,
} = useCart();
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const buildCheckoutMessage = (customer) => {
  const lines = [
    "🍜 KINMA มาม่าเผ็ดเกาหลี",
    "",
    "━━━━━━━━━━━━━━━━━━━━━━",
    "📦 ข้อมูลลูกค้า",
    "━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "👤 ชื่อ",
customer.name,
"",
"📞 เบอร์โทร",
customer.phone,
"",
"📍 ที่อยู่",
customer.address,
"",
"📍 พิกัด Google Maps",
customer.location || "ลูกค้าไม่ได้แชร์ตำแหน่ง",
"",
"🏢 อาคาร / ชั้น / ห้อง",
customer.building || "-",
"",
"📝 หมายเหตุ",
customer.note || "-",
"",
    "━━━━━━━━━━━━━━━━━━━━━━",
    "🍜 รายการอาหาร",
    "━━━━━━━━━━━━━━━━━━━━━━",
    "",

    ...items.flatMap((item) => {
      const options = item.options
        ? Object.entries(item.options).flatMap(([title, value]) => [
            `📌 ${title}`,
            ...(Array.isArray(value)
              ? value.map((v) => `   • ${v}`)
              : [`   • ${value}`]),
            "",
          ])
        : [];

      return [
        "━━━━━━━━━━━━",
        `🍜 ${item.name}`,
        "",
        ...options,
        `🔢 จำนวน : ${item.quantity}`,
        `💵 ราคารวม : ${item.totalPrice * item.quantity} บาท`,
        "",
      ];
    }),

    "━━━━━━━━━━━━━━━━━━━━━━",
    `💰 ยอดรวมทั้งหมด : ${totalPrice} บาท`,
    "━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "❤️ ขอบคุณที่อุดหนุน KINMA",
  ];

  return lines.join("\n");
};

  const handleCheckout = async (customer) => {
  if (items.length === 0) return;

  const message = buildCheckoutMessage(customer);

  setCheckoutMessage(message);

  setLoading(true);

  try {
    await navigator.clipboard.writeText(message);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setCopied(true);

    window.open(
  "https://line.me/R/ti/p/@204hgtyd",
  "_blank"
);

setLoading(false);

alert(
  "✅ คัดลอกออเดอร์เรียบร้อย\n\n" +
  "กำลังเปิด LINE...\n\n" +
  "เพียงกด 'วาง' แล้วส่งข้อความ"
);

// clearCart();
  } catch (err) {
  setLoading(false);

  console.error(err);
  alert("ไม่สามารถคัดลอกข้อความได้");
}
};

  return (
  <>
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-drawer__header">
        <div>
          <h3>ตะกร้าของคุณ</h3>
          <p>{items.length} รายการ</p>
        </div>
        <button type="button" className="cart-drawer__close" onClick={() => setIsOpen(false)}>
          ×
        </button>
      </div>

      {items.length === 0 ? (
        <div className="cart-drawer__empty">
          <p>ยังไม่มีสินค้าในตะกร้า</p>
        </div>
      ) : (
        <>
          <div className="cart-drawer__items">
            {items.map((item) => (
              <div key={item.id} className="cart-drawer__item">
                <div>
                  <h4>{item.name}</h4>
                  {item.options &&
  Object.entries(item.options).map(([title, value]) => (
    <div key={title} className="cart-option">
      <strong>{title}</strong>

      {Array.isArray(value) ? (
        value.map((option) => (
          <p key={option}>• {option}</p>
        ))
      ) : (
        <p>{value}</p>
      )}
    </div>
  ))}
                  <p className="cart-drawer__price">{item.totalPrice} บาท</p>
                </div>

                <div className="cart-drawer__controls">
                  <div className="cart-drawer__quantity">
                    <button type="button" onClick={() => updateQuantity(item.id, -1)}>
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.id, 1)}>
                      +
                    </button>
                  </div>
                  <button type="button" className="cart-drawer__remove" onClick={() => removeItem(item.id)}>
                    ลบ
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-drawer__footer">
            <div className="cart-drawer__summary">
              <span>ยอดรวม</span>
              <strong>{totalPrice} บาท</strong>
            </div>
            <div className="cart-drawer__actions">
              <button type="button" className="cart-drawer__clear" onClick={clearCart}>
                ล้างตะกร้า
              </button>
              <button
  type="button"
  className="cart-drawer__checkout"
  onClick={() => setCheckoutOpen(true)}
>
                {copied ? "📋 คัดลอกแล้ว" : "🛒 ดำเนินการสั่งซื้อ"}
              </button>
            </div>
          </div>
                </>
      )}
    </div>

    <CheckoutModal
      open={checkoutOpen}
      onClose={() => setCheckoutOpen(false)}
      onSubmit={(customer) => {
  setCheckoutOpen(false);

  handleCheckout(customer);
}}
    />

    <Loading
  show={loading}
  text="กำลังคัดลอกออเดอร์..."
  />
  
  </>
);
}

export default Cart;
