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
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
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
