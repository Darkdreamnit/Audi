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

/* ==========================================
   LARGE DTC DATABASE
========================================== */

const dtcDatabase = [

/* ===== AIR / FUEL SYSTEM ===== */

{
code:"P0100",
description:"Mass Air Flow Circuit Malfunction",
severity:"Medium",
symptoms:["check engine light","rough idle","poor acceleration"],
causes:["faulty MAF sensor","dirty air filter","vacuum leak"],
fixes:["clean or replace MAF sensor","replace air filter","inspect intake hoses"],
estimatedCost:"$80 - $350"
},

{
code:"P0101",
description:"Mass Air Flow Sensor Range / Performance",
severity:"Medium",
symptoms:["engine hesitation","poor fuel economy","stalling"],
causes:["dirty MAF sensor","intake leak","faulty sensor"],
fixes:["clean MAF sensor","inspect air intake","replace sensor"],
estimatedCost:"$100 - $300"
},

{
code:"P0102",
description:"Mass Air Flow Circuit Low Input",
severity:"Medium",
symptoms:["weak acceleration","rough idle"],
causes:["MAF unplugged","damaged wiring"],
fixes:["repair wiring","replace MAF"],
estimatedCost:"$80 - $250"
},

{
code:"P0103",
description:"Mass Air Flow Circuit High Input",
severity:"Medium",
symptoms:["check engine light","high fuel consumption"],
causes:["shorted wiring","bad MAF"],
fixes:["repair wiring","replace sensor"],
estimatedCost:"$90 - $300"
},

{
code:"P0113",
description:"Intake Air Temperature Sensor High Input",
severity:"Low",
symptoms:["hard start","poor fuel economy"],
causes:["bad IAT sensor","wiring issue"],
fixes:["replace IAT sensor","repair wiring"],
estimatedCost:"$40 - $150"
},

/* ===== FUEL SYSTEM ===== */

{
code:"P0171",
description:"System Too Lean Bank 1",
severity:"Medium",
symptoms:["rough idle","engine hesitation","poor fuel economy"],
causes:["vacuum leak","dirty MAF","weak fuel pump"],
fixes:["repair vacuum leak","clean MAF","replace fuel pump"],
estimatedCost:"$120 - $900"
},

{
code:"P0172",
description:"System Too Rich Bank 1",
severity:"Medium",
symptoms:["black smoke","strong fuel smell","poor MPG"],
causes:["bad fuel injector","faulty MAF","fuel pressure regulator"],
fixes:["clean injectors","replace MAF","replace regulator"],
estimatedCost:"$150 - $800"
},

{
code:"P0190",
description:"Fuel Rail Pressure Sensor Circuit Malfunction",
severity:"Medium",
symptoms:["hard starting","stalling"],
causes:["bad fuel pressure sensor","wiring issue"],
fixes:["replace fuel pressure sensor","repair wiring"],
estimatedCost:"$120 - $400"
},

/* ===== IGNITION / MISFIRE ===== */

{
code:"P0300",
description:"Random/Multiple Cylinder Misfire Detected",
severity:"High",
symptoms:["engine shaking","flashing check engine light"],
causes:["bad spark plugs","ignition coils","fuel injector failure"],
fixes:["replace spark plugs","replace ignition coils","clean injectors"],
estimatedCost:"$100 - $1200"
},

{
code:"P0301",
description:"Cylinder 1 Misfire Detected",
severity:"High",
symptoms:["rough idle","loss of power"],
causes:["bad spark plug","coil failure"],
fixes:["replace spark plug","replace coil pack"],
estimatedCost:"$80 - $350"
},

{
code:"P0302",
description:"Cylinder 2 Misfire Detected",
severity:"High",
symptoms:["engine vibration","poor performance"],
causes:["ignition coil failure","plug wear"],
fixes:["replace spark plug","replace coil"],
estimatedCost:"$80 - $350"
},

{
code:"P0303",
description:"Cylinder 3 Misfire Detected",
severity:"High",
symptoms:["engine shaking","poor acceleration"],
causes:["bad spark plug","fuel injector"],
fixes:["replace spark plug","clean injector"],
estimatedCost:"$90 - $400"
},

{
code:"P0304",
description:"Cylinder 4 Misfire Detected",
severity:"High",
symptoms:["rough idle","loss of power"],
causes:["coil pack failure","plug wear"],
fixes:["replace spark plug","replace coil"],
estimatedCost:"$90 - $350"
},

/* ===== CATALYTIC / EMISSIONS ===== */

{
code:"P0420",
description:"Catalyst System Efficiency Below Threshold Bank 1",
severity:"Medium",
symptoms:["check engine light","reduced fuel economy"],
causes:["bad catalytic converter","faulty oxygen sensor"],
fixes:["replace catalytic converter","replace O2 sensors"],
estimatedCost:"$250 - $2000"
},

{
code:"P0430",
description:"Catalyst Efficiency Below Threshold Bank 2",
severity:"Medium",
symptoms:["check engine light","poor MPG"],
causes:["bad catalytic converter","faulty oxygen sensor"],
fixes:["replace catalytic converter","replace O2 sensors"],
estimatedCost:"$250 - $2000"
},

/* ===== OXYGEN SENSOR ===== */

{
code:"P0130",
description:"Oxygen Sensor Circuit Malfunction Bank 1 Sensor 1",
severity:"Medium",
symptoms:["poor fuel economy","check engine light"],
causes:["bad O2 sensor","wiring issue"],
fixes:["replace oxygen sensor","repair wiring"],
estimatedCost:"$120 - $300"
},

{
code:"P0133",
description:"O2 Sensor Slow Response",
severity:"Medium",
symptoms:["poor fuel economy","emissions failure"],
causes:["aging O2 sensor"],
fixes:["replace O2 sensor"],
estimatedCost:"$120 - $250"
},

/* ===== EVAP SYSTEM ===== */

{
code:"P0440",
description:"Evaporative Emission System Malfunction",
severity:"Low",
symptoms:["check engine light"],
causes:["loose gas cap","EVAP leak"],
fixes:["tighten gas cap","repair EVAP hoses"],
estimatedCost:"$20 - $250"
},

{
code:"P0455",
description:"EVAP Large Leak Detected",
severity:"Low",
symptoms:["fuel smell","check engine light"],
causes:["loose gas cap","broken EVAP hose"],
fixes:["replace gas cap","repair hoses"],
estimatedCost:"$20 - $200"
},

{
code:"P0456",
description:"EVAP Small Leak Detected",
severity:"Low",
symptoms:["check engine light"],
causes:["small vacuum leak","bad purge valve"],
fixes:["replace purge valve","repair hose"],
estimatedCost:"$50 - $250"
},

/* ===== COOLING SYSTEM ===== */

{
code:"P0128",
description:"Coolant Thermostat Below Regulating Temperature",
severity:"Low",
symptoms:["engine slow to warm","poor heater output"],
causes:["stuck thermostat"],
fixes:["replace thermostat"],
estimatedCost:"$120 - $400"
},

{
code:"P0217",
description:"Engine Overtemperature Condition",
severity:"High",
symptoms:["engine overheating","steam from hood"],
causes:["low coolant","bad radiator fan"],
fixes:["replace radiator fan","repair cooling system"],
estimatedCost:"$150 - $700"
},

/* ===== TURBO / BOOST ===== */

{
code:"P0299",
description:"Turbocharger Underboost Condition",
severity:"High",
symptoms:["loss of power","slow acceleration"],
causes:["boost leak","wastegate failure","bad turbo"],
fixes:["repair boost leak","replace turbocharger"],
estimatedCost:"$200 - $2500"
},

{
code:"P0234",
description:"Turbocharger Overboost Condition",
severity:"High",
symptoms:["engine surging","check engine light"],
causes:["stuck wastegate","boost control failure"],
fixes:["replace boost control valve","repair wastegate"],
estimatedCost:"$150 - $900"
},

/* ===== TRANSMISSION ===== */

{
code:"P0700",
description:"Transmission Control System Malfunction",
severity:"High",
symptoms:["harsh shifting","transmission slipping"],
causes:["low transmission fluid","sensor failure"],
fixes:["check fluid level","replace transmission sensor"],
estimatedCost:"$150 - $3000"
},

{
code:"P0730",
description:"Incorrect Gear Ratio",
severity:"High",
symptoms:["transmission slipping","delayed shifting"],
causes:["internal transmission wear"],
fixes:["transmission repair or rebuild"],
estimatedCost:"$1200 - $4500"
},

{
code:"P0740",
description:"Torque Converter Clutch Circuit Malfunction",
severity:"High",
symptoms:["poor acceleration","high RPM"],
causes:["bad torque converter clutch"],
fixes:["replace torque converter"],
estimatedCost:"$800 - $2500"
}

];