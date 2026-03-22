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
  deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAU2q1pvW13B5x3TH-OP8NfGX9MnM78LVo",
    authDomain: "audi-dtc.firebaseapp.com",
    projectId: "audi-dtc",
  };


// 🔥 DATABASE INIT

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  window.db = db;
  const storage = getStorage(app);
  

  // 🔥 FORCE GLOBAL AVAILABILITY EXPORTS
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
  deleteDoc
};

window.firebaseStorage = {
  storage,
  ref,
  uploadBytes,
  getDownloadURL
};


  

 

  console.log("✅ Firebase loaded");
