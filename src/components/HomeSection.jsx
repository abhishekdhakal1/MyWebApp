import React, { useState, useEffect } from "react";
import Terminal from "./Terminal";
import profilePic from "../assets/ad.jpg";

function HomeSection() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl animate-float1"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-500/15 rounded-full mix-blend-screen filter blur-3xl animate-float2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full mix-blend-screen filter blur-3xl animate-float3"></div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
        </div>
      </div>

      <section
        id="home"
        className={`relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 text-center md:text-left w-full max-w-5xl transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="md:w-2/3 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-orange-600 bg-clip-text text-transparent">
            Hello, I'm <span className="text-orange-500">Abhishek Dhakal</span>
          </h1>

          <div className="relative inline-block">
            <span className="text-lg sm:text-xl text-gray-300 mb-6 animate-fade-in delay-100 inline-flex items-center">
              <span className="mr-2">🚀</span>
              <span className="relative">
                BE in Electronics, Communication and Information
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"></span>
              </span>
            </span>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 mb-6 animate-fade-in delay-200">
            Bridging hardware and software to create{" "}
            <span className="text-blue-400">
              next gen cyber physical systems
            </span>
            . Architecting the digital future with{" "}
            <span className="text-purple-400">quantum inspired algorithms</span>{" "}
            and
            <span className="text-green-400"> neuromorphic computing</span>{" "}
            principles.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <button
              onClick={() => setIsTerminalOpen(true)}
              className="flex items-center justify-center gap-2 font-semibold px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30 group"
            >
              <span className="text-yellow-300">{">_"}</span>
              <span className="group-hover:text-yellow-300 transition-colors">
                Access Neural Terminal
              </span>
            </button>
            <a
              href="https://www.github.com/abhishekdhakal1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-semibold px-6 py-3 border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:animate-spin"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
              <span>Explore Quantum Repositories</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-2 mt-6 animate-fade-in delay-300">
            <span className="px-3 py-1 bg-gray-800/50 border border-blue-500/30 rounded-full text-sm text-blue-300">
              VLSI Design
            </span>
            <span className="px-3 py-1 bg-gray-800/50 border border-purple-500/30 rounded-full text-sm text-purple-300">
              Embedded AI
            </span>
            <span className="px-3 py-1 bg-gray-800/50 border border-green-500/30 rounded-full text-sm text-green-300">
              IoT Networks
            </span>
            <span className="px-3 py-1 bg-gray-800/50 border border-yellow-500/30 rounded-full text-sm text-yellow-300">
              5G/6G Systems
            </span>
            <span className="px-3 py-1 bg-gray-800/50 border border-red-500/30 rounded-full text-sm text-red-300">
              FPGA Acceleration
            </span>
            <span className="px-3 py-1 bg-gray-800/50 border border-blue-500/30 rounded-full text-sm text-blue-300">
              Web Dev
            </span>
          </div>
        </div>

        <div className="md:w-1/3 flex justify-center mt-12 md:mt-0">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-tilt"></div>
            <div className="relative bg-gray-800/80 backdrop-blur-lg p-6 rounded-xl shadow-2xl w-full max-w-xs border border-gray-700/50">
              <div className="relative mb-6">
                <div className="absolute -inset-1 bg-blue-500/20 rounded-full blur-md"></div>
                <img
                  src={profilePic}
                  alt="Abhishek Dhakal"
                  className="relative rounded-full w-40 h-40 object-cover object-top mx-auto border-4 border-blue-500 shadow-lg transition duration-500 hover:scale-105 z-10"
                />
                <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 animate-pulse z-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Abhishek Dhakal
              </h3>
              <p className="text-sm text-blue-400 mb-4">
                B.E. Electronics & Information Engineering
              </p>
              <p className="text-gray-300 mb-6 text-sm">
                Architecting the{" "}
                <span className="text-yellow-300">
                  hardware-software continuum
                </span>{" "}
                with
                <span className="text-green-300">
                  {" "}
                  optimizing systems with
                  <span className="text-yellow-300 italic">
                    {" "}
                    lim<sub>x→0</sub>(sin x/x){" "}
                  </span>
                  precision & impulse responses so accurate,{" "}
                  <span className="text-blue-300">
                    even Dirac’s delta function sheds a tear.
                  </span>
                </span>{" "}
              </p>
              <a
                href="mailto:abhishekdhakal1826@gmail.com"
                className="block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 text-center shadow-lg hover:shadow-blue-500/30 text-sm font-medium"
              >
                Initiate Neural Link
              </a>
            </div>
          </div>
        </div>
      </section>

      {isTerminalOpen && <Terminal onClose={() => setIsTerminalOpen(false)} />}

      <style jsx global>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(20px, 20px) rotate(5deg);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-15px, 15px) rotate(-5deg);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(10px, -10px) rotate(3deg);
          }
        }
        .animate-float1 {
          animation: float1 8s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 10s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 12s ease-in-out infinite;
        }
        .animate-text-gradient {
          background-size: 300% 300%;
          animation: gradient 8s ease infinite;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}

export default HomeSection;
