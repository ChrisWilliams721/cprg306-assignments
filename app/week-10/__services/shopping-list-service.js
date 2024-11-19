import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userId) {
  const items = [];
  const itemsRef = collection(db, `users/${userId}/items`);
  const querySnapshot = await getDocs(query(itemsRef));
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
}
async function addItem(userId, item) {
  const itemsRef = collection(db, `users/${userId}/items`);
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
}

