import Desktop1 from "./imports/Desktop1";
import IPhone13141 from "./imports/IPhone13141";
import StickyNav from "./components/StickyNav";
import StickyNavMobile from "./components/StickyNavMobile";
import { useEffect, useState } from "react";

export default function App() {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      
      // Mobile breakpoint at 768px
      if (width < 768) {
        setIsMobile(true);
        setScale(width / 390); // Mobile design is based on 390px width
      } else {
        setIsMobile(false);
        if (width < 1440) {
          setScale(width / 1440);
        } else {
          setScale(1);
        }
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className="min-h-screen bg-[#0e1116] w-full overflow-x-hidden">
      {/* Desktop Version - hidden on mobile */}
      <div className={isMobile ? "hidden" : "block"}>
        <StickyNav scale={scale} />
        <div className="flex justify-center">
          <div 
            style={{
              width: '1440px',
              transform: `scale(${scale})`,
              transformOrigin: 'top center',
            }}
          >
            <Desktop1 />
          </div>
        </div>
      </div>

      {/* Mobile Version - hidden on desktop */}
      <div className={isMobile ? "block" : "hidden"}>
        <StickyNavMobile scale={scale} />
        <div className="flex justify-center">
          <div 
            style={{
              width: '390px',
              transform: `scale(${scale})`,
              transformOrigin: 'top center',
            }}
          >
            <IPhone13141 />
          </div>
        </div>
      </div>
    </div>
  );
}
