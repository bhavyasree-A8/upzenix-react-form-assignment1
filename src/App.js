import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./components/FormPage";
import DetailsPage from "./components/DetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
