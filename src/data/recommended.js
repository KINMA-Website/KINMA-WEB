import menu1 from "../assets/menu/menu1.png";
import menu2 from "../assets/menu/menu2.png";
import menu3 from "../assets/menu/menu3.png";
import menu4 from "../assets/menu/menu4.png";
import menu5 from "../assets/menu/menu5.png";
import menu6 from "../assets/menu/menu6.png";
import menu7 from "../assets/menu/menu7.png";

import {
  noodleFlavors,
  toppings,
  extraToppings,
  sauceOptions,
  softDrinks,
  italianSodaOptions,
} from "./options";

export default [
  {
    id: 1,
    category: "ชุดเมนูสำหรับคุณ",

    badge: "ขายดี",

    name: "💥ชุดจุกทะลัก 6 ท็อปปิ้ง",

    description: "💥รวมท็อปปิ้งฮิตทั้งหมด❗️",

    price: 194,

    image: menu1,

    options: [
      {
        title: "เลือกรสชาติมาม่า",
        type: "radio",
        required: true,
        items: noodleFlavors,
      },

      {
        title: "เลือกท็อปปิ้ง 6 อย่าง",
        type: "checkbox",
        required: true,
        min: 6,
        max: 6,
        items: toppings,
      },

      {
        title: "เพิ่มท็อปปิ้ง",
        type: "checkbox",
        required: false,
        max: 7,
        items: extraToppings,
      },

      {
        title: "ซอสพริก",
        type: "radio",
        required: true,
        items: sauceOptions,
      },
    ],
  },
{
  id: 2,
  category: "ชุดเมนูสำหรับคุณ",

  badge: "ขายดี",

  name: "💥สำหรับคนมีคู่! ชุดดูโอ้จุก x2 (อิ่มคู่ คุ้มสุด)",

  description: [
    "⚠️ รูปภาพใช้เพื่อการโฆษณาเท่านั้น",
    "⚠️ ราคานี้ไม่รวมท็อปปิ้งในภาพ",
    "❗️สามารถเลือกเพิ่มท็อปปิ้งได้ในเมนูเพิ่มเติม",
  ],

  price: 138,

  image: menu2,

  options: [
    {
      title: "เลือกรสชาติมาม่า ถ้วยที่ 1",
      type: "radio",
      required: true,
      items: noodleFlavors,
    },

    {
      title: "เลือกท็อปปิ้งเพิ่มเติม ถ้วยที่ 1",
      type: "checkbox",
      required: false,
      max: 7,
      items: extraToppings,
    },

    {
      title: "เลือกรสชาติมาม่า ถ้วยที่ 2",
      type: "radio",
      required: true,
      items: noodleFlavors,
    },

    {
      title: "เลือกท็อปปิ้งเพิ่มเติม ถ้วยที่ 2",
      type: "checkbox",
      required: false,
      max: 7,
      items: extraToppings,
    },

    {
      title: "แยกซอสพริก",
      type: "radio",
      required: true,
      items: [
        "แยกซอสพริก ถ้วยที่ 1",
        "แยกซอสพริก ถ้วยที่ 2",
        "แยกทั้ง 2 ถ้วย",
      ],
    },
  ],
},
{
  id: 3,
  category: "ชุดเมนูสำหรับคุณ",
  
  badge: "ขายดี",
  name: "🔥ชุดขายดี! มาม่าเผ็ดเกาหลี + น้ำอัดลมถัง❄️ X2 ท็อปปิ้ง🔥",
  description: [
    "⚠️ รูปภาพใช้เพื่อการโฆษณาเท่านั้น",
    "⚠️ ราคานี้ได้แค่ 2 ท็อปปิ้งในภาพ",
    "❗️สามารถเลือกเพิ่มท็อปปิ้งได้ในเมนูเพิ่มเติม",
  ],
  price: 139,
  image: menu3,
  options: [
    {
      title: "เลือกรสชาติมาม่า",
      type: "radio",
      required: true,
      items: noodleFlavors,
    },
    {
      title: "เลือกท็อปปิ้ง 2 อย่าง",
      type: "checkbox",
      required: true,
      min: 2,
      max: 2,
      items: toppings,
    },
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
    {
      title: "เลือกน้ำอัดลม",
      type: "radio",
      required: true,
      items: softDrinks,
    },
  ],
},
{
  id: 4,
  category: "ชุดเมนูสำหรับคุณ",
  badge: "แนะนำ",
  name: "💥มาม่าเผ็ดเกาหลี + โซดาซ่า X2 ท็อปปิ้ง🔥 (ชุดอิ่มครบ)",
  description: [
    "⚠️ รูปภาพใช้เพื่อการโฆษณาเท่านั้น",
    "⚠️ ราคานี้ได้แค่ 2 ท็อปปิ้งในภาพ",
    "❗️สามารถเลือกเพิ่มท็อปปิ้งได้ในเมนูเพิ่มเติม",
  ],
  price: 134,
  image: menu4,
  options: [
    {
      title: "เลือกรสชาติมาม่า",
      type: "radio",
      required: true,
      items: noodleFlavors,
    },
    {
      title: "เลือกท็อปปิ้ง 2 อย่าง",
      type: "checkbox",
      required: true,
      min: 2,
      max: 2,
      items: toppings,
    },
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
    {
      title: "เลือกน้ำอิตาเลี่ยนโซดา",
      type: "radio",
      required: true,
      items: italianSodaOptions,
    },
  ],
},
{
  id: 5,
  category: "ชุดเมนูสำหรับคุณ",
  badge: "เริ่มต้น",
  name: "💥ชุดเริ่มต้น! มาม่าเผ็ด🤤 X2 ท็อปปิ้ง🔥",
  description: [
    "⚠️ รูปภาพใช้เพื่อการโฆษณาเท่านั้น",
    "⚠️ ราคานี้ได้แค่ 2 ท็อปปิ้งในภาพ",
    "❗️สามารถเลือกเพิ่มท็อปปิ้งได้ในเมนูเพิ่มเติม",
  ],
  price: 109,
  image: menu5,
  options: [
    {
      title: "เลือกรสชาติมาม่า",
      type: "radio",
      required: true,
      items: noodleFlavors,
    },
    {
      title: "เลือกท็อปปิ้ง 2 อย่าง",
      type: "checkbox",
      required: true,
      min: 2,
      max: 2,
      items: toppings,
    },
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
  id: 6,
  category: "ชุดเมนูสำหรับคุณ",
  badge: "ขายดี",
  name: "💥ชุดขายดี! มาม่าเผ็ดเกาหลี🌶️ + น้ำอัดลมถัง❄️",
  description: [
    "⚠️ รูปภาพใช้เพื่อการโฆษณาเท่านั้น",
    "⚠️ ราคานี้ไม่รวมท็อปปิ้งในภาพ",
    "❗️สามารถเลือกเพิ่มท็อปปิ้งได้ในเมนูเพิ่มเติม",
  ],
  price: 99,
  image: menu6,
  options: [
    {
      title: "เลือกรสชาติมาม่า",
      type: "radio",
      required: true,
      items: noodleFlavors,
    },
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
    {
      title: "เลือกน้ำอัดลม",
      type: "radio",
      required: true,
      items: softDrinks,
    },
  ],
},
{
  id: 7,
  category: "ชุดเมนูสำหรับคุณ",
  badge: "คุ้มสุด",
  name: "🔥มาม่าเผ็ดเกาหลี + โซดาซ่า❄️ (ชุดแพ็คคู่)",
  description: [
    "⚠️ รูปภาพใช้เพื่อการโฆษณาเท่านั้น",
    "⚠️ ราคานี้ไม่รวมท็อปปิ้งในภาพ",
    "❗️สามารถเลือกเพิ่มท็อปปิ้งได้ในเมนูเพิ่มเติม",
  ],
  price: 94,
  image: menu7,
  options: [
    {
      title: "เลือกรสชาติมาม่า",
      type: "radio",
      required: true,
      items: noodleFlavors,
    },
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
    {
      title: "เลือกน้ำอิตาเลี่ยนโซดา",
      type: "radio",
      required: true,
      items: italianSodaOptions,
    },
  ],
}
]