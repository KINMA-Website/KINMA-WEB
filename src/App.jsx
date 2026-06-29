import "./App.css";
import MenuSection from "./components/Menu/MenuSection";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="brand">
          <span className="brand-mark">KINMA</span>
          <p>มาม่าเผ็ดเกาหลี</p>
        </div>
        <a className="header-link" href="#order">
          สั่งอาหาร
        </a>
      </header>

      <main className="main">
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">ร้านอาหารเกาหลีสุดแซ่บ</p>
            <h1>
              มาม่าเผ็ดเกาหลี
              <br />
              พร้อมท็อปปิ้งสุดอร่อย
            </h1>
            <p className="hero-copy">
              เปิดทุกวัน 16:00 - 22:00
              <br />
              📍 ตลาดหลิ่งมื่น / ตลาด 99 ไนท์มาร์เก็ต
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="https://r.grab.com/g/6-20260627_231249_6F50F5E33A9349AF8E448EB34F35CE0D_MEXMPS-3-C733BCLUGVACGE"
                target="_blank"
                rel="noreferrer"
              >
                GrabFood
              </a>
              <a
                className="btn btn-secondary"
                href="https://wongn.ai/229D1w"
                target="_blank"
                rel="noreferrer"
              >
                LINE MAN
              </a>
              <a
                className="btn btn-secondary"
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
          <div>
            <strong>🍜</strong>
            <span>รสชาติแซ่บจัดเต็ม</span>
          </div>
          <div>
            <strong>🔥</strong>
            <span>เลือกท็อปปิ้งได้ตามชอบ</span>
          </div>
          <div>
            <strong>🚚</strong>
            <span>สั่งง่ายผ่านแอปช้อปปิ้ง</span>
          </div>
        </section>

        <MenuSection />
      </main>

      <footer className="footer">
        <p>KINMA • มาม่าเผ็ดเกาหลี</p>
        <p>ติดตามและสั่งผ่าน GrabFood / LINE MAN / ShopeeFood</p>
      </footer>
    </div>
  );
}

export default App;