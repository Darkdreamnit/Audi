const rawDTCData = [

  {
    "code": "DTC",
    "description": "DTC Text"
  },
  {
    "code": "P000100",
    "description": "Fuel Volume Regulator Control Circuit/Open"
  },
  {
    "code": "P000A00",
    "description": "A Camshaft Position Slow Response (Bank 1)"
  },
  {
    "code": "P000B00",
    "description": "B Camshaft Position Slow Response (Bank 1)"
  },
  {
    "code": "P000C00",
    "description": "A Camshaft Position Slow Response (Bank 2)"
  },
  {
    "code": "P000D00",
    "description": "B Camshaft Position Slow Response (Bank 2)"
  },
  {
    "code": "P001000",
    "description": "A Camshaft Position Actuator Circuit/Open (Bank1)"
  },
  {
    "code": "P001100",
    "description": "A Camshaft Position (Bank1) Timing over-advanced or System Performance"
  },
  {
    "code": "P001200",
    "description": "A Camshaft Position (Bank1) Timing over-retarded"
  },
  {
    "code": "P001300",
    "description": "B Camshaft Position Actuator Circuit/Open (Bank1)"
  },
  {
    "code": "P001400",
    "description": "B Camshaft Position (Bank1) Timing over-advanced or System Performance"
  },
  {
    "code": "P001500",
    "description": "B Camshaft Position (Bank1) Timing over-retarded"
  },
  {
    "code": "P001600",
    "description": "Crankshaft Position-Camshaft Position Correlation Bank 1 Sensor A"
  },
  {
    "code": "P001700",
    "description": "Crankshaft Position-Camshaft Position Correlation Bank 1 Sensor B"
  },
  {
    "code": "P001800",
    "description": "Crankshaft Position-Camshaft Position Correlation Bank 2 Sensor A"
  },
  {
    "code": "P001900",
    "description": "Crankshaft Position-Camshaft Position Correlation Bank 2 Sensor B"
  },
  {
    "code": "P002000",
    "description": "A Camshaft Position ActuatorCircuit(Bank2)"
  },
  {
    "code": "P002100",
    "description": "A Camshaft Position (Bank2) Timing over-advanced or System Performance"
  },
  {
    "code": "P002200",
    "description": "A Camshaft Position (Bank2) Timing over-retarded"
  },
  {
    "code": "P002300",
    "description": "B Camshaft Position Actuator Circuit(Bank2)"
  },
  {
    "code": "P002400",
    "description": "B Camshaft Position (Bank2) Timing over-advanced or System Performance"
  },
  {
    "code": "P002500",
    "description": "B Camshaft Position (Bank2) Timing over-retarded"
  },
  {
    "code": "P003000",
    "description": "O2 Sensor Heater Contr. Circ.(Bank1(1)Sensor 1)"
  },
  {
    "code": "P003100",
    "description": "O2 Sensor Heater Contr. Circ.(Bank1(1)Sensor 1) Low"
  },
  {
    "code": "P003200",
    "description": "O2 Sensor Heater Contr. Circ.(Bank1(1)Sensor 1) High"
  },
  {
    "code": "P003300",
    "description": "Turbo Charger Bypass Valve Control Circuit"
  },
  {
    "code": "P003400",
    "description": "Turbo Charger Bypass Valve Control Circuit Low"
  },
  {
    "code": "P003500",
    "description": "Turbo Charger Bypass Valve Control Circuit High"
  },
  {
    "code": "P003600",
    "description": "O2 Sensor Heater Contr. Circ.(Bank1(1)Sensor 2)"
  },
  {
    "code": "P003700",
    "description": "O2 Sensor Heater Contr. Circ.(Bank1(1)Sensor 2) Low"
  },
  {
    "code": "P003800",
    "description": "O2 Sensor Heater Contr. Circ.(Bank1(1)Sensor 2) High"
  },
  {
    "code": "P003900",
    "description": "Turbo/Super Charger Bypass Valve Control Circuit Range/Performance"
  },
  {
    "code": "P004000",
    "description": "O2 Sensor Signals Swapped Bank 1 Sensor 1/ Bank 2 Sensor 1"
  },
  {
    "code": "P004100",
    "description": "O2 Sensor Signals Swapped Bank 1 Sensor 2/ Bank 2 Sensor 2"
  },
  {
    "code": "P004200",
    "description": "O2 Sensor Heater Contr. Circ.(Bank1(1)Sensor 3)"
  },
  {
    "code": "P004300",
    "description": "O2 Sensor Heater Contr. Circ.(Bank1(1)Sensor 3) Low"
  },
  {
    "code": "P004400",
    "description": "O2 Sensor Heater Contr. Circ.(Bank1(1)Sensor 3) High"
  },
  {
    "code": "P004500",
    "description": "Turbocharger/Supercharger Boost Control Solenoid \"A\" Circuit/Open"
  },
  {
    "code": "P004700",
    "description": "Turbocharger/Supercharger Boost Control Solenoid \"A\" Circuit Low"
  },
  {
    "code": "P004800",
    "description": "Turbocharger/Supercharger Boost Control Solenoid \"A\" Circuit High"
  },
  {
    "code": "P004900",
    "description": "Turbocharger/Supercharger Turbine Overspeed"
  },
  {
    "code": "P004A00",
    "description": "Turbocharger/Supercharger Boost Control Solenoid \"B\" Circuit / Open"
  },
  {
    "code": "P004C00",
    "description": "Turbocharger/Supercharger Boost Control Solenoid \"B\" Circuit Low"
  },
  {
    "code": "P004D00",
    "description": "Turbocharger/Supercharger Boost Control Solenoid \"B\" Circuit High"
  },
  {
    "code": "P005000",
    "description": "O2 Sensor Heater Contr. Circ.(Bank2 Sensor 1)"
  },
  {
    "code": "P005100",
    "description": "O2 Sensor Heater Contr. Circ.(Bank2 Sensor 1) Low"
  },
  {
    "code": "P005200",
    "description": "O2 Sensor Heater Contr. Circ.(Bank2 Sensor1) High"
  },
  {
    "code": "P005600",
    "description": "O2 Sensor Heater Contr. Circ.(Bank2 Sensor 2)"
  },
  {
    "code": "P005700",
    "description": "O2 Sensor Heater Contr. Circ.(Bank2 Sensor 2) Low"
  },
  {
    "code": "P005800",
    "description": "O2 Sensor Heater Contr. Circ.(Bank2 Sensor2) High"
  },
  {
    "code": "P006200",
    "description": "HO2S Heater Control Circuit"
  },
  {
    "code": "P006300",
    "description": "HO2S Heater Control Circuit Low"
  },
  {
    "code": "P006400",
    "description": "HO2S Heater Control Circuit High Bank2 Sensor3"
  },
  {
    "code": "P006500",
    "description": "Air Assisted Injector Control Range/Performance"
  },
  {
    "code": "P006600",
    "description": "Air Assisted Injector Control Circuit low"
  },
  {
    "code": "P006700",
    "description": "Air Assisted Injector Control Circuit high"
  },
  {
    "code": "P006800",
    "description": "MAP/MAF - Throttle Position Correlation"
  },
  {
    "code": "P006900",
    "description": "Manifold Absolute Pressure - Barometric Pressure Correlation"
  },
  {
    "code": "P007000",
    "description": "Ambient Air Temperature Sensor Circuit"
  },
  {
    "code": "P007100",
    "description": "Ambient Air Temperature Sensor Circuit Range/Performance"
  },
  {
    "code": "P007200",
    "description": "Ambient Air Temperature Sensor Circuit Low"
  },
  {
    "code": "P007300",
    "description": "Ambient Air Temperature Sensor Circuit High"
  },
  {
    "code": "P007400",
    "description": "Ambient Air Temperature Sensor Circuit Intermittent"
  },
  {
    "code": "P007C00",
    "description": "Charge Air Cooler Temperature Sensor Circuit Low Bank 1"
  },
  {
    "code": "P007D00",
    "description": "Charge Air Cooler Temperature Sensor Circuit High Bank 1"
  },
  {
    "code": "P008700",
    "description": "Fuel Rail/System Pressure - Too Low"
  },
  {
    "code": "P008800",
    "description": "Fuel Rail/System Pressure - Too High"
  },
  {
    "code": "P008900",
    "description": "Fuel Pressure Regulator 1 Performance"
  },
  {
    "code": "P008A00",
    "description": "Low Pressure Fuel System Pressure - Too Low"
  },
  {
    "code": "P008B00",
    "description": "Low Pressure Fuel System Pressure - Too High"
  },
  {
    "code": "P009000",
    "description": "Fuel Pressure Regulator 1Control Circuit"
  },
  {
    "code": "P009100",
    "description": "Fuel Pressure Regulator 1 Control Circuit Low"
  },
  {
    "code": "P009200",
    "description": "Fuel Pressure Regulator 1 Control Circuit High"
  },
  {
    "code": "P009500",
    "description": "Intake Air Temperature Sensor 2 Circuit"
  },
  {
    "code": "P009600",
    "description": "Intake Air Temperature Sensor 2 Circuit Bank 1 Range/Performance"
  },
  {
    "code": "P009700",
    "description": "Intake Air Temperature Sensor 2 Circuit Low"
  },
  {
    "code": "P009800",
    "description": "Intake Air Temperature Sensor 2 Circuit High"
  },
  {
    "code": "P009900",
    "description": "Intake Air Temperature Sensor 2 Circuit Intermittent/Erratic"
  },
  {
    "code": "P009B00",
    "description": "Fuel Pressure Relief Control Circuit/Open"
  },
  {
    "code": "P009C00",
    "description": "Fuel Pressure Relief Control Circuit Low"
  },
  {
    "code": "P009D00",
    "description": "Fuel Pressure Relief Control Circuit High"
  },
  {
    "code": "P009E00",
    "description": "Fuel Pressure Relief Control Performance/Stuck Off"
  },
  {
    "code": "P009F00",
    "description": "Fuel Pressure Relief Control Stuck on"
  },
  {
    "code": "P00A200",
    "description": "Charge Air Cooler Temperature Sensor Circuit Low Bank 2"
  },
  {
    "code": "P00A300",
    "description": "Charge Air Cooler Temperature Sensor Circuit High Bank 2"
  },
  {
    "code": "P00A600",
    "description": "Intake Air Temperature Sensor 2 Circuit Bank 2 Range/Performance"
  },
  {
    "code": "P00AF00",
    "description": "Turbocharger/Supercharger Boost Control \"A\" Module Performance"
  },
  {
    "code": "P00B000",
    "description": "Turbocharger/Supercharger Boost Control \"B\" Module Performance"
  },
  {
    "code": "P00C600",
    "description": "Fuel Rail Pressure Too Low - Engine Cranking"
  },
  {
    "code": "P010000",
    "description": "Mass or Volume Air Flow Circuit"
  },
  {
    "code": "P010100",
    "description": "Mass or Volume Air Flow Circ. Range/Performance"
  },
  {
    "code": "P010200",
    "description": "Mass or Volume Air Flow Circ. Low Input"
  },
  {
    "code": "P010300",
    "description": "Mass or Volume Air Flow Circ. High Input"
  },
  {
    "code": "P010400",
    "description": "Mass or Volume Air Flow Circuit Intermittent"
  },
  {
    "code": "P010500",
    "description": "Manifolt Absolut Pressure/Barometic Pressure Circuit"
  },
  {
    "code": "P010600",
    "description": "Manifold Abs.Pressure or Bar.Pressure Range/Performance"
  },
  {
    "code": "P010700",
    "description": "Manifold Abs.Pressure or Bar.Pressure Low Input"
  },
  {
    "code": "P010800",
    "description": "Manifold Abs.Pressure or Bar.Pressure High Input"
  },
  {
    "code": "P010A00",
    "description": "Mass or Volume Air Flow \"B\" Circuit"
  },
  {
    "code": "P010B00",
    "description": "Mass or Volume Air Flow \"B\" Circuit Range/Performance"
  },
  {
    "code": "P010C00",
    "description": "Mass or Volume Air Flow \"B\" Circuit Low Input"
  },
  {
    "code": "P010D00",
    "description": "Mass or Volume Air Flow \"B\" Circuit High Input"
  },
  {
    "code": "P010E00",
    "description": "Mass or Volume Air Flow \"B\" Circuit Intermittent/Erratic"
  },
  {
    "code": "P010F00",
    "description": "Mass or Volume Air Flow Sensor A/B Correlation"
  },
  {
    "code": "P011000",
    "description": "Intake Air Temperature Sensor 1 Circuit"
  },
  {
    "code": "P011100",
    "description": "Intake Air Temp.Circ. Range/Performance"
  },
  {
    "code": "P011200",
    "description": "Intake Air Temp.Circ. Low Input"
  },
  {
    "code": "P011300",
    "description": "Intake Air Temp.Circ. High Input"
  },
  {
    "code": "P011400",
    "description": "Intake Air Temp.Circ. Intermittend"
  },
  {
    "code": "P011500",
    "description": "Engine Coolant Temperature Sensor 1 Circuit"
  },
  {
    "code": "P011600",
    "description": "Engine Coolant Temperature Sensor 1 Circuit Range/Performance"
  },
  {
    "code": "P011700",
    "description": "Engine Coolant Temperature Sensor 1 Circuit Low"
  },
  {
    "code": "P011800",
    "description": "Engine Coolant Temperature Sensor 1 Circuit High"
  },
  {
    "code": "P011A00",
    "description": "Engine Coolant Temperature Sensor 1/2 Correlation"
  },
  {
    "code": "P012000",
    "description": "Throttle/Pedal Pos.Sensor A Circ. Malfunction"
  },
  {
    "code": "P012100",
    "description": "Throttle/Pedal Pos.Sensor A Circ. Range/Performance"
  },
  {
    "code": "P012200",
    "description": "Throttle/Pedal Pos.Sensor A Circ. Low Input"
  },
  {
    "code": "P012300",
    "description": "Throttle/Pedal Pos.Sensor A Circ. High Input"
  },
  {
    "code": "P012500",
    "description": "Insufficient Coolant Temp.for Closed Loop Fuel Control"
  },
  {
    "code": "P012800",
    "description": "Coolant Termostat ( Coolant Temperature Below Thermostat Regulating Temperature)"
  },
  {
    "code": "P012A00",
    "description": "Turbocharger/Supercharger Inlet Pressure Sensor Circuit"
  },
  {
    "code": "P012B00",
    "description": "Turbocharger/Supercharger Inlet Pressure Sensor Circuit Range/Performance"
  },
  {
    "code": "P012C00",
    "description": "Turbocharger/Supercharger Inlet Pressure Sensor Circuit Low"
  },
  {
    "code": "P012D00",
    "description": "Turbocharger/Supercharger Inlet Pressure Sensor Circuit High"
  },
  {
    "code": "P013000",
    "description": "O2 Sensor Circ.,Bank1-Sensor1 Malfunction"
  },
  {
    "code": "P013100",
    "description": "O2 Sensor Circ.,Bank1-Sensor1 Low Voltage"
  },
  {
    "code": "P013200",
    "description": "O2 Sensor Circ.,Bank1-Sensor1 High Voltage"
  },
  {
    "code": "P013300",
    "description": "O2 Sensor Circ.,Bank1-Sensor1 Slow Response"
  },
  {
    "code": "P013400",
    "description": "O2 Sensor Circ.,Bank1-Sensor1 No Activity Detected"
  },
  {
    "code": "P013500",
    "description": "O2 Sensor Heater Circ.,Bank1-Sensor1 Malfunction"
  },
  {
    "code": "P013600",
    "description": "O2 Sensor Circ.,Bank1-Sensor2 Malfunction"
  },
  {
    "code": "P013700",
    "description": "O2 Sensor Circ.,Bank1-Sensor2 Low Voltage"
  },
  {
    "code": "P013800",
    "description": "O2 Sensor Circ.,Bank1-Sensor2 High Voltage"
  },
  {
    "code": "P013900",
    "description": "O2 Sensor Circ.,Bank1-Sensor2 Slow Response"
  },
  {
    "code": "P014000",
    "description": "O2 Sensor Circ.,Bank1-Sensor2 No Activity Detected"
  },
  {
    "code": "P014100",
    "description": "O2 Sensor Heater Circ.,Bank1-Sensor2 Malfunction"
  },
  {
    "code": "P014200",
    "description": "O2 Sensor Circ.,Bank1-Sensor3"
  },
  {
    "code": "P014300",
    "description": "O2 Sensor Circ.,Bank1-Sensor3 Low Voltage"
  },
  {
    "code": "P014400",
    "description": "O2 Sensor Circ.,Bank1-Sensor3 High Voltage"
  },
  {
    "code": "P014500",
    "description": "O2 Sensor Circ.,Bank1-Sensor3 Slow Response"
  },
  {
    "code": "P014600",
    "description": "O2 Sensor Circ.,Bank1-Sensor3 No Activity Detected"
  },
  {
    "code": "P014700",
    "description": "O2 Sensor Heater Circ.,Bank1-Sensor3"
  },
  {
    "code": "P014800",
    "description": "Fuel Delivery Error"
  },
  {
    "code": "P014900",
    "description": "Fuel Timing Error"
  },
  {
    "code": "P015000",
    "description": "O2 Sensor Circ.,Bank2-Sensor1 Malfunction"
  },
  {
    "code": "P015100",
    "description": "O2 Sensor Circ.,Bank2-Sensor1 Low Voltage"
  },
  {
    "code": "P015200",
    "description": "O2 Sensor Circ.,Bank2-Sensor1 High Voltage"
  },
  {
    "code": "P015300",
    "description": "O2 Sensor Circ.,Bank2-Sensor1 Slow Response"
  },
  {
    "code": "P015400",
    "description": "O2 Sensor Circ.,Bank2-Sensor1 No Activity Detected"
  },
  {
    "code": "P015500",
    "description": "O2 Sensor Heater Circ.,Bank2-Sensor1 Malfunction"
  },
  {
    "code": "P015600",
    "description": "O2 Sensor Circ.,Bank2-Sensor2 Malfunction"
  },
  {
    "code": "P015700",
    "description": "O2 Sensor Circ.,Bank2-Sensor2 Low Voltage"
  },
  {
    "code": "P015800",
    "description": "O2 Sensor Circ.,Bank2-Sensor2 High Voltage"
  },
  {
    "code": "P015900",
    "description": "O2 Sensor Circ.,Bank2-Sensor2 Slow Response"
  },
  {
    "code": "P016000",
    "description": "O2 Sensor Circ.,Bank2-Sensor2 No Activity Detected"
  },
  {
    "code": "P016100",
    "description": "O2 Sensor Heater Circ.,Bank2-Sensor2 Malfunction"
  },
  {
    "code": "P016200",
    "description": "O2 Sensor Circ.,Bank2-Sensor3 Malfunction"
  },
  {
    "code": "P016300",
    "description": "O2 Sensor Circ.,Bank2-Sensor3 Low Voltage"
  },
  {
    "code": "P016400",
    "description": "O2 Sensor Circ.,Bank2-Sensor3 High Voltage"
  },
  {
    "code": "P016500",
    "description": "O2 Sensor Circ.,Bank2-Sensor3 Slow Response"
  },
  {
    "code": "P016600",
    "description": "O2 Sensor Circ.,Bank2-Sensor3 No Activity Detected"
  },
  {
    "code": "P016700",
    "description": "O2 Sensor Heater Circ.,Bank2-Sensor3 Malfunction"
  },
  {
    "code": "P016900",
    "description": "Incorrect Fuel Composition"
  },
  {
    "code": "P017000",
    "description": "Fuel Trim,Bank1 Malfunction"
  },
  {
    "code": "P017100",
    "description": "Fuel Trim,Bank1 System too Lean"
  },
  {
    "code": "P017200",
    "description": "Fuel Trim,Bank1 System too Rich"
  },
  {
    "code": "P017300",
    "description": "Fuel Trim,Bank2 Malfunction"
  },
  {
    "code": "P017400",
    "description": "Fuel Trim,Bank2 System too Lean"
  },
  {
    "code": "P017500",
    "description": "Fuel Trim,Bank2 System too Rich"
  },
  {
    "code": "P017700",
    "description": "Fuel Composition Sensor Circuit Range/Performance"
  },
  {
    "code": "P017800",
    "description": "Fuel Composition Sensor Circuit Low"
  },
  {
    "code": "P017900",
    "description": "Fuel Composition Sensor Circuit High"
  },
  {
    "code": "P018100",
    "description": "Fuel Temperature Sensor A Circuit Range/Performance"
  },
  {
    "code": "P018200",
    "description": "Fuel Temperature Sensor A Circuit Low Input"
  },
  {
    "code": "P018300",
    "description": "Fuel Temperature Sensor A Circuit High Input"
  },
  {
    "code": "P018600",
    "description": "Fuel Temperature Sensor B Circuit Range/Performance"
  },
  {
    "code": "P018700",
    "description": "Fuel Temperature Sensor B Circuit Low"
  },
  {
    "code": "P018800",
    "description": "Fuel Temperature Sensor B Circuit High"
  },
  {
    "code": "P018A00",
    "description": "Fuel Pressure Sensor \"B\" Circuit"
  },
  {
    "code": "P018B00",
    "description": "Fuel Pressure Sensor \"B\" Circuit Range/Performance"
  },
  {
    "code": "P018C00",
    "description": "Fuel Pressure Sensor \"B\" Circuit Low"
  },
  {
    "code": "P019000",
    "description": "Fuel Rail Pressure Sensor \"A\" Circuit"
  },
  {
    "code": "P019100",
    "description": "Fuel Rail Pressure Sensor \"A\" Circuit Range/Performance"
  },
  {
    "code": "P019200",
    "description": "Fuel Rail Pressure Sensor \"A\" Circuit Low Input"
  },
  {
    "code": "P019300",
    "description": "Fuel Rail Pressure Sensor \"A\" Circuit High Input"
  },
  {
    "code": "P019400",
    "description": "Fuel Rail Pressure Sensor \"A\" Circuit intermittent"
  },
  {
    "code": "P019500",
    "description": "Engine Oil Temperature Sensor Circuit"
  },
  {
    "code": "P019600",
    "description": "Engine Oil Temperature Sensor Circuit range/performance"
  },
  {
    "code": "P019700",
    "description": "Engine Oil Temperature Sensor Circuit low"
  },
  {
    "code": "P019800",
    "description": "Engine Oil Temperature Sensor Circuit high"
  },
  {
    "code": "P019900",
    "description": "Engine Oil Temperature Sensor Circuit Intermittent/Erratic"
  },
  {
    "code": "P020000",
    "description": "Injector Circuit open"
  },
  {
    "code": "P020100",
    "description": "Cylinder 1- Injector Circuit"
  },
  {
    "code": "P020200",
    "description": "Cylinder 2- Injector Circuit"
  },
  {
    "code": "P020300",
    "description": "Cylinder 3- Injector Circuit"
  },
  {
    "code": "P020400",
    "description": "Cylinder 4- Injector Circuit"
  },
  {
    "code": "P020500",
    "description": "Cylinder 5- Injector Circuit"
  },
  {
    "code": "P020600",
    "description": "Cylinder 6- Injector Circuit"
  },
  {
    "code": "P020700",
    "description": "Cylinder 7- Injector Circuit"
  },
  {
    "code": "P020800",
    "description": "Cylinder 8- Injector Circuit"
  },
  {
    "code": "P020900",
    "description": "Cylinder 9- Injector Circuit"
  },
  {
    "code": "P020A00",
    "description": "Cylinder 1 Injection Timing"
  },
  {
    "code": "P020B00",
    "description": "Cylinder 2 Injection Timing"
  },
  {
    "code": "P020C00",
    "description": "Cylinder 3 Injection Timing"
  },
  {
    "code": "P020D00",
    "description": "Cylinder 4 Injection Timing"
  },
  {
    "code": "P020E00",
    "description": "Cylinder 5 Injection Timing"
  },
  {
    "code": "P020F00",
    "description": "Cylinder 6 Injection Timing"
  },
  {
    "code": "P021000",
    "description": "Cylinder 10- Injector Circuit"
  },
  {
    "code": "P021100",
    "description": "Cylinder 11- Injector Circuit"
  },
  {
    "code": "P021200",
    "description": "Cylinder 12- Injector Circuit"
  },
  {
    "code": "P021500",
    "description": "Engine Shutoff Solenoid"
  },
  {
    "code": "P021600",
    "description": "Injection Timing Control Circuit"
  },
  {
    "code": "P021800",
    "description": "Transmission Fluid Over Temperature Condition"
  },
  {
    "code": "P021900",
    "description": "Engine Overspeed Condition"
  },
  {
    "code": "P021A00",
    "description": "Cylinder 7 Injection Timing"
  },
  {
    "code": "P021B00",
    "description": "Cylinder 8 Injection Timing"
  },
  {
    "code": "P021C00",
    "description": "Cylinder 9 Injection Timing"
  },
  {
    "code": "P021D00",
    "description": "Cylinder 10 Injection Timing"
  },
  {
    "code": "P021E00",
    "description": "Cylinder 11 Injection Timing"
  },
  {
    "code": "P021F00",
    "description": "Cylinder 12 Injection Timing"
  },
  {
    "code": "P022100",
    "description": "Throttle/Pedal Position Sensor/Switch B Range/Performance"
  },
  {
    "code": "P022200",
    "description": "Throttle/Pedal Position Sensor/Switch B Low Input"
  },
  {
    "code": "P022300",
    "description": "Throttle/Pedal Position Sensor/Switch B High Input"
  },
  {
    "code": "P022500",
    "description": "Throttle/Pedal Position Sensor/Switch C"
  },
  {
    "code": "P022600",
    "description": "Throttle/Pedal Position Sensor/Switch C Circuit Range/Performance"
  },
  {
    "code": "P022700",
    "description": "Throttle/Pedal Position Sensor/Switch C Circuit Low Input"
  },
  {
    "code": "P022800",
    "description": "Throttle/Pedal Position Sensor/Switch C Circuit High Input"
  },
  {
    "code": "P022A00",
    "description": "Charge Air Cooler Bypass Control \"A\" Circuit /Open"
  },
  {
    "code": "P022B00",
    "description": "Charge Air Cooler Bypass Control \"A\" Circuit Low"
  },
  {
    "code": "P022C00",
    "description": "Charge Air Cooler Bypass Control \"A\" Circuit High"
  },
  {
    "code": "P023000",
    "description": "Fuel Pump Primary Circuit"
  },
  {
    "code": "P023400",
    "description": "Turbo/Super Charger Overboost Condition"
  },
  {
    "code": "P023500",
    "description": "Turbo/Super Charger Boost Sensor A Circ."
  },
  {
    "code": "P023600",
    "description": "Turbocharger Boost Sensor (A) Circ. Range/Performance"
  },
  {
    "code": "P023700",
    "description": "Turbocharger Boost Sensor (A) Circ. Low Input"
  },
  {
    "code": "P023800",
    "description": "Turbocharger Boost Sensor (A) Circ. High Input"
  },
  {
    "code": "P023F00",
    "description": "Fuel Pump Secondary Circuit/Open"
  },
  {
    "code": "P024000",
    "description": "Turbo/Super Charger Boost Sensor \"B\" Circuit Range/Performance"
  },
  {
    "code": "P024100",
    "description": "Turbo/Super Charger Boost Sensor \"B\" Circuit Low"
  },
  {
    "code": "P024200",
    "description": "Turbo/Super Charger Boost Sensor \"B\" Circuit High"
  },
  {
    "code": "P024300",
    "description": "Turbo/Super Charger Wastegate Solonoid A"
  },
  {
    "code": "P024500",
    "description": "Turbo/Super Charger Wasteg.Solonoid A Low"
  },
  {
    "code": "P024600",
    "description": "Turbo/Sup.Charger Wasteg.Solonoid A High"
  },
  {
    "code": "P024900",
    "description": "Turbo/Super Charger Wastegate Solenoid \"B\" Low"
  },
  {
    "code": "P024A00",
    "description": "Charge Air Cooler Bypass Control \"A\" Range/Performance"
  },
  {
    "code": "P024B00",
    "description": "Charge Air Cooler Bypass Control \"A\" Stuck"
  },
  {
    "code": "P025000",
    "description": "Turbo/Super Charger Wastegate Solenoid \"B\" High"
  },
  {
    "code": "P025100",
    "description": "Injection Pump Fuel Metering Control \"A\" (Cam/Rotor/Injector)"
  },
  {
    "code": "P025200",
    "description": "Injection Pump Fuel Metering Control A Range/Performance (Cam/Rotor/Injector)"
  },
  {
    "code": "P025A00",
    "description": "Fuel Pump Module Control Circuit/Open"
  },
  {
    "code": "P025B00",
    "description": "Fuel Pump Module Control Circuit Range/Performance"
  },
  {
    "code": "P025C00",
    "description": "Fuel Pump Module Control Circuit Low"
  },
  {
    "code": "P025D00",
    "description": "Fuel Pump Module Control Circuit High"
  },
  {
    "code": "P026100",
    "description": "Cylinder 1- Injector Circuit Low"
  },
  {
    "code": "P026200",
    "description": "Cylinder 1- Injector Circuit High"
  },
  {
    "code": "P026300",
    "description": "Cylinder 1 Contribution/Balance"
  },
  {
    "code": "P026400",
    "description": "Cylinder 2- Injector Circuit Low"
  },
  {
    "code": "P026500",
    "description": "Cylinder 2- Injector Circuit High"
  },
  {
    "code": "P026600",
    "description": "Cylinder 2 Contribution/Balance"
  },
  {
    "code": "P026700",
    "description": "Cylinder 3- Injector Circuit Low"
  },
  {
    "code": "P026800",
    "description": "Cylinder 3- Injector Circuit High"
  },
  {
    "code": "P026900",
    "description": "Cylinder 3 Contribution/Balance"
  },
  {
    "code": "P027000",
    "description": "Cylinder 4- Injector Circuit Low"
  },
  {
    "code": "P027100",
    "description": "Cylinder 4- Injector Circuit High"
  },
  {
    "code": "P027200",
    "description": "Cylinder 4 Contribution/Balance"
  },
  {
    "code": "P027300",
    "description": "Cylinder 5- Injector Circuit Low"
  },
  {
    "code": "P027400",
    "description": "Cylinder 5- Injector Circuit High"
  },
  {
    "code": "P027500",
    "description": "Cylinder 5 Contribution/Balance"
  },
  {
    "code": "P027600",
    "description": "Cylinder 6- Injector Circuit Low"
  },
  {
    "code": "P027700",
    "description": "Cylinder 6- Injector Circuit High"
  },
  {
    "code": "P027800",
    "description": "Cylinder 6 Contribution/Balance"
  },
  {
    "code": "P027900",
    "description": "Cylinder 7- Injector Circuit Low"
  },
  {
    "code": "P028000",
    "description": "Cylinder 7- Injector Circuit High"
  },
  {
    "code": "P028100",
    "description": "Cylinder 7 Contribution/Balance"
  },
  {
    "code": "P028200",
    "description": "Cylinder 8- Injector Circuit Low"
  },
  {
    "code": "P028300",
    "description": "Cylinder 8- Injector Circuit High"
  },
  {
    "code": "P028400",
    "description": "Cylinder 8 Contribution/Balance"
  },
  {
    "code": "P028500",
    "description": "Cylinder 9- Injector Circuit Low"
  },
  {
    "code": "P028600",
    "description": "Cylinder 9- Injector Circuit High"
  },
  {
    "code": "P028700",
    "description": "Cylinder 9 Contribution/Balance"
  },
  {
    "code": "P028800",
    "description": "Cylinder 10- Injector Circuit Low"
  },
  {
    "code": "P028900",
    "description": "Cylinder 10- Injector Circuit High"
  },
  {
    "code": "P029000",
    "description": "Cylinder 10 Contribution/Balance"
  },
  {
    "code": "P029100",
    "description": "Cylinder 11- Injector Circuit Low"
  },
  {
    "code": "P029200",
    "description": "Cylinder 11- Injector Circuit High"
  },
  {
    "code": "P029300",
    "description": "Cylinder 11 Contribution/Balance"
  },
  {
    "code": "P029400",
    "description": "Cylinder 12- Injector Circuit Low"
  },
  {
    "code": "P029500",
    "description": "Cylinder 12- Injector Circuit High"
  },
  {
    "code": "P029600",
    "description": "Cylinder 12 Contribution/Balance"
  },
  {
    "code": "P029900",
    "description": "Turbo/Super Charger Underboost"
  },
  {
    "code": "P02CA00",
    "description": "Turbocharger/Supercharger \"B\" Overboost Condition"
  },
  {
    "code": "P02CB00",
    "description": "Turbocharger/Supercharger \"B\" Underboost Condition"
  },
  {
    "code": "P02CD00",
    "description": "Cylinder 1 Fuel Injector Offset Learning At Max Limit"
  },
  {
    "code": "P02CF00",
    "description": "Cylinder 2 Fuel Injector Offset Learning At Max Limit"
  },
  {
    "code": "P02D100",
    "description": "Cylinder 3 Fuel Injector Offset Learning At Max Limit"
  },
  {
    "code": "P02D300",
    "description": "Cylinder 4 Fuel Injector Offset Learning At Max Limit"
  },
  {
    "code": "P030000",
    "description": "Random/Multiple Cylinder Misfire Detected"
  },
  {
    "code": "P030100",
    "description": "Cyl.1 Misfire Detected"
  },
  {
    "code": "P030200",
    "description": "Cyl.2 Misfire Detected"
  },
  {
    "code": "P030300",
    "description": "Cyl.3 Misfire Detected"
  },
  {
    "code": "P030400",
    "description": "Cyl.4 Misfire Detected"
  },
  {
    "code": "P030500",
    "description": "Cyl.5 Misfire Detected"
  },
  {
    "code": "P030600",
    "description": "Cyl.6 Misfire Detected"
  },
  {
    "code": "P030700",
    "description": "Cyl.7 Misfire Detected"
  },
  {
    "code": "P030800",
    "description": "Cyl.8 Misfire Detected"
  },
  {
    "code": "P030900",
    "description": "Cyl.9 Misfire Detected"
  },
  {
    "code": "P031000",
    "description": "Cyl.10 Misfire Detected"
  },
  {
    "code": "P031100",
    "description": "Cyl.11 Misfire Detected"
  },
  {
    "code": "P031200",
    "description": "Cyl.12 Misfire Detected"
  },
  {
    "code": "P031300",
    "description": "Misfire Detected with Low Fuel"
  },
  {
    "code": "P031400",
    "description": "Single Cylinder Misfire"
  },
  {
    "code": "P031800",
    "description": "Rough Road Sensor \"A\" Signal Circuit"
  },
  {
    "code": "P032100",
    "description": "Ign./Distributor Eng.Speed Inp.Circ. Range/Performance"
  },
  {
    "code": "P032200",
    "description": "Ign./Distributor Eng.Speed Inp.Circ. No Signal"
  },
  {
    "code": "P032400",
    "description": "Knock Control System Error"
  },
  {
    "code": "P032500",
    "description": "Knock Sensor 1 Circuit Malfunktion"
  },
  {
    "code": "P032600",
    "description": "Knock Sensor 1 Circuit Range/Performance"
  },
  {
    "code": "P032700",
    "description": "Knock Sensor 1 Circ. Low Input"
  },
  {
    "code": "P032800",
    "description": "Knock Sensor 1 Circ. High Input"
  },
  {
    "code": "P033000",
    "description": "Knock Sensor 2 Circuit"
  },
  {
    "code": "P033100",
    "description": "Knock Sensor 2 Circuit Range/Performance"
  },
  {
    "code": "P033200",
    "description": "Knock Sensor 2 Circ. Low Input"
  },
  {
    "code": "P033300",
    "description": "Knock Sensor 2 Circ. High Input"
  },
  {
    "code": "P033500",
    "description": "Crankshaft Position Sensor A Circuit"
  },
  {
    "code": "P033600",
    "description": "Crankshaft Position Sensor A Circuit Range/Performance"
  },
  {
    "code": "P033700",
    "description": "Crankshaft Pos.Sensor (A) Circ. Low Input"
  },
  {
    "code": "P033900",
    "description": "Crankshaft Position Sensor \"A\" Circuit Intermittent"
  },
  {
    "code": "P034000",
    "description": "Camshaft Position Sensor Circuit"
  },
  {
    "code": "P034100",
    "description": "Camshaft Pos.Sensor Circ. Range/Performance"
  },
  {
    "code": "P034200",
    "description": "Camshaft Pos.Sensor Circ. Low Input"
  },
  {
    "code": "P034300",
    "description": "Camshaft Pos.Sensor Circ. High Input"
  },
  {
    "code": "P034500",
    "description": "Camshaft Position Sensor Circuit Bank2"
  },
  {
    "code": "P034600",
    "description": "Camshaft Pos.Sensor Circ. (Bank2) Range/Performance"
  },
  {
    "code": "P034700",
    "description": "Camshaft Pos.Sensor \"A\" Circ. (Bank2) Low"
  },
  {
    "code": "P034800",
    "description": "Camshaft Pos.Sensor \"A\" Circ. (Bank2) High"
  },
  {
    "code": "P035100",
    "description": "Ignition Coil A Primary/secondary Circuit"
  },
  {
    "code": "P035200",
    "description": "Ignition Coil B Primary/secondary Circuit"
  },
  {
    "code": "P035300",
    "description": "Ignition Coil C Primary/secondary Circuit"
  },
  {
    "code": "P035400",
    "description": "Ignition Coil D Primary/secondary Circuit"
  },
  {
    "code": "P035500",
    "description": "Ignition Coil E Primary/secondary Circuit"
  },
  {
    "code": "P035600",
    "description": "Ignition Coil F Primary/secondary Circuit"
  },
  {
    "code": "P035700",
    "description": "Ignition Coil G Primary/secondary Circuit"
  },
  {
    "code": "P035800",
    "description": "Ignition Coil H Primary/secondary Circuit"
  },
  {
    "code": "P035900",
    "description": "Ignition Coil I Primary/secondary Circuit"
  },
  {
    "code": "P036000",
    "description": "Ignition Coil J Primary/secondary Circuit"
  },
  {
    "code": "P036100",
    "description": "Ignition Coil K Primary/secondary Circuit"
  },
  {
    "code": "P036200",
    "description": "Ignition Coil L Primary/secondary Circuit"
  },
  {
    "code": "P036300",
    "description": "Misfire Detected - Fueling Disabled"
  },
  {
    "code": "P036500",
    "description": "Camshaft Position Sensor \"B\" Circuit (Bank 1)"
  },
  {
    "code": "P036600",
    "description": "Camshaft Pos.Sensor \"B\" Circ. (Bank 1) Range/Performance"
  },
  {
    "code": "P036700",
    "description": "Camshaft Pos.Sensor \"B\" Circ. (Bank 1) Low Input"
  },
  {
    "code": "P036800",
    "description": "Camshaft Pos.Sensor \"B\" Circ. (Bank 1) High Input"
  },
  {
    "code": "P038000",
    "description": "Glow Plug/Heater Circuit \"A\""
  },
  {
    "code": "P038100",
    "description": "Glow Plug/Heater Indicator Circuit"
  },
  {
    "code": "P038300",
    "description": "Glow Plug Control Module Control Circuit Low"
  },
  {
    "code": "P038400",
    "description": "Glow Plug Control Module Control Circuit High"
  },
  {
    "code": "P039000",
    "description": "Camshaft Position Sensor \"B\" Circuit (Bank 2)"
  },
  {
    "code": "P039100",
    "description": "Camshaft Pos.Sensor \"B\" Circ. (Bank 2) Range/Performance"
  },
  {
    "code": "P039200",
    "description": "Camshaft Pos.Sensor \"B\" Circ. (Bank 2) Low Input"
  },
  {
    "code": "P039300",
    "description": "Camshaft Pos.Sensor \"B\" Circ. (Bank 2) High Input"
  },
  {
    "code": "P039B00",
    "description": "Cylinder 1 Pressure Too High"
  },
  {
    "code": "P03A500",
    "description": "Cylinder 2 Pressure Too High"
  },
  {
    "code": "P03AF00",
    "description": "Cylinder 3 Pressure Too High"
  },
  {
    "code": "P03B900",
    "description": "Cylinder 4 Pressure Too High"
  },
  {
    "code": "P03C300",
    "description": "Cylinder 5 Pressure Too High"
  },
  {
    "code": "P03CD00",
    "description": "Cylinder 6 Pressure Too High"
  },
  {
    "code": "P040000",
    "description": "Exhaust Gas Recirc.\"A\" Flow"
  },
  {
    "code": "P040100",
    "description": "Exhaust Gas Recirc.Flow Insufficient Detected"
  },
  {
    "code": "P040200",
    "description": "Exhaust Gas Recirc.Flow Excessive Detected"
  },
  {
    "code": "P040300",
    "description": "Exhaust Gas Recirculation Circuit"
  },
  {
    "code": "P040400",
    "description": "Exhaust Gas Recirculation Circuit Range/Performance"
  },
  {
    "code": "P040500",
    "description": "Exhaust Gas Recirculat.Sensor A Circuit Low"
  },
  {
    "code": "P040600",
    "description": "Exhaust Gas Recirculat.Sensor A Circuit High"
  },
  {
    "code": "P040700",
    "description": "Exhaust Gas Recirculat.Sensor B Circuit Low"
  },
  {
    "code": "P040800",
    "description": "Exhaust Gas Recirculat.Sensor B Circuit High"
  },
  {
    "code": "P040B00",
    "description": "Exhaust Gas Recirculation Temperature Sensor \"A\" Circuit Range/Performance"
  },
  {
    "code": "P040C00",
    "description": "Exhaust Gas Recirculation Temperature Sensor \"A\" Circuit Low"
  },
  {
    "code": "P040D00",
    "description": "Exhaust Gas Recirculation Temperature Sensor \"A\" Circuit High"
  },
  {
    "code": "P041000",
    "description": "Sec.Air Inj.Sys. Malfunction"
  },
  {
    "code": "P041100",
    "description": "Sec.Air Inj.Sys. Incorrect Flow Detected"
  },
  {
    "code": "P041200",
    "description": "Sec.Air Inj.Sys.Switching Valve A Circ. Malfunction"
  },
  {
    "code": "P041300",
    "description": "Sec.Air Inj.Sys.Switching Valve A Circ. Open"
  },
  {
    "code": "P041400",
    "description": "Sec.Air Inj.Sys.Switching Valve A Circ. Shorted"
  },
  {
    "code": "P041500",
    "description": "Sec.Air Inj.Sys.Switching Valve B Circ. Malfunction"
  },
  {
    "code": "P041600",
    "description": "Sec.Air Inj.Sys.Switching Valve B Circ. Open"
  },
  {
    "code": "P041700",
    "description": "Sec.Air Inj.Sys.Switching Valve B Circ. Shorted"
  },
  {
    "code": "P041800",
    "description": "Sec. Air Injection System Relay A Circuit"
  },
  {
    "code": "P041900",
    "description": "Sec. Air Injection System Relay B Circuit"
  },
  {
    "code": "P042000",
    "description": "Catalyst System,Bank1 Efficiency Below Threshold"
  },
  {
    "code": "P042100",
    "description": "Warm Up Catalyst, Bank1 Efficiency Below Threshold"
  },
  {
    "code": "P042200",
    "description": "Main Catalyst,Bank1 Efficiency Below Threshold"
  },
  {
    "code": "P042500",
    "description": "Catalyst Temperature Sensor Circuit"
  },
  {
    "code": "P042600",
    "description": "Catalyst Temperature Sensor Circuit Range/Performance"
  },
  {
    "code": "P042700",
    "description": "Catalyst Temperature Sensor Bank1 Low Input"
  },
  {
    "code": "P042800",
    "description": "Catalyst Temperature Sensor Bank1 High Input"
  },
  {
    "code": "P043000",
    "description": "Catalyst System, Bank2 Efficiency Below Threshold"
  },
  {
    "code": "P043100",
    "description": "Warm Up Catalyst, Bank2 Efficiency Below Threshold"
  },
  {
    "code": "P043200",
    "description": "Main Catalyst,Bank2 Efficiency Below Threshold"
  },
  {
    "code": "P043600",
    "description": "Catalyst Temperature Sensor Bank2 Range/performance"
  },
  {
    "code": "P043700",
    "description": "Catalyst Temperature Sensor Bank2 Low Input"
  },
  {
    "code": "P043800",
    "description": "Catalyst Temperature Sensor Bank2 High Input"
  },
  {
    "code": "P044000",
    "description": "EVAP Emission Contr.Sys. Malfunction"
  },
  {
    "code": "P044100",
    "description": "EVAP Emission Contr.Sys.Incorrect Purge Flow"
  },
  {
    "code": "P044200",
    "description": "EVAP Emission Contr.Sys.(Small Leak) Leak Detected"
  },
  {
    "code": "P044300",
    "description": "Evaporativ Emiss.System Purge Control Valve Circ."
  },
  {
    "code": "P044400",
    "description": "Evaporativ Emiss.System Purge Control Valve Circ. Open"
  },
  {
    "code": "P044500",
    "description": "Evaporativ Emiss.System Purge Control Valve Circ. Shorted"
  },
  {
    "code": "P044900",
    "description": "Evaporativ Emiss.System Vent Valve/Solenoid Circ."
  },
  {
    "code": "P045000",
    "description": "Evaporative Emission System Pressure Sensor/Switch"
  },
  {
    "code": "P045100",
    "description": "Evaporative Emission System Pressure Sensor/Switch Range/Performance"
  },
  {
    "code": "P045200",
    "description": "EVAP Emission Contr.Sys.Press.Sensor Low Input"
  },
  {
    "code": "P045300",
    "description": "EVAP Emission Contr.Sys.Press.Sensor High Input"
  },
  {
    "code": "P045500",
    "description": "EVAP Emission Contr.Sys.(Gross Leak) Leak Detected"
  },
  {
    "code": "P045600",
    "description": "EVAP Emission Contr. Sys. (very small Leak) Leak Detected"
  },
  {
    "code": "P045800",
    "description": "Evaporative Emission System Purge Control Valve Circuit Low"
  },
  {
    "code": "P045900",
    "description": "Evaporative Emission System Purge Control Valve Circuit High"
  },
  {
    "code": "P045A00",
    "description": "Exhaust Gas Recirculation \"B\" Control Circuit"
  },
  {
    "code": "P045B00",
    "description": "Exhaust Gas Recirculation \"B\" Control Circuit Range/Performance"
  },
  {
    "code": "P045C00",
    "description": "Exhaust Gas Recirculation \"B\" Control Circuit Low"
  },
  {
    "code": "P045D00",
    "description": "Exhaust Gas Recirculation \"B\" Control Circuit High"
  },
  {
    "code": "P045E00",
    "description": "Exhaust Gas Recirculation \"B\" Control Stuck Open"
  },
  {
    "code": "P045F00",
    "description": "Exhaust Gas Recirculation \"B\" Control Stuck Closed"
  },
  {
    "code": "P046100",
    "description": "Fuel Level Sensor Circ. Range/Performance"
  },
  {
    "code": "P046200",
    "description": "Fuel Lever Sensor Circuit Low Input"
  },
  {
    "code": "P046300",
    "description": "Fuel Lever Sensor Circuit High Input"
  },
  {
    "code": "P046C00",
    "description": "Exhaust Gas Recirculation Sensor \"A\" Circuit Range/Performance"
  },
  {
    "code": "P046E00",
    "description": "Exhaust Gas Recirculation Sensor \"B\" Circuit Range/Performance"
  },
  {
    "code": "P047000",
    "description": "Exhaust Pressure Sensor \"A\""
  },
  {
    "code": "P047100",
    "description": "Exhaust Pressure Sensor \"A\" Range/Performance"
  },
  {
    "code": "P047200",
    "description": "Exhaust Pressure Sensor \"A\"Low"
  },
  {
    "code": "P047300",
    "description": "Exhaust Pressure Sensor \"A\" High"
  },
  {
    "code": "P047500",
    "description": "Exhaust Pressure Control Valve \"A\""
  },
  {
    "code": "P047600",
    "description": "Exhaust Pressure Control Valve \"A\" Range/Performance"
  },
  {
    "code": "P047700",
    "description": "Exhaust Pressure Control Valve \"A\" Low"
  },
  {
    "code": "P047800",
    "description": "Exhaust Pressure Control Valve \"A\" High"
  },
  {
    "code": "P047A00",
    "description": "Exhaust Pressure Sensor \"B\""
  },
  {
    "code": "P047B00",
    "description": "Exhaust Pressure Sensor \"B\" Range/Performance"
  },
  {
    "code": "P047C00",
    "description": "Exhaust Pressure Sensor \"B\" Low"
  },
  {
    "code": "P047D00",
    "description": "Exhaust Pressure Sensor \"B\" High"
  },
  {
    "code": "P047F00",
    "description": "Exhaust Pressure Control Valve \"A\" Stuck Open"
  },
  {
    "code": "P048000",
    "description": "Cooling Fan 1 Control Circuit"
  },
  {
    "code": "P048100",
    "description": "Cooling Fan 2 Control Circuit"
  },
  {
    "code": "P048600",
    "description": "Exhaust Gas Recirculation Sensor \"B\" Circuit"
  },
  {
    "code": "P048900",
    "description": "Exhaust Gas Recirculation Control Circuit Low"
  },
  {
    "code": "P048A00",
    "description": "Exhaust Pressure Control Valve \"A\" Stuck Closed"
  },
  {
    "code": "P048B00",
    "description": "Exhaust Pressure Control Valve Position Sensor/Switch Circuit"
  },
  {
    "code": "P048C00",
    "description": "Exhaust Pressure Control Valve Pos. Sensor/Switch Circuit Range/Performance"
  },
  {
    "code": "P048E00",
    "description": "Exhaust Pressure Control Valve Pos. Sensor/Switch Circuit High"
  },
  {
    "code": "P049000",
    "description": "Exhaust Gas Recirculation Control Circuit High"
  },
  {
    "code": "P049100",
    "description": "Secondary Air Injection System (Bank 1) insufficient flow"
  },
  {
    "code": "P049200",
    "description": "Secondary Air Injection System (Bank 2)"
  },
  {
    "code": "P049800",
    "description": "Evaporative Emission System Vent Valve Control Circuit Low"
  },
  {
    "code": "P049900",
    "description": "Evaporative Emission System Vent Valve Control Circuit High"
  },
  {
    "code": "P049A00",
    "description": "Exhaust Gas Recirc.\"B\" Flow"
  },
  {
    "code": "P049D00",
    "description": "Exhaust Gas Recirculation \"A\" Control Position Exceeded Learning Limit"
  },
  {
    "code": "P049E00",
    "description": "Exhaust Gas Recirculation \"B\" Control Position Exceeded Learning Limit"
  },
  {
    "code": "P050100",
    "description": "Vehicle Speed Sensor \"A\" Range/Performance"
  },
  {
    "code": "P050200",
    "description": "Vehicle Speed Sensor \"A\" Circuit Low Input"
  },
  {
    "code": "P050300",
    "description": "Vehicle Speed Sensor \"A\" Intermittend/Erratic/High"
  },
  {
    "code": "P050500",
    "description": "Idle Control System"
  },
  {
    "code": "P050600",
    "description": "Idle Control System RPM Lower than Expected"
  },
  {
    "code": "P050700",
    "description": "Idle Control System RPM Higher than Expected"
  },
  {
    "code": "P050A00",
    "description": "Cold Start Idle Air Control System Performance"
  },
  {
    "code": "P050B00",
    "description": "Cold Start Ignition Timing Performance"
  },
  {
    "code": "P051000",
    "description": "Closed Throttle Pos.Switch Malfunction"
  },
  {
    "code": "P051300",
    "description": "Incorrect Immobilizer Key"
  },
  {
    "code": "P053100",
    "description": "A/C Refrigerant Pressure Sensor Circuit Range/Performance"
  },
  {
    "code": "P053200",
    "description": "A/C Refrigerant Pressure Sensor Circuit low Input"
  },
  {
    "code": "P053300",
    "description": "A/C Refrigerant Pressure Sensor Circuit high Input"
  },
  {
    "code": "P053700",
    "description": "A/C Evaporator Temperature Sensor Circuit Low"
  },
  {
    "code": "P053800",
    "description": "A/C Evaporator Temperature Sensor Circuit High"
  },
  {
    "code": "P053A00",
    "description": "Positive Crankcase Ventilation Heater Control Circuit /Open"
  },
  {
    "code": "P053B00",
    "description": "Positive Crankcase Ventilation Heater Control Circuit Low"
  },
  {
    "code": "P053C00",
    "description": "Positive Crankcase Ventilation Heater Control Circuit High"
  },
  {
    "code": "P054400",
    "description": "Exhaust Gas Temperatur Sensor Circuit - Bank 1"
  },
  {
    "code": "P054500",
    "description": "Exhaust Gas Temperatur Sensor Circuit - Bank 1 Low"
  },
  {
    "code": "P054600",
    "description": "Exhaust Gas Temperatur Sensor Circuit - Bank 1 High"
  },
  {
    "code": "P054700",
    "description": "Exhaust Gas Temperatur Sensor Circuit - Bank 2"
  },
  {
    "code": "P054800",
    "description": "Exhaust Gas Temperatur Sensor Circuit - Bank 2 Low"
  },
  {
    "code": "P054900",
    "description": "Exhaust Gas Temperatur Sensor Circuit - Bank 2 High"
  },
  {
    "code": "P055000",
    "description": "Power Steering Pressure Circuit"
  },
  {
    "code": "P055100",
    "description": "Power Steering Pressure Sensor Circuit Range/Performance"
  },
  {
    "code": "P056000",
    "description": "System Voltage Malfunction"
  },
  {
    "code": "P056100",
    "description": "System Voltage Unstable"
  },
  {
    "code": "P056200",
    "description": "System Voltage Low Voltage"
  },
  {
    "code": "P056300",
    "description": "System Voltage High Voltage"
  },
  {
    "code": "P056800",
    "description": "Cruise Control Set Signal"
  },
  {
    "code": "P057100",
    "description": "Cruise/Brake Switch (A) Circ. Malfunction"
  },
  {
    "code": "P059700",
    "description": "Thermostat Heater Control Circuit Open"
  },
  {
    "code": "P059800",
    "description": "Thermostat Heater Control Circuit Low"
  },
  {
    "code": "P059900",
    "description": "Thermostat Heater Control Circuit High"
  },
  {
    "code": "P060000",
    "description": "Serial Link Communication"
  },
  {
    "code": "P060100",
    "description": "Internal Contr.Module Memory Check Sum Error"
  },
  {
    "code": "P060200",
    "description": "Control Modul Programming Error"
  },
  {
    "code": "P060300",
    "description": "Internal Contr.Module (KAM) Error"
  },
  {
    "code": "P060400",
    "description": "Internal Contr.Module Random Access Memory (RAM) Error"
  },
  {
    "code": "P060500",
    "description": "Internal Contr.Module ROM Test Error"
  },
  {
    "code": "P060600",
    "description": "ECM/PCM Processor"
  },
  {
    "code": "P060700",
    "description": "Control Module Performance"
  },
  {
    "code": "P060800",
    "description": "Control Module VSS Output \"A\""
  },
  {
    "code": "P060900",
    "description": "Control Module VSS Output \"B\""
  },
  {
    "code": "P060A00",
    "description": "Internal Control Module Monitoring Processor Performance"
  },
  {
    "code": "P061000",
    "description": "Control Module Vehicle Options Error"
  },
  {
    "code": "P061300",
    "description": "TCM Processor"
  },
  {
    "code": "P061400",
    "description": "ECM/TCM Incompatible"
  },
  {
    "code": "P061500",
    "description": "Starter Relay Circuit"
  },
  {
    "code": "P061600",
    "description": "Starter Relay Circuit Low"
  },
  {
    "code": "P061700",
    "description": "Starter Relay Circuit High"
  },
  {
    "code": "P062700",
    "description": "Fuel Pump \"A\" Control Circuit/Open"
  },
  {
    "code": "P062800",
    "description": "Fuel Pump \"A\" Control Circuit Low"
  },
  {
    "code": "P062900",
    "description": "Fuel Pump \"A\" Control Circuit High"
  },
  {
    "code": "P062B00",
    "description": "Internal Control Module Fuel Injector Control Performance"
  },
  {
    "code": "P062F00",
    "description": "Internal Control Module EEPROM Error"
  },
  {
    "code": "P063400",
    "description": "PCM/ECM/TCM Internal Temperature Too High"
  },
  {
    "code": "P063800",
    "description": "Throttle Actuator Control (Bank1) Range/Performance"
  },
  {
    "code": "P063900",
    "description": "Throttle Actuator Control (Bank2) Range/Performance"
  },
  {
    "code": "P064100",
    "description": "Sensor Reference Voltage \"A\" Circuit Open"
  },
  {
    "code": "P064200",
    "description": "Sensor Reference Voltage \"A\" Circuit Low"
  },
  {
    "code": "P064300",
    "description": "Sensor Reference Voltage \"A\" Circuit High"
  },
  {
    "code": "P064500",
    "description": "AC clutch relais circuit"
  },
  {
    "code": "P064C00",
    "description": "Glow Plug Control Module"
  },
  {
    "code": "P065000",
    "description": "Malfunction Indicator Lamp Control Circ."
  },
  {
    "code": "P065100",
    "description": "Sensor Reference Voltage \"B\" Circuit Open"
  },
  {
    "code": "P065200",
    "description": "Sensor Reference Voltage \"B\" Circuit Low"
  },
  {
    "code": "P065300",
    "description": "Sensor Reference Voltage \"B\" Circuit High"
  },
  {
    "code": "P065400",
    "description": "Engine RPM Output Circuit"
  },
  {
    "code": "P065600",
    "description": "Fuel Level Output Circuit"
  },
  {
    "code": "P065700",
    "description": "Actuator Supply Voltage \"A\" Circuit/Open"
  },
  {
    "code": "P065800",
    "description": "Actuator Supply Voltage \"A\" Circuit Low"
  },
  {
    "code": "P065900",
    "description": "Actuator Supply Voltage \"A\" Circuit High"
  },
  {
    "code": "P066000",
    "description": "Intake Manifold Tuning Control Circuit - Bank1"
  },
  {
    "code": "P066100",
    "description": "Intake Manifold Tuning Control Circuit - Bank1 Low"
  },
  {
    "code": "P066200",
    "description": "Intake Manifold Tuning Control Circuit - Bank1 High"
  },
  {
    "code": "P066600",
    "description": "PCM/ECM/TCM Internal Temperature Sensor \"A\" Circuit"
  },
  {
    "code": "P066700",
    "description": "PCM/ECM/TCM Internal Temperature Sensor \"A\" Range/Performance"
  },
  {
    "code": "P066800",
    "description": "PCM/ECM/TCM Internal Temperature Sensor \"A\" Circuit Low"
  },
  {
    "code": "P066900",
    "description": "PCM/ECM/TCM Internal Temperature Sensor \"A\" Circuit High"
  },
  {
    "code": "P066A00",
    "description": "Cylinder 1 Glow Plug Control Circuit Low"
  },
  {
    "code": "P066C00",
    "description": "Cylinder 2 Glow Plug Control Circuit Low"
  },
  {
    "code": "P066E00",
    "description": "Cylinder 3 Glow Plug Control Circuit Low"
  },
  {
    "code": "P067000",
    "description": "Glow Plug Module Control Circuit"
  },
  {
    "code": "P067100",
    "description": "Cylinder 1 Glow Plug Circuit"
  },
  {
    "code": "P067200",
    "description": "Cylinder 2 Glow Plug Circuit"
  },
  {
    "code": "P067300",
    "description": "Cylinder 3 Glow Plug Circuit"
  },
  {
    "code": "P067400",
    "description": "Cylinder 4 Glow Plug Circuit"
  },
  {
    "code": "P067500",
    "description": "Cylinder 5 Glow Plug Circuit"
  },
  {
    "code": "P067600",
    "description": "Cylinder 6 Glow Plug Circuit"
  },
  {
    "code": "P067700",
    "description": "Cylinder 7 Glow Plug Circuit"
  },
  {
    "code": "P067800",
    "description": "Cylinder 8 Glow Plug Circuit"
  },
  {
    "code": "P067900",
    "description": "Cylinder 9 Glow Plug Circuit"
  },
  {
    "code": "P067A00",
    "description": "Cylinder 4 Glow Plug Control Circuit Low"
  },
  {
    "code": "P067C00",
    "description": "Cylinder 5 Glow Plug Control Circuit Low"
  },
  {
    "code": "P067E00",
    "description": "Cylinder 6 Glow Plug Control Circuit Low"
  },
  {
    "code": "P068000",
    "description": "Cylinder 10 Glow Plug Circuit"
  },
  {
    "code": "P068100",
    "description": "Cylinder 11 Glow Plug Circuit"
  },
  {
    "code": "P068200",
    "description": "Cylinder 12 Glow Plug Circuit"
  },
  {
    "code": "P068400",
    "description": "Glow Plug Control Module to PCM Comm.Circuit Range/Performance"
  },
  {
    "code": "P068500",
    "description": "EMC/PCM Power Relay Control Circuit Open"
  },
  {
    "code": "P068600",
    "description": "EMC/PCM Power Relay Control Circuit Low"
  },
  {
    "code": "P068700",
    "description": "EMC/PCM Power Relay Control Circuit High"
  },
  {
    "code": "P068800",
    "description": "EMC/PCM Power Relay Sense Circuit Open"
  },
  {
    "code": "P068A00",
    "description": "ECM/PCM Power Relay De-Energized Performance - Too Early"
  },
  {
    "code": "P068B00",
    "description": "ECM/PCM Power Relay De-Energized Performance - Too Late"
  },
  {
    "code": "P068C00",
    "description": "Cylinder 7 Glow Plug Control Circuit Low"
  },
  {
    "code": "P068E00",
    "description": "Cylinder 8 Glow Plug Control Circuit Low"
  },
  {
    "code": "P069100",
    "description": "Cooling Fan 1 Control Circuit Low"
  },
  {
    "code": "P069200",
    "description": "Cooling Fan 1 Control Circuit High"
  },
  {
    "code": "P069300",
    "description": "Cooling Fan 2 Control Circuit Low"
  },
  {
    "code": "P069400",
    "description": "Cooling Fan 2 Control Circuit High"
  },
  {
    "code": "P069700",
    "description": "Sensor Reference Voltage \"C\" Circuit Open"
  },
  {
    "code": "P069800",
    "description": "Sensor Reference Voltage \"C\" Circuit Low"
  },
  {
    "code": "P069900",
    "description": "Sensor Reference Voltage \"C\" Circuit High"
  },
  {
    "code": "P069A00",
    "description": "Cylinder 9 Glow Plug Control Circuit Low"
  },
  {
    "code": "P069C00",
    "description": "Cylinder 10 Glow Plug Control Circuit Low"
  },
  {
    "code": "P06A300",
    "description": "Sensor Reference Voltage \"D\" Circuit/Open"
  },
  {
    "code": "P06B900",
    "description": "Cylinder 1 Glow Plug Circuit Range/Performance"
  },
  {
    "code": "P06BA00",
    "description": "Cylinder 2 Glow Plug Circuit Range/Performance"
  },
  {
    "code": "P06BB00",
    "description": "Cylinder 3 Glow Plug Circuit Range/Performance"
  },
  {
    "code": "P06BC00",
    "description": "Cylinder 4 Glow Plug Circuit Range/Performance"
  },
  {
    "code": "P06BD00",
    "description": "Cylinder 5 Glow Plug Circuit Range/Performance"
  },
  {
    "code": "P06BE00",
    "description": "Cylinder 6 Glow Plug Circuit Range/Performance"
  },
  {
    "code": "P06BF00",
    "description": "Cylinder 7 Glow Plug Circuit Range/Performance"
  },
  {
    "code": "P06C000",
    "description": "Cylinder 8 Glow Plug Circuit Range/Performance"
  },
  {
    "code": "P06C100",
    "description": "Cylinder 9 Glow Plug Circuit Range/Performance"
  },
  {
    "code": "P06C200",
    "description": "Cylinder 10 Glow Plug Circuit Range/Performance"
  },
  {
    "code": "P06C300",
    "description": "Cylinder 11 Glow Plug Circuit Range/Performance"
  },
  {
    "code": "P06C400",
    "description": "Cylinder 12 Glow Plug Circuit Range/Performance"
  },
  {
    "code": "P06C500",
    "description": "Cylinder 1 Glow Plug Incorrect"
  },
  {
    "code": "P06C600",
    "description": "Cylinder 2 Glow Plug Incorrect"
  },
  {
    "code": "P06C700",
    "description": "Cylinder 3 Glow Plug Incorrect"
  },
  {
    "code": "P06C800",
    "description": "Cylinder 4 Glow Plug Incorrect"
  },
  {
    "code": "P06C900",
    "description": "Cylinder 5 Glow Plug Incorrect"
  },
  {
    "code": "P06CA00",
    "description": "Cylinder 6 Glow Plug Incorrect"
  },
  {
    "code": "P06CB00",
    "description": "Cylinder 7 Glow Plug Incorrect"
  },
  {
    "code": "P06CC00",
    "description": "Cylinder 8 Glow Plug Incorrect"
  },
  {
    "code": "P06CD00",
    "description": "Cylinder 9 Glow Plug Incorrect"
  },
  {
    "code": "P06CE00",
    "description": "Cylinder 10 Glow Plug Incorrect"
  },
  {
    "code": "P06CF00",
    "description": "Cylinder 11 Glow Plug Incorrect"
  },
  {
    "code": "P06D000",
    "description": "Cylinder 12 Glow Plug Incorrect"
  },
  {
    "code": "P06D200",
    "description": "Sensor Reference Voltage \"E\" Circuit/Open"
  },
  {
    "code": "P06E000",
    "description": "Cylinder 11 Glow Plug Control Circuit Low"
  },
  {
    "code": "P06E200",
    "description": "Cylinder 12 Glow Plug Control Circuit Low"
  },
  {
    "code": "P070000",
    "description": "Transm.Contr.System Malfunction"
  },
  {
    "code": "P070100",
    "description": "Transm.Contr.System Range/Performance"
  },
  {
    "code": "P070200",
    "description": "Transm.Contr.System Electrical"
  },
  {
    "code": "P070300",
    "description": "Torque Converter/Brake Switch B Circ. Malfunction"
  },
  {
    "code": "P070400",
    "description": "Clutch Switch Input Circuit"
  },
  {
    "code": "P070500",
    "description": "Transm.Range Sensor \"A\" Circ.(PRNDL Inp.) Malfunction"
  },
  {
    "code": "P070600",
    "description": "Transm.Range Sensor \"A\" Circ. Range/Performance"
  },
  {
    "code": "P070700",
    "description": "Transm.Range Sensor \"A\" Circ. Low Input"
  },
  {
    "code": "P070800",
    "description": "Transm.Range Sensor \"A\" Circ. High Input"
  },
  {
    "code": "P071000",
    "description": "Transm.Fluid Temp.Sensor Circ. Malfunction"
  },
  {
    "code": "P071100",
    "description": "Transm.Fluid Temp.Sensor Circ. Range/Performance"
  },
  {
    "code": "P071200",
    "description": "Transm.Fluid Temp.Sensor Circ. Low Input"
  },
  {
    "code": "P071300",
    "description": "Transm.Fluid Temp.Sensor Circ. High Input"
  },
  {
    "code": "P071400",
    "description": "Transm.Fluid Temp.Sensor Circ. Intermittent"
  },
  {
    "code": "P071500",
    "description": "Input Turbine/Speed Sensor \"A\" Circ."
  },
  {
    "code": "P071600",
    "description": "Input Turbine/Speed Sensor \"A\"Circ. Range/Performance"
  },
  {
    "code": "P071700",
    "description": "Input Turbine/Speed Sensor \"A\"Circ. No Signal"
  },
  {
    "code": "P072000",
    "description": "Output Speed Sensor Circ. Malfunction"
  },
  {
    "code": "P072100",
    "description": "Output Speed Sensor Circ. Range/Performance"
  },
  {
    "code": "P072200",
    "description": "Output Speed Sensor Circ. No Signal"
  },
  {
    "code": "P072500",
    "description": "Engine Speed Input Ciruit"
  },
  {
    "code": "P072600",
    "description": "Engine Speed Inp.Circ. Range/Performance"
  },
  {
    "code": "P072700",
    "description": "Engine Speed Inp.Circ. No Signal"
  },
  {
    "code": "P072900",
    "description": "Gear 6 Incorrect Ratio"
  },
  {
    "code": "P072B00",
    "description": "Stuck in Reverse"
  },
  {
    "code": "P072C00",
    "description": "Stuck in Gear 1"
  },
  {
    "code": "P072D00",
    "description": "Stuck in Gear 2"
  },
  {
    "code": "P072E00",
    "description": "Stuck in Gear 3"
  },
  {
    "code": "P072F00",
    "description": "Stuck in Gear 4"
  },
  {
    "code": "P073000",
    "description": "Gear Incorrect Ratio"
  },
  {
    "code": "P073100",
    "description": "Gear 1 Incorrect Ratio"
  },
  {
    "code": "P073200",
    "description": "Gear 2 Incorrect Ratio"
  },
  {
    "code": "P073300",
    "description": "Gear 3 Incorrect Ratio"
  },
  {
    "code": "P073400",
    "description": "Gear 4 Incorrect Ratio"
  },
  {
    "code": "P073500",
    "description": "Gear 5 Incorrect Ratio"
  },
  {
    "code": "P073600",
    "description": "Reverse Incorrect Ratio"
  },
  {
    "code": "P073A00",
    "description": "Stuck in Gear 5"
  },
  {
    "code": "P073B00",
    "description": "Stuck in Gear 6"
  },
  {
    "code": "P073C00",
    "description": "Stuck in Gear 7"
  },
  {
    "code": "P073E00",
    "description": "Unable to Engage Reverse"
  },
  {
    "code": "P073F00",
    "description": "Unable to Engage Gear 1"
  },
  {
    "code": "P074000",
    "description": "Torque Converter Clutch Circ. Malfunction"
  },
  {
    "code": "P074100",
    "description": "Torque Converter Clutch Circ. Performance or Stuck Off"
  },
  {
    "code": "P074300",
    "description": "Torque Converter Clutch Circ. Electrical"
  },
  {
    "code": "P074600",
    "description": "Pressure Contr.Solenoid A Performance or Stuck Off"
  },
  {
    "code": "P074700",
    "description": "Pressure Contr.Solenoid A Stuck On"
  },
  {
    "code": "P074800",
    "description": "Pressure Contr.Solenoid A Electrical"
  },
  {
    "code": "P074900",
    "description": "Pressure Contr.Solenoid A Intermittent"
  },
  {
    "code": "P074A00",
    "description": "Unable to Engage Gear 2"
  },
  {
    "code": "P074B00",
    "description": "Unable to Engage Gear 3"
  },
  {
    "code": "P074C00",
    "description": "Unable to Engage Gear 4"
  },
  {
    "code": "P074D00",
    "description": "Unable to Engage Gear 5"
  },
  {
    "code": "P074E00",
    "description": "Unable to Engage Gear 6"
  },
  {
    "code": "P074F00",
    "description": "Unable to Engage Gear 7"
  },
  {
    "code": "P075000",
    "description": "Shift Solenoid A Malfunction"
  },
  {
    "code": "P075100",
    "description": "Shift Solenoid A Performance or Stuck Off"
  },
  {
    "code": "P075200",
    "description": "Shift Solenoid A Stuck On"
  },
  {
    "code": "P075300",
    "description": "Shift Solenoid A Electrical"
  },
  {
    "code": "P075400",
    "description": "Shift Solenoid \"A\" Intermittent"
  },
  {
    "code": "P075600",
    "description": "Shift Solenoid B Performance or Stuck Off"
  },
  {
    "code": "P075700",
    "description": "Shift Solenoid B Stuck On"
  },
  {
    "code": "P075800",
    "description": "Shift Solenoid B Electrical"
  },
  {
    "code": "P076100",
    "description": "Shift Solenoid C Performance or Stuck Off"
  },
  {
    "code": "P076200",
    "description": "Shift Solenoid C Stuck On"
  },
  {
    "code": "P076300",
    "description": "Shift Solenoid C Electrical"
  },
  {
    "code": "P076400",
    "description": "Shift Solenoid \"C\" Intermittent"
  },
  {
    "code": "P076600",
    "description": "Shift Solenoid D Performance or Stuck Off"
  },
  {
    "code": "P076800",
    "description": "Shift Solenoid D Electrical"
  },
  {
    "code": "P077100",
    "description": "Shift Solenoid E Performance or Stuck Off"
  },
  {
    "code": "P077300",
    "description": "Shift Solenoid E Electrical"
  },
  {
    "code": "P077600",
    "description": "Pressure Contr.Solenoid B Performance or Stuck Off"
  },
  {
    "code": "P077700",
    "description": "Pressure Contr.Solenoid B Stuck On"
  },
  {
    "code": "P077800",
    "description": "Pressure Contr.Solenoid B Electrical"
  },
  {
    "code": "P077900",
    "description": "Pressure Contr.Solenoid B Intermittent"
  },
  {
    "code": "P078000",
    "description": "Shift"
  },
  {
    "code": "P078100",
    "description": "1-2 Shift"
  },
  {
    "code": "P078200",
    "description": "2-3 Shift"
  },
  {
    "code": "P078300",
    "description": "3-4 Shift"
  },
  {
    "code": "P078400",
    "description": "4-5 Shift"
  },
  {
    "code": "P078500",
    "description": "Shift/Timing Solenoid"
  },
  {
    "code": "P079000",
    "description": "Normal/Performance Switch Circ. Malfunction"
  },
  {
    "code": "P079100",
    "description": "Intermediate Shaft Speed Sensor \"A\" Circuit"
  },
  {
    "code": "P079600",
    "description": "Pressure Contr.Solenoid C Performance or Stuck Off"
  },
  {
    "code": "P079700",
    "description": "Pressure Contr.Solenoid C Stuck On"
  },
  {
    "code": "P079800",
    "description": "Pressure Contr.Solenoid C Electrical"
  },
  {
    "code": "P079900",
    "description": "Pressure Contr.Solenoid C Intermittent"
  },
  {
    "code": "P080500",
    "description": "Clutch Position Sensor Circuit"
  },
  {
    "code": "P080700",
    "description": "Clutch Position Sensor Circuit Low"
  },
  {
    "code": "P080800",
    "description": "Clutch Position Sensor Circuit High"
  },
  {
    "code": "P081000",
    "description": "Clutch Position Control Error"
  },
  {
    "code": "P081100",
    "description": "Excessive Clutch Slippage"
  },
  {
    "code": "P081500",
    "description": "Upshift Switch Circuit"
  },
  {
    "code": "P081600",
    "description": "Downshift Switch Circuit"
  },
  {
    "code": "P081700",
    "description": "Starter Disable Circuit"
  },
  {
    "code": "P082000",
    "description": "Gear Lever X-Y Position Sensor Circuit"
  },
  {
    "code": "P082600",
    "description": "Up and Down Shift Switch Circuit"
  },
  {
    "code": "P082900",
    "description": "5-6 Shift"
  },
  {
    "code": "P084000",
    "description": "Transmission Fluid Pressure Sensor/Switch A"
  },
  {
    "code": "P084100",
    "description": "Transmission Fluid Pressure Sensor/Switch A Range/Performance"
  },
  {
    "code": "P084200",
    "description": "Transmission Fluid Pressure Sensor/Switch \"A\" Circuit Low"
  },
  {
    "code": "P084300",
    "description": "Transmission Fluid Pressure Sensor/Switch \"A\" Circuit High"
  },
  {
    "code": "P084400",
    "description": "Transmission Fluid Pressure Sensor/Switch \"A\" Intermittend"
  },
  {
    "code": "P084500",
    "description": "Transmission Fluid Pressure Sensor/Switch B"
  },
  {
    "code": "P084600",
    "description": "Transmission Fluid Pressure Sensor/Switch B Range/Performance"
  },
  {
    "code": "P084700",
    "description": "Transmission Fluid Pressure Sensor/Switch \"B\" Circuit Low"
  },
  {
    "code": "P084800",
    "description": "Transmission Fluid Pressure Sensor/Switch \"B\" Circuit High"
  },
  {
    "code": "P084900",
    "description": "Transmission Fluid Pressure Sensor/Switch \"B\" Intermittend"
  },
  {
    "code": "P085000",
    "description": "Park/Neutral Switch Input Circuit"
  },
  {
    "code": "P085100",
    "description": "Park/Neutral Switch Input Circuit Low"
  },
  {
    "code": "P085200",
    "description": "Park/Neutral Switch Input Circuit High"
  },
  {
    "code": "P086300",
    "description": "TCM Communication Circuit"
  },
  {
    "code": "P086400",
    "description": "TCM Communication Circuit Range/Performance"
  },
  {
    "code": "P086500",
    "description": "TCM Communication Circuit Low"
  },
  {
    "code": "P086800",
    "description": "Transmission Fluid Pressure Low"
  },
  {
    "code": "P088400",
    "description": "TCM Power Input Signal Intermittent"
  },
  {
    "code": "P088600",
    "description": "TCM Power Relay Control Circuit Low"
  },
  {
    "code": "P088700",
    "description": "TCM Power Relay Control Circuit High"
  },
  {
    "code": "P088900",
    "description": "TCM Power Relay Sense Circuit Range/Performance"
  },
  {
    "code": "P089000",
    "description": "TCM Power Relay Sense Circuit Low"
  },
  {
    "code": "P089100",
    "description": "TCM Power Relay Sense Circuit High"
  },
  {
    "code": "P089200",
    "description": "TCM Power Relay Sense Circuit Intermittent"
  },
  {
    "code": "P089700",
    "description": "Transmission Fluid Deteriorated"
  },
  {
    "code": "P090400",
    "description": "Gate Select Position Circuit"
  },
  {
    "code": "P090500",
    "description": "Gate Select Position Circuit Range/Performance"
  },
  {
    "code": "P090600",
    "description": "Gate Select Position Low"
  },
  {
    "code": "P090700",
    "description": "Gate Select Position Circuit High"
  },
  {
    "code": "P091400",
    "description": "Gear Shift Position Circuit"
  },
  {
    "code": "P091600",
    "description": "Gear Shift Position Circuit Low"
  },
  {
    "code": "P091700",
    "description": "Gear Shift Position Circuit High"
  },
  {
    "code": "P091900",
    "description": "Gear Shift Position Control Error"
  },
  {
    "code": "P092800",
    "description": "Gear Shift Lock Solenoid Control Circuit/Open"
  },
  {
    "code": "P092900",
    "description": "Gear Shift Lock Solenoid Control Circuit Range/Performance"
  },
  {
    "code": "P093000",
    "description": "Gear Shift Lock Solenoid Control Circuit Low"
  },
  {
    "code": "P093100",
    "description": "Gear Shift Lock Solenoid Control Circuit High"
  },
  {
    "code": "P094400",
    "description": "Hydraulic Pressure Unit Loss of Pressure"
  },
  {
    "code": "P094500",
    "description": "Hydraulic Pump Relay Circuit/Open"
  },
  {
    "code": "P094700",
    "description": "Hydraulic Pump Relay Circuit Low"
  },
  {
    "code": "P094800",
    "description": "Hydraulic Pump Relay Circuit High"
  },
  {
    "code": "P0A0900",
    "description": "DC/DC Converter Status Circuit Low"
  },
  {
    "code": "P0A0A00",
    "description": "High Voltage System Inter-Lock Circuit"
  },
  {
    "code": "P0A1F00",
    "description": "Battery Energy Control Module"
  },
  {
    "code": "P0A2A00",
    "description": "Drive Motor \"A\" Temperature Sensor Circuit"
  },
  {
    "code": "P0A2B00",
    "description": "Drive Motor \"A\" Temperature Sensor Circuit Range/Performance"
  },
  {
    "code": "P0A2C00",
    "description": "Drive Motor \"A\" Temperature Sensor Circuit Low"
  },
  {
    "code": "P0A2D00",
    "description": "Drive Motor \"A\" Temperature Sensor Circuit High"
  },
  {
    "code": "P0A4000",
    "description": "Drive Motor \"A\" Position Sensor Circuit Range/Performance"
  },
  {
    "code": "P0A4100",
    "description": "Drive Motor \"A\" Position Sensor Circuit Low"
  },
  {
    "code": "P0A4200",
    "description": "Drive Motor \"A\" Position Sensor Circuit High"
  },
  {
    "code": "P0A4400",
    "description": "Drive Motor \"A\" Position Sensor Circuit Overspeed"
  },
  {
    "code": "P0A5200",
    "description": "Drive Motor \"A\" Current Sensor Circuit Range/Performance"
  },
  {
    "code": "P0A5300",
    "description": "Drive Motor \"A\" Current Sensor Circuit Low"
  },
  {
    "code": "P0A5400",
    "description": "Drive Motor \"A\" Current Sensor Circuit High"
  },
  {
    "code": "P0A5D00",
    "description": "Drive Motor \"A\" Phase U Current"
  },
  {
    "code": "P0A5E00",
    "description": "Drive Motor \"A\" Phase U Current Low"
  },
  {
    "code": "P0A5F00",
    "description": "Drive Motor \"A\" Phase U Current High"
  },
  {
    "code": "P0A6000",
    "description": "Drive Motor \"A\" Phase V Current"
  },
  {
    "code": "P0A6100",
    "description": "Drive Motor \"A\" Phase V Current Low"
  },
  {
    "code": "P0A6200",
    "description": "Drive Motor \"A\" Phase V Current High"
  },
  {
    "code": "P0A7E00",
    "description": "Hybrid Battery Pack Over Temperature"
  },
  {
    "code": "P0A7F00",
    "description": "Hybrid Battery Pack Deterioration"
  },
  {
    "code": "P0A8000",
    "description": "Replace Hybrid Battery Pack"
  },
  {
    "code": "P0A8B00",
    "description": "14 Volt Power Module System Voltage"
  },
  {
    "code": "P0A8D00",
    "description": "14 Volt Power Module System Voltage Low"
  },
  {
    "code": "P0A8E00",
    "description": "14 Volt Power Module System Voltage High"
  },
  {
    "code": "P0A9000",
    "description": "Drive Motor \"A\" Performance"
  },
  {
    "code": "P0A9500",
    "description": "High Voltage Fuse"
  },
  {
    "code": "P0A9D00",
    "description": "Hybrid Battery Temperature Sensor \"A\" Circuit Low"
  },
  {
    "code": "P0A9E00",
    "description": "Hybrid Battery Temperature Sensor \"A\" Circuit High"
  },
  {
    "code": "P0AA600",
    "description": "Hybrid Battery Voltage System Isolation Fault"
  },
  {
    "code": "P0AAE00",
    "description": "Hybrid Battery Pack Air Temperature Sensor \"A\" Circuit Low"
  },
  {
    "code": "P0AAF00",
    "description": "Hybrid Battery Pack Air Temperature Sensor \"A\" Circuit High"
  },
  {
    "code": "P0AB300",
    "description": "Hybrid Battery Pack Air Temperature Sensor \"B\" Circuit Low"
  },
  {
    "code": "P0AB400",
    "description": "Hybrid Battery Pack Air Temperature Sensor \"B\" Circuit High"
  },
  {
    "code": "P0ABB00",
    "description": "Hybrid Battery Pack Voltage Sense \"A\" Circuit Range/Performance"
  },
  {
    "code": "P0ABC00",
    "description": "Hybrid Battery Pack Voltage Sense \"A\" Circuit Low"
  },
  {
    "code": "P0ABD00",
    "description": "Hybrid Battery Pack Voltage Sense \"A\" Circuit High"
  },
  {
    "code": "P0ABF00",
    "description": "Hybrid Battery Pack Current Sensor \"A\" Circuit"
  },
  {
    "code": "P0AC000",
    "description": "Hybrid Battery Pack Current Sensor \"A\" Circuit Range/Performance"
  },
  {
    "code": "P0AC100",
    "description": "Hybrid Battery Pack Current Sensor \"A\" Circuit Low"
  },
  {
    "code": "P0AC200",
    "description": "Hybrid Battery Pack Current Sensor \"A\" Circuit High"
  },
  {
    "code": "P0AC700",
    "description": "Hybrid Battery Temperature Sensor \"B\" Circuit Low"
  },
  {
    "code": "P0AC800",
    "description": "Hybrid Battery Temperature Sensor \"B\" Circuit High"
  },
  {
    "code": "P0AED00",
    "description": "Drive Motor Inverter Temperature Sensor \"A\" Circuit"
  },
  {
    "code": "P0AEE00",
    "description": "Drive Motor Inverter Temperature Sensor \"A\" Circuit Range/Performance"
  },
  {
    "code": "P0AEF00",
    "description": "Drive Motor Inverter Temperature Sensor \"A\" Circuit Low"
  },
  {
    "code": "P0AF000",
    "description": "Drive Motor Inverter Temperature Sensor \"A\" Circuit High"
  },
  {
    "code": "P0AF800",
    "description": "Hybrid Battery System Voltage"
  },
  {
    "code": "P0AFA00",
    "description": "Hybrid Battery System Voltage Low"
  },
  {
    "code": "P0AFB00",
    "description": "Hybrid Battery System Voltage High"
  },
  {
    "code": "P0AFC00",
    "description": "Hybrid Battery Pack Sensor Module"
  },
  {
    "code": "P0AFD00",
    "description": "Hybrid Battery Pack Temperature Too Low"
  },
  {
    "code": "P0B1500",
    "description": "Hybrid Battery Pack Voltage Sense \"B\" Circuit Range/Performance"
  },
  {
    "code": "P0B1600",
    "description": "Hybrid Battery Pack Voltage Sense \"B\" Circuit Low"
  },
  {
    "code": "P0B1700",
    "description": "Hybrid Battery Pack Voltage Sense \"B\" Circuit High"
  },
  {
    "code": "P0B2400",
    "description": "Hybrid Battery \"A\" Voltage Unstable"
  },
  {
    "code": "P0B2500",
    "description": "Hybrid Battery \"A\" Voltage Low"
  },
  {
    "code": "P0B2600",
    "description": "Hybrid Battery \"A\" Voltage High"
  },
  {
    "code": "P0B2900",
    "description": "Hybrid Battery \"B\" Voltage Low"
  },
  {
    "code": "P0B2A00",
    "description": "Hybrid Battery \"B\" Voltage High"
  },
  {
    "code": "P100000",
    "description": "Cyl.9-Fuel Inj.Circ. -N299 Malfunction"
  },
  {
    "code": "P100100",
    "description": "Cyl.10-Fuel Inj.Circ. -N300 Malfunction"
  },
  {
    "code": "P100200",
    "description": "Cyl.11-Fuel Inj.Circ. -N301 Malfunction"
  },
  {
    "code": "P100300",
    "description": "Cyl.12-Fuel Inj.Circ. -N302 Malfunction"
  },
  {
    "code": "P100400",
    "description": "Torque difference cylinder 1 Limiting value exceeded"
  },
  {
    "code": "P100500",
    "description": "Torque difference cylinder 2 Limiting value exceeded"
  },
  {
    "code": "P100600",
    "description": "Torque difference cylinder 3 Limiting value exceeded"
  },
  {
    "code": "P100700",
    "description": "Torque difference cylinder 4 Limiting value exceeded"
  },
  {
    "code": "P100800",
    "description": "Air mass meter 1/2 Implausible signal"
  },
  {
    "code": "P100900",
    "description": "Air mass meter 1/2 implausible signal from load detection"
  },
  {
    "code": "P100A00",
    "description": "Recirculating valve for turbocharger bank 2 Electrical malfunction"
  },
  {
    "code": "P100B00",
    "description": "Recirculating valve for turbocharger bank 2 Short-circuit to ground"
  },
  {
    "code": "P100C00",
    "description": "Recirculating valve for turbocharger bank 2 Short circuit to B+"
  },
  {
    "code": "P100D00",
    "description": "Turbocharger Adjustment difficulty of movement or blocked"
  },
  {
    "code": "P100E00",
    "description": "Torque intervention due to turbocharger protection"
  },
  {
    "code": "P100F00",
    "description": "Fuel injector Mechanical malfunction"
  },
  {
    "code": "P101000",
    "description": "Cyl.9-Fuel Inj.Circ. -N299 Open circuit"
  },
  {
    "code": "P101100",
    "description": "Cyl.10-Fuel Inj.Circ. -N300 Open circuit"
  },
  {
    "code": "P101200",
    "description": "Cyl.11-Fuel Inj.Circ. -N301 Open circuit"
  },
  {
    "code": "P101300",
    "description": "Cyl.12-Fuel Inj.Circ. -N302 Open circuit"
  },
  {
    "code": "P101400",
    "description": "Bypass Flap Filter Valve -N275- Short circuit to B+"
  },
  {
    "code": "P101500",
    "description": "Bypass Flap Filter Valve -N275- Short-circuit to ground"
  },
  {
    "code": "P101600",
    "description": "Bypass Flap Filter Valve -N275- Open circuit"
  },
  {
    "code": "P101700",
    "description": "Intake Manifold Runner Bank 2 Upper stop not reached"
  },
  {
    "code": "P101800",
    "description": "Intake Manifold Runner Bank 2 lower limit not reached"
  },
  {
    "code": "P101900",
    "description": "NOX Sensor -G295 Slow Response"
  },
  {
    "code": "P101A00",
    "description": "Activation of turbocharger adjustment Short circuit to ground/open circuit"
  },
  {
    "code": "P101B00",
    "description": "Activation of turbocharger adjustment Short circuit to B+"
  },
  {
    "code": "P101C00",
    "description": "Activation of turbocharger adjustment bank 2 Short circuit to ground/open circuit"
  },
  {
    "code": "P101D00",
    "description": "Activation of turbocharger adjustment bank 2 Short circuit to B+"
  },
  {
    "code": "P101E00",
    "description": "Rpm limit due to excess temperature"
  },
  {
    "code": "P101F00",
    "description": "Fuel high pressure Maximum exceeded"
  },
  {
    "code": "P102000",
    "description": "Fuel Pressure Regulation Value above upper control limit"
  },
  {
    "code": "P102100",
    "description": "'A' Camshaft Position (Bank 1) Timing Over-Advanced or System Performance"
  },
  {
    "code": "P102200",
    "description": "'A' Camshaft Position (Bank 1) Timing Over-Advanced or System Performance"
  },
  {
    "code": "P102300",
    "description": "Fuel Pressure Regulator Valve Short-circuit to ground"
  },
  {
    "code": "P102400",
    "description": "Fuel Pressure Regulator Valve Open circuit"
  },
  {
    "code": "P102500",
    "description": "Fuel Pressure Regulator Valve Mechanical malfunction"
  },
  {
    "code": "P102600",
    "description": "Intake manifold Runner Control (IMRC) Short circuit to B+"
  },
  {
    "code": "P102700",
    "description": "Intake manifold Runner Control (IMRC) Short-circuit to ground"
  },
  {
    "code": "P102800",
    "description": "Intake manifold Runner Control (IMRC) Open circuit"
  },
  {
    "code": "P102900",
    "description": "Intake Manifold Runner Control (IMRC) Valve -N316- Upper stop not reached"
  },
  {
    "code": "P102A00",
    "description": "Torque limitation due to coolant temperature"
  },
  {
    "code": "P102B00",
    "description": "Torque limitation due to engine oil temperature"
  },
  {
    "code": "P102C00",
    "description": "Torque limitation due to fuel temperature"
  },
  {
    "code": "P102D00",
    "description": "Torque limitation due to intake air temperature"
  },
  {
    "code": "P102E00",
    "description": "Torque limitation due to exhaust temperature"
  },
  {
    "code": "P103000",
    "description": "Intake Manifold Runner Control (IMRC) Valve -N316- lower limit not reached"
  },
  {
    "code": "P103100",
    "description": "Intake Manifold Runner Control (IMRC) Valve -N316- Target value not reached"
  },
  {
    "code": "P103200",
    "description": "NOX Sensor Signal too high"
  },
  {
    "code": "P103300",
    "description": "NOX Sensor Signal too low"
  },
  {
    "code": "P103400",
    "description": "NOX Sensor Signal outside tolerance"
  },
  {
    "code": "P103500",
    "description": "NOX Sensor Implausible signal"
  },
  {
    "code": "P103600",
    "description": "Heater activation sensor for NOX Short circuit to B+"
  },
  {
    "code": "P103700",
    "description": "Heater activation sensor for NOX Short-circuit to ground"
  },
  {
    "code": "P103800",
    "description": "Heater activation sensor for NOX Open circuit"
  },
  {
    "code": "P103900",
    "description": "Fuel Injector Group \"A\" Supply Voltage Circuit Short circuit"
  },
  {
    "code": "P104000",
    "description": "Fuel Injector Group \"A\" Supply Voltage Circuit Malfunction"
  },
  {
    "code": "P104100",
    "description": "Fuel Injector Group \"B\" Supply Voltage Circuit Short circuit"
  },
  {
    "code": "P104200",
    "description": "Fuel Injector Group \"B\" Supply Voltage Circuit Malfunction"
  },
  {
    "code": "P104300",
    "description": "Fuel Injector Group -C- Supply Voltage Circuit Short circuit"
  },
  {
    "code": "P104400",
    "description": "Fuel Injector Group C - Supply voltage circuit Malfunction"
  },
  {
    "code": "P104500",
    "description": "Fuel Injector Group -D- Supply Voltage Circuit Short circuit"
  },
  {
    "code": "P104600",
    "description": "Fuel Injector Group -D- Supply Voltage Circuit Malfunction"
  },
  {
    "code": "P104700",
    "description": "Bank1, Camshaft Adjustment Valve 1 (exhaust) -N318- Malfunction"
  },
  {
    "code": "P104800",
    "description": "Bank1, Camshaft Adjustment Valve 1 (exhaust) -N318- Short circuit to B+"
  },
  {
    "code": "P104900",
    "description": "Bank1, Camshaft Adjustment Valve 1 (exhaust) -N318- Short-circuit to ground"
  },
  {
    "code": "P105000",
    "description": "Bank1, Camshaft Adjustment Valve 1 (exhaust) -N318- Open circuit"
  },
  {
    "code": "P105100",
    "description": "Bank2, Camshaft Adjustment Valve2 (exhaust) -N319- Malfunction"
  },
  {
    "code": "P105200",
    "description": "Bank2, Camshaft Adjustment Valve2 (exhaust) -N319- Short circuit to B+"
  },
  {
    "code": "P105300",
    "description": "Bank2, Camshaft Adjustment Valve2 (exhaust) -N319- Short-circuit to ground"
  },
  {
    "code": "P105400",
    "description": "Bank2, Camshaft Adjustment Valve2 (exhaust) -N319- Open circuit"
  },
  {
    "code": "P105500",
    "description": "Bank 1, camshaft adjustment, exhaust Short circuit to B+"
  },
  {
    "code": "P105600",
    "description": "Bank 1, camshaft adjustment, exhaust Short-circuit to ground"
  },
  {
    "code": "P105700",
    "description": "Bank 1, camshaft adjustment, exhaust Open circuit"
  },
  {
    "code": "P105800",
    "description": "Bank2, camshaft adjustment, exhaust Short circuit to B+"
  },
  {
    "code": "P105900",
    "description": "Bank2, camshaft adjustment, exhaust Short-circuit to ground"
  },
  {
    "code": "P106000",
    "description": "Bank2, camshaft adjustment, exhaust Open circuit"
  },
  {
    "code": "P106100",
    "description": "'A' Camshaft Position (Bank 2) Timing Over-Advanced or System Performance"
  },
  {
    "code": "P106200",
    "description": "'A' Camshaft Position (Bank 2) Timing Over-Advanced or System Performance"
  },
  {
    "code": "P106300",
    "description": "Fuel Pressure Regulation Value below lower control limit"
  },
  {
    "code": "P106400",
    "description": "Fuel pressure system Mechanical malfunction"
  },
  {
    "code": "P106500",
    "description": "Fuel Pressure Regulation Control difference"
  },
  {
    "code": "P106600",
    "description": "Intake Air Switch-over valve -N335- Short circuit to B+"
  },
  {
    "code": "P106700",
    "description": "Intake Air Switch-over valve -N335- Short-circuit to ground"
  },
  {
    "code": "P106800",
    "description": "Intake Air Switch-over valve -N335- Open circuit"
  },
  {
    "code": "P106900",
    "description": "NOX Sensor -G295- heating control signal Short-circuit to ground"
  },
  {
    "code": "P106A00",
    "description": "Bank 2 Intake manifold press/air mass <-> throttle valve angle deviation"
  },
  {
    "code": "P106B00",
    "description": "Throttle valve difficulty of movement or blocked"
  },
  {
    "code": "P106C00",
    "description": "Throttle valve 2 difficulty of movement or blocked"
  },
  {
    "code": "P107000",
    "description": "NOX Sensor -G295- heating control signal Short circuit to B+"
  },
  {
    "code": "P107100",
    "description": "NOX Sensor -G295- heating control signal Implausible signal"
  },
  {
    "code": "P107200",
    "description": "NOX Sensor -G295- heating control signal Electrical malfunction in circuit"
  },
  {
    "code": "P107300",
    "description": "Mass Air Flow (MAF) Sensor 2 -G246 Signal too low"
  },
  {
    "code": "P107400",
    "description": "Mass Air Flow (MAF) Sensor 2 -G246 Signal too high"
  },
  {
    "code": "P107500",
    "description": "Oxygen sensor control, emissions bank 3 System too lean"
  },
  {
    "code": "P107600",
    "description": "Oxygen sensor control, emissions bank 3 System too rich"
  },
  {
    "code": "P107700",
    "description": "Oxygen sensor control, emissions bank 4 System too lean"
  },
  {
    "code": "P107800",
    "description": "Oxygen sensor control, emissions bank 4 System too rich"
  },
  {
    "code": "P107900",
    "description": "Oxygen sensor control, emissions bank 3 Implausible control value"
  },
  {
    "code": "P108000",
    "description": "Oxygen sensor control, emissions bank 4 Implausible control value"
  },
  {
    "code": "P108100",
    "description": "Exhaust bank3, mixture adaptation range 1 System too lean"
  },
  {
    "code": "P108200",
    "description": "Exhaust bank3, mixture adaptation range 2 System too lean"
  },
  {
    "code": "P108300",
    "description": "Exhaust bank3, mixture adaptation range 1 System too rich"
  },
  {
    "code": "P108400",
    "description": "Exhaust bank3, mixture adaptation range 2 System too rich"
  },
  {
    "code": "P108500",
    "description": "Exhaust bank4, mixture adaptation range 1 System too lean"
  },
  {
    "code": "P108600",
    "description": "Exhaust bank4, mixture adaptation range 2 System too lean"
  },
  {
    "code": "P108700",
    "description": "Exhaust bank4, mixture adaptation range 1 System too rich"
  },
  {
    "code": "P108800",
    "description": "Exhaust bank4, mixture adaptation range 2 System too rich"
  },
  {
    "code": "P108900",
    "description": "Bank2, mixture adaptation range 1 System too lean"
  },
  {
    "code": "P109000",
    "description": "Bank2, mixture adaptation range 2 System too lean"
  },
  {
    "code": "P109100",
    "description": "Bank2, mixture adaptation range 1 System too rich"
  },
  {
    "code": "P109200",
    "description": "Bank2, mixture adaptation range 2 System too rich"
  },
  {
    "code": "P109300",
    "description": "Bank1, fuel measuring system 2 Malfunction"
  },
  {
    "code": "P109400",
    "description": "Bank2, fuel measuring system 2 Malfunction"
  },
  {
    "code": "P109500",
    "description": "Intake Manifold Runner Position Sensor -G336 Short circuit to B+"
  },
  {
    "code": "P109600",
    "description": "Intake Manifold Runner Position Sensor -G336 Short-circuit to ground"
  },
  {
    "code": "P109700",
    "description": "Intake Manifold Runner Position Sensor -G336 Open circuit"
  },
  {
    "code": "P109800",
    "description": "Intake Manifold Runner Position Sensor -G336 Open circuit/short circuit to B+"
  },
  {
    "code": "P109900",
    "description": "Intake manifold Runner Control (IMRC) Electrical malfunction"
  },
  {
    "code": "P10A000",
    "description": "Actuation regulating flap for intake air Electrical malfunction"
  },
  {
    "code": "P10A100",
    "description": "Actuation regulating flap for intake air Short circuit to B+"
  },
  {
    "code": "P10A200",
    "description": "Actuation regulating flap for intake air Short-circuit to ground"
  },
  {
    "code": "P10A300",
    "description": "Actuation regulating flap for intake air Open circuit"
  },
  {
    "code": "P10A400",
    "description": "Regulating flap for intake air Mechanical malfunction"
  },
  {
    "code": "P10A500",
    "description": "Potentiometer regulating flap for intake air Signal too high"
  },
  {
    "code": "P10A600",
    "description": "Potentiometer regulating flap for intake air Signal too low"
  },
  {
    "code": "P10A700",
    "description": "Adaptation regulating flap for intake air soiled"
  },
  {
    "code": "P10A800",
    "description": "Adaptation regulating flap for intake air lower limit not reached"
  },
  {
    "code": "P10A900",
    "description": "Magnetic clutch for mechanical charger does not open"
  },
  {
    "code": "P10AA00",
    "description": "Magnetic clutch for mechanical charger does not close"
  },
  {
    "code": "P10AB00",
    "description": "Magnetic clutch for mechanical charger excessive wear"
  },
  {
    "code": "P10AC00",
    "description": "Magnetic clutch for mechanical charger Short-circuit to ground"
  },
  {
    "code": "P10AD00",
    "description": "Magnetic clutch for mechanical charger Open circuit"
  },
  {
    "code": "P10AE00",
    "description": "Current sensor for magnetic clutch for mechanical charger Electrical malfunction"
  },
  {
    "code": "P10AF00",
    "description": "Magnetic clutch for mechanical charger Malfunction"
  },
  {
    "code": "P10B000",
    "description": "Magnetic clutch for mechanical charger Short circuit to B+"
  },
  {
    "code": "P10B100",
    "description": "Monitoring of fuel injector for cylinder 1 failure detected"
  },
  {
    "code": "P10B200",
    "description": "Monitoring of fuel injector for cylinder 2 failure detected"
  },
  {
    "code": "P10B300",
    "description": "Monitoring of fuel injector for cylinder 3 failure detected"
  },
  {
    "code": "P10B400",
    "description": "Monitoring of fuel injector for cylinder 4 failure detected"
  },
  {
    "code": "P110000",
    "description": "O2 Sensor Heater Circ.,Bank1-Sensor2 Performance too low"
  },
  {
    "code": "P110100",
    "description": "O2 Sensor Circuit,Bank1-Sensor1 Voltage too low/air leak"
  },
  {
    "code": "P110200",
    "description": "O2 Sensor Heater Circ.,Bank1-Sensor1 Short circuit to B+"
  },
  {
    "code": "P110300",
    "description": "O2 Sensor Heater Circ.,Bank1-Sensor1 Performance too low"
  },
  {
    "code": "P110400",
    "description": "O2 Sensor Circuit,Bank1-Sensor2 Voltage too low/air leak"
  },
  {
    "code": "P110500",
    "description": "O2 Sensor Heater Circ.,Bank1-Sensor2 Short circuit to B+"
  },
  {
    "code": "P110600",
    "description": "O2 Sensor Circuit,Bank2-Sensor1 Voltage too low/air leak"
  },
  {
    "code": "P110700",
    "description": "O2 Sensor Heater Circ.,Bank2-Sensor1 Short circuit to B+"
  },
  {
    "code": "P110800",
    "description": "O2 Sensor Heater Circ.,Bank2-Sensor1 Performance too low"
  },
  {
    "code": "P110900",
    "description": "O2 Sensor Circuit,Bank2-Sensor2 Voltage too low/air leak"
  },
  {
    "code": "P110A00",
    "description": "Fuel Pressure Regulator Valve Short-circuit to ground"
  },
  {
    "code": "P110B00",
    "description": "Fuel Pressure Regulator Valve Open circuit"
  },
  {
    "code": "P110C00",
    "description": "Fuel Pressure Regulator Valve Mechanical malfunction"
  },
  {
    "code": "P110D00",
    "description": "Intake manifold Runner Control (IMRC) Short circuit to B+"
  },
  {
    "code": "P110E00",
    "description": "Intake manifold Runner Control (IMRC) Short-circuit to ground"
  },
  {
    "code": "P110F00",
    "description": "Intake manifold Runner Control (IMRC) Open circuit"
  },
  {
    "code": "P111000",
    "description": "O2 Sensor Heater Circ.,Bank2-Sensor2 Short circuit to B+"
  },
  {
    "code": "P111100",
    "description": "Oxygen sensor control (Bank 1) System too lean"
  },
  {
    "code": "P111200",
    "description": "Oxygen sensor control (Bank 1) System too rich"
  },
  {
    "code": "P111300",
    "description": "Bank 1, sensor 1 Internal resistance too Large"
  },
  {
    "code": "P111400",
    "description": "Bank 1, sensor 2 Internal resistance too Large"
  },
  {
    "code": "P111500",
    "description": "O2 Sensor Heater Circ.,Bank1-Sensor1 Short-circuit to ground"
  },
  {
    "code": "P111600",
    "description": "O2 Sensor Heater Circ.,Bank1-Sensor1 Open circuit"
  },
  {
    "code": "P111700",
    "description": "O2 Sensor Heater Circ.,Bank1-Sensor2 Short-circuit to ground"
  },
  {
    "code": "P111800",
    "description": "O2 Sensor Heater Circ.,Bank1-Sensor2 Open circuit"
  },
  {
    "code": "P111900",
    "description": "O2 Sensor Heater Circ.,Bank2-Sensor1 Short-circuit to ground"
  },
  {
    "code": "P111A00",
    "description": "NOX Sensor -G295 Signal too low"
  },
  {
    "code": "P111B00",
    "description": "NOX Sensor -G295 Signal outside tolerance"
  },
  {
    "code": "P111C00",
    "description": "NOX Sensor -G295 Implausible signal"
  },
  {
    "code": "P111D00",
    "description": "Heater activation sensor for NOX Short circuit to B+"
  },
  {
    "code": "P111E00",
    "description": "Heater activation sensor for NOX Short-circuit to ground"
  },
  {
    "code": "P111F00",
    "description": "Heater activation sensor for NOX Open circuit"
  },
  {
    "code": "P112000",
    "description": "O2 Sensor Heater Circ.,Bank2-Sensor1 Open circuit"
  },
  {
    "code": "P112100",
    "description": "O2 Sensor Heater Circ.,Bank2-Sensor2 Short-circuit to ground"
  },
  {
    "code": "P112200",
    "description": "O2 Sensor Heater Circ.,Bank2-Sensor2 Open circuit"
  },
  {
    "code": "P112300",
    "description": "Long Term Fuel Trim Add.Air.,Bank1 System too rich"
  },
  {
    "code": "P112400",
    "description": "Long Term Fuel Trim Add.Air.,Bank1 System too lean"
  },
  {
    "code": "P112500",
    "description": "Long Term Fuel Trim Add.Air.,Bank2 System too rich"
  },
  {
    "code": "P112600",
    "description": "Long Term Fuel Trim Add.Air.,Bank2 System too lean"
  },
  {
    "code": "P112700",
    "description": "Long Term Fuel Trim mult.,Bank1 System too rich"
  },
  {
    "code": "P112800",
    "description": "Long Term Fuel Trim mult.,Bank1 System too lean"
  },
  {
    "code": "P112900",
    "description": "Long Term Fuel Trim mult.,Bank2 System too rich"
  },
  {
    "code": "P113000",
    "description": "Long Term Fuel Trim mult.,Bank2 System too lean"
  },
  {
    "code": "P113100",
    "description": "Bank 2, sensor 1 Internal resistance too Large"
  },
  {
    "code": "P113200",
    "description": "O2 Sensor Heating Circ.,Bank1+2-Sensor1 Short circuit to B+"
  },
  {
    "code": "P113300",
    "description": "O2 Sensor Heating Circ.,Bank1+2-Sensor1 Malfunction"
  },
  {
    "code": "P113400",
    "description": "O2 Sensor Heating Circ.,Bank1+2-Sensor2 Short circuit to B+"
  },
  {
    "code": "P113500",
    "description": "O2 Sensor Heating Circ.,Bank1+2-Sensor2 Malfunction"
  },
  {
    "code": "P113600",
    "description": "Long Term Fuel Trim Add.Fuel,Bank1 System too lean"
  },
  {
    "code": "P113700",
    "description": "Long Term Fuel Trim Add.Fuel,Bank1 System too rich"
  },
  {
    "code": "P113800",
    "description": "Long Term Fuel Trim Add.Fuel,Bank2 System too lean"
  },
  {
    "code": "P113900",
    "description": "Long Term Fuel Trim Add.Fuel,Bank2 System too rich"
  },
  {
    "code": "P114000",
    "description": "Bank 2, sensor 2 Internal resistance too Large"
  },
  {
    "code": "P114100",
    "description": "Load detection implausible value"
  },
  {
    "code": "P114200",
    "description": "Load detection value below lower limit"
  },
  {
    "code": "P114300",
    "description": "Load detection value above upper limit"
  },
  {
    "code": "P114400",
    "description": "Mass Air Flow (MAF) Sensor -G70- Open circuit/short circuit to ground"
  },
  {
    "code": "P114500",
    "description": "Mass Air Flow (MAF) Sensor -G70- Short circuit to B+"
  },
  {
    "code": "P114600",
    "description": "Mass Air Flow (MAF) Sensor -G70- Supply voltage"
  },
  {
    "code": "P114700",
    "description": "Oxygen sensor control, Bank 2 System too lean"
  },
  {
    "code": "P114800",
    "description": "Oxygen sensor control, Bank 2 System too rich"
  },
  {
    "code": "P114900",
    "description": "Oxygen sensor control, Bank 1 Implausible control value"
  },
  {
    "code": "P115000",
    "description": "Oxygen sensor control, Bank 2 Implausible control value"
  },
  {
    "code": "P115100",
    "description": "Bank1, mixture adaptation, range 1 System too lean"
  },
  {
    "code": "P115200",
    "description": "Bank1, mixture adaptation, range 2 System too lean"
  },
  {
    "code": "P115300",
    "description": "Oxygen sensors behind catalytic converter Swapped"
  },
  {
    "code": "P115400",
    "description": "Two-path intake manifold Malfunction"
  },
  {
    "code": "P115500",
    "description": "Manifold Absolute Pressure (MAP) Sensor -G71 Short circuit to B+"
  },
  {
    "code": "P115600",
    "description": "Manifold Absolute Pressure (MAP) Sensor -G71 Open circuit/short circuit to ground"
  },
  {
    "code": "P115700",
    "description": "Manifold Absolute Pressure (MAP) Sensor -G71 Supply voltage"
  },
  {
    "code": "P115800",
    "description": "Manifold Absolute Pressure (MAP) Sensor -G71 Implausible signal"
  },
  {
    "code": "P115900",
    "description": "Signal of Mass Air Flow (MAF) sensor 1/2 Implausible relation"
  },
  {
    "code": "P115A00",
    "description": "Manifold Absolute Pressure (MAP) Sensor 2 Implausible signal"
  },
  {
    "code": "P115B00",
    "description": "Manifold Absolute Pressure (MAP) Sensor 2 Signal too low"
  },
  {
    "code": "P115C00",
    "description": "Manifold Absolute Pressure (MAP) Sensor 2 Signal too high"
  },
  {
    "code": "P115D00",
    "description": "Sensor 2 for air pressure Implausible signal"
  },
  {
    "code": "P115E00",
    "description": "Sensor 2 for air pressure Signal too low"
  },
  {
    "code": "P115F00",
    "description": "Sensor 2 for air pressure Signal too high"
  },
  {
    "code": "P116000",
    "description": "Manifold Temp.Sensor Circ. -G72 Short-circuit to ground"
  },
  {
    "code": "P116100",
    "description": "Manifold Temp.Sensor Circ. -G72 Open circuit/short circuit to B+"
  },
  {
    "code": "P116200",
    "description": "Fuel Temperature Sensor A Circuit Low Input -G81 Short-circuit to ground"
  },
  {
    "code": "P116300",
    "description": "Fuel Temperature Sensor A Circuit Low Input -G81 Open circuit/short circuit to B+"
  },
  {
    "code": "P116400",
    "description": "Fuel Temperature Sensor A Circuit Low Input -G81 Implausible signal"
  },
  {
    "code": "P116500",
    "description": "Bank1, mixture adaptation, range 1 System too rich"
  },
  {
    "code": "P116600",
    "description": "Bank1, mixture adaptation, range 2 System too rich"
  },
  {
    "code": "P116700",
    "description": "Mass Air Flow (MAF) Sensor 2 -G246 Implausible signal"
  },
  {
    "code": "P116800",
    "description": "Mass Air Flow (MAF) Sensor 2 -G246 Open circuit/short circuit to ground"
  },
  {
    "code": "P116900",
    "description": "Mass Air Flow (MAF) Sensor 2 -G246 Short circuit to B+"
  },
  {
    "code": "P116A00",
    "description": "Intake manifold press./air press. - Throttle valve pos. bank 2 Correlation at idle"
  },
  {
    "code": "P116B00",
    "description": "Intake manifold press./air press. - Throttle valve pos. bank 2 Correlation in partial throttle"
  },
  {
    "code": "P116C00",
    "description": "Leaking air in intake system, bank 2"
  },
  {
    "code": "P116F00",
    "description": "Mass air flow sensor interrupted signal"
  },
  {
    "code": "P117000",
    "description": "Mass Air Flow (MAF) Sensor 2 -G246 Supply voltage"
  },
  {
    "code": "P117100",
    "description": "Throttle/Pedal Position Sensor/Switch -B- Circuit -G188 Implausible signal"
  },
  {
    "code": "P117200",
    "description": "Throttle/Pedal Position Sensor/Switch -B- Circuit -G188 Signal too low"
  },
  {
    "code": "P117300",
    "description": "Throttle/Pedal Position Sensor/Switch -B- Circuit -G188 Signal too high"
  },
  {
    "code": "P117400",
    "description": "Bank 1, fuel calculation system Injection Timing Deviation"
  },
  {
    "code": "P117500",
    "description": "Pre-injection switched off"
  },
  {
    "code": "P117600",
    "description": "O2 Correction Behind Catalyst,B1 Control limit reached"
  },
  {
    "code": "P117700",
    "description": "O2 Correction Behind Catalyst,B2 Control limit reached"
  },
  {
    "code": "P117800",
    "description": "Linear oxygen sensor/pump current Open circuit"
  },
  {
    "code": "P117900",
    "description": "Linear oxygen sensor/pump current Short-circuit to ground"
  },
  {
    "code": "P117A00",
    "description": "Bank1, Lambda correction center sensor Control limit reached"
  },
  {
    "code": "P117B00",
    "description": "Bank2, Lambda correction center sensor Control limit reached"
  },
  {
    "code": "P117C00",
    "description": "Bank3,oxygen sensor correction behind cat Lean control limit exceeded"
  },
  {
    "code": "P117D00",
    "description": "Bank3,oxygen sensor correction behind cat Rich control limit exceeded"
  },
  {
    "code": "P117E00",
    "description": "Bank4,oxygen sensor correction behind cat Lean control limit exceeded"
  },
  {
    "code": "P117F00",
    "description": "Bank4,oxygen sensor correction behind cat Rich control limit exceeded"
  },
  {
    "code": "P118000",
    "description": "Linear oxygen sensor/pump current Short circuit to B+"
  },
  {
    "code": "P118100",
    "description": "Linear oxygen sensor/reference voltage Open circuit"
  },
  {
    "code": "P118200",
    "description": "Linear oxygen sensor/reference voltage Short-circuit to ground"
  },
  {
    "code": "P118300",
    "description": "Linear oxygen sensor/reference voltage Short circuit to B+"
  },
  {
    "code": "P118400",
    "description": "linear Lambda probe / common ground wire Open circuit"
  },
  {
    "code": "P118500",
    "description": "linear Lambda probe / common ground wire Short-circuit to ground"
  },
  {
    "code": "P118600",
    "description": "linear Lambda probe / common ground wire Short circuit to B+"
  },
  {
    "code": "P118700",
    "description": "linear Lambda probe/compensat. resistor Open circuit"
  },
  {
    "code": "P118800",
    "description": "linear Lambda probe/compensat. resistor Short-circuit to ground"
  },
  {
    "code": "P118900",
    "description": "linear Lambda probe/compensat. resistor Short circuit to B+"
  },
  {
    "code": "P118A00",
    "description": "Bank3-sensor1 Voltage too low/air leak"
  },
  {
    "code": "P118B00",
    "description": "Bank4-sensor1 Voltage too low/air leak"
  },
  {
    "code": "P119000",
    "description": "Linear oxygen sensor/reference voltage Implausible"
  },
  {
    "code": "P119100",
    "description": "linear Lambda probe before catalyst swapped"
  },
  {
    "code": "P119200",
    "description": "Fuel Pressure Sensor -G247- Supply voltage"
  },
  {
    "code": "P119300",
    "description": "Fuel Pressure Sensor -G247- Open circuit/short circuit to B+"
  },
  {
    "code": "P119400",
    "description": "Fuel Pressure Regulator Valve Short circuit to B+"
  },
  {
    "code": "P119500",
    "description": "Fuel Pressure Regulator Valve Open circuit/short circuit to ground"
  },
  {
    "code": "P119600",
    "description": "O2 Sensor Heater Circ.,Bank1-Sensor1 Malfunction"
  },
  {
    "code": "P119700",
    "description": "O2 Sensor Heater Circ.,Bank2-Sensor1 Malfunction"
  },
  {
    "code": "P119800",
    "description": "O2 Sensor Heater Circ.,Bank1-Sensor2 Malfunction"
  },
  {
    "code": "P119900",
    "description": "O2 Sensor Heater Circ.,Bank2-Sensor2 Malfunction"
  },
  {
    "code": "P119A00",
    "description": "Fuel Pressure Sensor -G247- Malfunction"
  },
  {
    "code": "P119B00",
    "description": "Fuel pressure sensor 2 Malfunction"
  },
  {
    "code": "P119C00",
    "description": "Fuel Volume Regulator Control Exceeded Learning lower Limit"
  },
  {
    "code": "P119D00",
    "description": "Fuel Volume Regulator Control Exceeded Learning upper Limit"
  },
  {
    "code": "P11A100",
    "description": "Cam Shift Actuator \"A\" Cylinder 1 Circuit/Open"
  },
  {
    "code": "P11A200",
    "description": "Cam Shift Actuator \"A\" Cylinder 1 Range/Performance"
  },
  {
    "code": "P11A300",
    "description": "Cam Shift Actuator \"B\" Cylinder 1 Circuit/Open"
  },
  {
    "code": "P11A400",
    "description": "Cam Shift Actuator \"B\" Cylinder 1 Range/Performance"
  },
  {
    "code": "P11A500",
    "description": "Cam Shift Actuator \"A\" Cylinder 2 Circuit/Open"
  },
  {
    "code": "P11A600",
    "description": "Cam Shift Actuator \"A\" Cylinder 2 Range/Performance"
  },
  {
    "code": "P11A700",
    "description": "Cam Shift Actuator \"B\" Cylinder 2 Circuit/Open"
  },
  {
    "code": "P11A800",
    "description": "Cam Shift Actuator \"B\" Cylinder 2 Range/Performance"
  },
  {
    "code": "P11A900",
    "description": "Cam Shift Actuator \"A\" Cylinder 3 Circuit/Open"
  },
  {
    "code": "P11AA00",
    "description": "Cam Shift Actuator \"A\" Cylinder 3 Range/Performance"
  },
  {
    "code": "P11AB00",
    "description": "Cam Shift Actuator \"B\" Cylinder 3 Circuit/Open"
  },
  {
    "code": "P11AC00",
    "description": "Cam Shift Actuator \"B\" Cylinder 3 Range/Performance"
  },
  {
    "code": "P11AD00",
    "description": "Cam Shift Actuator \"A\" Cylinder 4 Circuit/Open"
  },
  {
    "code": "P11AE00",
    "description": "Cam Shift Actuator \"A\" Cylinder 4 Range/Performance"
  },
  {
    "code": "P11AF00",
    "description": "Cam Shift Actuator \"B\" Cylinder 4 Circuit/Open"
  },
  {
    "code": "P11B000",
    "description": "Cam Shift Actuator \"B\" Cylinder 4 Range/Performance"
  },
  {
    "code": "P11B100",
    "description": "Cam Shift Actuator \"A\" Cylinder 5 Circuit/Open"
  },
  {
    "code": "P11B200",
    "description": "Cam Shift Actuator \"A\" Cylinder 5 Range/Performance"
  },
  {
    "code": "P11B300",
    "description": "Cam Shift Actuator \"B\" Cylinder 5 Circuit/Open"
  },
  {
    "code": "P11B400",
    "description": "Cam Shift Actuator \"B\" Cylinder 5 Range/Performance"
  },
  {
    "code": "P11B500",
    "description": "Cam Shift Actuator \"A\" Cylinder 6 Circuit/Open"
  },
  {
    "code": "P11B600",
    "description": "Cam Shift Actuator \"A\" Cylinder 6 Range/Performance"
  },
  {
    "code": "P11B700",
    "description": "Cam Shift Actuator \"B\" Cylinder 6 Circuit/Open"
  },
  {
    "code": "P11B800",
    "description": "Cam Shift Actuator \"B\" Cylinder 6 Range/Performance"
  },
  {
    "code": "P11B900",
    "description": "Camshaft adjustment bank 1 Supply voltage"
  },
  {
    "code": "P11BA00",
    "description": "Camshaft adjustment bank 2 Supply voltage"
  },
  {
    "code": "P120000",
    "description": "Recirculating valve for turbocharger -N249, Mechanical malfunction"
  },
  {
    "code": "P120100",
    "description": "Cylinder 1 Fuel Injector -N30- electrical malfunction in circuit"
  },
  {
    "code": "P120200",
    "description": "Cylinder 2 Fuel Injector -N31- electrical malfunction in circuit"
  },
  {
    "code": "P120300",
    "description": "Cylinder 3 Fuel Injector -N32- electrical malfunction in circuit"
  },
  {
    "code": "P120400",
    "description": "Cylinder 4 Fuel Injector -N33- electrical malfunction in circuit"
  },
  {
    "code": "P120500",
    "description": "Cylinder 5 Fuel Injector -N83- electrical malfunction in circuit"
  },
  {
    "code": "P120600",
    "description": "Cylinder 6 Fuel Injector -N84- electrical malfunction in circuit"
  },
  {
    "code": "P120700",
    "description": "Cylinder 7 Fuel Injector -N85- electrical malfunction in circuit"
  },
  {
    "code": "P120800",
    "description": "Cylinder 8 Fuel Injector -N86- electrical malfunction in circuit"
  },
  {
    "code": "P120900",
    "description": "Cylinder Shut-off, Intake Deactivation Valves Short-circuit to ground"
  },
  {
    "code": "P120A00",
    "description": "Injectors control module 1 Electrical malfunction in circuit"
  },
  {
    "code": "P120B00",
    "description": "Injectors control module 2 Electrical malfunction in circuit"
  },
  {
    "code": "P120C00",
    "description": "Injectors control module 1 Short circuit between activation wires, Low-Side"
  },
  {
    "code": "P120D00",
    "description": "Injectors control module 2 Short circuit between activation wires, Low-Side"
  },
  {
    "code": "P121000",
    "description": "Cylinder Shut-off, Intake Deactivation Valves Short circuit to B+"
  },
  {
    "code": "P121100",
    "description": "Cylinder Shut-off, Intake Deactivation Valves Open circuit"
  },
  {
    "code": "P121200",
    "description": "Cylinder shut-off, bank 1"
  },
  {
    "code": "P121300",
    "description": "Cylinder 1 Fuel Injector -N30- Short circuit to B+"
  },
  {
    "code": "P121400",
    "description": "Cylinder 2 Fuel Injector -N31- Short circuit to B+"
  },
  {
    "code": "P121500",
    "description": "Cylinder 3 Fuel Injector -N32- Short circuit to B+"
  },
  {
    "code": "P121600",
    "description": "Cylinder 4 Fuel Injector -N33- Short circuit to B+"
  },
  {
    "code": "P121700",
    "description": "Cylinder 5 Fuel Injector -N83- Short circuit to B+"
  },
  {
    "code": "P121800",
    "description": "Cylinder 6 Fuel Injector -N84- Short circuit to B+"
  },
  {
    "code": "P121900",
    "description": "Cylinder 7 Fuel Injector -N85- Short circuit to B+"
  },
  {
    "code": "P122000",
    "description": "Cylinder 8 Fuel Injector -N86- Short circuit to B+"
  },
  {
    "code": "P122100",
    "description": "Cylinder Shut-off, Exhaust Deactivation Valves Short-circuit to ground"
  },
  {
    "code": "P122200",
    "description": "Cylinder Shut-off, Exhaust Deactivation Valves Short circuit to B+"
  },
  {
    "code": "P122300",
    "description": "Cylinder Shut-off, Exhaust Deactivation Valves Open circuit"
  },
  {
    "code": "P122400",
    "description": "Cylinder shut-off, bank 2"
  },
  {
    "code": "P122500",
    "description": "Cylinder 1 Fuel Injector -N30- Short-circuit to ground"
  },
  {
    "code": "P122600",
    "description": "Cylinder 2 Fuel Injector -N31- Short-circuit to ground"
  },
  {
    "code": "P122700",
    "description": "Cylinder 3 Fuel Injector -N32- Short-circuit to ground"
  },
  {
    "code": "P122800",
    "description": "Cylinder 4 Fuel Injector -N33- Short-circuit to ground"
  },
  {
    "code": "P122900",
    "description": "Cylinder 5 Fuel Injector -N83- Short-circuit to ground"
  },
  {
    "code": "P123000",
    "description": "Cylinder 6 Fuel Injector -N84- Short-circuit to ground"
  },
  {
    "code": "P123100",
    "description": "Cylinder 7 Fuel Injector -N85- Short-circuit to ground"
  },
  {
    "code": "P123200",
    "description": "Cylinder 8 Fuel Injector -N86- Short-circuit to ground"
  },
  {
    "code": "P123300",
    "description": "Load detection Malfunction"
  },
  {
    "code": "P123400",
    "description": "fuel lead missing"
  },
  {
    "code": "P123500",
    "description": "O2 Correction Behind Catalyst, exhaust gas bank 3 Control limit reached"
  },
  {
    "code": "P123600",
    "description": "O2 Correction Behind Catalyst, exhaust gas bank 4 Control limit reached"
  },
  {
    "code": "P123700",
    "description": "Cylinder 1 Fuel Injector -N30- Open circuit"
  },
  {
    "code": "P123800",
    "description": "Cylinder 2 Fuel Injector -N31- Open circuit"
  },
  {
    "code": "P123900",
    "description": "Cylinder 3 Fuel Injector -N32- Open circuit"
  },
  {
    "code": "P124000",
    "description": "Cylinder 4 Fuel Injector -N33- Open circuit"
  },
  {
    "code": "P124100",
    "description": "Cylinder 5 Fuel Injector -N83- Open circuit"
  },
  {
    "code": "P124200",
    "description": "Cylinder 6 Fuel Injector -N84- Open circuit"
  },
  {
    "code": "P124300",
    "description": "Cylinder 7 Fuel Injector -N85- Open circuit"
  },
  {
    "code": "P124400",
    "description": "Cylinder 8 Fuel Injector -N86- Open circuit"
  },
  {
    "code": "P124500",
    "description": "Needle Lift Sensor -G80 Short-circuit to ground"
  },
  {
    "code": "P124600",
    "description": "Needle Lift Sensor -G80 Implausible signal"
  },
  {
    "code": "P124700",
    "description": "Needle Lift Sensor -G80 Open circuit/short circuit to B+"
  },
  {
    "code": "P124800",
    "description": "Commencement of injection regulation Control difference"
  },
  {
    "code": "P124900",
    "description": "Fuel consumption signal Electrical malfunction in circuit"
  },
  {
    "code": "P125000",
    "description": "Fuel level too low"
  },
  {
    "code": "P125100",
    "description": "Commencement of injection valve -N108 Short circuit to B+"
  },
  {
    "code": "P125200",
    "description": "Commencement of injection valve -N108 Open circuit/short circuit to ground"
  },
  {
    "code": "P125300",
    "description": "Fuel consumption signal Short-circuit to ground"
  },
  {
    "code": "P125400",
    "description": "Fuel consumption signal Short circuit to B+"
  },
  {
    "code": "P125500",
    "description": "Engine Coolant Temperature (ECT) Sensor -G62 Short-circuit to ground"
  },
  {
    "code": "P125600",
    "description": "Engine Coolant Temperature (ECT) Sensor -G62 Open circuit/short circuit to B+"
  },
  {
    "code": "P125700",
    "description": "Coolant Thermostat/Valve. Open circuit"
  },
  {
    "code": "P125800",
    "description": "Coolant Thermostat/Valve. Short circuit to B+"
  },
  {
    "code": "P125900",
    "description": "Coolant Thermostat/Valve. Short-circuit to ground"
  },
  {
    "code": "P125E00",
    "description": "Valve for pump/injector Short circuit control wire"
  },
  {
    "code": "P125F00",
    "description": "Valve for pump/injector not completely discharged"
  },
  {
    "code": "P126000",
    "description": "Unit injector solenoid valve - cylinder 1-N240 Implausible signal"
  },
  {
    "code": "P126100",
    "description": "Unit injector solenoid valve - cylinder 1-N240 Value above upper control limit"
  },
  {
    "code": "P126200",
    "description": "Unit injector solenoid valve - cylinder 1-N240 Value below lower control limit"
  },
  {
    "code": "P126300",
    "description": "Unit injector solenoid valve - cylinder 2-N241 Implausible signal"
  },
  {
    "code": "P126400",
    "description": "Unit injector solenoid valve - cylinder 2-N241 Value above upper control limit"
  },
  {
    "code": "P126500",
    "description": "Unit injector solenoid valve - cylinder 2-N241 Value below lower control limit"
  },
  {
    "code": "P126600",
    "description": "Unit injector solenoid valve - cylinder 3-N242 Implausible signal"
  },
  {
    "code": "P126700",
    "description": "Unit injector solenoid valve - cylinder 3-N242 Value above upper control limit"
  },
  {
    "code": "P126800",
    "description": "Unit injector solenoid valve - cylinder 3-N242 Value below lower control limit"
  },
  {
    "code": "P126900",
    "description": "Unit injector solenoid valve - cylinder 4-N243 Implausible signal"
  },
  {
    "code": "P127000",
    "description": "Unit injector solenoid valve - cylinder 4-N243 Value above upper control limit"
  },
  {
    "code": "P127100",
    "description": "Unit injector solenoid valve - cylinder 4-N243 Value below lower control limit"
  },
  {
    "code": "P127200",
    "description": "Unit injector solenoid valve - cylinder 5-N244 Implausible signal"
  },
  {
    "code": "P127300",
    "description": "Unit injector solenoid valve - cylinder 5-N244 Value above upper control limit"
  },
  {
    "code": "P127400",
    "description": "Unit injector solenoid valve - cylinder 5-N244 Value below lower control limit"
  },
  {
    "code": "P127500",
    "description": "Unit injector solenoid valve - cylinder 6-N245 Implausible signal"
  },
  {
    "code": "P127600",
    "description": "Unit injector solenoid valve - cylinder 6-N245 Value above upper control limit"
  },
  {
    "code": "P127700",
    "description": "Unit injector solenoid valve - cylinder 6-N245 Value below lower control limit"
  },
  {
    "code": "P127800",
    "description": "Fuel Metering Valve Short circuit to B+"
  },
  {
    "code": "P127900",
    "description": "Fuel Metering Valve Open circuit/short circuit to ground"
  },
  {
    "code": "P128000",
    "description": "Fuel Inj.Air Contr.Valve Circ. -N212 Flow too Low"
  },
  {
    "code": "P128100",
    "description": "Fuel Metering Valve Short-circuit to ground"
  },
  {
    "code": "P128200",
    "description": "Fuel Metering Valve Open circuit"
  },
  {
    "code": "P128300",
    "description": "Fuel Inj.Air Contr.Valve Circ. -N212 electrical malfunction in circuit"
  },
  {
    "code": "P128400",
    "description": "Fuel Inj.Air Contr.Valve Circ. -N212 Open circuit"
  },
  {
    "code": "P128500",
    "description": "Fuel Inj.Air Contr.Valve Circ. -N212 Short-circuit to ground"
  },
  {
    "code": "P128600",
    "description": "Fuel Inj.Air Contr.Valve Circ. -N212 Short circuit to B+"
  },
  {
    "code": "P128700",
    "description": "Recirculating valve for turbocharger -N249, Open circuit"
  },
  {
    "code": "P128800",
    "description": "Recirculating valve for turbocharger -N249, Short circuit to B+"
  },
  {
    "code": "P128900",
    "description": "Recirculating valve for turbocharger -N249, Short-circuit to ground"
  },
  {
    "code": "P128F00",
    "description": "A/C Engine Coolant Temperature (ECT) Sensor -Radiator Outlet Electrical malfunction"
  },
  {
    "code": "P129000",
    "description": "Engine Coolant Temperature (ECT) Sensor (on Radiator) -G83- Signal too high"
  },
  {
    "code": "P129100",
    "description": "Engine Coolant Temperature (ECT) Sensor (on Radiator) -G83- Signal too low"
  },
  {
    "code": "P129200",
    "description": "Map Controlled Engine Cooling Thermostat -F265- Open circuit"
  },
  {
    "code": "P129300",
    "description": "Map Controlled Engine Cooling Thermostat -F265- Short circuit to B+"
  },
  {
    "code": "P129400",
    "description": "Map Controlled Engine Cooling Thermostat -F265- Short-circuit to ground"
  },
  {
    "code": "P129500",
    "description": "Bypass turbocharger Throughput faulty"
  },
  {
    "code": "P129600",
    "description": "Malfunction in cooling system"
  },
  {
    "code": "P129700",
    "description": "Connection charger-throttle valve Pressure drop"
  },
  {
    "code": "P129800",
    "description": "Engine Coolant Temperature (ECT) Sensor (on Radiator) -G83- Implausible signal"
  },
  {
    "code": "P129900",
    "description": "Fuel Metering Valve Malfunction"
  },
  {
    "code": "P129A00",
    "description": "Fuel Pressure Regulator Valve -N276, Bank 2 Mechanical malfunction"
  },
  {
    "code": "P129B00",
    "description": "Fuel Pressure Regulator Valve -N276, Bank 2 Open circuit"
  },
  {
    "code": "P129C00",
    "description": "Fuel Pressure Regulator Valve -N276, Bank 2 Short-circuit to ground"
  },
  {
    "code": "P129D00",
    "description": "Fuel Pressure Regulator Valve -N276, Bank 2 Short circuit to B+"
  },
  {
    "code": "P129E00",
    "description": "Low Pressure Fuel System Pressure Too Low"
  },
  {
    "code": "P129F00",
    "description": "Low Pressure Fuel System Pressure Too High"
  },
  {
    "code": "P12A000",
    "description": "Low Pressure Fuel System Performance"
  },
  {
    "code": "P130000",
    "description": "Random/Multiple Cylinder. Misfire Detected Reason: Low fuel"
  },
  {
    "code": "P130100",
    "description": "Cyl.9-Knock Contr Control limit reached"
  },
  {
    "code": "P130200",
    "description": "Cyl.10-Knock Contr Control limit reached"
  },
  {
    "code": "P130300",
    "description": "Cyl.11-Knock Contr Control limit reached"
  },
  {
    "code": "P130400",
    "description": "Cyl.12-Knock Contr Control limit reached"
  },
  {
    "code": "P130500",
    "description": "Ignition control cylinder 9 Open circuit"
  },
  {
    "code": "P130600",
    "description": "Ignition control cylinder 9 Short circuit to B+"
  },
  {
    "code": "P130700",
    "description": "Ignition control cylinder 9 Short-circuit to ground"
  },
  {
    "code": "P130800",
    "description": "Ignition control cylinder 10 Open circuit"
  },
  {
    "code": "P130900",
    "description": "Ignition control cylinder 10 Short circuit to B+"
  },
  {
    "code": "P130A00",
    "description": "Hide cylinder"
  },
  {
    "code": "P131000",
    "description": "Ignition control cylinder 10 Short-circuit to ground"
  },
  {
    "code": "P131100",
    "description": "Ignition control cylinder 11 Open circuit"
  },
  {
    "code": "P131200",
    "description": "Ignition control cylinder 11 Short circuit to B+"
  },
  {
    "code": "P131300",
    "description": "Ignition control cylinder 11 Short-circuit to ground"
  },
  {
    "code": "P131400",
    "description": "Ignition control cylinder 12 Open circuit"
  },
  {
    "code": "P131500",
    "description": "Ignition control cylinder 12 Short circuit to B+"
  },
  {
    "code": "P131600",
    "description": "Ignition control cylinder 12 Short-circuit to ground"
  },
  {
    "code": "P131700",
    "description": "Cyl.13-Knock Contr Control limit reached"
  },
  {
    "code": "P131800",
    "description": "Cyl.14-Knock Contr Control limit reached"
  },
  {
    "code": "P131900",
    "description": "Knock Sensor (KS) 1 -G61 Short-circuit to ground"
  },
  {
    "code": "P132000",
    "description": "Knock Sensor (KS) 2 -G66 Short-circuit to ground"
  },
  {
    "code": "P132100",
    "description": "Knock Sensor (KS) 3 -G198 Signal too low"
  },
  {
    "code": "P132200",
    "description": "Knock Sensor (KS) 3 -G198 Signal too high"
  },
  {
    "code": "P132300",
    "description": "Knock Sensor (KS) 4 -G199 Signal too low"
  },
  {
    "code": "P132400",
    "description": "Knock Sensor (KS) 4 -G199 Signal too high"
  },
  {
    "code": "P132500",
    "description": "Cyl.1-Knock Contr Control limit reached"
  },
  {
    "code": "P132600",
    "description": "Cyl.2-Knock Contr Control limit reached"
  },
  {
    "code": "P132700",
    "description": "Cyl.3-Knock Contr Control limit reached"
  },
  {
    "code": "P132800",
    "description": "Cyl.4-Knock Contr Control limit reached"
  },
  {
    "code": "P132900",
    "description": "Cyl.5-Knock Contr Control limit reached"
  },
  {
    "code": "P132A00",
    "description": "Knock Sensor (KS) 3 Electrical malfunction in circuit"
  },
  {
    "code": "P132B00",
    "description": "Knock Sensor (KS) 4 Electrical malfunction in circuit"
  },
  {
    "code": "P133000",
    "description": "Cyl.6-Knock Contr Control limit reached"
  },
  {
    "code": "P133100",
    "description": "Cyl.7-Knock Contr Control limit reached"
  },
  {
    "code": "P133200",
    "description": "Cyl.8-Knock Contr Control limit reached"
  },
  {
    "code": "P133300",
    "description": "Cyl.15-Knock Contr Control limit reached"
  },
  {
    "code": "P133400",
    "description": "Cyl.16-Knock Contr Control limit reached"
  },
  {
    "code": "P133500",
    "description": "Engine torque monitoring 2 Value above upper control limit"
  },
  {
    "code": "P133600",
    "description": "Engine torque monitoring Value above upper control limit"
  },
  {
    "code": "P133700",
    "description": "Camshaft Pos. (CMP) Sensor, Bank1=>-G40 Short-circuit to ground"
  },
  {
    "code": "P133800",
    "description": "Camshaft Pos. (CMP) Sensor, Bank1=>-G40 Open circuit/short circuit to B+"
  },
  {
    "code": "P133900",
    "description": "Crankshaft Pos./Engine Speed Sensor swapped"
  },
  {
    "code": "P134000",
    "description": "Camshaft Position Sensor-G40,Engine Speed Sensor-G28 Incorrect allocation"
  },
  {
    "code": "P134100",
    "description": "Ignition output 1 Short-circuit to ground"
  },
  {
    "code": "P134200",
    "description": "Ignition output 1 Short circuit to B+"
  },
  {
    "code": "P134300",
    "description": "Ignition output 2 Short-circuit to ground"
  },
  {
    "code": "P134400",
    "description": "Ignition output 2 Short circuit to B+"
  },
  {
    "code": "P134500",
    "description": "Ignition output 3 Short-circuit to ground"
  },
  {
    "code": "P134600",
    "description": "Ignition output 3 Short circuit to B+"
  },
  {
    "code": "P134700",
    "description": "Camshaft Position Sensor 2-G163/Engine Speed (RPM) Sensor -G28 Incorrect allocation"
  },
  {
    "code": "P134800",
    "description": "Ignition output 1 Open circuit"
  },
  {
    "code": "P134900",
    "description": "Ignition output 2 Open circuit"
  },
  {
    "code": "P135000",
    "description": "Ignition output 3 Open circuit"
  },
  {
    "code": "P135100",
    "description": "Camshaft Pos. (CMP) Sensor, Bank1=>-G40 Implausible signal during start"
  },
  {
    "code": "P135200",
    "description": "Bank1, camshaft adjustment Specification not reached"
  },
  {
    "code": "P135300",
    "description": "Engine Coolant Temperature/Intake Air Temperature Correlation"
  },
  {
    "code": "P135400",
    "description": "Modulating piston movement sender -G149 electrical malfunction in circuit"
  },
  {
    "code": "P135500",
    "description": "Ignition control cylinder 1 Open circuit"
  },
  {
    "code": "P135600",
    "description": "Ignition control cylinder 1 Short circuit to B+"
  },
  {
    "code": "P135700",
    "description": "Ignition control cylinder 1 Short-circuit to ground"
  },
  {
    "code": "P135800",
    "description": "Ignition control cylinder 2 Open circuit"
  },
  {
    "code": "P135900",
    "description": "Ignition control cylinder 2 Short circuit to B+"
  },
  {
    "code": "P136000",
    "description": "Ignition control cylinder 2 Short-circuit to ground"
  },
  {
    "code": "P136100",
    "description": "Ignition control cylinder 3 Open circuit"
  },
  {
    "code": "P136200",
    "description": "Ignition control cylinder 3 Short circuit to B+"
  },
  {
    "code": "P136300",
    "description": "Ignition control cylinder 3 Short-circuit to ground"
  },
  {
    "code": "P136400",
    "description": "Ignition control cylinder 4 Open circuit"
  },
  {
    "code": "P136500",
    "description": "Ignition control cylinder 4 Short circuit to B+"
  },
  {
    "code": "P136600",
    "description": "Ignition control cylinder 4 Short-circuit to ground"
  },
  {
    "code": "P136700",
    "description": "Ignition control cylinder 5 Open circuit"
  },
  {
    "code": "P136800",
    "description": "Ignition control cylinder 5 Short circuit to B+"
  },
  {
    "code": "P136900",
    "description": "Ignition control cylinder 5 Short-circuit to ground"
  },
  {
    "code": "P137000",
    "description": "Ignition control cylinder 6 Open circuit"
  },
  {
    "code": "P137100",
    "description": "Ignition control cylinder 6 Short circuit to B+"
  },
  {
    "code": "P137200",
    "description": "Ignition control cylinder 6 Short-circuit to ground"
  },
  {
    "code": "P137300",
    "description": "Ignition control cylinder 7 Open circuit"
  },
  {
    "code": "P137400",
    "description": "Ignition control cylinder 7 Short circuit to B+"
  },
  {
    "code": "P137500",
    "description": "Ignition control cylinder 7 Short-circuit to ground"
  },
  {
    "code": "P137600",
    "description": "Ignition control cylinder 8 Open circuit"
  },
  {
    "code": "P137700",
    "description": "Ignition control cylinder 8 Short circuit to B+"
  },
  {
    "code": "P137800",
    "description": "Ignition control cylinder 8 Short-circuit to ground"
  },
  {
    "code": "P137900",
    "description": "Cylinder 13 Random/Multiple Cylinder. Misfire Detected"
  },
  {
    "code": "P138000",
    "description": "Cylinder 14 Random/Multiple Cylinder. Misfire Detected"
  },
  {
    "code": "P138100",
    "description": "Cylinder 15 Random/Multiple Cylinder. Misfire Detected"
  },
  {
    "code": "P138200",
    "description": "Cylinder 16 Random/Multiple Cylinder. Misfire Detected"
  },
  {
    "code": "P138300",
    "description": "Portion of alternative fuels not adapted"
  },
  {
    "code": "P138400",
    "description": "Engine control module 2 faulty"
  },
  {
    "code": "P138500",
    "description": "Control module defective"
  },
  {
    "code": "P138600",
    "description": "Control module defective"
  },
  {
    "code": "P138700",
    "description": "Control module defective"
  },
  {
    "code": "P138800",
    "description": "Control module defective"
  },
  {
    "code": "P138900",
    "description": "Diesel Direct Fuel Injection (DFI) Engine ECM 2 -J494- Defective"
  },
  {
    "code": "P139100",
    "description": "Camshaft Pos. (CMP) Sensor, Bank2=>-G163 Short-circuit to ground"
  },
  {
    "code": "P139200",
    "description": "Camshaft Pos. (CMP) Sensor, Bank2=>-G163 Open circuit/short circuit to B+"
  },
  {
    "code": "P139300",
    "description": "Ignition output 1 electrical malfunction in circuit"
  },
  {
    "code": "P139400",
    "description": "Ignition output 2 electrical malfunction in circuit"
  },
  {
    "code": "P139500",
    "description": "Ignition output 3 electrical malfunction in circuit"
  },
  {
    "code": "P139600",
    "description": "Engine speed sender -G28 Range/Performance"
  },
  {
    "code": "P139700",
    "description": "Sensor Wheel for Engine Speed adaptation limit reached"
  },
  {
    "code": "P139800",
    "description": "Engine speed signal, TD Short-circuit to ground"
  },
  {
    "code": "P139900",
    "description": "Engine speed signal, TD Short circuit to B+"
  },
  {
    "code": "P139A00",
    "description": "Engine speed (RPM) validation"
  },
  {
    "code": "P13A000",
    "description": "Signal wire 1 ion current system bank 1 Short circuit to B+"
  },
  {
    "code": "P13A100",
    "description": "Signal wire 2 ion current system bank 1 Short circuit to B+"
  },
  {
    "code": "P13A200",
    "description": "Signal wire 1 ion current system bank 1 Short-circuit to ground"
  },
  {
    "code": "P13A300",
    "description": "Signal wire 2 ion current system bank 1 Short-circuit to ground"
  },
  {
    "code": "P13A400",
    "description": "Signal wire 1 ion current system bank 2 Short circuit to B+"
  },
  {
    "code": "P13A500",
    "description": "Signal wire 2 ion current system bank 2 Short circuit to B+"
  },
  {
    "code": "P13A600",
    "description": "Signal wire 1 ion current system bank 2 Short-circuit to ground"
  },
  {
    "code": "P13A700",
    "description": "Signal wire 2 ion current system bank 2 Short-circuit to ground"
  },
  {
    "code": "P13A800",
    "description": "Ion current system cylinder 1 Trouble code detected?"
  },
  {
    "code": "P13A900",
    "description": "Ion current system cylinder 1 Implausible signal"
  },
  {
    "code": "P13AA00",
    "description": "Ion current system cylinder 2 Trouble code detected?"
  },
  {
    "code": "P13AB00",
    "description": "Ion current system cylinder 2 Implausible signal"
  },
  {
    "code": "P13AC00",
    "description": "Ion current system cylinder 3 Trouble code detected?"
  },
  {
    "code": "P13AD00",
    "description": "Ion current system cylinder 3 Implausible signal"
  },
  {
    "code": "P13AE00",
    "description": "Ion current system cylinder 4 Trouble code detected?"
  },
  {
    "code": "P13AF00",
    "description": "Ion current system cylinder 4 Implausible signal"
  },
  {
    "code": "P13B000",
    "description": "Ion current system cylinder 5 Trouble code detected?"
  },
  {
    "code": "P13B100",
    "description": "Ion current system cylinder 5 Implausible signal"
  },
  {
    "code": "P13B200",
    "description": "Ion current system cylinder 6 Trouble code detected?"
  },
  {
    "code": "P13B300",
    "description": "Ion current system cylinder 6 Implausible signal"
  },
  {
    "code": "P13B400",
    "description": "Ion current system cylinder 7 Trouble code detected?"
  },
  {
    "code": "P13B500",
    "description": "Ion current system cylinder 7 Implausible signal"
  },
  {
    "code": "P13B600",
    "description": "Ion current system cylinder 8 Trouble code detected?"
  },
  {
    "code": "P13B700",
    "description": "Ion current system cylinder 8 Implausible signal"
  },
  {
    "code": "P13B800",
    "description": "Ion current system cylinder 9 Trouble code detected?"
  },
  {
    "code": "P13B900",
    "description": "Ion current system cylinder 9 Implausible signal"
  },
  {
    "code": "P13BA00",
    "description": "Ion current system cylinder 10 Trouble code detected?"
  },
  {
    "code": "P13BB00",
    "description": "Ion current system cylinder 10 Implausible signal"
  },
  {
    "code": "P13BC00",
    "description": "Ion current system cylinder 11 Trouble code detected?"
  },
  {
    "code": "P13BD00",
    "description": "Ion current system cylinder 11 Implausible signal"
  },
  {
    "code": "P13BE00",
    "description": "Ion current system cylinder 12 Trouble code detected?"
  },
  {
    "code": "P13BF00",
    "description": "Ion current system cylinder 12 Implausible signal"
  },
  {
    "code": "P13C000",
    "description": "Ion current system cylinder 13 Trouble code detected?"
  },
  {
    "code": "P13C100",
    "description": "Ion current system cylinder 13 Implausible signal"
  },
  {
    "code": "P13C200",
    "description": "Ion current system cylinder 14 Trouble code detected?"
  },
  {
    "code": "P13C300",
    "description": "Ion current system cylinder 14 Implausible signal"
  },
  {
    "code": "P13C400",
    "description": "Ion current system cylinder 15 Trouble code detected?"
  },
  {
    "code": "P13C500",
    "description": "Ion current system cylinder 15 Implausible signal"
  },
  {
    "code": "P13C600",
    "description": "Ion current system cylinder 16 Trouble code detected?"
  },
  {
    "code": "P13C700",
    "description": "Ion current system cylinder 16 Implausible signal"
  },
  {
    "code": "P13C800",
    "description": "Ion current system bank 1, Initialization error channel 1"
  },
  {
    "code": "P13C900",
    "description": "Ion current system bank 1, Initialization error channel 2"
  },
  {
    "code": "P13CA00",
    "description": "Ion current system bank 1, Initialization error channel 1/2"
  },
  {
    "code": "P13CB00",
    "description": "Ion current system bank 2, Initialization error channel 1"
  },
  {
    "code": "P13CC00",
    "description": "Ion current system bank 2, Initialization error channel 2"
  },
  {
    "code": "P13CD00",
    "description": "Ion current system bank 2, Initialization error channel 1/2"
  },
  {
    "code": "P13CE00",
    "description": "Sensor for internal pressure of cylinder 1 Electrical malfunction"
  },
  {
    "code": "P13CF00",
    "description": "Sensor for internal pressure of cylinder 1 Short circuit to ground"
  },
  {
    "code": "P13D000",
    "description": "Sensor for internal pressure of cylinder 1 Implausible signal"
  },
  {
    "code": "P13D100",
    "description": "Sensor for internal pressure of cylinder 2 Electrical malfunction"
  },
  {
    "code": "P13D200",
    "description": "Sensor for internal pressure of cylinder 2 Short circuit to ground"
  },
  {
    "code": "P13D300",
    "description": "Sensor for internal pressure of cylinder 2 Implausible signal"
  },
  {
    "code": "P13D400",
    "description": "Sensor for internal pressure of cylinder 3 Electrical malfunction"
  },
  {
    "code": "P13D500",
    "description": "Sensor for internal pressure of cylinder 3 Short circuit to ground"
  },
  {
    "code": "P13D600",
    "description": "Sensor for internal pressure of cylinder 3 Implausible signal"
  },
  {
    "code": "P13D700",
    "description": "Sensor for internal pressure of cylinder 4 Electrical malfunction"
  },
  {
    "code": "P13D800",
    "description": "Sensor for internal pressure of cylinder 4 Short circuit to ground"
  },
  {
    "code": "P13D900",
    "description": "Sensor for internal pressure of cylinder 4 Implausible signal"
  },
  {
    "code": "P13DA00",
    "description": "Sensor for internal pressure of cylinder 5 Electrical malfunction"
  },
  {
    "code": "P13DB00",
    "description": "Sensor for internal pressure of cylinder 5 Short circuit to ground"
  },
  {
    "code": "P13DC00",
    "description": "Sensor for internal pressure of cylinder 5 Implausible signal"
  },
  {
    "code": "P13DD00",
    "description": "Sensor for internal pressure of cylinder 6 Electrical malfunction"
  },
  {
    "code": "P13DE00",
    "description": "Sensor for internal pressure of cylinder 6 Short circuit to ground"
  },
  {
    "code": "P13DF00",
    "description": "Sensor for internal pressure of cylinder 6 Implausible signal"
  },
  {
    "code": "P13E000",
    "description": "Sensor for internal pressure of cylinder 1 Malfunction"
  },
  {
    "code": "P13E100",
    "description": "Sensor for internal pressure of cylinder 2 Malfunction"
  },
  {
    "code": "P13E200",
    "description": "Sensor for internal pressure of cylinder 3 Malfunction"
  },
  {
    "code": "P13E300",
    "description": "Sensor for internal pressure of cylinder 4 Malfunction"
  },
  {
    "code": "P13E400",
    "description": "Sensor for internal pressure of cylinder 5 Malfunction"
  },
  {
    "code": "P13E500",
    "description": "Sensor for internal pressure of cylinder 6 Malfunction"
  },
  {
    "code": "P13EA00",
    "description": "Cold Start Ignition Timing Performance Off Idle"
  },
  {
    "code": "P140000",
    "description": "EGR Vacuum Regulator Solenoid Valve electrical malfunction in circuit"
  },
  {
    "code": "P140100",
    "description": "EGR Vacuum Regulator Solenoid Valve Short-circuit to ground"
  },
  {
    "code": "P140200",
    "description": "EGR Vacuum Regulator Solenoid Valve Short circuit to B+"
  },
  {
    "code": "P140300",
    "description": "Exhaust gas recirculation system Control difference"
  },
  {
    "code": "P140400",
    "description": "Exhaust gas recirculation system Basic settings not carried out"
  },
  {
    "code": "P140500",
    "description": "Exhaust gas recirculation valve 2 -N213 Malfunction"
  },
  {
    "code": "P140600",
    "description": "EGR Temp.Sensor -G98 Implausible signal"
  },
  {
    "code": "P140700",
    "description": "EGR Temp.Sensor -G98 Signal too low"
  },
  {
    "code": "P140800",
    "description": "EGR Temp.Sensor -G98 Signal too high"
  },
  {
    "code": "P140900",
    "description": "Evaporative Emission (EVAP) Canister Purge Regulator Valve -N80 electrical malfunction in circuit"
  },
  {
    "code": "P140A00",
    "description": "EGR system 2 bank 1 Control difference"
  },
  {
    "code": "P140B00",
    "description": "EGR system 2 bank 2 Control difference"
  },
  {
    "code": "P140C00",
    "description": "EGR sensor 2 bank 1 Signal too low"
  },
  {
    "code": "P140D00",
    "description": "EGR sensor 2 bank 2 Signal too low"
  },
  {
    "code": "P140E00",
    "description": "EGR sensor 2 bank 1 Signal too high"
  },
  {
    "code": "P140F00",
    "description": "EGR sensor 2 bank 2 Signal too high"
  },
  {
    "code": "P141000",
    "description": "Evaporative Emission (EVAP) Canister Purge Regulator Valve -N80 Short circuit to B+"
  },
  {
    "code": "P141100",
    "description": "Bank2, secondary air system Flow too Low"
  },
  {
    "code": "P141200",
    "description": "Pressure sensor for exhaust gas recirculation Signal too low"
  },
  {
    "code": "P141300",
    "description": "Pressure sensor for exhaust gas recirculation Signal too high"
  },
  {
    "code": "P141400",
    "description": "Bank2, secondary air system leak detected"
  },
  {
    "code": "P141500",
    "description": "EGR valve, curve adaptation characteristic curve adaptation Lower limit exceeded"
  },
  {
    "code": "P141600",
    "description": "EGR valve, curve adaptation Upper limit exceeded"
  },
  {
    "code": "P141700",
    "description": "Fuel Level Sensor (A) Circuit Signal too low"
  },
  {
    "code": "P141800",
    "description": "Fuel Level Sensor (A) Circuit Signal too high"
  },
  {
    "code": "P141900",
    "description": "Exhaust Gas Recirculation (EGR) Cool Switch-over Valve 2 -N381 Short circuit to B+"
  },
  {
    "code": "P141A00",
    "description": "Exhaust temperature sensor 3 bank 2 Electrical malfunction"
  },
  {
    "code": "P141B00",
    "description": "Exhaust temperature sensor 3 bank 2 Implausible signal"
  },
  {
    "code": "P141C00",
    "description": "Exhaust temperature sensor 3 bank 2 Short-circuit to ground"
  },
  {
    "code": "P141D00",
    "description": "Exhaust temperature sensor 3 bank 2 Short circuit to B+"
  },
  {
    "code": "P141E00",
    "description": "Exhaust Gas Recirculation Contr. Circuit Bank 2 Control difference"
  },
  {
    "code": "P141F00",
    "description": "Exhaust gas temperature sensors Implausible"
  },
  {
    "code": "P142000",
    "description": "Secondary air inlet valve-N112 electrical malfunction in circuit"
  },
  {
    "code": "P142100",
    "description": "Secondary air inlet valve-N112 Short-circuit to ground"
  },
  {
    "code": "P142200",
    "description": "Secondary air inlet valve-N112 Short circuit to B+"
  },
  {
    "code": "P142300",
    "description": "Bank1, secondary air system Flow too Low"
  },
  {
    "code": "P142400",
    "description": "Bank1, secondary air system leak detected"
  },
  {
    "code": "P142500",
    "description": "Evaporative Emission (EVAP) Canister Purge Regulator Valve -N80 Short-circuit to ground"
  },
  {
    "code": "P142600",
    "description": "Evaporative Emission (EVAP) Canister Purge Regulator Valve -N80 Open circuit"
  },
  {
    "code": "P142700",
    "description": "Brake vacuum pump activation Short circuit to B+"
  },
  {
    "code": "P142800",
    "description": "Brake vacuum pump activation Short-circuit to ground"
  },
  {
    "code": "P142900",
    "description": "Brake vacuum pump activation Open circuit"
  },
  {
    "code": "P142A00",
    "description": "Exhaust Gas Temperature Sensor 2 and 3 Circuit - Bank 1 deviation"
  },
  {
    "code": "P142B00",
    "description": "Exhaust Gas Temperature Sensor 2 and 3 Circuit - Bank 2 deviation"
  },
  {
    "code": "P142C00",
    "description": "Exhaust Gas Temperature Sensor 2 Circuit - Bank 1 and 2 deviation"
  },
  {
    "code": "P142D00",
    "description": "Exhaust Gas Temperature Sensor 3 Circuit - Bank 1 and 2 deviation"
  },
  {
    "code": "P142E00",
    "description": "EGR valve 2 bank 1 electrical malfunction in circuit"
  },
  {
    "code": "P142F00",
    "description": "EGR valve 2 bank 2 electrical malfunction in circuit"
  },
  {
    "code": "P143000",
    "description": "Brake vacuum pump activation Open circuit/short circuit to B+"
  },
  {
    "code": "P143100",
    "description": "Brake vacuum pump activation Open circuit/short circuit to ground"
  },
  {
    "code": "P143200",
    "description": "Secondary air inlet valve-N112 Open circuit"
  },
  {
    "code": "P143300",
    "description": "Secondary Air Injection (AIR) Pump Relay -J299 Open circuit"
  },
  {
    "code": "P143400",
    "description": "Secondary Air Injection (AIR) Pump Relay -J299 Short circuit to B+"
  },
  {
    "code": "P143500",
    "description": "Secondary Air Injection (AIR) Pump Relay -J299 Short-circuit to ground"
  },
  {
    "code": "P143600",
    "description": "Secondary Air Injection (AIR) Pump Relay -J299 electrical malfunction in circuit"
  },
  {
    "code": "P143700",
    "description": "EGR Vacuum Regulator Solenoid Valve 2 Short circuit to B+"
  },
  {
    "code": "P143800",
    "description": "EGR Vacuum Regulator Solenoid Valve 2 Open circuit/short circuit to ground"
  },
  {
    "code": "P143900",
    "description": "Exhaust gas recirculation potentiometer -G212 Malfunction in basic settings"
  },
  {
    "code": "P143A00",
    "description": "Bank 2 Particle Filter Post-Injection Metering Pump -V337- Short circuit to B+"
  },
  {
    "code": "P143B00",
    "description": "Bank 2 Particle Filter Post-Injection Metering Pump -V337- Short circuit to ground/open circuit"
  },
  {
    "code": "P143C00",
    "description": "Bank 1 Particle Filter Post-Injection Metering Pump -V336- Short circuit to B+"
  },
  {
    "code": "P143D00",
    "description": "Bank 1 Particle Filter Post-Injection Metering Pump -V336- Short circuit to ground/open circuit"
  },
  {
    "code": "P143E00",
    "description": "Particle Filter Post-Injection Metering Pump -V335- Short circuit to B+"
  },
  {
    "code": "P143F00",
    "description": "Particle Filter Post-Injection Metering Pump -V335- Short circuit to ground/open circuit"
  },
  {
    "code": "P144000",
    "description": "EGR Vacuum Regulator Solenoid Valve Open circuit"
  },
  {
    "code": "P144100",
    "description": "EGR Vacuum Regulator Solenoid Valve Open circuit/short circuit to ground"
  },
  {
    "code": "P144200",
    "description": "Exhaust gas recirculation potentiometer -G212 Signal too high"
  },
  {
    "code": "P144300",
    "description": "Exhaust gas recirculation potentiometer -G212 Signal too low"
  },
  {
    "code": "P144400",
    "description": "Exhaust gas recirculation potentiometer -G212 Implausible signal"
  },
  {
    "code": "P144500",
    "description": "Catalyst Temp.Sensor 2 Circ. -G132 Implausible signal"
  },
  {
    "code": "P144600",
    "description": "Catalyst Temp.Sensor 1 Circ. -G20 Short-circuit to ground"
  },
  {
    "code": "P144700",
    "description": "Catalyst Temp.Sensor 1 Circ. -G20 Open circuit/short circuit to B+"
  },
  {
    "code": "P144800",
    "description": "Catalyst Temp.Sensor 2 Circ. -G132 Short-circuit to ground"
  },
  {
    "code": "P144900",
    "description": "Catalyst Temp.Sensor 2 Circ. -G132 Open circuit/short circuit to B+"
  },
  {
    "code": "P144A00",
    "description": "EGR system 2 bank 1 Malfunction"
  },
  {
    "code": "P144B00",
    "description": "EGR system 2 bank 2 Malfunction"
  },
  {
    "code": "P144C00",
    "description": "EGR sensor 2 bank 1 Malfunction in basic settings"
  },
  {
    "code": "P144D00",
    "description": "EGR sensor 2 bank 2 Malfunction in basic settings"
  },
  {
    "code": "P144E00",
    "description": "EGR Vacuum Regulator Solenoid Valve 2 Electrical malfunction"
  },
  {
    "code": "P144F00",
    "description": "EGR Vacuum Regulator Solenoid Valve 2 Open circuit"
  },
  {
    "code": "P145000",
    "description": "Secondary air system Short circuit to B+"
  },
  {
    "code": "P145100",
    "description": "Secondary air system Short-circuit to ground"
  },
  {
    "code": "P145200",
    "description": "Secondary air system Open circuit"
  },
  {
    "code": "P145300",
    "description": "Exhaust Gas Temperature Sensor 1 Circuit, Bank 1 -G235- Open circuit/short circuit to B+"
  },
  {
    "code": "P145400",
    "description": "Exhaust Gas Temperature Sensor 1 Circuit, Bank 1 -G235- Short-circuit to ground"
  },
  {
    "code": "P145500",
    "description": "Exhaust Gas Temperature Sensor 1 Circuit, Bank 1 -G235- Implausible signal"
  },
  {
    "code": "P145600",
    "description": "Exhaust Gas Temperature Control Bank 1 Control limit reached"
  },
  {
    "code": "P145700",
    "description": "Exhaust temperature sensor 1 bank 2 - G236 Open circuit/short circuit to B+"
  },
  {
    "code": "P145800",
    "description": "Exhaust temperature sensor 1 bank 2 - G236 Short-circuit to ground"
  },
  {
    "code": "P145900",
    "description": "Exhaust temperature sensor 1 bank 2 - G236 Implausible signal"
  },
  {
    "code": "P145A00",
    "description": "Exhaust Gas Temperature Sensor 3 Circuit Electrical malfunction"
  },
  {
    "code": "P145B00",
    "description": "Exhaust Gas Temperature Sensor 3 Circuit Implausible signal"
  },
  {
    "code": "P145C00",
    "description": "Exhaust Gas Temperature Sensor 3 Circuit Short-circuit to ground"
  },
  {
    "code": "P145D00",
    "description": "Exhaust Gas Temperature Sensor 3 Circuit Short circuit to B+"
  },
  {
    "code": "P145E00",
    "description": "Air mass throughput in regeneration operation is too low"
  },
  {
    "code": "P145F00",
    "description": "Mass air flow in regeneration operation too high"
  },
  {
    "code": "P146000",
    "description": "Exhaust Gas Temperature Control Bank 2 Control limit reached"
  },
  {
    "code": "P146100",
    "description": "Exhaust Gas Temperature Control Bank 1 Implausible signal"
  },
  {
    "code": "P146200",
    "description": "Exhaust Gas Temperature Control Bank 2 Implausible signal"
  },
  {
    "code": "P146300",
    "description": "Sec.Air Inj.Sys., Bank 3 Malfunction"
  },
  {
    "code": "P146400",
    "description": "Sec.Air Inj.Sys., Bank 4 Malfunction"
  },
  {
    "code": "P146500",
    "description": "Metering pump for cleaning solution Short circuit to B+"
  },
  {
    "code": "P146600",
    "description": "Metering pump for cleaning solution Open circuit/short circuit to ground"
  },
  {
    "code": "P146700",
    "description": "Evaporative Emission (EVAP) Canister Purge Solenoid -N115 Short circuit to B+"
  },
  {
    "code": "P146800",
    "description": "Evaporative Emission (EVAP) Canister Purge Solenoid -N115 Short-circuit to ground"
  },
  {
    "code": "P146900",
    "description": "Evaporative Emission (EVAP) Canister Purge Solenoid -N115 Open circuit"
  },
  {
    "code": "P146A00",
    "description": "Malfunction Diesel particle filter bank 1 Temperature increase too low"
  },
  {
    "code": "P146B00",
    "description": "Malfunction Diesel particle filter bank 2 Temperature increase too low"
  },
  {
    "code": "P146C00",
    "description": "Acknowledgement of heating 1 for reducing agent Electrical malfunction"
  },
  {
    "code": "P146D00",
    "description": "Acknowledgement of heating 1 for reducing agent Short circuit to B+"
  },
  {
    "code": "P146E00",
    "description": "Acknowledgement of heating 2 for reducing agent Electrical malfunction"
  },
  {
    "code": "P146F00",
    "description": "Acknowledgement of heating 2 for reducing agent Short circuit to B+"
  },
  {
    "code": "P147000",
    "description": "Leak diagnosis pump - tank breather system electrical malfunction in circuit"
  },
  {
    "code": "P147100",
    "description": "Leak diagnosis pump - tank breather system Short circuit to B+"
  },
  {
    "code": "P147200",
    "description": "Leak diagnosis pump - tank breather system Short-circuit to ground"
  },
  {
    "code": "P147300",
    "description": "Leak diagnosis pump - tank breather system Open circuit"
  },
  {
    "code": "P147400",
    "description": "Evaporative Emission (EVAP) Canister Purge Solenoid -N115 Electrical malfunction in circuit"
  },
  {
    "code": "P147500",
    "description": "Leak diagnosis pump - tank breather system malfunction/no signal"
  },
  {
    "code": "P147600",
    "description": "Leak diagnosis pump - tank breather system malfunction/vacuum to low"
  },
  {
    "code": "P147700",
    "description": "Leak diagnosis pump - tank breather system Malfunction"
  },
  {
    "code": "P147800",
    "description": "Leak diagnosis pump - tank breather system blocked pipe detected"
  },
  {
    "code": "P147900",
    "description": "Brake vacuum system Mechanical malfunction"
  },
  {
    "code": "P147A00",
    "description": "Brake vacuum pump activation Electrical malfunction"
  },
  {
    "code": "P148000",
    "description": "Brake vacuum pump"
  },
  {
    "code": "P148100",
    "description": "Secondary Air Injection (AIR) Pump Relay 2 -J545- Open circuit"
  },
  {
    "code": "P148200",
    "description": "Secondary Air Injection (AIR) Pump Relay 2 -J545- Short circuit to B+"
  },
  {
    "code": "P148300",
    "description": "Secondary Air Injection (AIR) Pump Relay 2 -J545- Short-circuit to ground"
  },
  {
    "code": "P148400",
    "description": "Secondary Air Injection (AIR) Pump Relay 2 -J545- electrical malfunction in circuit"
  },
  {
    "code": "P148500",
    "description": "Secondary Air Injection (AIR) Solenoid Valve 2 -N320- Open circuit"
  },
  {
    "code": "P148600",
    "description": "Secondary Air Injection (AIR) Solenoid Valve 2 -N320- electrical malfunction in circuit"
  },
  {
    "code": "P148700",
    "description": "Secondary Air Injection (AIR) Solenoid Valve 2 -N320- Short-circuit to ground"
  },
  {
    "code": "P148800",
    "description": "Secondary Air Injection (AIR) Solenoid Valve 2 -N320- Short circuit to B+"
  },
  {
    "code": "P148900",
    "description": "Evaporative Emission (EVAP) Canister Purge Regulator -N333 Short circuit to B+"
  },
  {
    "code": "P148A00",
    "description": "Sensor for reducing agent fill level Implausible fill level"
  },
  {
    "code": "P148B00",
    "description": "End stage for reducing agent heating Defective"
  },
  {
    "code": "P148C00",
    "description": "End stage 2 for reducing agent heating Defective"
  },
  {
    "code": "P148F00",
    "description": "Exhaust Gas Recirculation (EGR) Cool Switch-Over Valve 2 Electrical malfunction"
  },
  {
    "code": "P149000",
    "description": "Evaporative Emission (EVAP) Canister Purge Regulator -N333 Short-circuit to ground"
  },
  {
    "code": "P149100",
    "description": "Evaporative Emission (EVAP) Canister Purge Regulator -N333 Open circuit"
  },
  {
    "code": "P149200",
    "description": "Evaporative Emission (EVAP) Canister Purge Regulator -N333 electrical malfunction in circuit"
  },
  {
    "code": "P149300",
    "description": "Brake vacuum pump Performance too low"
  },
  {
    "code": "P149400",
    "description": "EVAP Emission Control System 2 Throughput faulty"
  },
  {
    "code": "P149500",
    "description": "Radiator Exhaust Gas Recirculation Switch-over Valve -N345 Open circuit/short circuit to ground"
  },
  {
    "code": "P149600",
    "description": "Radiator Exhaust Gas Recirculation Switch-over Valve -N345 Short circuit to B+"
  },
  {
    "code": "P149700",
    "description": "Sec.Air Inj.Sys., Bank 3 Incorrect Flow Detected"
  },
  {
    "code": "P149800",
    "description": "Sec.Air Inj.Sys., Bank 4 Incorrect Flow Detected"
  },
  {
    "code": "P149900",
    "description": "Exhaust Gas Recirculation (EGR) Cool Switch-over Valve 2 -N381 Open circuit/short circuit to ground"
  },
  {
    "code": "P149A00",
    "description": "EGR Coolant pump Short-circuit to ground"
  },
  {
    "code": "P149B00",
    "description": "EGR Coolant pump Short circuit to B+"
  },
  {
    "code": "P149C00",
    "description": "EGR Coolant pump Open circuit"
  },
  {
    "code": "P149D00",
    "description": "Transfer pump for reducing agent Open circuit"
  },
  {
    "code": "P149E00",
    "description": "Transfer pump for reducing agent Short-circuit to ground"
  },
  {
    "code": "P149F00",
    "description": "Transfer pump for reducing agent Short circuit to B+"
  },
  {
    "code": "P14A000",
    "description": "Exhaust temperature sensor 1 bank 3 Implausible signal"
  },
  {
    "code": "P14A100",
    "description": "Exhaust temperature sensor 1 bank 3 Short-circuit to ground"
  },
  {
    "code": "P14A200",
    "description": "Exhaust temperature sensor 1 bank 3 Short circuit to B+"
  },
  {
    "code": "P14A300",
    "description": "Exhaust temperature sensor 1 bank 4 Implausible signal"
  },
  {
    "code": "P14A400",
    "description": "Exhaust temperature sensor 1 bank 4 Short-circuit to ground"
  },
  {
    "code": "P14A500",
    "description": "Exhaust temperature sensor 1 bank 4 Short circuit to B+"
  },
  {
    "code": "P14A600",
    "description": "Sensor 3a for exhaust temperature bank 1 Electrical malfunction"
  },
  {
    "code": "P14A700",
    "description": "Sensor 3a for exhaust temperature bank 1 Implausible signal"
  },
  {
    "code": "P14A800",
    "description": "Sensor 3a for exhaust temperature bank 1 Short-circuit to ground"
  },
  {
    "code": "P14A900",
    "description": "Sensor 3a for exhaust temperature bank 1 Short circuit to B+"
  },
  {
    "code": "P150000",
    "description": "Fuel pump relay -J17 electrical malfunction in circuit"
  },
  {
    "code": "P150100",
    "description": "Fuel pump relay -J17 Short-circuit to ground"
  },
  {
    "code": "P150200",
    "description": "Fuel pump relay -J17 Short circuit to B+"
  },
  {
    "code": "P150300",
    "description": "Load signal from generator DF Implausible signal"
  },
  {
    "code": "P150400",
    "description": "Air intake system leak detected"
  },
  {
    "code": "P150500",
    "description": "Closed Throttle Position (CTP) Switch -F60 does not close/open circuit"
  },
  {
    "code": "P150600",
    "description": "Closed Throttle Position (CTP) Switch -F60 does not open/short circuit to Ground (GND)"
  },
  {
    "code": "P150700",
    "description": "Idling system learnt value - lower limit reached"
  },
  {
    "code": "P150800",
    "description": "Idling system learnt value - upper limit reached"
  },
  {
    "code": "P150900",
    "description": "Idling speed stabilization valve -N71 electrical malfunction in circuit"
  },
  {
    "code": "P150A00",
    "description": "Engine Off Timer Performance"
  },
  {
    "code": "P150B00",
    "description": "Acceleration monitoring Value above upper control limit"
  },
  {
    "code": "P150C00",
    "description": "RPM request from transmission cannot be performed"
  },
  {
    "code": "P150D00",
    "description": "Chain elongation"
  },
  {
    "code": "P150E00",
    "description": "Vehicle Speed Sensor (A) Implausible to ABS Control Module"
  },
  {
    "code": "P150F00",
    "description": "External control module incorrect code"
  },
  {
    "code": "P151000",
    "description": "Idling speed stabilization valve -N71 Short circuit to B+"
  },
  {
    "code": "P151100",
    "description": "Intake manifold change-over valve -N156 electrical malfunction in circuit"
  },
  {
    "code": "P151200",
    "description": "Intake manifold change-over valve -N156 Short circuit to B+"
  },
  {
    "code": "P151300",
    "description": "Intake Manifold Changover Valve 2 circuit -N261 Short circuit to B+"
  },
  {
    "code": "P151400",
    "description": "Intake Manifold Changover Valve 2 circuit -N261 Short-circuit to ground"
  },
  {
    "code": "P151500",
    "description": "Intake Manifold Changover Valve circuit -N156 Short-circuit to ground"
  },
  {
    "code": "P151600",
    "description": "Intake Manifold Changover Valve circuit -N156 Open circuit"
  },
  {
    "code": "P151700",
    "description": "Main relay electrical malfunction in circuit"
  },
  {
    "code": "P151800",
    "description": "Main relay Short circuit to B+"
  },
  {
    "code": "P151900",
    "description": "Bank1, camshaft adjustment Malfunction"
  },
  {
    "code": "P152000",
    "description": "Intake Manifold Changover Valve 2 circuit -N261 Open circuit"
  },
  {
    "code": "P152100",
    "description": "Intake Manifold Changover Valve 2 circuit -N261 Electrical malfunction in circuit"
  },
  {
    "code": "P152200",
    "description": "A Camshaft Position Actuator Control Circuit(Bank2) Malfunction"
  },
  {
    "code": "P152300",
    "description": "Crash Signal from Airbag Control Unit Implausible signal"
  },
  {
    "code": "P152400",
    "description": "Fuel pump relay -J17 Open circuit/short circuit to ground"
  },
  {
    "code": "P152500",
    "description": "Bank1, camshaft adjustment=>-N205 electrical malfunction in circuit"
  },
  {
    "code": "P152600",
    "description": "Bank1, camshaft adjustment=>-N205 Short circuit to B+"
  },
  {
    "code": "P152700",
    "description": "Bank1, camshaft adjustment=>-N205 Short-circuit to ground"
  },
  {
    "code": "P152800",
    "description": "Bank1, camshaft adjustment=>-N205 Open circuit"
  },
  {
    "code": "P152900",
    "description": "Intake camshaft control circuit Short circuit to B+"
  },
  {
    "code": "P153000",
    "description": "Intake camshaft control circuit Short-circuit to ground"
  },
  {
    "code": "P153100",
    "description": "Intake camshaft control circuit Open circuit"
  },
  {
    "code": "P153200",
    "description": "Idle regulation lean operation RPM below specified value"
  },
  {
    "code": "P153300",
    "description": "Bank2, camshaft adjustment=>-N208 electrical malfunction in circuit"
  },
  {
    "code": "P153400",
    "description": "Bank2, camshaft adjustment=>-N208 Short circuit to B+"
  },
  {
    "code": "P153500",
    "description": "Bank2, camshaft adjustment=>-N208 Short-circuit to ground"
  },
  {
    "code": "P153600",
    "description": "Bank2, camshaft adjustment=>-N208 Open circuit"
  },
  {
    "code": "P153700",
    "description": "Fuel Cut-Off Valve -N109- Malfunction"
  },
  {
    "code": "P153800",
    "description": "Fuel Cut-Off Valve -N109- Open circuit/short circuit to ground"
  },
  {
    "code": "P153900",
    "description": "Clutch pedal switch -F36 Implausible signal"
  },
  {
    "code": "P154000",
    "description": "Vehicle Speed Sensor (A) Signal too high"
  },
  {
    "code": "P154100",
    "description": "Fuel pump relay -J17 Open circuit"
  },
  {
    "code": "P154200",
    "description": "Angle sender 1 for throttle valve drive -G187 Implausible signal"
  },
  {
    "code": "P154300",
    "description": "Angle sender 1 for throttle valve drive -G187 Signal too low"
  },
  {
    "code": "P154400",
    "description": "Angle sender 1 for throttle valve drive -G187 Signal too high"
  },
  {
    "code": "P154500",
    "description": "Throttle valve control system Malfunction"
  },
  {
    "code": "P154600",
    "description": "Wastegate Bypass Regulator Valve -N75 Short circuit to B+"
  },
  {
    "code": "P154700",
    "description": "Wastegate Bypass Regulator Valve -N75 Short-circuit to ground"
  },
  {
    "code": "P154800",
    "description": "Wastegate Bypass Regulator Valve -N75 Open circuit"
  },
  {
    "code": "P154900",
    "description": "Wastegate Bypass Regulator Valve -N75 Open circuit/short circuit to ground"
  },
  {
    "code": "P154E00",
    "description": "Charge pressure regulation bank 2 Malfunction"
  },
  {
    "code": "P154F00",
    "description": "Turbo/Super Charger Boost Sensor (A) Circuit Malfunction"
  },
  {
    "code": "P155000",
    "description": "Charging pressure Control difference"
  },
  {
    "code": "P155100",
    "description": "Altitude sender-F96 Short circuit to B+"
  },
  {
    "code": "P155200",
    "description": "Altitude sender-F96 Open circuit/short circuit to ground"
  },
  {
    "code": "P155300",
    "description": "Barometric pressure sensor/manifold absolute pressure Implausible relation"
  },
  {
    "code": "P155400",
    "description": "Throttle valve control part-J338- Conditions f. basic setting not met"
  },
  {
    "code": "P155500",
    "description": "value above maximum charge pressure"
  },
  {
    "code": "P155600",
    "description": "Turbo/Super Charger Boost Sensor (A) Circuit Value below lower control limit"
  },
  {
    "code": "P155700",
    "description": "Turbo/Super Charger Boost Sensor (A) Circuit Value above upper control limit"
  },
  {
    "code": "P155800",
    "description": "Throttle Drive (for Electronic Power Control (EPC)) -G186 electrical malfunction in circuit"
  },
  {
    "code": "P155900",
    "description": "Throttle valve control part-J338- Malfunction in basic settings"
  },
  {
    "code": "P155A00",
    "description": "Turbo/Super Charger Boost Sensor (A) Circuit Charge air pressure not reached"
  },
  {
    "code": "P156000",
    "description": "Engine Overspeed Condition"
  },
  {
    "code": "P156100",
    "description": "Quantity adjuster-N146 Control difference"
  },
  {
    "code": "P156200",
    "description": "Quantity adjuster-N146 upper limit stop value"
  },
  {
    "code": "P156300",
    "description": "Quantity adjuster-N146 lower limit stop value"
  },
  {
    "code": "P156400",
    "description": "Throttle valve control part-J338- insufficient voltage during basic settings"
  },
  {
    "code": "P156500",
    "description": "Throttle valve control part-J338- lower stop not reached"
  },
  {
    "code": "P156600",
    "description": "A/C Refrigerant Pressure Sensor (A) Circuit Implausible signal"
  },
  {
    "code": "P156700",
    "description": "A/C Refrigerant Pressure Sensor (A) Circuit No signal"
  },
  {
    "code": "P156800",
    "description": "Throttle valve control part-J338- Mechanical malfunction"
  },
  {
    "code": "P156900",
    "description": "Cruise control system switch -E45 Implausible signal"
  },
  {
    "code": "P156A00",
    "description": "Filling/throttle valve position Validation"
  },
  {
    "code": "P156B00",
    "description": "Lower mechanical stop of throttle valve Implausible signal"
  },
  {
    "code": "P157000",
    "description": "Engine Control Module (ECM) disabled"
  },
  {
    "code": "P157100",
    "description": "Left Electro-Hydraulic Engine Mount Solenoid Valve -N144- Short circuit to B+"
  },
  {
    "code": "P157200",
    "description": "Left Electro-Hydraulic Engine Mount Solenoid Valve -N144- Short-circuit to ground"
  },
  {
    "code": "P157300",
    "description": "Left Electro-Hydraulic Engine Mount Solenoid Valve -N144- Open circuit"
  },
  {
    "code": "P157400",
    "description": "Left Electro-Hydraulic Engine Mount Solenoid Valve -N144- Electrical malfunction in circuit"
  },
  {
    "code": "P157500",
    "description": "Right Electro-Hydraulic Engine Mount Solenoid Valve -N145- Short circuit to B+"
  },
  {
    "code": "P157600",
    "description": "Right Electro-Hydraulic Engine Mount Solenoid Valve -N145- Short-circuit to ground"
  },
  {
    "code": "P157700",
    "description": "Right Electro-Hydraulic Engine Mount Solenoid Valve -N145- Open circuit"
  },
  {
    "code": "P157800",
    "description": "Right Electro-Hydraulic Engine Mount Solenoid Valve -N145- Electrical malfunction in circuit"
  },
  {
    "code": "P157900",
    "description": "Throttle valve control part-J338- Adaptation not initiated"
  },
  {
    "code": "P158000",
    "description": "Throttle valve drive - bank 1 Malfunction"
  },
  {
    "code": "P158100",
    "description": "Throttle valve control part-J338- Basic settings not carried out"
  },
  {
    "code": "P158200",
    "description": "Idle speed control adaptation limit reached"
  },
  {
    "code": "P158300",
    "description": "Transmission Mount Valve -1-/-2- -N262-/-N263- Short circuit to B+"
  },
  {
    "code": "P158400",
    "description": "Transmission Mount Valve -1-/-2- -N262-/-N263- Short-circuit to ground"
  },
  {
    "code": "P158500",
    "description": "Transmission Mount Valve -1-/-2- -N262-/-N263- Open circuit"
  },
  {
    "code": "P158600",
    "description": "L/R Electr-Hydr Eng. Mount Sol Valve -N144/N145 Short circuit to B+"
  },
  {
    "code": "P158700",
    "description": "L/R Electr-Hydr Eng. Mount Sol Valve -N144/N145 Short-circuit to ground"
  },
  {
    "code": "P158800",
    "description": "L/R Electr-Hydr Eng. Mount Sol Valve -N144/N145 Open circuit"
  },
  {
    "code": "P158900",
    "description": "Temperature Selector Knob Potentiometer -G267- Short circuit to Ground (GND)"
  },
  {
    "code": "P159000",
    "description": "Temperature Selector Knob Potentiometer -G267- Open circuit"
  },
  {
    "code": "P159100",
    "description": "Wastegate Bypass Regulator Valve -N75 No function"
  },
  {
    "code": "P159200",
    "description": "Height sensor/charge pressure sensor Implausible relation"
  },
  {
    "code": "P159300",
    "description": "Altitude adaptation Signal outside tolerance"
  },
  {
    "code": "P159400",
    "description": "Engine Oil Temperature Sensor Circuit,Camshaft Control -G277 Short circuit to B+"
  },
  {
    "code": "P159500",
    "description": "Engine Oil Temperature Sensor Circuit,Camshaft Control -G277 Open circuit/short circuit to ground"
  },
  {
    "code": "P159600",
    "description": "Databus drivetrain Implausible message from level control system control module"
  },
  {
    "code": "P159700",
    "description": "Databus drivetrain missing message from level controls system control module"
  },
  {
    "code": "P159800",
    "description": "Engine Oil Temperature Sensor Circuit,Camshaft Control -G277 Implausible signal"
  },
  {
    "code": "P159900",
    "description": "Idle regulation lean operation RPM above specified value"
  },
  {
    "code": "P159B00",
    "description": "Oil Level Thermal Sensor Short circuit to B+"
  },
  {
    "code": "P159C00",
    "description": "Oil Level Thermal Sensor Short-circuit to ground"
  },
  {
    "code": "P159D00",
    "description": "Oil Level Thermal Sensor Implausible signal"
  },
  {
    "code": "P159E00",
    "description": "Oil Level Thermal Sensor No signal"
  },
  {
    "code": "P159F00",
    "description": "Function restriction by Transmission Control Module"
  },
  {
    "code": "P15A000",
    "description": "Neutral gear sensor Electrical malfunction"
  },
  {
    "code": "P15A100",
    "description": "Neutral gear sensor Implausible signal"
  },
  {
    "code": "P15A200",
    "description": "Neutral gear sensor Short-circuit to ground"
  },
  {
    "code": "P15A300",
    "description": "Neutral gear sensor Short circuit to B+"
  },
  {
    "code": "P15A400",
    "description": "vehicle shutdown activated"
  },
  {
    "code": "P160000",
    "description": "Voltage supply terminal 15 Low Voltage"
  },
  {
    "code": "P160100",
    "description": "Relay for Power Supply (B+) Terminal 30 -J317 Implausible signal"
  },
  {
    "code": "P160200",
    "description": "Power Supply (B+) Terminal 30 Low Voltage"
  },
  {
    "code": "P160300",
    "description": "Control module defective"
  },
  {
    "code": "P160400",
    "description": "Control module defective"
  },
  {
    "code": "P160500",
    "description": "Uneven road surface /acceleration sensor electrical malfunction in circuit"
  },
  {
    "code": "P160600",
    "description": "Rough Road Spec Engine Torque ABS-ECU electrical malfunction in circuit"
  },
  {
    "code": "P160700",
    "description": "Speed signal Malfunction message from instrument cluster"
  },
  {
    "code": "P160800",
    "description": "Steering angle signal Malfunction indication from steering angle sensor"
  },
  {
    "code": "P160900",
    "description": "Crash shut-off was triggered"
  },
  {
    "code": "P160A00",
    "description": "Control module defective"
  },
  {
    "code": "P160B00",
    "description": "See literature"
  },
  {
    "code": "P160C00",
    "description": "Coolant pump 2 Open circuit"
  },
  {
    "code": "P160D00",
    "description": "Coolant pump 2 Implausible signal"
  },
  {
    "code": "P160E00",
    "description": "Coolant pump 2 Short-circuit to ground"
  },
  {
    "code": "P160F00",
    "description": "Coolant pump 2 Short circuit to B+"
  },
  {
    "code": "P161000",
    "description": "Control module defective"
  },
  {
    "code": "P161100",
    "description": "Requirement - malfunction lamp on Short-circuit to ground"
  },
  {
    "code": "P161200",
    "description": "Engine Control Module (ECM) incorrect coding"
  },
  {
    "code": "P161300",
    "description": "Requirement - malfunction lamp on Open circuit/short circuit to B+"
  },
  {
    "code": "P161400",
    "description": "Requirement - malfunction lamp on Implausible signal"
  },
  {
    "code": "P161500",
    "description": "Engine Oil Temperature Sensor Circuit Implausible signal"
  },
  {
    "code": "P161600",
    "description": "Glow Plug Indicator Light -K29- Short circuit to B+"
  },
  {
    "code": "P161700",
    "description": "Glow Plug Indicator Light -K29- Open circuit/short circuit to ground"
  },
  {
    "code": "P161800",
    "description": "Glow plug relay -J52 Short circuit to B+"
  },
  {
    "code": "P161900",
    "description": "Glow plug relay -J52 Open circuit/short circuit to ground"
  },
  {
    "code": "P161A00",
    "description": "Glow plug cylinder 1 -Q10 Open circuit"
  },
  {
    "code": "P161B00",
    "description": "Glow plug cylinder 2 -Q11 Open circuit"
  },
  {
    "code": "P161C00",
    "description": "Glow plug cylinder 3 -Q12 Open circuit"
  },
  {
    "code": "P161D00",
    "description": "Glow plug cylinder 4 -Q13 Open circuit"
  },
  {
    "code": "P161E00",
    "description": "Glow plug cylinder 5 -Q14 Open circuit"
  },
  {
    "code": "P161F00",
    "description": "Glow plug cylinder 6 -Q15 Open circuit"
  },
  {
    "code": "P162000",
    "description": "Signal for coolant temperature Open/Short to B+"
  },
  {
    "code": "P162100",
    "description": "Signal for coolant temperature Short-circuit to ground"
  },
  {
    "code": "P162200",
    "description": "Signal for coolant temperature Implausible signal"
  },
  {
    "code": "P162300",
    "description": "Databus drivetrain No communication"
  },
  {
    "code": "P162400",
    "description": "Requirement - malfunction lamp on active"
  },
  {
    "code": "P162500",
    "description": "Databus drivetrain Implausible Message from Transm.Contr."
  },
  {
    "code": "P162600",
    "description": "Databus drivetrain Missing Message from Transm.Contr."
  },
  {
    "code": "P162700",
    "description": "Databus drivetrain missing message from fuel injection pump"
  },
  {
    "code": "P162800",
    "description": "Databus drivetrain missing message from steering sensor"
  },
  {
    "code": "P162900",
    "description": "Databus drivetrain Missing message from ADR control module"
  },
  {
    "code": "P162A00",
    "description": "Glow plug cylinder 7 -Q16 Open circuit"
  },
  {
    "code": "P162B00",
    "description": "Glow plug cylinder 8 -Q17 Open circuit"
  },
  {
    "code": "P162C00",
    "description": "Glow/Time Control Module - voltage supply Load circuit open circuit"
  },
  {
    "code": "P162D00",
    "description": "Diesel Particle Filter Indicator Lamp -K231 Malfunction"
  },
  {
    "code": "P162E00",
    "description": "Glow plug cylinder 9 -Q18 Open circuit"
  },
  {
    "code": "P162F00",
    "description": "Glow plug cylinder 10 -Q19 Open circuit"
  },
  {
    "code": "P163000",
    "description": "Accelerator position sender-G79 Signal too low"
  },
  {
    "code": "P163100",
    "description": "Accelerator position sender-G79 Signal too high"
  },
  {
    "code": "P163200",
    "description": "Accelerator position sender-G79 Supply voltage"
  },
  {
    "code": "P163300",
    "description": "Accelerator pedal position sender 2 -G185 Signal too low"
  },
  {
    "code": "P163400",
    "description": "Accelerator pedal position sender 2 -G185 Signal too high"
  },
  {
    "code": "P163500",
    "description": "Databus drivetrain missing message f.air condition control"
  },
  {
    "code": "P163600",
    "description": "Databus drivetrain missing message from Airbag control"
  },
  {
    "code": "P163700",
    "description": "Databus drivetrain Missing message f.central electr. control"
  },
  {
    "code": "P163800",
    "description": "Databus drivetrain missing message from clutch control module"
  },
  {
    "code": "P163900",
    "description": "Throttle/Pedal Position Sensor/Switch -C- Circuit Implausible signal"
  },
  {
    "code": "P163A00",
    "description": "Glow/Time Control Module 2 - voltage supply Load circuit open circuit"
  },
  {
    "code": "P163B00",
    "description": "Wakeup request constantly detected"
  },
  {
    "code": "P163C00",
    "description": "Wakeup request not detected"
  },
  {
    "code": "P163D00",
    "description": "Indicator lamp for driving program Electrical malfunction in circuit"
  },
  {
    "code": "P163E00",
    "description": "Control module defective"
  },
  {
    "code": "P163F00",
    "description": "Glow timing control module 2"
  },
  {
    "code": "P164000",
    "description": "Control module defective"
  },
  {
    "code": "P164100",
    "description": "Read DTC memory of Air Condition ECU"
  },
  {
    "code": "P164200",
    "description": "Read DTC memory of Airbag ECU"
  },
  {
    "code": "P164300",
    "description": "Read DTC memory of read out select central control"
  },
  {
    "code": "P164400",
    "description": "Read DTC memory of clutch ECU"
  },
  {
    "code": "P164500",
    "description": "Databus drivetrain missing message f.all wheel drive contr"
  },
  {
    "code": "P164600",
    "description": "Read DTC memory of four wheel drive electronics"
  },
  {
    "code": "P164700",
    "description": "Checking coding/versions of control modules in CAN-bus"
  },
  {
    "code": "P164800",
    "description": "Databus drivetrain Defective"
  },
  {
    "code": "P164900",
    "description": "Databus drivetrain missing message from break ECU"
  },
  {
    "code": "P164A00",
    "description": "Oil pressure switch Implausible signal"
  },
  {
    "code": "P164B00",
    "description": "Oil pressure switch Malfunction"
  },
  {
    "code": "P164C00",
    "description": "Oil pressure switch for reduced oil pressure Implausible signal"
  },
  {
    "code": "P164D00",
    "description": "Oil pressure switch for reduced oil pressure Malfunction"
  },
  {
    "code": "P164E00",
    "description": "Oil pressure regulation valve Electrical malfunction"
  },
  {
    "code": "P164F00",
    "description": "Torque withdrawal"
  },
  {
    "code": "P165000",
    "description": "Databus drivetrain missing message from instrument panel ECU"
  },
  {
    "code": "P165100",
    "description": "Databus drivetrain missing messages"
  },
  {
    "code": "P165200",
    "description": "Read DTC memory of transmission ECU"
  },
  {
    "code": "P165300",
    "description": "Read DTC memory of break ECU"
  },
  {
    "code": "P165400",
    "description": "Read DTC memory of instrument cluster"
  },
  {
    "code": "P165500",
    "description": "Read DTC memory of distance control ECU"
  },
  {
    "code": "P165600",
    "description": "AC Clutch Relay Control Circuit Short-circuit to ground"
  },
  {
    "code": "P165700",
    "description": "AC Clutch Relay Control Circuit Short circuit to B+"
  },
  {
    "code": "P165800",
    "description": "Databus drivetrain range/performance from distance control"
  },
  {
    "code": "P165900",
    "description": "Fan 1 control circuit Short circuit to B+"
  },
  {
    "code": "P165A00",
    "description": "Temperature sensor - fresh air intake duct Short circuit to B+"
  },
  {
    "code": "P165B00",
    "description": "Temperature sensor - fresh air intake duct Short-circuit to ground"
  },
  {
    "code": "P165C00",
    "description": "Temperature sensor - fresh air intake duct Electrical malfunction"
  },
  {
    "code": "P165D00",
    "description": "Refrigerant pressure too high"
  },
  {
    "code": "P165E00",
    "description": "Refrigerant pressure too low"
  },
  {
    "code": "P165F00",
    "description": "Oil pressure regulation valve Short-circuit to ground"
  },
  {
    "code": "P166000",
    "description": "Fan 1 control circuit Short-circuit to ground"
  },
  {
    "code": "P166100",
    "description": "Fan 2 control circuit Short circuit to B+"
  },
  {
    "code": "P166200",
    "description": "Fan 2 control circuit Short-circuit to ground"
  },
  {
    "code": "P166300",
    "description": "Activation of unit injectors Short circuit to B+"
  },
  {
    "code": "P166400",
    "description": "Activation of unit injectors Electrical malfunction in circuit"
  },
  {
    "code": "P166500",
    "description": "Activation of unit injectors Mechanical malfunction"
  },
  {
    "code": "P166600",
    "description": "Unit injector solenoid valve - cylinder 1-N240 Electrical malfunction in circuit"
  },
  {
    "code": "P166700",
    "description": "Unit injector solenoid valve - cylinder 2-N241 Electrical malfunction in circuit"
  },
  {
    "code": "P166800",
    "description": "Unit injector solenoid valve - cylinder 3-N242 Electrical malfunction in circuit"
  },
  {
    "code": "P166900",
    "description": "Unit injector solenoid valve - cylinder 4-N243 Electrical malfunction in circuit"
  },
  {
    "code": "P166A00",
    "description": "Oil temperature sensor 2 Electrical malfunction"
  },
  {
    "code": "P166B00",
    "description": "Oil temperature sensor 2 Short-circuit to ground"
  },
  {
    "code": "P166C00",
    "description": "Oil temperature sensor 2 Implausible signal"
  },
  {
    "code": "P166D00",
    "description": "Engine control module incorrect installation"
  },
  {
    "code": "P167000",
    "description": "Unit injector solenoid valve - cylinder 5-N244 Electrical malfunction in circuit"
  },
  {
    "code": "P167100",
    "description": "Unit injector solenoid valve - cylinder 6-N245 Electrical malfunction in circuit"
  },
  {
    "code": "P167200",
    "description": "Fan 1 control circuit Open circuit/short circuit to ground"
  },
  {
    "code": "P167300",
    "description": "Speed signal Malfunction message from ABS control module"
  },
  {
    "code": "P167400",
    "description": "Databus drivetrain implausible message from instrument panel ECU"
  },
  {
    "code": "P167500",
    "description": "Databus drivetrain fuel pump control module"
  },
  {
    "code": "P167600",
    "description": "Drive by Wire-MIL Circ. -K132 electrical malfunction in circuit"
  },
  {
    "code": "P167700",
    "description": "Drive by Wire-MIL Circ. -K132 Short circuit to B+"
  },
  {
    "code": "P167800",
    "description": "Drive by Wire-MIL Circ. -K132 Short-circuit to ground"
  },
  {
    "code": "P167900",
    "description": "Drive by Wire-MIL Circ. -K132 Open circuit"
  },
  {
    "code": "P167A00",
    "description": "Indicator light start/stop Electrical malfunction"
  },
  {
    "code": "P167B00",
    "description": "Driver's belt buckle Malfunction"
  },
  {
    "code": "P167C00",
    "description": "Driving program switch Electrical malfunction"
  },
  {
    "code": "P167D00",
    "description": "Switch for start/stop Electrical malfunction"
  },
  {
    "code": "P167F00",
    "description": "Injection system initialization error or impermissible operating condition"
  },
  {
    "code": "P168000",
    "description": "Reset-resistant emergency running"
  },
  {
    "code": "P168100",
    "description": "Control unit programming programming not finished"
  },
  {
    "code": "P168200",
    "description": "Databus drivetrain Implausible message from ABS control module"
  },
  {
    "code": "P168300",
    "description": "Databus drivetrain Implausible message from airbag control module"
  },
  {
    "code": "P168400",
    "description": "Control unit programming Malfunction in data transfer"
  },
  {
    "code": "P168500",
    "description": "Databus drivetrain implausible message from steering angle sensor"
  },
  {
    "code": "P168600",
    "description": "Control module defective Programming error"
  },
  {
    "code": "P168700",
    "description": "Databus drivetrain Implausible message from climate control module"
  },
  {
    "code": "P168800",
    "description": "Databus drivetrain implausible message from all wheel drive electronic"
  },
  {
    "code": "P168900",
    "description": "Databus drivetrain implausible message f.central electr. control"
  },
  {
    "code": "P169000",
    "description": "Malfunction Indicator Lamp (MIL) -K83- electrical malfunction in circuit"
  },
  {
    "code": "P169100",
    "description": "Malfunction Indicator Lamp (MIL) -K83- Open circuit"
  },
  {
    "code": "P169200",
    "description": "Malfunction Indicator Lamp (MIL) -K83- Short-circuit to ground"
  },
  {
    "code": "P169300",
    "description": "Malfunction Indicator Lamp (MIL) -K83- Short circuit to B+"
  },
  {
    "code": "P169400",
    "description": "Malfunction Indicator Lamp (MIL) -K83- Open circuit/short circuit to ground"
  },
  {
    "code": "P169500",
    "description": "Databus drivetrain implausible message from clutch control ECU"
  },
  {
    "code": "P169600",
    "description": "Databus drivetrain implausible signal from Steering Column Electronic"
  },
  {
    "code": "P169700",
    "description": "Steering angle sensors please read DTC"
  },
  {
    "code": "P169800",
    "description": "Steering Column Electronic Systems please read DTC"
  },
  {
    "code": "P169900",
    "description": "Databus drivetrain missing message from Steering Column Electronic"
  },
  {
    "code": "P169A00",
    "description": "Loading mode active"
  },
  {
    "code": "P169B00",
    "description": "Glow plug cylinder 1 Implausible signal"
  },
  {
    "code": "P169C00",
    "description": "Glow plug cylinder 2 Implausible signal"
  },
  {
    "code": "P169D00",
    "description": "Glow plug cylinder 3 Implausible signal"
  },
  {
    "code": "P169E00",
    "description": "Glow plug cylinder 4 Implausible signal"
  },
  {
    "code": "P169F00",
    "description": "Glow plug cylinder 5 Implausible signal"
  },
  {
    "code": "P16A000",
    "description": "Glow plug cylinder 6 Implausible signal"
  },
  {
    "code": "P16A100",
    "description": "Glow plug cylinder 7 Implausible signal"
  },
  {
    "code": "P16A200",
    "description": "Glow plug cylinder 8 Implausible signal"
  },
  {
    "code": "P16A300",
    "description": "Glow plug cylinder 9 Implausible signal"
  },
  {
    "code": "P16A400",
    "description": "Glow plug cylinder 10 Implausible signal"
  },
  {
    "code": "P16A500",
    "description": "Glow plug cylinder 11 Implausible signal"
  },
  {
    "code": "P16A600",
    "description": "Glow plug cylinder 12 Implausible signal"
  },
  {
    "code": "P16A700",
    "description": "Glow plug cylinder 1 Incorrect installation"
  },
  {
    "code": "P16A800",
    "description": "Glow plug cylinder 2 Incorrect installation"
  },
  {
    "code": "P16A900",
    "description": "Glow plug cylinder 3 Incorrect installation"
  },
  {
    "code": "P16AA00",
    "description": "Glow plug cylinder 4 Incorrect installation"
  },
  {
    "code": "P16AB00",
    "description": "Glow plug cylinder 5 Incorrect installation"
  },
  {
    "code": "P16AC00",
    "description": "Glow plug cylinder 6 Incorrect installation"
  },
  {
    "code": "P16AD00",
    "description": "Glow plug cylinder 7 Incorrect installation"
  },
  {
    "code": "P16AE00",
    "description": "Glow plug cylinder 8 Incorrect installation"
  },
  {
    "code": "P16AF00",
    "description": "Glow plug cylinder 9 Incorrect installation"
  },
  {
    "code": "P16B000",
    "description": "Glow plug cylinder 10 Incorrect installation"
  },
  {
    "code": "P16B100",
    "description": "Glow plug cylinder 11 Incorrect installation"
  },
  {
    "code": "P16B200",
    "description": "Glow plug cylinder 12 Incorrect installation"
  },
  {
    "code": "P170000",
    "description": "Brake Pressure Switch -F270- Implausible signal"
  },
  {
    "code": "P170100",
    "description": "Transmission control unit locked"
  },
  {
    "code": "P170200",
    "description": "Malfunction cannot activate contr. mod. replacem. func., since another malfunction with equal priority is present"
  },
  {
    "code": "P170300",
    "description": "Emergency running, control unit reset"
  },
  {
    "code": "P170400",
    "description": "Kick Down Switch -F8- electrical malfunction in circuit"
  },
  {
    "code": "P170500",
    "description": "Gear Ratio adaptation limit reached"
  },
  {
    "code": "P170600",
    "description": "Gearbox faulty"
  },
  {
    "code": "P170700",
    "description": "Interference in Mechatronic unit"
  },
  {
    "code": "P170800",
    "description": "Engine Control Modules (ECM) exchanged"
  },
  {
    "code": "P170900",
    "description": "Gear position switch 1-3 High Voltage"
  },
  {
    "code": "P170A00",
    "description": "Hill holder Incline limit exceeded"
  },
  {
    "code": "P170B00",
    "description": "Hill holder Malfunction"
  },
  {
    "code": "P170C00",
    "description": "Gear position switch 5-7 High Voltage"
  },
  {
    "code": "P170D00",
    "description": "Gear position switch 5-7 Low Voltage"
  },
  {
    "code": "P170E00",
    "description": "Gear position switch 5-7 Signal error"
  },
  {
    "code": "P170F00",
    "description": "Gear position switch 6-4 High Voltage"
  },
  {
    "code": "P171000",
    "description": "Gear position switch 6-4 Low Voltage"
  },
  {
    "code": "P171100",
    "description": "Wheel speed signal 1=>Left Front ABS Wheel Speed Sensor -G47 Implausible signal"
  },
  {
    "code": "P171200",
    "description": "Gear position switch R-2 High Voltage"
  },
  {
    "code": "P171300",
    "description": "Gear position switch R-2 Low Voltage"
  },
  {
    "code": "P171400",
    "description": "Gear position switch R-2 Signal error"
  },
  {
    "code": "P171500",
    "description": "Gear position switch 6-4 Signal error"
  },
  {
    "code": "P171600",
    "description": "Wheel speed signal 2=>Right Front ABS Wheel Speed Sensor -G45 Implausible signal"
  },
  {
    "code": "P171700",
    "description": "Gear position switch 1-3 Low Voltage"
  },
  {
    "code": "P171800",
    "description": "Gear position switch 1-3 Signal error"
  },
  {
    "code": "P171900",
    "description": "Function restriction by Engine Control Module"
  },
  {
    "code": "P171A00",
    "description": "Ignition key removal lock Open circuit"
  },
  {
    "code": "P171B00",
    "description": "Ignition key removal lock Short circuit to B+"
  },
  {
    "code": "P171C00",
    "description": "Ignition key removal lock Short-circuit to ground"
  },
  {
    "code": "P171D00",
    "description": "Ignition key removal lock Electrical malfunction"
  },
  {
    "code": "P171E00",
    "description": "Transmission Input Speed (RPM) Sensor 2 No signal"
  },
  {
    "code": "P171F00",
    "description": "Transmission Input Speed (RPM) Sensor 2 Implausible signal"
  },
  {
    "code": "P172000",
    "description": "Transmission output speed 1 Implausible signal"
  },
  {
    "code": "P172100",
    "description": "Wheel speed signal 3=>Left Rear ABS Wheel Speed Sensor -G46 Implausible signal"
  },
  {
    "code": "P172200",
    "description": "Transmission output speed 2 Implausible signal"
  },
  {
    "code": "P172300",
    "description": "Signal for starter lock Open circuit"
  },
  {
    "code": "P172400",
    "description": "Signal for starter lock Short-circuit to ground"
  },
  {
    "code": "P172500",
    "description": "Compare transmission output speeds 1 + 2 Implausible signal"
  },
  {
    "code": "P172600",
    "description": "Wheel speed signal 4=>Right Rear ABS Wheel Speed Sensor -G44 Implausible signal"
  },
  {
    "code": "P172700",
    "description": "Transmission Driving direction implausible"
  },
  {
    "code": "P172800",
    "description": "Differing wheel speeds Implausible signal"
  },
  {
    "code": "P172900",
    "description": "Signal for starter lock Short circuit to B+"
  },
  {
    "code": "P172A00",
    "description": "Clutch adjuster valve Open circuit"
  },
  {
    "code": "P172B00",
    "description": "Clutch adjuster valve Short-circuit to ground"
  },
  {
    "code": "P172C00",
    "description": "Clutch adjuster valve Short circuit to B+"
  },
  {
    "code": "P172D00",
    "description": "Clutch adjuster valve Electrical malfunction"
  },
  {
    "code": "P172E00",
    "description": "Switch actuator Mechanical malfunction"
  },
  {
    "code": "P172F00",
    "description": "Gear Position Distance Sensor 1 for gear selector Electrical malfunction"
  },
  {
    "code": "P173000",
    "description": "Gear Position Distance Sensor 2 for gear selector Electrical malfunction"
  },
  {
    "code": "P173100",
    "description": "Gear Position Distance Sensor 3 for gear selector Electrical malfunction"
  },
  {
    "code": "P173200",
    "description": "Gear Position Distance Sensor 4 for gear selector Electrical malfunction"
  },
  {
    "code": "P173300",
    "description": "Tiptronic Switch -F189-, down Short-circuit to ground"
  },
  {
    "code": "P173400",
    "description": "Starter release from the selector lever sensor system"
  },
  {
    "code": "P173500",
    "description": "Position sensor for clutch 1 Electrical malfunction"
  },
  {
    "code": "P173600",
    "description": "Position sensor for clutch 2 Electrical malfunction"
  },
  {
    "code": "P173700",
    "description": "Transmission hydraulic pressure sensor 1 Open circuit/short circuit to B+"
  },
  {
    "code": "P173800",
    "description": "Transmission hydraulic pressure sensor 2 Open circuit/short circuit to B+"
  },
  {
    "code": "P173900",
    "description": "Tiptronic Switch -F189-, up Short-circuit to ground"
  },
  {
    "code": "P173A00",
    "description": "Gear Position Distance Sensor 1 for gear selector Implausible signal"
  },
  {
    "code": "P173B00",
    "description": "Gear Position Distance Sensor 2 for gear selector Implausible signal"
  },
  {
    "code": "P173C00",
    "description": "Gear Position Distance Sensor 3 for gear selector Implausible signal"
  },
  {
    "code": "P173D00",
    "description": "Gear Position Distance Sensor 4 for gear selector Implausible signal"
  },
  {
    "code": "P173E00",
    "description": "Valve 1 in partial transmission 1 Electrical malfunction"
  },
  {
    "code": "P173F00",
    "description": "Valve 2 in partial transmission 1 Electrical malfunction"
  },
  {
    "code": "P174000",
    "description": "Clutch temperature monitoring"
  },
  {
    "code": "P174100",
    "description": "Clutch pressure adaptation at limit"
  },
  {
    "code": "P174200",
    "description": "Clutch torque adaptation, adaptation limit reached"
  },
  {
    "code": "P174300",
    "description": "Clutch slip monitoring Signal too high"
  },
  {
    "code": "P174400",
    "description": "Tiptronic Switch -F189-, recognition Short-circuit to ground"
  },
  {
    "code": "P174500",
    "description": "Transm.Contr.Unit Relay Short circuit to B+"
  },
  {
    "code": "P174600",
    "description": "Transm.Contr.Unit Relay electrical malfunction in circuit"
  },
  {
    "code": "P174700",
    "description": "Transm.Contr.Unit Relay Open circuit/short circuit to ground"
  },
  {
    "code": "P174800",
    "description": "Control module defective"
  },
  {
    "code": "P174900",
    "description": "Automatic gearbox control unit incorrect code"
  },
  {
    "code": "P174A00",
    "description": "Valve 3 in separate transmission 1 Electrical malfunction"
  },
  {
    "code": "P174B00",
    "description": "Valve 4 in partial transmission 1 Electrical malfunction"
  },
  {
    "code": "P174C00",
    "description": "Valve 1 in partial transmission 2 Electrical malfunction"
  },
  {
    "code": "P174D00",
    "description": "Valve 2 in partial transmission 2 Electrical malfunction"
  },
  {
    "code": "P174E00",
    "description": "Valve 3 in separate transmission 2 Electrical malfunction"
  },
  {
    "code": "P174F00",
    "description": "Valve 4 in partial transmission 2 Electrical malfunction"
  },
  {
    "code": "P175000",
    "description": "Voltage supply Low Voltage"
  },
  {
    "code": "P175100",
    "description": "Voltage supply High Voltage"
  },
  {
    "code": "P175200",
    "description": "Voltage supply Implausible signal"
  },
  {
    "code": "P175300",
    "description": "Tiptronic Switch -F189- Implausible signal"
  },
  {
    "code": "P175400",
    "description": "Tiptronic Switch, up F189 Open circuit/short circuit to B+"
  },
  {
    "code": "P175500",
    "description": "Tiptronic Switch, return F189 Open circuit/short circuit to B+"
  },
  {
    "code": "P175600",
    "description": "Tiptronic Switch -F189-, recognition Open circuit/short circuit to B+"
  },
  {
    "code": "P175700",
    "description": "Voltage supply Open circuit"
  },
  {
    "code": "P175800",
    "description": "Voltage supply terminal 15 Open circuit"
  },
  {
    "code": "P175900",
    "description": "Transmission fluid temperature Exceeded multiple times"
  },
  {
    "code": "P175A00",
    "description": "Actuator gear control unit separate transmission 1 Tolerance limit reached"
  },
  {
    "code": "P175B00",
    "description": "Actuator gear control unit separate transmission 2 Tolerance limit reached"
  },
  {
    "code": "P175C00",
    "description": "Actuator double clutch Tolerance limits reached"
  },
  {
    "code": "P175D00",
    "description": "Clutch 1 opens unintentionally"
  },
  {
    "code": "P175E00",
    "description": "Clutch 1 closes unintentionally"
  },
  {
    "code": "P175F00",
    "description": "Transmission system Basic settings not carried out"
  },
  {
    "code": "P176000",
    "description": "Shift lock solenoid =>solenoid -N110 electrical malfunction in circuit"
  },
  {
    "code": "P176100",
    "description": "Shift lock solenoid =>solenoid -N110 Short-circuit to ground"
  },
  {
    "code": "P176200",
    "description": "Shift lock solenoid =>solenoid -N110 Short circuit to B+"
  },
  {
    "code": "P176300",
    "description": "Shift lock solenoid =>solenoid -N110 Open circuit"
  },
  {
    "code": "P176400",
    "description": "Transmission temperature monitoring"
  },
  {
    "code": "P176500",
    "description": "Hydraulic pressure sender 2 -G194 adaptation limit reached"
  },
  {
    "code": "P176600",
    "description": "Throttle Angel Signal Open circuit/short circuit to B+"
  },
  {
    "code": "P176700",
    "description": "Throttle Angel Signal Short-circuit to ground"
  },
  {
    "code": "P176800",
    "description": "Hydraulic pressure sender 2 -G194 Signal too high"
  },
  {
    "code": "P176900",
    "description": "Hydraulic pressure sender 2 -G194 Signal too low"
  },
  {
    "code": "P176A00",
    "description": "Gear selector 1 cannot be regulated"
  },
  {
    "code": "P176B00",
    "description": "Gear selector 2 cannot be regulated"
  },
  {
    "code": "P176C00",
    "description": "Gear selector 3 cannot be regulated"
  },
  {
    "code": "P176D00",
    "description": "Gear selector 4 cannot be regulated"
  },
  {
    "code": "P176E00",
    "description": "Clutch 2 opens unintentionally"
  },
  {
    "code": "P176F00",
    "description": "Clutch 2 closes unintentionally"
  },
  {
    "code": "P177000",
    "description": "Load Signal Implausible signal"
  },
  {
    "code": "P177100",
    "description": "Load Signal Open circuit/short circuit to B+"
  },
  {
    "code": "P177200",
    "description": "Load Signal Short-circuit to ground"
  },
  {
    "code": "P177300",
    "description": "Hydraulic pressure sender 1 -G193 Signal too high"
  },
  {
    "code": "P177400",
    "description": "Hydraulic pressure sender 1 -G193 Signal too low"
  },
  {
    "code": "P177500",
    "description": "Hydraulic pressure sender 1 -G193 adaptation limit reached"
  },
  {
    "code": "P177600",
    "description": "Hydraulic pressure sender 1 -G193 Implausible signal"
  },
  {
    "code": "P177700",
    "description": "Hydraulic pressure sender 2 -G194 Implausible signal"
  },
  {
    "code": "P177800",
    "description": "Valve 7 electrical malfunction in circuit"
  },
  {
    "code": "P177900",
    "description": "Transmission input shaft 1 Overspeed"
  },
  {
    "code": "P177A00",
    "description": "Transmission input shaft 2 Overspeed"
  },
  {
    "code": "P177B00",
    "description": "Coupling 1 Tolerance limit reached"
  },
  {
    "code": "P177C00",
    "description": "Coupling 2 Tolerance limit reached"
  },
  {
    "code": "P177D00",
    "description": "Double clutch Torque too high"
  },
  {
    "code": "P177E00",
    "description": "Function restriction due to pressure drop"
  },
  {
    "code": "P177F00",
    "description": "Hydraulic pump motor Insuff. voltage"
  },
  {
    "code": "P178000",
    "description": "Torque withdrawal faulty"
  },
  {
    "code": "P178100",
    "description": "Torque reduction signal Open circuit/short circuit to ground"
  },
  {
    "code": "P178200",
    "description": "Torque reduction signal Short circuit to B+"
  },
  {
    "code": "P178300",
    "description": "Clutch torque adaptation 2 adaptation limit reached"
  },
  {
    "code": "P178400",
    "description": "Up/down shift wire Open circuit/short circuit to ground"
  },
  {
    "code": "P178500",
    "description": "Up/down shift wire Short circuit to B+"
  },
  {
    "code": "P178600",
    "description": "Reversing light signal Open circuit"
  },
  {
    "code": "P178700",
    "description": "Reversing light signal Short-circuit to ground"
  },
  {
    "code": "P178800",
    "description": "Reversing light signal Short circuit to B+"
  },
  {
    "code": "P178900",
    "description": "Idling speed adjustment Error Message from Engine Contr."
  },
  {
    "code": "P178A00",
    "description": "Hydraulic pump Electrical malfunction"
  },
  {
    "code": "P178B00",
    "description": "Hydraulic pump Implausible behavior"
  },
  {
    "code": "P178C00",
    "description": "Clutch 1 to clutch 2 Implausible"
  },
  {
    "code": "P178D00",
    "description": "Synchronizer ring Wear"
  },
  {
    "code": "P178E00",
    "description": "Function limitation due to excessive temperature"
  },
  {
    "code": "P178F00",
    "description": "Pressure control valve soiled"
  },
  {
    "code": "P179000",
    "description": "Signal for selector range display Open circuit"
  },
  {
    "code": "P179100",
    "description": "Signal for selector range display Short-circuit to ground"
  },
  {
    "code": "P179200",
    "description": "Signal for selector range display Short circuit to B+"
  },
  {
    "code": "P179300",
    "description": "Output Speed Sensor 2 Circ. No signal"
  },
  {
    "code": "P179500",
    "description": "Signal for driving speed Open circuit"
  },
  {
    "code": "P179600",
    "description": "Signal for driving speed Short-circuit to ground"
  },
  {
    "code": "P179700",
    "description": "Signal for driving speed Short circuit to B+"
  },
  {
    "code": "P179800",
    "description": "Output Speed Sensor 2 Circ. Implausible signal"
  },
  {
    "code": "P179900",
    "description": "Output Speed Sensor 2 Circ. Rpm too High"
  },
  {
    "code": "P179A00",
    "description": "Solenoid valve Electrical malfunction"
  },
  {
    "code": "P179B00",
    "description": "Separate transmission valve Electrical malfunction"
  },
  {
    "code": "P179C00",
    "description": "Main pressure valve Electrical malfunction"
  },
  {
    "code": "P179D00",
    "description": "Cooling oil valve Electrical malfunction"
  },
  {
    "code": "P179E00",
    "description": "Sensor for transmission range Electrical malfunction"
  },
  {
    "code": "P179F00",
    "description": "Sensor for transmission range Malfunction"
  },
  {
    "code": "P17A000",
    "description": "Accumulator 1 temperature monitoring"
  },
  {
    "code": "P17A100",
    "description": "Accumulator 2 temperature monitoring"
  },
  {
    "code": "P17A200",
    "description": "Differential fluid pressure monitoring"
  },
  {
    "code": "P17A300",
    "description": "Differential fluid temperature monitoring"
  },
  {
    "code": "P17A400",
    "description": "Transverse acceleration monitoring"
  },
  {
    "code": "P17A500",
    "description": "Longitudinal acceleration monitoring"
  },
  {
    "code": "P17A600",
    "description": "Selector lever position P position1"
  },
  {
    "code": "P17A700",
    "description": "Selector lever position P position2"
  },
  {
    "code": "P17A800",
    "description": "Shift Lever Forward Valve 1 Open circuit"
  },
  {
    "code": "P17A900",
    "description": "Shift Lever Forward Valve 1 Short-circuit to ground"
  },
  {
    "code": "P17AA00",
    "description": "Shift Lever Forward Valve 1 Short circuit to B+"
  },
  {
    "code": "P17AB00",
    "description": "Shift Lever Forward Valve 1 Electrical malfunction"
  },
  {
    "code": "P17AC00",
    "description": "Shift Lever Forward Valve 2 Open circuit"
  },
  {
    "code": "P17AD00",
    "description": "Shift Lever Forward Valve 2 Short-circuit to ground"
  },
  {
    "code": "P17AE00",
    "description": "Shift Lever Forward Valve 2 Short circuit to B+"
  },
  {
    "code": "P17AF00",
    "description": "Shift Lever Forward Valve 2 Electrical malfunction"
  },
  {
    "code": "P17B000",
    "description": "Shift Lever Forward Valve 3 Open circuit"
  },
  {
    "code": "P17B100",
    "description": "Shift Lever Forward Valve 3 Short-circuit to ground"
  },
  {
    "code": "P17B200",
    "description": "Shift Lever Forward Valve 3 Short circuit to B+"
  },
  {
    "code": "P17B300",
    "description": "Shift Lever Forward Valve 3 Electrical malfunction"
  },
  {
    "code": "P17B400",
    "description": "Shift Lever Forward Valve 4 Open circuit"
  },
  {
    "code": "P17B500",
    "description": "Shift Lever Forward Valve 4 Short-circuit to ground"
  },
  {
    "code": "P17B600",
    "description": "Shift Lever Forward Valve 4 Short circuit to B+"
  },
  {
    "code": "P17B700",
    "description": "Shift Lever Forward Valve 4 Electrical malfunction"
  },
  {
    "code": "P17B800",
    "description": "Gear Recognition Potentiometer 1 Implausible signal"
  },
  {
    "code": "P17B900",
    "description": "Gear Recognition Potentiometer 1 Signal too low"
  },
  {
    "code": "P17BA00",
    "description": "Gear Recognition Potentiometer 1 Signal too high"
  },
  {
    "code": "P17BB00",
    "description": "Gear Recognition Potentiometer 2 Implausible signal"
  },
  {
    "code": "P17BC00",
    "description": "Gear Recognition Potentiometer 2 Signal too low"
  },
  {
    "code": "P17BD00",
    "description": "Gear Recognition Potentiometer 2 Signal too high"
  },
  {
    "code": "P17BE00",
    "description": "Hydraulic pump Excess temperature"
  },
  {
    "code": "P17BF00",
    "description": "Hydraulic pump Play protection"
  },
  {
    "code": "P17C000",
    "description": "Sport program button Open circuit"
  },
  {
    "code": "P17C100",
    "description": "Selector lever position display unit Electrical malfunction"
  },
  {
    "code": "P17C200",
    "description": "Selector lever position display unit Supply voltage"
  },
  {
    "code": "P17C300",
    "description": "Selector lever Defective"
  },
  {
    "code": "P17C400",
    "description": "Selector lever position display unit Defective"
  },
  {
    "code": "P17C500",
    "description": "Selector lever Implausible signal"
  },
  {
    "code": "P17C600",
    "description": "Clutch valve Electrical malfunction"
  },
  {
    "code": "P17C700",
    "description": "Transmission Input Speed (RPM) Sensor 3 electrical malfunction in circuit"
  },
  {
    "code": "P17C800",
    "description": "Transmission Input Speed (RPM) Sensor 3 Implausible signal"
  },
  {
    "code": "P17C900",
    "description": "Transmission Input Speed (RPM) Sensor 3 No signal"
  },
  {
    "code": "P17CA00",
    "description": "Basic calibration Data implausible"
  },
  {
    "code": "P17CB00",
    "description": "Clutch valve Defective"
  },
  {
    "code": "P17CC00",
    "description": "Clutch valve 2 Defective"
  },
  {
    "code": "P17CD00",
    "description": "Coupling 1 Drag torque too high"
  },
  {
    "code": "P17CE00",
    "description": "Coupling 2 Drag torque too high"
  },
  {
    "code": "P17CF00",
    "description": "Coupling 1 Slip too great"
  },
  {
    "code": "P17D000",
    "description": "Coupling 2 Slip too great"
  },
  {
    "code": "P17D100",
    "description": "Coupling 1 Pressure upper limit exceeded"
  },
  {
    "code": "P17D200",
    "description": "Coupling 2 Pressure upper limit exceeded"
  },
  {
    "code": "P17D300",
    "description": "Electrohydraulic control unit Characteristic curve deviation"
  },
  {
    "code": "P17D400",
    "description": "Valve 3 in separate transmission 1 Mechanical malfunction"
  },
  {
    "code": "P17D500",
    "description": "Valve 3 in separate transmission 2 Mechanical malfunction"
  },
  {
    "code": "P17D600",
    "description": "Coupling 1 Pressure too high"
  },
  {
    "code": "P17D700",
    "description": "Coupling 2 Pressure too high"
  },
  {
    "code": "P17D800",
    "description": "Torque limitation due to clutch temperature"
  },
  {
    "code": "P17D900",
    "description": "Gear selector sensor Characteristic curve deviation"
  },
  {
    "code": "P17DA00",
    "description": "Gear position sensor 1 Implausible"
  },
  {
    "code": "P17DB00",
    "description": "Gear position sensor 2 Implausible"
  },
  {
    "code": "P17DC00",
    "description": "Gear position sensor 3 Implausible"
  },
  {
    "code": "P17DD00",
    "description": "Gear position sensor 4 Implausible"
  },
  {
    "code": "P17DE00",
    "description": "Gear Position Distance Sensors 1 and 3 Electrical malfunction"
  },
  {
    "code": "P17DF00",
    "description": "Gear Position Distance Sensors 2 and 4 Electrical malfunction"
  },
  {
    "code": "P17E000",
    "description": "Gear selector 1 Mechanical malfunction"
  },
  {
    "code": "P17E100",
    "description": "Gear selector 2 Mechanical malfunction"
  },
  {
    "code": "P17E200",
    "description": "Gear selector 3 Mechanical malfunction"
  },
  {
    "code": "P17E300",
    "description": "Gear selector 4 Mechanical malfunction"
  },
  {
    "code": "P17E400",
    "description": "Selector lever position display unit Short circuit to B+"
  },
  {
    "code": "P17E500",
    "description": "Selector lever position sensor Mechanical malfunction"
  },
  {
    "code": "P17E600",
    "description": "Selector lever position sensor Implausible signal"
  },
  {
    "code": "P17E700",
    "description": "Selector lever position sensor Defective"
  },
  {
    "code": "P17E800",
    "description": "Locking solenoid Electrical malfunction"
  },
  {
    "code": "P17E900",
    "description": "Locking solenoid Short circuit to B+"
  },
  {
    "code": "P17EA00",
    "description": "Locking solenoid Defective"
  },
  {
    "code": "P17EB00",
    "description": "Unlock button Short-circuit to ground"
  },
  {
    "code": "P17EC00",
    "description": "Unlock button Electrical malfunction"
  },
  {
    "code": "P17ED00",
    "description": "Unlock button sticks"
  },
  {
    "code": "P17EE00",
    "description": "Unlock button Implausible signal"
  },
  {
    "code": "P17EF00",
    "description": "Solenoid for pressure accumulator Short circuit to B+"
  },
  {
    "code": "P17F000",
    "description": "Solenoid for pressure accumulator Short-circuit to ground"
  },
  {
    "code": "P17F100",
    "description": "Solenoid for pressure accumulator Open circuit"
  },
  {
    "code": "P17F200",
    "description": "Solenoid for pressure accumulator Electrical malfunction"
  },
  {
    "code": "P17F300",
    "description": "Solenoid for parking lock Short circuit to B+"
  },
  {
    "code": "P17F400",
    "description": "Solenoid for parking lock Short-circuit to ground"
  },
  {
    "code": "P17F500",
    "description": "Solenoid for parking lock Open circuit"
  },
  {
    "code": "P17F600",
    "description": "Solenoid for parking lock Electrical malfunction"
  },
  {
    "code": "P17F700",
    "description": "Sensor for parking lock Implausible signal"
  },
  {
    "code": "P17F800",
    "description": "Sensor for parking lock Electrical malfunction"
  },
  {
    "code": "P17F900",
    "description": "Parking lock Mechanical malfunction"
  },
  {
    "code": "P17FA00",
    "description": "Pressure control valve 8 electrical malfunction in circuit"
  },
  {
    "code": "P17FB00",
    "description": "Pressure control valve 8 Open circuit"
  },
  {
    "code": "P17FC00",
    "description": "Pressure control valve 8 Open circuit/short circuit to ground"
  },
  {
    "code": "P17FD00",
    "description": "Pressure control valve 8 Short circuit to B+"
  },
  {
    "code": "P180000",
    "description": "Hydraulic Actuator Valve -N331- Electrical malfunction in circuit"
  },
  {
    "code": "P180100",
    "description": "Signal buzzer activation Short circuit to B+"
  },
  {
    "code": "P180200",
    "description": "Clutch pedal switch -F194 Implausible signal"
  },
  {
    "code": "P180300",
    "description": "Planetary post-switch stage Mechanical malfunction"
  },
  {
    "code": "P180400",
    "description": "Hydraulic Actuator Range Sender -G302- Electrical malfunction in circuit"
  },
  {
    "code": "P180500",
    "description": "Hydraulic Actuator Range Sender -G302- Upper limit exceeded"
  },
  {
    "code": "P180600",
    "description": "Hydraulic Actuator Range Sender -G302- Lower limit not reached"
  },
  {
    "code": "P180700",
    "description": "Hydraulic Actuator Range Sender -G302- no or incorrect basic setting/adaptation"
  },
  {
    "code": "P180800",
    "description": "Hydraulic Actuator Range Sender -G302- Implausible signal"
  },
  {
    "code": "P180900",
    "description": "4-Low Range Hydraulic Pump -V190- Electrical malfunction in circuit"
  },
  {
    "code": "P180A00",
    "description": "Gear selector 1 Leaving Neutral not allowed"
  },
  {
    "code": "P180B00",
    "description": "Gear selector 2 Leaving Neutral not allowed"
  },
  {
    "code": "P180C00",
    "description": "Gear selector 3 Leaving Neutral not allowed"
  },
  {
    "code": "P180D00",
    "description": "Gear selector 4 Leaving Neutral not allowed"
  },
  {
    "code": "P180E00",
    "description": "Position sensor for clutch 1 Implausible signal"
  },
  {
    "code": "P180F00",
    "description": "Position sensor for clutch 2 Implausible signal"
  },
  {
    "code": "P181300",
    "description": "Pressure control valve 1 -N215 electrical malfunction in circuit"
  },
  {
    "code": "P181400",
    "description": "Pressure control valve 1 -N215 Open circuit/short circuit to ground"
  },
  {
    "code": "P181500",
    "description": "Pressure control valve 1 -N215 Short circuit to B+"
  },
  {
    "code": "P181800",
    "description": "Pressure control valve 2 -N216 electrical malfunction in circuit"
  },
  {
    "code": "P181900",
    "description": "Pressure control valve 2 -N216 Open circuit/short circuit to ground"
  },
  {
    "code": "P182000",
    "description": "Pressure control valve 2 -N216 Short circuit to B+"
  },
  {
    "code": "P182300",
    "description": "Pressure control valve 3 -N217 electrical malfunction in circuit"
  },
  {
    "code": "P182400",
    "description": "Pressure control valve 3 -N217 Open circuit/short circuit to ground"
  },
  {
    "code": "P182500",
    "description": "Pressure control valve 3 -N217 Short circuit to B+"
  },
  {
    "code": "P182800",
    "description": "Pressure control valve 4 -N218 electrical malfunction in circuit"
  },
  {
    "code": "P182900",
    "description": "Pressure control valve 4 -N218 Open circuit/short circuit to ground"
  },
  {
    "code": "P183000",
    "description": "Pressure control valve 4 -N218 Short circuit to B+"
  },
  {
    "code": "P183300",
    "description": "Pressure regulating valve -5- for automatic transmission electrical malfunction in circuit"
  },
  {
    "code": "P183400",
    "description": "Pressure regulating valve -5- for automatic transmission Open circuit/short circuit to ground"
  },
  {
    "code": "P183500",
    "description": "Pressure regulating valve -5- for automatic transmission Short circuit to B+"
  },
  {
    "code": "P183800",
    "description": "Pressure Regulating Valve 6-N371 Electrical malfunction in circuit"
  },
  {
    "code": "P183900",
    "description": "Pressure Regulating Valve 6-N371 Open circuit/short circuit to ground"
  },
  {
    "code": "P184000",
    "description": "Pressure Regulating Valve 6-N371 Short circuit to B+"
  },
  {
    "code": "P184100",
    "description": "Engine control module/Transmission Control Module (TCM) Versions not compatible"
  },
  {
    "code": "P184200",
    "description": "Read DTC memory of instrument cluster"
  },
  {
    "code": "P184300",
    "description": "Read DTC memory of distance control ECU"
  },
  {
    "code": "P184400",
    "description": "Read DTC memory of read out select central control"
  },
  {
    "code": "P184500",
    "description": "Read DTC memory of Steering Column Electronic Systems Control Module -J527-"
  },
  {
    "code": "P184700",
    "description": "Read DTC memory of break ECU"
  },
  {
    "code": "P184800",
    "description": "Read DTC memory of engine ECU"
  },
  {
    "code": "P184900",
    "description": "Read DTC memory of transmission ECU"
  },
  {
    "code": "P184A00",
    "description": "Main pressure adaptation Offset upper limit exceeded"
  },
  {
    "code": "P184B00",
    "description": "Main pressure adaptation Malfunction"
  },
  {
    "code": "P185000",
    "description": "Databus drivetrain Missing Message from Engine Contr"
  },
  {
    "code": "P185100",
    "description": "Databus drivetrain missing message from break ECU"
  },
  {
    "code": "P185200",
    "description": "Databus drivetrain Implausible Message from Engine Contr."
  },
  {
    "code": "P185300",
    "description": "Databus drivetrain Implausible message from ABS control module"
  },
  {
    "code": "P185400",
    "description": "Databus drivetrain Defective"
  },
  {
    "code": "P185500",
    "description": "Databus drivetrain Software version monitoring"
  },
  {
    "code": "P185600",
    "description": "Throttle valve potentiometer -G69- Error Message from Engine Contr."
  },
  {
    "code": "P185700",
    "description": "Load Signal Error Message from Engine Contr."
  },
  {
    "code": "P185800",
    "description": "Engine Speed Input Circ. Error Message from Engine Contr."
  },
  {
    "code": "P185900",
    "description": "Brake Light Switch -F Error Message from Engine Contr."
  },
  {
    "code": "P186000",
    "description": "Kick Down Switch -F8- Error Message from Engine Contr."
  },
  {
    "code": "P186100",
    "description": "Accelerator position sender-G79 Malfunction indication from Engine Control Module (ECM)"
  },
  {
    "code": "P186200",
    "description": "Databus drivetrain missing message from instrument panel ECU"
  },
  {
    "code": "P186300",
    "description": "Databus drivetrain missing message from steering angle sensor"
  },
  {
    "code": "P186400",
    "description": "Databus drivetrain Missing message from ADR control module"
  },
  {
    "code": "P186500",
    "description": "Databus drivetrain missing message f.central electr. control"
  },
  {
    "code": "P186600",
    "description": "Databus drivetrain missing messages"
  },
  {
    "code": "P186700",
    "description": "Databus drivetrain missing message from -J527-"
  },
  {
    "code": "P186800",
    "description": "Transmission Mount Valve -1- -N262- Short circuit to B+"
  },
  {
    "code": "P186900",
    "description": "Transmission Mount Valve -1- -N262- Short-circuit to ground"
  },
  {
    "code": "P187000",
    "description": "Transmission Mount Valve -1- -N262- Open circuit"
  },
  {
    "code": "P187100",
    "description": "Transmission Mount Valve -2- -N263- Short circuit to B+"
  },
  {
    "code": "P187200",
    "description": "Transmission Mount Valve -2- -N263- Short-circuit to ground"
  },
  {
    "code": "P187300",
    "description": "Transmission Mount Valve -2- -N263- Open circuit"
  },
  {
    "code": "P187400",
    "description": "Valve for torque support mount Short circuit to B+"
  },
  {
    "code": "P187500",
    "description": "Valve for torque support mount Short-circuit to ground"
  },
  {
    "code": "P187600",
    "description": "Valve for torque support mount Open circuit"
  },
  {
    "code": "P187700",
    "description": "Control Coolant System Gearbox intermittent Open circuit"
  },
  {
    "code": "P187800",
    "description": "Control Coolant System Gearbox intermittent Short circuit to B+"
  },
  {
    "code": "P187900",
    "description": "Control Coolant System Gearbox intermittent Short-circuit to ground"
  },
  {
    "code": "P188000",
    "description": "Databus missing message from Diagnostic Interface ECU"
  },
  {
    "code": "P188100",
    "description": "Data Bus missing message"
  },
  {
    "code": "P188200",
    "description": "Databus drivetrain missing message from electrical brake system ECU"
  },
  {
    "code": "P188300",
    "description": "Park/Neutral Switch Input Circuit Implausible signal"
  },
  {
    "code": "P188400",
    "description": "Reversing light signal Short-circuit to ground"
  },
  {
    "code": "P188500",
    "description": "Reversing light signal Short circuit to B+"
  },
  {
    "code": "P188600",
    "description": "Reversing light signal Open circuit"
  },
  {
    "code": "P188700",
    "description": "Vehicle Speed Signal wheel speed from brake control module Implausible signal"
  },
  {
    "code": "P188800",
    "description": "valve for coolant system circuit Short circuit to B+"
  },
  {
    "code": "P188900",
    "description": "valve for coolant system circuit Short circuit to ground/open circuit"
  },
  {
    "code": "P188A00",
    "description": "Coolant shut-off valve Electrical malfunction"
  },
  {
    "code": "P189000",
    "description": "Signal wire for Tiptronic Electrical malfunction"
  },
  {
    "code": "P189100",
    "description": "Signal wire for Tiptronic Implausible signal"
  },
  {
    "code": "P189200",
    "description": "Selector lever position detection Defective"
  },
  {
    "code": "P189300",
    "description": "Signal wire for gear display in selector lever Electrical malfunction"
  },
  {
    "code": "P189400",
    "description": "Signal wire for gear display in selector lever Implausible signal"
  },
  {
    "code": "P189500",
    "description": "Function restriction due to pressure drop"
  },
  {
    "code": "P189600",
    "description": "Coupling 1 Temperature shock"
  },
  {
    "code": "P189700",
    "description": "Coupling 2 Temperature shock"
  },
  {
    "code": "P189800",
    "description": "Coupling 1 Function restriction"
  },
  {
    "code": "P189900",
    "description": "Coupling 2 Function restriction"
  },
  {
    "code": "P189A00",
    "description": "Coupling 1 Clearance too small"
  },
  {
    "code": "P189B00",
    "description": "Coupling 2 Clearance too small"
  },
  {
    "code": "P189C00",
    "description": "Function restriction due to insufficient pressure build-up"
  },
  {
    "code": "P190000",
    "description": "Fan 2 control circuit Open circuit/short circuit to ground"
  },
  {
    "code": "P190100",
    "description": "After-Run Coolant Fan Control (FC) Control Module -J138- Short circuit to B+"
  },
  {
    "code": "P190200",
    "description": "After-Run Coolant Fan Control (FC) Control Module -J138- Open circuit/short circuit to ground"
  },
  {
    "code": "P190300",
    "description": "Coolant Fan Valve -N313- Short circuit to B+"
  },
  {
    "code": "P190400",
    "description": "Coolant Fan Valve -N313- Open circuit/short circuit to ground"
  },
  {
    "code": "P190500",
    "description": "Charge Air Cooling Pump Relay -J536- Short circuit to B+"
  },
  {
    "code": "P190600",
    "description": "Charge Air Cooling Pump Relay -J536- Open circuit/short circuit to ground"
  },
  {
    "code": "P190700",
    "description": "Engine databus/engine Defective"
  },
  {
    "code": "P190800",
    "description": "Engine databus/engine Software version monitoring"
  },
  {
    "code": "P190900",
    "description": "Engine databus/engine Missing message from Engine Control Module (ECM) 1"
  },
  {
    "code": "P190A00",
    "description": "Coolant pump for charge pressure cooler Electrical malfunction"
  },
  {
    "code": "P190B00",
    "description": "Coolant pump for charge pressure cooler Temperature shut-off"
  },
  {
    "code": "P190C00",
    "description": "Coolant pump for charge pressure cooler No signal"
  },
  {
    "code": "P190D00",
    "description": "Coolant pump for charge pressure cooler Mechanical malfunction"
  },
  {
    "code": "P190E00",
    "description": "Coolant pump for charge pressure cooler Supply voltage"
  },
  {
    "code": "P190F00",
    "description": "Coolant pump for charge pressure cooler Electrical malfunction in load circuit"
  },
  {
    "code": "P191000",
    "description": "Engine databus/engine Missing message from Engine Control Module (ECM) 2"
  },
  {
    "code": "P191100",
    "description": "Synchronization wire engine/engine Electrical malfunction in circuit"
  },
  {
    "code": "P191200",
    "description": "Pressure sensor for brake booster Open circuit/short circuit to B+"
  },
  {
    "code": "P191300",
    "description": "Pressure sensor for brake booster Short-circuit to ground"
  },
  {
    "code": "P191400",
    "description": "Pressure sensor for brake booster Implausible signal"
  },
  {
    "code": "P191500",
    "description": "Coolant Circulation Pump Relay -J151 Short circuit to B+"
  },
  {
    "code": "P191600",
    "description": "Coolant Circulation Pump Relay -J151 Short-circuit to ground"
  },
  {
    "code": "P191700",
    "description": "Coolant Circulation Pump Relay -J151 Open circuit"
  },
  {
    "code": "P191800",
    "description": "Load signal from generator DF Open circuit/short circuit to B+"
  },
  {
    "code": "P191900",
    "description": "Load signal from generator DF Short-circuit to ground"
  },
  {
    "code": "P191A00",
    "description": "Loss of crankshaft synchronization"
  },
  {
    "code": "P191B00",
    "description": "Coolant Fan Control (FC) Control Module Implausible signal"
  },
  {
    "code": "P191C00",
    "description": "Control module 2 for cooling fan Implausible signal"
  },
  {
    "code": "P191D00",
    "description": "Coolant pump for charge pressure cooler Implausible signal"
  },
  {
    "code": "P191E00",
    "description": "Actuator for structure-borne noise"
  },
  {
    "code": "P191F00",
    "description": "Pressure sensor for brake booster Electrical malfunction"
  },
  {
    "code": "P192000",
    "description": "L/R Electr-Hydr Eng. Mount Sol Valve -N144/N145 Open circuit/short circuit to ground"
  },
  {
    "code": "P192100",
    "description": "Outside Air Temperature Sensor 2 -G249- Short-circuit to ground"
  },
  {
    "code": "P192200",
    "description": "Outside Air Temperature Sensor 2 -G249- Open circuit/short circuit to B+"
  },
  {
    "code": "P192300",
    "description": "Check DTC memory of Engine Control Module (ECM) 2"
  },
  {
    "code": "P192400",
    "description": "Control module pin coding Implausible signal"
  },
  {
    "code": "P192500",
    "description": "Auxiliary Engine Coolant (EC) Pump Relay Short circuit to B+"
  },
  {
    "code": "P192600",
    "description": "Auxiliary Engine Coolant (EC) Pump Relay Short-circuit to ground"
  },
  {
    "code": "P192700",
    "description": "Auxiliary Engine Coolant (EC) Pump Relay Open circuit"
  },
  {
    "code": "P192800",
    "description": "Immobilizer inquiry not yet performed"
  },
  {
    "code": "P192900",
    "description": "Radiator fan -V7 Open circuit"
  },
  {
    "code": "P193000",
    "description": "Coolant Fan -2- Open circuit"
  },
  {
    "code": "P193100",
    "description": "Coolant Fan Control (FC) Control Module -J293 Malfunction"
  },
  {
    "code": "P193200",
    "description": "Databus drivetrain implausible message from ctrl. for access start authorization"
  },
  {
    "code": "P193300",
    "description": "Throttle plate control 2 Malfunction"
  },
  {
    "code": "P193400",
    "description": "Drive Circuit Cooling Fan Temperature Sensor -G382- Signal too low"
  },
  {
    "code": "P193500",
    "description": "Drive Circuit Cooling Fan Temperature Sensor -G382- Signal too high"
  },
  {
    "code": "P193600",
    "description": "Generator switch off Open circuit/short circuit to ground"
  },
  {
    "code": "P193700",
    "description": "Generator switch off Short circuit to B+"
  },
  {
    "code": "P193800",
    "description": "Auxiliary Engine Coolant (EC) Pump Relay -J496 Open circuit/short circuit to ground"
  },
  {
    "code": "P193900",
    "description": "Databus drivetrain missing message from ctrl. for access start authorization"
  },
  {
    "code": "P194000",
    "description": "Databus drivetrain missing message f. battery monitoring control module"
  },
  {
    "code": "P194100",
    "description": "Databus drivetrain implausible message f. battery monitoring control module"
  },
  {
    "code": "P194200",
    "description": "Databus drivetrain missing message from level control system control module"
  },
  {
    "code": "P194300",
    "description": "Databus drivetrain implausible message from level control system control module"
  },
  {
    "code": "P194400",
    "description": "Control module 1 for cooling fan Excess temperature"
  },
  {
    "code": "P194500",
    "description": "Coolant Fan Control (FC) Control Module 1, fan activation Short circuit"
  },
  {
    "code": "P194600",
    "description": "Control module 1 for cooling fan Faulty/open circuit in voltage supply"
  },
  {
    "code": "P194700",
    "description": "Control module 2 for cooling fan Excess temperature"
  },
  {
    "code": "P194800",
    "description": "Coolant Fan Control (FC) Control Module 2, fan activation Short circuit"
  },
  {
    "code": "P194900",
    "description": "Control module 2 for cooling fan Faulty/open circuit in voltage supply"
  },
  {
    "code": "P195000",
    "description": "Radiator fan -V7 difficulty of movement/blocked"
  },
  {
    "code": "P195100",
    "description": "Coolant Fan -2- difficulty of movement/blocked"
  },
  {
    "code": "P195200",
    "description": "Turbocharger (TC) control module 1 Defective"
  },
  {
    "code": "P195300",
    "description": "Turbocharger (TC) control module 2 Defective"
  },
  {
    "code": "P195400",
    "description": "Glow Plug Module 2, Control Circuit Electrical malfunction in circuit"
  },
  {
    "code": "P195500",
    "description": "Glow Plug Control Module 2 to PCM Comm.Circuit Implausible signal"
  },
  {
    "code": "P195600",
    "description": "Exhaust temperature sensor 2 bank 1 Electrical malfunction"
  },
  {
    "code": "P195700",
    "description": "Exhaust temperature sensor 2 bank 1 Short-circuit to ground"
  },
  {
    "code": "P195800",
    "description": "Exhaust temperature sensor 2 bank 1 Short circuit to B+"
  },
  {
    "code": "P195900",
    "description": "Exhaust temperature sensor 2 bank 1 Implausible signal"
  },
  {
    "code": "P196000",
    "description": "Exhaust temperature control circuit exhaust bank 3 Value above upper control limit"
  },
  {
    "code": "P196100",
    "description": "Exhaust temperature sensor 2 bank 2 - G449 Electrical malfunction"
  },
  {
    "code": "P196200",
    "description": "Exhaust temperature sensor 2 bank 2 - G449 Short-circuit to ground"
  },
  {
    "code": "P196300",
    "description": "Exhaust temperature sensor 2 bank 2 - G449 Short circuit to B+"
  },
  {
    "code": "P196400",
    "description": "Exhaust temperature sensor 2 bank 2 - G449 Implausible signal"
  },
  {
    "code": "P196500",
    "description": "Exhaust temperature control circuit exhaust bank 4 Value above upper control limit"
  },
  {
    "code": "P196600",
    "description": "Sec.Air Inj.Sys.Pump C Relay Circ Open circuit"
  },
  {
    "code": "P196700",
    "description": "Sec.Air Inj.Sys.Pump C Relay Circ Short circuit to B+"
  },
  {
    "code": "P196800",
    "description": "Sec.Air Inj.Sys.Pump C Relay Circ Short-circuit to ground"
  },
  {
    "code": "P196900",
    "description": "Sec.Air Inj.Sys.Pump C Relay Circ electrical malfunction in circuit"
  },
  {
    "code": "P197000",
    "description": "Sec.Air Inj.Sys.Pump D Relay Circ Open circuit"
  },
  {
    "code": "P197100",
    "description": "Sec.Air Inj.Sys.Pump D Relay Circ Short circuit to B+"
  },
  {
    "code": "P197200",
    "description": "Sec.Air Inj.Sys.Pump D Relay Circ Short-circuit to ground"
  },
  {
    "code": "P197300",
    "description": "Sec.Air Inj.Sys.Pump D Relay Circ electrical malfunction in circuit"
  },
  {
    "code": "P197400",
    "description": "Sec.Air Inj.Valve 3 Circ electrical malfunction in circuit"
  },
  {
    "code": "P197500",
    "description": "Sec.Air Inj.Valve 3 Circ Short-circuit to ground"
  },
  {
    "code": "P197600",
    "description": "Sec.Air Inj.Valve 3 Circ Short circuit to B+"
  },
  {
    "code": "P197700",
    "description": "Sec.Air Inj.Valve 3 Circ Open circuit"
  },
  {
    "code": "P197800",
    "description": "Sec.Air Inj.Valve 4 Circ electrical malfunction in circuit"
  },
  {
    "code": "P197900",
    "description": "Sec.Air Inj.Valve 4 Circ Short-circuit to ground"
  },
  {
    "code": "P197A00",
    "description": "Sec.Air Inj.Valve 3 Circ Mechanical malfunction"
  },
  {
    "code": "P197B00",
    "description": "Sec.Air Inj.Valve 4 Circ Mechanical malfunction"
  },
  {
    "code": "P197C00",
    "description": "Secondary air injection bank 1 and bank 2 swapped"
  },
  {
    "code": "P198000",
    "description": "Sec.Air Inj.Valve 4 Circ Short circuit to B+"
  },
  {
    "code": "P198100",
    "description": "Sec.Air Inj.Valve 4 Circ Open circuit"
  },
  {
    "code": "P198200",
    "description": "Exhaust temperature control circuit exhaust bank 3 Implausible"
  },
  {
    "code": "P198300",
    "description": "Exhaust temperature control circuit exhaust bank 4 Implausible"
  },
  {
    "code": "P198400",
    "description": "Coolant fan 3 difficulty of movement/blocked"
  },
  {
    "code": "P198500",
    "description": "Coolant FC (Fan Control) Control Module 2 Malfunction"
  },
  {
    "code": "P198600",
    "description": "Coolant Fan Control (FC) Control Module 3, fan activation Short circuit"
  },
  {
    "code": "P198700",
    "description": "Function restriction due to brake temperature"
  },
  {
    "code": "P198800",
    "description": "Coolant Fan 3 Relay -J752- Open circuit"
  },
  {
    "code": "P198900",
    "description": "Coolant Fan 3 Relay -J752- Short circuit to B+"
  },
  {
    "code": "P199000",
    "description": "Coolant Fan 3 Relay -J752- Short-circuit to ground"
  },
  {
    "code": "P199100",
    "description": "Control module defective"
  },
  {
    "code": "P199200",
    "description": "Potentiometer 2 for EGR -G466- Malfunction in basic settings"
  },
  {
    "code": "P199300",
    "description": "Potentiometer 2 for EGR -G466- Signal too high"
  },
  {
    "code": "P199400",
    "description": "Potentiometer 2 for EGR -G466- Signal too low"
  },
  {
    "code": "P199500",
    "description": "Door open signal not recognized"
  },
  {
    "code": "P199600",
    "description": "Friction too high Code E1"
  },
  {
    "code": "P199700",
    "description": "Friction too high Code A1"
  },
  {
    "code": "P199800",
    "description": "Friction too high Code E2"
  },
  {
    "code": "P199900",
    "description": "Friction too high Code E2"
  },
  {
    "code": "P199A00",
    "description": "Temperature sensor for engine temperature management Signal too high"
  },
  {
    "code": "P199B00",
    "description": "Temperature sensor for engine temperature management Signal too low"
  },
  {
    "code": "P199C00",
    "description": "Thermostat for cylinder head Short-circuit to B+"
  },
  {
    "code": "P199D00",
    "description": "Thermostat for cylinder head Short circuit to ground"
  },
  {
    "code": "P199E00",
    "description": "Thermostat for cylinder head Open circuit"
  },
  {
    "code": "P199F00",
    "description": "Thermostat control for cylinder head Excess temperature"
  },
  {
    "code": "P19A000",
    "description": "Thermostat for transmission Short-circuit to B+"
  },
  {
    "code": "P19A100",
    "description": "Thermostat for transmission Short circuit to ground"
  },
  {
    "code": "P19A200",
    "description": "Thermostat for transmission Open circuit"
  },
  {
    "code": "P19A300",
    "description": "Thermostat control for transmission Excess temperature"
  },
  {
    "code": "P19A400",
    "description": "Actuator for engine temperature regulation Short-circuit to B+"
  },
  {
    "code": "P19A500",
    "description": "Actuator for engine temperature regulation Short circuit to ground"
  },
  {
    "code": "P19A600",
    "description": "Actuator for engine temperature regulation Open circuit"
  },
  {
    "code": "P1A0100",
    "description": "Crash signal monitoring failed"
  },
  {
    "code": "P1A0200",
    "description": "Hybrid battery system Insulation malfunction warning 1"
  },
  {
    "code": "P1A0300",
    "description": "Hybrid battery system Insulation malfunction warning 2"
  },
  {
    "code": "P1AFE00",
    "description": "Next output Diagnostic Test Mode (DTM) --> confirmation"
  },
  {
    "code": "P1AFF00",
    "description": "Actuator test end"
  },
  {
    "code": "P1B0000",
    "description": "Generator Mechanical malfunction"
  },
  {
    "code": "P1B0100",
    "description": "Generator Electrical malfunction"
  },
  {
    "code": "P1B0200",
    "description": "Control unit for battery monitoring Defective"
  },
  {
    "code": "P1B0300",
    "description": "Locking electronics solenoid Short-circuit to ground"
  },
  {
    "code": "P1B0400",
    "description": "Locking electronics solenoid Short circuit to B+"
  },
  {
    "code": "P1B0500",
    "description": "Locking electronics solenoid Open circuit"
  },
  {
    "code": "P1B0600",
    "description": "Locking electronics solenoid Resistance too small"
  },
  {
    "code": "P1B0700",
    "description": "Locking electronics solenoid Short circuit between coil A and B"
  },
  {
    "code": "P1B0800",
    "description": "Locking electronics switch Short-circuit to ground"
  },
  {
    "code": "P1B0900",
    "description": "Locking electronics sensor Short circuit to ground"
  },
  {
    "code": "P1B0A00",
    "description": "Locking electronics sensor Defective"
  },
  {
    "code": "P1B0B00",
    "description": "Locking electronics sensor Open circuit/short circuit to B+"
  },
  {
    "code": "P1B0C00",
    "description": "Lock hardware Mechanical malfunction"
  },
  {
    "code": "P200000",
    "description": "NOx Adsorber Efficiency Bank 1 Below Threshold"
  },
  {
    "code": "P200200",
    "description": "Particulate Trap Bank 1 Efficiency Below Threshold"
  },
  {
    "code": "P200300",
    "description": "Particulate Trap Bank 2 Efficiency Below Threshold"
  },
  {
    "code": "P200400",
    "description": "Intake Manifold Runner Control Bank 1 Stuck Open"
  },
  {
    "code": "P200500",
    "description": "Intake Manifold Runner Control Bank 2 Stuck Open"
  },
  {
    "code": "P200600",
    "description": "Intake Manifold Runner Control Bank 1 Stuck Closed"
  },
  {
    "code": "P200700",
    "description": "Intake Manifold Runner Control Bank 2 Stuck Closed"
  },
  {
    "code": "P200800",
    "description": "Intake Manifold Runner Bank 1 Control Circuit/Open"
  },
  {
    "code": "P200900",
    "description": "Intake Manifold Runner Bank 1 Control Circuit Low"
  },
  {
    "code": "P200A00",
    "description": "Intake Manifold Runner Bank 1 Performance"
  },
  {
    "code": "P200B00",
    "description": "Intake Manifold Runner Bank 2 Performance"
  },
  {
    "code": "P201000",
    "description": "Intake Manifold Runner Bank 1 Control Circuit High"
  },
  {
    "code": "P201100",
    "description": "Intake Manifold Runner Bank 2 Control Circuit/Open"
  },
  {
    "code": "P201200",
    "description": "Intake Manifold Runner Bank 2 Control Circuit Low"
  },
  {
    "code": "P201300",
    "description": "Intake Manifold Runner Bank 2 Control Circuit High"
  },
  {
    "code": "P201400",
    "description": "Intake Manifold Runner Position Sensor/Switch Circuit"
  },
  {
    "code": "P201500",
    "description": "Intake Manifold Runner Position Sensor/Switch Circuit Range/Performance"
  },
  {
    "code": "P201600",
    "description": "Intake Manifold Runner Position Sensor/Switch Circuit Low"
  },
  {
    "code": "P201700",
    "description": "Intake Manifold Runner Position Sensor/Switch Circuit High"
  },
  {
    "code": "P201900",
    "description": "Intake Manifold Runner Position Sensor/Switch Circuit Bank 2"
  },
  {
    "code": "P202000",
    "description": "Intake Manifold Runner Pos. Sen./Switch Circuit Bank 2 Range/Performance"
  },
  {
    "code": "P202100",
    "description": "Intake Manifold Runner Pos. Sen./Switch Circuit Bank 2 Low"
  },
  {
    "code": "P202200",
    "description": "Intake Manifold Runner Pos. Sen./Switch Circuit Bank 2 High"
  },
  {
    "code": "P202400",
    "description": "Evaporative Emissions (EVAP) Fuel Vapor Temperature Sensor Circuit"
  },
  {
    "code": "P202500",
    "description": "Evaporative Emissions (EVAP) Fuel Vapor Temperature Sensor Performance"
  },
  {
    "code": "P202600",
    "description": "Evaporative Emissions (EVAP) Fuel Vapor Temperature Sensor Circuit Low Voltage"
  },
  {
    "code": "P202700",
    "description": "Evaporative Emissions (EVAP) Fuel Vapor Temperature Sensor Circuit High Voltage"
  },
  {
    "code": "P202A00",
    "description": "Reductant Tank Heater Control Circuit/Open"
  },
  {
    "code": "P202B00",
    "description": "Reductant Tank Heater Control Circuit Low"
  },
  {
    "code": "P202C00",
    "description": "Reductant Tank Heater Control Circuit High"
  },
  {
    "code": "P203100",
    "description": "Exhaust Gas Temperature Sensor 2, Bank 1 Circuit"
  },
  {
    "code": "P203200",
    "description": "Exhaust Gas Temperature Sensor 2, Bank 1 Circuit Low"
  },
  {
    "code": "P203300",
    "description": "Exhaust Gas Temperature Sensor 2, Bank 1 Circuit High"
  },
  {
    "code": "P203400",
    "description": "Exhaust Gas Temperature Sensor 2 Bank 2 Circuit"
  },
  {
    "code": "P203500",
    "description": "Exhaust Gas Temperature Sensor 2 Bank 2 Circuit Low"
  },
  {
    "code": "P203600",
    "description": "Exhaust Gas Temperature Sensor 2 Bank 2 Circuit High"
  },
  {
    "code": "P203A00",
    "description": "Reductant Level Sensor Circuit"
  },
  {
    "code": "P203B00",
    "description": "Reductant Level Sensor Circuit Range/Performance"
  },
  {
    "code": "P203C00",
    "description": "Reductant Level Sensor Circuit Low"
  },
  {
    "code": "P203D00",
    "description": "Reductant Level Sensor Circuit High"
  },
  {
    "code": "P204700",
    "description": "Reductant Injection Valve Circuit/Open Bank 1 Unit 1"
  },
  {
    "code": "P204800",
    "description": "Reductant Injection Valve Circuit Low Bank 1 Unit 1"
  },
  {
    "code": "P204900",
    "description": "Reductant Injection Valve Circuit High Bank 1 Unit 1"
  },
  {
    "code": "P204A00",
    "description": "Reductant Pressure Sensor Circuit"
  },
  {
    "code": "P204B00",
    "description": "Reductant Pressure Sensor Circuit Range/Performance"
  },
  {
    "code": "P204D00",
    "description": "Reductant Pressure Sensor Circuit High"
  },
  {
    "code": "P205A00",
    "description": "Reductant Tank Temperature Sensor Circuit"
  },
  {
    "code": "P205B00",
    "description": "Reductant Tank Temperature Sensor Circuit Range/Performance"
  },
  {
    "code": "P205C00",
    "description": "Reductant Tank Temperature Sensor Circuit Low"
  },
  {
    "code": "P207000",
    "description": "Intake Manifold Tuning (IMT) Valve Stuck Open"
  },
  {
    "code": "P207100",
    "description": "Intake Manifold Tuning (IMT) Valve Stuck Closed"
  },
  {
    "code": "P207300",
    "description": "Manifold Absolute Pressure/Mass Air Flow - Throttle Position Correlation at Idle"
  },
  {
    "code": "P207400",
    "description": "Manifold Absolute Pressure/Mass Air Flow - Throttle Position Correlation at Higher Load"
  },
  {
    "code": "P207500",
    "description": "Intake Manifold Tuning (IMT) Valve Position Sensor/Switch Circuit"
  },
  {
    "code": "P207600",
    "description": "Intake Manifold Tuning (IMT) Valve Position Sensor/Switch Circuit Range/Performance"
  },
  {
    "code": "P207700",
    "description": "Intake Manifold Tuning (IMT) Valve Position Sensor/Switch Circuit Low"
  },
  {
    "code": "P207800",
    "description": "Intake Manifold Tuning (IMT) Valve Position Sensor/Switch Circuit High"
  },
  {
    "code": "P207900",
    "description": "Intake Manifold Tuning (IMT) Valve Position Sensor/Switch Circuit Intermittent"
  },
  {
    "code": "P207F00",
    "description": "Reductant Quality Performance"
  },
  {
    "code": "P208000",
    "description": "Exhaust Gas Temperature Sensor Circuit Bank1 Range/Performance"
  },
  {
    "code": "P208200",
    "description": "Exhaust Gas Temperature Sensor Circuit Bank2 Range/Performance"
  },
  {
    "code": "P208400",
    "description": "Exhaust Gas Temperature Sensor 2 Circuit Range/Performance"
  },
  {
    "code": "P208600",
    "description": "Exhaust Gas Temperature Sensor 2 Circuit Bank 2 Range/Performance"
  },
  {
    "code": "P208800",
    "description": "A Camshaft Position Actuator Control Circuit Low - Bank 1"
  },
  {
    "code": "P208900",
    "description": "A Camshaft Position Actuator Control Circuit High - Bank 1"
  },
  {
    "code": "P208A00",
    "description": "Reductant Pump \"A\" Control Circuit/Open"
  },
  {
    "code": "P208B00",
    "description": "Reductant Pump \"A\" Control Range/Performance"
  },
  {
    "code": "P208C00",
    "description": "Reductant Pump \"A\" Control Circuit Low"
  },
  {
    "code": "P208D00",
    "description": "Reductant Pump \"A\" Control Circuit High"
  },
  {
    "code": "P208E00",
    "description": "Reductant Injection Valve Stuck Closed Bank 1 Unit 1"
  },
  {
    "code": "P209000",
    "description": "B Camshaft Position Actuator Control Circuit(Bank1) Low"
  },
  {
    "code": "P209100",
    "description": "B Camshaft Position Actuator Control Circuit(Bank1) High"
  },
  {
    "code": "P209200",
    "description": "A Camshaft Position Actuator Control Circuit(Bank2) Low"
  },
  {
    "code": "P209300",
    "description": "A Camshaft Position Actuator Control Circuit(Bank2) High"
  },
  {
    "code": "P209400",
    "description": "B Camshaft Position Actuator Control Circuit(Bank2) Low"
  },
  {
    "code": "P209500",
    "description": "B Camshaft Position Actuator Control Circuit(Bank2) High"
  },
  {
    "code": "P209600",
    "description": "Post Catalyst Fuel Trim System Bank1 Too Lean"
  },
  {
    "code": "P209700",
    "description": "Post Catalyst Fuel Trim System Bank 1 Too Rich"
  },
  {
    "code": "P209800",
    "description": "Post Catalyst Fuel Trim System Bank 2 Too Lean"
  },
  {
    "code": "P209900",
    "description": "Post Catalyst Fuel Trim System Bank2 Too Rich"
  },
  {
    "code": "P209F00",
    "description": "Reductant Tank Heater Control Circuit Performance"
  },
  {
    "code": "P20A000",
    "description": "Reductant Purge Control Valve Circuit /Open"
  },
  {
    "code": "P20A200",
    "description": "Reductant Purge Control Valve Circuit Low"
  },
  {
    "code": "P20A300",
    "description": "Reductant Purge Control Valve Circuit High"
  },
  {
    "code": "P20A500",
    "description": "Reductant Purge Control Valve Stuck Closed"
  },
  {
    "code": "P20B500",
    "description": "Reductant Metering Unit Heater Control Circuit/Open"
  },
  {
    "code": "P20B700",
    "description": "Reductant Metering Unit Heater Control Circuit Low"
  },
  {
    "code": "P20B800",
    "description": "Reductant Metering Unit Heater Control Circuit High"
  },
  {
    "code": "P20B900",
    "description": "Reductant Heater \"A\" Control Circuit/Open"
  },
  {
    "code": "P20BB00",
    "description": "Reductant Heater \"A\" Control Circuit Low"
  },
  {
    "code": "P20BC00",
    "description": "Reductant Heater \"A\" Control Circuit High"
  },
  {
    "code": "P20BD00",
    "description": "Reductant Heater \"B\" Control Circuit/Open"
  },
  {
    "code": "P20BF00",
    "description": "Reductant Heater \"B\" Control Circuit Low"
  },
  {
    "code": "P20C000",
    "description": "Reductant Heater \"B\" Control Circuit High"
  },
  {
    "code": "P20D800",
    "description": "Exhaust Aftertreatment Fuel Supply Control Performance"
  },
  {
    "code": "P20E800",
    "description": "Reductant Pressure Too Low"
  },
  {
    "code": "P20E900",
    "description": "Reductant Pressure Too High"
  },
  {
    "code": "P20EE00",
    "description": "SCR NOx Catalyst Efficiency Below Threshold Bank 1"
  },
  {
    "code": "P20F400",
    "description": "Reductant Consumption Too Low"
  },
  {
    "code": "P20F500",
    "description": "Reductant Consumption Too High"
  },
  {
    "code": "P210000",
    "description": "Throttle Actuator Control Motor Circuit/Open"
  },
  {
    "code": "P210100",
    "description": "Throttle Actuator Control Motor Circuit Range/performance"
  },
  {
    "code": "P210200",
    "description": "Throttle Actuator Control Motor Circuit Low"
  },
  {
    "code": "P210300",
    "description": "Throttle Actuator \"A\" Control Motor Circuit High"
  },
  {
    "code": "P210600",
    "description": "Throttle Actuator Control System Forced Limited Power"
  },
  {
    "code": "P210800",
    "description": "Throttle Actuator Control Module Performance"
  },
  {
    "code": "P210A00",
    "description": "Throttle Actuator \"B\" Control Motor Circuit/Open"
  },
  {
    "code": "P210B00",
    "description": "Throttle Actuator \"B\" Control Motor Circuit Range/Performance"
  },
  {
    "code": "P210C00",
    "description": "Throttle Actuator \"B\" Control Motor Circuit Low"
  },
  {
    "code": "P210D00",
    "description": "Throttle Actuator \"B\" Control Motor Circuit High"
  },
  {
    "code": "P211000",
    "description": "Throttle Actuator Control System - Forced Limited RPM"
  },
  {
    "code": "P211100",
    "description": "Throttle Actuator Control System - Stuck Open"
  },
  {
    "code": "P211200",
    "description": "Throttle Actuator Control System - Stuck closed"
  },
  {
    "code": "P211900",
    "description": "Throttle Actuator Control Throttle Body Range/Performance"
  },
  {
    "code": "P212200",
    "description": "Throttle/Pedal Pos. Sens./Switch D Circuit Low Input"
  },
  {
    "code": "P212300",
    "description": "Throttle/Pedal Pos. Sens./Switch D Circuit High Input"
  },
  {
    "code": "P212700",
    "description": "Throttle/Pedal Pos. Sens./Switch E Circuit Low Input"
  },
  {
    "code": "P212800",
    "description": "Throttle/Pedal Pos. Sens./Switch E Circuit High Input"
  },
  {
    "code": "P212B00",
    "description": "Throttle Position Sensor/Switch \"G\" Circuit Range/Performance"
  },
  {
    "code": "P212C00",
    "description": "Throttle Position Sensor/Switch \"G\" Circuit Low"
  },
  {
    "code": "P212D00",
    "description": "Throttle Position Sensor/Switch \"G\" Circuit High"
  },
  {
    "code": "P213100",
    "description": "Throttle/Pedal Position Sensor/Switch \"F\" Circuit Range/Performance"
  },
  {
    "code": "P213200",
    "description": "Throttle/Pedal Position Sensor/Switch \"F\" Circuit Low"
  },
  {
    "code": "P213300",
    "description": "Throttle/Pedal Position Sensor/Switch \"F\" Circuit High"
  },
  {
    "code": "P213500",
    "description": "Throttle/Pedal Position Sensor/Switch \"A\"/\"B\" Voltage Correlation"
  },
  {
    "code": "P213800",
    "description": "Throttle/Pedal Position Sensor/Switch D/E Voltage Correlation"
  },
  {
    "code": "P214600",
    "description": "Fuel Injector Group \"A\" Supply Voltage Circuit Open"
  },
  {
    "code": "P214700",
    "description": "Fuel Injector Group \"A\" Supply Voltage Circuit Low"
  },
  {
    "code": "P214800",
    "description": "Fuel Injector Group \"A\" Supply Voltage Circuit High"
  },
  {
    "code": "P214900",
    "description": "Fuel Injector Group \"B\" Supply Voltage Circuit Open"
  },
  {
    "code": "P215000",
    "description": "Fuel Injector Group \"B\" Supply Voltage Circuit Low"
  },
  {
    "code": "P215100",
    "description": "Fuel Injector Group \"B\" Supply Voltage Circuit High"
  },
  {
    "code": "P215200",
    "description": "Fuel Injector Group \"C\" Supply Voltage Circuit/Open"
  },
  {
    "code": "P215300",
    "description": "Fuel Injector Group \"C\" Supply Voltage Circuit Low"
  },
  {
    "code": "P215400",
    "description": "Fuel Injector Group \"C\" Supply Voltage Circuit High"
  },
  {
    "code": "P215500",
    "description": "Fuel Injector Group \"D\" Supply Voltage Circuit/Open"
  },
  {
    "code": "P215600",
    "description": "Fuel Injector Group \"D\" Supply Voltage Circuit Low"
  },
  {
    "code": "P215700",
    "description": "Fuel Injector Group \"D\" Supply Voltage Circuit High"
  },
  {
    "code": "P215900",
    "description": "Vehicle Speed Sensor \"B\" Range/Performance"
  },
  {
    "code": "P216A00",
    "description": "Fuel Injector Group \"E\" Supply Voltage Circuit/Open"
  },
  {
    "code": "P216B00",
    "description": "Fuel Injector Group \"E\" Supply Voltage Circuit/Low"
  },
  {
    "code": "P216C00",
    "description": "Fuel Injector Group \"E\" Supply Voltage Circuit/High"
  },
  {
    "code": "P216D00",
    "description": "Fuel Injector Group \"F\" Supply Voltage Circuit/Open"
  },
  {
    "code": "P216E00",
    "description": "Fuel Injector Group \"F\" Supply Voltage Circuit/Low"
  },
  {
    "code": "P216F00",
    "description": "Fuel Injector Group \"F\" Supply Voltage Circuit/High"
  },
  {
    "code": "P217300",
    "description": "Throttle Actuator Control System - High Airflow Detected"
  },
  {
    "code": "P217500",
    "description": "Throttle Actuator Control System - Low Airflow Detected"
  },
  {
    "code": "P217700",
    "description": "System too lean off idle, Bank 1"
  },
  {
    "code": "P217800",
    "description": "System too rich off idle, Bank 1"
  },
  {
    "code": "P217900",
    "description": "System too lean off idle, Bank 2"
  },
  {
    "code": "P218000",
    "description": "System too rich off idle, Bank 2"
  },
  {
    "code": "P218100",
    "description": "Cooling System Performance"
  },
  {
    "code": "P218300",
    "description": "Engine Coolant Temperature Sensor 2 Circuit Range/Performance"
  },
  {
    "code": "P218400",
    "description": "Engine Coolant Temperature Sensor 2 Circuit Low"
  },
  {
    "code": "P218500",
    "description": "Engine Coolant Temperature Sensor 2 Circuit High"
  },
  {
    "code": "P218700",
    "description": "System too lean at idle, Bank 1"
  },
  {
    "code": "P218800",
    "description": "System too rich at idle, Bank 1"
  },
  {
    "code": "P218900",
    "description": "System too lean at idle, Bank 2"
  },
  {
    "code": "P219000",
    "description": "System too rich at idle, Bank 2"
  },
  {
    "code": "P219100",
    "description": "System Too Lean at Higher Load; Bank 1"
  },
  {
    "code": "P219200",
    "description": "System Too Rich at Higher Load; Bank 1"
  },
  {
    "code": "P219300",
    "description": "System Too Lean at Higher Load; Bank 2"
  },
  {
    "code": "P219400",
    "description": "System Too Rich at Higher Load; Bank 2"
  },
  {
    "code": "P219500",
    "description": "O2 Sensor Signal Stuck Lean Bank 1 Sensor 1"
  },
  {
    "code": "P219600",
    "description": "O2 Sensor Signal Stuck Rich Bank 1 Sensor 1"
  },
  {
    "code": "P219700",
    "description": "O2 Sensor Signal Stuck Lean Bank 2 Sensor 1"
  },
  {
    "code": "P219800",
    "description": "O2 Sensor Signal Stuck Rich Bank 2 Sensor 1"
  },
  {
    "code": "P219900",
    "description": "Intake Air Temperature Sensor 1/2 Correlation"
  },
  {
    "code": "P219A00",
    "description": "Bank 1 Air-Fuel Ratio Imbalance"
  },
  {
    "code": "P219B00",
    "description": "Bank 2 Air-Fuel Ratio Imbalance"
  },
  {
    "code": "P219C00",
    "description": "Cylinder 1 Air-Fuel Ratio Imbalance"
  },
  {
    "code": "P219D00",
    "description": "Cylinder 2 Air-Fuel Ratio Imbalance"
  },
  {
    "code": "P219E00",
    "description": "Cylinder 3 Air-Fuel Ratio Imbalance"
  },
  {
    "code": "P219F00",
    "description": "Cylinder 4 Air-Fuel Ratio Imbalance"
  },
  {
    "code": "P21A000",
    "description": "Cylinder 5 Air-Fuel Ratio Imbalance"
  },
  {
    "code": "P21A100",
    "description": "Cylinder 6 Air-Fuel Ratio Imbalance"
  },
  {
    "code": "P21A200",
    "description": "Cylinder 7 Air-Fuel Ratio Imbalance"
  },
  {
    "code": "P21A300",
    "description": "Cylinder 8 Air-Fuel Ratio Imbalance"
  },
  {
    "code": "P21A400",
    "description": "Cylinder 9 Air-Fuel Ratio Imbalance"
  },
  {
    "code": "P21A500",
    "description": "Cylinder 10 Air-Fuel Ratio Imbalance"
  },
  {
    "code": "P21A600",
    "description": "Cylinder 11 Air-Fuel Ratio Imbalance"
  },
  {
    "code": "P21A700",
    "description": "Cylinder 12 Air-Fuel Ratio Imbalance"
  },
  {
    "code": "P220000",
    "description": "NOx Sensor Bank 1 Sensor 1 Circuit"
  },
  {
    "code": "P220100",
    "description": "NOx Sensor Circuit Range/Performance Bank 1 Sensor 1"
  },
  {
    "code": "P220200",
    "description": "NOx Sensor Bank 1 Sensor 1 Circuit Low"
  },
  {
    "code": "P220300",
    "description": "NOx Sensor Bank 1 Sensor 1 Circuit High"
  },
  {
    "code": "P220900",
    "description": "NOx Sensor Heater Sense Bank 1 Sensor 1 Circuit Range/Performance"
  },
  {
    "code": "P220A00",
    "description": "NOx Sensor Supply Voltage Bank 1 Sensor 1 Circuit"
  },
  {
    "code": "P220B00",
    "description": "NOx Sensor Supply Voltage Bank 1 Sensor 2 Circuit"
  },
  {
    "code": "P222700",
    "description": "Barometric Pressure Circuit Range/Performance"
  },
  {
    "code": "P222800",
    "description": "Barometric Pressure Circuit Low"
  },
  {
    "code": "P222900",
    "description": "Barometric Pressure Circuit high"
  },
  {
    "code": "P223100",
    "description": "O2 Sensor Bank 1 Sensor 1 Signal Circuit Shorted to Heater Circuit"
  },
  {
    "code": "P223200",
    "description": "O2 Sensor Bank 1 Sensor 2 Signal Circuit Shorted to Heater Circuit"
  },
  {
    "code": "P223300",
    "description": "O2 Sensor Bank 1 Sensor 3 Signal Circuit Shorted to Heater Circuit"
  },
  {
    "code": "P223400",
    "description": "O2 Sensor Bank 2 Sensor 1 Signal Circuit Shorted to Heater Circuit"
  },
  {
    "code": "P223500",
    "description": "O2 Sensor Bank 2 Sensor 2 Signal Circuit Shorted to Heater Circuit"
  },
  {
    "code": "P223600",
    "description": "O2 Sensor Bank 2 Sensor 3 Signal Circuit Shorted to Heater Circuit"
  },
  {
    "code": "P223700",
    "description": "O2 Sensor Positive Current Control Circuit Bank 1 Sensor 1 Open"
  },
  {
    "code": "P223800",
    "description": "O2 Sensor Positive Current Control Circuit Bank 1 Sensor 1 Low"
  },
  {
    "code": "P223900",
    "description": "O2 Sensor Positive Current Control Circuit Bank 1 Sensor 1 High"
  },
  {
    "code": "P224000",
    "description": "O2 Sensor Positive Current Control Circuit Bank 2 Sensor 1 Open"
  },
  {
    "code": "P224100",
    "description": "O2 Sensor Positive Current Control Circuit Bank 2 Sensor 1 Low"
  },
  {
    "code": "P224200",
    "description": "O2 Sensor Positive Current Control Circuit Bank 2 Sensor 1 High"
  },
  {
    "code": "P224300",
    "description": "O2 Sensor Reference Voltage Circuit Bank 1 Sensor 1 Open"
  },
  {
    "code": "P224400",
    "description": "O2 Sensor Reference Voltage Bank 1 Sensor 1 Performance"
  },
  {
    "code": "P224500",
    "description": "O2 Sensor Reference Voltage Circuit Bank 1 Sensor 1 Low"
  },
  {
    "code": "P224600",
    "description": "O2 Sensor Reference Voltage Circuit Bank 1 Sensor 1 High"
  },
  {
    "code": "P224700",
    "description": "O2 Sensor Reference Voltage Circuit Bank 2 Sensor 1 Open"
  },
  {
    "code": "P224800",
    "description": "O2 Sensor Reference Voltage Bank 2 Sensor 1 Performance"
  },
  {
    "code": "P224900",
    "description": "O2 Sensor Reference Voltage Circuit Bank 2 Sensor 1 Low"
  },
  {
    "code": "P225000",
    "description": "O2 Sensor Reference Voltage Circuit Bank 2 Sensor 1 High"
  },
  {
    "code": "P225100",
    "description": "O2 Sensor Negative Current Control Circuit Bank 1 Sensor 1 open"
  },
  {
    "code": "P225200",
    "description": "O2 Sensor Negative Current Control Circuit Bank 1 Sensor 1 Low"
  },
  {
    "code": "P225300",
    "description": "O2 Sensor Negative Current Control Circuit Bank 1 Sensor 1 High"
  },
  {
    "code": "P225400",
    "description": "O2 Sensor Negative Current Control Circuit Bank 2 Sensor 1 open"
  },
  {
    "code": "P225500",
    "description": "O2 Sensor Negative Current Control Circuit Bank 2 Sensor 1 Low"
  },
  {
    "code": "P225600",
    "description": "O2 Sensor Negative Current Control Circuit Bank 2 Sensor 1 High"
  },
  {
    "code": "P225700",
    "description": "Secondary air injektion System Control \"A\" Circuit low"
  },
  {
    "code": "P225800",
    "description": "Secondary air injektion System Control \"A\" Circuit high"
  },
  {
    "code": "P226100",
    "description": "Turbo Boost Pressure Not Detected Mechanical"
  },
  {
    "code": "P226200",
    "description": "Turbocharger/Supercharger Boost Pressure Not Detected Mechanical"
  },
  {
    "code": "P226300",
    "description": "Turbocharger/Supercharger Boost System Performance"
  },
  {
    "code": "P227000",
    "description": "O2 Sensor Signal Stuck Lean; Bank 1 Sensor 2"
  },
  {
    "code": "P227100",
    "description": "O2 Sensor Signal Stuck Rich; Bank 1 Sensor 2"
  },
  {
    "code": "P227200",
    "description": "O2 Sensor Signal Stuck Lean; Bank 2 Sensor 2"
  },
  {
    "code": "P227300",
    "description": "O2 Sensor Signal Stuck Rich; Bank 2 Sensor 2"
  },
  {
    "code": "P227400",
    "description": "O2 Sensor Signal Stuck Lean; Bank 1 Sensor 3"
  },
  {
    "code": "P227500",
    "description": "O2 Sensor Signal Stuck Rich; Bank 1 Sensor 3"
  },
  {
    "code": "P227600",
    "description": "O2 Sensor Signal Stuck Lean; Bank 2 Sensor 3"
  },
  {
    "code": "P227700",
    "description": "O2 Sensor Signal Stuck Rich; Bank 2 Sensor 3"
  },
  {
    "code": "P227800",
    "description": "O2 Sensor Signals Swapped Bank 1 Sensor 3 / Bank 2 Sensor 3"
  },
  {
    "code": "P227900",
    "description": "Intake Air System Leak"
  },
  {
    "code": "P228C00",
    "description": "Fuel Pressure Regulator 1 Exceeded Control Limits Pressure Too Low"
  },
  {
    "code": "P228D00",
    "description": "Fuel Pressure Regulator 1 Exceeded Control Limits Pressure Too High"
  },
  {
    "code": "P228E00",
    "description": "Fuel Pressure Regulator 1 Exceeded Learning Limits Too Low"
  },
  {
    "code": "P228F00",
    "description": "Fuel Pressure Regulator 1 Exceeded Learning Limits Too High"
  },
  {
    "code": "P229300",
    "description": "Fuel Pressure Regulator 2 Performance"
  },
  {
    "code": "P229400",
    "description": "Fuel Pressure Regulator 2 Control Circuit"
  },
  {
    "code": "P229500",
    "description": "Fuel Pressure Regulator 2 Control Circuit Low"
  },
  {
    "code": "P229600",
    "description": "Fuel Pressure Regulator 2 Control Circuit High"
  },
  {
    "code": "P229700",
    "description": "02 Sensor Bank 1 Sensor 1 Out of Range During Deceleration"
  },
  {
    "code": "P229800",
    "description": "02 Sensor Bank 2 Sensor 1 Out of Range During Deceleration"
  },
  {
    "code": "P229A00",
    "description": "Fuel Pressure Regulator 2 Exceeded Control Limits Pressure Too Low"
  },
  {
    "code": "P229B00",
    "description": "Fuel Pressure Regulator 2 Exceeded Control Limits Pressure Too High"
  },
  {
    "code": "P229E00",
    "description": "NOx Sensor Bank 1 Sensor 2 Circuit"
  },
  {
    "code": "P229F00",
    "description": "NOx Sensor Circuit Range/Performance Bank 1 Sensor 2"
  },
  {
    "code": "P22A000",
    "description": "NOx Sensor Bank 1 Sensor 2 Circuit Low"
  },
  {
    "code": "P22A100",
    "description": "NOx Sensor Bank 1 Sensor 2 Circuit High"
  },
  {
    "code": "P22A700",
    "description": "NOx Sensor Heater Sense Bank 1 Sensor 2 Circuit Range/Performance"
  },
  {
    "code": "P230000",
    "description": "Ignition Coil \"A\" Primary Control Circuit Low"
  },
  {
    "code": "P230100",
    "description": "Ignition Coil \"A\" Primary Control Circuit High"
  },
  {
    "code": "P230200",
    "description": "Ignition Coil \"A\" Secondary Circuit"
  },
  {
    "code": "P230300",
    "description": "Ignition Coil \"B\" Primary Control Circuit Low"
  },
  {
    "code": "P230400",
    "description": "Ignition Coil \"B\" Primary Control Circuit High"
  },
  {
    "code": "P230500",
    "description": "Ignition Coil \"B\" Secondary Circuit"
  },
  {
    "code": "P230600",
    "description": "Ignition Coil \"C\" Primary Control Circuit Low"
  },
  {
    "code": "P230700",
    "description": "Ignition Coil \"C\" Primary Control Circuit High"
  },
  {
    "code": "P230800",
    "description": "Ignition Coil \"C\" Secondary Circuit"
  },
  {
    "code": "P230900",
    "description": "Ignition Coil \"D\" Primary Control Circuit Low"
  },
  {
    "code": "P231000",
    "description": "Ignition Coil \"D\" Primary Control Circuit High"
  },
  {
    "code": "P231100",
    "description": "Ignition Coil \"D\" Secondary Circuit"
  },
  {
    "code": "P231200",
    "description": "Ignition Coil \"E\" Primary Control Circuit Low"
  },
  {
    "code": "P231300",
    "description": "Ignition Coil \"E\" Primary Control Circuit High"
  },
  {
    "code": "P231400",
    "description": "Ignition Coil \"E\" Secondary Circuit"
  },
  {
    "code": "P231500",
    "description": "Ignition Coil \"F\" Primary Control Circuit Low"
  },
  {
    "code": "P231600",
    "description": "Ignition Coil \"F\" Primary Control Circuit High"
  },
  {
    "code": "P231700",
    "description": "Ignition Coil \"F\" Secondary Circuit"
  },
  {
    "code": "P231800",
    "description": "Ignition Coil \"G\" Primary Control Circuit Low"
  },
  {
    "code": "P231900",
    "description": "Ignition Coil \"G\" Primary Control Circuit High"
  },
  {
    "code": "P232000",
    "description": "Ignition Coil \"G\" Secondary Circuit"
  },
  {
    "code": "P232100",
    "description": "Ignition Coil \"H\" Primary Control Circuit Low"
  },
  {
    "code": "P232200",
    "description": "Ignition Coil \"H\" Primary Control Circuit High"
  },
  {
    "code": "P232300",
    "description": "Ignition Coil \"H\" Secondary Circuit"
  },
  {
    "code": "P232400",
    "description": "Ignition Coil \"I\" Primary Control Circuit Low"
  },
  {
    "code": "P232500",
    "description": "Ignition Coil \"I\" Primary Control Circuit High"
  },
  {
    "code": "P232600",
    "description": "Ignition Coil \"I\" Secondary Circuit"
  },
  {
    "code": "P232700",
    "description": "Ignition Coil \"J\" Primary Control Circuit Low"
  },
  {
    "code": "P232800",
    "description": "Ignition Coil \"J\" Primary Control Circuit High"
  },
  {
    "code": "P232900",
    "description": "Ignition Coil \"J\" Secondary Circuit"
  },
  {
    "code": "P233000",
    "description": "Ignition Coil \"K\" Primary Control Circuit Low"
  },
  {
    "code": "P233100",
    "description": "Ignition Coil \"K\" Primary Control Circuit High"
  },
  {
    "code": "P233200",
    "description": "Ignition Coil \"K\" Secondary Circuit"
  },
  {
    "code": "P233300",
    "description": "Ignition Coil \"L\" Primary Control Circuit Low"
  },
  {
    "code": "P233400",
    "description": "Ignition Coil \"L\" Primary Control Circuit High"
  },
  {
    "code": "P233500",
    "description": "Ignition Coil \"L\" Secondary Circuit"
  },
  {
    "code": "P233600",
    "description": "Cylinder #1 Above Knock Threshold"
  },
  {
    "code": "P233700",
    "description": "Cylinder #2 Above Knock Threshold"
  },
  {
    "code": "P233800",
    "description": "Cylinder #3 Above Knock Threshold"
  },
  {
    "code": "P233900",
    "description": "Cylinder #4 Above Knock Threshold"
  },
  {
    "code": "P234000",
    "description": "Cylinder #5 Above Knock Threshold"
  },
  {
    "code": "P234100",
    "description": "Cylinder #6 Above Knock Threshold"
  },
  {
    "code": "P234200",
    "description": "Cylinder #7 Above Knock Threshold"
  },
  {
    "code": "P234300",
    "description": "Cylinder #8 Above Knock Threshold"
  },
  {
    "code": "P234400",
    "description": "Cylinder #9 Above Knock Threshold"
  },
  {
    "code": "P234500",
    "description": "Cylinder #10 Above Knock Threshold"
  },
  {
    "code": "P234600",
    "description": "Cylinder #11 Above Knock Threshold"
  },
  {
    "code": "P234700",
    "description": "Cylinder #12 Above Knock Threshold"
  },
  {
    "code": "P240000",
    "description": "Evaporative Emission System Leak Detection Pump Control Circuit/Open"
  },
  {
    "code": "P240100",
    "description": "Evaporative Emission System Leak Detection Pump Control Circuit Low"
  },
  {
    "code": "P240200",
    "description": "Evaporative Emission System Leak Detection Pump Control Circuit High"
  },
  {
    "code": "P240300",
    "description": "Evaporative Emission System Leak Detection Pump Sense Circuit/Open"
  },
  {
    "code": "P240400",
    "description": "Evaporative Emission System Leak Detection Pumpe Sense Circuit Range/Performance"
  },
  {
    "code": "P241300",
    "description": "Exhaust Gas Recirculation System Performance"
  },
  {
    "code": "P241400",
    "description": "02 Sensor Exhaust Sample Error, Bank 1 Sensor 1"
  },
  {
    "code": "P241500",
    "description": "02 Sensor Exhaust Sample Error, Bank 2 Sensor 1"
  },
  {
    "code": "P241600",
    "description": "Oxygen Sensor Signals Swapped Bank 1 Sensor 2 / Bank 1 Sensor 3"
  },
  {
    "code": "P241700",
    "description": "Oxygen Sensor Signals Swapped Bank 2 Sensor 2 / Bank 2 Sensor 3"
  },
  {
    "code": "P242100",
    "description": "Evaporative Emission System Vent Valve Stuck Open"
  },
  {
    "code": "P242200",
    "description": "Evaporative Emission System Vent Valve Stuck Closed"
  },
  {
    "code": "P242500",
    "description": "Exhaust Gas Recirculation Cooling Valve Control Circuit Open"
  },
  {
    "code": "P242600",
    "description": "Exhaust Gas Recirculation Cooling Valve Control Circuit Low"
  },
  {
    "code": "P242700",
    "description": "Exhaust Gas Recirculation Cooling Valve Control Circuit High"
  },
  {
    "code": "P242800",
    "description": "Exhaust Gas Temperature Too High Bank1"
  },
  {
    "code": "P242900",
    "description": "Exhaust Gas Temperature Too High Bank2"
  },
  {
    "code": "P242A00",
    "description": "Exhaust Gas Temperature Sensor Circuit Bank 1 Sensor 3"
  },
  {
    "code": "P242B00",
    "description": "Exhaust Gas Temperature Sensor Circuit Bank 1 Sensor 3 Range/Performance"
  },
  {
    "code": "P242C00",
    "description": "Exhaust Gas Temperature Sensor Circuit Low Bank 1 Sensor 3"
  },
  {
    "code": "P242D00",
    "description": "Exhaust Gas Temperature Sensor Circuit High Bank 1 Sensor 3"
  },
  {
    "code": "P242F00",
    "description": "Diesel Particulate Filter Restriction - Ash Accumulation"
  },
  {
    "code": "P243000",
    "description": "Secondary Air Injection System Air Flow/Pressure Bank 1 Sensor Circuit"
  },
  {
    "code": "P243100",
    "description": "Secondary Air Injection System Air Flow/Pressure Bank 1 Sensor Circuit Range/Performance"
  },
  {
    "code": "P243200",
    "description": "Secondary Air Injection System Air Flow/Pressure Bank 1 Sensor Circuit Low"
  },
  {
    "code": "P243300",
    "description": "Secondary Air Injection System Air Flow/Pressure Bank 1 Sensor Circuit High"
  },
  {
    "code": "P244000",
    "description": "Secondary Air Injection System Switching Valve Stuck Open Bank1"
  },
  {
    "code": "P244200",
    "description": "Secondary Air Injection System Switching Valve Stuck Open Bank2"
  },
  {
    "code": "P244C00",
    "description": "Exhaust Temperature Too Low For Particulate Filter Regeneration Bank 1"
  },
  {
    "code": "P245200",
    "description": "Diesel Particulate Filter Differential Pressure Sensor Circuit"
  },
  {
    "code": "P245300",
    "description": "Diesel Particulate Filter Differential Pressure Sensor Circuit Range/Performance"
  },
  {
    "code": "P245400",
    "description": "Diesel Particulate Filter Differential Pressure Sensor Circuit Low"
  },
  {
    "code": "P245500",
    "description": "Diesel Particulate Filter Differential Pressure Sensor Circuit High"
  },
  {
    "code": "P245600",
    "description": "Diesel Particulate Filter Pressure Sensor \"A\" Circuit Intermittent/Erratic"
  },
  {
    "code": "P245700",
    "description": "Exhaust Gas Recirculation Cooling System Performance"
  },
  {
    "code": "P245B00",
    "description": "Exhaust Gas Recirculation Cooler Bypass Control Circuit Range/Performance"
  },
  {
    "code": "P245E00",
    "description": "Diesel Particulate Filter Pressure Sensor \"B\" Circuit"
  },
  {
    "code": "P246000",
    "description": "Diesel Particulate Filter Pressure Sensor \"B\" Circuit Low"
  },
  {
    "code": "P246300",
    "description": "Diesel Particulate Filter - Soot Accumulation"
  },
  {
    "code": "P246600",
    "description": "Exhaust Gas Temperature Sensor Circuit Bank 2 Sensor 3"
  },
  {
    "code": "P246700",
    "description": "Exhaust Gas Temperature Sensor Circuit Range/Performance Bank 2 Sensor 3"
  },
  {
    "code": "P246800",
    "description": "Exhaust Gas Temperature Sensor Circuit Low Bank 2 Sensor 3"
  },
  {
    "code": "P246E00",
    "description": "Exhaust Gas Temperature Sensor Circuit Bank 1 Sensor 4"
  },
  {
    "code": "P246F00",
    "description": "Exhaust Gas Temperature Sensor Circuit Bank 1 Sensor 4 Range/Performance"
  },
  {
    "code": "P247000",
    "description": "Exhaust Gas Temperature Sensor Circuit Low Bank 1 Sensor 4"
  },
  {
    "code": "P247100",
    "description": "Exhaust Gas Temperature Sensor Circuit High Bank 1 Sensor 4"
  },
  {
    "code": "P247300",
    "description": "Exhaust Gas Temperature Sensor Circuit Bank 2 Sensor 4"
  },
  {
    "code": "P247400",
    "description": "Exhaust Gas Temperature Sensor Circuit Bank 2 Sensor 4 Range/Performance"
  },
  {
    "code": "P247500",
    "description": "Exhaust Gas Temperature Sensor Circuit Low Bank 2 Sensor 4"
  },
  {
    "code": "P247600",
    "description": "Exhaust Gas Temperature Sensor Circuit High Bank 2 Sensor 4"
  },
  {
    "code": "P247800",
    "description": "Exhaust Gas Temperature Out of Range Bank 1 Sensor 1"
  },
  {
    "code": "P247A00",
    "description": "Exhaust Gas Temperature Out of Range Bank 1 Sensor 3"
  },
  {
    "code": "P251000",
    "description": "ECM/PCM Power Relay Sense Circuit Range/Performance"
  },
  {
    "code": "P251900",
    "description": "A/C Request \"A\" Circuit"
  },
  {
    "code": "P252000",
    "description": "A/C Request \"A\" Circuit Low"
  },
  {
    "code": "P252100",
    "description": "A/C Request \"A\" Circuit High"
  },
  {
    "code": "P253300",
    "description": "Ignition Switch Run/ Start Position Curciut"
  },
  {
    "code": "P253500",
    "description": "Ignition Switch Run/ Start Position Curciut High"
  },
  {
    "code": "P253900",
    "description": "Low Pressure Fuel System Sensor Circuit"
  },
  {
    "code": "P254000",
    "description": "Low Pressure Fuel System Sensor Circuit Range/Performance"
  },
  {
    "code": "P254100",
    "description": "Low Pressure Fuel System Sensor Circuit Low Input"
  },
  {
    "code": "P254200",
    "description": "Low Pressure Fuel System Sensor Circuit High Input"
  },
  {
    "code": "P254300",
    "description": "Low Pressure Fuel System Sensor Circuit Intermittent"
  },
  {
    "code": "P254500",
    "description": "Torque Management Request Input Signal \"A\" Range/Performance"
  },
  {
    "code": "P256200",
    "description": "Turbocharger Boost Control Position Sensor \"A\" Circuit"
  },
  {
    "code": "P256300",
    "description": "Turbocharger Boost Control Position Sensor Circuit Range/Performance"
  },
  {
    "code": "P256400",
    "description": "Turbocharger Boost Control Position Sensor Circuit Low"
  },
  {
    "code": "P256500",
    "description": "Turbocharger Boost Control Position Sensor Circuit High"
  },
  {
    "code": "P256600",
    "description": "Turbocharger Boost Control Position Sensor Circuit Intermittent"
  },
  {
    "code": "P256800",
    "description": "Direct Ozone Reduction Catalyst Temperature Sensor Circuit Range/Performance"
  },
  {
    "code": "P256900",
    "description": "Direct Ozone Reduction Catalyst Temperature Sensor Circuit Low"
  },
  {
    "code": "P257000",
    "description": "Direct Ozone Reduction Catalyst Temperature Sensor Circuit High"
  },
  {
    "code": "P257800",
    "description": "Turbocharger Speed Sensor \"A\" Circuit"
  },
  {
    "code": "P257900",
    "description": "Turbocharger Speed Sensor \"A\" Circuit Range/Performance"
  },
  {
    "code": "P258000",
    "description": "Turbocharger Speed Sensor \"A\" Circuit Low"
  },
  {
    "code": "P258100",
    "description": "Turbocharger Speed Sensor \"A\" Circuit High"
  },
  {
    "code": "P258200",
    "description": "Turbocharger Speed Sensor \"A\" Circuit Intermittent"
  },
  {
    "code": "P258800",
    "description": "Turbocharger Boost Control Position Sensor \"B\" Circuit Low"
  },
  {
    "code": "P258900",
    "description": "Turbocharger Boost Control Position Sensor \"B\" Circuit High"
  },
  {
    "code": "P259300",
    "description": "Turbocharger Speed Sensor \"B\" Circuit"
  },
  {
    "code": "P259400",
    "description": "Turbocharger Speed Sensor \"B\" Circuit Range/Performance"
  },
  {
    "code": "P259500",
    "description": "Turbocharger Speed Sensor \"B\" Circuit Low"
  },
  {
    "code": "P259600",
    "description": "Turbocharger Speed Sensor \"B\" Circuit High"
  },
  {
    "code": "P259700",
    "description": "Turbocharger Speed Sensor \"B\" Circuit Intermittent"
  },
  {
    "code": "P260000",
    "description": "Coolant Pump Control Circuit open"
  },
  {
    "code": "P260100",
    "description": "Coolant Pump Control Circuit range/performance"
  },
  {
    "code": "P260200",
    "description": "Coolant Pump Control Circuit low"
  },
  {
    "code": "P260300",
    "description": "Coolant Pump Control Circuit high"
  },
  {
    "code": "P261000",
    "description": "ECM/PCM Internal Engine Off Timer Performance"
  },
  {
    "code": "P261200",
    "description": "A/C Refrigerant Distribution Valve Control Circuit Low"
  },
  {
    "code": "P261300",
    "description": "A/C Refrigerant Distribution Valve Control Circuit High"
  },
  {
    "code": "P261A00",
    "description": "Coolant Pump \"B\" Control Circuit/Open"
  },
  {
    "code": "P261B00",
    "description": "Coolant Pump \"B\" Control Circuit Range/Performance"
  },
  {
    "code": "P261C00",
    "description": "Coolant Pump \"B\" Control Circuit Low"
  },
  {
    "code": "P261D00",
    "description": "Coolant Pump \"B\" Control Circuit High"
  },
  {
    "code": "P262600",
    "description": "O2 Sensor Pumping Current Trim Circuit/Open Bank 1, Sensor 1"
  },
  {
    "code": "P262900",
    "description": "O2 Sensor Pumping Current Trim Circuit/Open Bank 2, Sensor 1"
  },
  {
    "code": "P263200",
    "description": "Fuel Pump \"B\" Control Circuit Open"
  },
  {
    "code": "P263300",
    "description": "Fuel Pump \"B\" Control Circuit Low"
  },
  {
    "code": "P263400",
    "description": "Fuel Pump \"B\" Control Circuit High"
  },
  {
    "code": "P263700",
    "description": "Torque Management Feedback Signal \"A\""
  },
  {
    "code": "P270000",
    "description": "Transmission Friction Element \"A\" Apply Time Range/Performance"
  },
  {
    "code": "P270100",
    "description": "Transmission Friction Element \"B\" Apply Time Range/Performance"
  },
  {
    "code": "P270200",
    "description": "Transmission Friction Element \"C\" Apply Time Range/Performance"
  },
  {
    "code": "P270300",
    "description": "Transmission Friction Element \"D\" Apply Time Range/Performance"
  },
  {
    "code": "P270400",
    "description": "Transmission Friction Element \"E\" Apply Time Range/Performance"
  },
  {
    "code": "P270500",
    "description": "Transmission Friction Element \"F\" Apply Time Range/Performance"
  },
  {
    "code": "P270800",
    "description": "Shift Solenoid F Stuck On"
  },
  {
    "code": "P271100",
    "description": "Unexpected Mechanical Gear Disengagement"
  },
  {
    "code": "P271400",
    "description": "Pressure Control Solenoid \"D\" Performance or Stuck Off"
  },
  {
    "code": "P271500",
    "description": "Pressure Control Solenoid \"D\" Stuck On"
  },
  {
    "code": "P271600",
    "description": "Pressure Control Solenoid \"D\" Electrical"
  },
  {
    "code": "P271700",
    "description": "Pressure Control Solenoid \"D\" Intermittent"
  },
  {
    "code": "P272300",
    "description": "Pressure Control Solenoid \"E\" Performance or Stuck Off"
  },
  {
    "code": "P272400",
    "description": "Pressure Control Solenoid \"E\" Stuck On"
  },
  {
    "code": "P272500",
    "description": "Pressure Control Solenoid \"E\" Electrical"
  },
  {
    "code": "P272600",
    "description": "Pressure Control Solenoid \"E\" Intermittent"
  },
  {
    "code": "P273200",
    "description": "Pressure Control Solenoid \"F\" Performance or Stuck Off"
  },
  {
    "code": "P273300",
    "description": "Pressure Control Solenoid \"F\" Stuck On"
  },
  {
    "code": "P273400",
    "description": "Pressure Control Solenoid \"F\" Electrical"
  },
  {
    "code": "P273500",
    "description": "Pressure Control Solenoid \"F\" Intermittent"
  },
  {
    "code": "P275300",
    "description": "Transmission Fluid Cooler Control Circuit/Open"
  },
  {
    "code": "P275400",
    "description": "Transmission Fluid Cooler Control Circuit Low"
  },
  {
    "code": "P275500",
    "description": "Transmission Fluid Cooler Control Circuit High"
  },
  {
    "code": "P276500",
    "description": "Input Turbine/Speed Sensor \"B\" Circuit"
  },
  {
    "code": "P276600",
    "description": "Input Turbine/Speed Sensor \"B\" Circuit Range/Performance"
  },
  {
    "code": "P278700",
    "description": "Clutch Temperature Too High"
  },
  {
    "code": "P278900",
    "description": "Clutch Adaptive Learning at Limit"
  },
  {
    "code": "P278B00",
    "description": "Kick Down Switch Circuit Range/Performance"
  },
  {
    "code": "P281000",
    "description": "Pressure Control Solenoid \"G\" Electrical"
  },
  {
    "code": "P281200",
    "description": "Pressure Control Solenoid \"G\" Control Circuit/Open"
  },
  {
    "code": "P281400",
    "description": "Pressure Control Solenoid \"G\" Control Circuit Low"
  },
  {
    "code": "P281500",
    "description": "Pressure Control Solenoid \"G\" Control Circuit High"
  },
  {
    "code": "P2BA700",
    "description": "NOx Exceedence - Empty Reagent Tank"
  },
  {
    "code": "P300000",
    "description": "Glow Plug Indicator Light -K29- Malfunction message from instrument cluster"
  },
  {
    "code": "P300100",
    "description": "Operating RPM regulation Control difference"
  },
  {
    "code": "P300200",
    "description": "Kick Down Switch -F8- Implausible signal"
  },
  {
    "code": "P300300",
    "description": "Low heat output relay-J359 Short circuit to B+"
  },
  {
    "code": "P300400",
    "description": "Low heat output relay-J359 Open circuit/short circuit to ground"
  },
  {
    "code": "P300500",
    "description": "High heat output relay -J360 Short circuit to B+"
  },
  {
    "code": "P300600",
    "description": "High heat output relay -J360 Open circuit/short circuit to ground"
  },
  {
    "code": "P300700",
    "description": "Camshaft Position (CMP) Sensor -G40- No signal"
  },
  {
    "code": "P300800",
    "description": "Camshaft Position (CMP) Sensor -G40- Signal outside tolerance"
  },
  {
    "code": "P300900",
    "description": "Relay for pump, fuel cooling -J445- Short circuit to B+"
  },
  {
    "code": "P300A00",
    "description": "Diesel Particulate Filter Differential Pressure Sensor Implausible signal"
  },
  {
    "code": "P300B00",
    "description": "Diesel Particulate Filter Differential Pressure Sensor Short-circuit to ground"
  },
  {
    "code": "P300C00",
    "description": "Diesel Particulate Filter Differential Pressure Sensor Short circuit to B+"
  },
  {
    "code": "P300D00",
    "description": "Diesel Particulate Filter Differential Pressure Sensor Electrical malfunction"
  },
  {
    "code": "P300E00",
    "description": "Particulate Trap Bank 2 restriction"
  },
  {
    "code": "P300F00",
    "description": "Fuel bypass valve Open circuit"
  },
  {
    "code": "P301000",
    "description": "Relay for pump, fuel cooling -J445- Open circuit/short circuit to ground"
  },
  {
    "code": "P301100",
    "description": "Fuel Pump (FP) 2 Relay -J49- Short circuit to B+"
  },
  {
    "code": "P301200",
    "description": "Fuel Pump (FP) 2 Relay -J49- Open circuit/short circuit to ground"
  },
  {
    "code": "P301300",
    "description": "Wastegate Bypass Regulator Valve 2 -N274- Short circuit to B+"
  },
  {
    "code": "P301400",
    "description": "Wastegate Bypass Regulator Valve 2 -N274- Open circuit/short circuit to ground"
  },
  {
    "code": "P301500",
    "description": "Fuel Bypass Valve -N312- Short circuit to B+"
  },
  {
    "code": "P301600",
    "description": "Fuel Bypass Valve -N312- Open circuit/short circuit to ground"
  },
  {
    "code": "P301700",
    "description": "Exhaust Flap Valve 1 -N321- Short circuit to B+"
  },
  {
    "code": "P301800",
    "description": "Exhaust Flap Valve 1 -N321- Short-circuit to ground"
  },
  {
    "code": "P301900",
    "description": "Exhaust Flap Valve 1 -N321- Open circuit"
  },
  {
    "code": "P301A00",
    "description": "Exhaust flap sensor bank 2 Electrical malfunction"
  },
  {
    "code": "P301B00",
    "description": "Exhaust flap sensor bank 2 Implausible signal"
  },
  {
    "code": "P301C00",
    "description": "Exhaust flap sensor bank 2 Short circuit to B+"
  },
  {
    "code": "P301D00",
    "description": "Exhaust flap bank 2 Electrical malfunction"
  },
  {
    "code": "P301E00",
    "description": "Exhaust flap bank 2 Control difference"
  },
  {
    "code": "P301F00",
    "description": "Exhaust flap bank 2 Short circuit to B+"
  },
  {
    "code": "P302000",
    "description": "Exhaust Flap Valve 1 -N321- Electrical malfunction in circuit"
  },
  {
    "code": "P302100",
    "description": "Exhaust Flap Valve 2 -N322- Short circuit to B+"
  },
  {
    "code": "P302200",
    "description": "Exhaust Flap Valve 2 -N322- Short-circuit to ground"
  },
  {
    "code": "P302300",
    "description": "Exhaust Flap Valve 2 -N322- Open circuit"
  },
  {
    "code": "P302400",
    "description": "Exhaust Flap Valve 2 -N322- Electrical malfunction in circuit"
  },
  {
    "code": "P302500",
    "description": "Throttle Drive Angle Sensor 1 -G297 Implausible signal"
  },
  {
    "code": "P302600",
    "description": "Throttle Drive Angle Sensor 1 -G297 Signal too low"
  },
  {
    "code": "P302700",
    "description": "Throttle Drive Angle Sensor 1 -G297 Signal too high"
  },
  {
    "code": "P302800",
    "description": "Throttle Drive Angle Sensor 2 -G298 Implausible signal"
  },
  {
    "code": "P302900",
    "description": "Throttle Drive Angle Sensor 2 -G298 Signal too low"
  },
  {
    "code": "P302A00",
    "description": "Low heat output relay Open circuit"
  },
  {
    "code": "P302B00",
    "description": "Relay for Preheating Coolant, High Heat Output Open circuit"
  },
  {
    "code": "P302C00",
    "description": "Low heat output relay Short-circuit to ground"
  },
  {
    "code": "P302D00",
    "description": "Relay for Preheating Coolant, High Heat Output Short-circuit to ground"
  },
  {
    "code": "P302E00",
    "description": "Relay for pump, fuel cooling Open circuit"
  },
  {
    "code": "P302F00",
    "description": "Relay for pump, fuel cooling Short-circuit to ground"
  },
  {
    "code": "P303000",
    "description": "Throttle Drive Angle Sensor 2 -G298 Signal too high"
  },
  {
    "code": "P303100",
    "description": "Throttle Actuator 2 electrical malfunction in circuit"
  },
  {
    "code": "P303200",
    "description": "Throttle Valve Control Module 2 -J544- Malfunction in basic settings"
  },
  {
    "code": "P303300",
    "description": "Intake Air Temp.Circ.2 Signal too low"
  },
  {
    "code": "P303400",
    "description": "Intake Air Temp.Circ.2 Signal too high"
  },
  {
    "code": "P303500",
    "description": "Throttle Valve Control Module 2 -J544- Mechanical malfunction"
  },
  {
    "code": "P303600",
    "description": "Throttle Valve Control Module 2 -J544- insufficient voltage during basic settings"
  },
  {
    "code": "P303700",
    "description": "Throttle Valve Control Module 2 -J544- Adaptation not initiated"
  },
  {
    "code": "P303800",
    "description": "Throttle Valve Control Module 2 -J544- lower stop not reached"
  },
  {
    "code": "P303900",
    "description": "Transmission request torque reduction Implausible"
  },
  {
    "code": "P303A00",
    "description": "Auxiliary Fuel Pump (FP) Relay Open circuit"
  },
  {
    "code": "P303B00",
    "description": "Auxiliary Fuel Pump (FP) Relay Short-circuit to ground"
  },
  {
    "code": "P303C00",
    "description": "Auxiliary Fuel Pump (FP) Relay Short circuit to B+"
  },
  {
    "code": "P303D00",
    "description": "Cold start valve Open circuit"
  },
  {
    "code": "P303E00",
    "description": "Cold start valve Short circuit to B+"
  },
  {
    "code": "P303F00",
    "description": "Cold start valve Short-circuit to ground"
  },
  {
    "code": "P304000",
    "description": "Transmission ratio Implausible"
  },
  {
    "code": "P304100",
    "description": "Databus drivetrain implausible engine temperature message from instrument ECU"
  },
  {
    "code": "P304200",
    "description": "Heater regulation Implausible signal"
  },
  {
    "code": "P304300",
    "description": "Throttle Transfer Fuel Pump (FP) Mechanical malfunction"
  },
  {
    "code": "P304400",
    "description": "Throttle Transfer Fuel Pump (FP) Short circuit"
  },
  {
    "code": "P304500",
    "description": "Fuel pump electronics Defective"
  },
  {
    "code": "P304600",
    "description": "Starter relay 1 Electrical malfunction in circuit (relay stuck/does not switch)"
  },
  {
    "code": "P304700",
    "description": "Activation starter relay 2 Short circuit to B+"
  },
  {
    "code": "P304800",
    "description": "Activation starter relay 2 Short-circuit to ground"
  },
  {
    "code": "P304900",
    "description": "Activation starter relay 2 Open circuit"
  },
  {
    "code": "P304A00",
    "description": "Starter relay 1 Short-circuit to ground"
  },
  {
    "code": "P304B00",
    "description": "Potentiometer for heater control Electrical malfunction"
  },
  {
    "code": "P305000",
    "description": "Starter relay 2 Electrical malfunction in circuit (relay stuck/does not switch)"
  },
  {
    "code": "P305100",
    "description": "Starter activation, return message terminal 50 Implausible signal"
  },
  {
    "code": "P305200",
    "description": "Starter activation, return message terminal 50 Short circuit to B+"
  },
  {
    "code": "P305300",
    "description": "Starter activation, return message terminal 50 Short circuit to ground/open circuit"
  },
  {
    "code": "P305400",
    "description": "Starter does not turn Mechanically blocked or electrical malfunction"
  },
  {
    "code": "P305500",
    "description": "Exhaust Pressure Sensor 2 Open circuit"
  },
  {
    "code": "P305600",
    "description": "Exhaust Pressure Sensor 2 Short-circuit to ground"
  },
  {
    "code": "P305700",
    "description": "Exhaust Pressure Sensor 2 Short circuit to B+"
  },
  {
    "code": "P305800",
    "description": "Exhaust Gas Recirc.Flow 2 Flow too Low"
  },
  {
    "code": "P305900",
    "description": "Exhaust Gas Recirc.Flow 2 throughput too large"
  },
  {
    "code": "P305A00",
    "description": "Gasoline operation Random/Multiple Cylinder. Misfire Detected"
  },
  {
    "code": "P306000",
    "description": "Cooling Bypass Valve, Exhaust Gas Recirculation Flow Electrical malfunction"
  },
  {
    "code": "P306100",
    "description": "Cooling Bypass Valve 2, Exhaust Gas Recirculation Flow Electrical malfunction"
  },
  {
    "code": "P306200",
    "description": "Turbo/Super Charger 2 Overboost Condition"
  },
  {
    "code": "P306300",
    "description": "Turbo/Super Charger 2 Underboost condition"
  },
  {
    "code": "P306400",
    "description": "Boost Pressure Contr.Valve 3 Circuit Electrical malfunction"
  },
  {
    "code": "P306500",
    "description": "Boost Pressure Contr.Valve 3 Circuit Short-circuit to ground"
  },
  {
    "code": "P306600",
    "description": "Boost Pressure Contr.Valve 3 Circuit Short circuit to B+"
  },
  {
    "code": "P306700",
    "description": "Boost Pressure Contr.Valve 4 Circuit Electrical malfunction"
  },
  {
    "code": "P306800",
    "description": "Boost Pressure Contr.Valve 4 Circuit Short-circuit to ground"
  },
  {
    "code": "P306900",
    "description": "Boost Pressure Contr.Valve 4 Circuit Short circuit to B+"
  },
  {
    "code": "P307000",
    "description": "Metering pump for cleaning solution Defective"
  },
  {
    "code": "P307100",
    "description": "Additive tank for particle filter empty"
  },
  {
    "code": "P307200",
    "description": "Voltage supply relay Electrical malfunction in circuit"
  },
  {
    "code": "P307300",
    "description": "Throttle Transfer Fuel Pump (FP) Electrical malfunction in circuit"
  },
  {
    "code": "P307400",
    "description": "Fuel Pump 2 Electrical malfunction in circuit"
  },
  {
    "code": "P307500",
    "description": "Turbo boost 1/2 Trim Adaptation Limit Attained"
  },
  {
    "code": "P307600",
    "description": "Engine Control Module (ECM) Error during coding"
  },
  {
    "code": "P307700",
    "description": "Fuel Pump Electronics, voltage supply Electrical malfunction"
  },
  {
    "code": "P307800",
    "description": "Throttle Valve Control Module Air Flow at idle too Low"
  },
  {
    "code": "P307900",
    "description": "Cold Start Fuel Pump (FP) Relay Short circuit to B+"
  },
  {
    "code": "P307A00",
    "description": "Intake system Air flow too low"
  },
  {
    "code": "P307B00",
    "description": "Activation Fuel pump module 2 Electrical malfunction/open"
  },
  {
    "code": "P307C00",
    "description": "Activation Fuel pump module 2 Implausible signal"
  },
  {
    "code": "P307D00",
    "description": "Activation Fuel pump module 2 Short-circuit to ground"
  },
  {
    "code": "P307E00",
    "description": "Activation Fuel pump module 2 Short circuit to B+"
  },
  {
    "code": "P308000",
    "description": "Cold Start Fuel Pump (FP) Relay -J748 Short circuit to ground/open circuit"
  },
  {
    "code": "P308100",
    "description": "Engine temperature too low"
  },
  {
    "code": "P308200",
    "description": "Clutch positioning sensor Implausible signal"
  },
  {
    "code": "P308300",
    "description": "Fuel level sensor for additive tank particulate trap, Electrical malfunction in circuit"
  },
  {
    "code": "P308400",
    "description": "Recirculating valve for turbocharger bank 2 Mechanical malfunction"
  },
  {
    "code": "P308500",
    "description": "Activation Intake Manifold Runner Bank 2 Control Electrical malfunction"
  },
  {
    "code": "P308600",
    "description": "Intake Manifold Runner Bank 2 Basic settings not carried out"
  },
  {
    "code": "P308700",
    "description": "Supply relay for engine components Electrical malfunction in circuit"
  },
  {
    "code": "P308800",
    "description": "Starter relay Electrical malfunction in circuit"
  },
  {
    "code": "P308900",
    "description": "Fuel pump electronics signal wire Electrical malfunction"
  },
  {
    "code": "P308A00",
    "description": "Fuel pump electronics NG operation signal wire Short circuit to B+"
  },
  {
    "code": "P308B00",
    "description": "Fuel pump electronics NG operation signal wire Short-circuit to ground"
  },
  {
    "code": "P308C00",
    "description": "Fuel pump electronics NG operation signal wire Open circuit"
  },
  {
    "code": "P308D00",
    "description": "Throttle Transfer Fuel Pump (FP) Engine speed too low"
  },
  {
    "code": "P308E00",
    "description": "Fuel pump electronics Excess temperature"
  },
  {
    "code": "P309000",
    "description": "Auxiliary heater signal not recognized"
  },
  {
    "code": "P309100",
    "description": "Auxiliary heater signal constant detected"
  },
  {
    "code": "P309200",
    "description": "Control module defective"
  },
  {
    "code": "P309300",
    "description": "Control module defective"
  },
  {
    "code": "P309400",
    "description": "Control module defective"
  },
  {
    "code": "P309500",
    "description": "Control module defective"
  },
  {
    "code": "P309600",
    "description": "Control module defective"
  },
  {
    "code": "P309700",
    "description": "Control module defective"
  },
  {
    "code": "P309800",
    "description": "Control module defective"
  },
  {
    "code": "P309900",
    "description": "Control module defective"
  },
  {
    "code": "P310000",
    "description": "Intake Flap Motor -V157 Short circuit to B+"
  },
  {
    "code": "P310100",
    "description": "Intake Flap Motor -V157 Open circuit/short circuit to ground"
  },
  {
    "code": "P310200",
    "description": "Intake Flap Motor -V157 No signal"
  },
  {
    "code": "P310300",
    "description": "Intake Flap Motor -V157 Defective"
  },
  {
    "code": "P310400",
    "description": "Intake manifold flap change-over valve- N239 Short circuit to B+"
  },
  {
    "code": "P310500",
    "description": "Intake manifold flap change-over valve- N239 Open circuit/short circuit to ground"
  },
  {
    "code": "P310600",
    "description": "Cylinder 7 Pump/Injector -N303- Implausible signal"
  },
  {
    "code": "P310700",
    "description": "Cylinder 7 Pump/Injector -N303- Value above upper control limit"
  },
  {
    "code": "P310800",
    "description": "Cylinder 7 Pump/Injector -N303- Value below lower control limit"
  },
  {
    "code": "P310900",
    "description": "Cylinder 7 Pump/Injector -N303- Electrical malfunction in circuit"
  },
  {
    "code": "P310A00",
    "description": "Low Fuel Pressure regulation Fuel pressure fluctuates"
  },
  {
    "code": "P310B00",
    "description": "Low Fuel Pressure regulation Fuel pressure outside specification"
  },
  {
    "code": "P310C00",
    "description": "Low Fuel Pressure regulation Fuel pressure breaks down sporadically"
  },
  {
    "code": "P310D00",
    "description": "Fuel Pressure Regulation Fuel pressure fluctuates"
  },
  {
    "code": "P310E00",
    "description": "Exhaust gas recirculation cooler bypass valve 2 Implausible signal"
  },
  {
    "code": "P311000",
    "description": "Cylinder 8 Pump/Injector -N304- Implausible signal"
  },
  {
    "code": "P311100",
    "description": "Cylinder 8 Pump/Injector -N304- Value above upper control limit"
  },
  {
    "code": "P311200",
    "description": "Cylinder 8 Pump/Injector -N304- Value below lower control limit"
  },
  {
    "code": "P311300",
    "description": "Cylinder 8 Pump/Injector -N304- Electrical malfunction in circuit"
  },
  {
    "code": "P311400",
    "description": "Cylinder 9 Pump/Injector -N305- Implausible signal"
  },
  {
    "code": "P311500",
    "description": "Cylinder 9 Pump/Injector -N305- Value above upper control limit"
  },
  {
    "code": "P311600",
    "description": "Cylinder 9 Pump/Injector -N305- Value below lower control limit"
  },
  {
    "code": "P311700",
    "description": "Cylinder 9 Pump/Injector -N305- Electrical malfunction in circuit"
  },
  {
    "code": "P311800",
    "description": "Cylinder 10 Pump/Injector -N306- Implausible signal"
  },
  {
    "code": "P311900",
    "description": "Cylinder 10 Pump/Injector -N306- Value above upper control limit"
  },
  {
    "code": "P312000",
    "description": "Cylinder 10 Pump/Injector -N306- Value below lower control limit"
  },
  {
    "code": "P312100",
    "description": "Cylinder 10 Pump/Injector -N306- Electrical malfunction in circuit"
  },
  {
    "code": "P312200",
    "description": "Cylinder 11 Pump/Injector -N307- Implausible signal"
  },
  {
    "code": "P312300",
    "description": "Cylinder 11 Pump/Injector -N307- Value above upper control limit"
  },
  {
    "code": "P312400",
    "description": "Cylinder 11 Pump/Injector -N307- Value below lower control limit"
  },
  {
    "code": "P312500",
    "description": "Cylinder 11 Pump/Injector -N307- Electrical malfunction in circuit"
  },
  {
    "code": "P312600",
    "description": "Cylinder 12 Pump/Injector -N308- Implausible signal"
  },
  {
    "code": "P312700",
    "description": "Cylinder 12 Pump/Injector -N308- Value above upper control limit"
  },
  {
    "code": "P312800",
    "description": "Cylinder 12 Pump/Injector -N308- Value below lower control limit"
  },
  {
    "code": "P312900",
    "description": "Cylinder 12 Pump/Injector -N308- Electrical malfunction in circuit"
  },
  {
    "code": "P313000",
    "description": "Exhaust Gas Recirculation (EGR) system Value above upper control limit"
  },
  {
    "code": "P313100",
    "description": "Exhaust Gas Recirculation (EGR) system Value below lower control limit"
  },
  {
    "code": "P313200",
    "description": "Glow Plug Module 2, Control Circuit Electrical malfunction in circuit"
  },
  {
    "code": "P313300",
    "description": "Automatic Glow Time Control Relay 2-J609 Implausible signal"
  },
  {
    "code": "P313400",
    "description": "Intake Manifold Runner Control (IMRC) Upper stop not reached"
  },
  {
    "code": "P313500",
    "description": "Intake Manifold Runner Control (IMRC) lower limit not reached"
  },
  {
    "code": "P313600",
    "description": "Intake Manifold Runner Control (IMRC) Target value not reached"
  },
  {
    "code": "P313700",
    "description": "Intake Manifold Runner Control (IMRC) Basic settings not carried out"
  },
  {
    "code": "P313800",
    "description": "Intake Manifold Runner Control (IMRC) Control difference"
  },
  {
    "code": "P313900",
    "description": "Intake Manifold Runner Control (IMRC) Signal outside tolerance"
  },
  {
    "code": "P313A00",
    "description": "Intake Manifold Runner Control (IMRC), bank 2 Signal outside tolerance"
  },
  {
    "code": "P313B00",
    "description": "Intake Manifold Runner Control (IMRC), bank 2 Control difference"
  },
  {
    "code": "P313C00",
    "description": "Intake Manifold Runner Control (IMRC), bank 2 difficulty of movement or blocked"
  },
  {
    "code": "P313D00",
    "description": "Intake Manifold Runner Control (IMRC) difficulty of movement or blocked"
  },
  {
    "code": "P314000",
    "description": "Valve for starting with empty tank -N349 Open circuit/short circuit to ground"
  },
  {
    "code": "P314100",
    "description": "Valve for starting with empty tank -N349 Short circuit to B+"
  },
  {
    "code": "P314200",
    "description": "Exhaust-bank2,sensor1,oxygen sensor signal implausible lean"
  },
  {
    "code": "P314300",
    "description": "Exhaust-bank2,sensor1,oxygen sensor signal Implausible rich"
  },
  {
    "code": "P314400",
    "description": "Exhaust-bank3,sensor1,oxygen sensor signal implausible lean"
  },
  {
    "code": "P314500",
    "description": "Exhaust-bank3,sensor1,oxygen sensor signal Implausible rich"
  },
  {
    "code": "P314600",
    "description": "Exhaust-bank4,sensor1,oxygen sensor signal implausible lean"
  },
  {
    "code": "P314700",
    "description": "Exhaust-bank4,sensor1,oxygen sensor signal Implausible rich"
  },
  {
    "code": "P314800",
    "description": "Exhaust bank 3, O2 sensor before cat. conv., heater circuit Regulation at upper impact"
  },
  {
    "code": "P314900",
    "description": "Exhaust bank 3, O2 sensor before cat. conv., heater circuit Regulation at lower impact"
  },
  {
    "code": "P315000",
    "description": "Exhaust bank 4, O2 sensor before cat. conv., heater circuit Regulation at upper impact"
  },
  {
    "code": "P315100",
    "description": "Exhaust bank 4, O2 sensor before cat. conv., heater circuit Regulation at lower impact"
  },
  {
    "code": "P315200",
    "description": "Exhaust gas bank3, sensor1 Internal resistance too Large"
  },
  {
    "code": "P315300",
    "description": "Exhaust gas bank4, sensor1 Internal resistance too Large"
  },
  {
    "code": "P315400",
    "description": "Exhaust-bank2-sensor1 Voltage too low/air leak"
  },
  {
    "code": "P315500",
    "description": "Emissions-bank3-sensor1 Voltage too low/air leak"
  },
  {
    "code": "P315600",
    "description": "Emissions-bank4-sensor1 Voltage too low/air leak"
  },
  {
    "code": "P315700",
    "description": "Exhaust-bank1,sensor1,oxygen sensor signal Voltage too low during deceleration"
  },
  {
    "code": "P315800",
    "description": "Exhaust-bank2,sensor1,oxygen sensor signal Voltage too low during deceleration"
  },
  {
    "code": "P315900",
    "description": "Exhaust-bank3,sensor1,oxygen sensor signal Voltage too low during deceleration"
  },
  {
    "code": "P316000",
    "description": "Exhaust-bank4,sensor1,oxygen sensor signal Voltage too low during deceleration"
  },
  {
    "code": "P316100",
    "description": "Linear oxy. sensor,exh-bank1/compensat. wire pump current Open circuit"
  },
  {
    "code": "P316200",
    "description": "Linear oxy. sensor,exh-bank2/compensat. wire pump current Open circuit"
  },
  {
    "code": "P316300",
    "description": "Linear oxy. sensor,exh-bank3/compensat. wire pump current Open circuit"
  },
  {
    "code": "P316400",
    "description": "Linear oxy. sensor,exh-bank4/compensat. wire pump current Open circuit"
  },
  {
    "code": "P316500",
    "description": "Exhaust-bank3,oxygen sensor correction behind cat Lean control limit exceeded"
  },
  {
    "code": "P316600",
    "description": "Exhaust-bank3,oxygen sensor correction behind cat Rich control limit exceeded"
  },
  {
    "code": "P316700",
    "description": "Exhaust-bank4,oxygen sensor correction behind cat Lean control limit exceeded"
  },
  {
    "code": "P316800",
    "description": "Exhaust-bank4,oxygen sensor correction behind cat Rich control limit exceeded"
  },
  {
    "code": "P316900",
    "description": "Exhaust-bank3 main catalytic converter Efficiency below threshold"
  },
  {
    "code": "P317000",
    "description": "Exhaust-bank4 main catalytic converter Efficiency below threshold"
  },
  {
    "code": "P317100",
    "description": "Exhaust-bank1, mixture adaptation range 3 System too lean"
  },
  {
    "code": "P317200",
    "description": "Exhaust-bank1, mixture adaptation range 3 System too rich"
  },
  {
    "code": "P317300",
    "description": "Exhaust-bank2, mixture adaptation range 3 System too lean"
  },
  {
    "code": "P317400",
    "description": "Exhaust-bank2, mixture adaptation range 3 System too rich"
  },
  {
    "code": "P317500",
    "description": "Exhaust bank3, mixture adaptation range 3 System too lean"
  },
  {
    "code": "P317600",
    "description": "Exhaust bank3, mixture adaptation range 3 System too rich"
  },
  {
    "code": "P317700",
    "description": "Exhaust bank4, mixture adaptation range 3 System too lean"
  },
  {
    "code": "P317800",
    "description": "Exhaust bank4, mixture adaptation range 3 System too rich"
  },
  {
    "code": "P317900",
    "description": "Cyl.13-Fuel Inj.Circ. Short-circuit to ground"
  },
  {
    "code": "P318000",
    "description": "Cyl.13-Fuel Inj.Circ. Short circuit to B+"
  },
  {
    "code": "P318100",
    "description": "Cyl.13-Fuel Inj.Circ. Open circuit"
  },
  {
    "code": "P318200",
    "description": "Cyl.14-Fuel Inj.Circ. Short-circuit to ground"
  },
  {
    "code": "P318300",
    "description": "Cyl.14-Fuel Inj.Circ. Short circuit to B+"
  },
  {
    "code": "P318400",
    "description": "Cyl.14-Fuel Inj.Circ. Open circuit"
  },
  {
    "code": "P318500",
    "description": "Cyl.15-Fuel Inj.Circ. Short-circuit to ground"
  },
  {
    "code": "P318600",
    "description": "Cyl.15-Fuel Inj.Circ. Short circuit to B+"
  },
  {
    "code": "P318700",
    "description": "Cyl.15-Fuel Inj.Circ. Open circuit"
  },
  {
    "code": "P318800",
    "description": "Cyl.16-Fuel Inj.Circ. Short-circuit to ground"
  },
  {
    "code": "P318900",
    "description": "Cyl.16-Fuel Inj.Circ. Short circuit to B+"
  },
  {
    "code": "P319000",
    "description": "Cyl.16-Fuel Inj.Circ. Open circuit"
  },
  {
    "code": "P319100",
    "description": "Intake Manifold Runner Control (IMRC) Basic setting aborted with mechanical impact open"
  },
  {
    "code": "P319200",
    "description": "Intake Manifold Runner Control (IMRC) Basic setting aborted with mechanical impact open"
  },
  {
    "code": "P319300",
    "description": "Intake Manifold Runner Control (IMRC) open impact outside valid range"
  },
  {
    "code": "P319400",
    "description": "Mass Air Flow (MAF) Sensor 3 -G456 Signal too low"
  },
  {
    "code": "P319500",
    "description": "Mass Air Flow (MAF) Sensor 3 -G456 Signal too high"
  },
  {
    "code": "P319600",
    "description": "Mass Air Flow (MAF) Sensor 4 -G457 Signal too low"
  },
  {
    "code": "P319700",
    "description": "Mass Air Flow (MAF) Sensor 4 -G457 Signal too high"
  },
  {
    "code": "P319800",
    "description": "Intake manifold Runner Control (IMRC) Implausible signal"
  },
  {
    "code": "P319900",
    "description": "Activation Intake Manifold Runner Bank 2 Control Implausible signal"
  },
  {
    "code": "P319A00",
    "description": "Air mass meter 3/4 Correlation"
  },
  {
    "code": "P319B00",
    "description": "Mass Air Flow (MAF) Sensor 3 -G456 Implausible signal"
  },
  {
    "code": "P319C00",
    "description": "Mass Air Flow (MAF) Sensor 4 -G457 Implausible signal"
  },
  {
    "code": "P319D00",
    "description": "Activation Intake Manifold Runner Bank 2 Control Short circuit to B+"
  },
  {
    "code": "P319E00",
    "description": "Activation Intake Manifold Runner Bank 2 Control Open circuit/short circuit to ground"
  },
  {
    "code": "P320000",
    "description": "Exhaust-bank3 -sensor1, heating circuit Short-circuit to ground"
  },
  {
    "code": "P320100",
    "description": "Exhaust-bank3 -sensor1, heating circuit Short circuit to B+"
  },
  {
    "code": "P320200",
    "description": "Exhaust-bank3 -sensor1, heating circuit Open circuit"
  },
  {
    "code": "P320300",
    "description": "Exhaust-bank3 -sensor1, heating circuit Malfunction"
  },
  {
    "code": "P320400",
    "description": "Emissions-bank3-sensor1 Internal resistance too Large"
  },
  {
    "code": "P320500",
    "description": "Emissions-bank3-sensor1 Low Voltage"
  },
  {
    "code": "P320600",
    "description": "Emissions-bank3-sensor1 High Voltage"
  },
  {
    "code": "P320700",
    "description": "Emissions-bank3-sensor1 electrical malfunction in circuit"
  },
  {
    "code": "P320800",
    "description": "Emissions-bank3-sensor1 No Activity Detected"
  },
  {
    "code": "P320900",
    "description": "Emissions-bank3-sensor1 Slow Response"
  },
  {
    "code": "P321000",
    "description": "Exhaust-bank3 -sensor1, heating circuit Performance too low"
  },
  {
    "code": "P321100",
    "description": "Exhaust-bank1-sensor1 Heater back-coupling"
  },
  {
    "code": "P321200",
    "description": "Exhaust-bank2-sensor1 Heater back-coupling"
  },
  {
    "code": "P321300",
    "description": "Emissions-bank3-sensor1 Heater back-coupling"
  },
  {
    "code": "P321400",
    "description": "Emissions-bank4-sensor1 Heater back-coupling"
  },
  {
    "code": "P321500",
    "description": "Emissions-bank3-sensor2,heater circuit Short-circuit to ground"
  },
  {
    "code": "P321600",
    "description": "Emissions-bank3-sensor2,heater circuit Short circuit to B+"
  },
  {
    "code": "P321700",
    "description": "Emissions-bank3-sensor2,heater circuit Open circuit"
  },
  {
    "code": "P321800",
    "description": "Emissions-bank3-sensor2,heater circuit Malfunction"
  },
  {
    "code": "P321900",
    "description": "Emissions-bank3-sensor2 Internal resistance too Large"
  },
  {
    "code": "P322000",
    "description": "Emissions-bank3-sensor2 Low Voltage"
  },
  {
    "code": "P322100",
    "description": "Emissions-bank3-sensor2 High Voltage"
  },
  {
    "code": "P322200",
    "description": "Emissions-bank3-sensor2 electrical malfunction in circuit"
  },
  {
    "code": "P322300",
    "description": "Emissions-bank3-sensor2 No Activity Detected"
  },
  {
    "code": "P322400",
    "description": "Emissions-bank3-sensor2 Slow Response"
  },
  {
    "code": "P322500",
    "description": "Exhaust-bank3,oxygen sensor correction behind cat Control limit reached"
  },
  {
    "code": "P322600",
    "description": "Exhaust-bank4,oxygen sensor correction behind cat Control limit reached"
  },
  {
    "code": "P322700",
    "description": "Exhaust-Bank1,Sensor1,Individual Cylinder Control Sensor dynamic to low"
  },
  {
    "code": "P322800",
    "description": "Exhaust-bank1,sensor1,oxygen sensor signal implausible lean"
  },
  {
    "code": "P322900",
    "description": "Exhaust-bank1,sensor1,oxygen sensor signal Implausible rich"
  },
  {
    "code": "P323000",
    "description": "Exhaust-bank4 -sensor1, heating circuit Short-circuit to ground"
  },
  {
    "code": "P323100",
    "description": "Exhaust-bank4 -sensor1, heating circuit Short circuit to B+"
  },
  {
    "code": "P323200",
    "description": "Exhaust-bank4 -sensor1, heating circuit Open circuit"
  },
  {
    "code": "P323300",
    "description": "Exhaust-bank4 -sensor1, heating circuit Malfunction"
  },
  {
    "code": "P323400",
    "description": "Emissions-bank4-sensor1 Internal resistance too Large"
  },
  {
    "code": "P323500",
    "description": "Emissions-bank4-sensor1 Low Voltage"
  },
  {
    "code": "P323600",
    "description": "Emissions-bank4-sensor1 High Voltage"
  },
  {
    "code": "P323700",
    "description": "Emissions-bank4-sensor1 electrical malfunction in circuit"
  },
  {
    "code": "P323800",
    "description": "Emissions-bank4-sensor1 No Activity Detected"
  },
  {
    "code": "P323900",
    "description": "Emissions-bank4-sensor1 Slow Response"
  },
  {
    "code": "P324000",
    "description": "Exhaust-bank4 -sensor1, heating circuit Performance too low"
  },
  {
    "code": "P324100",
    "description": "Intake Manifold Runner Control (IMRC) Temperature too high"
  },
  {
    "code": "P324200",
    "description": "Intake Manifold Runner Bank 2 Temperature too high"
  },
  {
    "code": "P324300",
    "description": "Idle Speed Contr.Throttle Pos. Electrical malfunction"
  },
  {
    "code": "P324400",
    "description": "Idle Speed Control Throttle Position 2 Electrical malfunction"
  },
  {
    "code": "P324500",
    "description": "Emissions-bank4-sensor2,heater circuit Short-circuit to ground"
  },
  {
    "code": "P324600",
    "description": "Emissions-bank4-sensor2,heater circuit Short circuit to B+"
  },
  {
    "code": "P324700",
    "description": "Emissions-bank4-sensor2,heater circuit Open circuit"
  },
  {
    "code": "P324800",
    "description": "Emissions-bank4-sensor2,heater circuit Malfunction"
  },
  {
    "code": "P324900",
    "description": "Emissions-bank4-sensor2 Internal resistance too Large"
  },
  {
    "code": "P325000",
    "description": "Emissions-bank4-sensor2 Low Voltage"
  },
  {
    "code": "P325100",
    "description": "Emissions-bank4-sensor2 High Voltage"
  },
  {
    "code": "P325200",
    "description": "Emissions-bank4-sensor2 electrical malfunction in circuit"
  },
  {
    "code": "P325300",
    "description": "Emissions-bank4-sensor2 No Activity Detected"
  },
  {
    "code": "P325400",
    "description": "Emissions-bank4-sensor2 Slow Response"
  },
  {
    "code": "P325500",
    "description": "Bank 1, O2 sensor before cat. conv., heater circuit Regulation at upper impact"
  },
  {
    "code": "P325600",
    "description": "Bank 1, O2 sensor before cat. conv., heater circuit Regulation at lower impact"
  },
  {
    "code": "P325700",
    "description": "Bank 2, O2 sensor before cat. conv., heater circuit Regulation at upper impact"
  },
  {
    "code": "P325800",
    "description": "Bank 2, O2 sensor before cat. conv., heater circuit Regulation at lower impact"
  },
  {
    "code": "P325900",
    "description": "Auxiliary fuel pump for engine start Malfunction"
  },
  {
    "code": "P326000",
    "description": "Exhaust bank 1/2 oxygen sensors before catalytic converter swapped"
  },
  {
    "code": "P326100",
    "description": "Exhaust bank 3/4 oxygen sensors before catalytic converter swapped"
  },
  {
    "code": "P326200",
    "description": "Exhaust bank 1/2 oxygen sensors behind catalytic converter swapped"
  },
  {
    "code": "P326300",
    "description": "Exhaust bank 3/4 oxygen sensors behind catalytic converter swapped"
  },
  {
    "code": "P326400",
    "description": "Pre-catalytic converter, emissions bank 3 Efficiency below threshold"
  },
  {
    "code": "P326500",
    "description": "Pre-catalytic converter, exhaust bank 4 Efficiency below threshold"
  },
  {
    "code": "P326600",
    "description": "Bank 1, sensor 1 Internal resistance too Large"
  },
  {
    "code": "P326700",
    "description": "Bank 2, sensor 1 Internal resistance too Large"
  },
  {
    "code": "P326800",
    "description": "Linear Lambda probe, exhaust gas bank 2 / pump current Open circuit"
  },
  {
    "code": "P326900",
    "description": "Linear Lambda probe, exhaust gas bank 2 / pump current Short-circuit to ground"
  },
  {
    "code": "P327000",
    "description": "Linear Lambda probe, exhaust gas bank 2 / pump current Short circuit to B+"
  },
  {
    "code": "P327100",
    "description": "Linear Lambda probe, exhaust gas bank 2 / reference voltage Open circuit"
  },
  {
    "code": "P327200",
    "description": "Linear Lambda probe, exhaust gas bank 2 / reference voltage Short-circuit to ground"
  },
  {
    "code": "P327300",
    "description": "Linear Lambda probe, exhaust gas bank 2 / reference voltage Short circuit to B+"
  },
  {
    "code": "P327400",
    "description": "Linear Lambda probe, exhaust gas bank 2 / reference voltage Implausible"
  },
  {
    "code": "P327500",
    "description": "Linear Lambda probe, exhaust bank 2 / common Ground (GND) wire Open circuit"
  },
  {
    "code": "P327600",
    "description": "Linear Lambda probe, exhaust bank 2 / common Ground (GND) wire Short-circuit to ground"
  },
  {
    "code": "P327700",
    "description": "Linear Lambda probe, exhaust bank 2 / common Ground (GND) wire Short circuit to B+"
  },
  {
    "code": "P327800",
    "description": "Linear Lambda probe, exhaust gas bank 3 / pump current Open circuit"
  },
  {
    "code": "P327900",
    "description": "Linear Lambda probe, exhaust gas bank 3 / pump current Short-circuit to ground"
  },
  {
    "code": "P328000",
    "description": "Linear Lambda probe, exhaust gas bank 3 / pump current Short circuit to B+"
  },
  {
    "code": "P328100",
    "description": "Linear Lambda probe, exhaust gas bank 3 / reference voltage Open circuit"
  },
  {
    "code": "P328200",
    "description": "Linear Lambda probe, exhaust gas bank 3 / reference voltage Short-circuit to ground"
  },
  {
    "code": "P328300",
    "description": "Linear Lambda probe, exhaust gas bank 3 / reference voltage Short circuit to B+"
  },
  {
    "code": "P328400",
    "description": "Linear Lambda probe, exhaust gas bank 3 / reference voltage Implausible"
  },
  {
    "code": "P328500",
    "description": "Linear Lambda probe, exhaust bank 3 / common Ground (GND) wire Open circuit"
  },
  {
    "code": "P328600",
    "description": "Linear Lambda probe, exhaust bank 3 / common Ground (GND) wire Short-circuit to ground"
  },
  {
    "code": "P328700",
    "description": "Linear Lambda probe, exhaust bank 3 / common Ground (GND) wire Short circuit to B+"
  },
  {
    "code": "P328800",
    "description": "Linear Lambda probe, exhaust gas bank 4 / pump current Open circuit"
  },
  {
    "code": "P328900",
    "description": "Linear Lambda probe, exhaust gas bank 4 / pump current Short-circuit to ground"
  },
  {
    "code": "P329000",
    "description": "Linear Lambda probe, exhaust gas bank 4 / pump current Short circuit to B+"
  },
  {
    "code": "P329100",
    "description": "Linear Lambda probe, exhaust gas bank 4 / reference voltage Open circuit"
  },
  {
    "code": "P329200",
    "description": "Linear Lambda probe, exhaust gas bank 4 / reference voltage Short-circuit to ground"
  },
  {
    "code": "P329300",
    "description": "Linear Lambda probe, exhaust gas bank 4 / reference voltage Short circuit to B+"
  },
  {
    "code": "P329400",
    "description": "Linear Lambda probe, exhaust gas bank 4 / reference voltage Implausible"
  },
  {
    "code": "P329500",
    "description": "Linear Lambda probe, exhaust bank 4 / common Ground (GND) wire Open circuit"
  },
  {
    "code": "P329600",
    "description": "Linear Lambda probe, exhaust bank 4 / common Ground (GND) wire Short-circuit to ground"
  },
  {
    "code": "P329700",
    "description": "Linear Lambda probe, exhaust bank 4 / common Ground (GND) wire Short circuit to B+"
  },
  {
    "code": "P329800",
    "description": "Catalytic converter system, exhaust-bank 3 Efficiency below threshold"
  },
  {
    "code": "P329900",
    "description": "Catalytic converter system, exhaust-bank 4 Efficiency below threshold"
  },
  {
    "code": "P330000",
    "description": "Bank1, Camshaft Position (CMP) Sensor, exhaust =>-G300 Short-circuit to ground"
  },
  {
    "code": "P330100",
    "description": "Bank1, Camshaft Position (CMP) Sensor, exhaust =>-G300 Open circuit/short circuit to B+"
  },
  {
    "code": "P330200",
    "description": "Bank2, Camshaft Position (CMP), exhaust =>Sensor -G301- Short-circuit to ground"
  },
  {
    "code": "P330300",
    "description": "Bank2, Camshaft Position (CMP), exhaust =>Sensor -G301- Open circuit/short circuit to B+"
  },
  {
    "code": "P330400",
    "description": "Bank1,exhaust-Camshaft Position (CMP) Sensor-G300/-G28 Incorrect allocation"
  },
  {
    "code": "P330500",
    "description": "Bank2, exhaust - Camshaft Position (CMP) Sensor-G301- / -G28- Incorrect allocation"
  },
  {
    "code": "P330600",
    "description": "Ignition control cylinder 13 Short-circuit to ground"
  },
  {
    "code": "P330700",
    "description": "Ignition control cylinder 13 Short circuit to B+"
  },
  {
    "code": "P330800",
    "description": "Ignition control cylinder 13 Open circuit"
  },
  {
    "code": "P330900",
    "description": "Ignition control cylinder 14 Short-circuit to ground"
  },
  {
    "code": "P331000",
    "description": "Ignition control cylinder 14 Short circuit to B+"
  },
  {
    "code": "P331100",
    "description": "Ignition control cylinder 14 Open circuit"
  },
  {
    "code": "P331200",
    "description": "Ignition control cylinder 15 Short-circuit to ground"
  },
  {
    "code": "P331300",
    "description": "Ignition control cylinder 15 Short circuit to B+"
  },
  {
    "code": "P331400",
    "description": "Ignition control cylinder 15 Open circuit"
  },
  {
    "code": "P331500",
    "description": "Ignition control cylinder 16 Short-circuit to ground"
  },
  {
    "code": "P331600",
    "description": "Ignition control cylinder 16 Short circuit to B+"
  },
  {
    "code": "P331700",
    "description": "Ignition control cylinder 16 Open circuit"
  },
  {
    "code": "P331800",
    "description": "Glow Plug/Heater Relay 2 Circ. Short circuit to B+"
  },
  {
    "code": "P331900",
    "description": "Glow Plug/Heater Relay 2 Circ. Open circuit/short circuit to ground"
  },
  {
    "code": "P332000",
    "description": "Unit Injector Valve Control 2 Short circuit to B+"
  },
  {
    "code": "P332100",
    "description": "Unit Injector Valve Control 2 Electrical malfunction in circuit"
  },
  {
    "code": "P332200",
    "description": "Relay 2 for Power Supply (B+) Terminal 30 Implausible signal"
  },
  {
    "code": "P332300",
    "description": "Voltage supply terminal 15 High Voltage"
  },
  {
    "code": "P332400",
    "description": "Voltage supply terminal 15 Open circuit"
  },
  {
    "code": "P332500",
    "description": "Voltage supply terminal 15 Implausible"
  },
  {
    "code": "P332600",
    "description": "Change-over valve for intake manifold flap 2 Short circuit to B+"
  },
  {
    "code": "P332700",
    "description": "Change-over valve for intake manifold flap 2 Open circuit/short circuit to ground"
  },
  {
    "code": "P332800",
    "description": "Intake Flap Motor 2 Short circuit to B+"
  },
  {
    "code": "P332900",
    "description": "Intake Flap Motor 2 Open circuit/short circuit to ground"
  },
  {
    "code": "P333000",
    "description": "Intake Flap Motor 2 No signal"
  },
  {
    "code": "P333100",
    "description": "Intake Flap Motor 2 Defective"
  },
  {
    "code": "P333200",
    "description": "Combustion detection in deceleration mode"
  },
  {
    "code": "P333300",
    "description": "Turbocharger (TC) control module 1 implausible message"
  },
  {
    "code": "P333400",
    "description": "Turbocharger (TC) control module 2 implausible message"
  },
  {
    "code": "P333500",
    "description": "Turbocharger (TC) control module 1 missing message"
  },
  {
    "code": "P333600",
    "description": "Turbocharger (TC) control module 2 missing message"
  },
  {
    "code": "P333700",
    "description": "Engine databus/engine implausible message"
  },
  {
    "code": "P333800",
    "description": "Activation glow time control module 1 Electrical malfunction in circuit"
  },
  {
    "code": "P333900",
    "description": "Activation glow time control module 2 Electrical malfunction in circuit"
  },
  {
    "code": "P334000",
    "description": "Charge Pressure Cooler Fan Relay Short circuit to B+"
  },
  {
    "code": "P334100",
    "description": "Charge Pressure Cooler Fan Relay Short-circuit to ground"
  },
  {
    "code": "P334200",
    "description": "Charge Pressure Cooler Fan Relay Open circuit"
  },
  {
    "code": "P334300",
    "description": "Exhaust turbocharger control module 1 Temperature too high"
  },
  {
    "code": "P334400",
    "description": "Exhaust turbocharger control module 1 Voltage supply outside the permissible range"
  },
  {
    "code": "P334500",
    "description": "Turbocharger 2 Control Module Temperature too high"
  },
  {
    "code": "P334600",
    "description": "Turbocharger 2 Control Module Voltage supply outside the permissible range"
  },
  {
    "code": "P334700",
    "description": "Glow Plug/Heater Relay Circ. Electrical malfunction"
  },
  {
    "code": "P334800",
    "description": "Activation turbocharger control unit bank 1 Electrical malfunction in circuit"
  },
  {
    "code": "P334900",
    "description": "Activation Turbocharger 2 Control Module Electrical malfunction in circuit"
  },
  {
    "code": "P334A00",
    "description": "Charge pressure actuator position sensor Electrical malfunction"
  },
  {
    "code": "P335000",
    "description": "Long Term Fuel Trim, NG Range 1 Too Lean"
  },
  {
    "code": "P335100",
    "description": "Long Term Fuel Trim, NG Range 1 Too Rich"
  },
  {
    "code": "P335200",
    "description": "Long Term Fuel Trim, NG Range 2 Too Lean"
  },
  {
    "code": "P335300",
    "description": "Long Term Fuel Trim, NG Range 2 Too Rich"
  },
  {
    "code": "P335400",
    "description": "Long Term Fuel Trim, NG Range 3 Too Lean"
  },
  {
    "code": "P335500",
    "description": "Long Term Fuel Trim, NG Range 3 Too Rich"
  },
  {
    "code": "P335600",
    "description": "Catalyst System,Bank1 during NG operation Efficiency below threshold"
  },
  {
    "code": "P335700",
    "description": "O2 Correction during NG operation Control limit reached"
  },
  {
    "code": "P335800",
    "description": "O2 Sensor Circ., exhaust gas Bank1-Sensor1 at NG operation Slow Response"
  },
  {
    "code": "P335900",
    "description": "O2 Sensor Circ., exhaust gas Bank1-Sensor1 at NG operation Heater back-coupling"
  },
  {
    "code": "P335A00",
    "description": "System too Lean at NG operation"
  },
  {
    "code": "P335B00",
    "description": "System Too Rich at NG operation"
  },
  {
    "code": "P335C00",
    "description": "Fuel tank pressure sensor high pressure Signal too high"
  },
  {
    "code": "P335D00",
    "description": "Fuel tank pressure sensor high pressure Signal too low"
  },
  {
    "code": "P336000",
    "description": "O2 Sensor Circ., exhaust gas Bank1-Sensor1 at NG operation No Activity Detected"
  },
  {
    "code": "P336100",
    "description": "NG operation Random/Multiple Cylinder. Misfire Detected"
  },
  {
    "code": "P336200",
    "description": "NG operation Cyl.1 Random/Multiple Cylinder. Misfire Detected"
  },
  {
    "code": "P336300",
    "description": "NG operation Cyl.2 Random/Multiple Cylinder. Misfire Detected"
  },
  {
    "code": "P336400",
    "description": "NG operation Cyl.3 Random/Multiple Cylinder. Misfire Detected"
  },
  {
    "code": "P336500",
    "description": "NG operation Cyl.4 Random/Multiple Cylinder. Misfire Detected"
  },
  {
    "code": "P336600",
    "description": "System pressure, NG too High"
  },
  {
    "code": "P336700",
    "description": "System pressure, NG too Low"
  },
  {
    "code": "P336800",
    "description": "O2 Sensor Signal Stuck Rich Bank 3 Sensor 1"
  },
  {
    "code": "P336900",
    "description": "O2 Sensor Signal Stuck Rich Bank 2 Sensor 1"
  },
  {
    "code": "P336A00",
    "description": "System pressure, NG Implausible signal"
  },
  {
    "code": "P336B00",
    "description": "NG temperature sensor Short circuit to B+"
  },
  {
    "code": "P336C00",
    "description": "NG temperature sensor Short-circuit to ground"
  },
  {
    "code": "P336D00",
    "description": "NG temperature sensor Implausible signal"
  },
  {
    "code": "P336E00",
    "description": "NG fuel pump relay Short circuit to B+"
  },
  {
    "code": "P336F00",
    "description": "NG fuel pump relay Short-circuit to ground"
  },
  {
    "code": "P337000",
    "description": "O2 Sensor Signal Stuck Rich Bank 3 Sensor 1"
  },
  {
    "code": "P337100",
    "description": "O2 Sensor Signal Stuck Rich Bank 2 Sensor 1"
  },
  {
    "code": "P337200",
    "description": "Intake Manifold Change-Over Valve Short circuit to B+"
  },
  {
    "code": "P337300",
    "description": "Intake Manifold Change-Over Valve Open circuit/short circuit to ground"
  },
  {
    "code": "P337400",
    "description": "Intake Manifold 2 Change-Over Valve Short circuit to B+"
  },
  {
    "code": "P337500",
    "description": "Intake Manifold 2 Change-Over Valve Open circuit/short circuit to ground"
  },
  {
    "code": "P337600",
    "description": "Intake Air Temperature Sensor 3 Signal too low"
  },
  {
    "code": "P337700",
    "description": "Intake Air Temperature Sensor 3 Signal too high"
  },
  {
    "code": "P337800",
    "description": "Intake Air Temperature Sensor 3 Implausible signal"
  },
  {
    "code": "P337900",
    "description": "NG High Pressure Valve Open circuit"
  },
  {
    "code": "P337A00",
    "description": "Voltage supply relay Short circuit to B+"
  },
  {
    "code": "P337B00",
    "description": "Voltage supply relay Short-circuit to ground"
  },
  {
    "code": "P337C00",
    "description": "Voltage supply relay Open circuit"
  },
  {
    "code": "P337D00",
    "description": "Relay for shut-off valve for high pressure valve Short circuit to B+"
  },
  {
    "code": "P337E00",
    "description": "Relay for shut-off valve for high pressure valve Short-circuit to ground"
  },
  {
    "code": "P337F00",
    "description": "Relay for shut-off valve for high pressure valve Open circuit"
  },
  {
    "code": "P338000",
    "description": "NG High Pressure Valve Short circuit to B+"
  },
  {
    "code": "P338100",
    "description": "NG High Pressure Valve Short-circuit to ground"
  },
  {
    "code": "P338200",
    "description": "Fuel Tank Pressure (FTP) Sensor -G400 Open circuit"
  },
  {
    "code": "P338300",
    "description": "Fuel Tank Pressure (FTP) Sensor -G400 Short circuit to B+"
  },
  {
    "code": "P338400",
    "description": "Fuel Tank Pressure (FTP) Sensor -G400 Short-circuit to ground"
  },
  {
    "code": "P338500",
    "description": "Fuel Rail Sensor Open circuit"
  },
  {
    "code": "P338600",
    "description": "Fuel Rail Sensor Short circuit to B+"
  },
  {
    "code": "P338700",
    "description": "Fuel Rail Sensor Short-circuit to ground"
  },
  {
    "code": "P338800",
    "description": "Fuel Injection Valve 1 Open circuit"
  },
  {
    "code": "P338900",
    "description": "Fuel Injection Valve 1 Short circuit to B+"
  },
  {
    "code": "P338A00",
    "description": "Fuel Tank Pressure (FTP) Sensor -G400 Implausible signal"
  },
  {
    "code": "P338B00",
    "description": "Fuel Tank Level Sensor Short circuit to B+"
  },
  {
    "code": "P338C00",
    "description": "Fuel Tank Level Sensor Short-circuit to ground"
  },
  {
    "code": "P338D00",
    "description": "Fuel Tank Level Sensor Implausible signal"
  },
  {
    "code": "P338E00",
    "description": "Indicator light for operating mode switch-over Short circuit to B+"
  },
  {
    "code": "P338F00",
    "description": "Indicator light for operating mode switch-over Short-circuit to ground"
  },
  {
    "code": "P339000",
    "description": "Fuel Injection Valve 1 Short-circuit to ground"
  },
  {
    "code": "P339100",
    "description": "Fuel Injection Valve 2 Open circuit"
  },
  {
    "code": "P339200",
    "description": "Fuel Injection Valve 2 Short circuit to B+"
  },
  {
    "code": "P339300",
    "description": "Fuel Injection Valve 2 Short-circuit to ground"
  },
  {
    "code": "P339400",
    "description": "Fuel Injection Valve 3 Open circuit"
  },
  {
    "code": "P339500",
    "description": "Fuel Injection Valve 3 Short circuit to B+"
  },
  {
    "code": "P339600",
    "description": "Fuel Injection Valve 3 Short-circuit to ground"
  },
  {
    "code": "P339700",
    "description": "Fuel Injection Valve 4 Open circuit"
  },
  {
    "code": "P339800",
    "description": "Fuel Injection Valve 4 Short circuit to B+"
  },
  {
    "code": "P339900",
    "description": "Fuel Injection Valve 4 Short-circuit to ground"
  },
  {
    "code": "P339A00",
    "description": "Shut-Off valve 1 for NG fuel tank Short circuit to B+"
  },
  {
    "code": "P339B00",
    "description": "Shut-Off valve 1 for NG fuel tank Short-circuit to ground"
  },
  {
    "code": "P339C00",
    "description": "Shut-Off valve 1 for NG fuel tank Open circuit"
  },
  {
    "code": "P339D00",
    "description": "Shut-Off valve 2 for NG fuel tank Short circuit to B+"
  },
  {
    "code": "P339E00",
    "description": "Shut-Off valve 2 for NG fuel tank Short-circuit to ground"
  },
  {
    "code": "P339F00",
    "description": "Shut-Off valve 2 for NG fuel tank Open circuit"
  },
  {
    "code": "P33A000",
    "description": "Shut-Off valve 3 for NG fuel tank Short circuit to B+"
  },
  {
    "code": "P33A100",
    "description": "Shut-Off valve 3 for NG fuel tank Short-circuit to ground"
  },
  {
    "code": "P33A200",
    "description": "Shut-Off valve 3 for NG fuel tank Open circuit"
  },
  {
    "code": "P33A300",
    "description": "Shut-Off valve 4 for NG fuel tank Short circuit to B+"
  },
  {
    "code": "P33A400",
    "description": "Shut-Off valve 4 for NG fuel tank Short-circuit to ground"
  },
  {
    "code": "P33A500",
    "description": "Shut-Off valve 4 for NG fuel tank Open circuit"
  }
];

const dtcDatabase = {};

// Convert array → object
rawDTCData.forEach(item => {
  dtcDatabase[item.code] = {
    code: item.code,
    description: item.description,

    // Default values (you can improve later)
    severity: "medium",
    severityExplanation: "This issue should be diagnosed to prevent further problems.",
    difficulty: "Intermediate",
    repairTime: "1–2 hours",
    estimatedCost: "$100 – $400",

    symptoms: ["Check engine light"],
    causes: ["Requires diagnosis"],
    fixes: ["Inspect system and diagnose"]
  };
});



dtcDatabase["P0500"] = {
  code: "P0500",
  description: "Vehicle Speed Sensor 'A' Malfunction",

  severity: "High",
  severityExplanation:
    "This code affects how the vehicle reads speed, which directly impacts transmission shifting and safety systems like ABS and traction control. Driving is possible short-term, but it can lead to improper shifting and loss of safety features.",

  difficulty: "Intermediate",
  repairTime: "1–3 hours",
  estimatedCost: "$100 – $600",

  deepDive:
    "The P0500 code on Audi vehicles indicates that the ECU is not receiving a proper speed signal. In real-world cases, this often shows up as a completely dead speedometer or erratic transmission behavior. On many Audi models, the vehicle speed signal doesn’t always come from a single dedicated sensor—it’s often calculated using ABS wheel speed sensors. This means the issue can come from multiple places, including the ABS module, wiring, or even a damaged tone ring. Many Audi owners initially think it's a transmission issue, but it’s usually electrical or sensor-related.",

  symptoms: [
    "Speedometer not working or reading incorrectly",
    "Erratic or harsh transmission shifting",
    "Transmission stuck in one gear (limp mode)",
    "ABS or traction control (ESP) warning lights",
    "Cruise control not working",
    "Vehicle may feel sluggish or limited in power"
  ],

  causes: [
    "Faulty vehicle speed sensor (VSS)",
    "Damaged or corroded wiring harness",
    "Faulty ABS wheel speed sensor (very common on Audi)",
    "Bad ABS control module",
    "Broken or dirty tone ring (reluctor ring)",
    "Rare: ECU/PCM issue"
  ],

  diagnosisSteps: [
    "Scan vehicle for P0500 and any ABS-related codes",
    "Check if speedometer is completely dead or intermittent",
    "Inspect wiring and connectors at the sensor and ABS module",
    "Test vehicle speed sensor output using a multimeter",
    "Scan ABS module for wheel speed sensor faults",
    "Inspect tone ring for damage or debris buildup",
    "Verify signal is reaching ECU"
  ],

  fixes: [
    "Replace faulty vehicle speed sensor",
    "Repair or replace damaged wiring",
    "Replace faulty ABS wheel speed sensor",
    "Clean or replace damaged tone ring",
    "Replace ABS module if confirmed faulty",
    "Clear codes and test drive"
  ],

  commonMistakes: [
    "Assuming it's a transmission problem first",
    "Replacing the VSS without checking ABS sensors",
    "Ignoring ABS warning lights",
    "Not scanning the ABS module for additional codes",
    "Overlooking wiring damage near wheels or transmission"
  ],

  costBreakdown: {
    diy: "$50 – $200",
    independentShop: "$150 – $400",
    dealership: "$300 – $600"
  },

  proTip: {
    title: "Check ABS Sensors Before Replacing the Speed Sensor",
    content:
      "On many Audi models, the speed signal comes from the ABS system rather than a dedicated sensor. If you have ABS or traction control lights on along with P0500, there’s a very good chance the issue is a faulty wheel speed sensor—not the transmission or main speed sensor.",
    linkText: "Learn More About ABS Sensor Issues",
    link: "https://www.audiworld.com/forums/"
  },

  relatedCodes: ["P0501", "P0502", "P0503"]
};


dtcDatabase["P0300"] = {
  code: "P0300",
  description: "Random/Multiple Cylinder Misfire Detected",

  severity: "High",
  severityExplanation:
    "A P0300 misfire can quickly damage your catalytic converter if left unresolved. Severe misfires can also lead to engine damage, stalling, and unsafe driving conditions.",

  difficulty: "Intermediate",
  repairTime: "1–3 hours",
  estimatedCost: "$100 – $1000+",

  deepDive:
    "The P0300 code indicates that multiple cylinders are misfiring randomly, rather than a single specific cylinder. On Audi engines, this is often related to ignition coil failure, worn spark plugs, or vacuum leaks. Turbocharged Audi engines are especially sensitive to ignition issues, meaning even minor faults can cause noticeable performance problems. If ignored, this condition can overheat and damage the catalytic converter.",

  symptoms: [
    "Flashing or steady check engine light",
    "Rough idle or engine shaking",
    "Hesitation or jerking during acceleration",
    "Loss of power",
    "Engine stalling or hard starting",
    "Poor fuel economy"
  ],

  causes: [
    "Worn spark plugs or ignition wires (most common)",
    "Failing ignition coil packs",
    "Vacuum leaks (hoses, intake manifold, PCV system)",
    "Clogged or dirty fuel injectors",
    "Low fuel pressure (weak pump or clogged filter)",
    "Faulty MAF, crankshaft, or camshaft sensors",
    "Low engine compression (mechanical issue)"
  ],

  diagnosisSteps: [
    "Use an OBD-II scanner to confirm P0300 and check for related codes",
    "Inspect spark plugs for wear or fouling",
    "Test ignition coils (swap between cylinders if needed)",
    "Check for vacuum leaks in hoses and intake system",
    "Test fuel pressure and inspect fuel system",
    "Scan live data for misfire counts and sensor readings",
    "Perform compression test if issue persists"
  ],

  fixes: [
    "Replace worn spark plugs",
    "Replace faulty ignition coils",
    "Repair vacuum leaks",
    "Clean or replace fuel injectors",
    "Replace fuel pump or filter if needed",
    "Replace faulty sensors (MAF, crank, cam)",
    "Address engine mechanical issues if compression is low"
  ],

  commonMistakes: [
    "Replacing only one spark plug instead of the full set",
    "Ignoring coil packs as a common failure point on Audi",
    "Skipping vacuum leak inspection",
    "Not checking fuel pressure",
    "Clearing the code without fixing the root issue"
  ],

  costBreakdown: {
    diy: "$100 – $300",
    independentShop: "$200 – $600",
    dealership: "$400 – $1000+"
  },

  relatedCodes: ["P0301", "P0302", "P0303", "P0304"]
};

// 🔥 VEHICLE SPEED SENSOR RELATED CODES

dtcDatabase["P0501"] = {
  code: "P0501",
  description: "Vehicle Speed Sensor Range/Performance",

  severity: "High",
  severityExplanation:
    "This code indicates the speed signal is inconsistent or outside expected values. It can affect transmission shifting and safety systems like ABS, making it important to address quickly.",

  difficulty: "Intermediate",
  repairTime: "1–3 hours",
  estimatedCost: "$100 – $600",

  deepDive:
    "The P0501 code means the vehicle speed signal is present but not behaving as expected. On Audi vehicles, this often shows up as erratic speedometer readings or inconsistent shifting. In many cases, this is caused by a failing wheel speed sensor or a damaged tone ring sending irregular signals. Unlike P0500, which indicates no signal, this code points to a signal that is present but unreliable.",

  symptoms: [
    "Speedometer fluctuates or reads incorrectly",
    "Erratic or delayed transmission shifting",
    "ABS or traction control warning lights",
    "Cruise control malfunction",
    "Vehicle may enter limp mode"
  ],

  causes: [
    "Failing vehicle speed sensor",
    "Faulty ABS wheel speed sensor (common)",
    "Damaged or dirty tone ring",
    "Wiring issues causing signal interference",
    "ABS module malfunction"
  ],

  diagnosisSteps: [
    "Scan for P0501 and related ABS codes",
    "Monitor live speed data for inconsistencies",
    "Inspect wheel speed sensors",
    "Check tone ring for damage or debris",
    "Inspect wiring and connectors",
    "Compare speed readings across wheels"
  ],

  fixes: [
    "Replace faulty speed sensor",
    "Replace ABS wheel speed sensor",
    "Clean or replace tone ring",
    "Repair damaged wiring",
    "Replace ABS module if necessary"
  ],

  commonMistakes: [
    "Ignoring inconsistent speed readings",
    "Replacing the wrong sensor without testing",
    "Not checking tone ring condition",
    "Skipping ABS system diagnostics"
  ],

  costBreakdown: {
    diy: "$50 – $200",
    independentShop: "$150 – $400",
    dealership: "$300 – $600"
  },

  proTip: {
    title: "Inconsistent Speed? Check the Tone Ring",
    content:
      "If your speedometer jumps around or shifts feel unpredictable, the issue is often a damaged or dirty tone ring. Even a small crack or debris can cause erratic signals on Audi vehicles.",
    linkText: "Learn More About Tone Ring Issues",
    link: "https://www.audiworld.com/forums/"
  },

  relatedCodes: ["P0500", "P0502", "P0503"]
};



dtcDatabase["P0502"] = {
  code: "P0502",
  description: "Vehicle Speed Sensor Low Input",

  severity: "High",
  severityExplanation:
    "This code indicates the speed signal is too weak or nearly absent. It can cause transmission issues and disable safety systems like ABS and traction control.",

  difficulty: "Intermediate",
  repairTime: "1–3 hours",
  estimatedCost: "$100 – $600",

  deepDive:
    "The P0502 code means the vehicle speed signal is present but too low for the ECU to properly interpret. On Audi vehicles, this is commonly caused by a failing wheel speed sensor or poor electrical connection. In real-world cases, this often leads to a speedometer that barely moves or stays near zero while driving.",

  symptoms: [
    "Speedometer reads very low or stays at zero",
    "Transmission shifting issues",
    "ABS and traction control warning lights",
    "Cruise control not working",
    "Vehicle may feel underpowered"
  ],

  causes: [
    "Weak or failing vehicle speed sensor",
    "Faulty ABS wheel speed sensor",
    "Corroded or loose wiring connections",
    "Damaged tone ring",
    "Low voltage signal to ECU"
  ],

  diagnosisSteps: [
    "Scan for P0502 and ABS-related codes",
    "Monitor speed signal using live data",
    "Inspect wiring and connectors for corrosion",
    "Test sensor output voltage",
    "Check ABS wheel speed sensors",
    "Inspect tone ring condition"
  ],

  fixes: [
    "Replace faulty speed sensor",
    "Replace ABS wheel speed sensor",
    "Repair wiring or connectors",
    "Clean or replace tone ring",
    "Clear codes and verify operation"
  ],

  commonMistakes: [
    "Ignoring weak or intermittent signals",
    "Replacing parts without testing voltage output",
    "Not checking wiring corrosion",
    "Overlooking ABS system faults"
  ],

  costBreakdown: {
    diy: "$50 – $200",
    independentShop: "$150 – $400",
    dealership: "$300 – $600"
  },

  proTip: {
    title: "Low Signal Often Means Wiring Issues",
    content:
      "If the speed signal is weak, don’t immediately replace the sensor. On many Audi vehicles, corroded connectors or damaged wiring are the real cause of low signal faults.",
    linkText: "Learn More About Wiring Issues",
    link: "https://www.audiworld.com/forums/"
  },

  relatedCodes: ["P0500", "P0501", "P0503"]
};



dtcDatabase["P0503"] = {
  code: "P0503",
  description: "Vehicle Speed Sensor Intermittent / Erratic Signal",

  severity: "High",
  severityExplanation:
    "This code indicates the speed signal is cutting in and out. This can lead to unpredictable transmission behavior and intermittent loss of safety systems.",

  difficulty: "Intermediate",
  repairTime: "1–3 hours",
  estimatedCost: "$100 – $600",

  deepDive:
    "The P0503 code indicates an intermittent or unstable speed signal. On Audi vehicles, this often shows up as a speedometer that works sometimes and fails at other times. It can also cause random shifting issues or temporary loss of ABS and traction control. In most cases, this is caused by wiring problems or failing wheel speed sensors that lose signal under certain conditions.",

  symptoms: [
    "Speedometer works intermittently",
    "Random or unpredictable shifting",
    "ABS or traction control lights turning on and off",
    "Cruise control disengaging unexpectedly",
    "Inconsistent vehicle performance"
  ],

  causes: [
    "Intermittent vehicle speed sensor failure",
    "Faulty ABS wheel speed sensor",
    "Loose or damaged wiring",
    "Connector issues",
    "Damaged tone ring causing inconsistent readings"
  ],

  diagnosisSteps: [
    "Scan for P0503 and related ABS codes",
    "Monitor live speed data for dropouts",
    "Inspect wiring for loose connections",
    "Check sensor connectors",
    "Test sensor output under different conditions",
    "Inspect tone ring for irregularities"
  ],

  fixes: [
    "Replace faulty speed sensor",
    "Replace ABS wheel speed sensor",
    "Repair or secure wiring connections",
    "Clean or replace tone ring",
    "Clear codes and verify consistent signal"
  ],

  commonMistakes: [
    "Ignoring intermittent issues until they worsen",
    "Replacing parts without testing under real conditions",
    "Overlooking loose wiring or connectors",
    "Not checking ABS system involvement"
  ],

  costBreakdown: {
    diy: "$50 – $200",
    independentShop: "$150 – $400",
    dealership: "$300 – $600"
  },

  proTip: {
    title: "Intermittent Issues Are Often Wiring Related",
    content:
      "If the problem comes and goes, focus on wiring and connectors first. Movement, heat, and vibration can cause temporary signal loss in Audi wiring harnesses.",
    linkText: "Learn More About Intermittent Faults",
    link: "https://www.audiworld.com/forums/"
  },

  relatedCodes: ["P0500", "P0501", "P0502"]
};

dtcDatabase["P0442"] = {
  code: "P0442",
  description: "Evaporative Emission System Leak Detected (Small Leak)",

  severity: "Low",
  severityExplanation:
    "This code indicates a small leak in the EVAP system. It will not usually affect drivability, but it can increase emissions and trigger inspection failures. It should be addressed, but it is not an emergency.",

  difficulty: "Beginner–Intermediate",
  repairTime: "10 minutes – 2 hours",
  estimatedCost: "$0 – $300",

  deepDive:
    "The P0442 code on Audi vehicles indicates a small leak in the EVAP (Evaporative Emission Control) system, which is responsible for capturing and reusing fuel vapors instead of releasing them into the atmosphere. In real-world cases, this is one of the most common and least serious codes—but also one of the most annoying. Many Audi owners see this code appear after refueling, and in a large percentage of cases, the issue ends up being something simple like a loose or worn gas cap. However, because the leak is small, it can also come from cracked plastic lines, failing purge valves, or tiny leaks in the system that are hard to detect without proper testing.",

  symptoms: [
    "Check engine light illuminated",
    "Slight fuel smell (especially near rear of vehicle)",
    "No noticeable performance issues",
    "Code may appear shortly after refueling"
  ],

  causes: [
    "Loose or faulty gas cap (most common)",
    "Cracked or brittle EVAP hoses (common on Audi)",
    "Faulty purge valve (N80)",
    "Faulty vent valve or leak detection pump",
    "Small leak at fuel filler neck or fuel tank"
  ],

  diagnosisSteps: [
    "Check and tighten gas cap (listen for clicks)",
    "Inspect gas cap seal for cracks or wear",
    "Clear code and drive to see if it returns",
    "Visually inspect EVAP hoses for cracks or disconnections",
    "Inspect purge valve (N80) for proper operation",
    "Perform smoke test to locate small leaks"
  ],

  fixes: [
    "Tighten or replace gas cap",
    "Replace cracked or damaged EVAP hoses",
    "Replace faulty purge valve (N80)",
    "Repair leaks in filler neck or fuel tank",
    "Replace leak detection pump if needed"
  ],

  commonMistakes: [
    "Ignoring the gas cap as a possible cause",
    "Replacing parts before checking for simple leaks",
    "Skipping smoke testing for small leaks",
    "Assuming no symptoms means no issue"
  ],

  costBreakdown: {
    diy: "$0 – $100",
    independentShop: "$100 – $250",
    dealership: "$150 – $300"
  },

  // 🔥 INTERNAL LINKING (OPTION 2)
  proTip: {
    title: "Start With the Simplest Fix First",
    content:
      "Before replacing parts, always check the gas cap and clear the code. Many small EVAP leaks on Audi vehicles are caused by something as simple as a loose or worn cap. If the issue persists, you may be dealing with a larger EVAP system problem.",
    linkText: "View Larger EVAP Leak (P0455 Guide)",
    link: "dtc.html?code=P0455"
  },

  relatedCodes: ["P0455", "P0440", "P0171"]
};

// 🔥 CYLINDER-SPECIFIC MISFIRE CODES

dtcDatabase["P0301"] = {
  code: "P0301",
  description: "Cylinder 1 Misfire Detected",

  severity: "High",
  severityExplanation:
    "A misfire in cylinder 1 can cause engine imbalance, reduced performance, and catalytic converter damage if ignored. Immediate diagnosis is recommended.",

  difficulty: "Intermediate",
  repairTime: "1–3 hours",
  estimatedCost: "$100 – $800",

  deepDive:
    "The P0301 code indicates a misfire specifically in cylinder 1. On Audi engines, this is often caused by a faulty ignition coil or worn spark plug. Since the issue is isolated to one cylinder, diagnosis is typically faster than a P0300 random misfire. However, ignoring it can lead to further engine imbalance and damage.",

  symptoms: [
    "Rough idle or engine shaking",
    "Loss of power",
    "Hesitation during acceleration",
    "Check engine light (may flash)",
    "Poor fuel economy"
  ],

  causes: [
    "Worn or fouled spark plug in cylinder 1",
    "Faulty ignition coil (very common on Audi)",
    "Fuel injector issue in cylinder 1",
    "Vacuum leak affecting cylinder 1",
    "Low compression in cylinder 1"
  ],

  diagnosisSteps: [
    "Confirm P0301 with an OBD-II scanner",
    "Inspect spark plug from cylinder 1",
    "Swap ignition coil with another cylinder to test",
    "Check fuel injector operation",
    "Inspect for vacuum leaks near cylinder 1",
    "Perform compression test if needed"
  ],

  fixes: [
    "Replace spark plug in cylinder 1",
    "Replace faulty ignition coil",
    "Clean or replace fuel injector",
    "Repair vacuum leaks",
    "Fix compression-related engine issues"
  ],

  commonMistakes: [
    "Replacing only the spark plug without checking the coil",
    "Ignoring coil pack failures (common Audi issue)",
    "Not swapping components to confirm diagnosis",
    "Skipping compression testing"
  ],

  costBreakdown: {
    diy: "$50 – $200",
    independentShop: "$150 – $400",
    dealership: "$300 – $800"
  },

  relatedCodes: ["P0300", "P0302", "P0303", "P0304"]
};



dtcDatabase["P0302"] = {
  code: "P0302",
  description: "Cylinder 2 Misfire Detected",

  severity: "High",
  severityExplanation:
    "A misfire in cylinder 2 can lead to poor engine performance and potential catalytic converter damage if not resolved promptly.",

  difficulty: "Intermediate",
  repairTime: "1–3 hours",
  estimatedCost: "$100 – $800",

  deepDive:
    "The P0302 code indicates a misfire in cylinder 2. This is commonly caused by ignition coil failure or worn spark plugs on Audi engines. Like other cylinder-specific misfires, it allows for more targeted diagnosis compared to random misfire codes.",

  symptoms: [
    "Engine shaking or rough idle",
    "Loss of acceleration power",
    "Check engine light on or flashing",
    "Poor fuel economy"
  ],

  causes: [
    "Worn spark plug in cylinder 2",
    "Faulty ignition coil",
    "Fuel injector malfunction",
    "Vacuum leak near cylinder 2",
    "Low compression"
  ],

  diagnosisSteps: [
    "Scan and confirm P0302",
    "Inspect spark plug condition",
    "Swap ignition coil with another cylinder",
    "Check injector operation",
    "Inspect for vacuum leaks",
    "Run compression test if needed"
  ],

  fixes: [
    "Replace spark plug",
    "Replace ignition coil",
    "Clean or replace injector",
    "Fix vacuum leaks",
    "Repair engine mechanical issues"
  ],

  commonMistakes: [
    "Not testing the coil before replacing parts",
    "Ignoring injector issues",
    "Skipping vacuum leak checks"
  ],

  costBreakdown: {
    diy: "$50 – $200",
    independentShop: "$150 – $400",
    dealership: "$300 – $800"
  },

  relatedCodes: ["P0300", "P0301", "P0303", "P0304"]
};



dtcDatabase["P0303"] = {
  code: "P0303",
  description: "Cylinder 3 Misfire Detected",

  severity: "High",
  severityExplanation:
    "A cylinder 3 misfire can cause noticeable engine vibration and long-term damage if left unresolved.",

  difficulty: "Intermediate",
  repairTime: "1–3 hours",
  estimatedCost: "$100 – $800",

  deepDive:
    "The P0303 code indicates a misfire in cylinder 3. On Audi engines, this is often linked to ignition system issues or fuel delivery problems. Diagnosing this code typically involves isolating the faulty component through part swapping and testing.",

  symptoms: [
    "Rough idle",
    "Engine vibration",
    "Reduced engine performance",
    "Check engine light"
  ],

  causes: [
    "Faulty spark plug",
    "Bad ignition coil",
    "Fuel injector issue",
    "Vacuum leak",
    "Low compression"
  ],

  diagnosisSteps: [
    "Confirm P0303 code",
    "Inspect spark plug",
    "Swap ignition coil",
    "Test injector",
    "Check for vacuum leaks",
    "Perform compression test"
  ],

  fixes: [
    "Replace spark plug",
    "Replace ignition coil",
    "Repair injector",
    "Fix vacuum leaks",
    "Address internal engine issues"
  ],

  commonMistakes: [
    "Replacing parts without testing",
    "Ignoring coil pack issues",
    "Skipping proper diagnosis steps"
  ],

  costBreakdown: {
    diy: "$50 – $200",
    independentShop: "$150 – $400",
    dealership: "$300 – $800"
  },

  relatedCodes: ["P0300", "P0301", "P0302", "P0304"]
};



dtcDatabase["P0304"] = {
  code: "P0304",
  description: "Cylinder 4 Misfire Detected",

  severity: "High",
  severityExplanation:
    "A misfire in cylinder 4 can result in engine imbalance and potential catalytic converter damage if not addressed quickly.",

  difficulty: "Intermediate",
  repairTime: "1–3 hours",
  estimatedCost: "$100 – $800",

  deepDive:
    "The P0304 code indicates a misfire in cylinder 4. This is typically caused by ignition system failures such as faulty coils or worn spark plugs, but can also result from fuel or compression issues.",

  symptoms: [
    "Engine shaking",
    "Poor acceleration",
    "Check engine light",
    "Rough idle"
  ],

  causes: [
    "Worn spark plug",
    "Faulty ignition coil",
    "Fuel injector issue",
    "Vacuum leak",
    "Low compression"
  ],

  diagnosisSteps: [
    "Scan for P0304",
    "Inspect spark plug",
    "Swap ignition coil",
    "Check injector",
    "Inspect vacuum system",
    "Perform compression test"
  ],

  fixes: [
    "Replace spark plug",
    "Replace ignition coil",
    "Repair injector",
    "Fix vacuum leaks",
    "Repair engine internals if needed"
  ],

  commonMistakes: [
    "Skipping coil testing",
    "Ignoring injector issues",
    "Not checking compression"
  ],

  costBreakdown: {
    diy: "$50 – $200",
    independentShop: "$150 – $400",
    dealership: "$300 – $800"
  },

  relatedCodes: ["P0300", "P0301", "P0302", "P0303"]
};






dtcDatabase["P0128"] = {
  code: "P0128",
  description: "Coolant Thermostat (Coolant Temperature Below Regulating Temperature)",

  severity: "Medium",
  severityExplanation:
    "This code means your engine is not reaching proper operating temperature. While it is generally safe to drive short-term, it can reduce fuel efficiency, cause carbon buildup, and lead to long-term engine wear if ignored.",

  difficulty: "Intermediate",
  repairTime: "1–3 hours",
  estimatedCost: "$50 – $500",

  deepDive:
    "The P0128 code on Audi vehicles typically indicates that the engine is running colder than expected. In most cases (around 70%), this is caused by a thermostat stuck open. Audi engines rely heavily on maintaining proper operating temperature, so when the thermostat fails, the engine stays in a 'warm-up mode' longer than it should. This results in richer fuel mixtures, reduced efficiency, and poor heater performance. Due to Audi’s design, the thermostat is often integrated into a housing, making replacement slightly more involved than on other vehicles.",

  symptoms: [
    "Check engine light illuminated",
    "Temperature gauge stays low or fluctuates",
    "Heater blows cold or lukewarm air",
    "Reduced fuel economy",
    "Engine takes longer than normal to warm up"
  ],

  causes: [
    "Stuck open thermostat (most common)",
    "Faulty engine coolant temperature (ECT) sensor",
    "Low coolant level",
    "Cooling system leaks",
    "Damaged wiring to temperature sensor"
  ],

  diagnosisSteps: [
    "Check coolant level and inspect for leaks",
    "Scan and confirm P0128 code",
    "Monitor live engine temperature data while driving",
    "Verify if engine reaches 170–200°F operating range",
    "Inspect thermostat operation",
    "Test or replace ECT sensor if readings seem incorrect"
  ],

  fixes: [
    "Replace thermostat assembly (most common fix)",
    "Top off coolant and repair leaks",
    "Replace faulty ECT sensor",
    "Repair damaged wiring",
    "Clear code and verify proper temperature operation"
  ],

  commonMistakes: [
    "Replacing the ECT sensor before checking the thermostat",
    "Ignoring low coolant levels",
    "Not verifying actual engine temperature with live data",
    "Assuming the issue is minor and delaying repair"
  ],

  costBreakdown: {
    diy: "$50 – $200",
    independentShop: "$150 – $400",
    dealership: "$300 – $500"
  },






  
  // 🔥 OPTIONAL PRO TIP (nice but not required)
  proTip: {
    title: "Quick Insight Before Replacing Parts",
    content:
      "If your temperature gauge never reaches the middle and your heater stays cold, the thermostat is almost always the issue on Audi vehicles. This is one of the few codes where replacing the thermostat first is often the correct move.",
    linkText: "Learn More About Thermostat Failures",
    link: "https://www.audiworld.com/forums/"
  },

  relatedCodes: ["P0117", "P0118", "P2181"]
};





dtcDatabase["P0171"] = {
  code: "P0171",
  description: "System Too Lean (Bank 1)",

  severity: "medium",
  severityExplanation: "Running too lean for extended periods can cause engine overheating, misfires, and long-term damage to valves and pistons.",

  difficulty: "Intermediate",
  repairTime: "1–2 hours",
  estimatedCost: "$50 – $300",

  deepDive: "The P0171 code on Audi vehicles indicates that the engine is running with too much air and not enough fuel on Bank 1. This is extremely common on turbocharged Audi engines due to vacuum leaks, PCV failures, and MAF sensor issues. Unlike generic explanations, Audi engines are particularly sensitive to unmetered air, meaning even a small leak can trigger this code.",

  symptoms: [
    "Rough idle, especially at startup",
    "Hesitation when accelerating",
    "Whistling or hissing noise from engine bay",
    "Poor fuel economy",
    "Check engine light illuminated"
  ],

  causes: [
    "Vacuum leaks (very common on Audi)",
    "Faulty PCV valve or breather system",
    "Dirty or failing MAF sensor",
    "Weak fuel pump or clogged filter",
    "Leaking intake manifold gasket"
  ],

  diagnosisSteps: [
    "Scan and confirm P0171 code",
    "Inspect intake system for vacuum leaks",
    "Check PCV valve operation",
    "Test MAF sensor readings",
    "Measure fuel pressure",
    "Smoke test intake system"
  ],

  fixes: [
    "Replace faulty PCV valve",
    "Repair vacuum leaks",
    "Clean or replace MAF sensor",
    "Replace fuel filter or pump",
    "Reset ECU adaptations"
  ],

  commonMistakes: [
    "Replacing O2 sensors unnecessarily",
    "Ignoring small vacuum leaks",
    "Not checking PCV system",
    "Skipping fuel pressure testing"
  ],

  costBreakdown: {
    diy: "$50 – $150",
    independentShop: "$150 – $400",
    dealership: "$300 – $800"
  }
};


dtcDatabase["P000A00"] = {
  code: "P000A00",
  description: "Intake Camshaft Position Slow Response (Bank 1)",

  severity: "Medium-High",
  severityExplanation:
    "This code indicates the camshaft timing is not adjusting properly. If ignored, it can lead to poor engine performance, misfires, and potential long-term timing system damage.",

  difficulty: "Intermediate",
  repairTime: "1–3 hours",
  estimatedCost: "$100 – $900",

  deepDive:
    "The P000A00 code is common on Audi engines, especially 2.0T models. It means the intake camshaft is not responding quickly enough when the ECU commands timing changes. This is often caused by oil flow issues, a faulty camshaft adjustment valve (N205), or timing chain wear. Audi engines rely heavily on precise cam timing, so even small delays can trigger this fault.",

  symptoms: [
    "Check engine light illuminated",
    "Rough idle or unstable engine behavior",
    "Loss of power during acceleration",
    "Engine hesitation",
    "Reduced fuel efficiency"
  ],

  causes: [
    "Dirty or low engine oil",
    "Faulty N205 camshaft adjustment valve",
    "Clogged oil passages",
    "Stretched timing chain",
    "Failing timing chain tensioner",
    "Wiring issues to camshaft position sensor"
  ],

  diagnosisSteps: [
    "Check engine oil level and condition (replace if dirty or incorrect viscosity)",
    "Scan and confirm P000A00 code",
    "Inspect N205 camshaft adjustment valve for proper operation",
    "Check wiring and connectors to camshaft position sensor",
    "Inspect timing chain and tensioner for wear",
    "Perform live data scan to monitor camshaft timing response"
  ],

  fixes: [
    "Change engine oil and use correct Audi-approved oil",
    "Replace faulty N205 camshaft adjustment valve",
    "Repair or replace damaged wiring",
    "Clean clogged oil passages if necessary",
    "Replace timing chain and tensioner if worn"
  ],

  commonMistakes: [
    "Ignoring oil quality and viscosity issues",
    "Replacing sensors without checking oil flow",
    "Overlooking timing chain stretch",
    "Not inspecting the N205 valve first (common failure point)"
  ],

  costBreakdown: {
    diy: "$50 – $300",
    independentShop: "$200 – $700",
    dealership: "$400 – $900+"
  },

  relatedCodes: ["P0010", "P0011", "P000B00"]
};


dtcDatabase["P0420"] = {
  code: "P0420",
  description: "Catalyst System Efficiency Below Threshold (Bank 1)",

  severity: "Medium",
  severityExplanation:
    "This code indicates that the catalytic converter is not operating efficiently. While the vehicle may still drive normally, prolonged driving can lead to increased emissions and potential damage to the catalytic converter or O2 sensors.",

  difficulty: "Intermediate",
  repairTime: "1–3 hours",
  estimatedCost: "$50 – $1400+",

  deepDive:
    "The P0420 code is one of the most common and frustrating codes on Audi vehicles. It typically indicates that the catalytic converter is no longer operating efficiently. However, in many Audi cases—especially with aftermarket catalytic converters—the issue is not always a completely failed converter, but rather how the downstream O2 sensor reads exhaust gases. This makes diagnosis tricky and often leads to unnecessary part replacements.",

  symptoms: [
    "Check engine light illuminated",
    "No noticeable drivability issues (in many cases)",
    "Reduced fuel efficiency (sometimes)",
    "Possible sulfur or rotten egg smell from exhaust"
  ],

  causes: [
    "Worn or failing catalytic converter",
    "Aftermarket catalytic converter inefficiency",
    "Faulty downstream O2 sensor",
    "Exhaust leaks near catalytic converter",
    "Engine running rich or lean for extended periods"
  ],

  diagnosisSteps: [
    "Scan and confirm P0420 code",
    "Check for exhaust leaks",
    "Inspect upstream and downstream O2 sensor readings",
    "Verify engine is not running rich or lean",
    "Confirm catalytic converter efficiency using live data",
    "Determine if converter is OEM or aftermarket"
  ],

  fixes: [
    "Replace catalytic converter (OEM recommended)",
    "Replace faulty O2 sensor",
    "Repair exhaust leaks",
    "Fix underlying engine issues (misfires, fuel trims)",
    "Install O2 spacer (temporary workaround in some cases)"
  ],

  commonMistakes: [
    "Replacing O2 sensors without verifying converter health",
    "Ignoring engine performance issues causing the code",
    "Installing cheap aftermarket catalytic converters",
    "Not checking for exhaust leaks"
  ],

  costBreakdown: {
    diy: "$50 – $300 (sensor or spacer)",
    independentShop: "$300 – $900",
    dealership: "$900 – $1400+"
  },

  // 🔥 SPECIAL FEATURE SECTION (YOUR IDEA)
  proTip: {
    title: "Real-World Fix (Before Replacing the Catalytic Converter)",
    content:
      "If you’ve already replaced multiple components and still have the P0420 code, some Audi owners have found success using an O2 sensor spacer on the downstream sensor. This creates a slight gap that changes how exhaust gases are read, helping the system stay within acceptable limits—especially with aftermarket catalytic converters. This is not a guaranteed fix, but it has helped many avoid costly catalytic converter replacements.",
    linkText: "Read Full Fix Guide",
    link: "https://www.audiworld.com/forums/1-8t-discussion-98/p0420-nightmare-2796888/"
  },

  relatedCodes: ["P0430", "P0171", "P0300"]
};

