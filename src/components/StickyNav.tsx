import { useState, useEffect, useRef } from "react";
import svgPaths from "../imports/svg-fhsvdwnz31";
import Frame127 from "../imports/Frame127";
import PlatformMegaMenu from "./PlatformMegaMenu";
import ResourcesMegaMenu from "./ResourcesMegaMenu";

function Logo2() {
  return (
    <div className="absolute left-1/2 size-[20.97px] top-0 translate-x-[-50%]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g clipPath="url(#clip0_1_7493)" id="Logo">
          <path clipRule="evenodd" d={svgPaths.p32110d80} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract" />
          <rect fill="var(--fill-0, white)" height="3.72055" id="Rectangle 42" rx="0.507348" transform="matrix(-0.999126 0.0417903 0.0417903 0.999126 11.2441 6.0498)" width="1.0147" />
          <rect fill="var(--fill-0, white)" height="3.72055" id="Rectangle 43" rx="0.507348" transform="matrix(-0.999126 0.0417903 0.0417903 0.999126 6.16406 6.29565)" width="1.0147" />
        </g>
        <defs>
          <clipPath id="clip0_1_7493">
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

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Logo3 />
      <div className="[grid-area:1_/_1] h-[16.594px] ml-[24.17px] mt-[1.722px] relative w-[56.211px]" data-name="Linquo">
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
  );
}

interface Frame34Props {
  onClick: () => void;
  isOpen: boolean;
}

function Frame34({ onClick, isOpen }: Frame34Props) {
  return (
    <div 
      className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer transition-colors duration-200 hover:text-white"
      onClick={onClick}
    >
      <div className={`flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap tracking-[-0.08px] transition-colors duration-200 ${isOpen ? 'text-white' : 'text-[#cacfd8]'}`}>
        <p className="leading-[20px] whitespace-pre">Products</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[6px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[12px]" data-name="Weight=Regular, State=No interaction state">
          <div 
            className="absolute inset-[34.38%_21.88%] transition-transform duration-200" 
            data-name="Vector"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
              <path clipRule="evenodd" d={svgPaths.p4fb50c0} fill="var(--fill-0, #99A0AE)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Frame35Props {
  onClick: () => void;
  isOpen: boolean;
}

function Frame35({ onClick, isOpen }: Frame35Props) {
  return (
    <div 
      className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer transition-colors duration-200 hover:text-white"
      onClick={onClick}
    >
      <div className={`flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap tracking-[-0.08px] transition-colors duration-200 ${isOpen ? 'text-white' : 'text-[#cacfd8]'}`}>
        <p className="leading-[20px] whitespace-pre">Platforms</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[6px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[12px]" data-name="Weight=Regular, State=No interaction state">
          <div 
            className="absolute inset-[34.38%_21.88%] transition-transform duration-200" 
            data-name="Vector"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
              <path clipRule="evenodd" d={svgPaths.p4fb50c0} fill="var(--fill-0, #99A0AE)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Frame36Props {
  onClick: () => void;
  isOpen: boolean;
}

function Frame36({ onClick, isOpen }: Frame36Props) {
  return (
    <div 
      className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer transition-colors duration-200 hover:text-white"
      onClick={onClick}
    >
      <div className={`flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap tracking-[-0.08px] transition-colors duration-200 ${isOpen ? 'text-white' : 'text-[#cacfd8]'}`}>
        <p className="leading-[20px] whitespace-pre">Resources</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[6px] shrink-0" data-name="IconSet">
        <div className="relative shrink-0 size-[12px]" data-name="Weight=Regular, State=No interaction state">
          <div 
            className="absolute inset-[34.38%_21.88%] transition-transform duration-200" 
            data-name="Vector"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
              <path clipRule="evenodd" d={svgPaths.p4fb50c0} fill="var(--fill-0, #99A0AE)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Frame224Props {
  onProductsClick: () => void;
  isProductsOpen: boolean;
  onPlatformClick: () => void;
  isPlatformOpen: boolean;
  onResourcesClick: () => void;
  isResourcesOpen: boolean;
}

function Frame224({ 
  onProductsClick, 
  isProductsOpen,
  onPlatformClick,
  isPlatformOpen,
  onResourcesClick,
  isResourcesOpen
}: Frame224Props) {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame34 onClick={onProductsClick} isOpen={isProductsOpen} />
      <Frame35 onClick={onPlatformClick} isOpen={isPlatformOpen} />
      <Frame36 onClick={onResourcesClick} isOpen={isResourcesOpen} />
      <a 
        href="/pricing"
        className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] text-center text-nowrap tracking-[-0.08px] cursor-pointer transition-colors duration-200 hover:text-white"
      >
        <p className="leading-[20px] whitespace-pre">Pricing</p>
      </a>
      <a 
        href="/about"
        className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] text-center text-nowrap tracking-[-0.08px] cursor-pointer transition-colors duration-200 hover:text-white"
      >
        <p className="leading-[20px] whitespace-pre">About</p>
      </a>
    </div>
  );
}

interface Frame37Props {
  onProductsClick: () => void;
  isProductsOpen: boolean;
  onPlatformClick: () => void;
  isPlatformOpen: boolean;
  onResourcesClick: () => void;
  isResourcesOpen: boolean;
}

function Frame37({ 
  onProductsClick, 
  isProductsOpen,
  onPlatformClick,
  isPlatformOpen,
  onResourcesClick,
  isResourcesOpen
}: Frame37Props) {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <Group11 />
      <Frame224 
        onProductsClick={onProductsClick} 
        isProductsOpen={isProductsOpen}
        onPlatformClick={onPlatformClick}
        isPlatformOpen={isPlatformOpen}
        onResourcesClick={onResourcesClick}
        isResourcesOpen={isResourcesOpen}
      />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <a 
        href="https://admin.linquo.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0e1425] box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shadow-[0px_0px_0px_1px_#1b2330,0px_1px_3px_0px_rgba(40,40,40,0.2)] shrink-0 cursor-pointer transition-all duration-200 hover:bg-[#151b2a] hover:scale-105" 
        data-name="Button"
      >
        <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0" data-name="💠 Text">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-full">
            <p className="leading-[16px]">Log in</p>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-2.4px_0px_0px_inset_#1b2330]" />
      </a>
      <a 
        href="https://admin.linquo.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#375dfb] box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shadow-[0px_0px_0px_1px_#224cfa,0px_1px_3px_0px_rgba(37,62,167,0.2)] shrink-0 cursor-pointer transition-all duration-200 hover:bg-[#4a6dfc] hover:scale-105" 
        data-name="Button"
      >
        <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0" data-name="💠 Text">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-full">
            <p className="leading-[16px]">Start for Free</p>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-2.4px_0px_0px_inset_#224cfa]" />
      </a>
    </div>
  );
}

interface StickyNavProps {
  scale: number;
}

export default function StickyNav({ scale }: StickyNavProps) {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  
  const productsMegamenuRef = useRef<HTMLDivElement>(null);
  const platformMegamenuRef = useRef<HTMLDivElement>(null);
  const resourcesMegamenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
    setIsPlatformOpen(false);
    setIsResourcesOpen(false);
  };

  const togglePlatform = () => {
    setIsPlatformOpen(!isPlatformOpen);
    setIsProductsOpen(false);
    setIsResourcesOpen(false);
  };

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
    setIsProductsOpen(false);
    setIsPlatformOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isOutsideProducts = !productsMegamenuRef.current?.contains(target);
      const isOutsidePlatform = !platformMegamenuRef.current?.contains(target);
      const isOutsideResources = !resourcesMegamenuRef.current?.contains(target);
      const isOutsideNav = !navRef.current?.contains(target);

      if (isOutsideProducts && isOutsidePlatform && isOutsideResources && isOutsideNav) {
        setIsProductsOpen(false);
        setIsPlatformOpen(false);
        setIsResourcesOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsProductsOpen(false);
        setIsPlatformOpen(false);
        setIsResourcesOpen(false);
      }
    };

    if (isProductsOpen || isPlatformOpen || isResourcesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isProductsOpen, isPlatformOpen, isResourcesOpen]);

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-[24px]"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
      }}
    >
      <div className="relative">
        <div 
          ref={navRef}
          className="backdrop-blur-[10.2px] backdrop-filter bg-[rgba(14,17,22,0.5)] rounded-[16px] w-[948px]"
        >
          <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[24px] py-[20px] relative rounded-[inherit] w-[948px]">
            <Frame37 
              onProductsClick={toggleProducts} 
              isProductsOpen={isProductsOpen}
              onPlatformClick={togglePlatform}
              isPlatformOpen={isPlatformOpen}
              onResourcesClick={toggleResources}
              isResourcesOpen={isResourcesOpen}
            />
            <Frame33 />
          </div>
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(225,228,234,0.05)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.1)]" />
        </div>

        {/* Products Megamenu */}
        {isProductsOpen && (
          <div 
            ref={productsMegamenuRef}
            className="absolute top-[calc(100%+12px)] left-0 w-[948px] animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <Frame127 />
          </div>
        )}

        {/* Platform Megamenu */}
        {isPlatformOpen && (
          <div 
            ref={platformMegamenuRef}
            className="absolute top-[calc(100%+12px)] left-0 w-[948px] animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <PlatformMegaMenu />
          </div>
        )}

        {/* Resources Megamenu */}
        {isResourcesOpen && (
          <div 
            ref={resourcesMegamenuRef}
            className="absolute top-[calc(100%+12px)] left-0 w-[948px] animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <ResourcesMegaMenu />
          </div>
        )}
      </div>
    </div>
  );
}
