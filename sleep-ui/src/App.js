import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { add, set } from "date-fns";
import "./App.css";
import Home from "./pages/Home";
import EntryDate from "./pages/CreateEntry/EntryDate";
import EntryBedtime from "./pages/CreateEntry/EntryBedtime";
import EntrySleeptime from "./pages/CreateEntry/EntrySleepTime";
import EntrySleepDelay from "./pages/CreateEntry/EntrySleepDelay";
import EntryWakeupFrequency from "./pages/CreateEntry/EntryWakeupFrequency";
import EntryWakeupDuration from "./pages/CreateEntry/EntryWakeupDuration";
import EntryFinalWakeup from "./pages/CreateEntry/EntryFinalWakeup";
import EntryUptime from "./pages/CreateEntry/EntryUptime";

function App() {

  // Try date-fns for date management
  const yesterday = add(new Date(), {days: -1})
  const defaultBedtime = set(yesterday, {hours: 22, minutes: 0, seconds: 0, milliseconds: 0}) // yesterday at 10:00 PM
  const defaultWaketime = set(new Date(), {hours: 6, minutes: 0, seconds: 0, milliseconds: 0}) // today at 6:00 AM

  const [date, setDate] = useState(yesterday);
  const [bedtime, setBedtime] = useState(defaultBedtime);
  const [sleeptime, setSleeptime] = useState(defaultBedtime);
  const [sleepdelay, setSleepdelay] = useState(0);
  const [awakenings, setAwakenings] = useState(0);
  const [awakeningsDuration, setAwakeningsDuration] = useState(0);
  const [waketime, setWaketime] = useState(defaultWaketime);
  const [uptime, setUptime] = useState(defaultWaketime);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entry-date" element={<EntryDate date={date} setDate={setDate} />} />
          <Route path="/entry-bedtime" element={<EntryBedtime date={date} bedtime={bedtime} setBedtime={setBedtime} setSleeptime={setSleeptime} />} />
          <Route path="/entry-sleeptime" element={<EntrySleeptime bedtime={bedtime} sleeptime={sleeptime} setSleeptime={setSleeptime} setWaketime={setWaketime} />} />
          <Route path="/entry-sleepdelay" element={<EntrySleepDelay setSleepdelay={setSleepdelay}/>}/>
          <Route path="/entry-wake-frequency" element={<EntryWakeupFrequency awakenings={awakenings} setAwakenings={setAwakenings} />} />
          <Route path="/entry-wake-duration" element={<EntryWakeupDuration setAwakeningsDuration={setAwakeningsDuration}/>} />
          <Route path="/entry-final-wake" element={<EntryFinalWakeup waketime={waketime} setWaketime={setWaketime} setUptime={setUptime}/>} />
          <Route path="/entry-final-up" element={<EntryUptime uptime={uptime} setUptime={setUptime}/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
