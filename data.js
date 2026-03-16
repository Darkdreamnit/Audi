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

/* ==========================================
   DTC DATABASE
========================================== */

const dtcDatabase = [

{
code: "P0100",
description: "Mass Air Flow Circuit Malfunction",
severity: "Medium",
symptoms: [
"check engine light",
"rough idle",
"poor acceleration",
"stalling"
],
causes: [
"faulty mass air flow sensor",
"vacuum leak",
"dirty air filter",
"damaged wiring"
],
fixes: [
"clean or replace mass air flow sensor",
"inspect intake hoses for leaks",
"replace air filter",
"repair wiring harness"
],
estimatedCost: "$80 - $350",
difficulty: "Easy",
models: ["Audi A4","Audi A6","Audi Q5"]
},

{
code: "P0171",
description: "System Too Lean (Bank 1)",
severity: "Medium",
symptoms: [
"check engine light",
"rough idle",
"engine hesitation",
"poor fuel economy"
],
causes: [
"vacuum leak",
"dirty MAF sensor",
"fuel pump weak",
"clogged fuel injector"
],
fixes: [
"clean mass air flow sensor",
"repair vacuum leaks",
"replace fuel pump",
"clean injectors"
],
estimatedCost: "$120 - $900",
difficulty: "Medium",
models: ["Audi A3","Audi A4","Audi A6","Audi Q7"]
},

{
code: "P0300",
description: "Random/Multiple Cylinder Misfire Detected",
severity: "High",
symptoms: [
"engine shaking",
"check engine flashing",
"loss of power",
"rough idle"
],
causes: [
"bad spark plugs",
"faulty ignition coils",
"fuel injector failure",
"low compression"
],
fixes: [
"replace spark plugs",
"replace ignition coils",
"clean or replace injectors",
"check compression"
],
estimatedCost: "$100 - $1200",
difficulty: "Medium",
models: ["Audi A4","Audi A6","Audi S4"]
},

{
code: "P0420",
description: "Catalyst System Efficiency Below Threshold",
severity: "Medium",
symptoms: [
"check engine light",
"reduced fuel economy",
"exhaust smell"
],
causes: [
"bad catalytic converter",
"faulty O2 sensor",
"exhaust leak"
],
fixes: [
"replace catalytic converter",
"replace oxygen sensors",
"repair exhaust leak"
],
estimatedCost: "$250 - $2000",
difficulty: "Medium",
models: ["Audi A4","Audi A5","Audi Q5"]
},

{
code: "P0455",
description: "Evaporative Emission System Leak (Large Leak)",
severity: "Low",
symptoms: [
"check engine light",
"fuel smell",
"failed emissions test"
],
causes: [
"loose gas cap",
"damaged EVAP hose",
"faulty purge valve"
],
fixes: [
"tighten or replace gas cap",
"repair EVAP hoses",
"replace purge valve"
],
estimatedCost: "$20 - $250",
difficulty: "Easy",
models: ["Audi A3","Audi A4","Audi A6"]
},

{
code: "P0113",
description: "Intake Air Temperature Sensor High Input",
severity: "Low",
symptoms: [
"check engine light",
"hard starting",
"rough idle"
],
causes: [
"bad IAT sensor",
"wiring issue",
"sensor unplugged"
],
fixes: [
"replace intake air temperature sensor",
"repair wiring",
"reconnect sensor"
],
estimatedCost: "$40 - $150",
difficulty: "Easy",
models: ["Audi A4","Audi Q3","Audi Q5"]
},

{
code: "P0128",
description: "Coolant Thermostat Below Regulating Temperature",
severity: "Low",
symptoms: [
"engine takes long to warm up",
"heater weak",
"check engine light"
],
causes: [
"stuck open thermostat",
"coolant sensor failure"
],
fixes: [
"replace thermostat",
"replace coolant temperature sensor"
],
estimatedCost: "$120 - $400",
difficulty: "Medium",
models: ["Audi A4","Audi A6","Audi Q5"]
},

{
code: "P0299",
description: "Turbocharger Underboost Condition",
severity: "High",
symptoms: [
"loss of power",
"turbo not spooling",
"check engine light"
],
causes: [
"boost leak",
"faulty turbo",
"wastegate issue"
],
fixes: [
"repair boost leak",
"replace turbocharger",
"repair wastegate actuator"
],
estimatedCost: "$150 - $2500",
difficulty: "Hard",
models: ["Audi A4","Audi S3","Audi S4"]
},

{
code: "P0507",
description: "Idle Control System RPM Higher Than Expected",
severity: "Medium",
symptoms: [
"high idle",
"engine revving at stop",
"check engine light"
],
causes: [
"vacuum leak",
"dirty throttle body",
"bad idle control valve"
],
fixes: [
"clean throttle body",
"repair vacuum leaks",
"replace idle control valve"
],
estimatedCost: "$80 - $350",
difficulty: "Easy",
models: ["Audi A4","Audi A6"]
},

{
code: "P0700",
description: "Transmission Control System Malfunction",
severity: "High",
symptoms: [
"transmission slipping",
"harsh shifting",
"check engine light"
],
causes: [
"transmission sensor failure",
"low transmission fluid",
"internal transmission damage"
],
fixes: [
"check transmission fluid",
"replace transmission sensor",
"repair transmission"
],
estimatedCost: "$150 - $3000",
difficulty: "Hard",
models: ["Audi A4","Audi A6","Audi Q7"]
}

]