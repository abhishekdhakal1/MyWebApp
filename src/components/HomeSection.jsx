import React from "react";

const HomeSection = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 relative overflow-hidden">
      <div className="text-white text-4xl font-bold z-10">Abhishek Dhakal</div>

      <div
        className="absolute"
        style={{
          top: "50%",
          left: "60%",
          transformOrigin: "center",
          animation: "rotateAround 5s linear infinite",
        }}
      >
        <div
          className="text-pink-500 text-xl"
          style={{
            transform: "translateX(150px)",
          }}
        >
          Abhishek Dhakal
        </div>
        <div
          className="text-pink-500 text-xl"
          style={{
            transform: "translateX(-700px)",
          }}
        >
          Abhishek Dhakal
        </div>
      </div>

      <style>
        {`
          @keyframes rotateAround {
            0% { transform: rotate(0deg) translateX(150px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default HomeSection;
