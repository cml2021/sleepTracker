import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import EntryDate from "./pages/CreateEntry/EntryDate";
import EntryBedtime from "./pages/CreateEntry/EntryBedtime";

function App() {

  const today = new Date();
  const yesterday = today.setDate(today.getDate() - 1);

  const [date, setDate] = useState(yesterday);
  const [bedtime, setBedtime] = useState('');

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/entry-date" element={<EntryDate date={date} setDate={setDate} />}/>
          <Route path="/entry-bedtime" element={<EntryBedtime date={date} setBedtime={setBedtime}/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
