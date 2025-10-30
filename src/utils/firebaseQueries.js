import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const getPopularCategories = async () => {
  const popularCategoriesRef = collection(db, "popularCategories");
  const snapshot = await getDocs(popularCategoriesRef);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};


export const getProductCategories = async () => {
  const productCategoriesRef = collection(db, "productCategories");
  const snapshot = await getDocs(productCategoriesRef);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
