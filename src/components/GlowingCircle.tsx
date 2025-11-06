import { useMemo } from "react";

export default function GlowingCircle() {
  // Generate unique IDs for each instance to avoid conflicts
  const filterId = useMemo(() => `filter0_f_glowing_${Math.random().toString(36).substr(2, 9)}`, []);
  
  return (
    <div className="absolute left-0 size-[676.892px] -top-[1000px] pointer-events-none opacity-50">
      <div className="absolute inset-[-147.734%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 2677 2677"
        >
          <g filter={`url(#${filterId})`} id="Ellipse_glowing">
            <circle
              cx="1338.45"
              cy="1338.45"
              fill="#1F42D4"
              r="338.446"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="2676.89"
              id={filterId}
              width="2676.89"
              x="0"
              y="0"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_glowing"
                stdDeviation="500"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

