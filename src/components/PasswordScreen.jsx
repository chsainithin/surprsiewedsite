import React, { useState } from "react";
import { motion } from "framer-motion";

export default function FriendshipPasswordScreen({ onAuthenticated }) {
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const codeLength = 6; 

  // Handler for pinpad button clicks
  const handleNumberClick = (num) => {
    if (password.length < codeLength && !isError) {
      const newPassword = password + num;
      setPassword(newPassword);

      // Automatically validate if the friend finishes entering 6 digits
      if (newPassword.length === codeLength) {
        if (newPassword === "110326") {
          onAuthenticated();
        } else {
          // Trigger shake animation and reset
          setTimeout(() => {
            setIsError(true);
          }, 150);
          
          setTimeout(() => {
            setIsError(false);
            setPassword(""); // Reset pinpad on fail
          }, 600);
        }
      }
    }
  };

  const handleBackspace = () => {
    if (!isError) {
      setPassword(password.slice(0, -1));
    }
  };

  // Shake animation variants for wrong passcode
  const shakeVariants = {
    shake: {
      x: [-10, 10, -10, 10, -5, 5, 0],
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      key="cyber-friendship-screen"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center justify-center p-6 md:p-12 text-slate-100 z-10"
    >
      
      {/* 1. LEFT COLUMN: FROSTED GLASS METALLIC POLAROID FRAME */}
      <div className="flex justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: -1 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="bg-white/5 backdrop-blur-md p-5 pb-14 rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.6),_0_0_1px_rgba(255,255,255,0.2)] border border-white/10 w-72 md:w-80 relative group"
        >
          {/* Cyber Matte Black Clip */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neutral-900 border border-neutral-700 px-5 py-1 rounded-md shadow-md text-[10px] font-mono tracking-widest text-neutral-400 select-none">
           07 / 0 6 / 2 0 0 1
          </div>

          {/* Image Wrapper */}
          <div className="w-full aspect-square overflow-hidden bg-black/40 rounded-lg border border-white/10 relative">
            <img
              src="/loginimage.png"
              alt="Friendship Memory"
              className="w-full h-full object-cover filter grayscale contrast-[1.1] brightness-[0.85] group-hover:brightness-[1] transition-all duration-300"
            />
            {/* Soft Blue Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 to-transparent pointer-events-none" />
          </div>

          {/* Sleek tech typography */}
          <div className="mt-6 text-center px-2">
            <p className="text-xs font-mono tracking-widest text-neutral-300 uppercase mb-1 leading-relaxed">
             Happiest Birthday, Akhila ! I wish you the best!
            </p>
            <p className="font-mono text-sm uppercase text-sky-400/80 tracking-widest select-none flex items-center justify-center gap-2 mt-2">
              🖤
            </p>
          </div>
        </motion.div>
      </div>

      {/* 2. MIDDLE COLUMN: MINIMALIST INTERACTION NODE (TRANSPARENT SPACER) */}
      <div className="hidden lg:flex flex-col items-center justify-center text-center space-y-4 px-4 border-x border-white/10 py-6 h-64">
        <span className="text-2xl text-sky-400/30 animate-pulse">✦</span>
        <button 
  onClick={() => setShowHint(!showHint)}
  className="mt-4 text-[10px] uppercase tracking-widest text-neutral-500 hover:text-sky-400 transition-colors"
>
  {showHint ? "THE DATE WE MET." : "NEED A CLUE? 🔍"}
</button>
      </div>

      {/* 3. RIGHT COLUMN: STARRY SKY COMPATIBLE PINPAD */}
      <div className="flex flex-col items-center justify-center">
        
        {/* Passcode Title Header */}
        <div className="text-center mb-6 space-y-1">
          <h2 className={`text-xs font-mono tracking-widest uppercase font-bold transition-colors duration-200 ${
            isError 
              ? "text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" 
              : "text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]"
          }`}>
            {isError ? "ACCESS_DENIED. RETRY // ❌" : "ENTER ACCESS CODE 🖤"}
          </h2>

          
        </div>

        {/* Cyber Neon Indicator Dots */}
        <motion.div 
          variants={shakeVariants}
          animate={isError ? "shake" : "default"}
          className="flex items-center justify-center gap-3 mb-10 h-6"
        >
          {Array.from({ length: codeLength }).map((_, idx) => {
            const isActive = idx < password.length;
            return (
              <div
                key={idx}
                className={`w-3.5 h-3.5 rounded-full border transition-all duration-200 ${
                  isError 
                    ? "bg-rose-500/20 border-rose-500 scale-95 shadow-none"
                    : isActive 
                      ? "bg-sky-400 border-sky-400 scale-110 shadow-[0_0_15px_#38bdf8]" 
                      : "bg-transparent border-white/20"
                }`}
              />
            );
          })}
        </motion.div>

        {/* Premium Tech Keypad Interface */}
        <div className="grid grid-cols-3 gap-4 max-w-[280px]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num)}
              className="w-16 h-16 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-400/50 text-xl font-mono text-neutral-200 hover:text-sky-400 transition-all duration-150 shadow-md active:scale-95 flex items-center justify-center group backdrop-blur-sm"
            >
              <span className="group-hover:scale-110 transition-transform">{num}</span>
            </button>
          ))}
          
          {/* Utility Grid Space */}
          <div className="w-16 h-16 flex items-center justify-center text-[10px] font-mono text-neutral-500 tracking-wider select-none">
            [SYS_ID]
          </div>
          
          <button
            onClick={() => handleNumberClick(0)}
            className="w-16 h-16 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-400/50 text-xl font-mono text-neutral-200 hover:text-sky-400 transition-all duration-150 shadow-md active:scale-95 flex items-center justify-center group backdrop-blur-sm"
          >
            <span className="group-hover:scale-110 transition-transform">0</span>
          </button>

          <button
            onClick={handleBackspace}
            className="w-16 h-16 rounded-full bg-white/5 hover:bg-rose-500/20 border border-white/5 hover:border-rose-500/30 text-neutral-400 hover:text-rose-400 active:scale-95 transition-all flex items-center justify-center backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12l-2.25 2.25m-4.516L3.5 12l4.234 4.25H21V7.5H7.734Z" />
            </svg>
          </button>
        </div>

      </div>
    </motion.div>
  );
}