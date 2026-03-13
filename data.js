const dtcDatabase = [
    {
        code: "P0171",
        category: "Powertrain",
        description: "System Too Lean (Bank 1)",
        detailedExplanation: "The engine is running lean, meaning there's too much air or not enough fuel in the air-fuel mixture. This is one of the most common codes across all Audi models, especially those with 2.0T engines. Bank 1 refers to the side of the engine containing cylinder #1.",
        symptoms: ["rough idle", "loss of power", "hesitation", "check engine light", "poor fuel economy", "engine stalling"],
        causes: [
            "Vacuum leaks (most common - check PCV valve, intake manifold gaskets, vacuum lines)",
            "Faulty mass airflow (MAF) sensor",
            "Clogged fuel injectors",
            "Failing fuel pump or weak fuel pressure",
            "Oxygen sensor malfunction (pre-cat)",
            "Exhaust leaks before the O2 sensor"
        ],
        fixes: [
            "Smoke test to find vacuum leaks - replace PCV valve ($45-80 part)",
            "Clean or replace MAF sensor with OEM Bosch unit ($120-200)",
            "Replace intake manifold gaskets if leaking ($30-50 parts, 2-3 hours labor)",
            "Check fuel pressure at rail - should be ~58-65 PSI at idle",
            "Replace pre-catalytic converter O2 sensor ($150-300)"
        ],
        diySteps: [
            "1. Visually inspect all vacuum lines for cracks or loose connections",
            "2. Listen for hissing sounds indicating vacuum leaks while engine runs",
            "3. Remove and inspect PCV valve - shake it, if it rattles excessively it's likely bad",
            "4. Clean MAF sensor with dedicated cleaner (not brake cleaner)",
            "5. Check for exhaust leaks with engine running (listen for ticking/tapping)",
            "6. Use OBD2 scanner to check fuel trim values - if STFT/LTFT > +25%, confirms lean condition"
        ],
        costRange: "$50 - $600",
        difficulty: "DIY",
        relatedCodes: ["P0174", "P0106", "P2187"],
        affectedModels: ["A3", "A4", "A5", "A6", "Q3", "Q5", "Q7", "TT"],
        commonality: "Very High"
    },
    {
        code: "P0420",
        category: "Powertrain",
        description: "Catalyst System Efficiency Below Threshold (Bank 1)",
        detailedExplanation: "The catalytic converter is not working efficiently. The rear O2 sensor is detecting oxygen levels too similar to the front sensor, indicating the cat isn't cleaning exhaust gases properly. Often caused by oil consumption or failed ignition components upstream.",
        symptoms: ["check engine light", "rotten egg smell", "failed emissions test", "slight loss of power", "poor fuel economy"],
        causes: [
            "Worn or failed catalytic converter (most common on high mileage Audis)",
            "Oil consumption burning in cylinders (common 2.0T TFSI issue)",
            "Failed upstream O2 sensor giving false readings",
            "Engine misfires damaging cat substrate",
            "Coolant leaking into combustion chamber"
        ],
        fixes: [
            "Replace catalytic converter with OEM or high-quality aftermarket ($800-2500)",
            "Fix oil consumption issue first (PCV valve, piston rings, valve seals)",
            "Replace both upstream and downstream O2 sensors ($300-600 total)",
            "Check for coolant loss indicating head gasket issue"
        ],
        diySteps: [
            "1. Check for other codes first - fix any misfires or lean conditions",
            "2. Monitor O2 sensor voltages - upstream should fluctuate, downstream should be steady",
            "3. Check oil consumption rate - if >1qt/1000 miles, fix consumption first",
            "4. Use catalytic converter cleaner as temporary measure (limited success)",
            "5. Replace converter if efficiency <70% (requires professional testing)"
        ],
        costRange: "$100 - $2500",
        difficulty: "Mechanic recommended",
        relatedCodes: ["P0430", "P0300", "P0171"],
        affectedModels: ["A4", "A5", "A6", "Q5", "Q7", "A3", "TT"],
        commonality: "High"
    },
    {
        code: "P0300",
        category: "Powertrain",
        description: "Random/Multiple Cylinder Misfire Detected",
        detailedExplanation: "The engine control module has detected misfires across multiple cylinders randomly, rather than isolated to one cylinder. This is often more serious than single-cylinder misfires and can damage the catalytic converter if driven extensively.",
        symptoms: ["rough idle", "check engine flashing", "loss of power", "engine vibration", "poor acceleration", "stalling"],
        causes: [
            "Ignition coil failure (extremely common on Audi 2.0T, 3.0T)",
            "Spark plug fouling or worn gap",
            "Fuel injector issues",
            "Low fuel pressure",
            "Vacuum leaks causing lean mixture",
            "Carbon buildup on intake valves (TFSI engines)"
        ],
        fixes: [
            "Replace all ignition coils with latest revision OEM ($60-120 each)",
            "Replace spark plugs with correct NGK or Bosch platinum/iridium ($80-200 set)",
            "Perform carbon cleaning on intake valves ($400-800 service)",
            "Test fuel pressure and replace pump if low ($600-1200)",
            "Update ECU software at dealer (sometimes fixes false misfires)"
        ],
        diySteps: [
            "1. Scan for specific cylinder misfires (P0301-P0306) if persistent",
            "2. Swap coils between cylinders to see if misfire follows (diagnostic step)",
            "3. Remove and inspect spark plugs - look for oil fouling, carbon, or wear",
            "4. Check coil packs for white residue indicating arcing/tracking",
            "5. Test fuel injectors with noid light or professional cleaning service",
            "6. If high mileage TFSI engine, schedule walnut blasting for carbon removal"
        ],
        costRange: "$100 - $1500",
        difficulty: "Intermediate",
        relatedCodes: ["P0301", "P0302", "P0303", "P0304", "P0171"],
        affectedModels: ["All Models"],
        commonality: "Very High"
    },
    {
        code: "P0299",
        category: "Powertrain",
        description: "Turbo/Supercharger Underboost Condition",
        detailedExplanation: "The turbocharger is not producing the expected boost pressure. This is extremely common on Audi 2.0T engines (both TSI and TFSI). Can be caused by mechanical failure or leaks in the charge air system.",
        symptoms: ["loss of power", "hesitation", "whining noise", "check engine light", "limp mode", "poor high-RPM performance"],
        causes: [
            "Failed turbocharger wastegate actuator or diaphragm",
            "Boost leaks in charge pipes, intercooler, or hoses",
            "Faulty diverter valve / recirculation valve",
            "Carbon buildup in turbocharger vanes",
            "Failed N75 boost control valve",
            "Cracked intake manifold (common on early 2.0T)"
        ],
        fixes: [
            "Replace diverter valve with latest revision G or piston type ($150-300)",
            "Pressure test intake system to find boost leaks ($50-100 diagnostic)",
            "Replace turbocharger if shaft play or oil burning ($1200-2500)",
            "Replace N75 valve ($80-150)",
            "Inspect and replace cracked charge pipes ($200-400)"
        ],
        diySteps: [
            "1. Visually inspect all charge pipes and hoses for oil residue (indicates leak)",
            "2. Check diverter valve by pulling vacuum line - rod should hold vacuum",
            "3. Listen for whistling/whining noises indicating boost leak or turbo bearing failure",
            "4. Log boost pressure with VCDS or OBD11 - should see ~15-20 PSI at WOT",
            "5. Check wastegate actuator rod for excessive play",
            "6. Remove intake hose and check turbo shaft play (should be minimal)"
        ],
        costRange: "$100 - $2500",
        difficulty: "Intermediate",
        relatedCodes: ["P0234", "P0245", "P2563"],
        affectedModels: ["A3", "A4", "A5", "A6", "Q3", "Q5", "TT"],
        commonality: "Very High"
    },
    {
        code: "P0106",
        category: "Powertrain",
        description: "Manifold Absolute Pressure/Barometric Pressure Circuit Range/Performance",
        detailedExplanation: "The MAP sensor is reading values outside expected range or not correlating with other sensors (like MAF or throttle position). Often indicates sensor failure or vacuum line issues.",
        symptoms: ["rough idle", "hesitation", "poor acceleration", "check engine light", "stalling"],
        causes: [
            "Failed MAP sensor",
            "Clogged MAP sensor port/line",
            "Vacuum leaks affecting pressure readings",
            "Wiring issues to MAP sensor",
            "ECU software issues"
        ],
        fixes: [
            "Replace MAP sensor ($80-150)",
            "Clean MAP sensor port and check hose for blockage",
            "Check wiring harness for corrosion or damage",
            "Update ECU software at dealer"
        ],
        diySteps: [
            "1. Locate MAP sensor (typically on intake manifold)",
            "2. Check vacuum line for cracks or blockages",
            "3. Test sensor with multimeter or replace with known good unit",
            "4. Check wiring continuity between sensor and ECU"
        ],
        costRange: "$80 - $300",
        difficulty: "DIY",
        relatedCodes: ["P0105", "P0107", "P0108"],
        affectedModels: ["A3", "A4", "A5", "A6", "Q5", "TT"],
        commonality: "Medium"
    },
    {
        code: "P0491",
        category: "Powertrain",
        description: "Secondary Air Injection System Insufficient Flow (Bank 1)",
        detailedExplanation: "The secondary air injection system, which helps catalytic converters heat up faster on cold starts, is not flowing enough air. Very common on Audi V6 and V8 engines.",
        symptoms: ["check engine light", "loud air pump noise on cold start", "rough cold start"],
        causes: [
            "Failed secondary air pump",
            "Clogged or cracked air injection hoses",
            "Stuck or faulty combi-valve",
            "Water ingestion into air pump",
            "Electrical issues (fuses, relays)"
        ],
        fixes: [
            "Replace secondary air pump ($400-800)",
            "Replace combi-valve if stuck ($200-400)",
            "Clean or replace injection hoses ($100-300)",
            "Some owners delete SAI system with ECU tune (emissions modification)"
        ],
        diySteps: [
            "1. Listen for loud humming from passenger side on cold start (pump running)",
            "2. Check fuses and relay for air pump circuit",
            "3. Remove hoses and check for carbon buildup or cracks",
            "4. Test combi-valve with vacuum pump - should hold vacuum",
            "5. Remove pump and check for water damage or bearing failure"
        ],
        costRange: "$200 - $1000",
        difficulty: "Intermediate",
        relatedCodes: ["P0492", "P0411", "P0418"],
        affectedModels: ["A6", "A8", "Q7", "S4", "S5"],
        commonality: "High"
    },
    {
        code: "P2181",
        category: "Powertrain",
        description: "Cooling System Performance",
        detailedExplanation: "The engine is not reaching target operating temperature in the expected time, or the thermostat is not regulating correctly. Common on Audis with aging cooling systems.",
        symptoms: ["temperature gauge low", "poor heater performance", "check engine light", "reduced fuel economy"],
        causes: [
            "Stuck open thermostat (most common)",
            "Faulty coolant temperature sensor",
            "Low coolant level",
            "Water pump impeller erosion",
            "Cooling fan staying on constantly"
        ],
        fixes: [
            "Replace thermostat with OEM ($150-400 depending on engine)",
            "Replace coolant temperature sensor ($50-150)",
            "Check coolant level and pressure test system",
            "Replace water pump if impeller worn ($600-1200)"
        ],
        diySteps: [
            "1. Check coolant level and condition",
            "2. Monitor coolant temp with scan tool - should reach 90°C/194°F",
            "3. Feel upper radiator hose - should stay cool until thermostat opens, then get hot",
            "4. Replace thermostat (location varies by engine - often difficult access)",
            "5. Bleed cooling system properly after repairs"
        ],
        costRange: "$150 - $800",
        difficulty: "Intermediate",
        relatedCodes: ["P0116", "P0117", "P0118"],
        affectedModels: ["All Models"],
        commonality: "High"
    },
    {
        code: "P0116",
        category: "Powertrain",
        description: "Engine Coolant Temperature Circuit Range/Performance",
        detailedExplanation: "The Engine Coolant Temperature (ECT) sensor is sending implausible signals to the ECU, or the engine is warming up too slowly.",
        symptoms: ["hard starting", "rich running", "poor fuel economy", "check engine light", "temperature gauge erratic"],
        causes: [
            "Faulty ECT sensor",
            "Corroded sensor connector",
            "Low coolant level exposing sensor",
            "Thermostat stuck open",
            "Wiring harness issues"
        ],
        fixes: [
            "Replace ECT sensor ($40-120)",
            "Clean connector terminals",
            "Repair wiring if damaged",
            "Replace thermostat if causing slow warm-up"
        ],
        diySteps: [
            "1. Locate ECT sensor (usually on thermostat housing or cylinder head)",
            "2. Check connector for corrosion or coolant intrusion",
            "3. Test sensor resistance with multimeter - compare to specs",
            "4. Replace sensor (catch coolant that escapes)",
            "5. Clear code and verify proper temperature reading with scan tool"
        ],
        costRange: "$50 - $200",
        difficulty: "DIY",
        relatedCodes: ["P0117", "P0118", "P2181"],
        affectedModels: ["All Models"],
        commonality: "Medium"
    },
    {
        code: "P0301",
        category: "Powertrain",
        description: "Cylinder 1 Misfire Detected",
        detailedExplanation: "Specific misfire detected on cylinder 1. This allows more targeted diagnosis than P0300 random misfire. On Audi 4-cylinder engines, cylinder 1 is closest to timing chain/belt.",
        symptoms: ["rough idle", "check engine light", "loss of power specific to one cylinder", "vibration"],
        causes: [
            "Faulty ignition coil on cylinder 1",
            "Bad spark plug on cylinder 1",
            "Injector issue on cylinder 1",
            "Low compression on cylinder 1",
            "Vacuum leak affecting only cylinder 1 intake runner"
        ],
        fixes: [
            "Replace coil pack on cylinder 1 ($60-120)",
            "Replace spark plug ($20-40)",
            "Test or replace injector ($200-400)",
            "Perform compression test if persists ($100 diagnostic)"
        ],
        diySteps: [
            "1. Swap coil from cylinder 1 to cylinder 2, clear code, see if misfire moves",
            "2. If misfire stays on cyl 1, swap spark plug to another cylinder",
            "3. If still cyl 1, test injector or perform compression test",
            "4. Check intake runner for that cylinder for leaks"
        ],
        costRange: "$50 - $2000",
        difficulty: "DIY",
        relatedCodes: ["P0300", "P0302", "P0303", "P0304"],
        affectedModels: ["All Models"],
        commonality: "High"
    },
    {
        code: "P0456",
        category: "Powertrain",
        description: "Evaporative Emission System Leak Detected (very small leak)",
        detailedExplanation: "A small leak (typically 0.020 inch or smaller) has been detected in the EVAP system which controls fuel vapors. Common after fueling or with aging components.",
        symptoms: ["check engine light", "fuel smell", "slight decrease in fuel economy"],
        causes: [
            "Loose or missing gas cap (most common)",
            "Leaking purge valve",
            "Small cracks in EVAP lines",
            "Leaking charcoal canister",
            "Faulty tank pressure sensor"
        ],
        fixes: [
            "Tighten or replace gas cap ($20-50)",
            "Replace EVAP purge valve ($100-250)",
            "Smoke test EVAP system to find small leaks ($100-150 diagnostic)",
            "Replace charcoal canister if saturated ($300-600)"
        ],
        diySteps: [
            "1. Check gas cap - tighten until clicks 3 times, clear code, drive 50 miles",
            "2. If returns, inspect gas cap seal for cracks",
            "3. Test purge valve - should hold vacuum when off (blow through should be blocked)",
            "4. Visually inspect all rubber EVAP lines near canister for cracks",
            "5. Professional smoke test if not found"
        ],
        costRange: "$20 - $600",
        difficulty: "DIY",
        relatedCodes: ["P0455", "P0457", "P0441"],
        affectedModels: ["All Models"],
        commonality: "Very High"
    },
    {
        code: "P00AF",
        category: "Powertrain",
        description: "Turbocharger/Supercharger Boost Control A Module Performance",
        detailedExplanation: "The ECU is unable to properly control the turbocharger boost pressure due to mechanical or electrical issues with the control module or actuator.",
        symptoms: ["limp mode", "loss of power", "check engine light", "whining noises"],
        causes: [
            "Wastegate actuator failure",
            "Boost control solenoid (N75) failure",
            "Turbocharger mechanical failure",
            "Wiring issues to boost controller"
        ],
        fixes: [
            "Replace N75 boost pressure control valve ($80-150)",
            "Replace turbocharger actuator or entire turbo ($1500-3000)",
            "Repair wiring to boost control circuit",
            "Update ECU software"
        ],
        diySteps: [
            "1. Check N75 valve operation with VCDS output test",
            "2. Inspect wiring to turbo actuator for heat damage",
            "3. Check wastegate actuator rod movement - should move smoothly",
            "4. Test actuator vacuum diaphragm for leaks"
        ],
        costRange: "$100 - $3000",
        difficulty: "Mechanic recommended",
        relatedCodes: ["P0299", "P0234", "P0243"],
        affectedModels: ["A3", "A4", "A5", "A6", "Q5", "TT"],
        commonality: "Medium"
    },
    {
        code: "P0562",
        category: "Powertrain",
        description: "System Voltage Low",
        detailedExplanation: "The ECU is detecting lower than expected system voltage, indicating charging system issues or battery degradation.",
        symptoms: ["check engine light", "slow cranking", "dim lights", "electrical issues"],
        causes: [
            "Weak battery (most common on Audis 4+ years old)",
            "Failing alternator",
            "Corroded battery terminals",
            "Parasitic draw",
            "Bad grounds"
        ],
        fixes: [
            "Replace battery with AGM type ($200-400)",
            "Replace alternator ($600-1200)",
            "Clean battery terminals and grounds",
            "Test for parasitic draw if battery drains"
        ],
        diySteps: [
            "1. Test battery voltage - should be 12.6V static, 13.8-14.4V running",
            "2. Load test battery at auto parts store (free)",
            "3. Check alternator output with multimeter",
            "4. Clean all ground points (strut towers, battery, transmission)",
            "5. Check for parasitic draw (>50mA when sleeping)"
        ],
        costRange: "$20 - $800",
        difficulty: "DIY",
        relatedCodes: ["P0563", "P0621", "P0622"],
        affectedModels: ["All Models"],
        commonality: "High"
    },
    {
        code: "P2570",
        category: "Powertrain",
        description: "Direct Ozone Reduction Catalyst Temperature Sensor Circuit Low Input",
        detailedExplanation: "Specific to certain Audi models with advanced emissions systems. The temperature sensor for the ozone reduction catalyst is reading low voltage.",
        symptoms: ["check engine light", "failed emissions"],
        causes: [
            "Faulty temperature sensor",
            "Wiring issues",
            "Sensor disconnected"
        ],
        fixes: [
            "Replace temperature sensor ($200-400)",
            "Repair wiring harness"
        ],
        diySteps: [
            "1. Locate sensor (varies by model)",
            "2. Check connector and wiring",
            "3. Replace sensor with OEM part"
        ],
        costRange: "$200 - $500",
        difficulty: "Intermediate",
        relatedCodes: ["P2571"],
        affectedModels: ["A6", "A7", "A8", "Q7"],
        commonality: "Low"
    },
    {
        code: "B1000",
        category: "Body",
        description: "Internal Control Module Memory Error",
        detailedExplanation: "General body control module memory error indicating possible internal failure or software corruption.",
        symptoms: ["various electrical issues", "check engine light", "comfort system malfunctions"],
        causes: [
            "Low battery voltage during programming",
            "Module internal failure",
            "Software corruption"
        ],
        fixes: [
            "Clear codes and battery reset",
            "Reflash module at dealer",
            "Replace control module ($400-1000)"
        ],
        diySteps: [
            "1. Clear all codes with proper scanner",
            "2. Disconnect battery for 30 minutes to reset modules",
            "3. If returns, dealer diagnosis required"
        ],
        costRange: "$0 - $1000",
        difficulty: "Mechanic recommended",
        relatedCodes: ["B1001", "U0100"],
        affectedModels: ["All Models"],
        commonality: "Medium"
    },
    {
        code: "B1014",
        category: "Body",
        description: "Control Module Internal Fault",
        detailedExplanation: "Internal processing error in body control module affecting comfort features.",
        symptoms: ["power window issues", "central locking problems", "lighting issues"],
        causes: [
            "Module failure",
            "Voltage spikes",
            "Water intrusion into module"
        ],
        fixes: [
            "Replace affected control module",
            "Check for water leaks into vehicle"
        ],
        diySteps: [
            "Professional diagnosis required",
            "Check BCM location for water damage"
        ],
        costRange: "$300 - $800",
        difficulty: "Mechanic recommended",
        relatedCodes: ["B1000"],
        affectedModels: ["A4", "A6", "Q5", "Q7"],
        commonality: "Low"
    },
    {
        code: "C101C",
        category: "Chassis",
        description: "Battery Voltage Low Circuit",
        detailedExplanation: "Chassis module detecting low voltage affecting ABS, traction control, or stability control systems.",
        symptoms: ["ABS light", "traction control light", "stability control disabled"],
        causes: [
            "Weak battery",
            "Charging system issues",
            "High resistance in power distribution"
        ],
        fixes: [
            "Replace battery",
            "Check alternator output",
            "Clean power distribution connections"
        ],
        diySteps: [
            "1. Test battery and charging system",
            "2. Check voltage at ABS module connector",
            "3. Replace battery if marginal"
        ],
        costRange: "$200 - $400",
        difficulty: "DIY",
        relatedCodes: ["C101D", "P0562"],
        affectedModels: ["All Models"],
        commonality: "Medium"
    },
    {
        code: "C1035",
        category: "Chassis",
        description: "ABS Wheel Speed Sensor Right Front Circuit",
        detailedExplanation: "The right front wheel speed sensor circuit is reading incorrectly or no signal, affecting ABS and traction control.",
        symptoms: ["ABS light", "traction control light", "speedometer erratic", "brake pulsation"],
        causes: [
            "Failed wheel speed sensor",
            "Damaged sensor wiring",
            "Dirty or damaged tone ring",
            "Excessive air gap between sensor and tone ring"
        ],
        fixes: [
            "Replace wheel speed sensor ($80-200)",
            "Repair wiring if damaged ($200-400)",
            "Clean tone ring if dirty",
            "Check bearing if tone ring damaged ($400-800)"
        ],
        diySteps: [
            "1. Remove sensor and check for metal debris",
            "2. Test sensor resistance and AC voltage while spinning wheel",
            "3. Inspect tone ring through hole in hub for cracks or missing teeth",
            "4. Replace sensor (usually one bolt, careful not to break)",
            "5. Clear codes and test drive"
        ],
        costRange: "$80 - $800",
        difficulty: "DIY",
        relatedCodes: ["C1036", "C1037", "C1038"],
        affectedModels: ["A3", "A4", "A5", "A6", "Q5", "Q7"],
        commonality: "High"
    },
    {
        code: "U0101",
        category: "Network",
        description: "Lost Communication with TCM",
        detailedExplanation: "The ECU cannot communicate with the Transmission Control Module over the CAN bus network.",
        symptoms: ["transmission limp mode", "shifting issues", "check engine light", "gear indicator flashing"],
        causes: [
            "Faulty TCM",
            "CAN bus wiring issues",
            "Low system voltage",
            "Corroded connectors"
        ],
        fixes: [
            "Check power and ground to TCM",
            "Repair CAN bus wiring ($400-800)",
            "Replace TCM ($800-2000 with programming)",
            "Update software"
        ],
        diySteps: [
            "1. Check fuses for TCM",
            "2. Inspect connector at transmission for oil intrusion/corrosion",
            "3. Check CAN bus voltages (should be ~2.5V dominant/recessive)",
            "4. Professional diagnosis for TCM replacement"
        ],
        costRange: "$100 - $2000",
        difficulty: "Mechanic recommended",
        relatedCodes: ["U0100", "U0155", "U0146"],
        affectedModels: ["A4", "A6", "Q5", "Q7", "A8"],
        commonality: "Medium"
    },
    {
        code: "U1123",
        category: "Network",
        description: "CAN Bus Communication Error",
        detailedExplanation: "General communication error on the Controller Area Network bus affecting multiple modules.",
        symptoms: ["multiple warning lights", "systems inoperative", "intermittent issues"],
        causes: [
            "CAN bus short to power or ground",
            "Module flooding bus with errors",
            "Corroded CAN bus connectors",
            "Aftermarket electronics interfering"
        ],
        fixes: [
            "Remove aftermarket electronics",
            "Repair CAN bus wiring ($500-1500)",
            "Identify and replace failing module ($500-2000)"
        ],
        diySteps: [
            "1. Remove any aftermarket radios, alarms, or remote starters",
            "2. Scan all modules for communication errors",
            "3. Check CAN bus resistance (should be ~60 ohms between CAN-H and CAN-L)",
            "4. Professional network diagnosis required"
        ],
        costRange: "$0 - $2000",
        difficulty: "Mechanic recommended",
        relatedCodes: ["U1121", "U1122", "U0101"],
        affectedModels: ["All Models"],
        commonality: "Low"
    }
];

const symptomsList = [
    "rough idle",
    "loss of power", 
    "check engine flashing",
    "oil pressure warning",
    "misfire",
    "turbo issues",
    "hesitation",
    "poor fuel economy",
    "hard starting",
    "stalling",
    "overheating",
    "transmission issues",
    "brake problems",
    "electrical issues",
    "vibration"
];

const audiModels = [
    { id: "A3", name: "A3/S3/RS3", years: "1996-Present", engine: "4-cyl, 5-cyl", image: "compact" },
    { id: "A4", name: "A4/S4/RS4", years: "1994-Present", engine: "4-cyl, V6, V8", image: "sedan" },
    { id: "A5", name: "A5/S5/RS5", years: "2007-Present", engine: "4-cyl, V6, V8", image: "coupe" },
    { id: "A6", name: "A6/S6/RS6", years: "1994-Present", engine: "V6, V8", image: "luxury" },
    { id: "A7", name: "A7/S7/RS7", years: "2010-Present", engine: "V6, V8", image: "sportback" },
    { id: "A8", name: "A8/S8", years: "1994-Present", engine: "V6, V8, W12", image: "luxury" },
    { id: "Q3", name: "Q3/RS Q3", years: "2011-Present", engine: "4-cyl", image: "suv" },
    { id: "Q5", name: "Q5/SQ5", years: "2008-Present", engine: "4-cyl, V6", image: "suv" },
    { id: "Q7", name: "Q7/SQ7", years: "2005-Present", engine: "V6, V8", image: "suv" },
    { id: "Q8", name: "Q8/RS Q8", years: "2018-Present", engine: "V6, V8", image: "suv" },
    { id: "TT", name: "TT/TTS/TT RS", years: "1998-Present", engine: "4-cyl, 5-cyl", image: "sports" },
    { id: "R8", name: "R8", years: "2006-Present", engine: "V8, V10", image: "supercar" },
    { id: "E-Tron", name: "E-Tron/Q4/Q8 E-Tron", years: "2019-Present", engine: "Electric", image: "electric" },
    { id: "Allroad", name: "Allroad", years: "1999-Present", engine: "4-cyl, V6", image: "wagon" },
    { id: "Q2", name: "Q2", years: "2016-Present", engine: "4-cyl", image: "compact" }
];

const commonCodes = ["P0171", "P0420", "P0300", "P0299", "P0456", "P0301", "P2181", "C1035"];
