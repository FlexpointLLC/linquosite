import Desktop1 from "../imports/Desktop1";
import IPhone13141 from "../imports/IPhone13141";
import StickyNav from "../components/StickyNav";
import StickyNavMobile from "../components/StickyNavMobile";
import { useEffect, useState } from "react";

export default function Home() {
  // Check window size immediately to avoid flash of wrong content
  const getInitialIsMobile = (): boolean => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  };

  const getInitialScale = (): number => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 768) {
        return width / 390;
      } else if (width < 1440) {
        return width / 1440;
      }
    }
    return 1;
  };

  const [scale, setScale] = useState<number>(getInitialScale());
  const [isMobile, setIsMobile] = useState<boolean>(getInitialIsMobile());

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
    <div className="bg-[#0e1116] w-full overflow-x-hidden">
      {/* Desktop Version - hidden on mobile */}
      <div className={isMobile ? "hidden" : "block"}>
        <StickyNav scale={scale} />
        <div className="flex justify-center" style={{ paddingBottom: 0, marginBottom: 0 }}>
          <div 
            style={{
              width: '1440px',
              transform: `scale(${scale})`,
              transformOrigin: 'top center',
              marginBottom: 0,
              paddingBottom: 0,
            }}
          >
            <Desktop1 />
          </div>
        </div>
      </div>

      {/* Mobile Version - hidden on desktop */}
      {isMobile && (
        <>
          <StickyNavMobile scale={scale} />
          <div className="flex justify-center items-start w-full bg-[#0e1116]">
            <div 
              className="relative"
              style={{
                width: '390px',
                minHeight: '100vh',
                transform: `scale(${scale})`,
                transformOrigin: 'top center',
              }}
            >
              <IPhone13141 />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

