import svgPaths from "./svg-wmbwbd82ke";

function Frame2() {
  return (
    <div className="h-[70.457px] relative shrink-0 w-[69.674px]">
      <div className="absolute inset-[-5.56%_-5.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 79">
          <g filter="url(#filter0_d_63642_7861)" id="Frame 45">
            <rect fill="var(--fill-0, #375DFB)" height="70.4568" rx="34.837" width="69.674" x="3.91427" y="3.91427" />
            <path d={svgPaths.p330e0980} fill="var(--fill-0, #D9D9D9)" id="Polygon 1" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="78.2853" id="filter0_d_63642_7861" width="77.5025" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="3.91427" result="effect1_dropShadow_63642_7861" />
              <feOffset />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.215686 0 0 0 0 0.364706 0 0 0 0 0.984314 0 0 0 0.2 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_63642_7861" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_63642_7861" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[3.807px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[22.845px] text-white tracking-[-0.6853px] w-full">
        <p className="leading-[30.46px]">What is Linquo?</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[13.326px] tracking-[-0.0761px] w-full">
        <p className="leading-[19.037px]">2 min</p>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#2e3748] relative rounded-[76.149px] size-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[15.23px] items-center justify-center pl-[7.615px] pr-[30.46px] py-[7.615px] relative size-full">
          <Frame2 />
          <Frame />
        </div>
      </div>
    </div>
  );
}