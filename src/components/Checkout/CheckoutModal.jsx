import { useState } from "react";
import "./CheckoutModal.css";

function CheckoutModal({ open, onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [building, setBuilding] = useState("");
  const [note, setNote] = useState("");

  if (!open) return null;

  return (
    <div className="checkout-overlay">
      <div className="checkout-modal">

        <h2>ข้อมูลสำหรับจัดส่ง</h2>

        <label>👤 ชื่อผู้สั่ง</label>
        <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder="ชื่อ-นามสกุล"
        />

        <label>📞 เบอร์โทร</label>
        <input
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          placeholder="08xxxxxxxx"
        />

        <label>📍 ที่อยู่</label>
        <textarea
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
          placeholder="บ้านเลขที่ / หอพัก / คอนโด"
        />

        <label>🏢 อาคาร / ชั้น / ห้อง</label>
        <input
          value={building}
          onChange={(e)=>setBuilding(e.target.value)}
        />

        <label>📝 หมายเหตุ</label>
        <textarea
          value={note}
          onChange={(e)=>setNote(e.target.value)}
          placeholder="เช่น โทรก่อนถึง"
        />

        <div className="checkout-buttons">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            ยกเลิก
          </button>

          <button
  className="confirm-btn"
  onClick={() => {

    if (!name.trim()) {
      alert("กรุณากรอกชื่อ");
      return;
    }

    if (!phone.trim()) {
      alert("กรุณากรอกเบอร์โทร");
      return;
    }

    if (!address.trim()) {
      alert("กรุณากรอกที่อยู่");
      return;
    }

    onSubmit({
      name,
      phone,
      address,
      building,
      note,
      location,
    });
  }}
>
  ยืนยันการสั่งซื้อ
</button>

        </div>

      </div>
    </div>
  );
}

export default CheckoutModal;