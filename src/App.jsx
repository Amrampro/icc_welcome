import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Annuaire from "./pages/Annuaire";
import Planning from "./pages/Planning";
import Departements from "./pages/Departements";
import Welcome from "./pages/Welcome";
import Star from "./pages/Star";
import Cellules from "./pages/Cellules";
import Page404 from "./pages/Page404";
import CellulesList from "./pages/cdm/CellulesList";
import RdvPastoral from "./pages/RdvPastoral";
import Formations from "./pages/Formations";
import CorpsPastoral from "./pages/CorpsPastoral";
import SinglePastor from "./pages/corpspastoral/single";
import ComingSoon from "./pages/ComingSoon";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/annuaire" element={<Annuaire />} />
          <Route path="/departements" element={<Departements />} />
          <Route path="/star" element={<Star />} />
          <Route path="/cellules" element={<Cellules />} />
          <Route path="/cdm" element={<CellulesList />} />
          <Route path="/rdv-pastoral" element={<RdvPastoral />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/ministeres" element={<ComingSoon />} />
          <Route path="/unavailable" element={<ComingSoon />} />
          
          {/* Routes for Corps Pastoral */}
          <Route path="/corp-pastoral" element={<CorpsPastoral />} />
          <Route path="/corp-pastoral/:id" element={<SinglePastor />} />

          {/* 404 Page */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
