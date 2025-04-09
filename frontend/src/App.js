import React, { useState } from "react";
import axios from "axios";

function App() {
  const [results, setResults] = useState("User is not logged in");

  const handleLoginWithGoogle = () => {
    window.location.href = "http://localhost/auth/login/google-oauth2/";
  };

  const handleGetUser = async () => {
    try {
      const response = await axios.get("http://localhost/api/user/", {
        withCredentials: true,
      });
      setResults(`Current user: ${JSON.stringify(response.data, null, 2)}`);
    } catch (error) {
      setResults(
        `Not logged in or error: ${
          error.response?.data?.detail || error.message
        }`
      );
    }
  };

  const getCsrfToken = () => {
    const name = "csrftoken";
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split("=");
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  };

  const handleLogout = async () => {
    try {
      const csrfToken = getCsrfToken();
      await axios.post(
        "http://localhost/api/logout/",
        {},
        {
          headers: {
            "X-CSRFToken": csrfToken,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setResults("Successfully logged out");
    } catch (error) {
      setResults(
        `Logout error: ${error.response?.data?.detail || error.message}`
      );
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React + Django + Google OAuth</h1>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={handleLoginWithGoogle} style={{ marginRight: "10px" }}>
          Login with Google
        </button>
        <button onClick={handleGetUser} style={{ marginRight: "10px" }}>
          Get Current User
        </button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      {/* Use <pre> for formatted JSON output */}
      <pre
        style={{
          whiteSpace: "pre-wrap",
          color: results.includes("error") ? "red" : "black",
        }}
      >
        {results}
      </pre>
    </div>
  );
}

export default App;
