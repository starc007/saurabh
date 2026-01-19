import React, { useEffect, useState } from 'react'

const TopStatusBar = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="fixed top-10 left-10 right-10 flex justify-between items-center z-50 pointer-events-none mix-blend-difference hidden lg:flex">
      <div className="text-[10px] font-mono tracking-widest text-foreground/50 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse glow-lime" />
        AVAILABLE FOR PROJECTS
      </div>
      <div className="text-[10px] font-mono tracking-widest text-foreground/50">
        {time} — GMT+5:30
      </div>
    </div>
  )
}

export default TopStatusBar