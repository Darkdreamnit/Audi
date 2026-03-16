// Audi DTC Diagnostic Database
const dtcDatabase = [
    {
        code: "P0171",
        category: "powertrain",
        name: "System Too Lean (Bank 1)",
        symptoms: ["Check engine light", "Rough idle", "Power loss", "Poor acceleration"],
        causes: [
            "Vacuum leaks (intake manifold, hoses)",
            "Faulty MAF sensor",
            "Clogged fuel injectors",
            "Weak fuel pump",
            "O2 sensor failure"
        ],
        fixes: [
            "Smoke test for vacuum leaks",
            "Clean or replace MAF sensor",
            "Replace fuel filter",
            "Check fuel pressure"
        ],
        difficulty: "medium",
        cost: "$150 - $600",
        commonModels: ["A4", "A6", "Q5", "A3"],
        description: "The engine is running lean, meaning too much air or not enough fuel in the mixture."
    },
    {
        code: "P0420",
        category: "powertrain",
        name: "Catalyst System Efficiency Below Threshold",
        symptoms: ["Check engine light", "Failed emissions", "Sulfur smell", "Reduced power"],
        causes: [
            "Failed catalytic converter",
            "Bad O2 sensors",
            "Exhaust leaks",
            "Rich running condition",
            "Oil contamination"
        ],
        fixes: [
            "Replace catalytic converter",
            "Replace upstream/downstream O2 sensors",
            "Repair exhaust leaks",
            "Fix underlying rich condition"
        ],
        difficulty: "hard",
        cost: "$800 - $2500",
        commonModels: ["A4", "A6", "Q7", "TT"],
        description: "The catalytic converter is not cleaning exhaust gases efficiently."
    },
    {
        code: "P0300",
        category: "powertrain",
        name: "Random/Multiple Cylinder Misfire",
        symptoms: ["Engine shaking", "Rough idle", "Power loss", "Check engine flashing"],
        causes: [
            "Worn spark plugs",
            "Faulty ignition coils",
            "Vacuum leaks",
            "Low compression",
            "Bad fuel quality"
        ],
        fixes: [
            "Replace spark plugs and coils",
            "Check compression",
            "Test for vacuum leaks",
            "Drain bad fuel"
        ],
        difficulty: "easy",
        cost: "$100 - $400",
        commonModels: ["A3", "A4", "A5", "Q3", "TT"],
        description: "Multiple cylinders are misfiring, causing rough running."
    },
    {
        code: "P0299",
        category: "powertrain",
        name: "Turbo/Supercharger Underboost",
        symptoms: ["Low power", "Black smoke", "Whining noise", "Limp mode"],
        causes: [
            "Boost leak",
            "Faulty wastegate",
            "Bad turbocharger",
            "Clogged intercooler",
            "N75 valve failure"
        ],
        fixes: [
            "Pressure test intake system",
            "Replace turbo if shaft play",
            "Check wastegate actuator",
            "Clean or replace intercooler"
        ],
        difficulty: "hard",
        cost: "$200 - $2000",
        commonModels: ["A4", "A5", "Q5", "S4", "TT"],
        description: "Turbo is not producing expected boost pressure."
    },
    {
        code: "P0101",
        category: "powertrain",
        name: "MAF Sensor Circuit Range/Performance",
        symptoms: ["Rough idle", "Stalling", "Poor MPG", "Hesitation"],
        causes: [
            "Dirty MAF sensor",
            "Air intake leaks",
            "Faulty MAF",
            "Wiring issues"
        ],
        fixes: [
            "Clean MAF with specialized cleaner",
            "Check intake hose connections",
            "Replace MAF sensor",
            "Inspect wiring harness"
        ],
        difficulty: "easy",
        cost: "$50 - $300",
        commonModels: ["A3", "A4", "A6", "Q5"],
        description: "Mass Air Flow sensor readings are out of expected range."
    },
    {
        code: "P0441",
        category: "powertrain",
        name: "EVAP Incorrect Purge Flow",
        symptoms: ["Check engine light", "Fuel smell", "Hard start after refuel"],
        causes: [
            "Faulty purge valve",
            "Charcoal canister issues",
            "Gas cap leak",
            "EVAP line leak"
        ],
        fixes: [
            "Replace gas cap",
            "Test and replace purge valve",
            "Check EVAP lines",
            "Replace charcoal canister"
        ],
        difficulty: "easy",
        cost: "$50 - $400",
        commonModels: ["A3", "A4", "Q5", "A6"],
        description: "Evaporative emission control system has incorrect purge flow."
    },
    {
        code: "P0011",
        category: "powertrain",
        name: "Camshaft Position Timing Over-Advanced",
        symptoms: ["Rattle on startup", "Power loss", "Poor idle", "Check engine light"],
        causes: [
            "Worn timing chain",
            "Faulty cam adjuster",
            "Low oil pressure",
            "Bad VVT solenoid"
        ],
        fixes: [
            "Replace timing chain kit",
            "Replace cam tensioner",
            "Check oil pressure",
            "Replace VVT solenoid"
        ],
        difficulty: "hard",
        cost: "$1500 - $4000",
        commonModels: ["A4", "A5", "Q5", "A6", "S4"],
        description: "Camshaft timing is over-advanced, often due to chain stretch."
    },
    {
        code: "P2181",
        category: "powertrain",
        name: "Cooling System Performance",
        symptoms: ["Temp gauge high", "Overheating", "Heater issues", "Check engine light"],
        causes: [
            "Faulty thermostat",
            "Water pump failure",
            "Coolant leaks",
            "Temp sensor bad"
        ],
        fixes: [
            "Replace thermostat",
            "Replace water pump",
            "Pressure test system",
            "Replace temp sensor"
        ],
        difficulty: "medium",
        cost: "$200 - $800",
        commonModels: ["A3", "A4", "A6", "Q5", "Q7"],
        description: "Engine cooling system not reaching target temperature in time."
    },
    {
        code: "P0491",
        category: "powertrain",
        name: "Secondary Air Injection System Insufficient Flow",
        symptoms: ["Check engine light", "Failed emissions", "Air pump noise"],
        causes: [
            "Failed air pump",
            "Clogged injection ports",
            "Faulty combination valve",
            "Vacuum line leaks"
        ],
        fixes: [
            "Replace secondary air pump",
            "Clean injection ports",
            "Replace combination valve",
            "Check vacuum lines"
        ],
        difficulty: "medium",
        cost: "$300 - $800",
        commonModels: ["A4", "A6", "Q7"],
        description: "Secondary air injection system not providing enough air to exhaust."
    },
    {
        code: "B1000",
        category: "body",
        name: "Internal Control Module Memory Error",
        symptoms: ["Warning lights", "System failures", "Communication errors"],
        causes: [
            "Low battery voltage",
            "Module failure",
            "Software corruption",
            "Water damage"
        ],
        fixes: [
            "Check battery and alternator",
            "Module reprogramming",
            "Replace control module",
            "Check for water ingress"
        ],
        difficulty: "hard",
        cost: "$200 - $1200",
        commonModels: ["All Models"],
        description: "Body control module has detected internal memory error."
    },
    {
        code: "C1010",
        category: "chassis",
        name: "ABS Pump Motor Circuit",
        symptoms: ["ABS light", "Brake warning", "Hard pedal", "ABS not working"],
        causes: [
            "Failed ABS pump",
            "Wiring issues",
            "Bad relay",
            "Module failure"
        ],
        fixes: [
            "Replace ABS pump",
            "Check wiring harness",
            "Replace relay",
            "Rebuild or replace ABS module"
        ],
        difficulty: "hard",
        cost: "$400 - $1500",
        commonModels: ["A4", "A6", "Q5", "Q7"],
        description: "ABS hydraulic pump motor circuit malfunction."
    },
    {
        code: "U1118",
        category: "network",
        name: "Lost Communication with Parking Brake",
        symptoms: ["Parking brake light", "EPB failure", "Warning chimes"],
        causes: [
            "Wiring harness damage",
            "Control module failure",
            "CAN bus issues",
            "Corrosion"
        ],
        fixes: [
            "Inspect wiring to EPB module",
            "Replace EPB control module",
            "Check CAN bus termination",
            "Clean connectors"
        ],
        difficulty: "medium",
        cost: "$200 - $800",
        commonModels: ["A5", "A6", "Q5", "Q7"],
        description: "Communication lost between main module and electronic parking brake."
    }
];

// Audi Models Data
const audiModels = [
    { id: "A1", name: "A1", years: "2010-2018", type: "Hatchback", commonIssues: ["P0171", "P0300"] },
    { id: "A3", name: "A3", years: "1996-Present", type: "Compact", commonIssues: ["P0171", "P0441", "P0101"] },
    { id: "A4", name: "A4", years: "1994-Present", type: "Sedan/Avant", commonIssues: ["P0171", "P0420", "P0300", "P0011"] },
    { id: "A5", name: "A5", years: "2007-Present", type: "Coupe/Cabriolet", commonIssues: ["P0011", "P0299", "P0171"] },
    { id: "A6", name: "A6", years: "1994-Present", type: "Luxury Sedan", commonIssues: ["P0420", "P0171", "P2181"] },
    { id: "A7", name: "A7", years: "2010-Present", type: "Sportback", commonIssues: ["P0420", "P0171"] },
    { id: "A8", name: "A8", years: "1994-Present", type: "Full-Size Luxury", commonIssues: ["P0420", "B1000"] },
    { id: "Q3", name: "Q3", years: "2011-Present", type: "Compact SUV", commonIssues: ["P0300", "P0101"] },
    { id: "Q5", name: "Q5", years: "2008-Present", type: "Mid-Size SUV", commonIssues: ["P0171", "P0299", "P0011"] },
    { id: "Q7", name: "Q7", years: "2005-Present", type: "Full-Size SUV", commonIssues: ["P0420", "P0491", "C1010"] },
    { id: "Q8", name: "Q8", years: "2018-Present", type: "Luxury SUV", commonIssues: ["P0171", "P0420"] },
    { id: "TT", name: "TT", years: "1998-Present", type: "Sports Car", commonIssues: ["P0300", "P0171", "P0420"] },
    { id: "R8", name: "R8", years: "2006-Present", type: "Supercar", commonIssues: ["P0300", "P0420"] },
    { id: "S4", name: "S4", years: "1991-Present", type: "Performance Sedan", commonIssues: ["P0299", "P0011", "P0171"] },
    { id: "RS", name: "RS Models", years: "Various", type: "High Performance", commonIssues: ["P0299", "P0011", "P0300"] }
];

// Symptoms Data
const symptomsList = [
    { id: "rough-idle", name: "Rough Idle", icon: "activity" },
    { id: "power-loss", name: "Power Loss", icon: "zap-off" },
    { id: "check-engine", name: "Check Engine Light", icon: "alert-triangle" },
    { id: "misfire", name: "Engine Misfire", icon: "thunder" },
    { id: "hard-start", name: "Hard Starting", icon: "play-circle" },
    { id: "stalling", name: "Stalling", icon: "octagon" },
    { id: "poor-mpg", name: "Poor Fuel Economy", icon: "fuel" },
    { id: "overheating", name: "Overheating", icon: "thermometer" },
    { id: "noise", name: "Unusual Noise", icon: "volume-2" },
    { id: "vibration", name: "Vibration", icon: "move" },
    { id: "smoke", name: "Smoke/Exhaust", icon: "cloud" },
    { id: "smell", name: "Fuel/Smoke Smell", icon: "wind" }
];

// ============================================
// FIREBASE CONFIGURATION
// ============================================
// Replace with your Firebase project credentials
// Get these from: Firebase Console > Project Settings > General > Your Apps > SDK setup and configuration
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1byZuKmj7ZyjTLZvLDtUl4qfLuyiFDbo",
  authDomain: "audi-dtc-pro.firebaseapp.com",
  databaseURL: "https://audi-dtc-pro-default-rtdb.firebaseio.com",
  projectId: "audi-dtc-pro",
  storageBucket: "audi-dtc-pro.firebasestorage.app",
  messagingSenderId: "1098221329925",
  appId: "1:1098221329925:web:0a12d9e67b1a313a02466c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase when script loads
let firebaseApp;
let firebaseDatabase;
let firebaseStorage;

function initFirebase() {
    try {
        firebaseApp = firebase.initializeApp(firebaseConfig);
        firebaseDatabase = firebase.database();
        firebaseStorage = firebase.storage();
        console.log("✅ Firebase initialized successfully");
        return true;
    } catch (error) {
        console.error("❌ Firebase initialization error:", error);
        return false;
    }
}

// Community Posts Reference
function getCommunityPostsRef() {
    return firebaseDatabase.ref('community-posts');
}

// Fallback static data (used if Firebase fails or during initial load)
const fallbackCommunityPosts = [
    {
        id: 1,
        code: "P0171",
        model: "A4",
        year: "2013",
        author: "AudiFan99",
        solution: "Found a cracked vacuum hose behind the intake manifold. Replaced the hose ($15 part) and code cleared immediately. Check there first!",
        cost: "$15",
        date: "2024-01-15",
        image: "http://static.photos/technology/640x360/1",
        likes: 24
    },
    {
        id: 2,
        code: "P0420",
        model: "A6",
        year: "2015",
        author: "GermanAutoTech",
        solution: "Replaced both O2 sensors first (upstream and downstream). Didn't fix it. Ended up being the catalytic converter. Used aftermarket cat for $400 instead of $1200 OEM.",
        cost: "$450",
        date: "2024-02-20",
        image: "http://static.photos/industry/640x360/2",
        likes: 18
    },
    {
        id: 3,
        code: "P0300",
        model: "Q5",
        year: "2012",
        author: "DIYMike",
        solution: "Simple spark plug and coil pack replacement. Used ECS Tuning kit with 4 coils and plugs for $280. Took 2 hours in the driveway. Torque to spec!",
        cost: "$280",
        date: "2024-03-05",
        image: "http://static.photos/technology/640x360/3",
        likes: 32
    }
];

// Global state for community posts
let communityPosts = [];
let firebaseInitialized = false;

// Common DTCs for homepage
const commonDTCs = ["P0171", "P0420", "P0300", "P0299", "P0101", "P0441"];
