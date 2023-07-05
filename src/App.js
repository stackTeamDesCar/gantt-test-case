import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scheduler from "./pages/Scheduler";


export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Scheduler />} />
        </Routes>
      </div>
    </Router>
  );
}
