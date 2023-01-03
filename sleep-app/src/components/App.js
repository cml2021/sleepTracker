import React from "react";
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom";
import AddEntryPage from "../pages/AddEntryPage";
import DiaryPage from "../pages/DiaryPage";
import HomePage from "../pages/HomePage"
import '../styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/add-entry" element={AddEntryPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
