import React from "react";
import "./App.css";
import Dashboard from "./component/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
