import { useEffect, useState } from "react";
import axios from "axios"; // 1. Import Axios

function App() {
  const [serverText, setServerText] = useState("Connecting...");

  useEffect(() => {
    // 2. Make a direct request to the full backend URL
    axios
      .get("http://localhost:5000/api")
      .then((response) => {
        // 3. Put the data from the backend into your state
        setServerText(response.data.text);
      })
      .catch((error) => {
        console.error("Connection failed:", error);
        setServerText("Could not connect to backend.");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Direct Axios Connection</h1>
      <p>
        Backend says: <strong>{serverText}</strong>
      </p>
    </div>
  );
}

export default App;
