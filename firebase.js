  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit } 
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAU2q1pvW13B5x3TH-OP8NfGX9MnM78LVo",
    authDomain: "audi-dtc.firebaseapp.com",
    projectId: "audi-dtc",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // 🔥 FORCE GLOBAL AVAILABILITY
  window.db = db;
  window.firebaseFns = {
    collection,
    addDoc,
    getDocs,
    query,
     doc,        // ✅ ADD THIS
  setDoc,      // ✅ ADD THIS
    orderBy,
    limit
  };

  console.log("✅ Firebase loaded");
