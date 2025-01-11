import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Annuaire from "./pages/Annuaire";
import Welcome from "./pages/Welcome";
import Star from "./pages/Star";
import Cellules from "./pages/Cellules";
import Page404 from "./pages/page404";
import CellulesList from "./pages/cdm/CellulesList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/annuaire" element={<Annuaire />} />
          <Route path="/star" element={<Star />} />
          <Route path="/cellules" element={<Cellules />} />
          <Route path="/cdm" element={<CellulesList />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
