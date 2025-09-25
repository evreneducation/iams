import { useEffect, useRef, useState } from "react";

export function InfiniteMovingCards({ items, speed = 40 }) {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    let reqId;
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      if (!isHovered) {
        container.scrollLeft += (speed * elapsed) / 1000;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      start = timestamp;
      reqId = requestAnimationFrame(step);
    }

    reqId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(reqId);
  }, [speed, isHovered]);

  const duplicatedItems = [...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={containerRef}
        className="flex gap-6 py-6 overflow-hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 w-72 sm:w-80 bg-white rounded-xl p-5 shadow-md border border-[#0080ff]/20 text-left transition-all duration-500 ease-out transform ${
              hoveredIndex === idx 
                ? 'scale-105 shadow-xl border-[#0080ff]/50 z-10' 
                : 'scale-100'
            }`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              transform: hoveredIndex === idx 
                ? 'perspective(1000px) rotateY(3deg) rotateX(2deg) scale(1.05) translateZ(10px)' 
                : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1) translateZ(0px)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            }}
          >
            {/* Card Content */}
            <div className="h-full flex flex-col">
              <h3 className="text-lg md:text-xl font-bold text-[#003366] mb-2 leading-tight min-h-[2.5rem]">
                {item.name}
              </h3>
              <p className="text-[#0080ff] font-semibold text-sm md:text-base mb-3 border-b border-[#0080ff]/20 pb-2">
                {item.title}
              </p>
              <p className={`text-gray-600 text-xs md:text-sm leading-relaxed flex-grow transition-all duration-300 ${
                hoveredIndex === idx ? 'line-clamp-none' : 'line-clamp-4'
              }`}>
                {item.quote}
              </p>
              
              {/* Hover Indicator */}
              <div className={`mt-3 transition-all duration-300 ${
                hoveredIndex === idx ? 'opacity-0' : 'opacity-100'
              }`}>
                <div className="flex items-center text-[#21d6e0] text-xs">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  Hover to read more
                </div>
              </div>
            </div>

            {/* 3D Shadow Effect */}
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-[#21d6e0]/10 to-transparent transition-all duration-500 ${
              hoveredIndex === idx ? 'opacity-100' : 'opacity-0'
            }`}></div>
          </div>
        ))}
      </div>
      
      {/* Custom scrollbar hide */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}