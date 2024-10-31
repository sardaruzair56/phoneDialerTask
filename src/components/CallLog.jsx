import React from "react";
import { useNavigate } from "react-router-dom";
import { useCallContext } from "../context/CallContext";

const CallLog = () => {
  const { callLog, deleteFromCallLog } = useCallContext();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white p-4">
      <div className="flex justify-center items-center mb-6">
        <h2 className="text-3xl font-semibold">All Call Logs</h2>
      </div>

      <ul className="space-y-4">
        {callLog.map((log) => (
          <li
            key={log.id}
            className="flex justify-between items-center p-4 bg-gray-800 rounded-lg shadow w-full"
          >
            <div>
              <span className="text-lg font-semibold text-red-600">
                {log.number}
              </span>
              <p className="text-gray-400 text-sm">Phone Call Audio</p>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400 mr-4">{log.time}</span>
              <button
                onClick={() => deleteFromCallLog(log.id)}
                className="text-2xl"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-[85vh] ml-[50%] flex justify-center fixed">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-gray-700 text-2xl rounded-lg"
        >
          📞
        </button>
      </div>
    </div>
  );
};

export default CallLog;
