import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { add, set } from "date-fns";
import "./App.css";
import Home from "./pages/Home";
import EntryDate from "./pages/CreateEntry/EntryDate";
import EntryBedtime from "./pages/CreateEntry/EntryBedtime";
import EntrySleeptime from "./pages/CreateEntry/EntrySleepTime";
import EntrySleepDelay from "./pages/CreateEntry/EntrySleepDelay";

function App() {

  // Try date-fns for date management

  const yesterday = add(new Date(), {days: -1})
  const defaultBedtime = set(yesterday, {hours: 22, minutes: 0, seconds: 0, milliseconds: 0}) // yesterday at 10:00 PM

  const [date, setDate] = useState(yesterday);
  const [bedtime, setBedtime] = useState(defaultBedtime);
  const [sleeptime, setSleeptime] = useState(defaultBedtime);
  const [sleepdelay, setSleepdelay] = useState(0);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entry-date" element={<EntryDate date={date} setDate={setDate} />} />
          <Route path="/entry-bedtime" element={<EntryBedtime date={date} bedtime={bedtime} setBedtime={setBedtime} setSleeptime={setSleeptime} />} />
          <Route path="/entry-sleeptime" element={<EntrySleeptime bedtime={bedtime} sleeptime={sleeptime} setSleeptime={setSleeptime} />} />
          <Route path="entry-sleepdelay" element={<EntrySleepDelay sleepdelay={sleepdelay} setSleepdelay={setSleepdelay}/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
