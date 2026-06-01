import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BirthdaySurpriseScreen({ onBackAction }) {
  const [messages, setMessages] = useState([]);
  const [index, setIndex] = useState(0);

  const allNotes = useMemo(() => [
    "Happy Birthday, Akhila! 🎂",
    "You're the best! ✨",
    "Have a legendary day! 🎸",
    "Keep shining bright! 🌸",
  ], []);


useEffect(() => {
    if (index < allNotes.length) {
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, allNotes[index]]);
        setIndex((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [index, allNotes]);

  const title = "Happy Birthday";

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-6 relative font-sans overflow-hidden">
      
      {/* Interactive Title */}
      <div className="text-center z-10 cursor-pointer group">
        <motion.h1 
          className="text-6xl md:text-9xl font-black text-white tracking-tighter flex justify-center"
        >
          {title.split("").map((letter, i) => (
            // <motion.span
            //   key={i}
            //   whileHover={{ 
            //     y: -30, 
            //     color: "#38bdf8",
            //     scale: 1.1 
            //   }}
            //   transition={{ type: "spring", stiffness: 400, damping: 10 }}
            //   className="inline-block"
            // >
            //   {letter === " " ? "\u00A0" : letter}
            // </motion.span>
            <motion.span
  key={i}
  // Change whileHover to whileTap for mobile support
  whileTap={{ 
    y: -30, 
    color: "#38bdf8",
    scale: 1.1 
  }}
  // Optional: keep it hoverable on desktop too
  whileHover={{ 
    y: -30, 
    color: "#38bdf8",
    scale: 1.1 
  }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
  className="inline-block cursor-pointer"
>
  {letter === " " ? "\u00A0" : letter}
</motion.span>
          ))}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-sky-500 font-light tracking-[0.5em] uppercase mt-6 text-sm"
        >
          To Akhila
        </motion.p>
      </div>

      {/* Floating Messages Queue */}
      <div className="fixed bottom-10 right-10 flex flex-col gap-3 items-end z-20">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50, scale: 0.9 }} 
              animate={{ opacity: 1, x: 0, scale: 1 }}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white/80 text-sm font-light backdrop-blur-md shadow-2xl"
            >
              {msg}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <button 
        onClick={onBackAction} 
        className="absolute bottom-10 left-10 text-white/20 hover:text-white transition-colors uppercase text-[10px] tracking-[0.3em]"
      >
        ← Return
      </button>
    </div>
  );
}