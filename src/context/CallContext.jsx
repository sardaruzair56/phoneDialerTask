import React, { createContext, useContext, useState } from 'react';

const CallContext = createContext();

export const CallProvider = ({ children }) => {
  const [dialedNumber, setDialedNumber] = useState('');
  const [callLog, setCallLog] = useState([]);

  const addToCallLog = (number) => {
    const newLog = {
      id: Date.now(),
      number,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      missed: false, 
    };
    setCallLog((prevLog) => [...prevLog, newLog]);
  };

  const deleteFromCallLog = (id) => {
    setCallLog((prevLog) => prevLog.filter((log) => log.id !== id));
  };
  
  return (
    <CallContext.Provider value={{ dialedNumber, setDialedNumber, callLog, addToCallLog, deleteFromCallLog }}>
      {children}
    </CallContext.Provider>
  );
};

export const useCallContext = () => useContext(CallContext);
