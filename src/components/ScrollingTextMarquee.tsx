import { motion, useAnimation } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface ScrollingTextMarqueeProps {
  top: number;
  duration: number;
  direction?: "left" | "right"; // left = move to left (left to right scroll), right = move to right (right to left scroll)
  initialOffset?: number; // 0-1, percentage of content to offset the starting position
}

export default function ScrollingTextMarquee({ top, duration, direction = "left", initialOffset = 0 }: ScrollingTextMarqueeProps) {
  // All 12 text items
  const items = [
    "No missed leads",
    "No \"who's on it?\"",
    "No email tickets",
    "No support bottlenecks",
    "No manual tagging",
    "No copy-pasting",
    "No team limits",
    "No dev setup",
    "No chaos threads",
    "No context loss",
    "No form chasing",
    "No inbox hopping"
  ];

  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (contentRef.current) {
      // Measure the width of one set of items
      const width = contentRef.current.scrollWidth / 2;
      setContentWidth(width);
    }
  }, []);

  useEffect(() => {
    if (!contentWidth) return;

    const offset = -contentWidth * initialOffset;

    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: direction === "left" 
          ? [offset, offset - contentWidth] 
          : [offset - contentWidth, offset],
        transition: {
          duration,
          repeat: Infinity,
          ease: "linear"
        }
      });
    }
  }, [isHovered, contentWidth, direction, duration, initialOffset, controls]);

  return (
    <div 
      className="absolute left-0 right-0 overflow-hidden h-[78px] cursor-default" 
      style={{ top: `${top}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={contentRef}
        className="flex gap-[24px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[64px] text-center text-nowrap text-white uppercase leading-[0] not-italic"
        animate={controls}
      >
        {/* First set of items */}
        {items.map((item, index) => (
          <div key={`set1-${index}`} className="flex flex-col justify-center shrink-0 opacity-20 hover:opacity-100 transition-opacity duration-300 group">
            <p className="leading-[78px] whitespace-pre group-hover:line-through">
              {item}
            </p>
          </div>
        ))}
        {/* Second set of items for seamless loop */}
        {items.map((item, index) => (
          <div key={`set2-${index}`} className="flex flex-col justify-center shrink-0 opacity-20 hover:opacity-100 transition-opacity duration-300 group">
            <p className="leading-[78px] whitespace-pre group-hover:line-through">
              {item}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
