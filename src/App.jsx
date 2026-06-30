import "./App.css";
import MenuSection from "./components/Menu/MenuSection";
import Cart from "./components/Cart/Cart";
import { useCart } from "./context/CartContext";
import logo from "./assets/logo/LOGO1.png";

function App() {
  const { itemCount, setIsOpen } = useCart();

  return (
    <div className="app">
      <header className="header">
        <div className="brand">
  <img
    src={logo}
    alt="KINMA"
    className="brand-logo"
  />

  <div className="brand-text">
    <span className="brand-mark">KINMA</span>
    <p>มาม่าเผ็ดเกาหลี</p>
  </div>
</div>
        <div className="header-actions">
          <a className="header-link" href="#order">
            สั่งอาหาร
          </a>
          <button type="button" className="header-cart" onClick={() => setIsOpen(true)} aria-label="เปิดตะกร้า">
            🛒
            <span className="header-cart__count">{itemCount}</span>
          </button>
        </div>
      </header>

      <main className="main">
        <section className="hero" id="home">
          <div className="hero-content">
            <h1 className="hero-title">
  ร้าน KINMA
  <br />
  <span className="hero-title-sub">
    มาม่าเผ็ดเกาหลี
  </span>
</h1>

<p className="hero-subtitle">
  สามารถเลือกเมนูอาหารด้านล่างได้เลย
</p>

<div className="hero-info">
  <span>🕒 เปิดทุกวัน 16:00 - 22:00</span>
  <span>📍 ตลาดหลิ่งมื่น / ตลาด 99 ไนท์มาร์เก็ต</span>
</div>
<div className="hero-map">
  <iframe
    title="KINMA Map"
    src="https://www.google.com/maps?q=ตลาดหลิ่งมื่น เชียงใหม่&output=embed"
    loading="lazy"
    allowFullScreen
  />
</div>
            <h3 className="other-order-title">
  ช่องทางสั่งซื้อช่องทางอื่น ๆ
</h3>
            <div className="hero-actions">
              <a
                className="btn btn-grab"
                href="https://r.grab.com/g/6-20260627_231249_6F50F5E33A9349AF8E448EB34F35CE0D_MEXMPS-3-C733BCLUGVACGE"
                target="_blank"
                rel="noreferrer"
              >
                GrabFood
              </a>
              <a
                className="btn btn-lineman"
                href="https://wongn.ai/229D1w"
                target="_blank"
                rel="noreferrer"
              >
                LINE MAN
              </a>
              <a
                className="btn btn-shopee"
                href="https://shopee.co.th/universal-link/now-food/shop/10404892?deep_and_deferred=1&shareChannel=copy_link"
                target="_blank"
                rel="noreferrer"
              >
                ShopeeFood
              </a>
            </div>
          </div>
        </section>

        <section className="info-strip" id="order">

  <div className="step-card">

    <div className="step-title">
      🛒 วิธีการสั่งซื้อ
    </div>

    <p>1️⃣ เลือกเมนูที่ต้องการ แล้วเพิ่มลงตะกร้า</p>

    <p>2️⃣ กดปุ่ม <strong>ดำเนินการสั่งซื้อ</strong></p>

    <p>3️⃣ กรอกข้อมูลจัดส่งให้ครบถ้วน</p>

    <p>4️⃣ กด <strong>คัดลอกข้อความ</strong></p>

    <p>5️⃣ ระบบจะเปิด LINE OA ของร้านโดยอัตโนมัติ</p>

    <p>6️⃣ วางข้อความที่คัดลอกไว้ แล้วกดส่ง</p>

    <p>7️⃣ ทางร้านจะตอบกลับ พร้อมแจ้งช่องทางการชำระเงิน</p>

    <hr />

    <p className="step-warning">
      ⚠️ หากพบปัญหาในการสั่งซื้อ สามารถแจ้งทางร้านได้ตลอดครับ
    </p>

  </div>

  <div className="step-card">

    <div className="step-title">
      🚚 ขั้นตอนการส่งฟรี
    </div>

    <p><strong>1️⃣ สั่งครบ 100 บาทขึ้นไป</strong></p>

    <p>✅ ส่งฟรีในระยะทางไม่เกิน <strong>10 กิโลเมตร</strong></p>

    <hr />

    <p><strong>2️⃣ ระยะทางมากกว่า 10 กิโลเมตร</strong></p>

    <p>
      แนะนำให้สั่งผ่าน <strong>GrabFood</strong>
      เพื่อความสะดวกในการจัดส่งครับ 😊
    </p>

  </div>

  <div className="step-card">

    <div className="step-title">
      ⭐ วิธีการสะสมแต้ม
    </div>

    <p><strong>1️⃣ สะสมแต้ม</strong></p>

    <p>ทุกยอด <strong>50 บาท = 1 แต้ม ⭐</strong></p>

    <p>ตัวอย่าง ยอด 220 บาท รับ 4 แต้ม</p>

    <hr />

    <p><strong>2️⃣ ยืนยันการชำระเงิน</strong></p>

    <p>
      หลังโอนเงินและส่งสลิปใน LINE
      ทางร้านจะคำนวณแต้มตามยอดซื้อ
    </p>

    <hr />

    <p><strong>3️⃣ รับแต้มผ่าน QR Code</strong></p>

    <p>
      ทางร้านจะส่ง QR Code ให้ลูกค้า
      สแกนเพื่อรับแต้ม ✨
    </p>

    <hr />

    <p><strong>4️⃣ แลกรางวัล</strong></p>

    <p>
      สะสมแต้มครบ แลกรับ
      <strong> อิตาเลี่ยนโซดา 1 แก้ว</strong>
    </p>

    <p className="step-warning">
      📸 กรุณาแคปหน้าจอการกดรับรางวัลไว้ทุกครั้ง
    </p>

    <hr />

    <p><strong>กรณีที่ 1</strong></p>

    <p>รับเฉพาะของรางวัล</p>

    <p>ค่าส่ง <strong>20 บาท</strong> (ภายใน 10 กม.)</p>

    <br />

    <p><strong>กรณีที่ 2</strong></p>

    <p>รับรางวัลพร้อมสั่งเมนูครบ <strong>100 บาทขึ้นไป</strong></p>

    <p>✅ ส่งฟรีภายในระยะ <strong>10 กิโลเมตร</strong></p>

  </div>

</section>

        <MenuSection />
      </main>

      <footer className="footer">
        <p>KINMA • มาม่าเผ็ดเกาหลี</p>
        <p>ติดตามและสั่งผ่าน GrabFood / LINE MAN / ShopeeFood</p>
      </footer>

      <Cart />
    </div>
  );
}

export default App;