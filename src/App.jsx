import { useState } from "react";
import "./App.css";

function App() {
  // =========================
  // LOGIN
  // =========================

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState("");


  // =========================
  // PATIENT DETAILS
  // =========================

  const [patient, setPatient] = useState({
    id: "",
    name: "",
    age: "",
    gender: "",
    weight: "",
    gestationalAge: "",
  });


  const [monitoringStarted, setMonitoringStarted] = useState(false);


  // =========================
  // LOGIN FUNCTION
  // =========================

  const handleLogin = (e) => {
    e.preventDefault();

    if (loginId === "admin" && password === "neonatal123") {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid Admin ID or Password");
    }
  };


  // =========================
  // PATIENT DETAILS
  // =========================

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    setMonitoringStarted(true);
  };


  // ==================================================
  // PAGE 1 — LOGIN
  // ==================================================

  if (!isLoggedIn) {
    return (
      <div className="login-page">

        <div className="login-card">

          <div className="login-icon">
            +
          </div>

          <h1>Neonatal Jaundice</h1>

          <p className="login-subtitle">
            Monitoring System
          </p>


          <form onSubmit={handleLogin}>

            <label>Admin ID</label>

            <input
              type="text"
              placeholder="Enter Admin ID"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
            />


            <label>Password</label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />


            {loginError && (
              <p className="login-error">
                {loginError}
              </p>
            )}


            <button type="submit">
              LOGIN
            </button>

          </form>

        </div>

      </div>
    );
  }


  // ==================================================
  // PAGE 2 — PATIENT DETAILS
  // ==================================================

  if (!monitoringStarted) {
    return (
      <div className="App">

        <div className="header">

          <div>
            <h1>
              Neonatal Jaundice Monitoring
            </h1>

            <p>
              Non-Invasive Bilirubin Monitoring System
            </p>
          </div>

          <button
            className="logout-button"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>

        </div>


        <div className="patient-card">

          <h2>
            Patient Details
          </h2>


          <form onSubmit={handleSubmit}>

            <label>
              Patient ID
            </label>

            <input
              type="text"
              name="id"
              placeholder="Enter Patient ID"
              value={patient.id}
              onChange={handleChange}
              required
            />


            <label>
              Baby Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter Baby Name"
              value={patient.name}
              onChange={handleChange}
              required
            />


            <label>
              Age
            </label>

            <div className="input-with-unit">

              <input
                type="number"
                name="age"
                placeholder="Enter Age"
                value={patient.age}
                onChange={handleChange}
                required
              />

              <span>days</span>

            </div>


            <label>
              Gender
            </label>

            <select
              name="gender"
              value={patient.gender}
              onChange={handleChange}
              required
            >

              <option value="">
                Select Gender
              </option>

              <option value="Male">
                Male
              </option>

              <option value="Female">
                Female
              </option>

            </select>


            <label>
              Birth Weight
            </label>

            <div className="input-with-unit">

              <input
                type="number"
                step="0.1"
                name="weight"
                placeholder="Enter Weight"
                value={patient.weight}
                onChange={handleChange}
                required
              />

              <span>kg</span>

            </div>


            <label>
              Gestational Age
            </label>

            <div className="input-with-unit">

              <input
                type="number"
                name="gestationalAge"
                placeholder="Enter Weeks"
                value={patient.gestationalAge}
                onChange={handleChange}
                required
              />

              <span>weeks</span>

            </div>


            <button type="submit">
              START MONITORING
            </button>

          </form>

        </div>

      </div>
    );
  }


  // ==================================================
  // PAGE 3 — MONITORING DASHBOARD
  // ==================================================

  return (
    <div className="dashboard">

      <div className="header">

        <div>

          <h1>
            Neonatal Jaundice Monitoring
          </h1>

          <p>
            Real-Time Bilirubin Monitoring
          </p>

        </div>


        <button
          className="logout-button"
          onClick={() => {
            setIsLoggedIn(false);
            setMonitoringStarted(false);
          }}
        >
          Logout
        </button>

      </div>


      {/* PATIENT INFORMATION */}

      <div className="patient-info">

        <div>
          <strong>Patient ID:</strong>{" "}
          {patient.id}
        </div>

        <div>
          <strong>Baby:</strong>{" "}
          {patient.name}
        </div>

        <div>
          <strong>Age:</strong>{" "}
          {patient.age} days
        </div>

        <div>
          <strong>Gender:</strong>{" "}
          {patient.gender}
        </div>

      </div>


      {/* MAIN READING */}

      <div className="main-reading">

        <h2>
          ESTIMATED BILIRUBIN LEVEL
        </h2>

        <div className="bilirubin-value">
          10.3 mg/dL
        </div>

        <div className="status">
          PHYSIOLOGICAL JAUNDICE
        </div>

      </div>


      {/* SENSOR VALUES */}

      <div className="sensor-container">

        <div className="sensor-card">

          <h3>
            FOREHEAD SENSOR
          </h3>

          <div className="sensor-value">
            8.6 mg/dL
          </div>

          <p>
            Sensor Connected
          </p>

        </div>


        <div className="sensor-card">

          <h3>
            STERNUM SENSOR
          </h3>

          <div className="sensor-value">
            12.0 mg/dL
          </div>

          <p>
            Sensor Connected
          </p>

        </div>


        <div className="sensor-card">

          <h3>
            BATTERY
          </h3>

          <div className="sensor-value">
            82%
          </div>

          <p>
            Device Active
          </p>

        </div>

      </div>


      {/* MEASUREMENTS */}

      <div className="monitor-card">

        <h2>
          Current Measurement
        </h2>


        <div className="measurement-row">

          <span>
            Forehead Bilirubin
          </span>

          <strong>
            8.6 mg/dL
          </strong>

        </div>


        <div className="measurement-row">

          <span>
            Sternum Bilirubin
          </span>

          <strong>
            12.0 mg/dL
          </strong>

        </div>


        <div className="measurement-row">

          <span>
            Estimated TcB
          </span>

          <strong>
            10.3 mg/dL
          </strong>

        </div>

      </div>

    </div>
  );
}

export default App;