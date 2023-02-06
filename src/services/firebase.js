import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAI8lM-AzhtbazUW_FyhnTrwLw3CAOH4jg",
  authDomain: "zitro-app-c15a5.firebaseapp.com",
  projectId: "zitro-app-c15a5",
  storageBucket: "zitro-app-c15a5.appspot.com",
  messagingSenderId: "121264682166",
  appId: "1:121264682166:web:a813cb11c8e06cc643a217",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getProductById = async (id) => {
  const product = await getDoc(doc(db, "products", id));
  if (product.exists()) {
    return product.data();
  } else {
    console.error("Error: The provided product id not exist");
  }
};

export const updateStockProduct = async (id, amount, stock) => {
  const product = doc(db, "products", id);
  await updateDoc(product, { stock: stock - amount });
};

export const AddOrder = async (order) => {
  const docOrder = await addDoc(collection(db, "orders"), order);
  return docOrder.id;
};
