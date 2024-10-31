import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCallContext } from "../context/CallContext";

const DialedNumber = () => {
  const { dialedNumber } = useCallContext();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/call-log"); 
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-sm text-gray-400 mb-1">calling mobile...</div>
      <div className="text-3xl font-bold mb-8">{dialedNumber}</div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Speaker", icon: "🔊" },
          { label: "FaceTime", icon: "📹" },
          { label: "Mute", icon: "🔇" },
          { label: "Add", icon: "➕" },
          { label: "End", icon: "📞", isEnd: true },
          { label: "Keypad", icon: "🔢" },
        ].map((option) => (
          <button
            key={option.label}
            className={`flex flex-col items-center justify-center w-16 h-16 rounded-full ${
              option.isEnd ? "bg-red-600" : "bg-gray-700"
            } text-white`}
            onClick={() => option.isEnd && navigate("/call-log")}
          >
            <span className="text-xl">{option.icon}</span>
            <span className="text-xs mt-1">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DialedNumber;
