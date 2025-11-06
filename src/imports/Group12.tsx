import svgPaths from "./svg-kn6we2l886";
import imgImage24 from "figma:asset/dc03c751894eaa2eac2917cd71e45d6f03629bbe.png";

function Frame11() {
  return (
    <div className="h-[9.126px] relative shrink-0 w-[38.331px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 10">
        <g id="Frame 11">
          <circle cx="4.56323" cy="4.56323" fill="var(--fill-0, #F65428)" id="Ellipse 1" r="4.56323" />
          <circle cx="19.1656" cy="4.56323" fill="var(--fill-0, #F1A62D)" id="Ellipse 2" r="4.56323" />
          <circle cx="33.7679" cy="4.56323" fill="var(--fill-0, #37C390)" id="Ellipse 3" r="4.56323" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14.602px] items-start left-[15px] top-[11px]">
      <Frame11 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-[#2f333e] box-border content-stretch flex flex-col gap-[6.709px] items-start left-1/2 overflow-clip pb-[6.709px] pt-[28.13px] px-[6.709px] rounded-[16px] top-[0.47px] translate-x-[-50%] w-[1273px]">
      <div className="h-[688.105px] relative rounded-[12px] shrink-0 w-[1259.58px]" data-name="image 24">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgImage24} />
      </div>
      <Frame12 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="h-[74.02px] relative shrink-0 w-[73.197px]">
      <div className="absolute inset-[-5.56%_-5.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 83">
          <g filter="url(#filter0_d_1_7806)" id="Frame 45">
            <rect fill="var(--fill-0, #375DFB)" height="74.0197" rx="36.5986" width="73.1973" x="4.11221" y="4.11221" />
            <path d={svgPaths.p24dc0900} fill="var(--fill-0, #D9D9D9)" id="Polygon 1" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="82.2441" id="filter0_d_1_7806" width="81.4217" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="4.11221" result="effect1_dropShadow_1_7806" />
              <feOffset />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.215686 0 0 0 0 0.364706 0 0 0 0 0.984314 0 0 0 0.2 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_7806" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_7806" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[24px] text-white tracking-[-0.72px] w-full">
        <p className="leading-[32px]">What is Linquo?</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[14px] tracking-[-0.08px] w-full">
        <p className="leading-[20px]">2 min</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute bg-[#2e3748] box-border content-stretch flex gap-[16px] items-center justify-center left-[calc(50%+0.001px)] pl-[8px] pr-[32px] py-[8px] rounded-[80px] top-[calc(50%-32.535px)] translate-x-[-50%] translate-y-[-50%]">
      <Frame45 />
      <Frame43 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute bg-gradient-to-b from-[8.572%] from-[rgba(14,17,22,0)] h-[751px] left-0 overflow-clip to-[#0e1116] to-[86.414%] top-0 w-[1440px]">
      <Frame44 />
    </div>
  );
}

export default function Group12() {
  return (
    <div className="relative size-full">
      <Frame10 />
      <Frame42 />
    </div>
  );
}