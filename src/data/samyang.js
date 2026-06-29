import menuD1 from "../assets/menu/menuD1.png";
import menuD2 from "../assets/menu/menuD2.png";
import menuD3 from "../assets/menu/menuD3.png";
import menuD4 from "../assets/menu/menuD4.png";
import menuD5 from "../assets/menu/menuD5.png";
import menuD6 from "../assets/menu/menuD6.png";
import menuD7 from "../assets/menu/menuD7.png";
import menuD8 from "../assets/menu/menuD8.png";

import {
  extraToppings,
  sauceOptions,
} from "./options";

export default [
  {
    id: 101,
    category: "SAMYANG",
    name: "🔥 มาม่าเกาหลี SAMYANG x ฮ็อตชิคเก้น ไก่เผ็ดพ่นไฟ",
    description: [
      "ความเผ็ด🌶️ ⭐⭐⭐⭐⭐",
      "⚠️ ราคานี้ไม่รวมท็อปปิ้ง",
    ],
    price: 69,
    image: menuD1,
    options: [
      {
        title: "เลือกท็อปปิ้งเพิ่มเติม",
        type: "checkbox",
        max: 7,
        items: extraToppings,
      },
      {
        title: "ใส่ซอสพริก",
        type: "radio",
        required: true,
        items: sauceOptions,
      },
    ],
  },

  {
    id: 102,
    category: "SAMYANG",
    name: "🍝 มาม่าเกาหลี SAMYANG x คาโบนาร่า กลิ่นหอมยั่วยวน",
    description: [
      "ความเผ็ด🌶️ ⭐⭐",
      "⚠️ ราคานี้ไม่รวมท็อปปิ้ง",
    ],
    price: 69,
    image: menuD2,
    options: [
      {
        title: "เลือกท็อปปิ้งเพิ่มเติม",
        type: "checkbox",
        max: 7,
        items: extraToppings,
      },
      {
        title: "ใส่ซอสพริก",
        type: "radio",
        required: true,
        items: sauceOptions,
      },
    ],
  },

  {
    id: 103,
    category: "SAMYANG",
    name: "🧀 มาม่าเกาหลี SAMYANG x ชีส เยิ้มลาวา",
    description: [
      "ความเผ็ด🌶️ ⭐⭐⭐",
      "⚠️ ราคานี้ไม่รวมท็อปปิ้ง",
    ],
    price: 69,
    image: menuD3,
    options: [
      {
        title: "เลือกท็อปปิ้งเพิ่มเติม",
        type: "checkbox",
        max: 7,
        items: extraToppings,
      },
      {
        title: "ใส่ซอสพริก",
        type: "radio",
        required: true,
        items: sauceOptions,
      },
    ],
  },

  {
    id: 104,
    category: "SAMYANG",
    name: "🧀 มาม่าเกาหลี SAMYANG x ควอทโทรชีส ชีสเยิ้ม เผ็ดอร่อย",
    description: [
      "ความเผ็ด🌶️ ⭐⭐⭐⭐",
      "⚠️ ราคานี้ไม่รวมท็อปปิ้ง",
    ],
    price: 69,
    image: menuD4,
    options: [
      {
        title: "เลือกท็อปปิ้งเพิ่มเติม",
        type: "checkbox",
        max: 7,
        items: extraToppings,
      },
      {
        title: "ใส่ซอสพริก",
        type: "radio",
        required: true,
        items: sauceOptions,
      },
    ],
  },

  {
    id: 105,
    category: "SAMYANG",
    name: "🍝 มาม่าเกาหลี SAMYANG x ครีมคาโบนาร่า หอมหวานอร่อย",
    description: [
      "ความเผ็ด🌶️ ⭐",
      "⚠️ ราคานี้ไม่รวมท็อปปิ้ง",
    ],
    price: 69,
    image: menuD5,
    options: [
      {
        title: "เลือกท็อปปิ้งเพิ่มเติม",
        type: "checkbox",
        max: 7,
        items: extraToppings,
      },
      {
        title: "ใส่ซอสพริก",
        type: "radio",
        required: true,
        items: sauceOptions,
      },
    ],
  },

  {
    id: 106,
    category: "SAMYANG",
    name: "🌺 มาม่าเกาหลี SAMYANG x โรเซ่ เผ็ดละมุนลิ้น",
    description: [
      "ความเผ็ด🌶️ ⭐⭐⭐",
      "⚠️ ราคานี้ไม่รวมท็อปปิ้ง",
    ],
    price: 69,
    image: menuD6,
    options: [
      {
        title: "เลือกท็อปปิ้งเพิ่มเติม",
        type: "checkbox",
        max: 7,
        items: extraToppings,
      },
      {
        title: "ใส่ซอสพริก",
        type: "radio",
        required: true,
        items: sauceOptions,
      },
    ],
  },

  {
    id: 107,
    category: "SAMYANG",
    badge: "เผ็ดสุด",
    name: "🥵 มาม่าเกาหลี SAMYANG x สไปซี่ราเมง X2",
    description: [
      "ความเผ็ด🌶️ ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐",
      "⚠️ ราคานี้ไม่รวมท็อปปิ้ง",
    ],
    price: 69,
    image: menuD7,
    options: [
      {
        title: "เลือกท็อปปิ้งเพิ่มเติม",
        type: "checkbox",
        max: 7,
        items: extraToppings,
      },
      {
        title: "ใส่ซอสพริก",
        type: "radio",
        required: true,
        items: sauceOptions,
      },
    ],
  },

  {
    id: 108,
    category: "SAMYANG",
    name: "💥 มาม่าเกาหลี SAMYANG x หม่าล่า เผ็ดซ่าปลายลิ้น",
    description: [
      "ความเผ็ด🌶️ ⭐⭐⭐⭐",
      "⚠️ ราคานี้ไม่รวมท็อปปิ้ง",
    ],
    price: 69,
    image: menuD8,
    options: [
      {
        title: "เลือกท็อปปิ้งเพิ่มเติม",
        type: "checkbox",
        max: 7,
        items: extraToppings,
      },
      {
        title: "ใส่ซอสพริก",
        type: "radio",
        required: true,
        items: sauceOptions,
      },
    ],
  },
]