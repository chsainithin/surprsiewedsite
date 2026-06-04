import React from "react";
import { motion } from "framer-motion";

export default function LetterContentScreen({ onNextAction }) {
  // Hardcoded or dynamically swapped asset images for the Polaroids
    const photos = [
    "Top.jpeg",
    "bottom.jpeg" , // Top photo
    "Middle.jpeg" // Middle photo
     // Bottom photo
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-5xl mx-auto p-4 md:p-8 flex flex-col md:flex-row items-center md:items-start justify-center gap-6 font-mono select-none"
    >
      {/* LEFT SIDE: TORN VINTAGE LETTER COMPONENT */}
      <div 
        className="relative w-full md:w-[55%] bg-[#ebdcb9] text-[#4a2810] p-8 shadow-[5px_5px_20px_rgba(0,0,0,0.3)] min-h-[580px] flex flex-col justify-between"
        style={{
          clipPath: "polygon(0% 2px, 4% 0px, 8% 3px, 12% 0px, 16% 2px, 20% 0px, 24% 3px, 28% 0px, 32% 2px, 36% 0px, 40% 3px, 44% 0px, 48% 2px, 52% 0px, 56% 3px, 60% 0px, 64% 2px, 68% 0px, 72% 3px, 76% 0px, 80% 2px, 84% 0px, 88% 3px, 92% 0px, 96% 2px, 100% 0px, 100% calc(100% - 2px), 96% 100%, 92% calc(100% - 3px), 88% 100%, 84% calc(100% - 2px), 80% 100%, 76% calc(100% - 3px), 72% 100%, 68% calc(100% - 2px), 64% 100%, 60% calc(100% - 3px), 56% 100%, 52% calc(100% - 2px), 48% 100%, 44% calc(100% - 3px), 40% 100%, 36% calc(100% - 2px), 32% 100%, 28% calc(100% - 3px), 24% 100%, 20% calc(100% - 2px), 16% 100%, 12% calc(100% - 3px), 8% 100%, 4% calc(100% - 2px), 0% 100%)"
        }}
      >
        {/* Ambient Kiss Prints / Decorative Marks Stamp Imitation */}
        <div className="absolute top-12 right-12 text-rose-400/30 text-xl font-bold select-none pointer-events-none transform rotate-12 border-2 border-dashed border-rose-400/20 rounded-full px-1">🎂</div>
        <div className="absolute bottom-24 left-16 text-rose-400/20 text-2xl font-bold select-none pointer-events-none transform -rotate-45">🎂</div>
        <div className="absolute top-1/3 left-6 text-rose-400/15 text-lg font-bold select-none pointer-events-none transform rotate-6">🎂</div>

        {/* Letter Body Content Layout */}
        <div className="w-full flex flex-col tracking-wide">
          <div className="text-center mb-4">
            <span className="text-xs font-sans tracking-[0.4em] uppercase text-[#6e4624]/60 font-bold block mb-1">HAPPY</span>
            <h1 className="text-3xl font-serif italic font-semibold text-[#3a1d07]">Birthday</h1>
          </div>

          {/* Letter Prose Blocks */}
          <div className="space-y-4 font-serif text-sm md:text-base leading-relaxed text-[#3a1d07]/90 px-2 italic">
            
            
            <p className="font-semibold text-xs font-sans tracking-wider not-italic text-[#6e4624]/80 uppercase mt-2">
              Happiest Birthday, Akhila ! I wish you the best!
            </p>

             <p clasasName="text-xl md:text-base font-serif tracking-wide text-[#3a1d07]/90 italic leading-relaxed ">
            Happy birthday to the most incredible person! I may not have been in your life for long, but every day with you has been magical. Here’s to many more birthdays by your side
             </p>
             
          
            
            
          
          </div>
        </div>

        {/* Letter Signature Footer Component */}
        <div className="w-full text-center mt-6 flex flex-col items-center">

            <p className="text-xs">
              May your day be as wonderful, beautiful, and unforgettable as you are to me. :)
            </p>
          <span className="font-serif italic text-lg text-[#3a1d07] font-medium tracking-widest">
          Wishing you a lifetime of love, joy, and beautiful moments 🎂💙
          </span>
          <div className="text-rose-400/40 text-sm mt-0.5">🎂</div>
        </div>
      </div>

      {/* RIGHT SIDE: DESIGNER POLAROID PICTURE LAYER FRAMEWORK */}
      <div className="w-full md:w-[40%] flex flex-col space-y-4 pt-2">
        {/* Photo 1 Frame */}
        <motion.div 
          whileHover={{ scale: 1.03, rotate: 2 }}
          className="bg-[#fcfbf9] p-3 pb-8 shadow-lg border border-neutral-200/40 transform rotate-1 flex flex-col"
        >
          <div className="w-full h-44 bg-neutral-200 overflow-hidden">
            <img src={photos[0]} alt="Moment 1" className="w-full h-full object-cover filter contrast-[1.02] sepia-[0.08]" />
          </div>
        </motion.div>

        {/* Photo 2 Frame */}
        <motion.div 
          whileHover={{ scale: 1.03, rotate: -2 }}
          className="bg-[#fcfbf9] p-3 pb-8 shadow-lg border border-neutral-200/40 transform -rotate-1 flex flex-col"
        >
          <div className="w-full h-44 bg-neutral-200 overflow-hidden">
            <img src={photos[1]} alt="Moment 2" className="w-full h-full object-cover filter contrast-[1.02] sepia-[0.08]" />
          </div>
        </motion.div>

        {/* Photo 3 Frame */}
        <motion.div 
          whileHover={{ scale: 1.03, rotate: 1 }}
          className="bg-[#fcfbf9] p-2 pb-8 shadow-lg border border-neutral-200/40 transform rotate-2 flex flex-col"
        >
          <div className="w-full h-44 bg-neutral-200 overflow-hidden">
            <img src={photos[2]} alt="Moment 3" className="w-full h-full object-cover filter contrast-[1.02] sepia-[0.08]" />
          </div>
        </motion.div>

        {/* LINK TO NEXT SURPRISE TRIGGER FOOTER */}
        <div className="w-full text-center pt-2 md:text-right">
          <button 
            onClick={() => onNextAction && onNextAction()}
            className="text-xs text-white/60 hover:text-white underline underline-offset-4 tracking-widest uppercase transition-colors duration-200 animate-pulse"
          >
            → tap here for a surprise 🎁
          </button>
        </div>
      </div>
    </motion.div>
  );
}