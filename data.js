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
   MASTER DTC DATA LIBRARIES
========================================== */

const commonSymptoms = [
"check engine light",
"poor fuel economy",
"rough idle",
"engine hesitation",
"loss of power",
"hard starting",
"engine stalling",
"engine vibration"
]

const fuelCauses = [
"vacuum leak",
"dirty mass air flow sensor",
"weak fuel pump",
"clogged fuel injector",
"faulty fuel pressure regulator"
]

const ignitionCauses = [
"worn spark plugs",
"faulty ignition coils",
"fuel injector malfunction",
"low compression",
"wiring issues"
]

const evapCauses = [
"loose gas cap",
"damaged EVAP hose",
"faulty purge valve",
"charcoal canister failure"
]

const turboCauses = [
"boost leak",
"wastegate failure",
"faulty turbocharger",
"boost control solenoid failure"
]

const commonFixes = [
"replace faulty sensor",
"inspect and repair wiring",
"clean throttle body",
"replace damaged component",
"perform ECU reset",
"inspect vacuum hoses"
]

/* ==========================================
   BASE DTC LIST (REAL DESCRIPTIONS)
========================================== */

const dtcBase = {

"P0100":"Mass Air Flow Circuit Malfunction",
"P0101":"Mass Air Flow Circuit Range/Performance",
"P0102":"Mass Air Flow Circuit Low Input",
"P0103":"Mass Air Flow Circuit High Input",
"P0110":"Intake Air Temperature Circuit Malfunction",
"P0113":"Intake Air Temperature Sensor High Input",
"P0120":"Throttle Position Sensor Malfunction",
"P0128":"Coolant Thermostat Below Regulating Temperature",

"P0171":"System Too Lean Bank 1",
"P0172":"System Too Rich Bank 1",

"P0190":"Fuel Rail Pressure Sensor Circuit",

"P0200":"Injector Circuit Malfunction",

"P0217":"Engine Overtemperature Condition",

"P0234":"Turbocharger Overboost Condition",
"P0299":"Turbocharger Underboost Condition",

"P0300":"Random/Multiple Cylinder Misfire Detected",
"P0301":"Cylinder 1 Misfire Detected",
"P0302":"Cylinder 2 Misfire Detected",
"P0303":"Cylinder 3 Misfire Detected",
"P0304":"Cylinder 4 Misfire Detected",
"P0305":"Cylinder 5 Misfire Detected",
"P0306":"Cylinder 6 Misfire Detected",

"P0400":"EGR Flow Malfunction",
"P0401":"EGR Flow Insufficient",
"P0402":"EGR Flow Excessive",

"P0420":"Catalyst Efficiency Below Threshold Bank 1",
"P0430":"Catalyst Efficiency Below Threshold Bank 2",

"P0440":"Evaporative Emission System Malfunction",
"P0455":"EVAP System Leak Detected (Large)",
"P0456":"EVAP System Leak Detected (Small)",

"P0500":"Vehicle Speed Sensor Malfunction",
"P0507":"Idle Control System RPM Higher Than Expected",

"P0700":"Transmission Control System Malfunction",
"P0730":"Incorrect Gear Ratio",

"P0740":"Torque Converter Clutch Circuit Malfunction"

}


/* ==========================================
   AUTO-GENERATE LARGE DATABASE
========================================== */

const dtcDatabase = []

Object.keys(dtcBase).forEach(code => {

let causes = commonFixes
let fixes = commonFixes

if(code.startsWith("P01")) causes = fuelCauses
if(code.startsWith("P03")) causes = ignitionCauses
if(code.startsWith("P04")) causes = evapCauses
if(code.startsWith("P02")) causes = fuelCauses
if(code.startsWith("P029")) causes = turboCauses

dtcDatabase.push({

code: code,
description: dtcBase[code],

severity:
code.startsWith("P03") ? "High" :
code.startsWith("P07") ? "High" :
code.startsWith("P04") ? "Low" : "Medium",

symptoms: commonSymptoms.slice(0,3),

causes: causes.slice(0,3),

fixes: fixes.slice(0,3),

estimatedCost:
code.startsWith("P03") ? "$150 - $1200" :
code.startsWith("P04") ? "$20 - $250" :
code.startsWith("P07") ? "$400 - $3500" :
"$80 - $600"

})

})

/* ==========================================
   AUDI-SPECIFIC DTC EXPANSION (FROM PDF)
========================================== */

const audiSpecificDTCs = [ /* (UNCHANGED - YOUR DATA HERE) */ ]


/* ==========================================
   ✅ FIX: MERGE AUDI DATA INTO DATABASE
========================================== */

audiSpecificDTCs.forEach(newDtc => {

const exists = dtcDatabase.some(d => d.code === newDtc.code)

if(!exists){
dtcDatabase.push(newDtc)
}

})


/* ==========================================
   COMMON AUDI CODES
========================================== */
const audiCommonDTCs = [ /* UNCHANGED */ ];


/* ==========================================
   GENERATE ADDITIONAL GENERIC CODES
========================================== */

for(let i=1000;i<=1499;i++){

let code = "P"+i

dtcDatabase.push({

code:code,
description:"Manufacturer Specific Powertrain Diagnostic Code",

severity:"Medium",

symptoms:commonSymptoms.slice(0,3),

causes:commonFixes.slice(0,3),

fixes:commonFixes.slice(0,3),

estimatedCost:"$100 - $800"

})

}