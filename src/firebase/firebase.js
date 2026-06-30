import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyCypTtMqJ3OGLB1b-n4aqNB4nJBQLQq1nY",

  authDomain: "kinma-795d9.firebaseapp.com",

  projectId: "kinma-795d9",

  storageBucket: "kinma-795d9.firebasestorage.app",

  messagingSenderId: "882811035087",

  appId: "1:882811035087:web:0c751854f91fd32df446ba",

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);