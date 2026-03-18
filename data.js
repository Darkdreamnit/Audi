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

const dtcDatabase = [
  { code: "P0420", description: "Catalyst System Efficiency Below Threshold" },
  { code: "P0171", description: "System Too Lean" }
];

/* ==========================================
   AUDI-SPECIFIC DTC EXPANSION (FROM PDF)
========================================== */



const audiSpecificDTCs = [

/* ENGINE / AIR / FUEL */

{
code:"P2187",
description:"System Too Lean at Idle (Bank 1)",
severity:"Medium",
causes:[
"vacuum leak",
"faulty PCV valve",
"intake air leak"
],
fixes:[
"inspect vacuum hoses",
"replace PCV valve",
"smoke test intake system"
],
estimatedCost:"$150 - $600"
},

{
code:"P2279",
description:"Intake Air System Leak Detected",
severity:"Medium",
causes:[
"boost leak",
"cracked intake hose",
"faulty PCV system"
],
fixes:[
"pressure test intake system",
"replace damaged hoses",
"repair PCV system"
],
estimatedCost:"$100 - $500"
},

{
code:"P0507",
description:"Idle RPM Higher Than Expected",
severity:"Low",
causes:[
"dirty throttle body",
"vacuum leak",
"faulty idle control"
],
fixes:[
"clean throttle body",
"inspect vacuum lines",
"perform ECU reset"
],
estimatedCost:"$80 - $300"
},

{
code:"P2015",
description:"Intake Manifold Flap Position Sensor",
severity:"Medium",
causes:[
"failed intake manifold runner",
"sensor malfunction",
"linkage failure"
],
fixes:[
"replace intake manifold",
"install repair bracket",
"replace sensor"
],
estimatedCost:"$200 - $900"
},

{
code:"P2004",
description:"Intake Manifold Runner Stuck Open",
severity:"Medium",
causes:[
"carbon buildup",
"actuator failure",
"vacuum issue"
],
fixes:[
"clean intake manifold",
"replace actuator",
"repair vacuum lines"
],
estimatedCost:"$250 - $1000"
},

/* TIMING / ENGINE CONTROL */

{
code:"P0016",
description:"Crankshaft/Camshaft Position Correlation",
severity:"High",
causes:[
"timing chain stretch",
"faulty cam sensor",
"incorrect timing"
],
fixes:[
"replace timing chain",
"replace camshaft sensor",
"re-time engine"
],
estimatedCost:"$800 - $3000"
},

{
code:"P0011",
description:"Camshaft Timing Over-Advanced",
severity:"High",
causes:[
"oil flow issue",
"faulty cam adjuster",
"timing chain wear"
],
fixes:[
"change engine oil",
"replace cam adjuster",
"inspect timing system"
],
estimatedCost:"$300 - $2000"
},

/* TURBO / BOOST */

{
code:"P0299",
description:"Turbocharger Underboost Condition",
severity:"High",
causes:[
"boost leak",
"worn turbo",
"wastegate failure"
],
fixes:[
"pressure test boost system",
"replace turbocharger",
"repair wastegate"
],
estimatedCost:"$300 - $2500"
},

{
code:"P0234",
description:"Turbocharger Overboost Condition",
severity:"High",
causes:[
"faulty boost control solenoid",
"wastegate stuck closed",
"tune issues"
],
fixes:[
"replace solenoid",
"inspect wastegate",
"check ECU tune"
],
estimatedCost:"$200 - $1200"
},

/* EMISSIONS */

{
code:"P0455",
description:"EVAP System Leak (Large)",
severity:"Low",
causes:[
"loose gas cap",
"cracked EVAP hose",
"faulty purge valve"
],
fixes:[
"tighten gas cap",
"replace EVAP hose",
"replace purge valve"
],
estimatedCost:"$20 - $250"
},

{
code:"P0456",
description:"EVAP System Leak (Small)",
severity:"Low",
causes:[
"minor hose leak",
"faulty EVAP component"
],
fixes:[
"smoke test system",
"repair leak"
],
estimatedCost:"$50 - $300"
},

/* TRANSMISSION */

{
code:"P0700",
description:"Transmission Control System Malfunction",
severity:"High",
causes:[
"TCM fault",
"wiring issue",
"internal transmission issue"
],
fixes:[
"scan transmission module",
"repair wiring",
"service transmission"
],
estimatedCost:"$300 - $3500"
},

{
code:"P0730",
description:"Incorrect Gear Ratio",
severity:"High",
causes:[
"slipping transmission",
"low fluid",
"internal wear"
],
fixes:[
"check transmission fluid",
"service transmission",
"rebuild transmission"
],
estimatedCost:"$500 - $4000"
}

]


/* ==========================================
   COMMON AUDI CODES
========================================== */
const audiCommonDTCs = [

{code:"P0299", desc:"Turbo Underboost", severity:"High"},
{code:"P0420", desc:"Catalyst Efficiency Below Threshold", severity:"Medium"},
{code:"P0171", desc:"System Too Lean Bank 1", severity:"Medium"},
{code:"P0300", desc:"Random Misfire Detected", severity:"High"},
{code:"P0301", desc:"Cylinder 1 Misfire", severity:"High"},
{code:"P0302", desc:"Cylinder 2 Misfire", severity:"High"},
{code:"P0303", desc:"Cylinder 3 Misfire", severity:"High"},
{code:"P0304", desc:"Cylinder 4 Misfire", severity:"High"},

{code:"P2187", desc:"System Too Lean at Idle", severity:"Medium"},
{code:"P2279", desc:"Intake Air Leak Detected", severity:"Medium"},
{code:"P0507", desc:"Idle RPM Higher Than Expected", severity:"Low"},
{code:"P2015", desc:"Intake Manifold Flap Position", severity:"Medium"},
{code:"P2004", desc:"Intake Manifold Runner Stuck Open", severity:"Medium"},

{code:"P0016", desc:"Crank/Cam Correlation Error", severity:"High"},
{code:"P0011", desc:"Camshaft Timing Over-Advanced", severity:"High"},

{code:"P0455", desc:"EVAP Large Leak", severity:"Low"},
{code:"P0456", desc:"EVAP Small Leak", severity:"Low"},

{code:"P0101", desc:"MAF Sensor Performance", severity:"Medium"},
{code:"P0113", desc:"Intake Air Temp High", severity:"Low"},

{code:"P0700", desc:"Transmission Control System", severity:"High"},
{code:"P0730", desc:"Incorrect Gear Ratio", severity:"High"},

{code:"P0128", desc:"Coolant Temp Below Thermostat", severity:"Low"},
{code:"P0217", desc:"Engine Overheating", severity:"High"}

];


/* ==========================================
   GENERATE ADDITIONAL GENERIC CODES
   (P1000–P1499) TO BUILD LARGE DATABASE
========================================== */

