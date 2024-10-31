
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCallContext } from '../context/CallContext';

const Dialer = () => {
  const { dialedNumber, setDialedNumber, addToCallLog } = useCallContext();
  const navigate = useNavigate();

  const handleButtonClick = (num) => {
    setDialedNumber((prev) => prev + num);
  };

  const handleCall = () => {
    if (dialedNumber) {
      addToCallLog(dialedNumber);
      navigate('/dialed'); 
    }
  };

  const handleCancel = () => {
    setDialedNumber((prev) => prev.slice(0, -1)); 
  };


  useEffect(() => {
    setDialedNumber('');
  }, []);

  const dialPad = [
    { label: '1', letters: '' },
    { label: '2', letters: 'ABC' },
    { label: '3', letters: 'DEF' },
    { label: '4', letters: 'GHI' },
    { label: '5', letters: 'JKL' },
    { label: '6', letters: 'MNO' },
    { label: '7', letters: 'PQRS' },
    { label: '8', letters: 'TUV' },
    { label: '9', letters: 'WXYZ' },
    { label: '*', letters: '' },
    { label: '0', letters: '+' },
    { label: '#', letters: '' },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-4xl font-semibold mb-4">{dialedNumber || 'Enter Number'}</div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {dialPad.map((button) => (
          <button
            key={button.label}
            className="flex flex-col items-center justify-center hover:bg-zinc-600 w-16 h-16 rounded-full bg-gray-800 text-xl"
            onClick={() => handleButtonClick(button.label)}
          >
            <span>{button.label}</span>
            <span className="text-xs">{button.letters}</span>
          </button>
        ))}
      </div>
 <div className='flex flex-row gap-4 ml-14'>
      <button
        onClick={handleCall}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-3xl"
      >
        📞
      </button>
      <button
          onClick={handleCancel}
          className="flex items-center justify-center w-7 h-7 mt-4 rounded-full bg-gray-700 text-lg"
        >
          ❌
        </button>
        </div>
    </div>
  );
};

export default Dialer;
