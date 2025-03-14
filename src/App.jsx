import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./pages/RegistrationForm";
import DisplayInfo from "./components/DisplayInfo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/users" element={<DisplayInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
