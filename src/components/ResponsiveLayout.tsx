import { useEffect, useState } from 'react';
import Desktop1 from '../imports/Desktop1';

export default function ResponsiveLayout() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      
      if (width < 1440) {
        setScale(width / 1440);
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <div 
        style={{
          width: '1440px',
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          margin: '0 auto',
        }}
      >
        <Desktop1 />
      </div>
    </div>
  );
}
