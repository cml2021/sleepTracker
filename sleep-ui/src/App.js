import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { add, set } from "date-fns";
import "./App.css";
import Home from "./pages/Home";
import EntryDate from "./pages/CreateEntry/EntryDate";
import EntryBedtime from "./pages/CreateEntry/EntryBedtime";
import EntrySleeptime from "./pages/CreateEntry/EntrySleepTime";

function App() {

  // Try date-fns for date management

  const yesterday = add(new Date(), {days: -1})
  const defaultBedtime = set(yesterday, {hours: 22, minutes: 0, seconds: 0, milliseconds: 0}) // yesterday at 10:00 PM

  const [date, setDate] = useState(yesterday);
  const [bedtime, setBedtime] = useState(defaultBedtime);
  const [sleeptime, setSleeptime] = useState(defaultBedtime);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entry-date" element={<EntryDate date={date} setDate={setDate} />} />
          <Route path="/entry-bedtime" element={<EntryBedtime date={date} bedtime={bedtime} setBedtime={setBedtime} setSleeptime={setSleeptime} />} />
          <Route path="/entry-sleeptime" element={<EntrySleeptime sleeptime={sleeptime} setSleeptime={setSleeptime} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
