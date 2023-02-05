// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAI8lM-AzhtbazUW_FyhnTrwLw3CAOH4jg",
  authDomain: "zitro-app-c15a5.firebaseapp.com",
  projectId: "zitro-app-c15a5",
  storageBucket: "zitro-app-c15a5.appspot.com",
  messagingSenderId: "121264682166",
  appId: "1:121264682166:web:a813cb11c8e06cc643a217",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig); // firebaseApp instance
export const db = getFirestore(app); //firestore instance

//get product

export const getProductById = async (id) => {
  const product = await getDoc(doc(db, "products", id));
  if (product.exists()) {
    return product.data();
  } else {
    //toastify
    console.log("este producto no existe");
  }
};

//update product

export const updateStockProduct = async (id, amount, stock) => {
  const product = doc(db, "products", id);
  await updateDoc(product, { stock: stock - amount });
};

// addOrder
export const AddOrder = async (order) => {
  const docOrder = await addDoc(collection(db, "orders"), order);
  return docOrder.id;
};

/* const coleccion = collection(db,'products')// Reference Collection | query
const querySnapshot = getDocs(coleccion) // querySnapshot contains zero or more DocumentSnapshot

querySnapshot.then( resp =>{
  resp.docs.forEach( e =>{  // .docs → array of all documents in the querySnapshot → QueryDocumentSnapShot
    console.log(e)
    console.log(e.id , e.data()) //data() → return all fields in the document as an object
  })
}).catch(err =>{
  console.log(err)
})
 */

// add data

/* const docRef = addDoc(collection(db,'products'),newProduct)
docRef.then( e =>{
  console.log(e.id)
}).catch(err =>{
  console.log(err)
}) */
