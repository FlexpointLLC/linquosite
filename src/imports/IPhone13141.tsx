import { useState } from "react";
import svgPaths from "./svg-ijlanusy8x";
import svgPathsNextjs from "./svg-oss9b947l2";
import imgImage23 from "figma:asset/8392264eb4907566bd040f8d87dd21411bc32506.png";
import imgImage24 from "figma:asset/dc03c751894eaa2eac2917cd71e45d6f03629bbe.png";
import imgImage25 from "figma:asset/78f560afd1f30f343be623015a070cbeafb3bf3a.png";
import imgImage26 from "figma:asset/003a6756f67571113667e037c6e70c636ab4c5a1.png";
import imgImage27 from "figma:asset/ceabd2f8254066729e50024e3947816f226f097a.png";
import imgImage28 from "figma:asset/34b6df54b1b32097ddde1b47ff61a6bdec634055.png";
import imgImage29 from "figma:asset/de54a0581517a23b79bcf69f309fe3c62006911b.png";
import imgImage30 from "figma:asset/9645a13605f15b046519012c9474ef366b00a012.png";
import imgImage34 from "figma:asset/7d6e731719163d4f9c138df43a59338822b8260e.png";
import imgImage35 from "figma:asset/35d1192d73c9af5ebb18cc3acfc329fb8294da94.png";
import imgImage18 from "figma:asset/0eb219719be3769eaf1b5c78f2d5ca4c477e3582.png";
import imgDeepPurple from "figma:asset/87546b24b870fb4dfb3d0cd4d57ed69fd4d54037.png";
import imgImage12 from "figma:asset/0a2c0fd5b2e518fcfbb95e446e3a4af16fc0e134.png";
import imgImage38 from "figma:asset/8b3b47cfe246c5d6a37b10943f1a2d6a94aab339.png";
// Note: imgImage39, imgImage40, imgImage41 don't exist - using imgImage38 as fallback
import { imgGroup } from "./svg-b3m65";
import ScrollFadeIn from "../components/ScrollFadeIn";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { TestimonialPlatformTabs } from "../components/TestimonialPlatformTabs";

function Frame1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[2px] py-0 relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.08px] whitespace-pre">Introducing Linqo 1.0</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[0px] w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-white w-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic text-[40px]">
          <span>{`Affordable `}</span>
          <span className="bg-clip-text bg-gradient-to-r from-[#3c82f6] to-[#ef4544] via-[#955ae5] via-[53.673%]" style={{ WebkitTextFillColor: "transparent" }}>
            Live Chat
          </span>
          <span>{` for Small Business`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-full">
        <p className="mb-0">{`Add Linquo's live chat widget in minutes and start supporting customers instantly. `}</p>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white">No per-agent pricing. No limits.</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <div className="h-[24px] relative shrink-0 w-[50.667px]" data-name="image 23">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage23} />
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-[min-content]">
        <p className="leading-[24px]">Trusted by 3K+ companies around the world</p>
      </div>
    </div>
  );
}

function Frame31({
  onBadgeClick,
}: {
  onBadgeClick: () => void;
}) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[24px] top-[152px] w-[342px]">
      <div
        className="bg-[rgba(55,93,251,0.3)] box-border content-stretch flex gap-[2px] items-center px-[10px] py-[4px] relative rounded-[80px] shrink-0 cursor-pointer hover:bg-[rgba(55,93,251,0.4)] transition-colors"
        data-name="Badge-Status"
        onClick={(e) => {
          e.stopPropagation();
          console.log("Badge clicked!");
          onBadgeClick();
        }}
      >
        <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[80px] badge-gradient-border" />
        <Frame1 />
      </div>
      <Frame32 />
      <a
        href="https://admin.linquo.app/signup"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#375dfb] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shadow-[0px_0px_0px_1px_#224cfa,0px_1px_3px_0px_rgba(37,62,167,0.2)] shrink-0 cursor-pointer transition-all duration-200 hover:bg-[#4a6dfc] hover:scale-105"
        data-name="Button"
      >
        <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0" data-name="💠 Text">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.0112px] w-full">
            <p className="leading-[20px]">Get Started</p>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-2.4px_0px_0px_inset_#224cfa]" />
      </a>
      <Frame33 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[2.661px] relative shrink-0 w-[11.176px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 3">
        <g id="Frame 11">
          <circle cx="1.33044" cy="1.33046" fill="var(--fill-0, #F65428)" id="Ellipse 1" r="1.33044" />
          <circle cx="5.58781" cy="1.33044" fill="var(--fill-0, #F1A62D)" id="Ellipse 2" r="1.33044" />
          <circle cx="9.84529" cy="1.33044" fill="var(--fill-0, #37C390)" id="Ellipse 3" r="1.33044" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.257px] items-start left-[4.37px] top-[3.21px]">
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#2f333e] box-border content-stretch flex flex-col gap-[1.956px] h-[210.779px] items-start left-[calc(50%+0.038px)] overflow-clip pb-[1.956px] pt-[8.201px] px-[1.956px] rounded-[4.665px] shadow-[0px_6.997px_4.665px_0px_rgba(0,0,0,0.16)] top-[691.12px] translate-x-[-50%] w-[371.152px]">
      <div className="h-[200.622px] relative rounded-[3.499px] shrink-0 w-[367.24px]" data-name="image 24">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[3.499px] size-full" src={imgImage24} />
      </div>
      <Frame4 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="h-[70.457px] relative shrink-0 w-[69.674px]">
      <div className="absolute inset-[-5.56%_-5.62%] transition-all duration-300 group-hover:animate-pulse group-hover:drop-shadow-[0_0_20px_rgba(55,93,251,0.8)]">
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

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[3.807px] items-start leading-[0] not-italic relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[22.845px] text-white tracking-[-0.6853px] w-full">
        <p className="leading-[30.46px]">What is Linquo?</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[13.326px] tracking-[-0.0761px] w-full">
        <p className="leading-[19.037px]">2 min</p>
      </div>
    </div>
  );
}

function Frame36({
  onVideoClick,
}: {
  onVideoClick: () => void;
}) {
  return (
    <div 
      className="absolute bg-[#2e3748] left-1/2 rounded-[76.149px] top-[calc(50%_+_9.172px)] translate-x-[-50%] translate-y-[-50%] group cursor-pointer transition-all duration-200 hover:bg-[#3a4454] hover:scale-105"
      onClick={(e) => {
        e.stopPropagation();
        console.log("Video preview clicked!");
        onVideoClick();
      }}
    >
      <div className="flex flex-row items-center justify-center">
        <div className="box-border content-stretch flex gap-[12px] items-center justify-center pl-[2px] pr-[20px] py-[7.615px] relative w-[278px]">
          <Frame37 />
          <Frame35 />
        </div>
      </div>
    </div>
  );
}

function Frame34({
  onVideoClick,
}: {
  onVideoClick: () => void;
}) {
  return (
    <div className="absolute bg-gradient-to-b from-[8.572%] from-[rgba(14,17,22,0)] h-[210.796px] left-[9.39px] overflow-clip to-[#0e1116] to-[86.414%] top-[690.98px] w-[371.152px]">
      <Frame36 onVideoClick={onVideoClick} />
    </div>
  );
}

function Group5({
  onVideoClick,
}: {
  onVideoClick: () => void;
}) {
  return (
    <div className="absolute contents left-[9.39px] top-[690.98px]">
      <Frame2 />
      <Frame34 onVideoClick={onVideoClick} />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
          <div className="absolute inset-[9.38%_9.38%_15.63%_9.38%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
                <path d={svgPaths.p37b30580} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] text-nowrap tracking-[-0.0112px]">
        <p className="leading-[20px] whitespace-pre">Productivity</p>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[0px] w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-white tracking-[-0.72px] w-full">
        <p className="leading-[32px] not-italic text-[24px]">
          <span>{`Everything you need to `}</span>
          <span className="bg-clip-text bg-gradient-to-r from-[#3c82f6] to-[#ef4544] via-[#955ae5] via-[53.673%]" style={{ WebkitTextFillColor: "transparent" }}>
            run
          </span>
          <span>{`, and `}</span>
          <span className="bg-clip-text bg-gradient-to-r from-[#3c82f6] to-[#ef4544] via-[#955ae5] via-[53.673%]" style={{ WebkitTextFillColor: "transparent" }}>
            scale
          </span>
          <span>{` business`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-full">
        <p className="mb-0">{`Add Linquo's live chat widget in minutes and start supporting customers instantly. `}</p>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white">No per-agent pricing. No limits.</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[20px]" data-name="Weight=Regular">
          <div className="absolute inset-[12.51%_12.5%_12.51%_15.63%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <path d={svgPaths.p1912dd00} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] text-nowrap tracking-[-0.0112px]">
        <p className="leading-[20px] whitespace-pre">Infrastructure</p>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="bg-[#171b21] h-[277px] relative rounded-[16px] shrink-0 w-full card-gradient-hover card-gradient-delay-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[277px] items-start px-[32px] py-[40px] relative w-full">
          <Frame39 />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[24px] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">
            <p className="mb-0">
              <span>{`Best-in-class infrastructure `}</span>
              <span className="text-[#99a0ae]">{`for building modern `}</span>
            </p>
            <p className="text-[#99a0ae]">e-commerce business</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[20px]" data-name="Weight=Regular">
          <div className="absolute inset-[6.248%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <path d={svgPaths.p3854b80} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] text-nowrap tracking-[-0.0112px]">
        <p className="leading-[20px] whitespace-pre">Integration</p>
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="bg-[#171b21] h-[277px] relative rounded-[16px] shrink-0 w-full card-gradient-hover card-gradient-delay-1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[277px] items-start px-[32px] py-[40px] relative w-full">
          <Frame98 />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">
            <p className="leading-[24px]">
              <span>{`Easily integrate with your existing projects, whether they're in `}</span>
              <span className="text-[#99a0ae]">HTML, Framer, Webflow, React, or Next.js.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[20px]" data-name="Weight=Regular">
          <div className="absolute inset-[12.51%_12.5%_9.38%_9.37%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p2dd4cb00} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] text-nowrap tracking-[-0.0112px]">
        <p className="leading-[20px] whitespace-pre">Easy Start</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[#171b21] h-[277px] relative rounded-[16px] shrink-0 w-full card-gradient-hover card-gradient-delay-2">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[277px] items-start px-[32px] py-[40px] relative w-full">
          <Frame100 />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">
            <p className="leading-[24px]">
              <span>{`A chat support system that provides all the tools you need `}</span>
              <span className="text-[#99a0ae]">to kickstart your support today.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[20px]" data-name="Weight=Regular">
          <div className="absolute inset-[3.13%_3.13%_6.23%_6.25%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                <path d={svgPaths.p173af0} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] text-nowrap tracking-[-0.0112px]">
        <p className="leading-[20px] whitespace-pre">Assistant</p>
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame102 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">
        <p className="leading-[24px]">
          <span>{`An assistant that has all the content, capabilities `}</span>
          <span className="text-[rgba(255,255,255,0.4)]">and conventions to do it all for you</span>
        </p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-gradient-to-b from-[#2f4484] h-[277px] relative rounded-[16px] shrink-0 to-[#62488d] w-full card-gradient-hover card-gradient-delay-3">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div
          className="box-border content-stretch flex flex-col gap-[24px] h-[277px] items-center px-[32px] py-[40px] relative w-full animate-gradient-shift"
          style={{
            background:
              "linear-gradient(135deg, #2f4484, #62488d, #2f4484, #62488d)",
            backgroundSize: "400% 400%",
          }}
        >
          <Frame118 />
        </div>
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame77 />
      <Frame99 />
      <Frame38 />
      <Frame40 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[32px] items-start left-0 px-[24px] py-0 top-[1011px] w-[390px]">
      <Frame41 />
      <Frame60 />
      <Frame133 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
          <div className="absolute inset-[6.25%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                <path d={svgPaths.p2577bb80} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] text-nowrap tracking-[-0.0112px]">
        <p className="leading-[20px] whitespace-pre">How it works?</p>
      </div>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[0px] text-white tracking-[-0.72px] w-full">
        <p className="leading-[32px] not-italic text-[24px]">
          <span>{`Setup. Configure. Publish. and `}</span>
          <span className="bg-clip-text bg-gradient-to-r from-[#3c82f6] to-[#ef4544] via-[#955ae5] via-[53.673%]" style={{ WebkitTextFillColor: "transparent" }}>
            Scale
          </span>
          .
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-full">
        <p className="leading-[24px]">Build faster and better, with an AI-assisted platform that has all of the context, capabilities and conventions you need.</p>
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[32px] items-start left-0 px-[24px] py-0 top-[2509px] w-[390px]">
      <Frame117 />
      <Frame119 />
    </div>
  );
}

function Frame51() {
  return (
    <div 
      className="absolute box-border content-stretch flex gap-[8px] items-center justify-center left-1/2 px-[24px] py-[16px] rounded-[12px] top-[2798.48px] translate-x-[-50%] w-[390px]"
      style={{
        background: "linear-gradient(180deg, rgba(14, 17, 22, 0.00) 0%, #0E1116 27.4%, #0E1116 79.81%, rgba(14, 17, 22, 0.00) 100%)",
      }}
    >
      <div className="basis-0 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-white">
        <p className="leading-[24px]">
          <span>{`Get hosted, full-stack environments, fully connected, `}</span>
          <span className="text-[#99a0ae]">in seconds</span>
        </p>
      </div>
    </div>
  );
}

function Frame44() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const embedCode = `<script id="linquo" async="true" src="https://admin.linquo.app/widget.js?id=12345678-abcded-abcd-1234-12345678"></script>`;
    
    // Fallback method for browsers where Clipboard API is blocked
    const textarea = document.createElement('textarea');
    textarea.value = embedCode;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
    
    document.body.removeChild(textarea);
  };

  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[16px] pr-[4px] py-0 relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#99a0ae] text-[14px] text-nowrap tracking-[-0.0112px]">
            <p className="leading-[20px] whitespace-pre">Embed Code</p>
          </div>
          <div
            onClick={handleCopy}
            className={`box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shadow-[0px_0px_0px_1px_#1b2330,0px_1px_3px_0px_rgba(40,40,40,0.2)] shrink-0 cursor-pointer transition-colors w-[85px] ${copied ? "bg-[#37C390]" : "bg-[#21262c]"}`}
            data-name="Button"
          >
            <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0" data-name="💠 Text">
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-full">
                <p className="leading-[16px]">{copied ? "Copied" : "Copy Code"}</p>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[0px_-2.4px_0px_0px_inset_#1b2330]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#21262c] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[22px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px]">
            <p className="leading-[24px]">{`<script id="linquo" async="true" src="https://admin.linquo.app/widget.js?id=12345678-abcded-abcd-1234-12345678"></script>`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#2f363d] relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] items-start pb-[5px] pt-[7px] px-[4px] relative w-full">
          <Frame44 />
          <Frame43 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] items-start left-0 overflow-clip px-[16px] py-0 top-[2919px] w-[390px]">
      <Frame42 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute left-[68px] size-[74px] top-[3376px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
        <g id="Frame 53">
          <rect fill="url(#paint0_linear_63642_8057)" height="74" rx="16" width="74" />
          <path d={svgPaths.p28659000} fill="var(--fill-0, white)" id="Vector 18" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_63642_8057" x1="-2.74999e-07" x2="67.6849" y1="2.06124" y2="70.4998">
            <stop stopColor="#414C56" />
            <stop offset="0.642619" stopColor="#21262C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute left-[158px] size-[74px] top-[3376px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
        <g id="Frame 54">
          <rect fill="url(#paint0_linear_63642_8054)" height="74" rx="16" width="74" />
          <path clipRule="evenodd" d={svgPaths.p2012d880} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_63642_8054" x1="-2.74999e-07" x2="67.6849" y1="2.06124" y2="70.4998">
            <stop stopColor="#414C56" />
            <stop offset="0.642619" stopColor="#21262C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame47() {
  return (
    <div className="absolute left-[248px] size-[74px] top-[3376px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
        <g id="Frame 55">
          <rect fill="url(#paint0_linear_63642_7803)" height="74" rx="16" width="74" />
          <path d={svgPaths.p216ed580} fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p2a86a300} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.96571" />
            <path d={svgPaths.pe824400} id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="1.96571" />
            <path d={svgPaths.p1bb4fd80} id="Vector_4" stroke="var(--stroke-0, white)" strokeWidth="1.96571" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_63642_7803" x1="-2.74999e-07" x2="67.6849" y1="2.06124" y2="70.4998">
            <stop stopColor="#414C56" />
            <stop offset="0.642619" stopColor="#21262C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-0 left-0 right-[-0.01%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="Group">
          <path d={svgPaths.p13cfb900} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1d3d3500} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1432b3c0} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pdc18d00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3ad60880} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function WordPressBlueLogo() {
  return (
    <div className="absolute left-[16px] overflow-clip size-[42px] top-[15.43px]" data-name="WordPress_blue_logo 1">
      <Group />
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute left-1/2 overflow-clip rounded-[16px] size-[74px] top-[3556px] translate-x-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
        <g>
          <rect fill="url(#paint0_linear_wordpress)" height="74" rx="16" width="74" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_wordpress" x1="-2.74999e-07" x2="67.6849" y1="2.06124" y2="70.4998">
            <stop stopColor="#414C56" />
            <stop offset="0.642619" stopColor="#21262C" />
          </linearGradient>
        </defs>
      </svg>
      <WordPressBlueLogo />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-0 left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[45.807px_18px] right-[0.42%] top-0" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 18">
        <g id="Group">
          <path d={svgPaths.p294bad80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p9397f00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1d6d2c00} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute bottom-0 contents left-0 right-[0.42%] top-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function WixLogoB() {
  return (
    <div className="absolute h-[18px] left-[14px] overflow-clip top-[27.7px] w-[46px]" data-name="Wix logoB 1">
      <ClipPathGroup />
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute left-[201.56px] overflow-clip rounded-[16px] size-[74px] top-[3466px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
        <g>
          <rect fill="url(#paint0_linear_wix)" height="74" rx="16" width="74" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_wix" x1="-2.74999e-07" x2="67.6849" y1="2.06124" y2="70.4998">
            <stop stopColor="#414C56" />
            <stop offset="0.642619" stopColor="#21262C" />
          </linearGradient>
        </defs>
      </svg>
      <WixLogoB />
    </div>
  );
}

function NextjsLogo() {
  return (
    <div className="absolute inset-[41.76%_12.16%_42.02%_12.16%]" data-name="Nextjs-logo 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 12">
        <g clipPath="url(#clip0_63642_7975)" id="Nextjs-logo 1">
          <path d={svgPathsNextjs.p25ff1000} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPathsNextjs.p283ec800} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPathsNextjs.p3f6cdb00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPathsNextjs.p3f6a50f0} fill="var(--fill-0, white)" id="Vector_4" />
          <path clipRule="evenodd" d={svgPathsNextjs.p3206f300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_5" />
          <path d={svgPathsNextjs.pcf60300} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPathsNextjs.p35745900} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPathsNextjs.p9167300} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
        <defs>
          <clipPath id="clip0_63642_7975">
            <rect fill="white" height="12" width="56" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute left-[111.56px] overflow-clip rounded-[16px] size-[74px] top-[3466px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
        <g>
          <rect fill="url(#paint0_linear_nextjs)" height="74" rx="16" width="74" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_nextjs" x1="-2.74999e-07" x2="67.6849" y1="2.06124" y2="70.4998">
            <stop stopColor="#414C56" />
            <stop offset="0.642619" stopColor="#21262C" />
          </linearGradient>
        </defs>
      </svg>
      <NextjsLogo />
    </div>
  );
}

function Frame52() {
  return (
    <div 
      className="absolute box-border content-stretch flex gap-[8px] items-center justify-center left-1/2 px-[24px] py-[16px] rounded-[12px] top-[3705px] translate-x-[-50%] w-[390px]"
      style={{
        background: "linear-gradient(180deg, rgba(14, 17, 22, 0.00) 0%, #0E1116 27.4%, #0E1116 79.81%, rgba(14, 17, 22, 0.00) 100%)",
      }}
    >
      <div className="basis-0 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-white">
        <p className="leading-[24px]">
          <span>{`Build secure, scalable support system `}</span>
          <span className="text-[#99a0ae]">quickly and easily</span>
        </p>
      </div>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[20px]" data-name="Weight=Regular">
          <div className="absolute inset-[6.24%_6.24%_3.13%_3.13%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                <path d={svgPaths.p1374b200} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] text-nowrap tracking-[-0.0112px]">
        <p className="leading-[20px] whitespace-pre">Product-driven</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame121 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">
        <p className="leading-[24px] mb-0">
          <span>
            Start conversations, not confusion.
            <br aria-hidden="true" />
            {`Install Linquo in minutes — `}
          </span>
          <span className="text-[#99a0ae]">no tech headaches.</span>
        </p>
        <p className="leading-[24px] mb-0">&nbsp;</p>
        <p className="leading-[24px] mb-0">
          <span>
            Talk to visitors instantly
            <br aria-hidden="true" />
            {`Real-time chat with `}
          </span>
          <span className="text-[#99a0ae]">AI assistance and team collaboration.</span>
        </p>
        <p className="leading-[24px] mb-0">&nbsp;</p>
        <p className="leading-[24px]">
          <span>
            Bring clarity to support
            <br aria-hidden="true" />
            {`Manage customer messages like a shared inbox — `}
          </span>
          <span className="text-[#99a0ae]">fast, clean, and organized.</span>
        </p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[5.367px] relative shrink-0 w-[22.543px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 6">
        <g id="Frame 11">
          <circle cx="2.68372" cy="2.68392" fill="var(--fill-0, #F65428)" id="Ellipse 1" r="2.68372" />
          <circle cx="11.2716" cy="2.68392" fill="var(--fill-0, #F1A62D)" id="Ellipse 2" r="2.68372" />
          <circle cx="19.8596" cy="2.68372" fill="var(--fill-0, #37C390)" id="Ellipse 3" r="2.68372" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8.588px] items-start left-[8.82px] top-[6.47px]">
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#2f333e] box-border content-stretch flex flex-col gap-[3.946px] items-start overflow-clip pb-[3.946px] pt-[16.544px] px-[3.946px] relative rounded-[9.41px] shadow-[0px_14.115px_9.41px_0px_rgba(0,0,0,0.16)] shrink-0 w-[748.676px]">
      <div className="h-[404.688px] relative rounded-[7.057px] shrink-0 w-[740.784px]" data-name="image 24">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[7.057px] size-full" src={imgImage24} />
      </div>
      <Frame7 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-[#171b21] h-[723px] relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[723px] items-start px-[32px] py-[40px] relative w-full">
          <Frame56 />
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[20px]" data-name="Weight=Regular">
          <div className="absolute inset-[12.5%_3.13%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 15">
                <path d={svgPaths.p254e9040} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] text-nowrap tracking-[-0.0112px]">
        <p className="leading-[20px] whitespace-pre">Simple Setup</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame122 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">
        <p className="leading-[24px] mb-0">
          Go live in seconds.
          <br aria-hidden="true" />
          Paste the script. Boom — your chat is live.
        </p>
        <p className="leading-[24px] mb-0">&nbsp;</p>
        <p className="leading-[24px] mb-0">
          <span>
            Automate conversations effortlessly.
            <br aria-hidden="true" />
            {`Smart rules `}
          </span>
          <span className="text-[#99a0ae]">welcome visitors, assign chats, and capture emails automatically.</span>
        </p>
        <p className="leading-[24px] mb-0">&nbsp;</p>
        <p className="leading-[24px]">
          <span>
            Support that works even when you sleep.
            <br aria-hidden="true" />
            {`Background automations `}
          </span>
          <span className="text-[#99a0ae]">keep the conversation moving — day or night.</span>
        </p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[8.125px] relative shrink-0 w-[34.124px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 9">
        <g id="Frame 11">
          <circle cx="4.06236" cy="4.06236" fill="var(--fill-0, #F65428)" id="Ellipse 1" r="4.06236" />
          <circle cx="17.0619" cy="4.06236" fill="var(--fill-0, #F1A62D)" id="Ellipse 2" r="4.06236" />
          <circle cx="30.0615" cy="4.06236" fill="var(--fill-0, #37C390)" id="Ellipse 3" r="4.06236" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[13px] items-start left-[13.35px] top-[9.79px]">
      <Frame9 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#2f333e] box-border content-stretch flex flex-col gap-[5.972px] items-start overflow-clip pb-[5.972px] pt-[25.042px] px-[5.972px] relative rounded-[14.244px] shadow-[0px_21.366px_14.244px_0px_rgba(0,0,0,0.16)] shrink-0">
      <div className="h-[523.638px] relative rounded-[10.683px] shrink-0 w-[244.276px]" data-name="image 24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10.683px]">
          <img alt="" className="absolute h-[116.98%] left-[-359.04%] max-w-none top-[-16.98%] w-[459.04%]" src={imgImage24} />
        </div>
      </div>
      <Frame10 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="bg-[#2f333e] box-border content-stretch flex flex-col gap-[5.972px] items-start overflow-clip pb-[5.972px] pt-[25.042px] px-[5.972px] relative rounded-[14.244px] shadow-[0px_21.366px_14.244px_0px_rgba(0,0,0,0.16)] shrink-0">
      <div className="h-[352.853px] relative rounded-[10.683px] shrink-0 w-[244.276px]" data-name="image 24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10.683px]">
          <img alt="" className="absolute h-[173.61%] left-[-359.04%] max-w-none top-[-73.61%] w-[459.04%]" src={imgImage24} />
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame23 />
      <Frame123 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[#171b21] h-[723px] relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[723px] items-start px-[32px] py-[40px] relative w-full">
          <Frame55 />
          <Frame57 />
        </div>
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[20px]" data-name="Weight=Regular">
          <div className="absolute inset-[3.13%_3.13%_12.5%_12.52%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.pb071680} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] text-nowrap tracking-[-0.0112px]">
        <p className="leading-[20px] whitespace-pre">Easy Support</p>
      </div>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame124 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">
        <p className="leading-[24px] mb-0">
          <span>
            Connect without coding.
            <br aria-hidden="true" />
            {`Bring in your tools in a few clicks — `}
          </span>
          <span className="text-[#99a0ae]">everything just works.</span>
        </p>
        <p className="leading-[24px] mb-0">&nbsp;</p>
        <p className="leading-[24px] mb-0">
          <span>
            Respond the moment someone interacts.
            <br aria-hidden="true" />
            {`Use real-time triggers to `}
          </span>
          <span className="text-[#99a0ae]">greet, route, and follow up like magic.</span>
        </p>
        <p className="leading-[24px] mb-0">&nbsp;</p>
        <p className="leading-[24px]">
          <span>
            One source of truth.
            <br aria-hidden="true" />
            {`Your customer data stays synced — `}
          </span>
          <span className="text-[#99a0ae]">always up to date, always in flow.</span>
        </p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="h-[4.486px] relative shrink-0 w-[18.84px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 5">
        <g id="Frame 11">
          <circle cx="2.24291" cy="2.24306" fill="var(--fill-0, #F65428)" id="Ellipse 1" r="2.24291" />
          <circle cx="9.42029" cy="2.24291" fill="var(--fill-0, #F1A62D)" id="Ellipse 2" r="2.24291" />
          <circle cx="16.5976" cy="2.24291" fill="var(--fill-0, #37C390)" id="Ellipse 3" r="2.24291" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.177px] items-start left-[7.37px] top-[5.41px]">
      <Frame25 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#2f333e] box-border content-stretch flex flex-col gap-[3.297px] items-start overflow-clip pb-[3.298px] pt-[13.826px] px-[3.298px] relative rounded-[7.864px] shadow-[0px_11.796px_7.864px_0px_rgba(0,0,0,0.16)] shrink-0 w-[625.701px]">
      <div className="h-[338.215px] relative rounded-[5.898px] shrink-0 w-[619.106px]" data-name="image 24">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[5.898px] size-full" src={imgImage25} />
      </div>
      <Frame26 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="bg-[#171b21] h-[723px] relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[723px] items-start px-[32px] py-[40px] relative w-full">
          <Frame125 />
          <Frame27 />
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] items-start justify-center left-0 overflow-clip px-[16px] py-0 top-[3836px] w-[390px]">
      <Frame53 />
      <Frame54 />
      <Frame126 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
          <div className="absolute inset-[18.74%_0.87%_18.71%_0.85%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 16">
                <path d={svgPaths.p2830b900} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] text-nowrap tracking-[-0.0112px]">
        <p className="leading-[20px] whitespace-pre">How it works?</p>
      </div>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[0px] text-white tracking-[-0.72px] w-full">
        <p className="leading-[32px] not-italic text-[24px]">
          <span>{`Work together, `}</span>
          <span className="bg-clip-text bg-gradient-to-r from-[#3c82f6] to-[#ef4544] via-[#955ae5] via-[53.673%]" style={{ WebkitTextFillColor: "transparent" }}>
            reply smarter
          </span>
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-full">
        <p className="leading-[24px]">Skip the dev work — Linquo gives you a fully-powered live chat system instantly.</p>
      </div>
    </div>
  );
}

function Frame129() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[32px] items-start left-0 px-[24px] py-0 top-[6160px] w-[390px]">
      <Frame127 />
      <Frame128 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
          <div className="absolute inset-[9.375%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p23520500} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] text-nowrap tracking-[-0.0112px]">
        <p className="leading-[20px] whitespace-pre">Completely Free</p>
      </div>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[0px] text-white tracking-[-0.72px] w-full">
        <p className="leading-[32px] text-[24px]">
          <span>{`Free. For real. `}</span>
          <span className="bg-clip-text bg-gradient-to-r font-['Inter:Semi_Bold',sans-serif] font-semibold from-[#3c82f6] not-italic to-[#ef4544] tracking-[-0.72px] via-[#955ae5] via-[53.673%]" style={{ WebkitTextFillColor: "transparent" }}>
            No limits
          </span>
          <span>{` that choke your growth.`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-full">
        <p className="leading-[24px]">Support your users from day one — upgrade only when you decide it’s time.</p>
      </div>
    </div>
  );
}

function Frame136() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[32px] items-start left-0 px-[24px] py-0 top-[7505.39px] w-[390px]">
      <Frame130 />
      <Frame131 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
          <div className="absolute inset-[9.38%_6.25%_12.52%_12.53%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
                <path d={svgPaths.p179d5e80} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] text-nowrap tracking-[-0.0112px]">
        <p className="leading-[20px] whitespace-pre">Productivity</p>
      </div>
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[32px] relative shrink-0 text-[0px] text-[24px] text-white tracking-[-0.72px] w-full">
        <p className="mb-0">{`Light or Dark, `}</p>
        <p className="bg-clip-text bg-gradient-to-r from-[#3c82f6] to-[#ef4544] via-[#955ae5] via-[53.673%]" style={{ WebkitTextFillColor: "transparent" }}>
          Your Brand, Your Way
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-full">
        <p className="leading-[24px]">Perfectly crafted for both light and dark environments.</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[32px] items-start left-0 px-[24px] py-0 top-[8564px] w-[390px]">
      <Frame132 />
      <Frame140 />
    </div>
  );
}

function Frame141() {
  return (
    <div 
      className="absolute box-border content-stretch flex gap-[8px] items-center justify-center left-0 px-[24px] py-[16px] rounded-[12px] top-[6366px] w-[390px]"
      style={{
        background: "linear-gradient(180deg, rgba(14, 17, 22, 0.00) 0%, #0E1116 27.4%, #0E1116 79.81%, rgba(14, 17, 22, 0.00) 100%)",
      }}
    >
      <div className="basis-0 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-white">
        <p className="leading-[24px] mb-0">
          <span>{`Private notes. `}</span>
          <span className="text-[#99a0ae]">Share context without the customer seeing.</span>
        </p>
        <p className="leading-[24px] mb-0">&nbsp;</p>
        <p className="leading-[24px] mb-0">
          <span>
            Assign chats instantly.
            <br aria-hidden="true" />
            {`Send conversations to the right person — `}
          </span>
          <span className="text-[#99a0ae]">no confusion, no lost messages.</span>
        </p>
        <p className="leading-[24px] mb-0">&nbsp;</p>
        <p className="leading-[24px]">
          <span>
            A truly shared inbox.
            <br aria-hidden="true" />
            {`See who’s typing, track ownership, and `}
          </span>
          <span className="text-[#99a0ae]">collaborate in real-time.</span>
        </p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-[#171b21] relative rounded-[12.14px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[36.42px] items-start p-[9.105px] relative w-full">
          <div className="aspect-[1628/1516] relative rounded-[6.07px] shrink-0 w-full" data-name="image 25">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6.07px] size-full" src={imgImage26} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame134() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] items-start left-0 px-[16px] py-[8px] top-[6717px] w-[390px]">
      <Frame58 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="h-[4.323px] relative shrink-0 w-[18.156px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 5">
        <g id="Frame 11">
          <circle cx="2.16142" cy="2.16142" fill="var(--fill-0, #F65428)" id="Ellipse 1" r="2.16142" />
          <circle cx="9.07791" cy="2.16149" fill="var(--fill-0, #F1A62D)" id="Ellipse 2" r="2.16142" />
          <circle cx="15.9947" cy="2.16149" fill="var(--fill-0, #37C390)" id="Ellipse 3" r="2.16142" />
        </g>
      </svg>
    </div>
  );
}

function Frame142() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6.917px] items-start left-[7.11px] top-[5.21px]">
      <Frame30 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="bg-[#2f333e] box-border content-stretch flex flex-col gap-[3.178px] items-start overflow-clip pb-[3.178px] pt-[13.324px] px-[3.178px] relative rounded-[7.579px] shadow-[0px_11.368px_7.579px_0px_rgba(0,0,0,0.16)] shrink-0 w-[602.97px]">
      <div className="h-[266.133px] relative rounded-[4.641px] shrink-0 w-[398px]" data-name="image 24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4.641px]">
          <img alt="" className="absolute h-[100.12%] left-[-22.4%] max-w-none top-[-0.06%] w-[122.4%]" src={imgImage27} />
        </div>
      </div>
      <Frame142 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[#171b21] relative rounded-[12.015px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[36.045px] items-start p-[9.011px] relative w-full">
          <Frame143 />
        </div>
      </div>
    </div>
  );
}

function Frame135() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[6.008px] items-start left-0 px-[16px] py-[6.008px] top-[7079px] w-[390px]">
      <Frame59 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[8px] py-[16px] relative w-full">
          <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
            <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
              <div className="absolute inset-[18.75%_6.25%_25%_6.25%]" data-name="Vector">
                <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 14">
                    <path d={svgPaths.p26d1ab80} fill="var(--fill-0, #CACFD8)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">
            <p className="leading-[24px]">
              <span>{`Start free. Grow without friction. `}</span>
              <span className="text-[#99a0ae]">You shouldn’t need a budget to talk to your customers.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[8px] py-[16px] relative w-full">
          <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
            <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
              <div className="absolute inset-[15.63%_3.13%_9.38%_3.13%]" data-name="Vector">
                <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 18">
                    <path d={svgPaths.p323746c0} fill="var(--fill-0, #CACFD8)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">
            <p className="leading-[24px]">
              <span>{`Free because great support shouldn’t be gated. `}</span>
              <span className="text-[#99a0ae]">Your first customer matters as much as your thousandth.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular">
          <div className="absolute inset-[9.375%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                <path d={svgPaths.p578e80} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[16px] text-nowrap tracking-[-0.176px]">
        <p className="leading-[24px] whitespace-pre">Free forever</p>
      </div>
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular">
          <div className="absolute inset-[9.375%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                <path d={svgPaths.p578e80} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[16px] text-nowrap tracking-[-0.176px]">
        <p className="leading-[24px] whitespace-pre">Full features, not a sample pack</p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular">
          <div className="absolute inset-[9.375%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                <path d={svgPaths.p578e80} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px]">
        <p className="leading-[24px]">Upgrade only when scaling is your biggest problem</p>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[8px] py-[16px] relative w-full">
          <Frame64 />
          <Frame144 />
          <Frame66 />
        </div>
      </div>
    </div>
  );
}

function Frame137() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[37px] items-start justify-end left-0 px-[24px] py-0 top-[7748px] w-[390px]">
      <Frame61 />
      <Frame62 />
      <Frame63 />
    </div>
  );
}

function Frame145() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] items-center justify-center left-0 px-[24px] py-[16px] top-[8298px] w-[390px]">
      <div className="basis-0 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold grow justify-center leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-white">
        <p className="mb-0">
          <span>{`Upgrade only when scaling is your biggest problem. `}</span>
          <span className="text-[#99a0ae]">{`We don't charge you to care about your customers.`}</span>
        </p>
        <p>Support first. Billing later.</p>
      </div>
    </div>
  );
}

function Frame146() {
  return (
    <div className="h-[4.368px] relative shrink-0 w-[18.345px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 5">
        <g id="Frame 11">
          <circle cx="2.18391" cy="2.184" fill="var(--fill-0, #F65428)" id="Ellipse 1" r="2.18391" />
          <circle cx="9.1724" cy="2.18391" fill="var(--fill-0, #F1A62D)" id="Ellipse 2" r="2.18391" />
          <circle cx="16.1612" cy="2.18391" fill="var(--fill-0, #37C390)" id="Ellipse 3" r="2.18391" />
        </g>
      </svg>
    </div>
  );
}

function Frame147() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6.989px] items-start left-[7.18px] top-[5.26px]">
      <Frame146 />
    </div>
  );
}

function Frame148() {
  return (
    <div className="bg-[#2f333e] box-border content-stretch flex flex-col gap-[3.211px] items-start overflow-clip pb-[3.211px] pt-[13.463px] px-[3.211px] relative rounded-[7.657px] shadow-[0px_11.486px_7.657px_0px_rgba(0,0,0,0.16)] shrink-0 w-[609.243px]">
      <div className="h-[260.783px] relative rounded-[4.548px] shrink-0 w-[390px]" data-name="image 24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4.548px]">
          <img alt="" className="absolute h-full left-[-0.05%] max-w-none top-0 w-[122.55%]" src={imgImage28} />
        </div>
      </div>
      <Frame147 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-[#171b21] relative rounded-[12.14px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[36.42px] items-start p-[9.105px] relative w-full">
          <Frame148 />
        </div>
      </div>
    </div>
  );
}

function Frame149() {
  return (
    <div className="h-[4.368px] relative shrink-0 w-[18.345px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 5">
        <g id="Frame 11">
          <circle cx="2.18391" cy="2.18394" fill="var(--fill-0, #F65428)" id="Ellipse 1" r="2.18391" />
          <circle cx="9.1724" cy="2.18391" fill="var(--fill-0, #F1A62D)" id="Ellipse 2" r="2.18391" />
          <circle cx="16.1612" cy="2.18391" fill="var(--fill-0, #37C390)" id="Ellipse 3" r="2.18391" />
        </g>
      </svg>
    </div>
  );
}

function Frame150() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6.989px] items-start left-[7.18px] top-[5.26px]">
      <Frame149 />
    </div>
  );
}

function Frame151() {
  return (
    <div className="bg-[#2f333e] box-border content-stretch flex flex-col gap-[3.211px] items-start overflow-clip pb-[3.211px] pt-[13.463px] px-[3.211px] relative rounded-[7.657px] shadow-[0px_11.486px_7.657px_0px_rgba(0,0,0,0.16)] shrink-0 w-[609.243px]">
      <div className="h-[260.783px] relative rounded-[4.548px] shrink-0 w-[390px]" data-name="image 25">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4.548px]">
          <img alt="" className="absolute h-full left-[-0.03%] max-w-none top-0 w-[122.32%]" src={imgImage29} />
        </div>
      </div>
      <Frame150 />
    </div>
  );
}

function Frame152() {
  return (
    <div className="bg-[#171b21] relative rounded-[12.14px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[36.42px] items-start p-[9.105px] relative w-full">
          <Frame151 />
        </div>
      </div>
    </div>
  );
}

function Frame138() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24.28px] items-start justify-center left-0 px-[16px] py-0 top-[8775px] w-[390px]">
      <Frame67 />
      <Frame152 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[16px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-white">
            <p className="leading-[24px]">
              <span>{`Fits your brand. Works with your style. `}</span>
              <span className="text-[#99a0ae]">Light, dark, and fully customizable themes out of the box.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular">
          <div className="absolute inset-[9.375%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                <path d={svgPaths.p578e80} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[16px] text-nowrap tracking-[-0.176px]">
        <p className="leading-[24px] whitespace-pre">Matches your brand instantly</p>
      </div>
    </div>
  );
}

function Frame154() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular">
          <div className="absolute inset-[9.375%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                <path d={svgPaths.p578e80} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[16px] text-nowrap tracking-[-0.176px]">
        <p className="leading-[24px] whitespace-pre">{`Designed for clarity & comfort`}</p>
      </div>
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular">
          <div className="absolute inset-[9.375%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                <path d={svgPaths.p578e80} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px]">
        <p className="leading-[24px]">Automatic theme switching</p>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[8px] py-[16px] relative w-full">
          <Frame153 />
          <Frame154 />
          <Frame155 />
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-1/2 px-[24px] py-0 top-[9418px] translate-x-[-50%] w-[390px]">
      <Frame68 />
      <Frame69 />
    </div>
  );
}

function Frame156() {
  return (
    <div className="h-[5.757px] relative shrink-0 w-[24.177px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 6">
        <g id="Frame 11">
          <circle cx="2.87828" cy="2.8785" fill="var(--fill-0, #F65428)" id="Ellipse 1" r="2.87828" />
          <circle cx="12.0888" cy="2.8785" fill="var(--fill-0, #F1A62D)" id="Ellipse 2" r="2.87828" />
          <circle cx="21.2995" cy="2.87828" fill="var(--fill-0, #37C390)" id="Ellipse 3" r="2.87828" />
        </g>
      </svg>
    </div>
  );
}

function Frame157() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9.21px] items-start left-[9.46px] top-[6.94px]">
      <Frame156 />
    </div>
  );
}

function Frame158() {
  return (
    <div className="bg-[#2f333e] relative rounded-[10.092px] shadow-[0px_15.138px_10.092px_0px_rgba(0,0,0,0.16)] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[4.232px] items-start pb-[4.232px] pt-[17.743px] px-[4.232px] relative w-full">
          <div className="bg-[rgba(0,0,0,0.2)] h-[429.94px] rounded-[7.569px] shrink-0 w-[642.973px]" data-name="image 24" />
          <Frame157 />
          <div className="absolute bottom-[14.1px] h-[393.318px] right-[12.23px] rounded-[6.963px] shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.1)] w-[231.965px]" data-name="image 26">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6.963px]">
              <img alt="" className="absolute h-[101.95%] left-[-1.01%] max-w-none top-[-1.18%] w-[101.81%]" src={imgImage30} />
            </div>
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.2)] h-[10.004px] left-[24.43px] opacity-50 rounded-[7.569px] top-[49.65px] w-[92.756px]" data-name="image 27" />
          <div className="absolute bg-[rgba(0,0,0,0.2)] h-[139.298px] left-[24.43px] opacity-50 rounded-[7.569px] top-[112.05px] w-[224.557px]" data-name="image 29" />
          <div className="absolute bg-[rgba(0,0,0,0.2)] h-[139.298px] left-[262.35px] opacity-50 rounded-[7.569px] top-[112.05px] w-[224.557px]" data-name="image 34" />
          <div className="absolute bg-[rgba(0,0,0,0.2)] h-[10.004px] left-[24.43px] opacity-50 rounded-[7.569px] top-[260.34px] w-[92.756px]" data-name="image 31" />
          <div className="absolute bg-[rgba(0,0,0,0.2)] h-[10.004px] left-[24.43px] opacity-50 rounded-[7.569px] top-[338.18px] w-[92.756px]" data-name="image 33" />
          <div className="absolute bg-[rgba(0,0,0,0.2)] h-[10.004px] left-[24.43px] opacity-50 rounded-[7.569px] top-[391.62px] w-[92.756px]" data-name="image 36" />
          <div className="absolute bg-[rgba(0,0,0,0.2)] h-[10.004px] left-[25.25px] opacity-50 rounded-[7.569px] top-[357.18px] w-[325.043px]" data-name="image 35" />
          <div className="absolute bg-[rgba(0,0,0,0.2)] h-[10.004px] left-[25.25px] opacity-50 rounded-[7.569px] top-[410.62px] w-[325.043px]" data-name="image 37" />
          <div className="absolute bg-[rgba(0,0,0,0.2)] h-[10.004px] left-[24.43px] opacity-50 rounded-[7.569px] top-[65.09px] w-[47.197px]" data-name="image 28" />
          <div className="absolute bg-[rgba(0,0,0,0.2)] h-[10.004px] left-[24.43px] opacity-50 rounded-[7.569px] top-[275.78px] w-[47.197px]" data-name="image 32" />
        </div>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="basis-0 bg-[#171b21] grow h-[480px] min-h-px min-w-px relative rounded-[16px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[480px] items-start p-[12px] relative w-full">
          <Frame158 />
        </div>
      </div>
    </div>
  );
}

function Frame159() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[480px] items-center left-0 overflow-clip px-[16px] py-0 top-[9669px] w-[390px]">
      <Frame71 />
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
          <div className="absolute inset-[6.25%_15.63%_9.38%_15.63%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 21">
                <path d={svgPaths.p1d8b0800} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] text-nowrap tracking-[-0.0112px]">
        <p className="leading-[20px] whitespace-pre">Mobile Support</p>
      </div>
    </div>
  );
}

function Frame161() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[40.2px] text-white tracking-[-1.6px] w-full">
        <p className="leading-[48px]">Android and iOS mobile apps</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-full">
        <p className="leading-[24px]">Linquo mobile apps let you respond instantly, resolve issues faster, and stay productive wherever you are.</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="h-[55.637px] relative shrink-0 w-[166.912px]" data-name="image 34">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage34} />
      </div>
      <div className="h-[55.637px] relative shrink-0 w-[166.912px]" data-name="image 35">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.14%] max-w-none top-0 w-[100.29%]" src={imgImage35} />
        </div>
      </div>
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame160 />
      <Frame161 />
      <Frame73 />
    </div>
  );
}

function Frame21() {
  return <div className="absolute bg-slate-900 inset-[81.11%_2.84%_17.1%_80.01%]" />;
}

function Frame22() {
  return <div className="absolute bg-slate-900 inset-[59.86%_2.84%_38.35%_79%]" />;
}

function Frame11() {
  return (
    <div className="absolute bg-slate-900 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[3.429px] inset-[22.5%_20.25%_73.71%_15.17%] items-start leading-[normal] not-italic">
      <p className="relative shrink-0 text-[7.314px] text-white w-full">Blice Oohnson</p>
      <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden relative shrink-0 text-[#95a0b2] text-[6.172px] text-nowrap w-full">Hey! How can I assist you with your account today?</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-slate-900 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[3.429px] inset-[29.43%_20.25%_66.77%_15.17%] items-start leading-[normal] not-italic">
      <p className="relative shrink-0 text-[7.314px] text-white w-full">Eob Fmith</p>
      <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden relative shrink-0 text-[#95a0b2] text-[6.172px] text-nowrap w-full">Absolutely, I can help with that billing issue. What details can you provide?</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-slate-900 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[3.429px] inset-[36.37%_20.25%_59.84%_15.17%] items-start leading-[normal] not-italic">
      <p className="relative shrink-0 text-[7.314px] text-white w-full">Rharlie Orown</p>
      <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden relative shrink-0 text-[#95a0b2] text-[6.172px] text-nowrap w-full">{`I understand you're having login issues. Let's fix that!`}</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-slate-900 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[3.429px] inset-[43.3%_20.25%_52.9%_15.17%] items-start leading-[normal] not-italic">
      <p className="relative shrink-0 text-[7.314px] text-white w-full">Siana Hrince</p>
      <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden relative shrink-0 text-[#95a0b2] text-[6.172px] text-nowrap w-full">{`I'll look up the latest updates on your order right now!`}</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-slate-900 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[3.429px] inset-[50.68%_20.25%_45.52%_15.17%] items-start leading-[normal] not-italic">
      <p className="relative shrink-0 text-[7.314px] text-white w-full">Sthan Hunt</p>
      <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden relative shrink-0 text-[#95a0b2] text-[6.172px] text-nowrap w-full">Changing your subscription plan is easy! Which one do you prefer?</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-slate-900 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[3.429px] inset-[57.62%_20.25%_38.59%_15.17%] items-start leading-[normal] not-italic">
      <p className="relative shrink-0 text-[7.314px] text-white w-full">Viona Aallagher</p>
      <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden relative shrink-0 text-[#95a0b2] text-[6.172px] text-nowrap w-full">Of course, I can assist with tech support. What issue are you facing?</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute bg-slate-900 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[3.429px] inset-[65%_20.25%_31.2%_15.17%] items-start leading-[normal] not-italic">
      <p className="relative shrink-0 text-[7.314px] text-white w-full">Feorge Iashington</p>
      <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden relative shrink-0 text-[#95a0b2] text-[6.172px] text-nowrap w-full">I can help you with the return process. What item are you returning?</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-slate-900 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[3.429px] inset-[71.94%_20.25%_24.27%_15.17%] items-start leading-[normal] not-italic">
      <p className="relative shrink-0 text-[7.314px] text-white w-full">Bannah Uaker</p>
      <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden relative shrink-0 text-[#95a0b2] text-[6.172px] text-nowrap w-full">To reset your password, just follow these steps. Ready?</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-slate-900 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[3.429px] inset-[78.87%_20.25%_17.33%_15.17%] items-start leading-[normal] not-italic">
      <p className="relative shrink-0 text-[7.314px] text-white w-full">Esaac Aewton</p>
      <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden relative shrink-0 text-[#95a0b2] text-[6.172px] text-nowrap w-full">Our customer service is here from 9 AM to 5 PM, Monday to Friday.</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute bg-slate-900 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[3.429px] inset-[85.81%_20.25%_10.4%_15.17%] items-start leading-[normal] not-italic">
      <p className="relative shrink-0 text-[7.314px] text-white w-full">Kasmine Ureen</p>
      <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden relative shrink-0 text-[#95a0b2] text-[6.172px] text-nowrap w-full">{`I'm here to help with your question about our privacy policy. What do you need?`}</p>
    </div>
  );
}

function Frame163() {
  return (
    <div className="absolute h-[497.893px] left-[calc(50%-0.351px)] overflow-clip top-[calc(50%+4.044px)] translate-x-[-50%] translate-y-[-50%] w-[219.835px]">
      <div className="absolute aspect-[681/1536] left-0 right-0 rounded-[18.286px] shadow-[0px_18.286px_36.572px_-13.714px_rgba(14,18,27,0.1)] top-0" data-name="image 18">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[18.286px] size-full" src={imgImage18} />
      </div>
      <Frame21 />
      <Frame22 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function IPhone14Pro() {
  return (
    <div className="absolute h-[503.493px] left-[16px] overflow-clip top-[11px] w-[246.9px]" data-name="iPhone 14 Pro">
      <Frame163 />
      <div className="absolute bottom-[0.11%] left-0 right-0 top-0" data-name="Deep Purple">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[100.23%]" src={imgDeepPurple} />
        </div>
      </div>
    </div>
  );
}

function IPhone14Pro1() {
  return (
    <div className="absolute h-[503.493px] left-[277.1px] overflow-clip top-[57.48px] w-[246.9px]" data-name="iPhone 14 Pro">
      <div className="absolute bottom-0 h-[495.794px] left-[13.3px] rounded-[17.747px] shadow-[0px_17.747px_35.493px_-13.31px_rgba(14,18,27,0.1)] w-[219.815px]" data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[17.747px] size-full" src={imgImage12} />
      </div>
      <div className="absolute bottom-[0.11%] left-0 right-0 top-0" data-name="Deep Purple">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[100.23%]" src={imgDeepPurple} />
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return <div className="absolute bg-gradient-to-r from-[rgba(70,70,136,0)] h-[463px] opacity-70 right-0 to-[#304484] top-0 w-[100px]" />;
}

function Frame75() {
  return <div className="bg-gradient-to-r from-[rgba(96,72,141,0)] h-[559px] opacity-70 to-[#61498d] w-[100px]" />;
}

function Frame164() {
  return (
    <div className="absolute h-[463px] left-0 overflow-clip top-[386px] w-[484px]">
      <IPhone14Pro />
      <IPhone14Pro1 />
      <Frame74 />
      <div className="absolute bottom-0 flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center right-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "100", "--transform-inner-height": "559" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Frame75 />
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[48px] h-[850px] items-start left-1/2 overflow-clip px-[20px] py-[32px] top-[10253px] translate-x-[-50%] w-[390px] animate-gradient-shift"
      style={{
        background:
          "linear-gradient(135deg, #2f4484, #62488d, #2f4484, #62488d)",
        backgroundSize: "400% 400%",
      }}
    >
      <Frame162 />
      <Frame164 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="absolute left-0 top-[11219px] w-full overflow-hidden">
      <motion.div 
        className="flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[10.865px] items-center leading-[0] not-italic text-[28.974px] text-center text-nowrap text-white uppercase"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
      >
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No missed leads</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No manual tagging</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No “who’s on it?”</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No support bottlenecks</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No copy-pasting</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No team limits</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No form chasing</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No inbox hopping</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No dev setup</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No chaos threads</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No context loss</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No missed leads</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No manual tagging</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No "who's on it?"</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No support bottlenecks</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No copy-pasting</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No team limits</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No form chasing</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No inbox hopping</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No dev setup</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No chaos threads</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No context loss</p>
      </div>
      </motion.div>
    </div>
  );
}

function Frame165() {
  return (
    <div className="absolute left-0 top-[11262.9px] w-full overflow-hidden">
      <motion.div 
        className="flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[10.865px] items-center leading-[0] not-italic text-[28.974px] text-center text-nowrap text-white uppercase"
        animate={{
          x: ["-50%", "0%"]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
      >
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No missed leads</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No manual tagging</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No “who’s on it?”</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No support bottlenecks</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No copy-pasting</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No team limits</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No form chasing</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No inbox hopping</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No dev setup</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No chaos threads</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No context loss</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No missed leads</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No manual tagging</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No "who's on it?"</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No support bottlenecks</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No copy-pasting</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No team limits</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No form chasing</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No inbox hopping</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No dev setup</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No chaos threads</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No context loss</p>
      </div>
      </motion.div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="absolute left-0 top-[11350.7px] w-full overflow-hidden">
      <motion.div 
        className="flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[10.865px] items-center leading-[0] not-italic text-[28.974px] text-center text-nowrap text-white uppercase"
        animate={{
          x: ["-50%", "0%"]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
      >
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No missed leads</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No manual tagging</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No “who’s on it?”</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No support bottlenecks</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No copy-pasting</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No team limits</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No form chasing</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No inbox hopping</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No dev setup</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No chaos threads</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No context loss</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No missed leads</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No manual tagging</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No "who's on it?"</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No support bottlenecks</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No copy-pasting</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No team limits</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No form chasing</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No inbox hopping</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No dev setup</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No chaos threads</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No context loss</p>
      </div>
      </motion.div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="absolute left-0 top-[11306.8px] w-full overflow-hidden">
      <motion.div 
        className="flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[10.865px] items-center leading-[0] not-italic text-[28.974px] text-center text-nowrap text-white uppercase"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
      >
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No missed leads</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No manual tagging</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No “who’s on it?”</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No support bottlenecks</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No copy-pasting</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No team limits</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No form chasing</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No inbox hopping</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No dev setup</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No chaos threads</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No context loss</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No missed leads</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No manual tagging</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No "who's on it?"</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No support bottlenecks</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No copy-pasting</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No team limits</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No form chasing</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No inbox hopping</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No dev setup</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No chaos threads</p>
      </div>
      <div className="flex flex-col justify-center opacity-20 relative shrink-0">
        <p className="leading-[35.312px] text-nowrap whitespace-pre">No context loss</p>
      </div>
      </motion.div>
    </div>
  );
}

function Frame166() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
          <div className="absolute inset-[16.2%_3.13%_16.2%_3.1%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 17">
                <path d={svgPaths.p368a1d80} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] text-nowrap tracking-[-0.0112px]">
        <p className="leading-[20px] whitespace-pre">Why Choose Us</p>
      </div>
    </div>
  );
}

function IconText({ isActive }: { isActive: boolean }) {
  return (
    <div className={`basis-0 ${isActive ? "bg-[#2f333e] shadow-[0px_2px_4px_0px_rgba(14,18,27,0.03),0px_6px_10px_0px_rgba(14,18,27,0.06)]" : ""} grow min-h-px min-w-[101px] relative rounded-[8px] shrink-0 transition-all duration-300 ease-in-out`} data-name="IconText">
      <div className="flex flex-row items-center justify-center min-w-inherit size-full">
        <div className="box-border content-center flex flex-wrap gap-[4px] items-center justify-center min-w-inherit p-[4px] relative w-full">
          <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0" data-name="💠 Text">
            <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center ${isActive ? "text-white" : "text-[#99a0ae]"} tracking-[-0.0112px] w-full transition-colors duration-300 ease-in-out`}>Agen..</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconText1({ isActive }: { isActive: boolean }) {
  return (
    <div className={`basis-0 ${isActive ? "bg-[#2f333e] shadow-[0px_2px_4px_0px_rgba(14,18,27,0.03),0px_6px_10px_0px_rgba(14,18,27,0.06)]" : ""} grow min-h-px min-w-[101px] relative rounded-[8px] shrink-0 transition-all duration-300 ease-in-out`} data-name="IconText">
      <div className="flex flex-row items-center justify-center min-w-inherit size-full">
        <div className="box-border content-center flex flex-wrap gap-[4px] items-center justify-center min-w-inherit p-[4px] relative w-full">
          <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0" data-name="💠 Text">
            <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center ${isActive ? "text-white" : "text-[#99a0ae]"} tracking-[-0.0112px] w-full transition-colors duration-300 ease-in-out`}>Dev..</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconText2({ isActive }: { isActive: boolean }) {
  return (
    <div className={`basis-0 ${isActive ? "bg-[#2f333e] shadow-[0px_2px_4px_0px_rgba(14,18,27,0.03),0px_6px_10px_0px_rgba(14,18,27,0.06)]" : ""} grow min-h-px min-w-[101px] relative rounded-[8px] shrink-0 transition-all duration-300 ease-in-out`} data-name="IconText">
      <div className="flex flex-row items-center justify-center min-w-inherit size-full">
        <div className="box-border content-center flex flex-wrap gap-[4px] items-center justify-center min-w-inherit p-[4px] relative w-full">
          <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0" data-name="💠 Text">
            <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center ${isActive ? "text-white" : "text-[#99a0ae]"} tracking-[-0.0112px] w-full transition-colors duration-300 ease-in-out`}>E-com..</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconText3({ isActive }: { isActive: boolean }) {
  return (
    <div className={`basis-0 ${isActive ? "bg-[#2f333e] shadow-[0px_2px_4px_0px_rgba(14,18,27,0.03),0px_6px_10px_0px_rgba(14,18,27,0.06)]" : ""} grow min-h-px min-w-[101px] relative rounded-[8px] shrink-0 transition-all duration-300 ease-in-out`} data-name="IconText">
      <div className="flex flex-row items-center justify-center min-w-inherit size-full">
        <div className="box-border content-center flex flex-wrap gap-[4px] items-center justify-center min-w-inherit p-[4px] relative w-full">
          <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0" data-name="💠 Text">
            <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center ${isActive ? "text-white" : "text-[#99a0ae]"} tracking-[-0.0112px] w-full transition-colors duration-300 ease-in-out`}>Free..</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame({ activeTab, setActiveTab }: { activeTab: number; setActiveTab: (tab: number) => void }) {
  return (
    <div className="bg-[#171b21] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3px] items-center p-[4px] relative w-full">
          <div onClick={() => setActiveTab(0)} className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[5px] shrink-0 cursor-pointer transition-all duration-200" data-name="Switch Toggle Items">
            <IconText isActive={activeTab === 0} />
          </div>
          <div onClick={() => setActiveTab(1)} className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 cursor-pointer transition-all duration-200" data-name="Switch Toggle Items">
            <IconText1 isActive={activeTab === 1} />
          </div>
          <div onClick={() => setActiveTab(2)} className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 cursor-pointer transition-all duration-200" data-name="Switch Toggle Items">
            <IconText2 isActive={activeTab === 2} />
          </div>
          <div onClick={() => setActiveTab(3)} className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 cursor-pointer transition-all duration-200" data-name="Switch Toggle Items">
            <IconText3 isActive={activeTab === 3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame167({ activeTab, setActiveTab }: { activeTab: number; setActiveTab: (tab: number) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.72px] w-full">
        <p className="leading-[32px] text-[24px]">
          <span>{`For businesses who want to `}</span>
          <span className="bg-clip-text bg-gradient-to-r from-[#3c82f6] to-[#ef4544] via-[#955ae5] via-[53.673%]" style={{ WebkitTextFillColor: "transparent" }}>
            ship more
          </span>
        </p>
      </div>
      <Frame activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

function Frame80({ activeTab, setActiveTab }: { activeTab: number; setActiveTab: (tab: number) => void }) {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[32px] items-start left-0 px-[24px] py-0 top-[11521px] w-[390px]">
      <Frame166 />
      <Frame167 activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

function Frame168() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">

      </div>
    </div>
  );
}

function Frame169({ activeTab }: { activeTab: number }) {
  const content = [
    {
      text: "Boost revenue by offering our clients complimentary linquo. ",
      subtext: "This will enhance their satisfaction.",
    },
    {
      text: "Add live chat to any product with one embed code. ",
      subtext: "Start chatting in minutes, not hours.",
    },
    {
      text: "Engage customers in real-time and boost conversions. ",
      subtext: "All e-commerce features built-in.",
    },
    {
      text: "Manage multiple clients seamlessly with one dashboard. ",
      subtext: "Scale your freelance business.",
    },
  ];

  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[16px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-white">
            <p className="leading-[24px]">
              <span>{content[activeTab].text}</span>
              <span className="text-[#99a0ae]">{content[activeTab].subtext}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame170({ activeTab }: { activeTab: number }) {
  const features = [
    "Order tracking and notifications",
    "Simple embed code integration",
    "Real-time order notifications",
    "Client portal & billing",
  ];

  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular">
          <div className="absolute inset-[9.375%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                <path d={svgPaths.p578e80} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[16px] text-nowrap tracking-[-0.176px]">
        <p className="leading-[24px] whitespace-pre">{features[activeTab]}</p>
      </div>
    </div>
  );
}

function Frame171({ activeTab }: { activeTab: number }) {
  const features = [
    "Cart abandonment recovery",
    "Copy & paste into <head> tag",
    "Product catalog integration",
    "Time tracking & invoicing",
  ];

  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular">
          <div className="absolute inset-[9.375%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                <path d={svgPaths.p578e80} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[16px] text-nowrap tracking-[-0.176px]">
        <p className="leading-[24px] whitespace-pre">{features[activeTab]}</p>
      </div>
    </div>
  );
}

function Frame172({ activeTab }: { activeTab: number }) {
  const features = [
    "Product recommendations in chat",
    "Get client feedback instantly",
    "Abandoned cart recovery",
    "Unlimited team members",
  ];

  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[16px]" data-name="Weight=Regular">
          <div className="absolute inset-[9.375%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                <path d={svgPaths.p578e80} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px]">
        <p className="leading-[24px]">{features[activeTab]}</p>
      </div>
    </div>
  );
}

function Frame173({ activeTab }: { activeTab: number }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[8px] py-[16px] relative w-full">
          <Frame170 activeTab={activeTab} />
          <Frame171 activeTab={activeTab} />
          <Frame172 activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}

function Frame82({ activeTab }: { activeTab: number }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame169 activeTab={activeTab} />
      <Frame173 activeTab={activeTab} />
    </div>
  );
}

function Frame81({ activeTab }: { activeTab: number }) {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] items-start left-1/2 px-[24px] py-0 top-[11731px] translate-x-[-50%] w-[390px]">
      <Frame168 />
      <Frame82 activeTab={activeTab} />
    </div>
  );
}

function Frame84({ activeTab }: { activeTab: number }) {
  const testimonials = [
    {
      quote: "Linquo has transformed how we design and deliver solutions for our clients. It's become an essential part of our toolset.",
      author: "Josh Beck, Director of Engineering @ Beck Tech Co",
    },
    {
      quote:
        "Simply copy and paste the embed code into our <head> tag. We had live chat running across all our products in less than an hour.",
      author: "Sarah Chen, Lead Developer @ TechFlow Solutions",
    },
    {
      quote:
        "Our conversion rate increased by 40% after implementing Linquo. The real-time support makes all the difference.",
      author: "Michael Torres, E-commerce Manager @ Shopwise",
    },
    {
      quote:
        "Managing client communications has never been easier. Linquo helps me stay organized and professional across all projects.",
      author:
        "Emma Rodriguez, Freelance Designer @ Rodriguez Creative",
    },
  ];

  const currentTestimonial = testimonials[activeTab];

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[24px]">{`Linquo has transformed how we design and deliver solutions for our clients. It's become an essential part of our toolset.`}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[12px] w-full">
        <p className="leading-[16px]">Josh Beck, Director of Engineering @ Beck Tech Co</p>
      </div>
    </div>
  );
}

function Frame83({ activeTab }: { activeTab: number }) {
  // Using imgImage38 for all tabs since other images don't exist
  const images = [imgImage38, imgImage38, imgImage38, imgImage38];
  const currentImage = images[activeTab];

  return (
    <div className="bg-white overflow-clip relative rounded-[16px] shrink-0 size-[195px]">
      <div
        className="absolute h-[292.109px] left-[0.09px] top-[-19.54px] w-[194.817px]"
        data-name="image 38"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {activeTab === 0 ? (
              <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src={imgImage38}
              />
            ) : (
              <ImageWithFallback
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src={images[activeTab]}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Frame174({ activeTab }: { activeTab: number }) {
  return (
    <div className="basis-0 bg-[#171b21] grow h-[475px] min-h-px min-w-px relative rounded-[16px] shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center overflow-clip pb-[24px] pt-[40px] px-[24px] relative size-full">
          <Frame84 activeTab={activeTab} />
          <div className="absolute h-[48px] left-[14px] top-[25px] w-[55px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 48">
              <path clipRule="evenodd" d={svgPaths.p3b80da80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" opacity="0.1" />
            </svg>
          </div>
          <Frame83 activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}

function Frame175({ activeTab }: { activeTab: number }) {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] items-center left-0 overflow-clip px-[16px] py-0 top-[11996px] w-[390px]">
      <Frame174 activeTab={activeTab} />
    </div>
  );
}

function Frame176() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
          <div className="absolute inset-[9.36%_9.36%_9.43%_9.43%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.pa2b9d80} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] text-nowrap tracking-[-0.0112px]">
        <p className="leading-[20px] whitespace-pre">Fast Installation</p>
      </div>
    </div>
  );
}

function Frame177() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[0px] text-white tracking-[-0.72px] w-full">
        <p className="leading-[32px] not-italic text-[24px]">
          <span>{`Deploy your `}</span>
          <span className="bg-clip-text bg-gradient-to-r from-[#3c82f6] to-[#ef4544] via-[#955ae5] via-[53.673%]" style={{ WebkitTextFillColor: "transparent" }}>
            first widget
          </span>
          <span>{` in seconds`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-full">
        <p className="leading-[24px]">No setup, no engineers, no waiting — your chat widget goes from idea to on-site in seconds. Plug it in, start talking to customers, done.</p>
      </div>
    </div>
  );
}

function Frame178() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[32px] items-start left-0 px-[24px] py-0 top-[12565px] w-[390px]">
      <Frame176 />
      <Frame177 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="relative shrink-0 size-[74px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
        <g id="Frame 93">
          <rect fill="url(#paint0_linear_63642_7842)" height="74" rx="16" width="74" />
          <path clipRule="evenodd" d={svgPaths.p1cbdd000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_63642_7842" x1="-2.74999e-07" x2="67.6849" y1="2.06124" y2="70.4998">
            <stop stopColor="#414C56" />
            <stop offset="0.642619" stopColor="#21262C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-white tracking-[-0.72px] w-full">
        <p className="leading-[32px]">Webflow</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-full">
        <p className="leading-[24px]">Add real-time chat without touching code. Just copy and paste embed code, publish, and start chatting.</p>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[16px] text-nowrap tracking-[-0.176px]">
        <p className="leading-[24px] whitespace-pre">Check Installations</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
          <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(82, 88, 102, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15">
                <path d={svgPaths.p3a8fce80} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame179() {
  return (
    <div className="bg-[#2f363d] relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[32px] relative w-full bg-[rgb(23,27,33)]">
          <Frame85 />
          <Frame91 />
          <Frame92 />
        </div>
      </div>
    </div>
  );
}

function Frame180() {
  return (
    <div className="relative shrink-0 size-[74px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
        <g id="Frame 92">
          <rect fill="url(#paint0_linear_63642_8023)" height="74" rx="16" width="74" />
          <path d={svgPaths.p28802f80} fill="var(--fill-0, white)" id="Vector 18" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_63642_8023" x1="-2.74999e-07" x2="67.6849" y1="2.06124" y2="70.4998">
            <stop stopColor="#414C56" />
            <stop offset="0.642619" stopColor="#21262C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame181() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-white tracking-[-0.72px] w-full">
        <p className="leading-[32px]">Framer</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-full">
        <p className="leading-[24px]">{`Launch your chat widget visually — paste the script and you're live. No code, no fuss.`}</p>
      </div>
    </div>
  );
}

function Frame182() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[16px] text-nowrap tracking-[-0.176px]">
        <p className="leading-[24px] whitespace-pre">Check Installations</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
          <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(82, 88, 102, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15">
                <path d={svgPaths.p3a8fce80} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="bg-[#2f363d] relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[32px] relative w-full bg-[rgb(23,27,33)]">
          <Frame180 />
          <Frame181 />
          <Frame182 />
        </div>
      </div>
    </div>
  );
}

function NextjsLogo1() {
  return (
    <div className="absolute inset-[41.76%_12.16%_42.02%_12.16%]" data-name="Nextjs-logo 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 12">
        <g clipPath="url(#clip0_63642_7908)" id="Nextjs-logo 1">
          <path d={svgPaths.p25ff1000} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p283ec800} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3f6cdb00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2178b300} fill="var(--fill-0, white)" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p3206f300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_5" />
          <path d={svgPaths.pcf60300} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p90ebe80} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p9167300} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
        <defs>
          <clipPath id="clip0_63642_7908">
            <rect fill="white" height="12" width="56" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame89() {
  return (
    <div className="overflow-clip relative rounded-[16px] shrink-0 size-[74px]" style={{ background: 'linear-gradient(135deg, #414C56 0%, #21262C 64.26%)' }}>
      <NextjsLogo1 />
    </div>
  );
}

function Frame183() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-white tracking-[-0.72px] w-full">
        <p className="leading-[32px]">{`Next.js `}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-full">
        <p className="leading-[24px]">Drop in our snippet and deploy fast. Works seamlessly with SSR and edge runtimes.</p>
      </div>
    </div>
  );
}

function Frame184() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[16px] text-nowrap tracking-[-0.176px]">
        <p className="leading-[24px] whitespace-pre">Check Installations</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
          <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(82, 88, 102, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15">
                <path d={svgPaths.p3a8fce80} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame185() {
  return (
    <div className="bg-[#2f363d] relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[32px] relative w-full bg-[rgb(23,27,33)]">
          <Frame89 />
          <Frame183 />
          <Frame184 />
        </div>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full">
      <Frame179 />
      <Frame90 />
      <Frame185 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="relative shrink-0 size-[74px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
        <g id="Frame 94">
          <rect fill="url(#paint0_linear_63642_7831)" height="74" rx="16" width="74" />
          <path d={svgPaths.p13103e00} fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p324481f0} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.96571" />
            <path d={svgPaths.p14450a80} id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="1.96571" />
            <path d={svgPaths.p10b3d180} id="Vector_4" stroke="var(--stroke-0, white)" strokeWidth="1.96571" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_63642_7831" x1="-2.74999e-07" x2="67.6849" y1="2.06124" y2="70.4998">
            <stop stopColor="#414C56" />
            <stop offset="0.642619" stopColor="#21262C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame186() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-white tracking-[-0.72px] w-full">
        <p className="leading-[32px]">React.js</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-full">
        <p className="leading-[24px]">Install with one line and go live instantly. Built for modern React workflows.</p>
      </div>
    </div>
  );
}

function Frame187() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[16px] text-nowrap tracking-[-0.176px]">
        <p className="leading-[24px] whitespace-pre">Check Installations</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
          <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(82, 88, 102, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15">
                <path d={svgPaths.p3a8fce80} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame188() {
  return (
    <div className="bg-[#2f363d] relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[32px] relative w-full bg-[rgb(23,27,33)]">
          <Frame86 />
          <Frame186 />
          <Frame187 />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-0 left-0 right-[-0.01%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="Group">
          <path d={svgPaths.p13cfb900} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p33451680} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1432b3c0} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pdc18d00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3ad60880} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function WordPressBlueLogo1() {
  return (
    <div className="absolute left-[16px] overflow-clip size-[42px] top-[15.43px]" data-name="WordPress_blue_logo 1">
      <Group2 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="overflow-clip relative rounded-[16px] shrink-0 size-[74px]" style={{ background: 'linear-gradient(135deg, #414C56 0%, #21262C 64.26%)' }}>
      <WordPressBlueLogo1 />
    </div>
  );
}

function Frame189() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-white tracking-[-0.72px] w-full">
        <p className="leading-[32px]">Wordpress</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-full">
        <p className="leading-[24px]">{`A plug & play chat widget for WordPress — install, activate, start conversations.`}</p>
      </div>
    </div>
  );
}

function Frame190() {
  return (
    <div className="content-stretch flex gap-[10px] items-center opacity-20 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[16px] text-nowrap tracking-[-0.176px]">
        <p className="leading-[24px] whitespace-pre">Check Installations</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
          <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(82, 88, 102, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15">
                <path d={svgPaths.p3a8fce80} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="absolute bg-[rgba(246,181,30,0.11)] box-border content-stretch flex flex-col gap-[8px] items-start left-[221.33px] px-[8px] py-[2px] rounded-[8px] top-[32px]">
      <div className="box-border content-stretch flex items-center px-0 py-px relative rounded-[4px] shrink-0" data-name="Badge-Status">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#f6b51e] text-[12px] text-nowrap whitespace-pre">Coming Soon</p>
      </div>
    </div>
  );
}

function Frame191() {
  return (
    <div className="bg-[#2f363d] relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[32px] relative w-full bg-[rgb(23,27,33)]">
          <Frame87 />
          <Frame189 />
          <Frame190 />
          <Frame96 />
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-0 left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[45.807px_18px] right-[0.42%] top-0" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 18">
        <g id="Group">
          <path d={svgPaths.p294bad80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p9397f00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1d6d2c00} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute bottom-0 contents left-0 right-[0.42%] top-0" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function WixLogoB1() {
  return (
    <div className="absolute h-[18px] left-[14px] overflow-clip top-[27.7px] w-[46px]" data-name="Wix logoB 1">
      <ClipPathGroup1 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="overflow-clip relative rounded-[16px] shrink-0 size-[74px]" style={{ background: 'linear-gradient(135deg, #414C56 0%, #21262C 64.26%)' }}>
      <WixLogoB1 />
    </div>
  );
}

function Frame192() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-white tracking-[-0.72px] w-full">
        <p className="leading-[32px]">Wix</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-full">
        <p className="leading-[24px]">Add live chat to your Wix site in seconds — no technical setup required.</p>
      </div>
    </div>
  );
}

function Frame193() {
  return (
    <div className="content-stretch flex gap-[10px] items-center opacity-20 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[16px] text-nowrap tracking-[-0.176px]">
        <p className="leading-[24px] whitespace-pre">Check Installations</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
          <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(82, 88, 102, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15">
                <path d={svgPaths.p3a8fce80} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame194() {
  return (
    <div className="absolute bg-[rgba(246,181,30,0.11)] box-border content-stretch flex flex-col gap-[8px] items-start left-[221px] px-[8px] py-[2px] rounded-[8px] top-[32px]">
      <div className="box-border content-stretch flex items-center px-0 py-px relative rounded-[4px] shrink-0" data-name="Badge-Status">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#f6b51e] text-[12px] text-nowrap whitespace-pre">Coming Soon</p>
      </div>
    </div>
  );
}

function Frame195() {
  return (
    <div className="bg-[#2f363d] relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[32px] relative w-full bg-[rgb(23,27,33)]">
          <Frame88 />
          <Frame192 />
          <Frame193 />
          <Frame194 />
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full">
      <Frame188 />
      <Frame191 />
      <Frame195 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] items-start left-0 px-[16px] py-0 top-[12839px] w-[390px]">
      <Frame93 />
      <Frame94 />
    </div>
  );
}

function Frame196() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
          <div className="absolute inset-[12.5%_6.25%_12.52%_6.25%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 18">
                <path d={svgPaths.p3ac510c0} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] text-nowrap tracking-[-0.0112px]">
        <p className="leading-[20px] whitespace-pre">Testimonials</p>
      </div>
    </div>
  );
}

function Frame197() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-white tracking-[-0.72px] w-full">
        <p className="leading-[32px]">Why everyone love Linquo</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#cacfd8] text-[0px] text-[16px] tracking-[-0.176px] w-full">
        <p className="mb-0">{`Add Linquo's live chat widget in minutes and start supporting customers instantly. `}</p>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white">No per-agent pricing. No limits.</p>
      </div>
    </div>
  );
}

function Frame198() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[32px] items-start left-0 px-[24px] py-0 top-[14941px] w-[390px]">
      <Frame196 />
      <Frame197 />
    </div>
  );
}

function Base() {
  return (
    <div className="absolute inset-[0.4%_2.6%_41.31%_0.14%]" data-name="Base">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Base">
          <g id="Skin">
            <path d={svgPaths.p295bda80} fill="var(--fill-0, white)" id="Path_3824" />
          </g>
          <path d={svgPaths.p32b68700} fill="var(--fill-0, black)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Hair() {
  return (
    <div className="absolute inset-[3.03%_9.08%_41.91%_18.27%]" data-name="Hair/1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 18">
        <g id="Hair/1">
          <path d={svgPaths.p17632b80} fill="var(--fill-0, black)" id="Path_3963" />
        </g>
      </svg>
    </div>
  );
}

function Lips() {
  return (
    <div className="absolute inset-[32.5%_18.33%_23.18%_36.69%]" data-name="Lips/1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
        <g id="Lips/1">
          <path d={svgPaths.p1e6d7800} fill="var(--fill-0, black)" id="Path_4087" />
          <path d={svgPaths.p145a9680} fill="var(--fill-0, black)" id="Path_4088" />
        </g>
      </svg>
    </div>
  );
}

function Nose() {
  return (
    <div className="absolute inset-[76.3%_25.26%_14.26%_26.32%]" data-name="Nose/3">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
          <g id="Nose/3">
            <path d={svgPaths.p3ac23d00} fill="var(--fill-0, black)" id="Path_4052" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Eyes() {
  return (
    <div className="absolute inset-[31.85%_11.68%_27.94%_41.9%]" data-name="Eyes/15">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 3">
        <g id="Eyes/15">
          <path d={svgPaths.p1d682700} fill="var(--fill-0, black)" id="Path_3964" />
          <path d={svgPaths.p1fd58500} fill="var(--fill-0, black)" id="Path_3965" />
        </g>
      </svg>
    </div>
  );
}

function Brows() {
  return (
    <div className="absolute inset-[19.21%_7.67%_14.31%_7.64%]" data-name="Brows/12">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.02%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 2">
          <g id="Brows/12">
            <path d={svgPaths.p11218a80} fill="var(--fill-0, black)" id="Path_4009" />
            <path d={svgPaths.p247d8c80} fill="var(--fill-0, black)" id="Path_4010" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] text-white tracking-[-0.08px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">Simon R.</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[12px]">
        <p className="leading-[16px] text-nowrap whitespace-pre">Partner at Linquo</p>
      </div>
    </div>
  );
}

function Frame199() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="bg-[#cac0ff] box-border content-stretch flex gap-[8px] items-center justify-center p-[4px] relative rounded-[1000px] shrink-0" data-name="Avater 2.0">
        <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
          <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Property 1=Only head">
            <div className="absolute inset-[28.76%_23.85%_-28.36%_15.83%]" data-name="Base">
              <Base />
            </div>
            <div className="absolute inset-[0.7%_4.61%_-0.2%_-10.72%]" data-name="🦱Hair">
              <Hair />
            </div>
            <div className="absolute inset-[67.23%_32.56%_17.03%_41.88%]" data-name="👄 Lips">
              <Lips />
            </div>
            <div className="absolute inset-[60.62%_26.95%_8.12%_28.06%]" data-name="⚡Beard" />
            <div className="absolute inset-[46.89%_35.47%_30.36%_52.91%]" data-name="👃Nose">
              <Nose />
            </div>
            <div className="absolute inset-[48.1%_25.15%_35.37%_23.75%]" data-name="👀 Eyes">
              <Eyes />
            </div>
            <div className="absolute inset-[45.79%_27.25%_47.09%_40.18%]" data-name="👁️ Brows">
              <Brows />
            </div>
            <div className="absolute h-[449px] left-[21.04%] right-[15.13%] top-[calc(50%-135.5px)] translate-y-[-50%]" data-name="🎩 Accessories" />
          </div>
        </div>
      </div>
      <Frame101 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-gradient-to-b from-[#2f4484] relative rounded-[16px] shrink-0 to-[#62488d] w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div
          className="box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full animate-gradient-shift"
          style={{
            background:
              "linear-gradient(135deg, #2f4484, #62488d, #2f4484, #62488d)",
            backgroundSize: "400% 400%",
          }}
        >
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] min-w-full not-italic relative shrink-0 text-[#cacfd8] text-[0px] text-[16px] tracking-[-0.176px] w-[min-content]">
            <p className="mb-0">{`Add Linquo's live chat widget in minutes and start supporting customers instantly. `}</p>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white">No per-agent pricing. No limits.</p>
          </div>
          <Frame199 />
        </div>
      </div>
    </div>
  );
}

function Base1() {
  return (
    <div className="absolute inset-[0.4%_2.6%_41.31%_0.14%]" data-name="Base">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Base">
          <g id="Skin">
            <path d={svgPaths.p295bda80} fill="var(--fill-0, white)" id="Path_3824" />
          </g>
          <path d={svgPaths.p32b68700} fill="var(--fill-0, black)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Nose1() {
  return (
    <div className="absolute inset-[76.3%_25.26%_14.26%_26.32%]" data-name="Nose/3">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
          <g id="Nose/3">
            <path d={svgPaths.p3ac23d00} fill="var(--fill-0, black)" id="Path_4052" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Eyes1() {
  return (
    <div className="absolute inset-[31.85%_11.68%_27.94%_41.9%]" data-name="Eyes/15">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 3">
        <g id="Eyes/15">
          <path d={svgPaths.p1d682700} fill="var(--fill-0, black)" id="Path_3964" />
          <path d={svgPaths.p1fd58500} fill="var(--fill-0, black)" id="Path_3965" />
        </g>
      </svg>
    </div>
  );
}

function Brows1() {
  return (
    <div className="absolute inset-[19.21%_7.67%_14.31%_7.64%]" data-name="Brows/12">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.02%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 2">
          <g id="Brows/12">
            <path d={svgPaths.p159c5400} fill="var(--fill-0, black)" id="Path_4009" />
            <path d={svgPaths.p3e5a93b0} fill="var(--fill-0, black)" id="Path_4010" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame200() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] text-white tracking-[-0.08px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">Alex M</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[12px]">
        <p className="leading-[16px] text-nowrap whitespace-pre">Product Founder</p>
      </div>
    </div>
  );
}

function Frame201() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="bg-[#ffd5c0] box-border content-stretch flex gap-[8px] items-center justify-center p-[4px] relative rounded-[1000px] shrink-0" data-name="Avater 2.0">
        <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
          <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Property 1=Only head">
            <div className="absolute inset-[28.76%_23.85%_-28.36%_15.83%]" data-name="Base">
              <Base1 />
            </div>
            <div className="absolute inset-[0.7%_4.61%_-0.2%_-10.72%]" data-name="🦱Hair">
              <div className="absolute inset-[3.03%_9.08%_41.91%_18.27%]" data-name="Hair/1">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 770 547">
                  <g id="Hair/1">
                    <path d={svgPaths.p32cf9680} fill="var(--fill-0, black)" id="Path_3963" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="absolute inset-[67.23%_32.56%_17.03%_41.88%]" data-name="👄 Lips">
              <div className="absolute inset-[32.5%_18.33%_23.18%_36.69%]" data-name="Lips/1">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115 70">
                  <g id="Lips/1">
                    <path d={svgPaths.p28e320c0} fill="var(--fill-0, black)" id="Path_4087" />
                    <path d={svgPaths.p392a1cf0} fill="var(--fill-0, black)" id="Path_4088" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="absolute inset-[60.62%_26.95%_8.12%_28.06%]" data-name="⚡Beard" />
            <div className="absolute inset-[46.89%_35.47%_30.36%_52.91%]" data-name="👃Nose">
              <Nose1 />
            </div>
            <div className="absolute inset-[48.1%_25.15%_35.37%_23.75%]" data-name="👀 Eyes">
              <Eyes1 />
            </div>
            <div className="absolute inset-[45.79%_27.25%_47.09%_40.18%]" data-name="👁️ Brows">
              <Brows1 />
            </div>
            <div className="absolute h-[449px] left-[21.04%] right-[15.13%] top-[calc(50%-135.5px)] translate-y-[-50%]" data-name="🎩 Accessories" />
          </div>
        </div>
      </div>
      <Frame200 />
    </div>
  );
}

function Frame202() {
  return (
    <div className="bg-[#171b21] relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-[min-content]">
            <p className="leading-[24px]">Installed in 2 minutes. Already chatting with customers.</p>
          </div>
          <Frame201 />
        </div>
      </div>
    </div>
  );
}

function Base2() {
  return (
    <div className="absolute inset-[0.4%_2.6%_41.31%_0.14%]" data-name="Base">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Base">
          <g id="Skin">
            <path d={svgPaths.p295bda80} fill="var(--fill-0, white)" id="Path_3824" />
          </g>
          <path d={svgPaths.p32b68700} fill="var(--fill-0, black)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Lips1() {
  return (
    <div className="absolute inset-[32.5%_18.33%_23.18%_36.69%]" data-name="Lips/1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
        <g id="Lips/1">
          <path d={svgPaths.p1e6d7800} fill="var(--fill-0, black)" id="Path_4087" />
          <path d={svgPaths.p145a9680} fill="var(--fill-0, black)" id="Path_4088" />
        </g>
      </svg>
    </div>
  );
}

function Nose2() {
  return (
    <div className="absolute inset-[76.3%_25.26%_14.26%_26.32%]" data-name="Nose/3">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
          <g id="Nose/3">
            <path d={svgPaths.p3ac23d00} fill="var(--fill-0, black)" id="Path_4052" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Brows2() {
  return (
    <div className="absolute inset-[19.21%_7.67%_14.31%_7.64%]" data-name="Brows/12">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.02%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 2">
          <g id="Brows/12">
            <path d={svgPaths.p159c5400} fill="var(--fill-0, black)" id="Path_4009" />
            <path d={svgPaths.p3e5a93b0} fill="var(--fill-0, black)" id="Path_4010" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame203() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] text-white tracking-[-0.08px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">Ruben S.</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[12px]">
        <p className="leading-[16px] text-nowrap whitespace-pre">Customer Success Lead</p>
      </div>
    </div>
  );
}

function Frame204() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="bg-[#c0d5ff] box-border content-stretch flex gap-[8px] items-center justify-center p-[4px] relative rounded-[1000px] shrink-0" data-name="Avater 2.0">
        <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
          <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Property 1=Only head">
            <div className="absolute inset-[28.76%_23.85%_-28.36%_15.83%]" data-name="Base">
              <Base2 />
            </div>
            <div className="absolute inset-[0.7%_4.61%_-0.2%_-10.72%]" data-name="🦱Hair">
              <div className="absolute inset-[3.03%_9.08%_41.91%_18.27%]" data-name="Hair/1">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 770 547">
                  <g id="Hair/1">
                    <path d={svgPaths.p32cf9680} fill="var(--fill-0, black)" id="Path_3963" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="absolute inset-[67.23%_32.56%_17.03%_41.88%]" data-name="👄 Lips">
              <Lips1 />
            </div>
            <div className="absolute inset-[60.62%_26.95%_8.12%_28.06%]" data-name="⚡Beard" />
            <div className="absolute inset-[46.89%_35.47%_30.36%_52.91%]" data-name="👃Nose">
              <Nose2 />
            </div>
            <div className="absolute inset-[48.1%_25.15%_35.37%_23.75%]" data-name="👀 Eyes">
              <div className="absolute inset-[31.85%_11.68%_27.94%_41.9%]" data-name="Eyes/15">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 67">
                  <g id="Eyes/15">
                    <path d={svgPaths.pbf57ef0} fill="var(--fill-0, black)" id="Path_3964" />
                    <path d={svgPaths.p251ad650} fill="var(--fill-0, black)" id="Path_3965" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="absolute inset-[45.79%_27.25%_47.09%_40.18%]" data-name="👁️ Brows">
              <Brows2 />
            </div>
            <div className="absolute h-[449px] left-[21.04%] right-[15.13%] top-[calc(50%-135.5px)] translate-y-[-50%]" data-name="🎩 Accessories" />
          </div>
        </div>
      </div>
      <Frame203 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="bg-[#171b21] relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-[min-content]">
            <p className="leading-[24px]">Our team collaboration improved overnight. Internal notes, assignments, live indicators no more ‘who’s replying?’ panic.</p>
          </div>
          <Frame204 />
        </div>
      </div>
    </div>
  );
}

function Base3() {
  return (
    <div className="absolute inset-[0.4%_2.6%_41.31%_0.14%]" data-name="Base">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Base">
          <g id="Skin">
            <path d={svgPaths.p295bda80} fill="var(--fill-0, white)" id="Path_3824" />
          </g>
          <path d={svgPaths.p32b68700} fill="var(--fill-0, black)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Hair1() {
  return (
    <div className="absolute inset-[15.74%_11.61%_7.1%_9.07%]" data-name="Hair/2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 25">
        <g id="Hair/2">
          <path clipRule="evenodd" d={svgPaths.p25d04780} fill="var(--fill-0, black)" fillRule="evenodd" id="Path_3962" />
        </g>
      </svg>
    </div>
  );
}

function Lips2() {
  return (
    <div className="absolute inset-[32.5%_18.33%_23.18%_36.69%]" data-name="Lips/1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
        <g id="Lips/1">
          <path d={svgPaths.p1e6d7800} fill="var(--fill-0, black)" id="Path_4087" />
          <path d={svgPaths.p145a9680} fill="var(--fill-0, black)" id="Path_4088" />
        </g>
      </svg>
    </div>
  );
}

function Nose3() {
  return (
    <div className="absolute inset-[76.3%_25.26%_14.26%_26.32%]" data-name="Nose/3">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
          <g id="Nose/3">
            <path d={svgPaths.p3ac23d00} fill="var(--fill-0, black)" id="Path_4052" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Eyes2() {
  return (
    <div className="absolute inset-[31.85%_11.68%_27.94%_41.9%]" data-name="Eyes/15">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 3">
        <g id="Eyes/15">
          <path d={svgPaths.p1d682700} fill="var(--fill-0, black)" id="Path_3964" />
          <path d={svgPaths.p1fd58500} fill="var(--fill-0, black)" id="Path_3965" />
        </g>
      </svg>
    </div>
  );
}

function Brows3() {
  return (
    <div className="absolute inset-[19.21%_7.67%_14.31%_7.64%]" data-name="Brows/12">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.02%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 2">
          <g id="Brows/12">
            <path d={svgPaths.p159c5400} fill="var(--fill-0, black)" id="Path_4009" />
            <path d={svgPaths.p3e5a93b0} fill="var(--fill-0, black)" id="Path_4010" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function BaseAvater() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Base avater">
      <div className="absolute inset-[19.38%_20.72%_-18.98%_18.96%]" data-name="Base">
        <Base3 />
      </div>
      <div className="absolute inset-[-8.67%_1.49%_9.17%_-7.6%]" data-name="🦱Hair">
        <Hair1 />
      </div>
      <div className="absolute inset-[57.86%_29.44%_26.41%_45.01%]" data-name="👄 Lips">
        <Lips2 />
      </div>
      <div className="absolute inset-[60.62%_26.95%_8.12%_28.06%]" data-name="⚡Beard" />
      <div className="absolute inset-[37.52%_32.35%_39.74%_56.03%]" data-name="👃Nose">
        <Nose3 />
      </div>
      <div className="absolute inset-[38.72%_22.02%_44.75%_26.87%]" data-name="👀 Eyes">
        <Eyes2 />
      </div>
      <div className="absolute inset-[36.42%_24.13%_56.47%_43.3%]" data-name="👁️ Brows">
        <Brows3 />
      </div>
      <div className="absolute h-[449px] left-[21.04%] right-[15.13%] top-[calc(50%-135.5px)] translate-y-[-50%]" data-name="🎩 Accessories" />
    </div>
  );
}

function IconSet() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
      <BaseAvater />
    </div>
  );
}

function Avater() {
  return (
    <div className="bg-[#e0faec] box-border content-stretch flex gap-[8px] items-center justify-center p-[4px] relative rounded-[1000px] shrink-0" data-name="Avater 2.0">
      <IconSet />
    </div>
  );
}

function Frame205() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] text-white tracking-[-0.08px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">Hannah P.</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[12px]">
        <p className="leading-[16px] text-nowrap whitespace-pre">Online Course Creator</p>
      </div>
    </div>
  );
}

function Frame206() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Avater />
      <Frame205 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="bg-[#171b21] relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full card-gradient-hover">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-[min-content]">
            <p className="leading-[24px]">We installed the widget and inbox traffic doubled. People love real-time chat. Linquo made it easy to capture every lead.</p>
          </div>
          <Frame206 />
        </div>
      </div>
    </div>
  );
}

function Base4() {
  return (
    <div className="absolute inset-[0.4%_2.6%_41.31%_0.14%]" data-name="Base">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Base">
          <g id="Skin">
            <path d={svgPaths.p295bda80} fill="var(--fill-0, white)" id="Path_3824" />
          </g>
          <path d={svgPaths.p32b68700} fill="var(--fill-0, black)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Brows4() {
  return (
    <div className="absolute inset-[19.21%_7.67%_14.31%_7.64%]" data-name="Brows/12">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.02%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 2">
          <g id="Brows/12">
            <path d={svgPaths.p11218a80} fill="var(--fill-0, black)" id="Path_4009" />
            <path d={svgPaths.p247d8c80} fill="var(--fill-0, black)" id="Path_4010" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame207() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] text-white tracking-[-0.08px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">Ravi T.</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[12px]">
        <p className="leading-[16px] text-nowrap whitespace-pre">Startup CTO</p>
      </div>
    </div>
  );
}

function Frame208() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="bg-[#ffc0c5] box-border content-stretch flex gap-[8px] items-center justify-center p-[4px] relative rounded-[1000px] shrink-0" data-name="Avater 2.0">
        <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
          <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Property 1=Only head">
            <div className="absolute inset-[28.76%_23.85%_-28.36%_15.83%]" data-name="Base">
              <Base4 />
            </div>
            <div className="absolute inset-[0.7%_4.61%_-0.2%_-10.72%]" data-name="🦱Hair">
              <div className="absolute inset-[3.03%_9.08%_41.91%_18.27%]" data-name="Hair/1">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 770 547">
                  <g id="Hair/1">
                    <path d={svgPaths.p32cf9680} fill="var(--fill-0, black)" id="Path_3963" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="absolute inset-[67.23%_32.56%_17.03%_41.88%]" data-name="👄 Lips">
              <div className="absolute inset-[32.5%_18.33%_23.18%_36.69%]" data-name="Lips/1">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115 70">
                  <g id="Lips/1">
                    <path d={svgPaths.p28e320c0} fill="var(--fill-0, black)" id="Path_4087" />
                    <path d={svgPaths.p392a1cf0} fill="var(--fill-0, black)" id="Path_4088" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="absolute inset-[60.62%_26.95%_8.12%_28.06%]" data-name="⚡Beard" />
            <div className="absolute inset-[46.89%_35.47%_30.36%_52.91%]" data-name="👃Nose">
              <div className="absolute inset-[76.3%_25.26%_14.26%_26.32%]" data-name="Nose/3">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 22">
                  <g id="Nose/3">
                    <path d={svgPaths.p6fc000} fill="var(--fill-0, black)" id="Path_4052" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="absolute inset-[48.1%_25.15%_35.37%_23.75%]" data-name="👀 Eyes">
              <div className="absolute inset-[31.85%_11.68%_27.94%_41.9%]" data-name="Eyes/15">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 67">
                  <g id="Eyes/15">
                    <path d={svgPaths.pbf57ef0} fill="var(--fill-0, black)" id="Path_3964" />
                    <path d={svgPaths.p251ad650} fill="var(--fill-0, black)" id="Path_3965" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="absolute inset-[45.79%_27.25%_47.09%_40.18%]" data-name="👁️ Brows">
              <Brows4 />
            </div>
            <div className="absolute h-[449px] left-[21.04%] right-[15.13%] top-[calc(50%-135.5px)] translate-y-[-50%]" data-name="🎩 Accessories" />
          </div>
        </div>
      </div>
      <Frame207 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="bg-[#171b21] relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full card-gradient-hover">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-[min-content]">
            <p className="leading-[24px]">Finally, live chat without paying per seat. Bless.</p>
          </div>
          <Frame208 />
        </div>
      </div>
    </div>
  );
}

function Base5() {
  return (
    <div className="absolute inset-[0.4%_2.6%_41.31%_0.14%]" data-name="Base">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Base">
          <g id="Skin">
            <path d={svgPaths.p295bda80} fill="var(--fill-0, white)" id="Path_3824" />
          </g>
          <path d={svgPaths.p32b68700} fill="var(--fill-0, black)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Hair2() {
  return (
    <div className="absolute inset-[3.03%_9.08%_41.91%_18.27%]" data-name="Hair/1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 18">
        <g id="Hair/1">
          <path d={svgPaths.p17632b80} fill="var(--fill-0, black)" id="Path_3963" />
        </g>
      </svg>
    </div>
  );
}

function Nose4() {
  return (
    <div className="absolute inset-[76.3%_25.26%_14.26%_26.32%]" data-name="Nose/3">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
          <g id="Nose/3">
            <path d={svgPaths.p3ac23d00} fill="var(--fill-0, black)" id="Path_4052" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Brows5() {
  return (
    <div className="absolute inset-[19.21%_7.67%_14.31%_7.64%]" data-name="Brows/12">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.02%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 2">
          <g id="Brows/12">
            <path d={svgPaths.p11218a80} fill="var(--fill-0, black)" id="Path_4009" />
            <path d={svgPaths.p247d8c80} fill="var(--fill-0, black)" id="Path_4010" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame209() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] text-white tracking-[-0.08px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">Darren T.</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[12px]">
        <p className="leading-[16px] text-nowrap whitespace-pre">Agency Owner</p>
      </div>
    </div>
  );
}

function Frame210() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="bg-[#c0eaff] box-border content-stretch flex gap-[8px] items-center justify-center p-[4px] relative rounded-[1000px] shrink-0" data-name="Avater 2.0">
        <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
          <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Property 1=Only head">
            <div className="absolute inset-[28.76%_23.85%_-28.36%_15.83%]" data-name="Base">
              <Base5 />
            </div>
            <div className="absolute inset-[0.7%_4.61%_-0.2%_-10.72%]" data-name="🦱Hair">
              <Hair2 />
            </div>
            <div className="absolute inset-[67.23%_32.56%_17.03%_41.88%]" data-name="👄 Lips">
              <div className="absolute inset-[32.5%_18.33%_23.18%_36.69%]" data-name="Lips/1">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115 70">
                  <g id="Lips/1">
                    <path d={svgPaths.p28e320c0} fill="var(--fill-0, black)" id="Path_4087" />
                    <path d={svgPaths.p392a1cf0} fill="var(--fill-0, black)" id="Path_4088" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="absolute inset-[60.62%_26.95%_8.12%_28.06%]" data-name="⚡Beard" />
            <div className="absolute inset-[46.89%_35.47%_30.36%_52.91%]" data-name="👃Nose">
              <Nose4 />
            </div>
            <div className="absolute inset-[48.1%_25.15%_35.37%_23.75%]" data-name="👀 Eyes">
              <div className="absolute inset-[31.85%_11.68%_27.94%_41.9%]" data-name="Eyes/15">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 67">
                  <g id="Eyes/15">
                    <path d={svgPaths.pbf57ef0} fill="var(--fill-0, black)" id="Path_3964" />
                    <path d={svgPaths.p251ad650} fill="var(--fill-0, black)" id="Path_3965" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="absolute inset-[45.79%_27.25%_47.09%_40.18%]" data-name="👁️ Brows">
              <Brows5 />
            </div>
            <div className="absolute h-[449px] left-[21.04%] right-[15.13%] top-[calc(50%-135.5px)] translate-y-[-50%]" data-name="🎩 Accessories" />
          </div>
        </div>
      </div>
      <Frame209 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="bg-[#171b21] relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full card-gradient-hover">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-[min-content]">
            <p className="leading-[24px]">We closed 3 clients in the first week just by responding faster. The shared inbox + AI replies = magic. Dropped email support completely.</p>
          </div>
          <Frame210 />
        </div>
      </div>
    </div>
  );
}

function Base6() {
  return (
    <div className="absolute inset-[0.4%_2.6%_41.31%_0.14%]" data-name="Base">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Base">
          <g id="Skin">
            <path d={svgPaths.p295bda80} fill="var(--fill-0, white)" id="Path_3824" />
          </g>
          <path d={svgPaths.p32b68700} fill="var(--fill-0, black)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Nose5() {
  return (
    <div className="absolute inset-[76.3%_25.26%_14.26%_26.32%]" data-name="Nose/3">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
          <g id="Nose/3">
            <path d={svgPaths.p3ac23d00} fill="var(--fill-0, black)" id="Path_4052" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Eyes3() {
  return (
    <div className="absolute inset-[31.85%_11.68%_27.94%_41.9%]" data-name="Eyes/15">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 3">
        <g id="Eyes/15">
          <path d={svgPaths.p1d682700} fill="var(--fill-0, black)" id="Path_3964" />
          <path d={svgPaths.p1fd58500} fill="var(--fill-0, black)" id="Path_3965" />
        </g>
      </svg>
    </div>
  );
}

function Brows6() {
  return (
    <div className="absolute inset-[19.21%_7.67%_14.31%_7.64%]" data-name="Brows/12">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.02%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 2">
          <g id="Brows/12">
            <path d={svgPaths.p11218a80} fill="var(--fill-0, black)" id="Path_4009" />
            <path d={svgPaths.p247d8c80} fill="var(--fill-0, black)" id="Path_4010" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame211() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] text-white tracking-[-0.08px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">Maya R.</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[12px]">
        <p className="leading-[16px] text-nowrap whitespace-pre">SaaS Founder</p>
      </div>
    </div>
  );
}

function Frame212() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="bg-[#cac0ff] box-border content-stretch flex gap-[8px] items-center justify-center p-[4px] relative rounded-[1000px] shrink-0" data-name="Avater 2.0">
        <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
          <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Property 1=Only head">
            <div className="absolute inset-[28.76%_23.85%_-28.36%_15.83%]" data-name="Base">
              <Base6 />
            </div>
            <div className="absolute inset-[0.7%_4.61%_-0.2%_-10.72%]" data-name="🦱Hair">
              <div className="absolute inset-[3.03%_9.08%_41.91%_18.27%]" data-name="Hair/1">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 770 547">
                  <g id="Hair/1">
                    <path d={svgPaths.p32cf9680} fill="var(--fill-0, black)" id="Path_3963" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="absolute inset-[67.23%_32.56%_17.03%_41.88%]" data-name="👄 Lips">
              <div className="absolute inset-[32.5%_18.33%_23.18%_36.69%]" data-name="Lips/1">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115 70">
                  <g id="Lips/1">
                    <path d={svgPaths.p28e320c0} fill="var(--fill-0, black)" id="Path_4087" />
                    <path d={svgPaths.p392a1cf0} fill="var(--fill-0, black)" id="Path_4088" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="absolute inset-[60.62%_26.95%_8.12%_28.06%]" data-name="⚡Beard" />
            <div className="absolute inset-[46.89%_35.47%_30.36%_52.91%]" data-name="👃Nose">
              <Nose5 />
            </div>
            <div className="absolute inset-[48.1%_25.15%_35.37%_23.75%]" data-name="👀 Eyes">
              <Eyes3 />
            </div>
            <div className="absolute inset-[45.79%_27.25%_47.09%_40.18%]" data-name="👁️ Brows">
              <Brows6 />
            </div>
            <div className="absolute h-[449px] left-[21.04%] right-[15.13%] top-[calc(50%-135.5px)] translate-y-[-50%]" data-name="🎩 Accessories" />
          </div>
        </div>
      </div>
      <Frame211 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="bg-[#171b21] relative rounded-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#cacfd8] text-[0px] tracking-[-0.176px] w-[min-content]">
            <p className="leading-[24px] text-[16px]">
              <span>{`Linquo replaced support app for us and honestly, onboarding was smoother. `}</span>
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic text-white tracking-[-0.176px]">Switched in 10 minutes, never looked back. Fast, clean UI and the automations are gold</span>
            </p>
          </div>
          <Frame212 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#3c82f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame139() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] items-start left-1/2 px-[16px] py-0 top-[15158px] translate-x-[-50%] w-[390px]">
      <Frame97 />
      <Frame202 />
      <Frame105 />
      <Frame103 />
      <Frame108 />
      <Frame107 />
      <Frame106 />
    </div>
  );
}

function Frame213() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
          <div className="absolute inset-[3.12%_12.5%_9.38%_12.5%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
                <path d={svgPaths.p8279900} fill="var(--fill-0, #CACFD8)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] text-nowrap tracking-[-0.0112px]">
        <p className="leading-[20px] whitespace-pre">Mobile Support</p>
      </div>
    </div>
  );
}

function Frame214() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[48px] text-white w-full">
        <p className="leading-[58px]">Ready to get started?</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[16px] tracking-[-0.176px] w-full">
        <p className="leading-[24px]">Linquo mobile apps let you respond instantly, resolve issues faster, and stay productive wherever you are.</p>
      </div>
    </div>
  );
}

function Frame215() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <Frame213 />
      <Frame214 />
      <a
        href="https://admin.linquo.app/signup"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#375dfb] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shadow-[0px_0px_0px_1px_#224cfa,0px_1px_3px_0px_rgba(37,62,167,0.2)] shrink-0 cursor-pointer transition-all duration-200 hover:bg-[#4a6dfc] hover:scale-105"
        data-name="Button"
      >
        <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0" data-name="💠 Text">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.0112px] w-full">
            <p className="leading-[20px]">Get Started</p>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-2.4px_0px_0px_inset_#224cfa]" />
      </a>
    </div>
  );
}

function Frame109() {
  return (
    <div
      className="absolute box-border content-stretch flex gap-[48px] items-center justify-center left-0 overflow-clip px-[20px] py-[80px] top-[16707px] w-[390px] animate-gradient-shift"
      style={{
        background:
          "linear-gradient(135deg, #2f4484, #62488d, #2f4484, #62488d)",
        backgroundSize: "400% 400%",
      }}
    >
      <Frame215 />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute left-1/2 size-[32.415px] top-0 translate-x-[-50%]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g clipPath="url(#clip0_63642_7716)" id="Logo">
          <path clipRule="evenodd" d={svgPaths.p25738700} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract" />
          <rect fill="var(--fill-0, white)" height="5.75106" id="Rectangle 42" rx="0.784235" transform="matrix(-0.999126 0.0417903 0.0417903 0.999126 17.3809 9.35156)" width="1.56847" />
          <rect fill="var(--fill-0, white)" height="5.75106" id="Rectangle 43" rx="0.784235" transform="matrix(-0.999126 0.0417903 0.0417903 0.999126 9.52734 9.73242)" width="1.56847" />
        </g>
        <defs>
          <clipPath id="clip0_63642_7716">
            <rect fill="white" height="32.415" width="32.415" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32.415px]" data-name="Logo">
      <Logo />
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#cacfd8] text-[12px] w-[min-content]">
        <p className="leading-[16px]">Connect the community</p>
      </div>
      <a href="/community" className="bg-[#232830] box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shadow-[0px_0px_0px_1px_#363b43,0px_1px_3px_0px_rgba(143,143,143,0.2)] shrink-0 hover:bg-[#2a2f37] transition-colors cursor-pointer" data-name="Button">
        <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0" data-name="💠 Text">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-full">
            <p className="leading-[16px]">Join Community</p>
          </div>
        </div>
      </a>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-full">
      <Logo1 />
      <Frame115 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] tracking-[-0.08px] w-full">
      <a href="/use-cases/nextjs" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors">
        <p className="leading-[20px]">Next.js Projects</p>
      </a>
      <a href="/use-cases/ecommerce" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors">
        <p className="leading-[20px]">Ecommerce Projects</p>
      </a>
      <a href="/use-cases/shopify" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors">
        <p className="leading-[20px]">Shopify Projects</p>
      </a>
      <a href="/products/integrations" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors">
        <p className="leading-[20px]">Integrations</p>
      </a>
      <a href="/comparison" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors">
        <p className="leading-[20px]">Comparison</p>
      </a>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[12px] w-full">
        <p className="leading-[16px]">Use Cases</p>
      </div>
      <Frame110 />
    </div>
  );
}

function Frame216() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] tracking-[-0.08px] w-full">
      <a href="/products/live-chat" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors">
        <p className="leading-[20px]">Live Chat</p>
      </a>
      <a href="/products/customization" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors">
        <p className="leading-[20px]">Full Customization</p>
      </a>
      <a href="/products/mobile-apps" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors">
        <p className="leading-[20px]">Mobile App</p>
      </a>
      <a href="/products/multi-language" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors">
        <p className="leading-[20px]">Multi Language</p>
      </a>
      <a href="/products/ai-chatbot" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors">
        <p className="leading-[20px]">AI Chat Bot</p>
      </a>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[12px] w-full">
        <p className="leading-[16px]">Support</p>
      </div>
      <Frame216 />
    </div>
  );
}

function Frame217() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] tracking-[-0.08px] w-full">
      <a href="/refund-policy" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors">
        <p className="leading-[20px]">Refund Policy</p>
      </a>
      <a href="/terms-of-service" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors">
        <p className="leading-[20px]">{`Terms & Conditions`}</p>
      </a>
      <a href="/privacy-policy" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors">
        <p className="leading-[20px]">Privacy Policy</p>
      </a>
      <a href="/child-safety" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors">
        <p className="leading-[20px]">Child Safety Standards</p>
      </a>
      <a href="/cookies-policy" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors">
        <p className="leading-[20px]">Cookie Policy</p>
      </a>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[12px] w-full">
        <p className="leading-[16px]">Resources</p>
      </div>
      <Frame217 />
    </div>
  );
}

function Frame218() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] tracking-[-0.08px] w-full">
      <a href="https://linquo.webflow.io/blog" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors">
        <p className="leading-[20px]">Blogs</p>
      </a>
      <a href="/about#career" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors">
        <p className="leading-[20px]">Career</p>
      </a>
      <a href="https://linquo.canny.io/changelog" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors">
        <p className="leading-[20px]">Change log</p>
      </a>
      <a href="/contact-us#partner" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors">
        <p className="leading-[20px]">Become a partner</p>
      </a>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[12px] w-full">
        <p className="leading-[16px]">Company</p>
      </div>
      <Frame218 />
    </div>
  );
}

function Frame219() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[67px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame116 />
      <Frame111 />
      <Frame112 />
      <Frame113 />
      <Frame114 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] tracking-[-0.08px] w-full">
        <p className="leading-[20px]">© 2025 Linquo Chat, LLC</p>
      </div>
    </div>
  );
}

function Frame220() {
  return (
    <div className="absolute bg-[#171b21] box-border content-stretch flex gap-[8px] items-center left-0 overflow-clip px-[20px] py-[66px] top-[17248px] w-[389px]">
      <Frame219 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="absolute left-1/2 size-[20.97px] top-0 translate-x-[-50%]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g clipPath="url(#clip0_63642_7711)" id="Logo">
          <path clipRule="evenodd" d={svgPaths.p32110d80} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract" />
          <rect fill="var(--fill-0, white)" height="3.72055" id="Rectangle 42" rx="0.507348" transform="matrix(-0.999126 0.0417903 0.0417903 0.999126 11.2441 6.0498)" width="1.0147" />
          <rect fill="var(--fill-0, white)" height="3.72055" id="Rectangle 43" rx="0.507348" transform="matrix(-0.999126 0.0417903 0.0417903 0.999126 6.16406 6.29565)" width="1.0147" />
        </g>
        <defs>
          <clipPath id="clip0_63642_7711">
            <rect fill="white" height="20.9704" width="20.9704" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo3() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 overflow-clip relative size-[20.97px]" data-name="Logo">
      <Logo2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Logo3 />
      <div className="[grid-area:1_/_1] h-[16.594px] ml-[24.17px] mt-[1.722px] relative w-[56.211px]" data-name="Linquo">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 17">
            <g id="Linquo">
              <path d={svgPaths.p2570d580} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1452d680} fill="var(--fill-0, white)" />
              <path d={svgPaths.p37864380} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3061c080} fill="var(--fill-0, white)" />
              <path d={svgPaths.p39135880} fill="var(--fill-0, white)" />
              <path d={svgPaths.p39160600} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <Group4 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute backdrop-blur-[10.2px] backdrop-filter bg-[rgba(14,17,22,0.5)] left-1/2 top-0 translate-x-[-50%] w-[390px]">
      <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[24px] py-[16px] relative rounded-[inherit] w-[390px]">
        <Frame29 />
        <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="IconSet">
          <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
            <div className="absolute inset-[21.88%_12.5%]" data-name="Vector">
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(82, 88, 102, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 14">
                  <path d={svgPaths.p186000} fill="var(--fill-0, white)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(225,228,234,0.05)] border-solid inset-0 pointer-events-none shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.1)]" />
    </div>
  );
}

export default function IPhone() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-[#0e1116] relative w-[390px] min-h-full" data-name="iPhone 13 & 14 - 1">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[202.8px] top-[3108.99px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "282.453125", "--transform-inner-height": "82.65625" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[82.665px] relative w-[282.453px]">
            <div className="absolute bottom-[-0.6%] left-0 right-[-0.01%] top-[-0.6%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 283 84">
                <path d={svgPaths.p19b98617} id="Vector 15" stroke="url(#paint0_linear_63642_8087)" />
                <circle r="2" fill="white" opacity="0.8">
                  <animateMotion dur="4s" repeatCount="indefinite">
                    <mpath href="#Vector 15" />
                  </animateMotion>
                </circle>
                <circle r="2" fill="white" opacity="0.6">
                  <animateMotion dur="4s" repeatCount="indefinite" begin="0.8s">
                    <mpath href="#Vector 15" />
                  </animateMotion>
                </circle>
                <circle r="2" fill="white" opacity="0.4">
                  <animateMotion dur="4s" repeatCount="indefinite" begin="1.6s">
                    <mpath href="#Vector 15" />
                  </animateMotion>
                </circle>
                <circle r="2" fill="white" opacity="0.3">
                  <animateMotion dur="4s" repeatCount="indefinite" begin="2.4s">
                    <mpath href="#Vector 15" />
                  </animateMotion>
                </circle>
                <circle r="2" fill="white" opacity="0.2">
                  <animateMotion dur="4s" repeatCount="indefinite" begin="3.2s">
                    <mpath href="#Vector 15" />
                  </animateMotion>
                </circle>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_63642_8087" x1="0" x2="282.453" y1="0.5" y2="0.5">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[104.99px] top-[3108.99px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "282.453125", "--transform-inner-height": "82.65625" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] scale-y-[-100%]">
          <div className="h-[82.665px] relative w-[282.453px]">
            <div className="absolute bottom-[-0.6%] left-0 right-[-0.01%] top-[-0.6%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 283 84">
                <path d={svgPaths.p19b98617} id="Vector 15" stroke="url(#paint0_linear_63642_8087)" />
                <circle r="2" fill="white" opacity="0.8">
                  <animateMotion dur="4s" repeatCount="indefinite" begin="0.6s">
                    <mpath href="#Vector 15" />
                  </animateMotion>
                </circle>
                <circle r="2" fill="white" opacity="0.6">
                  <animateMotion dur="4s" repeatCount="indefinite" begin="1.4s">
                    <mpath href="#Vector 15" />
                  </animateMotion>
                </circle>
                <circle r="2" fill="white" opacity="0.4">
                  <animateMotion dur="4s" repeatCount="indefinite" begin="2.2s">
                    <mpath href="#Vector 15" />
                  </animateMotion>
                </circle>
                <circle r="2" fill="white" opacity="0.3">
                  <animateMotion dur="4s" repeatCount="indefinite" begin="3s">
                    <mpath href="#Vector 15" />
                  </animateMotion>
                </circle>
                <circle r="2" fill="white" opacity="0.2">
                  <animateMotion dur="4s" repeatCount="indefinite" begin="3.8s">
                    <mpath href="#Vector 15" />
                  </animateMotion>
                </circle>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_63642_8087" x1="0" x2="282.453" y1="0.5" y2="0.5">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[194.77px] top-[3108.99px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "225.46875", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[225.47px]">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 1">
                <path d="M0 0.5H225.47" id="Vector 17" stroke="url(#paint0_linear_63642_8110)" />
                <circle r="2" fill="white" opacity="0.8">
                  <animateMotion dur="3s" repeatCount="indefinite">
                    <mpath href="#Vector 17" />
                  </animateMotion>
                </circle>
                <circle r="2" fill="white" opacity="0.6">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="0.6s">
                    <mpath href="#Vector 17" />
                  </animateMotion>
                </circle>
                <circle r="2" fill="white" opacity="0.4">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="1.2s">
                    <mpath href="#Vector 17" />
                  </animateMotion>
                </circle>
                <circle r="2" fill="white" opacity="0.3">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="1.8s">
                    <mpath href="#Vector 17" />
                  </animateMotion>
                </circle>
                <circle r="2" fill="white" opacity="0.2">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="2.4s">
                    <mpath href="#Vector 17" />
                  </animateMotion>
                </circle>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_63642_8110" x1="0" x2="225.47" y1="0.5" y2="0.5">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 size-[676.892px] top-[-465.51px] translate-x-[-50%]">
        <div className="absolute inset-[-147.734%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2677 2677">
            <g filter="url(#filter0_f_63642_8046)" id="Ellipse 4">
              <circle cx="1338.45" cy="1338.45" fill="var(--fill-0, #1F42D4)" r="338.446" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2676.89" id="filter0_f_63642_8046" width="2676.89" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_63642_8046" stdDeviation="500" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame31 onBadgeClick={() => setVideoModalOpen(true)} />
      
      <Dialog
        open={videoModalOpen}
        onOpenChange={setVideoModalOpen}
      >
        <DialogContent className="max-w-[90vw] w-[min(900px,90vw)] p-0 bg-[#0e1116] border-[#375dfb] z-[9999]">
          <DialogTitle className="sr-only">
            Linquo Product Demo Video
          </DialogTitle>
          <DialogDescription className="sr-only">
            Watch our product demonstration video to learn more
            about Linquo's live chat platform for small
            businesses.
          </DialogDescription>
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={
                videoModalOpen
                  ? "https://www.youtube.com/embed/-GKFJulSheI?autoplay=1"
                  : ""
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
      
      <div className="absolute h-[369.407px] left-[36px] top-[623.87px] w-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 370">
            <path d="M0.5 0V369.407" id="Vector 11" stroke="url(#paint0_linear_63642_8094)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_63642_8094" x1="0.99989" x2="0.99989" y1="0" y2="369.407">
                <stop stopColor="#3C82F6" />
                <stop offset="0.536732" stopColor="#955AE5" />
                <stop offset="1" stopColor="#EF4544" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[1253.39px] left-[36px] top-[1237.26px] w-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1254">
            <path d="M0.5 0V1253.39" id="Vector 12" stroke="url(#paint0_linear_63642_8085)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_63642_8085" x1="0.99989" x2="0.99989" y1="0" y2="1253.39">
                <stop stopColor="#3C82F6" />
                <stop offset="0.536732" stopColor="#955AE5" />
                <stop offset="1" stopColor="#EF4544" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[283.059px] left-[36px] top-[2745.94px] w-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 284">
            <path d="M0.5 0V283.059" id="Vector 13" stroke="url(#paint0_linear_63642_8083)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_63642_8083" x1="0.99989" x2="0.99989" y1="0" y2="283.059">
                <stop stopColor="#3C82F6" />
                <stop offset="0.536732" stopColor="#955AE5" />
                <stop offset="1" stopColor="#EF4544" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[2400.38px] left-[36px] top-[3745px] w-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2401">
            <path d="M0.5 0V2400.38" id="Vector 18" stroke="url(#paint0_linear_63642_7991)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_63642_7991" x1="0.99989" x2="0.99989" y1="0" y2="2400.38">
                <stop stopColor="#3C82F6" />
                <stop offset="0.536732" stopColor="#955AE5" />
                <stop offset="1" stopColor="#EF4544" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[1155.42px] left-[36px] top-[6330.98px] w-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1156">
            <path d="M0.5 0V1155.42" id="Vector 19" stroke="url(#paint0_linear_63642_8068)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_63642_8068" x1="0.99989" x2="0.99989" y1="0" y2="1155.42">
                <stop stopColor="#3C82F6" />
                <stop offset="0.536732" stopColor="#955AE5" />
                <stop offset="1" stopColor="#EF4544" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Group5 onVideoClick={() => setVideoModalOpen(true)} />
      <Frame104 />
      <Frame120 />
      <Frame51 />
      <Frame5 />
      <Frame45 />
      <Frame46 />
      <Frame47 />
      <Frame48 />
      <Frame50 />
      <Frame49 />
      <Frame52 />
      <Frame28 />
      <Frame129 />
      <Frame136 />
      <Frame65 />
      <Frame141 />
      <Frame134 />
      <Frame135 />
      <Frame137 />
      <Frame145 />
      <Frame138 />
      <Frame70 />
      <Frame159 />
      <Frame72 />
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 not-italic text-[18px] text-center text-white top-[11191px] translate-x-[-50%] translate-y-[-50%] w-[277px]">
        <p className="leading-[24px]">{`Things you'll never have to do...`}</p>
      </div>
      <Frame76 />
      <Frame165 />
      <Frame79 />
      <Frame78 />
      <Frame80 activeTab={activeTab} setActiveTab={setActiveTab} />
      <Frame81 activeTab={activeTab} />
      <Frame175 />
      <Frame178 />
      <Frame95 />
      <Frame198 />
      <Frame139 />
      <Frame109 />
      <Frame220 />
    </div>
  );
}