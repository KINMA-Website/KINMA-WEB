import { useEffect, useState } from "react";
import "./Dashboard.css";

import {
  getShopStatus,
  updateShopStatus,
} from "../services/shopService";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

useEffect(() => {
  loadShop();
}, []);

const loadShop = async () => {
  const data = await getShopStatus();

  if (data) {
    setIsOpen(data.isOpen);
  }
};

const changeShopStatus = async (status) => {
  await updateShopStatus(status);
  setIsOpen(status);
};
  return (
    <div className="dashboard">

      <header className="dashboard-header">

        <h1>KINMA ADMIN</h1>

        <button className="logout-btn">
          🚪 Logout
        </button>

      </header>

      <div className="dashboard-card">

        <h2>

  {isOpen
    ? "🟢 ร้านเปิดอยู่"
    : "🔴 ร้านปิดอยู่"}

</h2>

        <div className="shop-buttons">

          <button
  className="open-btn"
  onClick={() => changeShopStatus(true)}
>
  เปิดร้าน
</button>

          <button
  className="close-btn"
  onClick={() => changeShopStatus(false)}
>
  ปิดร้าน
</button>

        </div>

      </div>

      <div className="dashboard-card">

        <h2>📦 จัดการสินค้า</h2>

        <div className="product-row">

          <span>ชุดเริ่มต้น</span>

          <span>109 บาท</span>

          <div>

            <button>✏️</button>

            <button>🗑️</button>

          </div>

        </div>

        <div className="product-row">

          <span>ชุดขายดี</span>

          <span>139 บาท</span>

          <div>

            <button>✏️</button>

            <button>🗑️</button>

          </div>

        </div>

        <button className="add-btn">
          ➕ เพิ่มสินค้า
        </button>

      </div>

    </div>
  );
}

export default Dashboard;