
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CallProvider } from './context/CallContext';
import Dialer from './components/Dialer';
import DialedNumber from './components/DialedNumber';
import CallLog from './components/CallLog';

const App = () => {
  return (
    <CallProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dialer />} />
          <Route path="/dialed" element={<DialedNumber />} />
          <Route path="/call-log" element={<CallLog />} />
        </Routes>
      </Router>
    </CallProvider>
  );
};

export default App;
