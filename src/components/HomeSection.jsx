import React from 'react';

const HomeSection = () => {
  // Create an array of 50 items
  const words = Array.from({ length: 50 });

  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Background/Floating Words */}
      {words.map((_, i) => {
        // Randomly generate positions for each word
        const top = Math.floor(Math.random() * 90) + "%";
        const left = Math.floor(Math.random() * 80) + "%";
        const delay = (Math.random() * 5).toFixed(2) + "s";
        const duration = (3 + Math.random() * 4).toFixed(2) + "s";

        return (
          <span
            key={i}
            className="absolute text-white font-black text-4xl md:text-6xl uppercase opacity-0 animate-pulse"
            style={{
              top: top,
              left: left,
              animationDelay: delay,
              animationDuration: duration,
              // Adding a custom fade-in-out feel via inline style for variety
              animationName: 'fade-random'
            }}
          >
            Jagdish Chapagain muji..
          </span>
        );
      })}

      {/* Internal CSS for the custom fade animation */}
      <style>{`
        @keyframes fade-random {
          0%, 100% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .animate-pulse {
          animation: fade-random linear infinite;
        }
      `}</style>

      {/* Foreground Content */}
      <h1 className="relative z-10 text-white text-8xl font-extrabold tracking-tighter bg-black px-4">
        Jagdish Chapagain muji
      </h1>
    </div>
  );
};

export default HomeSection;