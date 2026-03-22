  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  increment,
  deleteDoc,
   getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAU2q1pvW13B5x3TH-OP8NfGX9MnM78LVo",
    authDomain: "audi-dtc.firebaseapp.com",
    projectId: "audi-dtc",
  };


// 🔥 DATABASE INIT

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);
  window.storage = storage;

  // 🔥 FORCE GLOBAL AVAILABILITY
  window.db = db;
  window.firebaseFns = {
    collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  increment,
  deleteDoc,
  ref,
  uploadBytes,
  getDownloadURL
  };

 

  console.log("✅ Firebase loaded");
