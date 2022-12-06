import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { add, set } from "date-fns";
import "./App.css";
import Home from "./pages/Home";
import SetDate from "./pages/CreateEntry/SetDate";
import SetTimeIntoBed from "./pages/CreateEntry/SetTimeIntoBed";
import SetSleepTimeAttempted from "./pages/CreateEntry/SetSleepTimeAttempted";
import EntrySleepDelay from "./pages/CreateEntry/EntrySleepDelay";
import SetNumberAwakenings from "./pages/CreateEntry/SetNumberAwakenings";
import SetDurationAwakenings from "./pages/CreateEntry/SetDurationAwakenings";
import SetTimeFinalAwakening from "./pages/CreateEntry/SetTimeFinalAwakening";
import SetTimeOutOfBed from "./pages/CreateEntry/SetTimeOutOfBed";
import SetQualityRating from "./pages/CreateEntry/SetQualityRating";
import SetComments from "./pages/CreateEntry/SetComments";

function App() {

  const yesterday = add(new Date(), {days: -1})
  const defaultBedtime = set(yesterday, {hours: 22, minutes: 0, seconds: 0, milliseconds: 0}) // yesterday at 10:00 PM
  const defaultWaketime = set(new Date(), {hours: 6, minutes: 0, seconds: 0, milliseconds: 0}) // today at 6:00 AM

  const [date, setDate] = useState(yesterday);
  const [timeIntoBed, setTimeIntoBed] = useState(defaultBedtime);
  const [timeSleepAttempted, setTimeSleepAttempted] = useState(defaultBedtime);
  const [sleepDelay, setSleepDelay] = useState(0);
  const [numberAwakenings, setNumberAwakenings] = useState(0);
  const [durationAwakenings, setDurationAwakenings] = useState(0);
  const [timeFinalAwakening, setTimeFinalAwakening] = useState(defaultWaketime);
  const [timeOutOfBed, setTimeOutOfBed] = useState(defaultWaketime);
  const [qualityRating, setQualityRating] = useState('Fair');
  const [comments, setComments] = useState('');

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-entry/date" element={<SetDate date={date} setDate={setDate} />} />
          <Route path="/new-entry/time-into-bed" element={<SetTimeIntoBed date={date} timeIntoBed={timeIntoBed} setTimeIntoBed={setTimeIntoBed} setTimeSleepAttempted={setTimeSleepAttempted} />} />
          <Route path="/new-entry/time-sleep-attempted" element={<SetSleepTimeAttempted timeIntoBed={timeIntoBed} timeSleepAttempted={timeSleepAttempted} setTimeSleepAttempted={setTimeSleepAttempted} setTimeFinalAwakening={setTimeFinalAwakening} />} />
          <Route path="/new-entry/sleep-delay" element={<EntrySleepDelay setSleepDelay={setSleepDelay}/>}/>
          <Route path="/new-entry/number-awakenings" element={<SetNumberAwakenings numberAwakenings={numberAwakenings} setNumberAwakenings={setNumberAwakenings} />} />
          <Route path="/new-entry/duration-awakenings" element={<SetDurationAwakenings setDurationAwakenings={setDurationAwakenings}/>} />
          <Route path="/new-entry/time-final-awakening" element={<SetTimeFinalAwakening timeFinalAwakening={timeFinalAwakening} setTimeFinalAwakening={setTimeFinalAwakening} setTimeOutOfBed={setTimeOutOfBed}/>} />
          <Route path="/new-entry/time-out-of-bed" element={<SetTimeOutOfBed timeOutOfBed={timeOutOfBed} setTimeOutOfBed={setTimeOutOfBed}/>} />
          <Route path="/new-entry/quality-rating" element={<SetQualityRating qualityRating={qualityRating} setQualityRating={setQualityRating} />} />
          <Route path="/new-entry/comments" element={<SetComments comments={comments} setComments={setComments} payload={[date, timeIntoBed, timeSleepAttempted, sleepDelay, numberAwakenings, durationAwakenings, timeFinalAwakening, timeOutOfBed, qualityRating, comments]}/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
