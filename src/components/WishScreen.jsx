import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WishScreen({ showLove, setShowLove, onOpenNextFolder }) {
  const [currentPhase, setCurrentPhase] = useState("date"); // "date" | "loading" | "letter"
  const [progress, setProgress] = useState(0);
  const [isOpening, setIsOpening] = useState(false);

  const triggerAudio = () => {
    const musicTrack = document.getElementById("music");
    if (musicTrack) {
      musicTrack.play().catch((err) => console.log("Audio play blocked:", err));
    }
  };

  const handleNext = () => {
    if (currentPhase === "date") {
      triggerAudio();
      setCurrentPhase("loading");
    }
  };

  useEffect(() => {
    if (currentPhase === "date") {
      const timer = setTimeout(() => {
        handleNext();
      }, 30000); 
      return () => clearTimeout(timer);
    }
  }, );

  useEffect(() => {
    if (currentPhase === "loading") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setCurrentPhase("letter"), 600);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [currentPhase]);

  // Triggers the upscale pop animation before continuing to your next folder/screen logic
  const handleEnvelopeClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      if (onOpenNextFolder) {
        onOpenNextFolder(); // Callback function to mount your next component folder setup
      } else {
        alert("Envelope Opened! Link your next folder function here.");
      }
    }, 1000);
  };

  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    angle: (i * 360) / 30 + Math.random() * 20,
    distance: 80 + Math.random() * 120,
    size: Math.random() * 8 + 4,
  }));

  return (
    <div className="w-full max-w-4xl mx-auto min-h-[600px] flex items-center justify-center font-mono text-neutral-200 z-10">
      <AnimatePresence mode="wait">
        
        {/* PHASE 1: DATE REVEAL */}
        {currentPhase === "date" && (
          <motion.div
            key="date-burst"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            onClick={handleNext}
            className="relative flex flex-col items-center justify-center text-center p-8 select-none cursor-pointer group"
          >
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ x: 0, y: 0, opacity: 0.8, scale: 1 }}
                animate={{
                  x: Math.cos((p.angle * Math.PI) / 180) * p.distance,
                  y: Math.sin((p.angle * Math.PI) / 180) * p.distance,
                  opacity: 0,
                  scale: 0.4,
                }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute rounded-full bg-sky-400/60 shadow-[0_0_8px_#38bdf8]"
                style={{ width: p.size, height: p.size }}
              />
            ))}
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [1, 1.05, 1], opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-black text-white tracking-widest filter drop-shadow-[0_0_25px_rgba(56,189,248,0.7)]"
            >
              07/06/2001
            </motion.h1>
            <p className="text-xs text-neutral-400 uppercase tracking-[0.3em] mt-4 animate-pulse">
              Click anywhere to unwrap 🎁
            </p>
          </motion.div>
        )}

        {/* PHASE 2: LOADING SURPRISE */}
        {currentPhase === "loading" && (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-[500px] flex items-center justify-center select-none bg-transparent"
          >
            <div className="absolute top-8 left-8 text-xl opacity-60 animate-pulse">🌹</div>
            <div className="absolute top-8 right-8 text-xl opacity-60 animate-pulse">🌹</div>
            <div className="absolute bottom-12 right-12 text-xl opacity-60 animate-pulse">🌺</div>
            <div className="absolute bottom-12 left-12 text-xl opacity-60 animate-pulse">🌺</div>
            
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-xl md:text-2xl font-bold tracking-wide italic text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Hey girl! 👋</h2>
              <div className="text-5xl filter drop-shadow-md py-2 animate-bounce">🎂</div>
              <p className="text-sm md:text-base font-semibold tracking-wide text-neutral-400">
                loading your birthday surprise...
              </p>
              
              {/* Synced with your main app's neon blue bar styling */}
              <div className="w-56 h-2 bg-neutral-800/80 rounded-full overflow-hidden mt-2 border border-white/5">
                <motion.div 
                  className="h-full bg-sky-400 shadow-[0_0_15px_#38bdf8]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  layoutId="progress-bar-fill"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* PHASE 3: GLASSMORPHISM ENVELOPE BASE CONTAINER */}
        {currentPhase === "letter" && (
          <motion.div
            key="final-letter"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={isOpening ? { scale: 1.08, opacity: 0, y: -20 } : { opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="relative w-[360px] h-[420px] bg-white/5 backdrop-blur-md rounded-xl p-8 flex flex-col items-center justify-between select-none border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
          >
            {/* Elegant Header Text Layout */}
            <div className="text-center mt-4">
              <h1 className="text-3xl font-serif text-white tracking-wide drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
                Happy Birthday!
              </h1>
            </div>

            {/* Premium Crimson Envelope Mockup */}
            <div 
              onClick={handleEnvelopeClick}
              className="relative w-64 h-40 bg-[#8c2525] rounded-md shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(140,37,37,0.4)] group flex items-center justify-center"
            >
              {/* Left Pocket Triangle Shadow Overlay */}
              <div 
                className="absolute inset-0 bg-[#721c1c] rounded-md" 
                style={{ clipPath: "polygon(0% 0%, 50% 50%, 0% 100%)" }}
              />
              {/* Right Pocket Triangle Shadow Overlay */}
              <div 
                className="absolute inset-0 bg-[#721c1c] rounded-md" 
                style={{ clipPath: "polygon(100% 0%, 50% 50%, 100% 100%)" }}
              />
              {/* Bottom Envelope Pocket Flap */}
              <div 
                className="absolute inset-0 bg-[#7f2020] rounded-md" 
                style={{ clipPath: "polygon(0% 100%, 50% 46%, 100% 100%)" }}
              />
              {/* Top Envelope Closure Triangle Flap */}
              <div 
                className="absolute inset-0 bg-[#9c2e2e] rounded-md shadow-sm" 
                style={{ clipPath: "polygon(0% 0%, 50% 52%, 100% 0%)" }}
              />

              {/* Deep Shadow effect for the Wax Seal */}
              <div className="absolute w-12 h-12 bg-black/30 rounded-full blur-[2px] mt-1 ml-0.5" />

              {/* Authentic Premium Metallic Gold Wax Seal Button */}
              <motion.div 
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="absolute z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#f6e091] via-[#dca543] to-[#b37d1b] border border-[#a26f13] flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_4px_10px_rgba(0,0,0,0.4)] cursor-pointer"
              >
                {/* Stamp Outer Ring Layer */}
                <div className="w-9 h-9 rounded-full border border-[#8f5e08]/40 flex items-center justify-center bg-gradient-to-tl from-[#dca543] to-[#f4db89]">
                  {/* Rose Stamp Emblem Symbol inside Seal */}
                  <span className="text-lg text-[#664103] filter drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">
                    🌹
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Micro Decorative Subtitle Footer */}
            <div className="w-full text-center mb-2">
              <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-400 font-sans">
                Touch seal to unlock letter
              </span>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}