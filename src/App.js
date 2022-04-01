import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Gantt from "./pages/Gantt";
import Page from "./pages/Page";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Page</Link>
          </li>
          <li>
            <Link to="/Gantt">Gantt</Link>
          </li>
        </ul>

        <Routes>
          <Route exact path="/" element={<Page />} />
          <Route path="/Gantt" element={<Gantt />} />
        </Routes>
      </div>
    </Router>
  );
}
