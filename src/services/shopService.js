import {
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const shopRef = doc(db, "settings", "shop");

export async function getShopStatus() {
  const snapshot = await getDoc(shopRef);

  if (!snapshot.exists()) return null;

  return snapshot.data();
}

export async function updateShopStatus(isOpen) {
  await updateDoc(shopRef, {
    isOpen,
  });
}

export function listenShopStatus(callback) {
  return onSnapshot(shopRef, (snapshot) => {
    if (snapshot.exists()) {
      callback(snapshot.data());
    }
  });
}