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
    apiKey: "AIzaSyADk-UxT3z_9zPUMJ-5tB47C7b2ut2265M",
  authDomain: "audi-662d3.firebaseapp.com",
  projectId: "audi-662d3",
  storageBucket: "audi-662d3.firebasestorage.app",
  messagingSenderId: "795768172857",
  appId: "1:795768172857:web:129b079595c66460ac38e8",
  measurementId: "G-GX3KNV6PSX",
    storageBucket: "audi-dtc.firebasestorage.app" // 🔥 ADD THIS
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
