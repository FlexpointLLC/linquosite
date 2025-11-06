import { Globe, FrameCorners, Code, Lightning, SquaresFour, WifiHigh } from "@phosphor-icons/react";
import React from "react";

function PlatformItem({ icon: IconComponent, title, description, href }: { icon: React.ComponentType<any>; title: string; description: string; href: string }) {
  return (
    <a 
      href={href}
      className="content-stretch flex gap-[8px] items-center relative shrink-0 hover:opacity-80 transition-opacity"
    >
      <div className="bg-[#18191b] overflow-clip relative rounded-[8px] shrink-0 size-[40px]">
        <div className="absolute content-stretch flex items-center justify-center left-1/2 rounded-[8px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="IconSet">
          <div className="relative shrink-0 size-[20px]" data-name="Weight=Regular">
            <IconComponent size={20} weight="regular" color="#CACFD8" />
          </div>
        </div>
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] text-white tracking-[-0.0112px] w-full">
          <p className="leading-[20px]">{title}</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#99a0ae] text-[12px] w-full">
          <p className="leading-[16px]">{description}</p>
        </div>
      </div>
    </a>
  );
}

function PlatformsGrid() {
  return (
    <>
      <PlatformItem 
        icon={Globe} 
        title="Webflow" 
        description="Integrate seamlessly with Webflow sites."
        href="/platforms/webflow"
      />
      <PlatformItem 
        icon={FrameCorners} 
        title="Framer" 
        description="Add chat to your Framer projects."
        href="/platforms/framer"
      />
      <PlatformItem 
        icon={Code} 
        title="Next.js" 
        description="React-based integration for Next.js apps."
        href="/platforms/nextjs"
      />
      <PlatformItem 
        icon={Lightning} 
        title="React" 
        description="Lightweight React component library."
        href="/platforms/react"
      />
      <PlatformItem 
        icon={SquaresFour} 
        title="WordPress" 
        description="Plugin for WordPress websites."
        href="/platforms/wordpress"
      />
      <PlatformItem 
        icon={WifiHigh} 
        title="Wix" 
        description="Easy integration for Wix sites."
        href="/platforms/wix"
      />
    </>
  );
}

export default function PlatformsMegaMenu() {
  return (
    <div className="bg-[#0b0c0d] relative rounded-[12px] size-full">
      <div className="size-full">
        <div className="box-border content-stretch grid grid-cols-3 gap-[24px] overflow-clip p-[24px] relative size-full">
          <PlatformsGrid />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#18191b] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

