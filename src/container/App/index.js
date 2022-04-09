import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/" element={<Navigate to="/homepage" />} /> */}
    </Routes>
  );
}

export default App;
