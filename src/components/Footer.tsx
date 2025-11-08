import { useEffect, useState } from "react";
import svgPaths from "../imports/svg-fhsvdwnz31";

function Logo() {
  return (
    <div
      className="absolute left-1/2 size-[32.415px] top-0 translate-x-[-50%]"
      data-name="Logo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 33 33"
      >
        <g clipPath="url(#clip0_1_7614)" id="Logo">
          <path
            clipRule="evenodd"
            d={svgPaths.p25738700}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Subtract"
          />
          <rect
            fill="var(--fill-0, white)"
            height="5.75106"
            id="Rectangle 42"
            rx="0.784235"
            transform="matrix(-0.999126 0.0417903 0.0417903 0.999126 17.3809 9.35156)"
            width="1.56847"
          />
          <rect
            fill="var(--fill-0, white)"
            height="5.75106"
            id="Rectangle 43"
            rx="0.784235"
            transform="matrix(-0.999126 0.0417903 0.0417903 0.999126 9.52734 9.73242)"
            width="1.56847"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_7614">
            <rect fill="white" height="32.415" width="32.415" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[32.415px]"
      data-name="Logo"
    >
      <Logo />
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#cacfd8] text-[12px] w-[min-content]">
        <p className="leading-[16px]">Connect the community</p>
      </div>
      <div
        className="bg-[#232830] box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shadow-[0px_0px_0px_1px_#363b43,0px_1px_3px_0px_rgba(143,143,143,0.2)] shrink-0"
        data-name="Button"
      >
        <div
          className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0"
          data-name="💠 Text"
        >
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-full">
            <p className="leading-[16px]">Join Community</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-[136px]">
      <Logo1 />
      <Frame123 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] tracking-[-0.08px] w-full">
      <a href="/use-cases/nextjs" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors cursor-pointer">
        <p className="leading-[20px]">Next.js Projects</p>
      </a>
      <a href="/use-cases/ecommerce" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors cursor-pointer">
        <p className="leading-[20px]">Ecommerce Projects</p>
      </a>
      <a href="/use-cases/shopify" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors cursor-pointer">
        <p className="leading-[20px]">Shopify Projects</p>
      </a>
      <a href="/integrations" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors cursor-pointer">
        <p className="leading-[20px]">Integrations</p>
      </a>
      <a href="/comparison" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors cursor-pointer">
        <p className="leading-[20px]">Comparison</p>
      </a>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[141px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[12px] w-full">
        <p className="leading-[16px] text-[rgba(202,207,216,0.5)]">Use Cases</p>
      </div>
      <Frame118 />
    </div>
  );
}

function Frame219() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] tracking-[-0.08px] w-full">
      <a href="/features/live-chat" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors cursor-pointer">
        <p className="leading-[20px]">Live Chat</p>
      </a>
      <a href="/features/customization" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors cursor-pointer">
        <p className="leading-[20px]">Full Customization</p>
      </a>
      <a href="/features/mobile-app" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors cursor-pointer">
        <p className="leading-[20px]">Mobile App</p>
      </a>
      <a href="/features/multi-language" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors cursor-pointer">
        <p className="leading-[20px]">Multi Language</p>
      </a>
      <a href="/features/ai-chatbot" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors cursor-pointer">
        <p className="leading-[20px]">AI Chat Bot</p>
      </a>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[141px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[12px] w-full">
        <p className="leading-[16px] text-[rgba(202,207,216,0.5)]">Support</p>
      </div>
      <Frame219 />
    </div>
  );
}

function Frame220() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] tracking-[-0.08px] w-full">
      <a href="/refund-policy" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors cursor-pointer">
        <p className="leading-[20px]">Refund Policy</p>
      </a>
      <a href="/terms-of-service" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors cursor-pointer">
        <p className="leading-[20px]">{`Terms & Conditions`}</p>
      </a>
      <a href="/privacy-policy" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors cursor-pointer">
        <p className="leading-[20px]">Privacy Policy</p>
      </a>
      <a href="/child-safety" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors cursor-pointer">
        <p className="leading-[20px]">Child Safety Standards</p>
      </a>
      <a href="/cookies-policy" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors cursor-pointer">
        <p className="leading-[20px]">Cookie Policy</p>
      </a>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[167px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[12px] w-full">
        <p className="leading-[16px] text-[rgba(202,207,216,0.5)]">Resources</p>
      </div>
      <Frame220 />
    </div>
  );
}

function Frame221() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] tracking-[-0.08px] w-full">
      <a href="/blog" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors cursor-pointer">
        <p className="leading-[20px]">Blogs</p>
      </a>
      <a href="/career" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors cursor-pointer">
        <p className="leading-[20px]">Career</p>
      </a>
      <a href="/changelog" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors cursor-pointer">
        <p className="leading-[20px]">Change log</p>
      </a>
      <a href="/partner" className="flex flex-col justify-center relative shrink-0 w-full hover:text-white transition-colors cursor-pointer">
        <p className="leading-[20px]">Become a partner</p>
      </a>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[167px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[12px] w-full">
        <p className="leading-[16px] text-[rgba(202,207,216,0.5)]">Company</p>
      </div>
      <Frame221 />
    </div>
  );
}

function Frame222() {
  return (
    <div className="content-stretch flex items-start justify-between w-[1100px] mx-auto">
      <Frame124 />
      <Frame119 />
      <Frame120 />
      <Frame121 />
      <Frame122 />
    </div>
  );
}

function Frame223() {
  return (
    <div className="relative h-[369px] w-[1440px] flex flex-col py-[66px]">
      <div className="relative flex-1 flex justify-center" style={{ zIndex: 1 }}>
        <Frame222 />
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] items-center not-italic text-[#cacfd8] text-[14px] text-nowrap tracking-[-0.08px]" style={{ zIndex: 1 }}>
        <p className="leading-[20px] whitespace-pre">
          © 2025 Flexpoint LLC
        </p>
      </div>
    </div>
  );
}

export default function Footer() {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      
      if (width < 768) {
        setIsMobile(true);
        setScale(width / 390);
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
    <div className="relative w-full overflow-visible mt-auto">
      {/* Full-width background - breaks out of any container */}
      <div 
        className="absolute top-0 bg-[#171b21]"
        style={{
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          width: '100vw',
          height: `${369 * scale}px`,
          zIndex: 0,
        }}
      />
      <div className="relative h-[369px] w-full" style={{ zIndex: 1 }}>
        <div className="flex justify-center relative h-full" style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}>
          <div className="relative" style={{ width: '1440px', height: '369px' }}>
            <Frame223 />
          </div>
        </div>
      </div>
    </div>
  );
}
