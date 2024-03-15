import React, { useState } from "react";

const APICallExam = () => {
  const [secretCode, setSecretCode] = useState(null);

  const handleClick = async () => {
    try {
      const passcode = "ehen2rfow";
      const response = await fetch("https://webdev2-class-demo.vercel.app/api/sampleReqs/" + passcode);
      const data = await response.json();
      setSecretCode(data.secretCode);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button onClick={handleClick} className="bg-red-100 p-2 rounded-md border border-red-500">
          Submit
        </button>
      </div>
      {secretCode && (
        <div className="flex items-center justify-center mt-4">
          <p className="text-green-500">Secret Code: {secretCode}</p>
        </div>
      )}
    </div>
  );
};

export default APICallExam;
