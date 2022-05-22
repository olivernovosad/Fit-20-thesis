import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Festival from "./Components/Festival/festival";
import Science from "./Components/Stories pages/science";

import Presentation from "./Components/Event pages/Presentation";

import SHardware from "./Components/Spec pages/spec-hardware";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Festival" element={<Festival />} />
      <Route path="/Science" element={<Science />} />

      <Route path="/Presentation" element={<Presentation />} />

      <Route path="/Spec-Hardware" element={<SHardware />} />
    </Routes>
  </BrowserRouter>
);
