/* ==========================================
   FIREBASE CONFIGURATION
   Replace values with your Firebase project
========================================== */

const firebaseConfig = {
  apiKey: "AIzaSyA1byZuKmj7ZyjTLZvLDtUl4qfLuyiFDbo",
  authDomain: "audi-dtc-pro.firebaseapp.com",
  databaseURL: "https://audi-dtc-pro-default-rtdb.firebaseio.com",
  projectId: "audi-dtc-pro",
  storageBucket: "audi-dtc-pro.firebasestorage.app",
  messagingSenderId: "1098221329925",
  appId: "1:1098221329925:web:0a12d9e67b1a313a02466c"
};

/* ==========================================
   GLOBAL FIREBASE VARIABLES
========================================== */

let firebaseApp = null;
let firebaseDatabase = null;
let firebaseStorage = null;


/* ==========================================
   INITIALIZE FIREBASE
========================================== */

function initFirebase() {

  try {

    firebaseApp = firebase.initializeApp(firebaseConfig);

    firebaseDatabase = firebase.database();

    firebaseStorage = firebase.storage();

    console.log("✅ Firebase connected");

    return true;

  } catch (error) {

    console.error("Firebase error:", error);

    return false;

  }

}


/* ==========================================
   DATABASE REFERENCE
========================================== */

function getCommunityPostsRef() {

  return firebaseDatabase.ref("community-posts");

}