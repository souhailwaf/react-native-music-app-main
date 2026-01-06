import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";

// Create a new user document in Firestore
export const createUserDocument = async (userId, userData) => {
  try {
    await setDoc(doc(db, "users", userId), {
      ...userData,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error("Error creating user document:", error);
    throw error;
  }
};

// Get user data from Firestore
export const getUserData = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      console.log("No user data found!");
      return null;
    }
  } catch (error) {
    console.error("Error getting user data:", error);
    throw error;
  }
};

// Update user data in Firestore
export const updateUserData = async (userId, userData) => {
  try {
    await updateDoc(doc(db, "users", userId), userData);
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error;
  }
};

// Add a new favorite song
export const addFavoriteSong = async (userId, songData) => {
  try {
    const favoritesRef = collection(db, "users", userId, "favorites");
    await addDoc(favoritesRef, {
      ...songData,
      addedAt: new Date(),
    });
  } catch (error) {
    console.error("Error adding favorite song:", error);
    throw error;
  }
};

// Get user's favorite songs
export const getUserFavorites = async (userId) => {
  try {
    const favoritesRef = collection(db, "users", userId, "favorites");
    const querySnapshot = await getDocs(favoritesRef);
    const favorites = [];
    querySnapshot.forEach((doc) => {
      favorites.push({ id: doc.id, ...doc.data() });
    });
    return favorites;
  } catch (error) {
    console.error("Error getting favorites:", error);
    throw error;
  }
};

// Remove a favorite song
export const removeFavoriteSong = async (userId, favoriteId) => {
  try {
    await deleteDoc(
      doc(db, "users", userId, "favorites", favoriteId)
    );
  } catch (error) {
    console.error("Error removing favorite song:", error);
    throw error;
  }
};
