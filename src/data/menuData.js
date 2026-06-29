import recommended from "./recommended";
import samyang from "./samyang";
import drinks from "./drinks";

export const categories = [
  "ชุดเมนูสำหรับคุณ",
  "SAMYANG",
  "เครื่องดื่ม",
];

export const categoryLabels = {
  "ชุดเมนูสำหรับคุณ": "🍜 เมนูแนะนำ",
  SAMYANG: "🌶️ Samyang",
  เครื่องดื่ม: "🥤 เครื่องดื่ม",
};

export const menuData = {
  categories,
  categoryLabels,
  menuItems: [
    ...recommended,
    ...samyang,
    ...drinks,
  ],
};