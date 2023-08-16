import React from "react";
import "./App.css";
import Dashboard from  "./component/Dashboard/Dashboard"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/dashboard' exact element={<Dashboard/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
