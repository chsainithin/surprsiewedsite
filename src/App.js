import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import PasswordScreen from "./components/PasswordScreen";
import WishScreen from "./components/WishScreen";
import GalleryScreen from "./components/GalleryScreen";
import BirthdaySurpriseScreen from "./components/surprisescreen";

export default function App() {
  const [step, setStep] = useState("lock");
  const [showLove, setShowLove] = useState(false);

  // Generate 60 static random star positions once using useMemo so they don't rerender abnormally
  const stars = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 1, // Sizes between 1px and 3.5px
      delay: Math.random() * 4,       // Randomized animation delays
      duration: Math.random() * 3 + 2 // Randomized fade durations
    }));
  }, []);

  const handleSuccess = () => {
    setStep("loading");
    setTimeout(() => {
      setStep("wish");
    }, 3000);
  };

  const openNextFolder = () => {
    setStep("gallery");
  };

  const openSurprise = () => {
    setStep("surprise");
  };

  const goBackToGallery = () => {
    setStep("gallery");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#03071e] via-[#0a1128] to-[#001d3d] flex items-center justify-center overflow-hidden p-4 md:p-8 relative">
      
      {/* --- TWINKLING STARRY BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
            }}
            animate={{
              opacity: [0.1, 0.9, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: star.duration,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Subtle Horizon Glow matching your screenshot */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-sky-500/10 to-transparent pointer-events-none" />
      </div>

      {/* --- INTERACTIVE APP SCREENS --- */}
      <AnimatePresence mode="wait">
        {/* PASSWORD */}
        {step === "lock" && (
          <PasswordScreen onAuthenticated={handleSuccess} />
        )}

        {/* LOADING */}
        {step === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center space-y-6 z-10"
          >
            {/* CUTE COUPLE / CAT ANIMATION CONTAINER */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-28 h-28 mb-2 flex items-center justify-center"
            >
              <img 
                src="elephant.png" 
                alt="Loading Animation"
                className="w-full h-full object-contain"
              />
              {/* Floating Heart Animation */}
              <motion.span 
                animate={{ y: [-4, -16, -4], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="absolute top-2 right-6 text-red-500 text-xl"
              >
                ❤️
              </motion.span>
            </motion.div>

            {/* INITIALIZING TEXT */}
            <motion.h1
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                repeat: Infinity,
                duration: 2
              }}
              className="text-sky-400 text-3xl font-bold tracking-widest text-center"
            >
              INITIALIZING_WISH... 🖤
            </motion.h1>

            {/* GROWING PROGRESS BAR */}
            <div className="w-80 h-2 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3 }}
                className="h-full bg-sky-400 shadow-[0_0_15px_#38bdf8]"
              />
            </div>
          </motion.div>
        )}

        {/* WISH SCREEN */}
        {step === "wish" && (
          <WishScreen
            showLove={showLove}
            setShowLove={setShowLove}
            onOpenNextFolder={openNextFolder}
          />
        )}

        {/* GALLERY SCREEN */}
        {step === "gallery" && (
          <GalleryScreen
            showLove={showLove}
            setShowLove={setShowLove}
            onNextAction={openSurprise}
          />
        )}

        {/* SURPRISE SCREEN */}
        {step === "surprise" && (
          <BirthdaySurpriseScreen onBackAction={goBackToGallery} />
        )}
      </AnimatePresence>

      {/* MUSIC */}
      <audio id="music" src="/music.mp3" preload="auto"></audio>
    </div>
  );
}