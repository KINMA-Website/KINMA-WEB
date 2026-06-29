import menuDK1 from "../assets/menu/menuDK1.png";
import menuDK2 from "../assets/menu/menuDK2.png";
import menuDK3 from "../assets/menu/menuDK3.png";
import menuDK4 from "../assets/menu/menuDK4.png";
import menuDK5 from "../assets/menu/menuDK5.png";
import menuDK6 from "../assets/menu/menuDK6.png";
import menuDK7 from "../assets/menu/menuDK7.png";

import { sweetnessOptions } from "./options";

export default [
  {
    id: 201,
    category: "เครื่องดื่ม",
    badge: "ขายดี",
    name: "🥤 โค้กถัง ซ่าเต็มแม็กซ์🔥",
    description: "💥โค้กถังแก้ว 32oz❗️",
    price: 30,
    image: menuDK1,
  },

  {
    id: 202,
    category: "เครื่องดื่ม",
    badge: "ขายดี",
    name: "💥 สไปรท์ถัง โอเวอร์ไซซ์",
    description: "💥สไปรท์ถังแก้ว 32oz❗️",
    price: 30,
    image: menuDK2,
  },

  {
    id: 203,
    category: "เครื่องดื่ม",
    name: "🥤 อิตาเลี่ยนโซดา - บลูฮาวาย",
    price: 25,
    image: menuDK3,
    options: [
      {
        title: "ระดับความหวาน",
        type: "radio",
        required: true,
        items: sweetnessOptions,
      },
    ],
  },

  {
    id: 204,
    category: "เครื่องดื่ม",
    name: "🍓 อิตาเลี่ยนโซดา - สตรอว์เบอร์รี่โซดา",
    price: 25,
    image: menuDK4,
    options: [
      {
        title: "ระดับความหวาน",
        type: "radio",
        required: true,
        items: sweetnessOptions,
      },
    ],
  },

  {
    id: 205,
    category: "เครื่องดื่ม",
    name: "🍇 อิตาเลี่ยนโซดา - องุ่นโซดา",
    price: 25,
    image: menuDK5,
    options: [
      {
        title: "ระดับความหวาน",
        type: "radio",
        required: true,
        items: sweetnessOptions,
      },
    ],
  },

  {
    id: 206,
    category: "เครื่องดื่ม",
    name: "🍋 อิตาเลี่ยนโซดา - น้ำผึ้งมะนาว",
    price: 25,
    image: menuDK6,
    options: [
      {
        title: "ระดับความหวาน",
        type: "radio",
        required: true,
        items: sweetnessOptions,
      },
    ],
  },

  {
    id: 207,
    category: "เครื่องดื่ม",
    name: "🍏 อิตาเลี่ยนโซดา - แอปเปิ้ลเขียว",
    price: 25,
    image: menuDK7,
    options: [
      {
        title: "ระดับความหวาน",
        type: "radio",
        required: true,
        items: sweetnessOptions,
      },
    ],
  },
]